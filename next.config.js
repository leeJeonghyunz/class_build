/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  trailingSlash: true,
  generateBuildId: () => "class-build-deploy-project",

  // 아래 주소들만 아웃폴더에 만들어줘!(getserversideprops제외!)
  exportPathMap: () => {
    return {
      "/": { page: "/" },
      "/boards": { page: "/boards" },
      "/404": { page: "/404" },
    };
  },
};

module.exports = nextConfig;
