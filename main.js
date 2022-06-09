const bear = [

  "https://cdn.frankerfacez.com/emoticon/274406/4", //3Head
  "https://cdn.frankerfacez.com/emoticon/654991/4", //Bedge
  "https://cdn.frankerfacez.com/emoticon/249060/4", //forsenCD
  "https://cdn.frankerfacez.com/emoticon/139407/4", //LULW
  "https://cdn.frankerfacez.com/emoticon/355871/4", //PepeLa
  "https://cdn.frankerfacez.com/emoticon/457124/4", //WICKED
  "https://cdn.betterttv.net/emote/60203910381eb06cbaa67ee3/3x", //Lamonting
  "https://cdn.betterttv.net/emote/618f18da54f3344f8805695c/3x", //PepeHands
  "https://cdn.betterttv.net/emote/61c4da14002cdeedc2206ccb/3x", //KEKW
  "https://cdn.betterttv.net/emote/6029d83f82b7c45eb1c9484a/3x", //gachiHop
  "https://cdn.betterttv.net/emote/60bb1554f8b3f62601c38d78/3x", //TriKool
  "https://cdn.betterttv.net/emote/60e9e9e58ed8b373e42208bf/3x", //Drake
  "https://cdn.betterttv.net/emote/61ad09e5002cdeedc21e5a97/3x", //PianoTime
  "https://cdn.betterttv.net/emote/61c24c6d002cdeedc2203ace/3x", //PogU
  "https://cdn.betterttv.net/emote/600c004c4e3ab965ef757f9e/3x", //KEKL
  "https://cdn.betterttv.net/emote/583089f4737a8e61abb0186b/3x", //OMEGALUL
  "https://cdn.betterttv.net/emote/61ed974806fd6a9f5be1d7a5/3x", //WAYTOODANK
  "https://cdn.betterttv.net/emote/5c27ad590a1e447dea70e0c8/3x", //Pepege
  "https://cdn.betterttv.net/emote/5fedf9a460488f2e470f143a/3x", //PauseMan
  "https://cdn.betterttv.net/emote/609431bc39b5010444d0cbdc/3x", //GIGACHAD
  "https://cdn.betterttv.net/emote/6111162076ea4e2b9f763379/3x", //AMEN
  "https://cdn.betterttv.net/emote/618c4f1b1f8ff7628e6d56ab/3x", //bubbsJAM
  "https://cdn.betterttv.net/emote/61d4fa7206fd6a9f5bdf6433/3x", //bubbsHop
  "https://cdn.betterttv.net/emote/61a5f6ef371b825d3f6dd1b2/3x", //bearPlush
  "https://cdn.betterttv.net/emote/61deabc606fd6a9f5be05fcd/3x", //bubbsTalk
  "https://cdn.betterttv.net/emote/61f422f406fd6a9f5be27eb6/3x", //DonoWall
  "https://cdn.betterttv.net/emote/61f03cb606fd6a9f5be2201d/3x", //Madge
  "https://cdn.betterttv.net/emote/61f4410c06fd6a9f5be28204/3x", //DinkDonk
  "https://cdn.betterttv.net/emote/61f4bd4b06fd6a9f5be290ae/3x", //peepoArrive
  "https://cdn.betterttv.net/emote/6212d52606fd6a9f5be52323/3x", //Pepepains
  "https://cdn.betterttv.net/emote/61f6af6306fd6a9f5be2bd7d/3x", //PepoCheer
  "https://cdn.betterttv.net/emote/61f6af3b06fd6a9f5be2bd73/3x", //Comfy
  "https://cdn.betterttv.net/emote/61f4bda806fd6a9f5be290bf/3x", //pepeJAM
  "https://cdn.7tv.app/emote/62477a2efb18d86dec72ad34/4x", //Barry63
  "https://cdn.7tv.app/emote/61832dc08d50b5f26ee7be0d/4x", //bearWave
  "https://cdn.7tv.app/emote/6129fa21a4d049e1797520e4/4x", //bubbsPls
  "https://cdn.7tv.app/emote/60e8677677b18d5dd3800410/4x", //AlienPls
  "https://cdn.7tv.app/emote/60aecb385174a619dbc175be/4x", //meow
  "https://cdn.7tv.app/emote/60aed440997b4b396ed9ec39/4x", //peepoClap
  "https://cdn.7tv.app/emote/60ae36ecb2ecb01505fcc586/4x", //KKool
  "https://cdn.7tv.app/emote/60ae2cfb259ac5a73ed9a00c/4x", //AlienPls3
  "https://cdn.7tv.app/emote/605305868c870a000de38b6f/4x", //LULE
  "https://cdn.7tv.app/emote/6042af401d4963000d9dae36/4x", //docPls
  "https://cdn.7tv.app/emote/6042091777137b000de9e66b/4x", //monkaOMEGA
  "https://cdn.7tv.app/emote/603cbda573d7a5001441f9d5/4x", //flushE
  "https://cdn.7tv.app/emote/603cb219c20d020014423c34/4x", //monkaE
  "https://cdn.7tv.app/emote/603caee4c20d020014423c13/4x", //VeryPog

];

function dvd(option) {
  const marquee = document.querySelector(".marquee");
  const container = marquee.parentElement;
  const defaultSettings = {
    horizontal: true,
    vertical: true,
    speed: 75,
    bumpEdge: function () { },
  };

  const settings = {
    ...defaultSettings,
    ...option,
  };
  const move = {
    up: function () {
      marquee.animate(
        [
          // keyframes
          { top: `${container.offsetHeight - marquee.offsetHeight}px` },
          { top: 0 },
        ],
        {
          // timing options
          duration: (container.offsetHeight / settings.speed) * 1000,
          easing: "linear",
        }
      ).onfinish = function () {
        settings.bumpEdge();
        move.down();
      };
    },
    down: function () {
      marquee.animate(
        [
          // keyframes
          { top: 0 },
          { top: `${container.offsetHeight - marquee.offsetHeight}px` },
        ],
        {
          // timing options
          duration: (container.offsetHeight / settings.speed) * 1000,
          easing: "linear",
        }
      ).onfinish = function () {
        settings.bumpEdge();
        move.up();
      };
    },
    right: function () {
      marquee.animate(
        [
          { left: 0 },
          { left: `${container.offsetWidth - marquee.offsetWidth}px` },
        ],
        {
          duration: (container.offsetWidth / settings.speed) * 1000,
          easing: "linear",
        }
      ).onfinish = function () {
        settings.bumpEdge();
        move.left();
      };
    },
    left: function () {
      marquee.animate(
        [
          { left: `${container.offsetWidth - marquee.offsetWidth}px` },
          { left: 0 },
        ],
        {
          duration: (container.offsetWidth / settings.speed) * 1000,
          easing: "linear",
        }
      ).onfinish = function () {
        settings.bumpEdge();
        move.right();
      };
    },
  };

  if (settings.horizontal) {
    move.right();
  }
  if (settings.vertical) {
    move.down();
  }
}
dvd({
  speed: 100 * (new URL(window.location.href).searchParams.get("speed") || 3),
  bumpEdge: function () {
    document.querySelector(".bear").src =
      bear[Math.floor(Math.random() * bear.length)];
  },
});
