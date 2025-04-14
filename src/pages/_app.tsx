import { DM_Sans } from "next/font/google";
import { Provider } from "@/components/ui/provider";

import "@/styles/globals.css";

import type { AppProps } from "next/app";

const dmSans = DM_Sans({ subsets: ["latin"] });

export default function App({ Component, pageProps }: AppProps) {
  return (
    <main className={dmSans.className}>
      <Provider>
        <Component {...pageProps} />
      </Provider>
    </main>
  );
}
