<script lang="ts">
    type CatColor = "red" | "yellow" | "blue" | "green";
    type CatSize = "small" | "medium" | "big";
    interface ParticleCat {
        top: number;
        color: CatColor;
        size: CatSize;
        goesReverse?: boolean;
    }

    let circle = { x: 0, y: 0 };

    let particle_cats: Array<ParticleCat> = [];

    let lastMoved: number = Date.now();

    function randomColor(): CatColor {
        const colors: CatColor[] = ["red", "yellow", "blue", "green"];
        return colors[Math.floor(Math.random() * colors.length)];
    }

    function randomSize(): CatSize {
        const size: CatSize[] = ["small", "medium", "big"];
        return size[Math.floor(Math.random() * size.length)];
    }

    function randomPx(min: number, max: number) {
        return Math.floor(Math.random() * max) + min;
    }

    function addCat(cat: ParticleCat) {
        particle_cats = [...particle_cats, cat];
    }

    const actualHeight = screen.height / 1.5;

    for (let i = 0; i < 250; i++) {
        addCat({
            color: randomColor(),
            size: randomSize(),
            top: randomPx(10, actualHeight),
        });
    }

    function circleStyle(circle: { x: number; y: number }): string {
        const screenHalfX = screen.width / 2;
        const screenHalfY = screen.height / 2 - 20;
        return `-webkit-mask: radial-gradient(200px, #0000 40%, #000) ${
            circle.x + screenHalfX
        }px ${
            circle.y + screenHalfY
        }px; mask: radial-gradient(200px, #0000 40%, #000) ${
            circle.x + screenHalfX
        }px ${circle.y + screenHalfY}px;`;
    }
    document
        .getElementsByTagName("body")[0]
        .addEventListener("mousemove", (ev: MouseEvent) => {
            if (Date.now() - lastMoved <= 140) return;
            circle.y = ev.y;
            circle.x = ev.x;
            lastMoved = Date.now();
        });
</script>

<div class="particles">
    {#each particle_cats as cat}
        <img
            src="/cnb.svg"
            alt="cat"
            class="cat-icon {cat.color} {cat.size}"
            style="top: {cat.top}px;"
        />
    {/each}
</div>

<div class="mask" style={circleStyle(circle)} />

<style lang="scss">
    @use "style/palette.scss" as p;
    .particles {
        display: flex;
        flex-wrap: wrap;
        align-content: center;
        justify-content: center;
        align-items: center;
        position: absolute;
        .cat-icon {
            position: relative;
        }
    }
    .mask {
        position: absolute;
        height: 100%;
        width: 100%;
        background-color: p.$base;
        -webkit-mask: radial-gradient(200px, #0000 40%, #000) 0 0;
        mask: radial-gradient(200px, #0000 40%, #000) 0 0;
    }

    @media screen and (max-width: 500px) {
        * {
            display: none;
        }
    }
</style>
