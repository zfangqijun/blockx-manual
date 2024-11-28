import React from "react";
import { DocsThemeConfig } from "nextra-theme-docs";
import everfnLogo from "./statics/everfn.webp";
import Image from "next/image";
import { useConfig } from "nextra-theme-docs";

const config: DocsThemeConfig = {
  logo: (
    <span
      style={{
        fontFamily: "monospace",
        fontWeight: "bold",
      }}
    >
      Block X 在线手册
    </span>
  ),
  head: () => {
    const { title } = useConfig();
    return (
      <>
        <link rel="icon" href={everfnLogo.src} />
        <title>{title}</title>
      </>
    );
  },
  footer: {
    text: "© 2024-2025 永动方程",
  },
  editLink: {
    component: ({ filePath }) => null,
  },
  feedback: {
    content: null,
  },
};

export default config;
