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
    }
  }

  export let sound = {
    //Themes
    themeMitGutenNamen: "",

    //SFX
    guterNameSoundEffekt: ""
  }

  export let location = {
    infrontOfManorDay: {
      name: "manorDay",
      background: "./../../Assets/backgrounds/vorDemManorBackground.png",

    },

    infrontOfManorNight: {
      name: "",
      background: "",

    },

    entrance: {
      name: "",
      background: "",

    },

    saloon: {
      name: "",
      background: "",

    }
  }

  export let charaktere = {
    bronte: {
      name: "Brontë",
      origin: ƒS.ORIGIN.BOTTOMCENTER, //Ankerpunkt im Bild
      pose: {
        neutral: ""
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
      { scene: Scene, name: "Scene" }
    ];

    // start the sequence
    ƒS.Progress.go(scenes);
  }
}