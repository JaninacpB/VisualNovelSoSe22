namespace Template {
  export import ƒ = FudgeCore;
  export import ƒS = FudgeStory;

  console.log("Artemis Mysterium starting");

  //define transistions
  export let transistions = {
    puzzle: {
      duration: 1,
      alpha: "./.././../Transistion/02.png",
      edge: 1 //härtegrad
    },
    wallpaper: {
      duration: 1,
      alpha: "./../../Transistion/transistionWallpaper.png",
      edge: 1
    }
  }

  export let sound = {
    //Themes
    //Scene 1
    themeinfrontManor: "./../../Assets/sounds/infrontOfManorScene1PianoElegeant.mp3",
    
    themeEntrance: "./../../Assets/sounds/peter-tchaikovsky-neapolitan-song-opus-Entry.mp3",

    //SFX
    guterNameSoundEffekt: ""
  }

  export let location = {
    infrontOfManorDay: {
      name: "manorDay",
      background: "./../../Assets/backgrounds/vorDemManorBackground.png",
    },

    infrontOfManorNight: {
      name: "manorNight",
      background: "./../../Assets/backgrounds/vorDemManorBackground-night.png",
    },

    entrance: {
      name: "entrance",
      background: "./../../Assets/backgrounds/entryBackground.png",
    },

    saalon: {
      name: "saalon",
      background: "./../../Assets/backgrounds/saalon.png",
    }, 

    gardenDark: {
      name: "gardenDark",
      background: "./../../Assets/backgrounds/garden-night.png"
    },

    gardenLight: {
      name: "gardenLight",
      background: "./../../Assets/backgrounds/gardenOn.png"
    }, 

    cabin: {
      name: "cabin",
      background: "./../../Assets/backgrounds/doorSheat.png"
    }, 

    studyroom: {
      name: "studyroom",
      background: "./../../Assets/backgrounds/studyroomBackground.png"
    }
  }

  export let charaktere = {
    bronte: {
      name: "Brontë",
      origin: ƒS.ORIGIN.BOTTOMCENTER, //Ankerpunkt im Bild
      pose: {
        happy: "./../../Assets/characters/bronte/Bronte-happy.png",
        angry: "./../../Assets/characters/bronte/Bronte-angry.png",
        laugh: "./../../Assets/characters/bronte/Bronte-laugh.png",
        sad: "./../../Assets/characters/bronte/Bronte-sad.png",
        shout: "./../../Assets/characters/bronte/Bronte-shout.png",
        think: "./../../Assets/characters/bronte/Bronte-think.png"
      }
    }, 

    maire: {
      name: "Mairé",
      origin: ƒS.ORIGIN.BOTTOMCENTER,
      pose: {
        neutral: "./../../Assets/characters/maire/Assestentin-neutral.png",
        embarrassed: "./../../Assets/characters/maire/Assestentin-emberassed.png",
        fear: "./../../Assets/characters/maire/Assestentin-fear.png",
        happy: "./../../Assets/characters/maire/Assestentin-happy.png",
        sad:"./../../Assets/characters/maire/Assestentin-sad.png",
        laugh:"./../../Assets/characters/maire/Assestentin-laugh.png"
      }
    },

    alaistar: {
      origin: ƒS.ORIGIN.BOTTOMCENTER,
      pose: {
        angry: "./../../Assets/characters/alaistar/Alaistar-angry.png",
        happy: "./../../Assets/characters/alaistar/Alaistar-happy.png",
        neutral: "./../../Assets/characters/alaistar/Alaistar-neutral.png"
      }
    }, 

    grace: {
      origin: ƒS.ORIGIN.BOTTOMCENTER,
      pose: {
        angry: "./../../Assets/characters/grace/Grace-angry.png",
        happy: "./../../Assets/characters/grace/Grace-happy.png",
        laugh: "./../../Assets/characters/grace/Grace-laugh.png",
        sad: "./../../Assets/characters/grace/Grace-sad.png",
        think: "./../../Assets/characters/grace/Grace-thinking.png"
      }
    }, 

    isaac: {
      origin: ƒS.ORIGIN.BOTTOMCENTER,
      pose: {
        cry: "./../../Assets/characters/isaac/Isaac-cry.png",
        crying: "./../../Assets/characters/isaac/Isaac-crying.png",
        happy: "./../../Assets/characters/isaac/Isaac-happy.png",
        neutral: "./../../Assets/characters/isaac/Isaac-neutral.png",
        sad: "./../../Assets/characters/isaac/Isaac-sad.png"
      }
    },

    odette: {
      origin: ƒS.ORIGIN.BOTTOMCENTER,
      pose: {
        happy: "./../../Assets/characters/odette/odette-happy.png",
        angry: "./../../Assets/characters/odette/odette.angry.png"
      }
    },

    remington: {
      origin: ƒS.ORIGIN.BOTTOMCENTER,
      pose: {
        angry: "./../../Assets/characters/remington/Remington-angry.png",
        neutral: "./../../Assets/characters/remington/Remington-neutral-first.png"
      }
    },

    stella: {
      origin: ƒS.ORIGIN.BOTTOMCENTER,
      pose: {
        frighten: "./../../Assets/characters/stella/stella-frighten.png",
        happy: "./../../Assets/characters/stella/stella-happy-first.png",
        laugh: "./../../Assets/characters/stella/stella-happy-laugh.png",
        sad: "./../../Assets/characters/stella/stella-sad.png"
      }
    }
  }

  export let dataForSave = {
    //Sachen die Gespeichert werden müssen
    Achievment: {
      saveTheCat: false
    }
  }

  window.addEventListener("load", start);
  function start(_event: Event): void {
    let scenes: ƒS.Scenes = [
      {scene: SceneOneInfront, name: "Scene" },
      {id: "SceneTwoEntrance", scene: SceneTwoEntrance, name: "SceneTwoEntrance"},
      {id: "SceneThreeSaalon", scene: SceneThreeSaalon, name: "SceneThreeSaalon"},
    ];

    // start the sequence
    ƒS.Progress.go(scenes);
  }
}