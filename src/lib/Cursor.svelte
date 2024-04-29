<script lang="ts">
    export let noBlinking: boolean = false;
</script>

<span class={noBlinking ? "" : "blinking-cursor"}>▊</span>

<!-- Cursor.svelte -->
<style>
    .blinking-cursor {
        animation: blink 1.25s steps(1) infinite;
    }

    @keyframes blink {
        0%,
        100% {
            opacity: 0.75;
        }
        50% {
            opacity: 0;
        }
    }
</style>
