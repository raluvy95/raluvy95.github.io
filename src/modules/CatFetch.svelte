<script lang="ts">
    import { cats } from "../catascii";
    import CommandBody from "../lib/CommandBody.svelte";
    import { yearsOld, timeFormat } from "../time";

    let seconds: number = 0;
    let randomCat = cats[Math.floor(Math.random() * cats.length)];
    setInterval(() => {
        seconds++;
    }, 1000);

    const myAge = yearsOld(Date.now(), Date.parse("18 Jan 2005 00:00:00 GMT"));

    function changeCat() {
        randomCat = cats[Math.floor(Math.random() * cats.length)];
    }
</script>

<CommandBody command="catfetch --meow">
    <div>
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
                 6.6<br />
                 zsh<br />
                 GNOME<br />
                <hr />
                <a class="egg" href="egg.png" target="_blank">󰪯 egg</a><br />
                <a href="https://linux-hardware.org/?probe=021499aed9" target="_blank">My hardware probe</a>
            </div>
        </div>
    </div>
</CommandBody>

<style lang="scss">
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

    .egg {
        text-decoration: none;
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
