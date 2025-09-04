import createNextIntlPlugin from 'next-intl/plugin';

const withNextIntl = createNextIntlPlugin();

/** @type {import('next').NextConfig} */
const nextConfig = {

    images: {
        domains: ["res.cloudinary.com"], // ✅ allow Cloudinary
    },

};

export default withNextIntl(nextConfig);
