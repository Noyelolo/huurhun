export const metadata = {
  title: "Цэцэг бэлэг",
  description: "Цэцэг бэлэглэх анимацтай хуудас",
};

export default function RootLayout({ children }) {
  return (
    <html lang="mn">
      <body style={{ margin: 0, background: "#f3eee9" }}>{children}</body>
    </html>
  );
}
