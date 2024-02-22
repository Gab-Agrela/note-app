import { Source_Sans_3 } from "next/font/google";
import "./globals.css";

const inter = Source_Sans_3({ subsets: ["cyrillic"] });

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <title>Note App</title>
        <meta name="description" content="Created to manage your notes" />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
