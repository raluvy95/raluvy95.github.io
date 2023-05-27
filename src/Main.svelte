<script lang="ts">
    import Marquee from "svelte-fast-marquee";

    let crashed = false;

    const weirdAscii = "1234567890abcdefghijklmnopqrstuvwxyz";
    function voidText(): string {
        let result: string = "";
        for (let i = 0; i < 6; i++) {
            const pickedLetter =
                weirdAscii[Math.floor(Math.random() * weirdAscii.length)];
            result += pickedLetter;
        }
        return result;
    }
    let cursed: string = voidText();
    setInterval(() => {
        cursed = voidText();
    }, 50);
</script>

{#if !crashed}
    <div class="main">
        <div class="menu">
            <div class="mustshow">
                <Marquee pauseOnHover={true}>
                    <p class="alerto">
                        Welcome to the CatNowBlue's website! Have a great day!
                    </p>
                </Marquee>
            </div>
            <p class="child"><a href="#About">About</a></p>
            <p class="child"><a href="#Links">Links</a></p>
            <p class="child">
                <a
                    href="https://github.com/raluvy95/raluvy95.github.io"
                    target="_blank"
                    rel="noreferrer">GitHub</a
                >
            </p>
            <p
                class="child"
                id="void"
                on:click={() => (crashed = true)}
                on:keydown={() => (crashed = false)}
            >
                {cursed}
            </p>
        </div>
        <div class="mainn">
            <h1 id="About">About</h1>
            <p>
                My name is cute cat and I like cats very much! I am from
                <span style="color:darkblue;">RO</span><span
                    style="color:yellow;">MAN</span
                ><span style="color:red;">IA</span>
            </p>
            <p>
                I like drawing and playing video games, tho I'm not really good
                at this. My pronoun is she/her and I'm straight. I currently
                working on my discord bot and websites built with Svelte (React
                soon for big project ig).
            </p>
            <h1 id="Links">Links</h1>
            <div class="social">
                <div>
                    Check out my funny videos on <a
                        href="https://youtube.com/@CatNowBlue">YouTube</a
                    >
                </div>
                <div>
                    Want to chit chat? Join my
                    <a href="https://discord.gg/3CVqX5bphG">Discord server!</a
                    >.<br />
                    Alternatively you can check out
                    <a href="https://discord.gg/BK57NZ8vTX"
                        >my tech Discord server!</a
                    >
                </div>
                <div>
                    I have <a href="https://instagram.com/catnowblue.ro/"
                        >Instagram</a
                    >
                </div>
                <div>
                    I have <a href="https://reddit.com/user/therealraluvy95"
                        >Reddit</a
                    > to post funny memes.
                </div>
                <div>
                    Check out my <a href="https://linux-hardware.org/?probe=821e3e3246">specs!</a>
                </div>
                <h1>Pages</h1>
                <ul style="list-style-type:disc">
                    <li>
                        <a href="/svelte-web" target="_blank" rel="noreferrer"
                            >Template Svelte</a
                        >
                    </li>
                    <il>
                        <a href="/cps-counter" target="_blank" rel="noreferrer"
                            >CPS Counter</a
                        >
                    </il>
                </ul>
            </div>
        </div>
        <pre class="ascii mustshowascii">
            _                        
            \`*-.                    
             )  _`-.                 
            .  : `. .                
            : _   '  \               
            ; *` _.   `*-._          
            `-.-'          `-.       Here's a kitty, take care of it
             ;       `       `.     
             :.       .        \    
             . \  .   :   .-'   .   
             '  `+.;  ;  '      :   
             :  '  |    ;       ;-. 
             ; '   : :`-:     _.`* ;
           .*' /  .*' ; .*`- +'  `*' 
           `*-*   `*-*  `*-*'
        </pre>
        <footer>
            This website is <a
                href="https://github.com/raluvy95/raluvy95.github.io"
                >open-source</a
            >
        </footer>
    </div>
{:else}
    <h1>You just crashed :(</h1>
    <p
        class="hidden"
        on:click={() => (crashed = false)}
        on:keydown={() => (crashed = false)}
    >
        bring me back!
    </p>
{/if}

<style lang="scss">
    :global(:root) {
        margin: 0;
    }

    :global(body) {
        background-color: blue;
        margin: 0;
    }
    .main {
        position: relative;
        font-family: DOS;
        background-color: blue;
        width: 100%;
        height: 100%;

        p:not(span) {
            margin: 0 60px;
        }
    }

    @keyframes alert {
        49% {
            color: white;
        }
        50% {
            color: yellow;
        }
        100% {
            color: yellow;
        }
        0% {
            color: white;
        }
    }

    .alerto {
        animation: alert 1s infinite;
        margin: 0;
    }

    .menu {
        position: sticky;
        display: flex;
        background-color: darkblue;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        font-size: larger;
        top: 0;

        .child {
            padding: 0 10px;
            margin: 0;

            &:hover {
                background-color: blue;
                cursor: pointer;
            }
        }
    }

    a {
        text-decoration: none;
        color: inherit;
    }

    .ascii {
        user-select: none;
        -webkit-user-select: none;
        -moz-user-select: none;
    }
    pre,
    .mainn {
        font-size: 28px;
        display: flex;
        justify-content: center;
        flex-direction: column;
        align-items: center;
    }

    .hidden {
        position: absolute;
        bottom: 50px;
        right: 50px;
        color: black;
        margin: 0;
        padding: 0;

        &:hover {
            color: white;
            cursor: pointer;
        }
    }

    .social {
        display: flex;
        flex-direction: column;
        align-items: center;
        align-content: center;
        flex-wrap: wrap;

        a {
            color: violet;

            &:hover {
                text-decoration: underline;
            }

            &:visited {
                color: purple;
            }
        }

        div {
            margin: 20px 0;
        }
    }

    footer {
        text-align: center;
        margin: 10px;

        a {
            color: orange;
        }
    }
    @keyframes spinning {
        100% {
            -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
        }
    }

    @media only screen and (max-width: 300px) {
        * {
            font-size: 20px !important;
        }
    }

    @media only screen and (max-width: 800px) {
        .mustshow {
            display: none;
        }
    }

    @media only screen and (max-width: 1000px) {
        .mustshowascii {
            display: none;
        }
    }
</style>
