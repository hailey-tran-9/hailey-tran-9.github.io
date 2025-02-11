// @ts-check
 
/** @type {import('next').NextConfig} */
// const nextConfig = {
//     output: "export",
// }
   
// module.exports = nextConfig;

module.exports = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'linkedin.com',
                port: '',
                pathname: '/in/hhytt/',
                search: '',
            },
            {
                protocol: 'https',
                hostname: 'github.com',
                port: '',
                pathname: '/hailey-tran-9',
                search: '',
            },
            {
                protocol: 'https',
                hostname: 'penguinies.itch.io',
                port: '',
                pathname: '/',
                search: '',
            },
            {
                protocol: 'https',
                hostname: 'img.itch.zone',
                port: '',
                pathname: '/aW1nLzE1OTUyNTY1LnBuZw==/315x250%23c/TdVGW7.png',
                search: '',
            },
            {
                protocol: 'https',
                hostname: 'img.itch.zone',
                port: '',
                pathname: '/aW1nLzE0MTU5NTE4LnBuZw==/315x250%23c/BUzHWL.png',
                search: '',
            },
        ],
    },
}