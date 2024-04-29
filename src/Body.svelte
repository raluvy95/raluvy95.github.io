<script lang="ts">
    import Preferences from "./lib/Preferences.svelte";
    import Blog from "./lib/Blog.svelte";
    import CatFetch from "./modules/CatFetch.svelte";
    import Links from "./modules/Links.svelte";
    import Authors from "./modules/Authors.svelte";
    import Dd from "./modules/DD.svelte";
    import Welcome from "./modules/Welcome.svelte";
    import { showPreferences } from "./showPreferences";
    import { fade } from "svelte/transition";
    const modules = [Welcome, CatFetch, Links, Authors, Blog, Dd];
    let displayModules: any[] = [Welcome];
    let i: number = 1;
    const s = setInterval(() => {
        if (displayModules.length == modules.length) {
            clearInterval(s);
        }

        displayModules = [...displayModules, modules.at(i)];
        i++;
    }, 1600);
</script>

{#if $showPreferences}
    <Preferences />
{/if}

<article>
    {#each displayModules as mod}
        <div in:fade>
            <svelte:component this={mod}></svelte:component>
        </div>
    {/each}
</article>

<style lang="scss">
    article {
        border-width: 3px;
        border-style: solid;
        border-color: var(--prompt);
        border-radius: 15px;
        align-items: left;
        position: absolute;
        top: 8px;
        bottom: 8px;
        left: 8px;
        right: 8px;
        padding: 1rem;
        padding-left: 0;
        overflow: scroll;
        overflow-x: hidden;
    }

    /* width */
    ::-webkit-scrollbar {
        width: 6px;
        display: hidden;
    }

    /* Track */
    ::-webkit-scrollbar-track {
        background: var(--foreground);
        border-radius: 25px;
    }

    /* Handle */
    ::-webkit-scrollbar-thumb {
        background: #888;
        border-radius: 40px;
    }

    /* Handle on hover */
    ::-webkit-scrollbar-thumb:hover {
        display: show;
        background: var(--secondary);
    }
</style>
