import React from "react";
import { DocsThemeConfig } from "nextra-theme-docs";
import everfnLogo from "./statics/everfn.webp";
import Image from "next/image";

const config: DocsThemeConfig = {
  logo: <Image src={everfnLogo} alt="Everfn Logo" width={48} height={48} />,
  head: (
    <>
      <link rel="icon" href={everfnLogo.src} />
      <title>Block X 在线手册</title>
    </>
  ),
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
