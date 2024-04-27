<script lang="ts">
    import type { MouseEventHandler } from "svelte/elements";

    export let label: string = "click me uwu";
    export let onClick: MouseEventHandler<HTMLButtonElement> = () => {};
</script>

<button on:click={onClick}>{label}</button>

<style lang="scss">
    button {
        background-color: var(--background);
        color: var(--foreground);
        border-color: var(--foreground);
        border-width: 3px;
        border-radius: 15px;
        border-style: solid;
        box-shadow: none;
        padding: 16px;
        font-family: "Fira Code";
        width: fit-content;
        cursor: pointer;

        &:hover {
            background-color: var(--foreground);
            color: var(--background);
        }
    }
</style>
