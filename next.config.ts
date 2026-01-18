import type { NextConfig } from "next";

const nextConfig: NextConfig = {
    images: {
        remotePatterns: [
            { protocol: "https", hostname: "**" }, // Cho phép load ảnh từ mọi nguồn (tiện cho dev)
        ],
        qualities: [75, 95], // Thêm quality 95 để hỗ trợ banner với chất lượng cao
    },
};

export default nextConfig;
