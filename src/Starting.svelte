<script lang="ts">
    import { fade } from "svelte/transition";
    import Main from "./Main.svelte";

    let main = false;
    let currentLine = 0;
    let currentConsole = "";
    function putMoreConsole(): boolean {
        const lines = text.split(/\r\n|\r|\n/);
        if (lines.length - 1 < currentLine) return false;
        currentConsole += lines[currentLine] + "<br>";
        currentLine++;
        return true;
    }
    const body = document.getElementsByTagName("body")[0];
    const maxNumber = body.clientWidth;

    const text = `
Starting CAT-DOS...

Processor: Intel Pentium x86
Memory: 16 MB
Color Support: <span style="color: red;">Y</span><span style="color: yellow;">E</span><span style="color: blue;">S</span>

Reading the configuration file
Checking for new update

You are using version 23.09!

This site will have UI upgrade by 2024!
    `;

    let loading = "Loading";
    let avaliableNumber = maxNumber / 12;
    let currentNumber = 0;
    let progressbar =
        "[" +
        "█".repeat(currentNumber) +
        "•".repeat(avaliableNumber - currentNumber) +
        "]";

    setInterval(() => {
        if (loading.endsWith("...")) {
            loading = "Loading";
        }
        loading += ".";
    }, 500);

    const aboutToDestroy = setInterval(() => {
        if (currentNumber < avaliableNumber) {
            currentNumber += Math.floor(Math.random() * 10);
            if (currentNumber >= avaliableNumber) {
                currentNumber = avaliableNumber;
                clearInterval(aboutToDestroy);
            }
            progressbar =
                "[" +
                "█".repeat(currentNumber) +
                "•".repeat(avaliableNumber - currentNumber) +
                "]";
        }
    }, 100);

    const aboutToDestroy2 = setInterval(() => {
        if (!putMoreConsole()) {
            clearInterval(aboutToDestroy2);
        }
    }, 200);

    setTimeout(() => {
        main = true;
    }, 5000);
</script>

<div
    id="main"
    style={main ? "background-color:blue;" : "background-color: black;"}
>
    {#if main}
        <div transition:fade>
            <Main />
        </div>
    {:else}
        <div id="starting">
            <h1>{loading}</h1>
            <span class="cursor" />
            <div class="spinner">
                <img src="/favicon.png" alt="cat spin" class="spin" />
            </div>
            <p class="console">{@html currentConsole}</p>
            <br />
            <p style="font-family: 'Courier New', Courier, monospace;">
                {progressbar}
            </p>
        </div>
    {/if}
</div>

<style>
    :global(:root) {
        margin: 0;
    }

    :global(body) {
        background-color: black;
        margin: 0;
    }
    @keyframes spinning {
        100% {
            -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
        }
    }
    .console {
        font-size: 24px;
    }
    .spin {
        -webkit-animation: spinning 2s linear infinite;
        -moz-animation: spinning 2s linear infinite;
        animation: spinning 2s linear infinite;
        position: absolute;
        top: 20px;
        right: 40px;
    }

    #starting {
        position: relative;
    }
</style>
