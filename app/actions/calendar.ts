"use server";
import { google } from "googleapis";
import { Resend } from "resend";

import { EventType } from "@/types";
import TemplateMail from "@/components/TemplateMail";

const resend = new Resend(process.env.RESEND_APIKEY);

export const getCitas = async () => {
  try {
    // Autenticación con cliente JWT
    const auth = new google.auth.JWT({
      email: process.env.CLIENT_EMAIL,
      key: process.env.PRIVATE_KEY,
      scopes: ["https://www.googleapis.com/auth/calendar"],
    });

    // Inicializar el cliente del API de Google Calendar
    const calendar = google.calendar({ version: "v3", auth });

    // Obtener eventos del calendario
    const events = await calendar.events.list({
      calendarId:
        "549a7ecda40d8f6552f0427c1a24798b0672b89cdb88eb28e59c04c6c6b93dbc@group.calendar.google.com",
      timeMin: new Date().toISOString(),
      maxResults: 10,
      singleEvents: true,
      orderBy: "startTime",
    });

    // Transformar los eventos a EventType
    const eventItems = events.data.items || [];
    const citas: EventType[] = eventItems.map((event) => ({
      id: event.id || "",
      summary: event.summary || "",
      start: {
        dateTime: event.start?.dateTime || "",
        timeZone: event.start?.timeZone,
      },
      end: {
        dateTime: event.end?.dateTime || "",
        timeZone: event.end?.timeZone,
      },
      creator: {
        email: event.creator?.email || "",
      },
      htmlLink: event.htmlLink || "",
    }));

    return citas;
  } catch (error) {
    console.log("🚀 ~ getCitas ~ error:", error);

    return null;
  }
};

export const createCita = async (
  event: EventType,
  formData: {
    name: string;
    email: string;
    serviceType: string;
    message: string;
    address: string;
    phone: string;
    eventId: string;
  },
) => {
  try {
    // Autenticación con cliente JWT
    const auth = new google.auth.JWT({
      email: process.env.CLIENT_EMAIL,
      key: process.env.PRIVATE_KEY,
      scopes: ["https://www.googleapis.com/auth/calendar"],
    });

    const calendar = google.calendar({ version: "v3", auth });

    // IDs de los calendarios
    const sourceCalendarId =
      "549a7ecda40d8f6552f0427c1a24798b0672b89cdb88eb28e59c04c6c6b93dbc@group.calendar.google.com";
    const targetCalendarId =
      "a26a815a8f2c9508f3a155761273b62af75f89c196d01da1a6ba97e7b93355ab@group.calendar.google.com";

    // Borrar el evento del calendario original
    await calendar.events.delete({
      calendarId: sourceCalendarId,
      eventId: event.id,
    });
    console.log(
      `Evento eliminado del calendario ${sourceCalendarId}: ${event.id}`,
    );

    // Crear el evento en el nuevo calendario
    const newEvent = {
      summary: formData.name,
      description: event.htmlLink,
      start: event.start,
      end: event.end,
    };

    const createdEvent = await calendar.events.insert({
      calendarId: targetCalendarId,
      requestBody: newEvent,
    });

    console.log(
      `Evento creado en el calendario ${targetCalendarId}: ${createdEvent.data.id}`,
    );

    await resend.emails.send({
      from: "no-reply@lemonpad.app",
      to: "ailen.cardozo@gmail.com",
      subject: "Nueva cita agendada para maquillaje",
      react: TemplateMail({ formData }),
    });

    return { success: true, createdEvent: createdEvent.data };
  } catch (error) {
    console.log("🚀 ~ createCita ~ error:", error);

    return { error: "Ocurrió un error al crear la cita." };
  }
};
