import { Inter } from "next/font/google";
import "./globals.css";
import About from "./about/page";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <nav>
          <ul className="flex gap-7">
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/about">About</Link>
            </li>
          </ul>
        </nav>
        <hr />
       
        {children}
        </body>
    </html>
  );
}
