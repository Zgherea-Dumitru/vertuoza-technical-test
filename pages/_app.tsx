import { ApolloProvider } from "@apollo/client";
import { Outfit } from "next/font/google"
import client from "@/lib/apollo-client";
import "@/styles/globals.css";

import type { AppProps } from "next/app";

const outfit = Outfit({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-outfit",
})

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ApolloProvider client={client}>
      <main className={outfit.className}>
        <Component {...pageProps} />
      </main>
    </ApolloProvider>
  )
    ;
}
