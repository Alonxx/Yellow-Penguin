import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";

const inter = Poppins({
  weight: ["400", "500", "700"],

  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Yellow Penguin",
  description: "Yellow Penguin",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en " className="dark">
      <body className={inter.className}>
        {children}
        {/*         <footer className="bg-[#e6e6ec] bottom-0 w-full pb-1">
          <h1 className="text-[#cbd1d9] sm:text-xl text-center font-semibold tracking-[0.5em]">
            YELLOW PENGUIN
          </h1>
        </footer> */}
      </body>
    </html>
  );
}
