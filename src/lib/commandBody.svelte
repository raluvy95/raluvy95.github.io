<script lang="ts">
    import Prompt from "./Prompt.svelte";
</script>

<div class="prompt">
    <Prompt><slot name="command"></slot></Prompt>
</div>

<div class="output">
    <slot name="output"></slot>
</div>

<style lang="scss">
    .output {
        margin-bottom: 1rem;
        padding-left: 1rem;
    }
</style>
