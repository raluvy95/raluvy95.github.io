<script lang="ts">
    export let prompt = "cnb@kitty ";
</script>

<div class="cmd">
    <div class="prompt">
        <span class="hostname">
            {prompt}
            <span class="arrow"></span></span
        >
        <span class="directory">
            ~ <span class="arrow"></span>
        </span>
    </div>
    <slot></slot>
</div>

<!-- what svg, we have  kinda cool isn't it? -->

<style lang="scss">
    .cmd {
        display: flex;
        flex-wrap: wrap;
        word-break: break-all;
        margin-bottom: 1rem;
        gap: 0.6rem;
    }

    .prompt {
        display: flex;
    }

    .hostname {
        color: var(--background);
        background-color: var(--foreground);
        padding-left: 1rem;
        .arrow {
            color: var(--foreground);
            background-color: var(--secondary); // good enough
        }
    }

    .directory {
        color: var(--background);
        background-color: var(--secondary);
        padding-left: 0.6rem;
        .arrow {
            color: var(--secondary);
            background-color: var(--background);
        }
    }
</style>
