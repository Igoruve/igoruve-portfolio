import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  // Dominio de produccion. og:url y cualquier URL absoluta se derivan de aqui.
  site: "https://igoruve-portfolio-new.vercel.app",
  integrations: [
    // applyBaseStyles: false -> Tailwind no se inyecta en todas las paginas.
    // Llega solo a traves de Layout.astro, que importa src/styles/global.css
    // (ese archivo ya declara @tailwind base/components/utilities).
    // Asi las paginas sin Layout, como /casos/sistema-color, quedan aisladas.
    tailwind({ applyBaseStyles: false }),
  ],
});
