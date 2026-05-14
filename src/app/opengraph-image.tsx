import { ImageResponse } from "next/og";

export const dynamic = "force-static";
export const alt = "Verbatim | For messages too important to hand to a chatbot";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          background:
            "linear-gradient(135deg, #fbfaf7 0%, #f8f7ff 48%, #eef6ff 100%)",
          color: "#101828",
          padding: 72,
          position: "relative",
          overflow: "hidden",
          fontFamily: "Inter, Arial, sans-serif",
        }}
      >
        <div
          style={{
            position: "absolute",
            width: 520,
            height: 520,
            borderRadius: 999,
            background: "rgba(79, 70, 229, 0.18)",
            top: -160,
            right: -80,
          }}
        />
        <div
          style={{
            position: "absolute",
            width: 420,
            height: 420,
            borderRadius: 999,
            background: "rgba(20, 184, 166, 0.16)",
            bottom: -180,
            left: 120,
          }}
        />
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            width: "100%",
          }}
        >
          <div style={{ fontSize: 34, fontWeight: 700, letterSpacing: 0 }}>
            Verbatim
          </div>
          <div style={{ display: "flex", gap: 56, alignItems: "flex-end" }}>
            <div
              style={{
                maxWidth: 720,
                display: "flex",
                flexDirection: "column",
              }}
            >
              <div
                style={{
                  fontSize: 78,
                  lineHeight: 0.94,
                  fontWeight: 800,
                  letterSpacing: 0,
                }}
              >
                For messages too important to hand to a chatbot.
              </div>
              <div
                style={{
                  fontSize: 28,
                  lineHeight: 1.35,
                  color: "#475467",
                  marginTop: 28,
                }}
              >
                Guided context, recipient fit, strategy, critique, and voice.
              </div>
            </div>
            <div
              style={{
                width: 300,
                display: "flex",
                flexDirection: "column",
                border: "1px solid rgba(15, 23, 42, 0.1)",
                borderRadius: 28,
                background: "rgba(255,255,255,0.72)",
                padding: 24,
                boxShadow: "0 24px 80px rgba(15, 23, 42, 0.12)",
              }}
            >
              {["Context", "Strategy", "Recipient fit", "Critique"].map((item) => (
                <div
                  key={item}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: 12,
                    fontSize: 22,
                    marginBottom: 18,
                    color: "#243044",
                  }}
                >
                  <span
                    style={{
                      width: 12,
                      height: 12,
                      borderRadius: 999,
                      background: "#4f46e5",
                    }}
                  />
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    ),
    size,
  );
}
