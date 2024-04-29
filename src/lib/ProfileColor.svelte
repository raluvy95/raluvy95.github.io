<script lang="ts">
    import { type ProfileColor } from "./profileColor";

    export let profile: ProfileColor = {
        name: "Default",
        prompt: "#caf7ff",
        primary: "#caf7ff",
        secondary: "#70C9D9",
        background: "#000",
    };

    export let promptColor: string;
    export let primaryColor: string;
    export let secondaryColor: string;
    export let backgroundColor: string;

    function onClick() {
        promptColor = profile.prompt || profile.primary;
        primaryColor = profile.primary;
        secondaryColor = profile.secondary;
        backgroundColor = profile.background;
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
    }
</script>

<button
    style="--f: {profile.primary}; --s: {profile.secondary}; --b: {profile.background}; --p: {profile.prompt}"
    on:click={onClick}
>
    <div class="prompt">
        <span class="hostname">
            <span class="name">{profile.name}</span>
            <span class="arrow"></span>
        </span>
        <span class="directory">
            ~ <span class="arrow"></span>
        </span>
        <span class="text">test</span>
    </div>
</button>

<style lang="scss">
    button {
        background-color: var(--b);
        color: var(--b);
        border-color: var(--p);
        border-width: 3px;
        border-radius: 15px;
        border-style: solid;
        box-shadow: none;
        padding: 16px;
        font-family: "Fira Code";
        width: 18rem;
        // width: 30%;
        cursor: pointer;
        display: flex;
        align-items: center;
        justify-content: center;

        .text {
            color: var(--f);
        }

        .prompt {
            display: flex;
            flex-wrap: wrap;
            justify-content: space-around;
            align-items: center;
            flex-grow: 1;
            width: 100%;
        }

        .hostname {
            flex-grow: 1;
            display: flex;
            color: var(--b);
            background-color: var(--p);
            padding-left: 1rem;
            .name {
                flex-grow: 1;
            }
            .arrow {
                color: var(--p);
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
            margin-right: 0.4rem;
        }
    }

    @media only screen and (max-width: 1870px) {
        button {
            width: calc(40vw - 24rem);
        }
    }

    @media only screen and (max-width: 1480px) {
        button {
            width: calc(40vw - 20rem);
        }
    }

    @media only screen and (max-width: 1340px) {
        button {
            width: calc(40vw - 6rem);
        }
    }

    @media only screen and (max-width: 1050px) {
        button {
            width: calc(40vw - 5rem);
        }
    }

    @media only screen and (max-width: 820px) {
        button {
            width: calc(100vw - 12rem);
        }
    }

    @media only screen and (max-width: 600px) {
        button {
            width: calc(100vw - 2rem);
        }
    }
</style>
