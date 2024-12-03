import { Html, Head, Main, NextScript } from "next/document";
import { ThemeProvider } from "@/lib/theme-provider"

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body className="antialiased">
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
        >
          <Main />
          <NextScript />
        </ThemeProvider>
      </body>
    </Html>
  );
}
