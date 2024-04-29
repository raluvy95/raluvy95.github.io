export interface ProfileColor {
    name: string
    primary: string,
    prompt: string,
    secondary: string,
    background: string
}

export const avaliableProfileColors: ProfileColor[] = [
    // {
    //     name: "Default",
    //     prompt: "#caf7ff",
    //     primary: "#caf7ff",
    //     secondary: "#70C9D9",
    //     background: "#000"
    // },
    {
        name: "Mocha",
        prompt: "#89dceb",
        primary: "#89dceb",
        secondary: "#89b4fa",
        background: "#1e1e2e"
    },
    {
        name: "Nord",
        prompt: "#88c0d0",
        primary: "#88c0d0",
        secondary: "#5e81ac",
        background: "#2e3440"
    },
    {
        name: "HotDog",
        prompt: "#ffff00",
        primary: "#ffff00",
        secondary: "#000000",
        background: "#ff0000"
    },
    {
        name: "Brightest",
        prompt: "#ffb",
        primary: "#ffb",
        secondary: "#ffc",
        background: "#fff"
    },
    {
        name: "Latte",
        primary: "#04a5e5",
        prompt: "#04a5e5",
        secondary: "#1e66f5",
        background: "#e6e9ef"
    },
    {
        name: "Darkest",
        primary: "#005",
        prompt: "#005",
        secondary: "#007",
        background: "#000"
    },
    {
        name: "GNOME",
        primary: "#fefaf3",
        prompt: "#fefaf3",
        secondary: "#1e78e4",
        background: "#1e1e1e"
    },
    {
        name: "anaxert",
        primary: "#F0C5FF",
        prompt: "#F0C5FF",
        secondary: "#CF8AE7",
        background: "#000000"
    },
    {
        name: "banana",
        primary: "#F9F06B",
        prompt: "#F9F06B",
        secondary: "#F5C211",
        background: "#1C1C10"
    },
    {
        name: "charcoal",
        primary: "#ffffff",
        prompt: "#ffffff",
        secondary: "#77767B",
        background: "#0E0E0E"
    }, // ilysm <3 ilysm toooooooooo <333333333333333333333
    {
        name: "catppuccin", // meow
        primary: "#c6d0f5",
        prompt: "#c6d0f5",
        secondary: "#51576d",
        background: "#232634"
    },
    {
        name: "snapland", // wink wink
        primary: "#ffffff",
        prompt: "#95B962",
        secondary: "#77216F",
        background: "#2C001E"
    },
    {
        name: "pissandshittium", // wink wink
        primary: "#F9F06B",
        prompt: "#CDAB8F",
        secondary: "#986A44",
        background: "#63452C"
    }
    // tbh we should make the profile color layouts not suck ye 
    // what current design in ligma balls?
    // can you clone the current design in figma? i'll redo it :3
]