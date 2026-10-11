import type { NextConfig } from "next";
import createMDX from "@next/mdx";

const nextConfig: NextConfig = {
  // A stray lockfile in the user home makes Next infer the wrong
  // workspace root; pin it to this project.
  output: "standalone",
  turbopack: {
    root: __dirname,
  },
  poweredByHeader: false,
  // Let `.md`/`.mdx` files be treated as pages/imports alongside TS/JS.
  pageExtensions: ["ts", "tsx", "js", "jsx", "md", "mdx"],
};

const withMDX = createMDX({
  options: {
    // String form is required so plugins work under Turbopack
    // (functions can't be passed across the JS/Rust boundary).
    remarkPlugins: ["remark-gfm"],
  },
});

export default withMDX(nextConfig);
