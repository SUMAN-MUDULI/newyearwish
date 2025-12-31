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
          fontFamily: "sans-serif",
          color: "white",
          position: "relative",
        }}
      >
        {/* Main Card */}
        <div
          style={{
            background: "rgba(0,0,0,0.6)",
            borderRadius: "32px",
            padding: "60px 80px",
            textAlign: "center",
            boxShadow: "0 40px 120px rgba(0,0,0,0.6)",
          }}
        >
          {/* Name */}
          <div
            style={{
              fontSize: 84,
              fontWeight: 900,
              letterSpacing: "-1px",
              marginBottom: 20,
            }}
          >
            🎆 {name}
          </div>

          {/* Emotional line */}
          <div
            style={{
              fontSize: 34,
              opacity: 0.9,
              marginBottom: 40,
            }}
          >
            Someone made this just for you 😱
          </div>

          {/* Fake CTA Button */}
          <div
            style={{
              display: "inline-block",
              padding: "22px 48px",
              borderRadius: "999px",
              background:
                "linear-gradient(90deg, #ff4d6d, #c77dff)",
              fontSize: 32,
              fontWeight: 700,
              boxShadow: "0 10px 40px rgba(199,125,255,0.6)",
            }}
          >
            👉 TAP TO OPEN 🎁
          </div>
        </div>

        {/* Footer hint */}
        <div
          style={{
            position: "absolute",
            bottom: 40,
            fontSize: 22,
            opacity: 0.6,
          }}
        >
          New Year Surprise ✨
        </div>
      </div>
    ),
    {
      width: 1200,
      height: 630,
    }
  );
}
