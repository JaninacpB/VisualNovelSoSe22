namespace Artemis {
  export import ƒ = FudgeCore;
  export import ƒS = FudgeStory;

  console.log("Artemis Mysterium starting");

  export let emotionen = {
    ausrufezeichen: "e-ausruf"
  }

  export let transistions = {
    standard: {
      duration: 1,
      alpha: "Asset/Transition/17.png",
      edge: 1
    }
  }

  export let sound = {
    themeinfrontManor: "Asset/sound/infrontOfManorScene1PianoElegeant.mp3",

    themeinfrontManorNight: "Asset/sound/forest-chorus-12444.mp3",

    themeEntrance: "Asset/sound/peter-tchaikovsky-neapolitan-song-opus-Entry.mp3",

    themeSaloon: "Asset/sound/peter-tchaikovsky-march-from-nutcracker-classical-remix-7691.mp3",

    dramaInSaloon: "Asset/sound/classical-piano-peter-tchaikovsky-chant-sans-paroles-opus-40-6-21872.mp3",

    saloonAfterScrem: "Asset/sound/frederic-chopin-nocturne-21-classical-remix-7611.mp3",

    themeEntryhall: "Asset/sound/classical-piano-peter-tchaikovsky-mazurka-opus-39-10-21877.mp3",

    maireAndIsaac: "Asset/sound/trois-gymnopedie-gymnopedie-no-1-erik-satie-351s-12664.mp3",

    study: "Asset/sound/SoundStudy.mp3",

    final: "Asset/sound/tenseFinalMusik.mp3",

    finalGood: "Asset/sound/dance-of-the-sugar-plum-fairy-pyotr-ilyich-tchaikovsky-201s-11937.mp3",

    finalTranquille: "Asset/sound/suspense-piano-loop-90165.mp3",

    finalSad: "Asset/sound/teardrops-sad-song-piano-and-softpad-2763.mp3",

    endingSad: "Asset/sound/pianoSadEnding.mp3",

    endingHappy: "Asset/sound/PianoEndingHappy.mp3",

    endingReallyBad: "Asset/sound/EndingReallyBad.mp3",

    //SFX
    catMeow: "Asset/sound/cat-meow-6226.mp3",

    goingThrouBushes: "Asset/sound/fx/shaken-bushes.mp3",

    knockDoor: "Asset/sound/fx/knockDoor.wav",

    alaisterLaugh: "Asset/sound/fx/alaistarLaugh.wav",

    dinnerSound: "Asset/sound/fx/dinnerdishesmp3-14762.wav",
    waterGlass: "Asset/sound/fx/water-filled-cup-9901.mp3",

    stellaScream: "Asset/sound/fx/stella-Scream.mp3",

    graceScream: "Asset/sound/fx/GraceScream.mp3",

    gunShoot: "Asset/sound/fx/gunshootOne.mp3"
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

    studyroomWindow: {
      name: "studyroom",
      background: "Asset/background/studyroomBackground-open.png"
    },

    black: {
      name: "black",
      background: "Asset/background/black.png"
    }
  }

  export let charaktere = {

    bronte: {
      name: "Brontë",
      origin: ƒS.ORIGIN.BOTTOMCENTER,
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
      },
      positionMiddle: {
        x: 50,
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
        laugh: "Asset/character/maire/Assestentin-laugh.png",
        cry: "Asset/character/maire/Assestentin-horror-cry.png",
        shooked: "Asset/character/maire/Assestentin-horror.png",
        smallHorror: "Asset/character/maire/Assestentin-horror-small.png"
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
        neutral: "Asset/character/alaistar/Alaistar-neutral.png",
        confussed: "Asset/character/alaistar/Alaistar-confussed.png",
        evil: "Asset/character/alaistar/Alaistar-evil.png",
        emotionalDrained: "Asset/character/alaistar/Alaistar-drained.png"
      },
      positionStandard: {
        x: 50,
        y: 105
      },
      positionRightMiddle: {
        x: 63,
        y: 115
      },

      positionMiddle: {
        x: 50,
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
      },
      positionMiddle: {
        x: 50,
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
        angry: "Asset/character/odette/odette.angry.png",
        gleefull: "Asset/character/odette/odette-glücklich.png",
        sad: "Asset/character/odette/odette-sad.png",
        scream: "Asset/character/odette/odette-scream.png",
        think: "Asset/character/odette/odette-think.png",
        shadow: "Asset/character/odette/odette-silouette.png"
      },
      positionStandard: {
        x: 84,
        y: 110
      },
      positionMiddle: {
        x: 50,
        y: 110
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
      },
      positionMiddle: {
        x: 50,
        y: 110
      }
    },

    shadow: {
      name: "Unbekannte Gestalt"
    }

  }

  export let inventory = {

    ring: {
      name: "Ring",
      description: "Ein Siegelring mit den Initalien O.R., im Busch vor dem Manor gefunden.",
      image: "Asset/item/ring.png",
      static: true
    },

    collar: {
      name: "Halsband",
      description: "Artemis Halsband",
      image: "Asset/item/halsbandReal.png",
      static: true
    },

    pistol: {
      name: "Pistole",
      description: "Eine Pistole, die in Alaistars Mantel gefunden wurde. ",
      image: "Asset/item/pistole.png",
      static: true
    },

    testament: {
      name: "Testament",
      description: "Das echte Testament! Auf der Rückseite der Besitzurkunde des Hauses.",
      image: "Asset/item/Testament.png",
      static: true
    }

  }

  //Animation

  //grace falling
  export function fromMiddleDown(startX: number, startY: number, endY: number): ƒS.AnimationDefinition {
    return {
      start: { translation: ƒS.positionPercent(startX, startY), rotation: 0 },
      end: { translation: ƒS.positionPercent(startX, endY), rotation: 180 },
      duration: 2,
      playmode: ƒS.ANIMATION_PLAYMODE.PLAYONCE
    };
  }

  //maire sinking into water
  export function fromMiddleSinking(startX: number, startY: number, endY: number, timeDuration: number): ƒS.AnimationDefinition {
    return {
      start: { translation: ƒS.positionPercent(startX, startY) },
      end: { translation: ƒS.positionPercent(startX, endY) },
      duration: timeDuration,
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
    lookedAtCoats: false,
    tookGun: false,
    gotTestament: false,

    //for diary
    greetingInSaalonFinished: false,
    lookingInTheGardenForCluesFinished: false,
    foundCatCollarFinished: false,
    stellaScreamFinished: false,
    interviewFinished: false, 
    searchedCloakFinished: false,
    maireAndIsaacFinished: false,

    //Pointsystem
    // 8 möglich
    pointDetectiv: 0,
    // 5 möglich
    pointAngryMaire: 0,
    //3 max bevor Ende 
    pointAngryGrace: 0,
  }

  export let achievments: string[] = ["cat", "angryMaire", "angryGrace", "MaireAndBronte", "collar", "pound", "haggisDisgusting", "haggisYummy"];

  // Menü 
  export function showCredits(): void {
    ƒS.Text.addClass("credit");
    ƒS.Text.print("<b>Drehbuch:</b> Janina Bach  <br><b> Bilder: </b> Janina Bach <br> <b> Musik: </b>lizenzfrei von pixabay.com oder freesound.org <br> <b> Transistions: </b>free to use https://lemmasoft.renai.us/forums/viewtopic.php?f=52&t=37628<br> <b> Tester:</b> Tamara Auber, Alexander Thier, Jan Christmeier");
  }

  export function showDiary(): void {
    ƒS.Text.addClass("diaryEntrys");
    let diaryText = "<p> Früher Abend: Wir sind vor dem Anwesen der Blackburns angekommen. Hier erschreckte uns eine Katze, bevor wir hinein gehen können. </p>";
    
    if (dataForSave.greetingInSaalonFinished) {
      diaryText += "<p>Im Saalon treffen wir Mr. Blackburn ein konservativer und etwas herablassender Lord, dem das Anwesen gehört, seine Schwester Grace die Bronte und mich eingeladen hat und hier lebt und Isaac. Er scheint der Schwager zu sein und nicht sonderlich beliebt. </p>"
      if (dataForSave.mairePuked) {
        diaryText += "<p> Das Essen war fürchterlich. </p>"
      } else {
        diaryText += "<p> Das Essen war sehr köstlich!</p>"
      }

      if (dataForSave.lookingInTheGardenForCluesFinished) {
        diaryText += "<p>Artemis ist verschwunden! Die Katze von Grace. Aber da wir ja draußen eine Katze gesehen haben schauen wir uns jetzt im Garten mal genauer um. Oh und ich habe ja noch gar nicht den Ring erwähnt, den wir im Gebüsch gefunden haben! O.R. Für wenn steht das wohl?</p>"
      }
      if (dataForSave.foundCatCollarFinished) {
        if (dataForSave.maireFellInPond) {
          diaryText += "<p>ARG! Ich bin in den blöden Teich gefallen und wir mussten Grace beten die Lichter anzumachen. Warum waren die eigentlich aus?</p>"
        } else {
          diaryText += "<p>Komischerweise waren die Lichter defekt, aber nach etwas hin und her haben wir es schließlich doch hinbekommen.</p>"
        }
        diaryText += "<p>In der Hütte haben wir ein Halsband gefunden! Es gehört bestimmt Artemis. Aber von ihr war keine Spurt. Und merkwürdigerweise war der Schuppen auch zu gewesen. Hat sie jemand gar eingesperrt? Aber warum?</p>"
      }
      if (dataForSave.stellaScreamFinished) {
        diaryText += "<p>Dann haben wir einen Schrei gehört und sind schnell zurück ins Haus. Stella sah ganz blass aus und meinte jemand draußen gesehen zu haben. Grace welche vorhin noch aus aufgelöst war über das verschwinden der Katze war plötzlich viel ruhiger und bat uns den restlichen Abend nicht mit der Suche zu verbringen. Komisch. Vielleicht sollten wir mal mit den Anwesenden Reden und Hinweise sammeln.</p>";
      }

      if (dataForSave.interviewFinished) {
        diaryText += "<p> Isaac hat uns von seiner verstorbenen Frau Odette erzählt. Sie ist in der Themse vor Jahren ertrunken. Die Familie war wohl auch nicht begeistert von der Hochzeit. Gerade Remington schien nicht gut auf ihn zusprechen zu sein. </p>";
      }
      if (dataForSave.searchedCloakFinished) {
        diaryText += "<p>Ich schlug Bronte vor die Mäntel in der Halle zu durchsuchen.</p>";

        if (dataForSave.lookedAtCoats) {
          diaryText += "<p>Bronte fand die Idee gut und wir haben es uns genauer angeschauen. Es gab 4 Mäntel hier. Vermutlich die von Alaistar, Grace, Stella und Isaac.</p>";


          if (dataForSave.tookGun) {
            diaryText += "<p>In Alaistars Tasche war eine Pistole! Was will er damit? Zum Jagen war die nicht gedacht und das Anwesen scheint ja eigentlich nicht sonderlich bedrohlich. Wir haben sie mitgenommen.</p>";
          }

        } else {
          diaryText += "<p>Bronte fand die Idee jedoch nicht gut daher haben wir es gelassen. Vielleicht war das gut, denn kurz danach kam Isaac. Der wäre sicherlich nicht erfreut gewesen.</p>";
        }

      }
      if (dataForSave.maireAndIsaacFinished) {
        diaryText += "<p>Isaac erzählte mir wie sehr er Odette vermisst und er tut mir echt Leid. Er schien sie so zu lieben wie ich Bronte. Die ist mittlerweile alleine im Haus unterwegs und ich hoffe-  Was war das?</p>";
      }
    }
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
      { id: "SceneEightSaalonInterview", scene: SceneEightSaalonInterview, name: "SceneEightSaalonInterview" },
      { id: "SceneEightBInterviews", scene: SceneEightBInterviews, name: "SceneEightBInterviews" },
      { id: "SceneNineEntryhall", scene: SceneNineEntryhall, name: "SceneNineEntryhall" },
      { id: "SceneTenMaireAndIsaac", scene: SceneTenMaireAndIsaac, name: "SceneTenMaireAndIsaac" },
      { id: "SceneElevenStudy", scene: SceneElevenStudy, name: "SceneElevenStudy" },
      { id: "SceneTwelveFinal", scene: SceneTwelveFinal, name: "SceneTwelveFinal" },

      { id: "ExtraSceneBronteMaire", scene: ExtraSceneBronteMaire, name: "ExtraSceneBronteMaire" },

      { id: "EndingOneAllSurvive", scene: EndingOneAllSurvive, name: "EndingOneAllSurvive" },
      { id: "EndingTwoBronteDead", scene: EndingTwoBronteDead, name: "EndingTwoBronteDead" },
      { id: "EndingThreeOdetteDead", scene: EndingThreeOdetteDead, name: "EndingThreeOdetteDead" },
      { id: "EndingBadGraceAngry", scene: EndingBadGraceAngry, name: "EndingBadGraceAngry"},

      { id: "EndScreen", scene: EndScreen, name: "EndScreen" }
    ];

    let uiElement: HTMLElement = document.querySelector("[type=interface]");
    dataForSave = ƒS.Progress.setData(dataForSave, uiElement);


    let button: HTMLElement = document.getElementById('restartButton');
    button.addEventListener("click", listenerRestart);

    // start the sequence
    ƒS.Progress.go(scenes);
  }

  // Helper Methodes
  export async function showEmotion(name: string, durationBreak: number): Promise<void> {
    document.getElementById(name).setAttribute("style", "display: inline;");
    await ƒS.Progress.delay(durationBreak);
    document.getElementById(name).setAttribute("style", "display: none;");
  }

  export function listenerRestart(this: HTMLElement) {
    window.location.reload();
  }

  export function deleteInventory(name: string) {
    document.getElementById(name).remove();
  }

}