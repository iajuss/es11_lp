import { ImageResponse } from "next/og";

export const runtime = "edge";

export const alt = "Felipe Soares — Estratégias patrimoniais com clareza";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          alignItems: "center",
          background: "#101e3a",
          color: "#f5f1e8",
          display: "flex",
          height: "100%",
          justifyContent: "center",
          overflow: "hidden",
          position: "relative",
          width: "100%",
        }}
      >
        <div
          style={{
            border: "2px solid #b28a32",
            borderRadius: "50%",
            height: 840,
            position: "absolute",
            right: -500,
            top: -300,
            width: 840,
          }}
        />
        <div
          style={{
            border: "1px solid #b28a32",
            borderRadius: "50%",
            height: 370,
            left: -240,
            position: "absolute",
            top: 430,
            width: 370,
          }}
        />
        <div
          style={{
            alignItems: "center",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            textAlign: "center",
            width: 630,
          }}
        >
          <div style={{ color: "#d1aa55", fontFamily: "Arial", fontSize: 19, letterSpacing: 5, marginBottom: 34 }}>
            ES11 CAPITAL
          </div>
          <div style={{ fontFamily: "Georgia", fontSize: 79, lineHeight: 1.06, marginBottom: 28 }}>
            Felipe Soares
          </div>
          <div style={{ color: "#f1ede3", fontFamily: "Arial", fontSize: 30, lineHeight: 1.3 }}>
            Estratégias patrimoniais<br />com clareza.
          </div>
        </div>
      </div>
    ),
    size,
  );
}
