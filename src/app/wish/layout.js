export async function generateMetadata({ searchParams }) {
  const to = searchParams?.to || "Friend";

  return {
    title: "",
    description: "",
    openGraph: {
      title: "",
      description: "",
      images: [
        {
          url: `https://newyearwishesss.vercel.app/api/og?to=${encodeURIComponent(to)}`,
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
