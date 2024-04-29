export interface ProfileColor {
    name: string
    primary: string,
    secondary: string,
    background: string
}

export const avaliableProfileColors: ProfileColor[] = [
    {
        name: "Default",
        primary: "#caf7ff",
        secondary: "#70C9D9",
        background: "#000"
    },
    {
        name: "Mocha",
        primary: "#89dceb",
        secondary: "#89b4fa",
        background: "#1e1e2e"
    },
    {
        name: "Nord",
        primary: "#88c0d0",
        secondary: "#5e81ac",
        background: "#2e3440"
    },
    {
        name: "HotDog",
        primary: "#ffff00",
        secondary: "#774f0a",
        background: "#ff0000"
    },
    {
        name: "Brightest",
        primary: "#ffb",
        secondary: "#ffc",
        background: "#fff"
    },
    {
        name: "Latte",
        primary: "#04a5e5",
        secondary: "#1e66f5",
        background: "#e6e9ef"
    },
    {
        name: "Darkest",
        primary: "#005",
        secondary: "#007",
        background: "#000"
    }
]