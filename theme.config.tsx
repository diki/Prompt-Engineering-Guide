import React from "react";
import { DocsThemeConfig } from "nextra-theme-docs";
import { useConfig } from "nextra-theme-docs";

const config: DocsThemeConfig = {
  logo: (
    <>
<svg width="32pt" height="32pt" version="1.1" viewBox="0 0 700 700" xmlns="http://www.w3.org/2000/svg" style={{ marginTop: 8 }}>
 <g>
  <path d="m545.65 87.5h-391.3c-13.074 0.046875-25.602 5.2617-34.848 14.504-9.2422 9.2461-14.457 21.773-14.504 34.848v108.15c0 6.2539 3.3359 12.031 8.75 15.156s12.086 3.125 17.5 0 8.75-8.9023 8.75-15.156v-108.15c0-3.8086 1.5117-7.457 4.2031-10.148s6.3398-4.2031 10.148-4.2031h391.3c3.8086 0 7.457 1.5117 10.148 4.2031s4.2031 6.3398 4.2031 10.148v286.3c0 3.8086-1.5117 7.457-4.2031 10.148s-6.3398 4.2031-10.148 4.2031h-391.3c-3.8086 0-7.457-1.5117-10.148-4.2031s-4.2031-6.3398-4.2031-10.148v-73.148c0-6.2539-3.3359-12.031-8.75-15.156s-12.086-3.125-17.5 0-8.75 8.9023-8.75 15.156v73.148c0.046875 13.074 5.2617 25.602 14.504 34.848 9.2461 9.2422 21.773 14.457 34.848 14.504h391.3c13.074-0.046875 25.602-5.2617 34.848-14.504 9.2422-9.2461 14.457-21.773 14.504-34.848v-286.3c-0.046875-13.074-5.2617-25.602-14.504-34.848-9.2461-9.2422-21.773-14.457-34.848-14.504z"/>
  <path d="m197.57 379.93c3.2852 3.3125 7.7578 5.1758 12.426 5.1758s9.1406-1.8633 12.426-5.1758l87.5-87.5c3.3125-3.2852 5.1758-7.7578 5.1758-12.426s-1.8633-9.1406-5.1758-12.426l-87.5-87.5c-4.4414-4.4375-10.91-6.1719-16.973-4.5469-6.0664 1.625-10.801 6.3594-12.426 12.426-1.625 6.0625 0.10938 12.531 4.5469 16.973l75.25 75.074-75.25 75.074c-3.3125 3.2852-5.1758 7.7578-5.1758 12.426s1.8633 9.1406 5.1758 12.426z"/>
  <path d="m332.5 385h157.5c6.2539 0 12.031-3.3359 15.156-8.75s3.125-12.086 0-17.5-8.9023-8.75-15.156-8.75h-157.5c-6.2539 0-12.031 3.3359-15.156 8.75s-3.125 12.086 0 17.5 8.9023 8.75 15.156 8.75z"/>
 </g>
</svg>
      <span style={{ marginLeft: ".4em", fontWeight: 800 }}>promptly.ink</span>
    </>
  ),
  i18n: [
    { locale: "en", text: "English" },
    { locale: "zh", text: "中文" },
    { locale: "jp", text: "日本語" },
    { locale: "pt", text: "Português" },
    { locale: "tr", text: "Türkçe" },
  ],
  head: function UseHead() {
    const { title } = useConfig();
    return (
      <>
        <title>
          {"promptly.ink" + " | Prompt Engineering and AI Prompt Guide"}{" "}
        </title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta
          property="og:title"
          content="Prompt Engineering and AI Prompt Guide"
        />
        <meta
          property="og:description"
          content="A Comprehensive Overview of Prompt Engineering"
        />
        <meta name="og:title" content={"promptly.ink" + " | AI Prompt Guide"} />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
        <meta name="msapplication-TileColor" content="#da532c" />
        <meta name="theme-color" content="#ffffff"></meta>
        {/* <link rel="icon" href="/144-favicon.svg" type="image/svg+xml" />

        <link
          rel="icon"
          href="/144-favicon-dark.svg"
          type="image/svg+xml"
          media="(prefers-color-scheme: dark)"
        /> */}
      </>
    );
  },
  // project: {
  //   link: 'https://github.com/dair-ai/Prompt-Engineering-Guide',
  // },
  // chat: {
  //   link: 'https://discord.gg/SKgkVT8BGJ',
  // },
  // docsRepositoryBase: 'https://github.com/dair-ai/Prompt-Engineering-Guide/tree/main/',
  // footer: {
  //   text: 'Copyright © 2023 DAIR.AI',
  // },
};

export default config;
