import { DM_Sans } from "next/font/google";
import "@/styles/globals.css";
import type { AppProps } from "next/app";

const dmSans = DM_Sans({ subsets: ["latin"] });

export default function App({ Component, pageProps }: AppProps) {
  return (
    <main className={dmSans.className}>
      <Component {...pageProps} />
    </main>
  );
}
