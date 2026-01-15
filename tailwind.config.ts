import type { Config } from "tailwindcss";

const config: Config = {
    content: [
        "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            colors: {
                hyper: {
                    blue: "#1d71b8", // Extracted from your logo
                    dark: "#0a0a0a",
                },
            },
        },
    },
    plugins: [],
};
export default config;