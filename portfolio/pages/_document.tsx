import React from "react";
import Document, { Html, Head, Main, NextScript } from "next/document";
import { getCssText } from "@styles/stitches";
class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <style
            id="stitches"
            dangerouslySetInnerHTML={{ __html: getCssText() }}
          />
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link
            href="https://fonts.googleapis.com/css2?family=Londrina+Shadow&display=swap"
            rel="stylesheet"
          ></link>
          <link
            href="https://fonts.googleapis.com/css2?family=Londrina+Outline&display=swap"
            rel="stylesheet"
          ></link>
          <link
            rel="preconnect"
            href="https://fonts.gstatic.com"
            crossOrigin="true"
          />
          <link
            href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600&display=swap"
            rel="stylesheet"
          />
        </Head>
        <body>
          <Main />
          <NextScript />
          <div id="modal"></div>
        </body>
      </Html>
    );
  }
}
export default MyDocument;
