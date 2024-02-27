import { ClerkProvider } from "@clerk/nextjs";
import { dark } from "@clerk/themes";
import "aos/dist/aos.css";
import { Architects_Daughter, Inter } from "next/font/google";
import "./css/style.css";
import "@/app/css/additional-styles/special-button.css";
import "@/app/css/additional-styles/loader.css";
import { Toaster } from "react-hot-toast";
import ProModalProvider from "@/providers/pro-modal-provider";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const architects_daughter = Architects_Daughter({
  subsets: ["latin"],
  variable: "--font-architects-daughter",
  weight: "400",
  display: "swap",
});

export const metadata = {
  title: "IntellicaNet",
  description: "IntellicaNet",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${architects_daughter.variable} font-inter antialiased bg-[#FFFFF] text-gray-200 tracking-tight`}
      >
        <ClerkProvider
          appearance={{
            baseTheme: dark,
            variables: { colorPrimary: "#4f46e5" },
          }}
        >
          <div className="flex flex-col min-h-screen overflow-hidden">
            <ProModalProvider />
            {children}
            <Toaster position="top-center" gutter={8} />
          </div>
        </ClerkProvider>
      </body>
    </html>
  );
}
