<script lang="ts">
    import { showPreferences } from "../showPreferences";
    import { fade } from "svelte/transition";
</script>

<div class="welcomeMessage" in:fade>
    Welcome to raluvy95.github.io!<br />
    This is CatNowBlue's personal website.<br />
    By the way, this page is
    <a href="https://github.com/raluvy95/raluvy95.github.io" target="_blank"
        >open source</a
    >. <br />
    You can change the color of this website
    <!-- svelte-ignore a11y-invalid-attribute -->
    <a
        href="#"
        on:click={() => {
            showPreferences.set(true);
        }}>here</a
    >.
</div>

<style>
    .welcomeMessage {
        margin-left: 1rem;
        margin-bottom: 1rem;
    }
</style>
