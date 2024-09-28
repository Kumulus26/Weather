import localFont from "next/font/local";
import "./globals.css";
import { config } from '@fortawesome/fontawesome-svg-core';
import '@fortawesome/fontawesome-svg-core/styles.css';
config.autoAddCss = false; 


const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata = {
  title: "Web météo",
  description : "Application météo",
};

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <head>
        <link 
          rel="preload" 
          href="https://fonts.googleapis.com/css2?family=Quicksand:wght@300..700&display=swap" 
          as="style" 
          onLoad="this.onload=null;this.rel='stylesheet'" 
        />
        <noscript>
          <link
            rel="stylesheet"
            href="https://fonts.googleapis.com/css2?family=Quicksand:wght@300..700&display=swap"
          />
        </noscript>
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
