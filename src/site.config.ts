import type { AstroExpressiveCodeOptions } from "astro-expressive-code";
import type { SiteConfig } from "@/types";

export const siteConfig: SiteConfig = {
  // Used as both a meta property (src/components/BaseHead.astro L:31 + L:49) & the generated satori png (src/pages/og-image/[slug].png.ts)
  author: "iSamuel",
  // Date.prototype.toLocaleDateString() parameters, found in src/utils/date.ts.
  date: {
    locale: "en-GB",
    options: {
      day: "numeric",
      month: "short",
      year: "numeric",
    },
  },
  // Used as the default description meta property and webmanifest description
  description: "Astrotech-Games: Latest gaming news, in-depth game reviews, cutting-edge tech gadgets, and expert insights. Level up your gaming experience!",
  // HTML lang property, found in src/layouts/Base.astro L:18 & astro.config.ts L:48
  lang: "en-GB",
  // Meta property, found in src/components/BaseHead.astro L:42
  ogLocale: "en_GB",
  /* 
    - Used to construct the meta title property found in src/components/BaseHead.astro L:11 
    - The webmanifest name found in astro.config.ts L:42
    - The link value found in src/components/layout/Header.astro L:35
    - In the footer found in src/components/layout/Footer.astro L:12 (but we'll override footer links)
  */
  title: "Astrotech-Games",
  // Use your actual deployed Vercel domain
  url: "https://rotechgames.vercel.app/",
};

// Links ONLY for the top navigation (Header)
// These appear in the menu (News, Games, Gadgets) – no About/Contact/legal here
export const menuLinks: { path: string; title: string }[] = [
  { path: "/", title: "Home" },             // optional – remove if you don't want Home in top nav
  { path: "/tags/news", title: "News" },
  { path: "/tags/games", title: "Games" },
  { path: "/tags/gadgets", title: "Gadgets" },
];

// https://expressive-code.com/reference/configuration/
export const expressiveCodeOptions: AstroExpressiveCodeOptions = {
  styleOverrides: {
    borderRadius: "4px",
    codeFontFamily:
      'ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace',
    codeFontSize: "0.875rem",
    codeLineHeight: "1.7142857rem",
    codePaddingInline: "1rem",
    frames: {
      frameBoxShadowCssValue: "none",
    },
    uiLineHeight: "inherit",
  },
  themeCssSelector(theme, { styleVariants }) {
    if (styleVariants.length >= 2) {
      const baseTheme = styleVariants[0]?.theme;
      const altTheme = styleVariants.find((v) => v.theme.type !== baseTheme?.type)?.theme;
      if (theme === baseTheme || theme === altTheme) return `[data-theme='${theme.type}']`;
    }
    return `[data-theme="${theme.name}"]`;
  },
  themes: ["dracula", "github-light"],
  useThemedScrollbars: false,
};
