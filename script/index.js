const data = {
    mostActive: [
        {
            name: "YouTube",
            username: "CatNowBlue",
            description: "This is where CatNowBlue was born.",
            url: "https://youtube.com/catnowblue"
        },
        {
            name: "GitHub",
            username: "raluvy95",
            description: "The site where I share my source code!",
            url: "https://github.com/raluvy95"
        },
        {
            name: "Discord",
            username: "catnowblue",
            description: "The most common way to communicate with our community",
            url: "https://discord.gg/3CVqX5bphG"
        },
        {
            name: "Instagram",
            username: "catnowblue.ro",
            description: "Another way to communicate with me, but not often.",
            url: "https://instagram.com/catnowblue.ro"
        },
        {
            name: "Reddit",
            username: "therealraluvy95",
            description: "Where I collect memes and maybe I will post there",
            url: "https://reddit.com/therealraluvy95"
        },
        {
            name: "TikTok",
            username: "catnowblue.ro",
            description: "The newest social media, tho I post short video there",
            url: "https://www.tiktok.com/@catnowblue.ro"
        }
    ],
    leastActive: [
        {
            name: "Twitter",
            username: "catnowblue",
            description: "The better alternative to Facebook, but recenty... the site went shit and I don't use it anymore.",
            url: "https://twitter.com/catnowblue"
        },
        {
            name: "Steam",
            username: "CatNowBlue",
            description: "Weird way to communicate with me, but I only use it to download and run games",
            url: "https://steamcommunity.com/id/CatNowBlue"
        },
        {
            name: "Twitch",
            username: "catnowblue",
            description: "Not interesed in streaming yet...",
            url: "https://twitch.tv/catnowblue"
        },
        {
            name: "Revolt",
            username: "catnowblue.ro",
            description: "Might migrate to this platform if Discord ruined my account again. (Coming Soon)",
            url: "none"
        }
    ]
}


window.addEventListener("DOMContentLoaded", () => {
    for(const listactive of data.mostActive) {
        document.getElementById('active').innerHTML += `<li class="item" URL=${listactive.url} onclick="clicker(this);">
        <h2>${listactive.name}</h2>
        <p><span class="username">Username:</span> ${listactive.username}</p>
        <p>${listactive.description}</p>
        </li>`
    }
    for(const listactive of data.leastActive) {
        document.getElementById('inactive').innerHTML += `<li class="item" URL=${listactive.url} onclick="clicker(this);">
        <h2>${listactive.name}</h2>
        <p><span class="username">Username:</span> ${listactive.username}</p>
        <p>${listactive.description}</p>
        </li>`
    }
})

function clicker(el) {
    const URL = el.getAttribute("url")
    if(URL == "none") return;
    window.open(URL, "_blank");
}
