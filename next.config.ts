import type { NextConfig } from "next";

const nextConfig: NextConfig = {
    images: {
        remotePatterns: [
            { protocol: "https", hostname: "**" }, // Cho phép load ảnh từ mọi nguồn (tiện cho dev)
        ],
    },
};

export default nextConfig;
