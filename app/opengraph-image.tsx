import { ImageResponse } from "next/og";

export const alt = "NORD GARAGE — сервис европейских автомобилей";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    <div
      style={{
        alignItems: "stretch",
        background: "#0b0d0f",
        color: "#f2f3f4",
        display: "flex",
        flexDirection: "column",
        fontFamily: "Arial, sans-serif",
        height: "100%",
        justifyContent: "space-between",
        padding: "72px 82px",
        position: "relative",
        width: "100%",
      }}
    >
      <div
        style={{
          background:
            "linear-gradient(90deg, rgba(214,218,222,0.65), rgba(214,218,222,0))",
          display: "flex",
          height: 1,
          width: "100%",
        }}
      />

      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: 28,
          maxWidth: 900,
        }}
      >
        <div
          style={{
            color: "#aeb3b8",
            display: "flex",
            fontSize: 22,
            letterSpacing: "0.24em",
            textTransform: "uppercase",
          }}
        >
          Сервис европейских автомобилей
        </div>
        <div
          style={{
            display: "flex",
            fontSize: 94,
            fontWeight: 700,
            letterSpacing: "-0.045em",
            lineHeight: 0.95,
          }}
        >
          NORD GARAGE
        </div>
        <div
          style={{
            color: "#c6cacf",
            display: "flex",
            fontSize: 28,
            letterSpacing: "0.04em",
          }}
        >
          BMW · Mercedes-Benz · Audi · Volkswagen
        </div>
      </div>

      <div
        style={{
          alignItems: "center",
          display: "flex",
          gap: 18,
        }}
      >
        <div
          style={{
            border: "1px solid #747a80",
            borderRadius: 999,
            display: "flex",
            height: 22,
            width: 76,
          }}
        />
        <div
          style={{
            background: "#747a80",
            display: "flex",
            height: 1,
            width: 300,
          }}
        />
      </div>
    </div>,
    size,
  );
}
