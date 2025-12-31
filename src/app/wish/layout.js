export async function generateMetadata({ searchParams }) {
  const to = searchParams?.to || "Friend";

  return {
    title: "A Special Surprise 🎁",
    description: "Someone made something special just for you 😱 Tap to open!",
    openGraph: {
      title: "A Special Surprise 🎁",
      description: "Tap to open your surprise now ✨",
      images: [
        {
          url: `https://newyearwish-kohl.vercel.app/api/og?to=${encodeURIComponent(
            to
          )}`,
          width: 1200,
          height: 630,
        },
      ],
      type: "website",
    },
  };
}

export default function WishLayout({ children }) {
  return children;
}
