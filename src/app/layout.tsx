import type { Metadata, Viewport } from "next";
import { Noto_Serif_KR, Noto_Sans_KR } from "next/font/google";
import Script from "next/script";
import "./globals.css";

const KAKAO_SDK_URL = `https://dapi.kakao.com/v2/maps/sdk.js?appkey=${process.env.NEXT_PUBLIC_KAKAO_APP_KEY}&autoload=false`;

const notoSerif = Noto_Serif_KR({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-serif",
});

const notoSans = Noto_Sans_KR({
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"],
  variable: "--font-sans",
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  minimumScale: 1,
  maximumScale: 1,
  userScalable: false,
};

export const metadata: Metadata = {
  metadataBase: new URL("https://mobile-wedding-invitation-iota.vercel.app"),
  title: "태식 ♥ 유림 청첩장",
  description: "우리의 소중한 날, 당신을 초대합니다.",
  openGraph: {
    title: "공태식 ♥ 민유림 결혼합니다",
    description: "2026년 12월 6일 일요일 오전 11시",
    images: [
      {
        url: "/image/MYL_0497.jpg",
        width: 1200,
        height: 630,
        alt: "모바일 청첩장",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko" className={`${notoSerif.variable} ${notoSans.variable}`}>
      <body className={notoSans.className}>
        <div className="container">
          {children}
        </div>
        <Script id="prevent-zoom" strategy="afterInteractive">{`
          document.addEventListener('touchmove', function(e) {
            if (e.touches.length > 1) e.preventDefault();
          }, { passive: false });
          document.addEventListener('gesturestart', function(e) {
            e.preventDefault();
          });
        `}</Script>
        <Script src={KAKAO_SDK_URL} strategy="beforeInteractive" />
        <Script src="https://t1.kakaocdn.net/kakao_js_sdk/2.7.2/kakao.min.js" strategy="afterInteractive" />
      </body>
    </html>
  );
}
