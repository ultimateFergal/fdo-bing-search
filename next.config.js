/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    NEXT_PUBLIC_API_KEY: '1de5a0b7f91948368a062c17dddaa611',
    NEXT_PUBLIC_API_SEARCH_ENDPOINT: 'https://api.bing.microsoft.com/v7.0/search',
    NEXT_PUBLIC_API_SUGGESTIONS_ENDPOINT: 'https://api.bing.microsoft.com/v7.0/suggestions',
  },
}

module.exports = nextConfig
