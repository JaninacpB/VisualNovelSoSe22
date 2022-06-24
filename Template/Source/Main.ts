namespace Template {
  export import ƒ = FudgeCore;
  export import ƒS = FudgeStory;

  console.log("Artemis Mysterium starting");

  // emotionen
  export let emotionen = {
    ausrufezeichen: "e-ausruf"
  }

  //define transistions
  export let transistions = {
    inToOut: {
      duration: 1,
      alpha: "Asset/Transition/02.png",
      edge: 1 //härtegrad
    },
    wallpaper: {
      duration: 1,
      alpha: "Asset/Transition/transistionWallpaper.png",
      edge: 1
    }
  }

  export let sound = {
    //Themes
    //Scene 1
    themeinfrontManor: "",

    themeinfrontManorNight: "Asset/sound/forest-chorus-12444.mp3",

    themeEntrance: "Asset/sound/peter-tchaikovsky-neapolitan-song-opus-Entry.mp3",

    themeSaloon: "Asset/sound/peter-tchaikovsky-march-from-nutcracker-classical-remix-7691.mp3",

    dramaInSaloon: "Asset/sound/classical-piano-peter-tchaikovsky-chant-sans-paroles-opus-40-6-21872.mp3",

    saloonAfterScrem: "Asset/sound/frederic-chopin-nocturne-21-classical-remix-7611.mp3",

    //SFX
    catMeow: "Asset/sound/cat-meow-6226.mp3",

    goingThrouBushes: "Asset/sound/fx/shaken-bushes.mp3",

    knockDoor: "Asset/sound/fx/knockDoor.wav",

    alaisterLaugh: "Asset/sound/fx/alaistarLaugh.wav",

    dinnerSound: "Asset/sound/fx/dinnerdishesmp3-14762.wav",
    waterGlass: "Asset/sound/fx/water-filled-cup-9901.mp3"
  }

  export let location = {

    infrontOfManorDay: {
      name: "manorDay",
      background: "Asset/background/vorDemManorBackground.png",
    },

    infrontOfManorNight: {
      name: "manorNight",
      background: "Asset/background/vorDemManorBackground-night.png",
    },

    entrance: {
      name: "entrance",
      background: "Asset/background/entryBackground.png",
    },

    saalon: {
      name: "saalon",
      background: "Asset/background/saalon.png",
    },

    gardenDark: {
      name: "gardenDark",
      background: "Asset/background/garden-night.png"
    },

    gardenLight: {
      name: "gardenLight",
      background: "Asset/background/gardenOn.png"
    },

    cabin: {
      name: "cabin",
      background: "Asset/background/doorSheat.png"
    },

    studyroom: {
      name: "studyroom",
      background: "Asset/background/studyroomBackground.png"
    },
    black: {
      name: "black",
      background: "Asset/background/backgrounds/black.png"
    }
  }

  export let charaktere = {

    bronte: {
      name: "Brontë",
      origin: ƒS.ORIGIN.BOTTOMCENTER, //Ankerpunkt im Bild
      pose: {
        happy: "Asset/character/bronte/Bronte-happy.png",
        angry: "Asset/character/bronte/Bronte-angry.png",
        laugh: "Asset/character/bronte/Bronte-laugh.png",
        sad: "Asset/character/bronte/Bronte-sad.png",
        shout: "Asset/character/bronte/Bronte-shout.png",
        think: "Asset/character/bronte/Bronte-think.png"
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
        neutral: "Asset/character/maire/Assestentin-neutral.png",
        embarrassed: "Asset/character/maire/Assestentin-emberassed.png",
        fear: "Asset/character/maire/Assestentin-fear.png",
        happy: "Asset/character/maire/Assestentin-happy.png",
        sad: "Asset/character/maire/Assestentin-sad.png",
        laugh: "Asset/character/maire/Assestentin-laugh.png"
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
        angry: "Asset/character/alaistar/Alaistar-angry.png",
        happy: "Asset/character/alaistar/Alaistar-happy.png",
        neutral: "Asset/character/alaistar/Alaistar-neutral.png"
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
        angry: "Asset/character/grace/Grace-angry.png",
        happy: "Asset/character/grace/Grace-happy.png",
        laugh: "Asset/character/grace/Grace-laugh.png",
        sad: "Asset/character/grace/Grace-sad.png",
        think: "Asset/character/grace/Grace-thinking.png"
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
        cry: "Asset/character/isaac/Isaac-cry.png",
        crying: "Asset/character/isaac/Isaac-crying.png",
        happy: "Asset/character/isaac/Isaac-happy.png",
        neutral: "Asset/character/isaac/Isaac-neutral.png",
        sad: "Asset/character/isaac/Isaac-sad.png"
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
        happy: "Asset/character/odette/odette-happy.png",
        angry: "Asset/character/odette/odette.angry.png"
      }
    },

    remington: {
      name: "Remington",
      origin: ƒS.ORIGIN.BOTTOMCENTER,
      pose: {
        angry: "Asset/character/remington/Remington-angry.png",
        neutral: "Asset/character/remington/Remington-neutral-first.png"
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
        frighten: "Asset/character/stella/stella-frighten.png",
        happy: "Asset/character/stella/stella-happy-first.png",
        laugh: "Asset/character/stella/stella-happy-laugh.png",
        sad: "Asset/character/stella/stella-sad.png"
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
      image: "Asset/item/ring.png",
      static: true
    },

    cat: {
      name: "Halsband",
      description: "Ein Halsband für eine Katze oder Hund. ",
      image: "Asset/item/halsbandReal.png",
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

  export function showDiary(): void {
    ƒS.Text.addClass("diaryEntrys");
    let diaryText = "<p> Früher Abend: Wir sind vor dem Anwesen der Blackburns angekommen. Hier erschreckte uns eine Katze, bevor wir hinein gehen können. </p>";
    //todo: beenden
    ƒS.Text.print(diaryText.toString());
  }

  let inGameMenuButtons = {
    save: "Speichern",
    load: "Laden",
    credit: "Mitwirkende",
    diary: "Tagebuch",
    close: "Schließen"
  };

  let gameMenu: ƒS.Menu;

  let menueIsOpen: boolean = true;

  let inventoryOpen: boolean = false;

  async function buttonFunctionalities(_option: string): Promise<void> {
    console.log(_option);
    switch (_option) {
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
      case inGameMenuButtons.diary:
         showDiary();
    }

  }

  //Shortcuts fürs Menü 

  document.addEventListener("keydown", hdnKeyPress);

  async function hdnKeyPress(_event: KeyboardEvent): Promise<void> {
    switch (_event.code) {

      case ƒ.KEYBOARD_CODE.F8:
        console.log("Save");
        await ƒS.Progress.save();
        break

      case ƒ.KEYBOARD_CODE.F9:
        await ƒS.Progress.load();
        break;

      case ƒ.KEYBOARD_CODE.M:
        if (menueIsOpen) {
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
        if (inventoryOpen) {
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

  function openOrcloseInventory() {
    if (inventoryOpen) {
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
      { scene: SceneOneInfront, name: "Scene" },
      { id: "SceneTwoEntrance", scene: SceneTwoEntrance, name: "SceneTwoEntrance" },
      { id: "SceneThreeSaalon", scene: SceneThreeSaalon, name: "SceneThreeSaalon" },
      { id: "SceneFourSaalonDrama", scene: SceneFourSaalonDrama, name: "SceneFourSaalonDrama" },
      { id: "SceneFiveOutside", scene: SceneFiveOutside, name: "SceneFiveOutside" },
      { id: "SceneSixGarden", scene: SceneSixGarden, name: "SceneSixGarden" },
      { id: "SceneSevenCabin", scene: SceneSevenCabin, name: "SceneSevenCabin" },
      { id: "SceneEightSaalonInterview", scene: SceneEightSaalonInterview, name: "SceneEightSaalonInterview" }

      //{id: "EndScreen", scene: EndScreen, name: "EndScreen"}
    ];

    let uiElement: HTMLElement = document.querySelector("[type=interface]");
    dataForSave = ƒS.Progress.setData(dataForSave, uiElement);

    // start the sequence
    ƒS.Progress.go(scenes);
  }

  // Helper Methodes
  export async function showEmotion(name: string, durationBreak: number): Promise<void> {

    document.getElementById(name).setAttribute("style", "display: inline;");
    await ƒS.Progress.delay(durationBreak);
    document.getElementById(name).setAttribute("style", "display: none;");
  }

}