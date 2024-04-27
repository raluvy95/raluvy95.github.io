<script lang="ts">
    import Button from "./Button.svelte";

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

    window.onbeforeunload = () => {
        saveColor();
    };
    function saveColor() {
        localStorage.setItem("foreground", primaryColor);
        localStorage.setItem("secondary", secondaryColor);
        localStorage.setItem("background", backgroundColor);
    }

    function resetColor() {
        primaryColor = "#caf7ff";
        secondaryColor = "#70C9D9";
        backgroundColor = "#000";

        document.documentElement.style.setProperty(
            "--foreground",
            primaryColor,
        );
        document.documentElement.style.setProperty(
            "--secondary",
            secondaryColor,
        );
        document.documentElement.style.setProperty(
            "--background",
            backgroundColor,
        );
        saveColor();
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
                saveColor();
                showPreferences = false;
            }}>close</a
        >
    </div>
    <div class="content">
        <div class="child">
            <!-- ngl on firefox, it just shows up the color chooser -->
            <!-- i just want instant color -->
            <h3>Primary Color</h3>
            <input
                type="color"
                bind:value={primaryColor}
                on:input={() => {
                    document.documentElement.style.setProperty(
                        "--foreground",
                        primaryColor,
                    );
                }}
            />
        </div>
        <div class="child">
            <h3>Secondary Color</h3>
            <input
                type="color"
                bind:value={secondaryColor}
                on:input={() => {
                    document.documentElement.style.setProperty(
                        "--secondary",
                        secondaryColor,
                    );
                }}
            />
        </div>
        <div class="child">
            <h3>Background Color</h3>
            <input
                type="color"
                bind:value={backgroundColor}
                on:input={() => {
                    document.documentElement.style.setProperty(
                        "--background",
                        backgroundColor,
                    );
                }}
            />
        </div>
        <div class="child">
            <Button label="Reset color" onClick={resetColor}></Button>
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

    .content {
        display: flex;
        flex-direction: column;

        .child {
            display: flex;
            flex-direction: row;
            align-items: center;
            justify-content: space-between;
            padding: 20px;
        }
    }

    input[type="color"] {
        padding: 0;
        border: none;
        box-shadow: none;
        height: 32px;
        width: 32px;
        border-radius: 50%;
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
