import { defineConfig } from "vite";
import sveltePreprocess from "svelte-preprocess";
import { svelte } from "@sveltejs/vite-plugin-svelte";
import path from "path";

export default defineConfig(({ command, mode }) => {
    const isProduction = mode === "production";

    return {
        resolve : {
            alias : {
                "src/" : `${path.resolve(__dirname, "src")}/`,
            },
        },
        plugins : [
            svelte({
                dev        : !isProduction,
                preprocess : sveltePreprocess.scss(),
            }),
        ],
    };
});
