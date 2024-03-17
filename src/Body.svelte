<script lang="ts">
    import { yearsOld, timeFormat } from "./time";

    let seconds: number = 0;
    let title = "Welcome to CatNowBlue's website!";

    const myAge = yearsOld(Date.now(), Date.parse("18 Jan 2005 00:00:00 GMT"));

    function titleHover() {
        title = "I am a cute cat :3";
    }

    function titleOut() {
        title = "Welcome to CatNowBlue's website!";
    }

    setInterval(() => {
        seconds++;
    }, 1000);
</script>

<div class="main">
    <h1
        class="title"
        on:mouseover={titleHover}
        on:focus={titleHover}
        on:mouseleave={titleOut}
    >
        {title}
    </h1>
    <div class="info">
        <pre>
 ╱|、
(˚ˎ 。7
 |、˜〵 
 じしˍ,)ノ</pre>
        <p>
            <span class="icon">󰄛</span> CNB, Cat or Catty<br />
            <span class="icon">󰊜</span> she/her<br />
            <span class="icon"></span>
            {myAge}<br />
            <span class="icon"></span> Europe • Romania <br />
            =================== <br />
            <span class="icon"></span> ASUS TUF Gaming F15<br />
            <span class="icon"></span> i7-11800H (16) @ 4.6GHz<br />
            <span class="icon">󰍛</span> 16 GB RAM<br />
            <span class="icon">󰍛</span> NVIDIA GeForce RTX 3050 Ti<br />
            <span class="icon"></span>
            {timeFormat(seconds)}<br />
            =================== <br />
            <span class="icon"></span> NixOS<br />
            <span class="icon"></span> 6.1<br />
            <span class="icon"></span> zsh<br />
            <span class="icon"></span> GNOME<br />
        </p>
    </div>
    <div class="links">
        <h1>Links</h1>
        <div class="btns">
            <a href="https://youtube.com/@catnowblue">󰗃</a>
            <a href="https://discord.gg/BK57NZ8vTX">󰙯</a>
            <a href="https://techhub.social/@catnowblue">󰫑</a>
            <a href="https://instagram.com/catnowblue.ro"></a>
            <a href="https://github.com/raluvy95"></a>
        </div>
    </div>
    <footer>
        This page is <a href="https://github.com/raluvy95/raluvy95.github.io"
            >open source</a
        >
    </footer>
</div>

<style lang="scss">
    @use "style/palette.scss" as p;

    .main {
        background-color: p.$crust;
        position: absolute;
        z-index: 2;
        width: 95%;
        top: 60%;
        left: 50%;
        transform: translate(-50%, -50%);
        border-radius: 25px;
        backdrop-filter: blur(5px) contrast(0.8);
        opacity: 95%;
        margin-bottom: 20px;

        .title {
            font-size: 5vh;
            text-align: center;
            background: linear-gradient(90deg, p.$mauve 40%, p.$sapphire 80%);
            -webkit-background-clip: text;
            background-clip: text;
            -webkit-text-fill-color: transparent;
        }
        .info {
            display: flex;
            flex-direction: row;
            justify-content: space-evenly;
            align-content: space-evenly;
            align-items: center;
            padding: 30px 0;
            background: linear-gradient(0deg, p.$mauve 40%, p.$sapphire 80%);
            -webkit-background-clip: text;
            background-clip: text;
            -webkit-text-fill-color: transparent;
            font-family: "Fira Code";

            pre {
                color: p.$text;
                font-size: 3vw;
            }
            p {
                font-size: 16px;
            }

            .icon {
                font-size: 28px;
            }
        }
        .links {
            h1 {
                text-align: center;
                background: linear-gradient(
                    90deg,
                    p.$sapphire 40%,
                    p.$mauve 80%
                );
                -webkit-background-clip: text;
                background-clip: text;
                -webkit-text-fill-color: transparent;
            }

            .btns {
                display: flex;
                justify-content: space-evenly;

                a {
                    text-decoration: none;
                    font-family: "Fira Code", "monospace";
                    font-size: 80px;
                    border-radius: 15px;
                    background-color: p.$base;
                    padding: 0 25px;
                    transition: 0.3s;
                    color: p.$mauve;
                    box-shadow: 0 0 15px p.$mauve;
                    border-top-width: 3px;
                    &:hover {
                        background-color: p.$mauve;
                        cursor: pointer;
                        border: none;
                        box-shadow: none;
                        color: p.$crust;
                    }
                }
            }
        }
    }

    footer {
        text-align: center;
        margin: 20px;
        margin-top: 100px;

        a {
            text-decoration: none;
            color: p.$mauve;
        }
    }

    @media screen and (max-width: 500px) {
        :global(body) {
            background-color: p.$crust;
        }
        .main {
            border-radius: 0;
            width: 100%;
            height: 100%;
            top: 50vh;
            padding-left: 10%;
            padding-right: 20px;
        }

        .title {
            padding-top: 48px;
        }

        .btns {
            padding-bottom: 10%;
            a {
                font-size: 48px !important;
                padding: 0 15px !important;
            }
        }
    }

    @media screen and (max-width: 400px) {
        .info pre {
            display: none;
        }
    }
</style>
