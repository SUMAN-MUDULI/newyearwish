import { ImageResponse } from "next/server";

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
          background: "linear-gradient(135deg, #0f0c29, #302b63, #24243e)",
          color: "white",
          fontSize: 80,
          fontWeight: 800,
          textAlign: "center",
          padding: "40px",
        }}
      >
        🎆 {name}, this is for YOU 😱
      </div>
    ),
    {
      width: 1200,
      height: 630,
    }
  );
}
