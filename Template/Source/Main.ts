namespace Template {
  export import ƒ = FudgeCore;
  export import ƒS = FudgeStory;

  console.log("Artemis Mysterium starting");

  //define transistions
  export let transistions = {
    inToOut: {
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
    themeinfrontManor: "../Asset/background/vorDemManorBackground.png",
    themeinfrontManorNight: "./../Assets/sounds/forest-chorus-12444.mp3",
    
    themeEntrance: "./../../Assets/sounds/peter-tchaikovsky-neapolitan-song-opus-Entry.mp3",

    themeSaloon: "./../../Assets/sounds/peter-tchaikovsky-march-from-nutcracker-classical-remix-7691.mp3",

    dramaInSaloon: "./../../Assets/sounds/classical-piano-peter-tchaikovsky-chant-sans-paroles-opus-40-6-21872.mp3",

    saloonAfterScrem : "./../../Assets/sounds/frederic-chopin-nocturne-21-classical-remix-7611.mp3",

    //SFX
    catMeow: "./../../Assets/sounds/cat-meow-6226.mp3",

    goingThrouBushes: "./../../Assets/sounds/fx/shaken-bushes.mp3",

    knockDoor: "./../../Assets/sounds/fx/knockDoor.wav", 

    alaisterLaugh: "./../../Assets/sounds/fx/alaistarLaugh.wav", 

    dinnerSound: "./../../Assets/sounds/fx/dinnerdishesmp3-14762.wav",
    waterGlass: "/Assets/sounds/fx/water-filled-cup-9901.mp3"
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
    }, 
    black: {
      name: "black",
      background: "./../../Assets/backgrounds/black.png"
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
      },
      positionStandard: {
        x: 15,
        y: 110
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
      }, 
      positionStandard: {
        x: 84,
        y: 110
      }
    },

    alaistar: {
      name: "Alaistar",
      origin: ƒS.ORIGIN.BOTTOMCENTER,
      pose: {
        angry: "./../../Assets/characters/alaistar/Alaistar-angry.png",
        happy: "./../../Assets/characters/alaistar/Alaistar-happy.png",
        neutral: "./../../Assets/characters/alaistar/Alaistar-neutral.png"
      },
      positionStandard: {
        x: 50,
        y: 105
      },
      positionRightMiddle: {
        x: 63,
        y: 115
      }
    }, 

    grace: {
      name: "Grace",
      origin: ƒS.ORIGIN.BOTTOMCENTER,
      pose: {
        angry: "./../../Assets/characters/grace/Grace-angry.png",
        happy: "./../../Assets/characters/grace/Grace-happy.png",
        laugh: "./../../Assets/characters/grace/Grace-laugh.png",
        sad: "./../../Assets/characters/grace/Grace-sad.png",
        think: "./../../Assets/characters/grace/Grace-thinking.png"
      },
      positionStandard: {
        x: 50,
        y: 110
      },
      positionLeftMiddle: {
        x: 35,
        y: 110
      }
    }, 

    isaac: {
      name: "Isaac",
      origin: ƒS.ORIGIN.BOTTOMCENTER,
      pose: {
        cry: "./../../Assets/characters/isaac/Isaac-cry.png",
        crying: "./../../Assets/characters/isaac/Isaac-crying.png",
        happy: "./../../Assets/characters/isaac/Isaac-happy.png",
        neutral: "./../../Assets/characters/isaac/Isaac-neutral.png",
        sad: "./../../Assets/characters/isaac/Isaac-sad.png"
      },
      positionStandard: {
        x: 50,
        y: 110
      },
      positionLeftMiddle: {
        x: 35,
        y: 110
      }
    },

    odette: {
      name: "Odette",
      origin: ƒS.ORIGIN.BOTTOMCENTER,
      pose: {
        happy: "./../../Assets/characters/odette/odette-happy.png",
        angry: "./../../Assets/characters/odette/odette.angry.png"
      }
    },

    remington: {
      name: "Remington",
      origin: ƒS.ORIGIN.BOTTOMCENTER,
      pose: {
        angry: "./../../Assets/characters/remington/Remington-angry.png",
        neutral: "./../../Assets/characters/remington/Remington-neutral-first.png"
      },
      positionStandard: {
        x: 50,
        y: 100
      }
    },

    stella: {
      name: "Stella",
      origin: ƒS.ORIGIN.BOTTOMCENTER,
      pose: {
        frighten: "./../../Assets/characters/stella/stella-frighten.png",
        happy: "./../../Assets/characters/stella/stella-happy-first.png",
        laugh: "./../../Assets/characters/stella/stella-happy-laugh.png",
        sad: "./../../Assets/characters/stella/stella-sad.png"
      }, 
      positionRightMiddle: {
        x: 63,
        y: 110
      }
    }
  }

  export let inventory = {
      //todo: static doesnt work
    ring: {
        name: "Ring", 
        description: "Ein Siegelring mit den Initalien O.R., im Busch vor dem Manor gefunden.",
        image: "./../../Assets/item/ring.png",
        static: true
    },

    cat: {
        name: "Halsband", 
        description: "Ein Halsband für eine Katze oder Hund. ",
        image: "./../../Assets/item/halsbandReal.png",
        static: true
    }

  }


  //Animation todo: 
  export function fromLeftToRight(startX: number, startY: number, endX: number, endY: number): ƒS.AnimationDefinition {
    return {
      start: { translation: ƒS.positionPercent(startX, startY) },
      end: { translation: ƒS.positionPercent(endX, endY) },
      duration: 2,
      playmode: ƒS.ANIMATION_PLAYMODE.PLAYONCE
    };
  }

  //grace falling
  export function fromMiddleDown(startX: number, startY: number, endY: number): ƒS.AnimationDefinition {
    return {
      start: { translation: ƒS.positionPercent(startX, startY), rotation: 0 },
      end: { translation: ƒS.positionPercent(startX, endY), rotation: 180 },
      duration: 2,
      playmode: ƒS.ANIMATION_PLAYMODE.PLAYONCE
    };
  }

  export let dataForSave = {
    //Sachen die Gespeichert werden müssen

    //StoryTracker
    foundRing: false, 
    spiedThroughWindow: false,
    mairePuked: false,
    maireFellInPond: false,
    maireHurtHerselfInCabin: false, 

    //Pointsystem
    pointDetectiv: 0, 
    pointFriend: 0,
    pointAngryGrace: 0,

    Achievment: {
      saveTheCat: false
    }
  }
  
  // Menü 

  export function showCredits(): void {
    ƒS.Text.addClass("credit");
    ƒS.Text.print("<b>Drehbuch:</b> Janina Bach  <br><b> Bilder: </b> Janina Bach <br> <b> Musik: </b>lizenzfrei von pixabay.com oder <br> <b> Tester:</b> XXX");
    //todo: Tester Und Musik ergänzen


  }

  let inGameMenuButtons = {
      save: "Speichern",
      load: "Laden",
      credit: "Mitwirkende",
      close: "Schließen"
  };

  let gameMenu: ƒS.Menu; 

  let menueIsOpen: boolean = true; 

  let inventoryOpen: boolean = false; 

  async function buttonFunctionalities(_option:string): Promise <void> {
    console.log(_option); 
    switch (_option){
      case inGameMenuButtons.save:
          await ƒS.Progress.save();
      break;
      case inGameMenuButtons.load:
          await ƒS.Progress.load();
      break;
      case inGameMenuButtons.close:
         gameMenu.close();
         menueIsOpen = false; 
      break;
      case inGameMenuButtons.credit:
          showCredits();
      break;
    }
    
  }

  //Shortcuts fürs Menü 

  document.addEventListener("keydown", hdnKeyPress);

  async function hdnKeyPress(_event:KeyboardEvent): Promise<void> {
    switch (_event.code){

      case ƒ.KEYBOARD_CODE.F8:
        console.log("Save");
        await ƒS.Progress.save();
        break

        case ƒ.KEYBOARD_CODE.F9:
          await ƒS.Progress.load(); 
          break; 

        case ƒ.KEYBOARD_CODE.M: 
        if(menueIsOpen){
          console.log("Close");
          gameMenu.close();
          menueIsOpen = false;
        } else {
          console.log("Open");
          gameMenu.open();
          menueIsOpen = true; 
        }
        break;

        case ƒ.KEYBOARD_CODE.I: 
        if(inventoryOpen){
          console.log("Close");
          ƒS.Inventory.close();
          inventoryOpen = false;
        } else {
          console.log("Open");
          ƒS.Inventory.open();
          inventoryOpen = true; 
        }
        break;
    }
  }

  // Iventory and Menue Button 
  document.getElementById("inventoryBtn")?.addEventListener("click", openOrcloseInventory)

  function openOrcloseInventory(){
    if(inventoryOpen){
      console.log("Close");
      ƒS.Inventory.close();
      inventoryOpen = false;
    } else {
      console.log("Open");
      ƒS.Inventory.open();
      inventoryOpen = true; 
    }
  }


  window.addEventListener("load", start);
  function start(_event: Event): void {

    gameMenu = ƒS.Menu.create(inGameMenuButtons, buttonFunctionalities, "gameMenu");
    buttonFunctionalities("Close");

    gameMenu.close();
    menueIsOpen = false;

    let scenes: ƒS.Scenes = [
      {scene: SceneOneInfront, name: "Scene" },
      {id: "SceneTwoEntrance", scene: SceneTwoEntrance, name: "SceneTwoEntrance"},
      {id: "SceneThreeSaalon", scene: SceneThreeSaalon, name: "SceneThreeSaalon"},
      {id: "SceneFourSaalonDrama", scene: SceneFourSaalonDrama, name:"SceneFourSaalonDrama"},
      {id: "SceneFiveOutside", scene: SceneFiveOutside, name: "SceneFiveOutside"},
      {id: "SceneSixGarden", scene: SceneSixGarden, name: "SceneSixGarden"},
      {id: "SceneSevenCabin", scene: SceneSevenCabin, name: "SceneSevenCabin"},
      {id: "SceneEightSaalonInterview", scene: SceneEightSaalonInterview, name: "SceneEightSaalonInterview"}
      
      //{id: "EndScreen", scene: EndScreen, name: "EndScreen"}
    ];

    // start the sequence
    ƒS.Progress.go(scenes);
  }
}