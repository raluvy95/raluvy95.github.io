<script lang="ts">
    import { yearsOld, timeFormat } from "./time";
    import { cats } from "./catascii";
    import Cursor from "./lib/Cursor.svelte";
    import Prompt from "./lib/Prompt.svelte";
    import Preferences from "./lib/Preferences.svelte";
    import CommandBody from "./lib/commandBody.svelte";
    import Blog from "./lib/Blog.svelte";

    let prompt = "cnb@kitty";

    let seconds: number = 0;
    let showPreferences: boolean = false;

    const myAge = yearsOld(Date.now(), Date.parse("18 Jan 2005 00:00:00 GMT"));
    let randomCat = cats[Math.floor(Math.random() * cats.length)];
    setInterval(() => {
        seconds++;
    }, 1000);

    function changeCat() {
        randomCat = cats[Math.floor(Math.random() * cats.length)];
    }
</script>

{#if showPreferences}
    <Preferences bind:showPreferences />
{/if}
<article>
    <div class="welcomeMessage">
        Welcome to raluvy95.github.io!<br />
        This is CatNowBlue's personal website.<br />
        By the way, this page is
        <a href="https://github.com/raluvy95/raluvy95.github.io" target="_blank"
            >open source</a
        >. You can change the color of this website
        <!-- svelte-ignore a11y-invalid-attribute -->
        <a
            href="#"
            on:click={() => {
                showPreferences = true;
            }}>here</a
        >.
    </div>
    <CommandBody>
        <div slot="command">
            catfetch <a class="egg" href="egg.png" target="_blank"> --meow </a>
        </div>
        <div slot="output">
            <div class="neofetch">
                <div class="kitty">
                    <!-- svelte-ignore a11y-click-events-have-key-events -->
                    <!-- svelte-ignore a11y-no-noninteractive-element-interactions -->
                    <pre on:click={changeCat}>{randomCat}</pre>
                </div>
                <div class="info">
                    󰄛 CatNowblue, cutecat, CNB<br />
                    󰊜 she/her<br />
                     Europe, Romania<br />
                     {myAge}<br />
                    <hr />
                     ASUS TUF Gaming F15<br />
                     i7-11800H (16) @ 4.6GHz<br />
                    󰍛 16 GB RAM<br />
                    󰍛 NVIDIA GeForce RTX 3050 Ti<br />
                     you wasted {timeFormat(seconds)}<br />
                    <hr />
                     NixOS<br />
                     6.1<br />
                     zsh<br />
                     GNOME<br />
                    <hr />
                    <a class="egg" href="egg.png" target="_blank">󰪯 egg</a>
                </div>
            </div>
        </div>
    </CommandBody>
    <CommandBody>
        <div slot="command">cat links.txt</div>
        <div slot="output">
            <div class="links">
                <a href="https://youtube.com/@catnowblue"> YouTube</a>
                <a href="https://github.com/raluvy95"> Github</a>
                <a href="https://instagram.com/catnowblue.ro"> Instagram</a>
                <a href="https://techhub.social/@catnowblue">󰫑 Mastodon</a>
                <a href="https://discord.gg/BK57NZ8vTX">󰙯 Discord</a>
            </div>
        </div>
    </CommandBody>
    <CommandBody>
        <span slot="command">cat authors.txt</span>
        <div class="output" slot="output">
            made with love by <a href="https://github.com/raluvy95"
                >CatNowblue</a
            >
            and <a href="https://github.com/NRDsstuff">NRD</a>
        </div>
    </CommandBody>
    <Blog />
    <Prompt>
        <div>dd</div>
        <div>if=/dev/zero</div>
        <div>of=/dev/sda1</div>
        <Cursor />
    </Prompt>
</article>

<style lang="scss">
    .welcomeMessage {
        margin-left: 1rem;
        margin-bottom: 1rem;
    }

    .egg {
        text-decoration: none;
    }

    article {
        border-width: 3px;
        border-style: solid;
        border-color: var(--foreground);
        border-radius: 15px;
        align-items: left;
        position: absolute;
        top: 8px;
        bottom: 8px;
        left: 8px;
        right: 8px;
        padding: 1rem;
        padding-left: 0;
        overflow: scroll;
    }

    .neofetch {
        display: flex;
        flex-direction: row;
        gap: 2rem;
    }

    .kitty {
        font-family: "Fira Code";
        font-size: 2.5rem;
        height: 17rem;
        width: 17rem;
        margin: 1rem;
        margin-right: 0;
        display: flex;
        justify-content: center;
        align-items: center;
        user-select: none;
    }

    .links {
        display: flex;
        flex-direction: column;
        gap: 0.5rem;
        a {
            width: fit-content;
        }
    }

    hr {
        color: var(--foreground);
    }

    @media only screen and (max-width: 650px) {
        // mobile check lol
        .neofetch {
            align-items: center;
            flex-direction: column;
        }
        .kitty {
            margin-right: 1rem;
        }
    }
</style>
