import type { Metadata } from "next";
import { Sora, Playfair_Display } from "next/font/google";
import "./globals.css";

const sora = Sora({
  variable: "--font-sora",
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700", "800"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "Trạm Cinema — Nơi lưu trữ những bộ phim bạn yêu thích",
  description: "Khám phá hàng trăm bộ phim mới nhất từ Việt Nam và quốc tế. Xem trailer, lọc theo thể loại, quốc gia và loại phim tại Trạm Cinema.",
  keywords: ["cinema", "phim", "trailer", "Trạm Cinema", "phim mới", "phim hay"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="vi">
      <body
        className={`${sora.variable} ${playfair.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
