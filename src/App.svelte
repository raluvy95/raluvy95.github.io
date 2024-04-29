<script lang="ts">
    import { onMount } from "svelte";
    import Body from "./Body.svelte";

    onMount(() => {
        const root = document.querySelector(":root");
        if (!root) {
            throw new Error(
                "Your browser doesn't handle :root css. Your browser must be suck.",
            );
        }
        function loadFromLocalStorage(key: string) {
            const color = localStorage.getItem(key);
            if (!color) return;
            document.documentElement.style.setProperty(`--${key}`, color);
        }
        for (const e of ["foreground", "secondary", "background", "prompt"]) {
            loadFromLocalStorage(e);
        }
    });
</script>

<Body />
