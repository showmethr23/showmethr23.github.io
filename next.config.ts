import type { NextConfig } from "next";

const nextConfig: NextConfig = {
    output: 'export',      // out 폴더 생성 (필수)
    trailingSlash: true,   // GitHub Pages 경로 문제 해결 (필수)
    images: {
        unoptimized: true,   // 이미지 최적화 끄기 (필수)
    },
};

export default nextConfig;