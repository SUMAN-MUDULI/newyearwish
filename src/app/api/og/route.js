import { ImageResponse } from "next/og";

export const runtime = "edge";

export async function GET(request) {
  const { searchParams } = new URL(request.url);
  const name = searchParams.get("to") || "Friend";

  return new ImageResponse(
    (
      <div
        style={{
          width: "1200px",
          height: "630px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background:
            "radial-gradient(circle at top, #3a1c71, #000000)",
          color: "#ffffff",
          fontFamily: "Arial, Helvetica, sans-serif",
        }}
      >
        {/* CARD */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            padding: "64px 80px",
            borderRadius: "36px",
            background: "rgba(0,0,0,0.6)",
            boxShadow: "0 40px 120px rgba(0,0,0,0.7)",
            border: "2px solid rgba(255,255,255,0.15)",
          }}
        >
          {/* Spark emoji */}
          <div style={{ display: "flex", fontSize: "42px", marginBottom: "12px" }}>
            ✨
          </div>

          {/* NAME */}
          <div
            style={{
              display: "flex",
              fontSize: "86px",
              fontWeight: 900,
              letterSpacing: "-1px",
              marginBottom: "20px",
              textShadow: "0 0 30px rgba(255,200,255,0.6)",
            }}
          >
            {name}
          </div>

          {/* Curiosity line */}
          <div
            style={{
              display: "flex",
              fontSize: "34px",
              opacity: 0.92,
              marginBottom: "36px",
            }}
          >
            Someone made this just for you 😱
          </div>

          {/* CTA BUTTON */}
          <div
            style={{
              display: "flex",
              padding: "22px 56px",
              borderRadius: "999px",
              background:
                "linear-gradient(90deg, #ff4d6d, #c77dff)",
              fontSize: "32px",
              fontWeight: 800,
              boxShadow: "0 12px 40px rgba(199,125,255,0.7)",
            }}
          >
            👉 TAP TO OPEN 🎁
          </div>
        </div>
      </div>
    ),
    {
      width: 1200,
      height: 630,
    }
  );
}
