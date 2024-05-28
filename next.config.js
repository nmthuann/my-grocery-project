/** @type {import('next').NextConfig} */
const nextConfig = {
    // output: "export",

    images: {
        domains: [
            "tailwindui.com",
            "firebasestorage.googleapis.com",
            "res.cloudinary.com",
            "images.unsplash.com",
        ],
    },
};

module.exports = nextConfig;
