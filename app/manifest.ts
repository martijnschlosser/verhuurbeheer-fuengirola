import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Verhuurbeheer Fuengirola",
    short_name: "VBE Fuengirola",
    description: "Fullservice verhuurbeheer en vastgoedbeheer in Fuengirola en aan Los Boliches.",
    start_url: "/",
    display: "standalone",
    background_color: "#ffffff",
    theme_color: "#071d3a",
    lang: "nl",
    icons: [{ src: "/vbs-logo-fuengirola.webp", sizes: "640x640", type: "image/webp" }],
  };
}
