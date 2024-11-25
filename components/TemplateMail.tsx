export default function TemplateMail({
  formData,
}: {
  formData: {
    name: string;
    email: string;
    serviceType: string;
    message: string;
    address: string;
    phone: string;
    eventId: string;
  };
}) {
  const keys = Object.keys(formData) as (keyof typeof formData)[];

  return (
    <div
      style={{
        fontFamily: "Arial, sans-serif",
        maxWidth: "600px",
        margin: "0 auto",
        borderRadius: "10px",
        border: "1px solid #f8f8f8",
      }}
    >
      <div style={{ textAlign: "center", padding: "20px 0" }}>
        {/* <img
          src="https://nutriblock.vercel.app/icon.png"
          alt="Logo"
          style={{ maxWidth: "200px" }}
        /> */}
        <h2 style={{ color: "#88AC4A", marginBottom: "20px" }}>@ailen.mkp</h2>
      </div>
      <div
        style={{
          backgroundColor: "#f8f8f8",
          padding: "20px",
          textAlign: "center",
        }}
      >
        <h2 style={{ color: "#333", marginBottom: "20px" }}>
          {"Nuevo maquillaje"}
        </h2>
        <br />
        <br />
        {keys.map((key) => (
          <div key={key}>
            <p style={{ color: "#666", lineHeight: "1.6" }}>
              {key}: {""}
              {formData[key]}
            </p>
            <br />
          </div>
        ))}
        <br />
        <br />
        <p style={{ color: "#666", lineHeight: "1.6" }}>
          No responder a este correo. Por consultas envía un correo a:{" "}
          <a
            href="mailto:ailen.cardozo81@gmail.com"
            style={{ color: "#007bff", textDecoration: "none" }}
          >
            ailen.cardozo81@gmail.com
          </a>
        </p>
      </div>
      <div
        style={{
          textAlign: "center",
          marginTop: "20px",
          color: "#999",
          fontSize: "12px",
        }}
      >
        <p>&copy; 2024 @AILEN.MKP. Todos los derechos reservados.</p>
      </div>
    </div>
  );
}
