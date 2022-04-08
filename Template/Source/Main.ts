namespace Template {
  export import ƒ = FudgeCore;
  export import ƒS = FudgeStory;

  console.log("Artemis Mysterium starting");

  // define Transitions 
  // export let transistions = {
  //   puzzle: {
  //     duration: 1,
  //     alpha: "Link zum Bild",
  //     edge: 1 //härtegrad
  //   }
  // }

  export let sound = {
    //Themes
    themeMitGutenNamen: "",

    //SFX
    guterNameSoundEffekt: ""
  }

  export let location = {
    vollGuterName: {
      name: "",
      background: "Pfad",

    },
    vollGuterNameZweiter: {
      name: "",
      background: "",

    }
  }

  export let charaktere = {
    bronte: {
      name: "Bronte",
      origin: ƒS.ORIGIN.BOTTOMCENTER, //Ankerpunkt im Bild
      pose: {
        neutral: "pfad"
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