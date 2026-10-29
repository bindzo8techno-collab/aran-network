import type { NextConfig } from "next";

const productSlugRedirects = [
  ["/products/cctv", "/products/cctv-camera-installation-trichy"],
  ["/products/video-door-phone", "/products/video-door-phone-trichy"],
  ["/products/vehicle-tracker", "/products/gps-vehicle-tracker-trichy"],
  ["/products/guard-patrolling", "/products/guard-patrol-system-trichy"],
  ["/products/biometrics", "/products/biometric-access-control-trichy"],
  ["/products/access-control", "/products/card-access-control-trichy"],
  [
    "/products/fingerprint-smart-locks",
    "/products/fingerprint-smart-locks-trichy",
  ],
  ["/products/boom-flap-barrier", "/products/boom-barrier-installation-trichy"],
  ["/products/burglar-alarm", "/products/burglar-alarm-system-trichy"],
  ["/products/fire-alarm-system", "/products/fire-alarm-system-trichy"],
  ["/products/metal-detector", "/products/metal-detectors-trichy"],
  ["/products/acousto-magnetic-eas", "/products/eas-anti-theft-system-trichy"],
  ["/products/intercom-system", "/products/intercom-systems-trichy"],
  ["/products/walkie-talkie", "/products/walkie-talkies-trichy"],
  [
    "/products/public-address-system",
    "/products/public-address-voice-alarm-system-trichy",
  ],
  ["/products/home-automation", "/products/home-automation-systems-trichy"],
  ["/products/digital-signage", "/products/digital-signage-solutions-trichy"],
  ["/products/it-products", "/products/it-networking-products-trichy"],
] as const;

const nextConfig: NextConfig = {
  /* config options here */
  cacheComponents: true,
  partialPrefetching: true,
  async redirects() {
    return productSlugRedirects.map(([source, destination]) => ({
      source,
      destination,
      permanent: true,
    }));
  },
  turbopack: {
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
};

export default nextConfig;
