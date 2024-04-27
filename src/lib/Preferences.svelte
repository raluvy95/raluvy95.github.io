<script lang="ts">
    export let showPreferences: boolean = false;

    const root = document.querySelector(":root");
    if (!root) {
        throw new Error(
            "Your browser doesn't handle :root css. Your browser must be suck.",
        );
    }
    const styleRoot = getComputedStyle(root);
    let primaryColor = styleRoot.getPropertyValue("--foreground");
    let secondaryColor = styleRoot.getPropertyValue("--secondary");
    let backgroundColor = styleRoot.getPropertyValue("--background");

    $: {
        styleRoot.setProperty("--foreground", primaryColor);
        styleRoot.setProperty("--secondary", secondaryColor);
        styleRoot.setProperty("--background", backgroundColor);
    }
</script>

<div class="articles">
    <!-- svelte-ignore a11y-missing-attribute -->
    <div class="header">
        <h1>Preferences</h1>
        <!-- svelte-ignore a11y-invalid-attribute -->
        <a
            href="#"
            on:click={() => {
                showPreferences = false;
            }}>close</a
        >
    </div>
    <div class="content">
        <div>
            <h3>Primary Color</h3>
            <input type="color" bind:value={primaryColor} />
        </div>
        <div>
            <h3>Secondary Color</h3>
            <input type="color" bind:value={secondaryColor} />
        </div>
        <div>
            <h3>Background Color</h3>
            <input type="color" bind:value={backgroundColor} />
        </div>
    </div>
</div>

<style lang="scss">
    .header {
        display: flex;
        align-items: center;
        justify-content: space-around;
    }

    .articles {
        position: absolute;
        background-color: var(--background);
        color: var(--foreground);
        width: 50vw;
        height: 80vh;
        top: 5%;
        left: 25%;
        z-index: 34;
        border-color: var(--foreground);
        border-radius: 15px;
        border-width: 3px;
        border-style: solid;
    }

    @media only screen and (max-width: 1000px) {
        .articles {
            width: 80vw;
            height: 80vh;
            left: 10%;
        }
    }

    @media only screen and (max-width: 492px) {
        .articles {
            width: 97vw;
            height: 99vh;
            top: 0;
            left: 0;
        }
    }

    @media only screen and (max-width: 492px) {
        * {
            font-size: 3vw;
        }
    }
</style>
