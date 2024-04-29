<script lang="ts">
    import { avaliableProfileColors, type ProfileColor } from "./profileColor";

    export let profile: ProfileColor = {
        name: "Default",
        primary: "#caf7ff",
        secondary: "#70C9D9",
        background: "#000",
    };

    export let primaryColor: string;
    export let secondaryColor: string;
    export let backgroundColor: string;

    function onClick() {
        primaryColor = profile.primary;
        secondaryColor = profile.secondary;
        backgroundColor = profile.background;
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
    }
</script>

<button
    style="--f: {profile.primary}; --s: {profile.secondary}; --b: {profile.background};"
    on:click={onClick}
>
    <div class="prompt">
        <span class="hostname">
            {profile.name}
            <span class="arrow"></span></span
        >
        <span class="directory">
            ~ <span class="arrow"></span>
        </span>
    </div>
</button>

<style lang="scss">
    button {
        background-color: var(--b);
        color: var(--b);
        border-color: var(--f);
        border-width: 3px;
        border-radius: 15px;
        border-style: solid;
        box-shadow: none;
        padding: 16px;
        font-family: "Fira Code";
        width: fit-content;
        cursor: pointer;

        .prompt {
            display: flex;
            flex-wrap: wrap;
            justify-content: space-around;
            align-items: center;
        }

        .hostname {
            color: var(--b);
            background-color: var(--f);
            padding-left: 1rem;
            .arrow {
                color: var(--f);
                background-color: var(--s); // good enough
            }
        }

        .directory {
            color: var(--b);
            background-color: var(--s);
            padding-left: 0.6rem;
            .arrow {
                color: var(--s);
                background-color: var(--b);
            }
        }
    }
</style>
