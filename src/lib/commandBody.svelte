<script lang="ts">
    import Prompt from "./Prompt.svelte";
</script>

<div class="prompt">
    <Prompt><slot name="command"></slot></Prompt>
</div>

<div class="output">
    <slot name="output"></slot>
</div>
