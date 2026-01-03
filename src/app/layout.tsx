import "./globals.css";
import { JetBrains_Mono, Inter } from "next/font/google";
import { AuthProvider } from "@/context/AuthContext";
import { SiteDataProvider } from "@/context/SiteDataContext";

const inter = Inter({ 
  subsets: ["latin"],
  variable: "--font-inter",
});

const jetbrainsMono = JetBrains_Mono({ 
  subsets: ["latin"],
  variable: "--font-mono",
});

export const metadata = {
  title: "Nilambar Elangbam — Developer",
  description: "Computer Science Engineering Student | IoT Developer | Full Stack Web Developer",
  keywords: ["Nilambar Elangbam", "Developer", "IoT", "Web Development", "Computer Science"],
  authors: [{ name: "Nilambar Elangbam" }],
  openGraph: {
    title: "Nilambar Elangbam — Developer",
    description: "Computer Science Engineering Student | IoT Developer | Full Stack Web Developer",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <body className={`${inter.variable} ${jetbrainsMono.variable} font-sans bg-black text-white min-h-screen`}>
        <AuthProvider>
          <SiteDataProvider>
            {children}
          </SiteDataProvider>
        </AuthProvider>
      </body>
    </html>
  );
}

