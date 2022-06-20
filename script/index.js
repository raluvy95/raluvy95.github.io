document.addEventListener('DOMContentLoaded', function (event) {
  const dataText = ["Graphics Designer", "Classic Web Dev",
    "Animator", "Digital Artist", "Illustrator", "Small YouTuber", "Redditor", "Gamer"];
  const data = [
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
        url: "https://reddit.com/u/therealraluvy95"
      },
      {
        name: "TikTok",
        username: "catnowblue.ro",
        description: "The newest social media, tho I post short video there",
        url: "https://www.tiktok.com/@catnowblue.ro"
      }
    ]
  

  function typeWriter(text, i, fnCallback) {
    if (i < (text.length)) {
      document.querySelector(".typing").innerHTML = text.substring(0, i + 1) + '<span aria-hidden="true"></span>';
      setTimeout(function () {
        typeWriter(text, i + 1, fnCallback)
      }, 100);
    }
    else if (typeof fnCallback == 'function') {
      setTimeout(fnCallback, 2000);
    }
  }
  function StartTextAnimation(i) {
    if (typeof dataText[i] == 'undefined') {
      setTimeout(function () {
        StartTextAnimation(0);
      }, 20000);
    }
    if (i < dataText[i]?.length) {
      typeWriter(dataText[i], 0, function () {
        StartTextAnimation(i + 1);
      });
    }
  }
  StartTextAnimation(0);
  for (const it of data) {
    document.getElementById("contacts").innerHTML += `
    <div class="contact-list" url="${it.url}" onclick="openURL(event);"><h2>${it.name}</h2><h4>@${it.username}</h4><p>${it.description}</p></div>`
  }

});


function openURL(el) {
  const attemptToOpen = el.target.getAttribute("url")
  if(attemptToOpen == "none") return;
  window.open(attemptToOpen, "_blank")
}