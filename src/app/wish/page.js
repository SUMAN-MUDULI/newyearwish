import { Suspense } from "react";
import WishClient from "./WishClient";

export default function WishPage() {
  return (
    <Suspense
      fallback={
        <div className="min-h-screen flex items-center justify-center bg-black text-white">
          Loading…
        </div>
      }
    >
      <WishClient />
    </Suspense>
  );
}
