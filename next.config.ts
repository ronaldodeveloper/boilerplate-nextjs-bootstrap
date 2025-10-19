import type { NextConfig } from "next";

const nextConfig: NextConfig = {
   sassOptions: {
        additionalData: `
        @import "@/styles/variables.scss";
        @import "@/styles/typography.scss";
    `,
    },
};


export default nextConfig;
