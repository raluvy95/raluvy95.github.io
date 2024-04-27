<script lang="ts">
    const prompt = "cnb@kitty ";
</script>

<div class="prompt">
    <span class="hostname">&nbsp;{prompt} <span class="arrow"></span></span>
    <span class="directory"> ~ <span class="arrow"></span> </span>
    <span class="command"><slot></slot></span>
</div>

<!-- what svg, we have  kinda cool isn't it? -->

<style lang="scss">
    .prompt {
        display: flex;
    }

    .hostname {
        color: var(--background);
        background-color: var(--foreground);

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

    .command {
        padding-left: 0.6rem;
        color: var(--foreground);
        background-color: var(--background);
    }
</style>
