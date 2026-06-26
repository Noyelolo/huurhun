import { Suspense } from "react";
import FlowerGift from "./components/FlowerGift";

export default function Page({ searchParams }) {
  const recipient = searchParams?.to || "Танд";
  const message =
    searchParams?.msg || "Өдөр бүр чинь энэ цэцэг шиг дэлбээлэх болтугай";
  const signature = searchParams?.from || "";

  return (
    <main
      style={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "1.5rem",
      }}
    >
      <div style={{ width: "100%", maxWidth: 520 }}>
        <Suspense>
          <FlowerGift
            recipient={recipient}
            message={message}
            signature={signature}
          />
        </Suspense>
      </div>
    </main>
  );
}
