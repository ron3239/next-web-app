import { Inter } from "next/font/google";
import '../style/globals.css';
import Script from "next/script";


const inter = Inter({ subsets: ["latin"] });


export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {

  return (
    <html lang="en">
      <head>
      <Script  src="https://telegram.org/js/telegram-web-app.js" strategy="beforeInteractive"/>
      </head>
      <body className='{inter.className} bg-gradient-to-r from-[#232526] to-[#414345]'>
        {children}
      </body>

    </html>
  )
};
