<script lang="ts">
    import { yearsOld, timeFormat } from "./time";
    import { cats } from "./catascii";
    import Cursor from "./Cursor.svelte";
    let seconds: number = 0;

    const myAge = yearsOld(Date.now(), Date.parse("18 Jan 2005 00:00:00 GMT"));
    const randomCat = cats[Math.floor(Math.random() * cats.length)];
    setInterval(() => {
        seconds++;
    }, 1000);

    const prompt = "cnb@kitty$ ";
</script>

<div class="main">
    <article>
        <div class="welcomeMessage">
            Welcome to https://raluvy95.github.io!<br />
            This is CatNowBlue's personal website.<br />
            By the way, this page is
            <a
                href="https://github.com/raluvy95/raluvy95.github.io"
                target="_blank">open source</a
            >
        </div>
        <div class="prompt">
            {prompt}catfetch
            <a class="egg" href="https://i.imgur.com/ArXAMiN.png">--meow</a>
        </div>
        <div class="neofetch">
            <div class="kitty">
                <a class="nFetchImage" href="https://i.imgur.com/A1gZqtK.png"
                    >{randomCat}</a
                >
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
                <a class="egg" href="https://i.imgur.com/9N26ALo.png">󰪯 egg</a>
            </div>
        </div>
        <div class="prompt">{prompt}cat links.txt</div>
        <div class="links">
            <a href="https://youtube.com/@catnowblue"> Youtube</a>
            <a href="https://github.com/raluvy95"> Github</a>
            <a href="https://instagram.com/catnowblue.ro"> Instagram</a>
            <a href="https://techhub.social/@catnowblue">󰫑 Mastodon</a>
            <a href="https://discord.gg/BK57NZ8vTX">󰙯 Discord</a>
        </div>
        <div class="prompt">
            {prompt}dd if=/dev/zero of=/dev/sda1<Cursor />
        </div>
    </article>
</div>

<style lang="scss">
    @use "./style/palette.scss" as p;

    .egg {
        text-decoration: none;
    }

    .main {
    }

    article {
        border-width: 3px;
        border-style: solid;
        border-color: p.$foreground;
        border-radius: 15px;
        align-items: left;
        padding: 1rem;
        display: flex;
        flex-direction: column;
        gap: 1rem;
        height: 100%;
        flex-grow: 1;
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
        .nFetchImage {
            margin: 0px;
            line-height: 1.3;
            text-decoration: none;
        }
    }

    .links {
        font-size: 1rem;
        display: flex;
        flex-direction: column;
        a {
            width: fit-content;
        }
    }

    footer {
        text-align: center;
        margin: 5px;
    }

    hr {
        color: p.$foreground;
    }
</style>
