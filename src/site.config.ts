import type { AstroExpressiveCodeOptions } from "astro-expressive-code";
import type { SiteConfig } from "@/types";

export const siteConfig: SiteConfig = {
  author: "iSamuel",

  date: {
    locale: "en-GB",
    options: {
      day: "numeric",
      month: "short",
      year: "numeric",
    },
  },

  description:
    "Astrotech-Games: Latest gaming news, in-depth game reviews, cutting-edge tech gadgets, and expert insights. Level up your gaming experience!",

  lang: "en-GB",
  ogLocale: "en_GB",
  title: "Astrotech-Games",

  // ✅ Correct site URL
  url: "https://rotechgames.vercel.app/",
};

/* =========================
   HEADER & FOOTER LINKS (Combined)
   ========================= */
// Official Cactus style uses one array for both header and footer
export const menuLinks: { path: string; title: string }[] = [
  { path: "/", title: "Home" },
  { path: "/tags/news", title: "News" },
  { path: "/tags/games", title: "Games" },
  { path: "/tags/gadgets", title: "Gadgets" },
  { path: "/about-us", title: "About Us" },
  { path: "/contact-us", title: "Contact Us" },
  { path: "/privacy", title: "Privacy Policy" },
  { path: "/terms-and-conditions", title: "Terms & Conditions" },
  { path: "/disclaimer", title: "Disclaimer" },
];

/* =========================
   EXPRESSIVE CODE
   ========================= */
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
      const altTheme = styleVariants.find(
        (v) => v.theme.type !== baseTheme?.type
      )?.theme;
      if (theme === baseTheme || theme === altTheme)
        return `[data-theme='${theme.type}']`;
    }
    return `[data-theme="${theme.name}"]`;
  },

  themes: ["dracula", "github-light"],
  useThemedScrollbars: false,
};
