import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import federation from "@originjs/vite-plugin-federation";

export default defineConfig({
  plugins: [
    react(),
    federation({
      name: "pokemonList",
      filename: "remoteEntry.js",
      exposes: {
        "./PokemonList": "./src/conponents/PokemonList",
        "./Pokemon": "./src/atoms/Pokemon.ts",
        "./MyTestComponent": "./src/conponents/MyTestComponent.tsx",
        "./Store": "./src/store/index.ts",
        "./useCount": "./src/atoms/Count.ts",
      },
      shared: [
        "react",
        "react-dom",
        "jotai",
        "@reduxjs/toolkit",
        "react-redux",
      ],
    }),
  ],
  build: {
    modulePreload: false,
    target: "esnext",
    minify: false,
    cssCodeSplit: false,
  },
});
