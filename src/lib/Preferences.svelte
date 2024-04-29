<script lang="ts">
    import { showPreferences } from "../showPreferences";
    import Button from "./Button.svelte";
    import ProfileColor from "./ProfileColor.svelte";
    import { avaliableProfileColors } from "./profileColor";
    const root = document.querySelector(":root");
    if (!root) {
        throw new Error(
            "Your browser doesn't handle :root css. Your browser must suck.",
        );
    }
    const styleRoot = getComputedStyle(root);
    let promptColor = styleRoot.getPropertyValue("--prompt");
    let primaryColor = styleRoot.getPropertyValue("--foreground");
    let secondaryColor = styleRoot.getPropertyValue("--secondary");
    let backgroundColor = styleRoot.getPropertyValue("--background");

    window.onbeforeunload = () => {
        saveColor();
    };
    function saveColor() {
        localStorage.setItem("prompt", promptColor);
        localStorage.setItem("foreground", primaryColor);
        localStorage.setItem("secondary", secondaryColor);
        localStorage.setItem("background", backgroundColor);
    }

    function resetColor() {
        promptColor = "#caf7ff";
        primaryColor = "#caf7ff";
        secondaryColor = "#70C9D9";
        backgroundColor = "#000";

        document.documentElement.style.setProperty("--prompt", promptColor);
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
    let overPrefs: boolean;
</script>

<!-- what a nice class name -->
<!-- svelte-ignore a11y-click-events-have-key-events -->
<!-- svelte-ignore a11y-no-static-element-interactions -->
<div
    on:click={() => {
        if (overPrefs) return;
        saveColor();
        showPreferences.set(false);
    }}
    class="kys"
></div>
<!-- svelte-ignore a11y-no-static-element-interactions -->
<div
    class="articles"
    on:mouseenter={() => {
        overPrefs = true;
    }}
    on:mouseleave={() => {
        overPrefs = false;
    }}
>
    <!-- svelte-ignore a11y-missing-attribute -->
    <div class="header">
        <button class="reset" on:click={resetColor}>Reset color</button>
        <h1>Preferences</h1>
        <!-- svelte-ignore a11y-invalid-attribute -->
        <Button
            label="Close"
            onClick={() => {
                saveColor();
                showPreferences.set(false);
            }}
        ></Button>
    </div>
    <div class="content">
        <div class="child">
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
            <h3>Prompt And Border Color</h3>
            <input
                type="color"
                bind:value={promptColor}
                on:input={() => {
                    document.documentElement.style.setProperty(
                        "--prompt",
                        promptColor,
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
    </div>
    <hr />
    <h2 style="padding-left: 1rem;">Preset Themes</h2>
    <div class="profiles">
        {#each avaliableProfileColors.sort( (a, b) => a.name.localeCompare(b.name), ) as p}
            <ProfileColor
                bind:promptColor
                bind:primaryColor
                bind:secondaryColor
                bind:backgroundColor
                profile={p}
            ></ProfileColor>
        {/each}
    </div>
</div>

<style lang="scss">
    .kys {
        position: absolute;
        left: 0;
        right: 0;
        top: 0;
        bottom: 0;
        background-color: #000000a0;
        z-index: 2137;
    }

    .reset {
        border-color: #caf7ff;
        color: #caf7ff;
        background-color: #000;
        border-width: 3px;
        border-radius: 15px;
        border-style: solid;
        box-shadow: none;
        padding: 16px;
        font-family: "Fira Code";
        width: fit-content;
        cursor: pointer;

        &:hover {
            background-color: #caf7ff;
            color: #000;
        }
    }

    .header {
        display: flex;
        align-items: center;
        justify-content: space-between;
        height: 54px;
    }

    .articles {
        left: 0;
        z-index: 69420;
        padding: 1rem;
        overflow: scroll;
        position: absolute;
        background-color: var(--background);
        color: var(--foreground);
        top: 5%;
        border-color: var(--prompt);
        border-radius: 15px;
        border-width: 3px;
        border-style: solid;
        left: 25%;
        right: 25%;
    }

    .content {
        display: flex;
        flex-direction: column;

        .child {
            display: flex;
            flex-direction: row;
            align-items: center;
            justify-content: space-between;
            height: 20px;
            padding: 1rem;
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

    .profiles {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
        align-items: center;
        flex-direction: row;
        gap: 1rem;
    }

    @media only screen and (max-width: 1850px) {
        .articles {
            left: 20%;
            right: 20%;
        }
    }

    @media only screen and (max-width: 1400px) {
        .articles {
            left: 15%;
            right: 15%;
        }
    }

    @media only screen and (max-width: 820px) {
        .kys {
            display: none;
        }
        .articles {
            top: 0;
            left: 0;
            right: 0;
            border: none;
            border-radius: 0;
            overflow: scroll;
            position: fixed;
            height: auto;
            max-height: 100vh;
        }
        .profiles {
            display: flex;
            align-items: center;
            flex-direction: column;
            gap: 1rem;
        }
    }

    @media only screen and (max-width: 500px) {
        * {
            font-size: 4vw;
        }
    }
</style>
