import { Source_Sans_3 } from "next/font/google";
import "./globals.css";

const inter = Source_Sans_3({ subsets: ["cyrillic"] });

export const metadata = {
  title: "Note App",
  description: "Created to manage your notes",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
