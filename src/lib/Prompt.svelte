<script lang="ts">
    export let username = "cnb";
    export let hostname = "kitty";
    let prompt = username + "@" + hostname;
    const re = new ResizeObserver(() => {
        const screen = document.documentElement.clientWidth;
        if (screen > 450) {
            prompt = username + "@" + hostname;
        } else if (screen < 450 && screen > 300) {
            prompt = username;
        } else if (screen <= 300) {
            prompt = "";
        }
    });

    re.observe(document.documentElement);
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
