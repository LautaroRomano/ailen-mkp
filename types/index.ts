import { SVGProps } from "react";

export type IconSvgProps = SVGProps<SVGSVGElement> & {
  size: number | null;
};

export type EventType = {
  id: string;
  summary: string;
  start: {
    dateTime: string;
    timeZone?: string | null; // Permitir `null`
  };
  end: {
    dateTime: string;
    timeZone?: string | null; // Permitir `null`
  };
  creator: {
    email: string;
  };
  htmlLink: string;
};
