<script lang="ts">
    import { yearsOld, timeFormat } from "./time";
    import { cats } from "./catascii";
    import Cursor from "./lib/Cursor.svelte";
    import Prompt from "./lib/Prompt.svelte";
    let seconds: number = 0;

    const myAge = yearsOld(Date.now(), Date.parse("18 Jan 2005 00:00:00 GMT"));
    let randomCat = cats[Math.floor(Math.random() * cats.length)];
    setInterval(() => {
        seconds++;
    }, 1000);

    const prompt = "cnb@kitty$ ";

    function changeCat() {
        randomCat = cats[Math.floor(Math.random() * cats.length)];
    }
</script>

<div class="main">
    <article>
        <div class="output">
            <div class="welcomeMessage">
                Welcome to https://raluvy95.github.io!<br />
                This is CatNowBlue's personal website.<br />
                By the way, this page is
                <a
                    href="https://github.com/raluvy95/raluvy95.github.io"
                    target="_blank">open source</a
                >
            </div>
        </div>
        <div class="prompt">
            <Prompt>
                catfetch <a class="egg" href="egg.png" target="_blank">
                    --meow
                </a>
            </Prompt>
        </div>
        <div class="output">
            <div class="neofetch">
                <div class="kitty">
                    <!-- svelte-ignore a11y-click-events-have-key-events -->
                    <!-- svelte-ignore a11y-no-noninteractive-element-interactions -->
                    <pre on:click={changeCat}>{cats[cats.length - 1]}</pre>
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
                     {timeFormat(seconds)}<br />
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
        <Prompt>cat links.txt</Prompt>
        <div class="output">
            <div class="links">
                <a href="https://youtube.com/@catnowblue"> YouTube</a>
                <a href="https://github.com/raluvy95"> Github</a>
                <a href="https://instagram.com/catnowblue.ro"> Instagram</a>
                <a href="https://techhub.social/@catnowblue">󰫑 Mastodon</a>
                <a href="https://discord.gg/BK57NZ8vTX">󰙯 Discord</a>
            </div>
        </div>
        <Prompt>dd if=/dev/zero of=/dev/sda1<Cursor /></Prompt>
    </article>
</div>

<style lang="scss">
    .egg {
        text-decoration: none;
    }

    .output {
        padding-left: 1rem;
    }

    article {
        border-width: 3px;
        border-style: solid;
        border-color: var(--foreground);
        border-radius: 15px;
        align-items: left;
        padding: 1rem;
        padding-left: 0;
        display: flex;
        flex-direction: column;
        gap: 1rem;
        height: 100%;
        flex-grow: 1;  
        overflow: scroll;
        height: calc(100vh - 55px);
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
        // letter-spacing: -4px;
        // line-height: 1;
        // word-spacing: -9px;
        // .nFetchImage {
        //     margin: 0px;
        //     line-height: 1.3;
        //     text-decoration: none;
        // }
    }

    .links {
        font-size: 1rem;
        display: flex;
        flex-direction: column;
        a {
            width: fit-content;
        }
        line-height: 2vh;
    }

    hr {
        color: var(--foreground);
    }

    @media only screen and (max-width: 492px) {
        * {
            font-size: 3vw;
        }

        .kitty pre {
            font-size: 5vw;
        }
    }
</style>
