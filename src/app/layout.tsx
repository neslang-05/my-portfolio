import "./globals.css";
import { AuthProvider } from "@/context/AuthContext";
import { SiteDataProvider } from "@/context/SiteDataContext";

export const metadata = {
  title: "NILAMBAR ELANGBAM — DevOps & Full Stack Engineer",
  description: "DevOps Engineer & B.Tech CSE Graduate | CI/CD | Docker | Linux | Azure | IoT Systems",
  keywords: ["Nilambar Elangbam", "DevOps", "Docker", "Linux", "Azure", "Full Stack Developer", "IoT"],
  authors: [{ name: "Nilambar Elangbam" }],
  openGraph: {
    title: "NILAMBAR ELANGBAM — DevOps & Full Stack Engineer",
    description: "DevOps Engineer & B.Tech CSE Graduate | CI/CD | Docker | Linux | Azure | IoT Systems",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <body className="font-sans bg-black text-white min-h-screen">
        <AuthProvider>
          <SiteDataProvider>
            {children}
          </SiteDataProvider>
        </AuthProvider>
      </body>
    </html>
  );
}
