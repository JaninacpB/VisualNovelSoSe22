"use strict";
var Template;
(function (Template) {
    async function EndScreen() {
        // Bilder einblenden und Canvas entfernen
        document.getElementById('endScreen').classList.add('endScreenVisible');
        document.getElementById('endScreen').classList.remove('endScreenInvisible');
        document.getElementById('flexRestartButton').setAttribute("style", "display: flex");
        document.getElementById('achivementTitle').setAttribute("style", "display: block");
        let speech = document.getElementsByTagName('speech');
        let canvas = document.getElementsByTagName('scene');
        canvas[0].setAttribute("style", "height: 0px");
        speech[0].setAttribute("style", "vicibility: hidden;");
        //todo: färbe ein welche ausgelöst wurden maybe local Storage 
        await Template.ƒS.Sound.fade(Template.sound.themeinfrontManor, 0.1, 1, true);
    }
    Template.EndScreen = EndScreen;
})(Template || (Template = {}));
var Template;
(function (Template) {
    async function EndingBadGraceAngry() {
    }
    Template.EndingBadGraceAngry = EndingBadGraceAngry;
})(Template || (Template = {}));
var Template;
(function (Template) {
    async function EndingFiveAllSurvive() {
    }
    Template.EndingFiveAllSurvive = EndingFiveAllSurvive;
})(Template || (Template = {}));
var Template;
(function (Template) {
    async function EndingFourBronteDead() {
    }
    Template.EndingFourBronteDead = EndingFourBronteDead;
})(Template || (Template = {}));
var Template;
(function (Template) {
    async function EndingOneAllSurvive() {
    }
    Template.EndingOneAllSurvive = EndingOneAllSurvive;
})(Template || (Template = {}));
var Template;
(function (Template) {
    async function EndingSixOdetteDead() {
    }
    Template.EndingSixOdetteDead = EndingSixOdetteDead;
})(Template || (Template = {}));
var Template;
(function (Template) {
    async function EndingThreeAllSurvive() {
    }
    Template.EndingThreeAllSurvive = EndingThreeAllSurvive;
})(Template || (Template = {}));
var Template;
(function (Template) {
    async function EndingTwoBronteDead() {
    }
    Template.EndingTwoBronteDead = EndingTwoBronteDead;
})(Template || (Template = {}));
var Template;
(function (Template) {
    async function ExtraSceneBronteMaire() {
    }
    Template.ExtraSceneBronteMaire = ExtraSceneBronteMaire;
})(Template || (Template = {}));
var Template;
(function (Template) {
    Template.ƒ = FudgeCore;
    Template.ƒS = FudgeStory;
    console.log("Artemis Mysterium starting");
    // emotionen
    Template.emotionen = {
        ausrufezeichen: "e-ausruf"
    };
    //define transistions
    Template.transistions = {
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
    };
    Template.sound = {
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
    };
    Template.location = {
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
            background: "Asset/background/black.png"
        }
    };
    Template.charaktere = {
        bronte: {
            name: "Brontë",
            origin: Template.ƒS.ORIGIN.BOTTOMCENTER,
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
            origin: Template.ƒS.ORIGIN.BOTTOMCENTER,
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
            origin: Template.ƒS.ORIGIN.BOTTOMCENTER,
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
            origin: Template.ƒS.ORIGIN.BOTTOMCENTER,
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
            origin: Template.ƒS.ORIGIN.BOTTOMCENTER,
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
            origin: Template.ƒS.ORIGIN.BOTTOMCENTER,
            pose: {
                happy: "Asset/character/odette/odette-happy.png",
                angry: "Asset/character/odette/odette.angry.png"
            }
        },
        remington: {
            name: "Remington",
            origin: Template.ƒS.ORIGIN.BOTTOMCENTER,
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
            origin: Template.ƒS.ORIGIN.BOTTOMCENTER,
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
    };
    Template.inventory = {
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
    };
    //Animation todo: 
    function fromLeftToRight(startX, startY, endX, endY) {
        return {
            start: { translation: Template.ƒS.positionPercent(startX, startY) },
            end: { translation: Template.ƒS.positionPercent(endX, endY) },
            duration: 2,
            playmode: Template.ƒS.ANIMATION_PLAYMODE.PLAYONCE
        };
    }
    Template.fromLeftToRight = fromLeftToRight;
    //grace falling
    function fromMiddleDown(startX, startY, endY) {
        return {
            start: { translation: Template.ƒS.positionPercent(startX, startY), rotation: 0 },
            end: { translation: Template.ƒS.positionPercent(startX, endY), rotation: 180 },
            duration: 2,
            playmode: Template.ƒS.ANIMATION_PLAYMODE.PLAYONCE
        };
    }
    Template.fromMiddleDown = fromMiddleDown;
    Template.dataForSave = {
        //Sachen die Gespeichert werden müssen
        //StoryTracker
        foundRing: false,
        spiedThroughWindow: false,
        mairePuked: false,
        maireFellInPond: false,
        maireHurtHerselfInCabin: false,
        //for diary
        greetingInSaalonFinished: false,
        lookingInTheGardenForCluesFinished: false,
        foundCatCollarFinished: false,
        stellaScreamFinished: false,
        //todo:  an richtiger Stelle auf true setzen 
        lookingForCluesFinished: false,
        //Pointsystem
        pointDetectiv: 0,
        pointFriend: 0,
        pointAngryGrace: 0,
        Achievment: {
            saveTheCat: false
        }
    };
    // Menü 
    function showCredits() {
        Template.ƒS.Text.addClass("credit");
        Template.ƒS.Text.print("<b>Drehbuch:</b> Janina Bach  <br><b> Bilder: </b> Janina Bach <br> <b> Musik: </b>lizenzfrei von pixabay.com oder <br> <b> Tester:</b> XXX");
        //todo: Tester Und Musik ergänzen
    }
    Template.showCredits = showCredits;
    function showDiary() {
        Template.ƒS.Text.addClass("diaryEntrys");
        let diaryText = "<p> Früher Abend: Wir sind vor dem Anwesen der Blackburns angekommen. Hier erschreckte uns eine Katze, bevor wir hinein gehen können. </p>";
        //todo: beenden
        if (Template.dataForSave.greetingInSaalonFinished) {
            diaryText += "<p>Im Saalon treffen wir Mr. Blackburn ein konservativer und etwas herablassender Lord, dem das Anwesen gehört, seine Schwester Grace die Bronte und mich eingeladen hat und hier lebt und Isaac. Er scheint der Schwager zu sein und nicht sonderlich beliebt. </p>";
            if (Template.dataForSave.mairePuked) {
                diaryText += "<p> Das Essen war fürchterlich. </p>";
            }
            else {
                diaryText += "<p> Das Essen war sehr köstlich!</p>";
            }
            if (Template.dataForSave.lookingInTheGardenForCluesFinished) {
                diaryText += "<p>Artemis ist verschwunden! Die Katze von Grace. Aber da wir ja draußen eine Katze gesehen haben schauen wir uns jetzt im Garten mal genauer um. Oh und ich habe ja noch gar nicht den Ring erwähnt, den wir im Gebüsch gefunden haben! O.R. Für wenn steht das wohl?</p>";
            }
            if (Template.dataForSave.foundCatCollarFinished) {
                if (Template.dataForSave.maireFellInPond) {
                    diaryText += "<p>ARG! Ich bin in den blöden Teich gefallen und wir mussten Grace beten die Lichter anzumachen. Warum waren die eigentlich aus?</p>";
                }
                else {
                    diaryText += "<p>Komischerweise waren die Lichter defekt, aber nach etwas hin und her haben wir es schließlich doch hinbekommen.</p>";
                }
                diaryText += "<p>In der Hütte haben wir ein Halsband gefunden! Es gehört bestimmt Artemis. Aber von ihr war keine Spurt. Und merkwürdigerweise war der Schuppen auch zu gewesen. Hat sie jemand gar eingesperrt? Aber warum?</p>";
            }
            if (Template.dataForSave.stellaScreamFinished) {
                diaryText += "<p>Dann haben wir einen Schrei gehört und sind schnell zurück ins Haus. Stella sah ganz blass aus und meinte jemand draußen gesehen zu haben. Grace welche vorhin noch aus aufgelöst war über das verschwinden der Katze war plötzlich viel ruhiger und bat uns den restlichen Abend nicht mit der Suche zu verbringen. Komisch. Vielleicht sollten wir mal mit den Anwesenden Reden und Hinweise sammeln.</p>";
            }
        }
        Template.ƒS.Text.print(diaryText.toString());
    }
    Template.showDiary = showDiary;
    let inGameMenuButtons = {
        save: "Speichern",
        load: "Laden",
        credit: "Mitwirkende",
        diary: "Tagebuch",
        close: "Schließen"
    };
    let gameMenu;
    let menueIsOpen = true;
    let inventoryOpen = false;
    async function buttonFunctionalities(_option) {
        console.log(_option);
        switch (_option) {
            case inGameMenuButtons.save:
                await Template.ƒS.Progress.save();
                break;
            case inGameMenuButtons.load:
                await Template.ƒS.Progress.load();
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
    async function hdnKeyPress(_event) {
        switch (_event.code) {
            case Template.ƒ.KEYBOARD_CODE.F8:
                console.log("Save");
                await Template.ƒS.Progress.save();
                break;
            case Template.ƒ.KEYBOARD_CODE.F9:
                await Template.ƒS.Progress.load();
                break;
            case Template.ƒ.KEYBOARD_CODE.M:
                if (menueIsOpen) {
                    console.log("Close");
                    gameMenu.close();
                    menueIsOpen = false;
                }
                else {
                    console.log("Open");
                    gameMenu.open();
                    menueIsOpen = true;
                }
                break;
            case Template.ƒ.KEYBOARD_CODE.I:
                if (inventoryOpen) {
                    console.log("Close");
                    Template.ƒS.Inventory.close();
                    inventoryOpen = false;
                }
                else {
                    console.log("Open");
                    Template.ƒS.Inventory.open();
                    inventoryOpen = true;
                }
                break;
        }
    }
    // Iventory and Menue Button 
    document.getElementById("inventoryBtn")?.addEventListener("click", openOrcloseInventory);
    function openOrcloseInventory() {
        if (inventoryOpen) {
            console.log("Close");
            Template.ƒS.Inventory.close();
            inventoryOpen = false;
        }
        else {
            console.log("Open");
            Template.ƒS.Inventory.open();
            inventoryOpen = true;
        }
    }
    window.addEventListener("load", start);
    function start(_event) {
        gameMenu = Template.ƒS.Menu.create(inGameMenuButtons, buttonFunctionalities, "gameMenu");
        buttonFunctionalities("Close");
        gameMenu.close();
        menueIsOpen = false;
        let scenes = [
            { scene: Template.SceneOneInfront, name: "Scene" },
            { id: "SceneTwoEntrance", scene: Template.SceneTwoEntrance, name: "SceneTwoEntrance" },
            { id: "SceneThreeSaalon", scene: Template.SceneThreeSaalon, name: "SceneThreeSaalon" },
            { id: "SceneFourSaalonDrama", scene: Template.SceneFourSaalonDrama, name: "SceneFourSaalonDrama" },
            { id: "SceneFiveOutside", scene: Template.SceneFiveOutside, name: "SceneFiveOutside" },
            { id: "SceneSixGarden", scene: Template.SceneSixGarden, name: "SceneSixGarden" },
            { id: "SceneSevenCabin", scene: Template.SceneSevenCabin, name: "SceneSevenCabin" },
            { id: "SceneEightSaalonInterview", scene: Template.SceneEightSaalonInterview, name: "SceneEightSaalonInterview" },
            { id: "SceneEightBInterviews", scene: Template.SceneEightBInterviews, name: "SceneEightBInterviews" },
            { id: "SceneNineEntryhall", scene: Template.SceneNineEntryhall, name: "SceneNineEntryhall" },
            { id: "EndScreen", scene: Template.EndScreen, name: "EndScreen" }
        ];
        let uiElement = document.querySelector("[type=interface]");
        Template.dataForSave = Template.ƒS.Progress.setData(Template.dataForSave, uiElement);
        let button = document.getElementById('restartButton');
        button.addEventListener("click", listenerRestart);
        // start the sequence
        Template.ƒS.Progress.go(scenes);
    }
    // Helper Methodes
    async function showEmotion(name, durationBreak) {
        document.getElementById(name).setAttribute("style", "display: inline;");
        await Template.ƒS.Progress.delay(durationBreak);
        document.getElementById(name).setAttribute("style", "display: none;");
    }
    Template.showEmotion = showEmotion;
    function listenerRestart() {
        console.log("Test Button was activated");
        window.location.reload();
    }
    Template.listenerRestart = listenerRestart;
})(Template || (Template = {}));
var Template;
(function (Template) {
    async function SceneFourSaalonDrama() {
        let chooseBeRespectfull = {
            yes: "Ja",
            no: "Nein"
        };
        //todo am ende kann location einblenden weg
        await Template.ƒS.Location.show(Template.location.saalon);
        await Template.ƒS.update(0.1);
        await Template.ƒS.Sound.fade(Template.sound.themeSaloon, 0, 0.3);
        await Template.ƒS.Sound.play(Template.sound.dramaInSaloon, 0.1, true);
        await Template.ƒS.Character.show(Template.charaktere.maire, Template.charaktere.maire.pose.fear, Template.ƒS.positionPercent(Template.charaktere.maire.positionStandard.x, Template.charaktere.maire.positionStandard.y));
        await Template.ƒS.Character.show(Template.charaktere.isaac, Template.charaktere.isaac.pose.sad, Template.ƒS.positionPercent(Template.charaktere.isaac.positionStandard.x, Template.charaktere.isaac.positionStandard.y));
        await Template.ƒS.Character.show(Template.charaktere.bronte, Template.charaktere.bronte.pose.shout, Template.ƒS.positionPercent(Template.charaktere.bronte.positionStandard.x, Template.charaktere.bronte.positionStandard.y));
        await Template.ƒS.update(0.4);
        //todo: scream
        await Template.showEmotion(Template.emotionen.ausrufezeichen, 1);
        document.getElementById('speechContent').classList.add('textEffectBig');
        await Template.ƒS.Speech.tell(Template.charaktere.bronte, " !!!!! ");
        await Template.ƒS.Speech.tell(Template.charaktere.grace, " Artemis!");
        document.getElementById('speechContent').classList.remove('textEffectBig');
        await Template.ƒS.Character.hide(Template.charaktere.isaac);
        await Template.ƒS.Character.hide(Template.charaktere.bronte);
        await Template.ƒS.Character.hide(Template.charaktere.maire);
        await Template.ƒS.Character.show(Template.charaktere.grace, Template.charaktere.grace.pose.sad, Template.ƒS.positionPercent(Template.charaktere.grace.positionStandard.x, Template.charaktere.grace.positionStandard.y));
        await Template.ƒS.Character.show(Template.charaktere.bronte, Template.charaktere.bronte.pose.think, Template.ƒS.positionPercent(Template.charaktere.bronte.positionStandard.x, Template.charaktere.bronte.positionStandard.y));
        await Template.ƒS.Character.show(Template.charaktere.maire, Template.charaktere.maire.pose.neutral, Template.ƒS.positionPercent(Template.charaktere.maire.positionStandard.x, Template.charaktere.maire.positionStandard.y));
        await Template.ƒS.update(0.8);
        await Template.ƒS.Speech.tell(Template.charaktere.grace, "Jemand hat meine Artemis gestohlen!");
        await Template.ƒS.Character.hide(Template.charaktere.bronte);
        await Template.ƒS.Character.hide(Template.charaktere.maire);
        await Template.ƒS.Character.show(Template.charaktere.maire, Template.charaktere.maire.pose.fear, Template.ƒS.positionPercent(Template.charaktere.maire.positionStandard.x, Template.charaktere.maire.positionStandard.y));
        await Template.ƒS.Character.show(Template.charaktere.bronte, Template.charaktere.bronte.pose.shout, Template.ƒS.positionPercent(Template.charaktere.bronte.positionStandard.x, Template.charaktere.bronte.positionStandard.y));
        await Template.ƒS.update(0.4);
        await Template.ƒS.Speech.tell(Template.charaktere.maire, " Sie fällt! Oh jemand sollte sie- Fangen… ");
        await Template.ƒS.Character.animate(Template.charaktere.grace, Template.charaktere.grace.pose.sad, Template.fromMiddleDown(Template.charaktere.grace.positionStandard.x, Template.charaktere.grace.positionStandard.y, 100));
        await Template.ƒS.Character.hide(Template.charaktere.maire);
        await Template.ƒS.Character.show(Template.charaktere.maire, Template.charaktere.maire.pose.neutral, Template.ƒS.positionPercent(Template.charaktere.maire.positionStandard.x, Template.charaktere.maire.positionStandard.y));
        await Template.ƒS.update(0.4);
        await Template.ƒS.Speech.tell(Template.charaktere.maire, " Das gibt eine Beule. ");
        await Template.ƒS.Character.hide(Template.charaktere.bronte);
        await Template.ƒS.Character.show(Template.charaktere.bronte, Template.charaktere.bronte.pose.think, Template.ƒS.positionPercent(Template.charaktere.bronte.positionStandard.x, Template.charaktere.bronte.positionStandard.y));
        await Template.ƒS.update(0.4);
        await Template.ƒS.Speech.tell(Template.charaktere.bronte, " Nein schau, ihr Kopf ist sanft auf einen der Kissen gelandet. Sie ist geübt. Mrs. Grace? Alles in Ordnung? ");
        await Template.ƒS.Character.show(Template.charaktere.grace, Template.charaktere.grace.pose.sad, Template.ƒS.positionPercent(Template.charaktere.grace.positionLeftMiddle.x, Template.charaktere.grace.positionLeftMiddle.y));
        await Template.ƒS.update(0.8);
        await Template.ƒS.Speech.tell(Template.charaktere.grace, " Ich… oh… Nein! Meine Artemis wurde gestohlen! ");
        await Template.ƒS.Character.hide(Template.charaktere.bronte);
        await Template.ƒS.Character.show(Template.charaktere.bronte, Template.charaktere.bronte.pose.sad, Template.ƒS.positionPercent(Template.charaktere.bronte.positionStandard.x, Template.charaktere.bronte.positionStandard.y));
        await Template.ƒS.update(0.4);
        await Template.ƒS.Character.show(Template.charaktere.alaistar, Template.charaktere.alaistar.pose.angry, Template.ƒS.positionPercent(Template.charaktere.alaistar.positionRightMiddle.x, Template.charaktere.alaistar.positionRightMiddle.y));
        await Template.ƒS.update(0.4);
        await Template.ƒS.Speech.tell(Template.charaktere.alaistar, " Gestohlen? Die Katze. Grace stell dich doch bitte nicht so an. Und rede deutlich! ");
        await Template.ƒS.Character.hide(Template.charaktere.alaistar);
        await Template.ƒS.Character.show(Template.charaktere.alaistar, Template.charaktere.alaistar.pose.neutral, Template.ƒS.positionPercent(Template.charaktere.alaistar.positionRightMiddle.x, Template.charaktere.alaistar.positionRightMiddle.y));
        await Template.ƒS.update(0.4);
        await Template.ƒS.Speech.tell(Template.charaktere.grace, " Bestimmt gestohlen! Ich war im Arbeitszimmer, wo sie immer ist, wenn Mrs. May-Porter sie nicht in den Garten lässt und dort war sie nicht! ");
        await Template.ƒS.Character.hide(Template.charaktere.alaistar);
        await Template.ƒS.Character.show(Template.charaktere.alaistar, Template.charaktere.alaistar.pose.angry, Template.ƒS.positionPercent(Template.charaktere.alaistar.positionRightMiddle.x, Template.charaktere.alaistar.positionRightMiddle.y));
        await Template.ƒS.update(0.4);
        await Template.ƒS.Speech.tell(Template.charaktere.alaistar, " Aber Schwester. Das ist doch lächerlich. Sie wird hier irgendwo im Haus sein. Sieh doch wie viel Angst du der armen Stella einjagst! ");
        await Template.ƒS.Speech.tell(Template.charaktere.grace, " Nein! Sie wurde gestohlen! Ich weiß es einfach. ");
        await Template.ƒS.Character.hide(Template.charaktere.alaistar);
        await Template.ƒS.Character.show(Template.charaktere.alaistar, Template.charaktere.alaistar.pose.neutral, Template.ƒS.positionPercent(Template.charaktere.alaistar.positionRightMiddle.x, Template.charaktere.alaistar.positionRightMiddle.y));
        await Template.ƒS.Character.hide(Template.charaktere.bronte);
        await Template.ƒS.Character.show(Template.charaktere.bronte, Template.charaktere.bronte.pose.think, Template.ƒS.positionPercent(Template.charaktere.bronte.positionStandard.x, Template.charaktere.bronte.positionStandard.y));
        await Template.ƒS.update(0.4);
        await Template.ƒS.Speech.tell(Template.charaktere.bronte, " Entschuldigung Mr. Blackburn. Meine Begleitung und ich haben draußen bei der Ankunft tatsächlich eine Katze gesehen. ");
        await Template.ƒS.Speech.tell(Template.charaktere.bronte, " Wenn es Ihnen nichts ausmacht, könnten wir kurz raus gehen und schauen, ob wir sie finden.  ");
        await Template.ƒS.Speech.tell(Template.charaktere.grace, " Oh meine arme Artemis… Ganz alleine in dieser schrecklichen Welt! Was ist wenn sie irgend so einen Streuner trifft. Oh weh, die Arme zittert bestimmt vor Angst! ");
        await Template.ƒS.Character.hide(Template.charaktere.grace);
        await Template.ƒS.Character.show(Template.charaktere.isaac, Template.charaktere.isaac.pose.neutral, Template.ƒS.positionPercent(Template.charaktere.isaac.positionLeftMiddle.x, Template.charaktere.isaac.positionLeftMiddle.y));
        await Template.ƒS.update(0.4);
        await Template.ƒS.Speech.tell(Template.charaktere.isaac, " Kaum vorzustellen, warum sie weglaufen sollte… ");
        await Template.ƒS.Character.hide(Template.charaktere.isaac);
        await Template.ƒS.Character.show(Template.charaktere.grace, Template.charaktere.grace.pose.sad, Template.ƒS.positionPercent(Template.charaktere.grace.positionLeftMiddle.x, Template.charaktere.grace.positionLeftMiddle.y));
        await Template.ƒS.update(0.4);
        await Template.ƒS.Speech.tell(Template.charaktere.grace, " Bitte Miss Bronte! Helfen sie mir! Bitte. ");
        await Template.ƒS.Character.hide(Template.charaktere.bronte);
        await Template.ƒS.Character.show(Template.charaktere.bronte, Template.charaktere.bronte.pose.think, Template.ƒS.positionPercent(Template.charaktere.bronte.positionStandard.x, Template.charaktere.bronte.positionStandard.y));
        await Template.ƒS.update(0.4);
        await Template.ƒS.Speech.tell(Template.charaktere.bronte, " Natürlich. Wenn wir sie gerade wirklich draußen gesehen haben, kann sie ja nicht weit sein. Maire und ich schauen es uns kurz an. ");
        await Template.ƒS.Speech.tell(Template.charaktere.alaistar, " Einen Moment noch. ");
        await Template.ƒS.Character.hide(Template.charaktere.bronte);
        await Template.ƒS.Character.show(Template.charaktere.bronte, Template.charaktere.bronte.pose.happy, Template.ƒS.positionPercent(Template.charaktere.bronte.positionStandard.x, Template.charaktere.bronte.positionStandard.y));
        await Template.ƒS.update(0.4);
        await Template.ƒS.Speech.tell(Template.charaktere.bronte, " Ja? ");
        await Template.ƒS.Speech.tell(Template.charaktere.alaistar, " Bitte denken sie daran, dass Sie sich immer noch auf einem alten und sehr Ehrenwerten Anwesen befinden. Verhalten Sie sich dementsprechend.");
        let beeingRespectfullDecision = await Template.ƒS.Menu.getInput(chooseBeRespectfull, "basicChoice");
        switch (beeingRespectfullDecision) {
            case chooseBeRespectfull.yes:
                await Template.ƒS.Speech.tell(Template.charaktere.bronte, "Natürlich. Meine Untersuchungen nehmen immer Rücksicht auf die Betroffenen. ");
                await Template.ƒS.Speech.tell(Template.charaktere.alaistar, " Danke.");
                break;
            case chooseBeRespectfull.no:
                await Template.ƒS.Character.hide(Template.charaktere.bronte);
                await Template.ƒS.Character.show(Template.charaktere.bronte, Template.charaktere.bronte.pose.angry, Template.ƒS.positionPercent(Template.charaktere.bronte.positionStandard.x, Template.charaktere.bronte.positionStandard.y));
                await Template.ƒS.update(0.4);
                await Template.ƒS.Speech.tell(Template.charaktere.bronte, "Dass ist nicht akzeptabel. Meine Untersuchungen werden so geführt, wie ich es für richtig halte!");
                await Template.ƒS.Character.hide(Template.charaktere.alaistar);
                await Template.ƒS.Character.show(Template.charaktere.alaistar, Template.charaktere.alaistar.pose.angry, Template.ƒS.positionPercent(Template.charaktere.alaistar.positionRightMiddle.x, Template.charaktere.alaistar.positionRightMiddle.y));
                await Template.ƒS.update(0.4);
                await Template.ƒS.Speech.tell(Template.charaktere.alaistar, "Sie vergessen wohl, dass sie nur Gäste sind. Sollten Ihre „Untersuchungen“ unseren Frieden stören, werde ich sie auffordern zu gehen.");
                await Template.ƒS.Speech.tell(Template.charaktere.bronte, "Mhm…");
                Template.dataForSave.pointAngryGrace += 1;
                break;
        }
        await Template.ƒS.Character.hide(Template.charaktere.alaistar);
        await Template.ƒS.Character.hide(Template.charaktere.grace);
        await Template.ƒS.update(0.4);
        document.getElementById("meterScale").setAttribute("style", "display: block;");
        Template.ƒS.Text.addClass("scaleUnlocked");
        Template.ƒS.Text.print("<h4> Gemütleiste freigeschaltet </h4> <p>Achte auf die Gemütsleiste um bei deinen Gastgebern nicht negativ aufzufallen. Das Abendteuer könnte sonst schnell vorbei sein. ");
        await Template.ƒS.Character.hide(Template.charaktere.maire);
        await Template.ƒS.Character.show(Template.charaktere.maire, Template.charaktere.maire.pose.sad, Template.ƒS.positionPercent(Template.charaktere.maire.positionStandard.x, Template.charaktere.maire.positionStandard.y));
        await Template.ƒS.update(0.4);
        await Template.ƒS.Speech.tell(Template.charaktere.maire, "Wir sollten wirklich vorsichtig sein nicht den guten Willen unserer Gastgeber zu stören. ");
        await Template.ƒS.Speech.tell(Template.charaktere.bronte, "Scheinbar… lass uns gehen.");
        await Template.ƒS.Character.hide(Template.charaktere.maire);
        await Template.ƒS.Character.hide(Template.charaktere.bronte);
        await Template.ƒS.update(0.8);
        return "SceneFiveOutside";
    }
    Template.SceneFourSaalonDrama = SceneFourSaalonDrama;
})(Template || (Template = {}));
var Template;
(function (Template) {
    async function SceneEightBInterviews() {
        let chooseWhoToInterview = {
            stella: "Stella",
            alaistar: "Alaistar",
            searchRoom: "Raum anschauen",
            isaac: ""
        };
        let stellaTalk = {
            scream: "Schrei",
            family: "Familie",
            personInfrontOfHouse: "Gestalt vor Haus",
            somebodyelse: "Weggehen"
        };
        let alaistarTalk = {
            isaac: "Isaac",
            artemis: "Artemis",
            somebodyelse: "Weggehen"
        };
        let roomOptions = {
            painting: "Gemälde untersuchen",
            food: "Essen untersuchen",
            window: "Fenster untersuchen",
            somethingelse: "Weggehen"
        };
        let isaacTalk = {
            wife: "Ehefrau",
            family: "Familie",
            ring: "",
            somebodyelse: "Weggehen"
        };
        let stillInLoop = true;
        while (stillInLoop) {
            let userchooseWhoToInterview = await Template.ƒS.Menu.getInput(chooseWhoToInterview, "BasicChoice");
            switch (userchooseWhoToInterview) {
                case chooseWhoToInterview.stella:
                    await Template.ƒS.Speech.tell(Template.charaktere.stella, " Oh… wie kann ich helfen? ");
                    let stellaLoop = true;
                    while (stellaLoop) {
                        let userChooseStellaTalk = await Template.ƒS.Menu.getInput(stellaTalk, "BasicChoice");
                        switch (userChooseStellaTalk) {
                            case stellaTalk.family:
                                await Template.ƒS.Speech.tell(Template.charaktere.bronte, " Isaac ist dann dein Onkel? ");
                                await Template.ƒS.Speech.tell(Template.charaktere.stella, " Oh nein! Ich bin die Tochter von Leopold Dufour. Mein Onkel ist Graces Ehemann, welcher leider vor einigen Jahren verstorben ist. ");
                                await Template.ƒS.Speech.tell(Template.charaktere.stella, " Sie hat nur nach seinem tot wieder ihren Mädchennamen angenommen. Und da sie keine Kinder bekommen haben, hat sie mich unter ihre Fittiche genommen. ");
                                await Template.ƒS.Speech.tell(Template.charaktere.bronte, " Oh ich verstehe. Und wie sieht es bei Lord Blackburn mit der Familie aus? ");
                                await Template.ƒS.Speech.tell(Template.charaktere.stella, " Seine Frau ist in Wales im Landhaus der Familie und seine Söhne reisen zurzeit um die Welt soweit ich weiß.");
                                await Template.ƒS.Speech.tell(Template.charaktere.stella, " Er selber ist häufiger in London für geschäftliches und ist dann immer bei seiner Schwester, der er ja dafür extra das ehemalige Familienhaus gegeben hat. ");
                                await Template.ƒS.Speech.tell(Template.charaktere.bronte, " Ich sehe, die Familie kümmert sich umeinander.");
                                stellaTalk.family = "";
                                break;
                            case stellaTalk.personInfrontOfHouse:
                                await Template.ƒS.Speech.tell(Template.charaktere.bronte, " Vorhin schienen Sie sich ja wirklich sehr erschreckt zu haben. Können sie mehr darüber erzählen was genau sie ");
                                await Template.ƒS.Speech.tell(Template.charaktere.bronte, " Du hast die letzten Tage eine Gestalt vor dem Haus gesehen? ");
                                await Template.ƒS.Speech.tell(Template.charaktere.stella, " Oh… ich… vermutlich nicht… ");
                                await Template.ƒS.Speech.tell(Template.charaktere.maire, "(Bronte so kommen wir bei ihr nicht weiter.)");
                                stellaTalk.personInfrontOfHouse = "";
                                break;
                            case stellaTalk.scream:
                                await Template.ƒS.Speech.tell(Template.charaktere.bronte, " Vorhin schienen Sie sich ja wirklich sehr erschreckt zu haben. Können sie mehr darüber erzählen was genau sie so erschreckt hat? ");
                                await Template.ƒS.Speech.tell(Template.charaktere.stella, " Oh… Ich weiß nicht. ");
                                await Template.ƒS.Speech.tell(Template.charaktere.maire, " (Bronte wir müssen sie irgendwie überzeugen uns alles zu erzählen.) ");
                                await Template.ƒS.Speech.tell(Template.charaktere.bronte, " Mhm… ja aber wie?");
                                stellaTalk.scream = "";
                                break;
                            case stellaTalk.somebodyelse:
                                await Template.ƒS.Speech.tell(Template.charaktere.bronte, " Ich denke jemand anderes wäre gerade hilfreicher. ");
                                stellaLoop = false;
                                break;
                        }
                    }
                    if (stellaTalk.family.length == 0 && stellaTalk.personInfrontOfHouse.length == 0 && stellaTalk.scream.length == 0) {
                        chooseWhoToInterview.stella = "";
                    }
                    break;
                case chooseWhoToInterview.alaistar:
                    let alaistarLoop = true;
                    await Template.ƒS.Speech.tell(Template.charaktere.alaistar, " Ja, was ist los?");
                    while (alaistarLoop) {
                        let userChooseAlaistarTalk = await Template.ƒS.Menu.getInput(alaistarTalk, "BasicChoice");
                        switch (userChooseAlaistarTalk) {
                            case alaistarTalk.artemis:
                                //todo: DIALOG!!! 
                                alaistarTalk.artemis = "";
                                break;
                            case alaistarTalk.isaac:
                                await Template.ƒS.Speech.tell(Template.charaktere.bronte, " Ich möchte ihnen nicht zu nahetreten, aber ihre Beziehung zu ihrem Schwager scheint nicht sonderlich gut zu sein. ");
                                await Template.ƒS.Speech.tell(Template.charaktere.alaistar, " Nun, dass kann ich wohl schwer leugnen. ");
                                await Template.ƒS.Speech.tell(Template.charaktere.bronte, " Hat dies einen bestimmten Ursprung oder ist dies einfach… unterschiedlichen Charakteren geschuldet? ");
                                await Template.ƒS.Speech.tell(Template.charaktere.alaistar, " Um es diplomatisch auszudrücken, er passt einfach nicht in die Familie. Es ist sowohl für mich als auch für ihn eine Schande der gleichen Familie anzugehören. ");
                                await Template.ƒS.Speech.tell(Template.charaktere.alaistar, "  Um Himmelswillen, er muss arbeiten um Geld zu verdienen. Wie sieht dass denn bitte aus!? ");
                                await Template.ƒS.Speech.tell(Template.charaktere.maire, " (…) ");
                                await Template.ƒS.Speech.tell(Template.charaktere.alaistar, " Entschuldigen Sie. Gibt es nicht vielleicht ein anderes Thema über dass wir sprechen können? ");
                                alaistarTalk.isaac = "";
                                break;
                            case alaistarTalk.somebodyelse:
                                alaistarLoop = false;
                                break;
                        }
                    }
                    if (alaistarTalk.artemis.length == 0 && alaistarTalk.isaac.length == 0) {
                        chooseWhoToInterview.alaistar = "";
                    }
                    break;
                case chooseWhoToInterview.searchRoom:
                    let roomLoop = true;
                    await Template.ƒS.Speech.tell(Template.charaktere.bronte, "Lass uns den Raum genauer ansehen!");
                    while (roomLoop) {
                        let userChooseRoomOption = await Template.ƒS.Menu.getInput(roomOptions, "BasicChoice");
                        switch (userChooseRoomOption) {
                            case roomOptions.food:
                                if (Template.dataForSave.mairePuked) {
                                    await Template.ƒS.Speech.tell(Template.charaktere.maire, " Ihh! Bronte bleib davon weg. Ich kann mir, dass nicht ansehen. ");
                                }
                                else {
                                    await Template.ƒS.Speech.tell(Template.charaktere.maire, " Das müssen wir unbedingt bald mal wieder Essen. ");
                                    await Template.ƒS.Speech.tell(Template.charaktere.bronte, " Klar. Ungewöhnlich scheint hier aber nichts zu sein.");
                                }
                                roomOptions.food = "";
                                break;
                            case roomOptions.painting:
                                await Template.ƒS.Speech.tell(Template.charaktere.bronte, " Fällt dir etwas bei dem großen Bild auf? ");
                                await Template.ƒS.Speech.tell(Template.charaktere.maire, " Mhm… Es ist ziemlich hässlich. Wie alle Bilder hier. Ehrlich gesagt ist das ganze Anwesen ein wenig… schief und krumm. ");
                                await Template.ƒS.Speech.tell(Template.charaktere.bronte, " Da muss ich dir recht geben… aber das meine ich nicht. Schau dir die Personen an. ");
                                await Template.ƒS.Speech.tell(Template.charaktere.maire, " Ein alter Mann… wohl der Senor. Und ein junger Mann an seiner Seite, dass muss schon älter sein scheint ja Alaistar Blackburn zu sein. Und diese junge Frau war dann wohl Grace als sie jünger war. Ah und dann ein kleines Mädchen… mhm Stella ist das wohl nicht, aber wer sonst? ");
                                await Template.ƒS.Speech.tell(Template.charaktere.bronte, " Ein drittes Kind. Vom Abstand der Jahre vermutlich die Ehefrau von Isaac. Hast du dich nicht gewundert warum die Familie ihn so… schlecht behandelt? ");
                                await Template.ƒS.Speech.tell(Template.charaktere.maire, " Er ist gar kein Blackburn sondern nur angeheiratet? Aber wo ist seine Frau? Die fehlende Schwester spannend… ");
                                await Template.ƒS.Speech.tell(Template.charaktere.bronte, " Wir sollten auch mir Isaac reden.");
                                roomOptions.painting = "";
                                chooseWhoToInterview.isaac = "Isaac";
                                break;
                            case roomOptions.window:
                                await Template.ƒS.Speech.tell(Template.charaktere.maire, " Von hier muss Stella die Person gesehen haben. ");
                                await Template.ƒS.Speech.tell(Template.charaktere.bronte, " Ja. Mit dem Licht an kann man eigentlich viel vom Garten sehen. Den Teich, die Hecken und ein kleiner Bereich mit Stühlen und einen Pavillon. Ein wirklich schöner Garten. ");
                                await Template.ƒS.Speech.tell(Template.charaktere.maire, " Mhm ja… Was Stella wohl gesehen hat? ");
                                await Template.ƒS.Speech.tell(Template.charaktere.bronte, " Gute Frage…");
                                roomOptions.window = "";
                                break;
                            case roomOptions.somethingelse:
                                await Template.ƒS.Speech.tell(Template.charaktere.bronte, "Lass etwas anderes machen...");
                                roomLoop = false;
                                break;
                        }
                    }
                    if (roomOptions.food.length == 0 && roomOptions.painting.length == 0 && roomOptions.window.length == 0) {
                        chooseWhoToInterview.searchRoom = "";
                    }
                    break;
                case chooseWhoToInterview.isaac:
                    let issacLoop = true;
                    while (issacLoop) {
                        let userIsaacTalk = await Template.ƒS.Menu.getInput(isaacTalk, "BasicChoice");
                        switch (userIsaacTalk) {
                            case isaacTalk.family:
                                await Template.ƒS.Speech.tell(Template.charaktere.bronte, " Die Beziehung zu ihrer Familie ist nicht sonderlich eng, oder? ");
                                await Template.ƒS.Speech.tell(Template.charaktere.isaac, " Eng? Ja so kann man es wohl nennen. Ich war noch nie sonderlich beliebt bei den Blackburns. Immerhin besitzen meine Eltern kein Land. ");
                                await Template.ƒS.Speech.tell(Template.charaktere.maire, " Aber sie sind doch ein Anwalt! Dass ist doch ein sehr ehrbarer Beruf?! ");
                                await Template.ƒS.Speech.tell(Template.charaktere.isaac, " Haha… ja dass mag für sie so sein, aber bei den Blackburns ist das nicht genug. ");
                                await Template.ƒS.Speech.tell(Template.charaktere.bronte, " Ich verstehe, die Familie ist sehr konservativ und traditionell. ");
                                await Template.ƒS.Speech.tell(Template.charaktere.isaac, " So kann man es wohl ausdrücken…");
                                isaacTalk.family = "";
                                break;
                            case isaacTalk.wife:
                                await Template.ƒS.Speech.tell(Template.charaktere.bronte, " Isaac, dürfte ich sie etwas persönliches Fragen? ");
                                await Template.ƒS.Speech.tell(Template.charaktere.isaac, " Welch spannende Frage. Solange sie mich nicht beleidigen, sollte das in Ordnung gehen. ");
                                await Template.ƒS.Speech.tell(Template.charaktere.bronte, " Wir haben das Bild hier betrachtet und uns ist aufgefallen, dass die jüngste Tochter der Blackburns heute gar nicht anwesend ist. Wir nehmen an das ist ihre Frau? ");
                                await Template.ƒS.Speech.tell(Template.charaktere.isaac, " Oh… ja… das war sie. ");
                                await Template.ƒS.Speech.tell(Template.charaktere.bronte, " Oh, dass tut mir sehr leid. ");
                                await Template.ƒS.Speech.tell(Template.charaktere.isaac, " Danke für Ihre Anteilnahme… Odette war eine sehr liebenswürdige Person. Ich vermisse sie sehr. ");
                                await Template.ƒS.Speech.tell(Template.charaktere.maire, " Wie ist sie verstorben? ");
                                await Template.ƒS.Speech.tell(Template.charaktere.bronte, " Maire… dass ist wirklich sehr persönlich. Entschuldung Isaac. ");
                                await Template.ƒS.Speech.tell(Template.charaktere.isaac, " Nein, alles in Ordnung. Sie hat sich vor zwei Jahren in die Themse gestürzt. ");
                                await Template.ƒS.Speech.tell(Template.charaktere.bronte, " Oh! Wie überaus tragisch. Dass tut mir sehr leid. ");
                                await Template.ƒS.Speech.tell(Template.charaktere.isaac, " Ja… ");
                                await Template.ƒS.Speech.tell(Template.charaktere.maire, " Moment Mal… O.R. Bronte!");
                                isaacTalk.wife = "";
                                isaacTalk.ring = "Ring geben";
                                break;
                            case isaacTalk.ring:
                                await Template.ƒS.Speech.tell(Template.charaktere.bronte, " Könnten sie sich etwas ansehen? ");
                                await Template.ƒS.Speech.tell(Template.charaktere.isaac, " Oh natürlich. !!! Wo haben sie den her! ");
                                await Template.ƒS.Speech.tell(Template.charaktere.bronte, " Kennen sie den? ");
                                await Template.ƒS.Speech.tell(Template.charaktere.isaac, " Natürlich. Ich habe ihn gekauft. ");
                                await Template.ƒS.Speech.tell(Template.charaktere.bronte, " Oh… aber… oh… Ihre Frau Odette gehörte er oder? ");
                                await Template.ƒS.Speech.tell(Template.charaktere.maire, " Seiner toten Frau! ");
                                await Template.ƒS.Speech.tell(Template.charaktere.isaac, " Ja… ich fürchte das ist so. Wo haben sie ihn her? ");
                                await Template.ƒS.Speech.tell(Template.charaktere.bronte, " Wir haben ihn draußen in den Büschen gefunden, als uns die Katze heute erschrocken hat. ");
                                await Template.ƒS.Speech.tell(Template.charaktere.isaac, " !! ");
                                await Template.ƒS.Speech.tell(Template.charaktere.maire, " Geht es ihnen gut? Sie sehen… alarmiert aus. ");
                                await Template.ƒS.Speech.tell(Template.charaktere.isaac, " Wenn sie mich entschuldigen würden… Ich denke ich brauche etwas frische Luft. ");
                                await Template.ƒS.Speech.tell(Template.charaktere.bronte, " Natürlich. ");
                                await Template.ƒS.Speech.tell(Template.charaktere.maire, " Schau Bronte wer da wiederkommt! ");
                                await Template.ƒS.Speech.tell(Template.charaktere.bronte, " Und die anderen sind gerade in Gespräche vertieft. Das sollte ein guter Zeitpunkt sein mehr über die Familie zu erfahren.");
                                //Loop endet Szene Endet 
                                issacLoop = false;
                                stillInLoop = false;
                                break;
                            case isaacTalk.somebodyelse:
                                issacLoop = false;
                                break;
                        }
                    }
                    break;
            }
        }
        await Template.ƒS.Speech.tell(Template.charaktere.bronte, " Mr Remington? Hätten sie einen Moment Zeit? ");
        await Template.ƒS.Speech.tell(Template.charaktere.remington, " Wenn es nur kurz ist. Ich serviere gleich den Nachtisch. ");
        await Template.ƒS.Speech.tell(Template.charaktere.bronte, " Es geht ganz schnell… Ich habe gerade nur dieses schöne Bild bewundert und mir ist das junge Mädchen drauf aufgefallen. Es ist Odette oder? Die jüngste der Blackburn Geschwister. ");
        await Template.ƒS.Speech.tell(Template.charaktere.remington, " (traurig) Ja… So ist es. ");
        await Template.ƒS.Speech.tell(Template.charaktere.bronte, " Da sie bereits unter dem vorigen Lord gedient haben, nehme ich an sie kannten seine Tochter ebenfalls? ");
        await Template.ƒS.Speech.tell(Template.charaktere.remington, " Natürlich. Sie war der Sonnenschein der Familie. Als Kind nicht der jungen Stella unähnlich. ");
        await Template.ƒS.Speech.tell(Template.charaktere.bronte, " Und doch hat sie sich -ich nehme an entgegen dem Wunsch der Familie- dazu entschieden Isaac zu heiraten. ");
        await Template.ƒS.Speech.tell(Template.charaktere.remington, " (verägert) Ja… Das Arme Ding wurde von diesem… Schuft verführt und in ein unglückliches und viel zu kurzes Leben gestürzt. Es brach ihren Eltern das Herz. Und nach all dem Leid was er der Familie angetan hat, wäre er fast dafür belohnt wurden! ");
        await Template.ƒS.Speech.tell(Template.charaktere.bronte, " Belohnt wurde? Entschuldigung, wie meinen sie das? ");
        await Template.ƒS.Speech.tell(Template.charaktere.remington, " Nun das Testament von der ehemaligen Lady Blackburn – der Mutter der Geschwister- sah eigentlich vor das alle ihre Kinder ein Teil des Vermögens bekommen sollten. Aber sie änderte es kurz vor ihrem Tod. Zum Glück. Wenig später verstarb Odette und stellen sie sich nur vor Isaac hätte auch nur einen Pfennig davon gesehen! (XXX Isaac Nachname?) ");
        await Template.ƒS.Speech.tell(Template.charaktere.bronte, " Ja… welch ein Glück. ");
        await Template.ƒS.Speech.tell(Template.charaktere.remington, " Verzeihen sie mir ich muss das Essen auftischen. ");
        await Template.ƒS.Speech.tell(Template.charaktere.bronte, " Natürlich… Ähm ich glaube ich muss mir noch kurz die Haare richten. Maire würdest du mir helfen. ");
        await Template.ƒS.Speech.tell(Template.charaktere.maire, " Bei deinen Haaren aber die sind doch- !!! Oh, natürlich! Wir sind gleich wieder da!");
        return "SceneNineEntryhall";
        //todo: einfügen wo minus Punkte möglich if Abfrage und dann methode abspielen und danach return zu badending 
        async function graceBadEnding() {
            await Template.ƒS.Speech.tell(Template.charaktere.grace, " Der Pudding ist da! Oh was verzieht ihr dann alle für Gesichter? ");
            await Template.ƒS.Speech.tell(Template.charaktere.alaistar, " Ich glaube unsere Detektiv Gäste haben leider etwas die Stimmung runtergezogen mit ihren lästigen Fragen. ");
            await Template.ƒS.Speech.tell(Template.charaktere.grace, " Ich bin sehr enttäuscht von Ihnen Miss Bronte! Ich hatte bessere Manieren von Ihnen erwartet. ");
            await Template.ƒS.Speech.tell(Template.charaktere.bronte, " Oh, dass- ");
            await Template.ƒS.Speech.tell(Template.charaktere.grace, " Nein, bitte gehen sie alle. Ich habe Kopfschmerzen.");
        }
    }
    Template.SceneEightBInterviews = SceneEightBInterviews;
})(Template || (Template = {}));
var Template;
(function (Template) {
    async function SceneEightSaalonInterview() {
        let chooseWhathappendToCat = {
            fellInWater: "Wasser gefallen",
            brokeIn: "Hütte eingebrochen",
            closedIn: "Hütte eingesperrt"
        };
        let chooseGiveCollar = {
            no: "Nein",
            yes: "Ja"
        };
        let chooseWhereIsCat = {
            catnapped: "Entführt",
            fleedThroughRoof: "Durch Dach entkommen"
        };
        let chooseWhatDoAfterExplainingCat = {
            stop: "Aufhören",
            continue: "Weitermachen"
        };
        await Template.ƒS.Location.show(Template.location.saalon);
        await Template.ƒS.update(Template.transistions.inToOut.duration, Template.transistions.inToOut.alpha, Template.transistions.inToOut.edge);
        await Template.ƒS.Sound.fade(Template.sound.saloonAfterScrem, 0.1, 0.2, true);
        await Template.ƒS.Character.show(Template.charaktere.maire, Template.charaktere.maire.pose.fear, Template.ƒS.positionPercent(Template.charaktere.maire.positionStandard.x, Template.charaktere.maire.positionStandard.y));
        await Template.ƒS.Character.show(Template.charaktere.bronte, Template.charaktere.bronte.pose.think, Template.ƒS.positionPercent(Template.charaktere.bronte.positionStandard.x, Template.charaktere.bronte.positionStandard.y));
        await Template.ƒS.update(0.8);
        await Template.ƒS.Speech.tell(Template.charaktere.alaistar, " Da kommen sie ja schon… ");
        await Template.ƒS.Speech.tell(Template.charaktere.bronte, " Was ist passiert? ");
        await Template.ƒS.Speech.tell(Template.charaktere.grace, " Ja uns geht es gut. Die gute Stella hat sich nur erschreckt. ");
        await Template.ƒS.Speech.tell(Template.charaktere.stella, " … ");
        await Template.ƒS.Speech.tell(Template.charaktere.alaistar, " Sie hat wohl draußen einen Baum gesehen, der sie erschreckt hat oder so. Ein wenig hysterisch die Gute. ");
        await Template.ƒS.Speech.tell(Template.charaktere.stella, " … ");
        await Template.ƒS.Speech.tell(Template.charaktere.alaistar, " Wie sind ihre „Ermittlungen“ vorangekommen. ");
        await Template.ƒS.Speech.tell(Template.charaktere.bronte, " Gut. Wir haben ein Hinweis auf den Verbleib der Katze gefunden. Sie ist in");
        //Auswahl1 todo: detectives points
        let userChooseWhathappendToCat = await Template.ƒS.Menu.getInput(chooseWhathappendToCat, "basicChoice");
        switch (userChooseWhathappendToCat) {
            case chooseWhathappendToCat.fellInWater:
                await Template.ƒS.Speech.tell(Template.charaktere.bronte, "Sie ist aufgrund der Dunkelheit vor dem Manor ins Wasser gefallen.");
                await wrongAssumptionBronteFirstChoice();
                await rightChoiceFirstChoice();
                break;
            case chooseWhathappendToCat.brokeIn:
                await Template.ƒS.Speech.tell(Template.charaktere.bronte, "Sie ist in die Gartenhütte eingebrochen!");
                await wrongAssumptionBronteFirstChoice();
                await rightChoiceFirstChoice();
                break;
            case chooseWhathappendToCat.closedIn:
                await Template.ƒS.Speech.tell(Template.charaktere.bronte, "Es sieht ganz so aus als hätte jemand die in die Hütte eingesperrt. Wir haben die Säule weggeschoben, aber in der Hütte war nur noch das Halsband. ");
                await Template.ƒS.Speech.tell(Template.charaktere.grace, " Ooooh... kann ich es wiederhaben?");
                break;
        }
        let userChooseGiveCollar = await Template.ƒS.Menu.getInput(chooseGiveCollar, "basicChoice");
        switch (userChooseGiveCollar) {
            case chooseGiveCollar.yes:
                // Ja todo: Halsband aus Inventar löschen  
                await Template.ƒS.Speech.tell(Template.charaktere.bronte, "Natürlich. Hier");
                break;
            case chooseGiveCollar.no:
                await Template.ƒS.Speech.tell(Template.charaktere.bronte, "Nein, es ist weiterhin Teil der Untersuchung");
                Template.dataForSave.pointAngryGrace += 1;
                break;
        }
        await Template.ƒS.Speech.tell(Template.charaktere.isaac, "Aber wenn sie das Halsband gefunden haben, wo ist dann die Katze? ");
        await Template.ƒS.Speech.tell(Template.charaktere.bronte, "Ganz einfach:");
        let userChooseWhereIsCat = await Template.ƒS.Menu.getInput(chooseWhereIsCat, "basicChoice");
        switch (userChooseWhereIsCat) {
            case chooseWhereIsCat.catnapped:
                await Template.ƒS.Speech.tell(Template.charaktere.bronte, "Sie wurde entführt! ");
                await Template.ƒS.Speech.tell(Template.charaktere.alaistar, "Meinten sie nicht gerade, sie wäre eingesperrt worden? Klingt nicht nach einer Entführung für mich. ");
                await Template.ƒS.Speech.tell(Template.charaktere.bronte, " Oh äh… ich meinte...");
            //wichtig kein Break hier! soll anderen Dialog auslösen! 
            case chooseWhereIsCat.fleedThroughRoof:
                await Template.ƒS.Speech.tell(Template.charaktere.bronte, "Sie ist durch das Dach entkommen! Und dabei hat sie ihr Halsband verloren.");
                break;
        }
        //todo: Number correct maybe
        if (Template.dataForSave.pointDetectiv < -2) {
            await Template.ƒS.Speech.tell(Template.charaktere.grace, "Mhm… Ihren anderen Fall haben sie eleganter gelöst… Sie scheinen heute etwas verwirrt zu sein.");
        }
        //todo: maire punkte prüfe
        if (Template.dataForSave.pointFriend < -2) {
            await Template.ƒS.Speech.tell(Template.charaktere.maire, " Sie hat einen Punkt… ");
        }
        //todo: if point detective 
        await Template.ƒS.Speech.tell(Template.charaktere.grace, " Aber ich denke sie haben Recht. Artemis wird bestimmt bald wieder auftauchen. Wir müssen einfach etwas vorsichtiger mit ihr sein. Danke für ihre Investigation. ");
        await Template.ƒS.Speech.tell(Template.charaktere.bronte, " … Äh? Ich werde natürlich erst aufhören, wenn Artemis wieder sicher da ist. ");
        await Template.ƒS.Speech.tell(Template.charaktere.grace, " Oh, ich denke das ist nicht notwendig… ");
        await Template.ƒS.Speech.tell(Template.charaktere.bronte, " Aber… Sind sie sicher? ");
        await Template.ƒS.Speech.tell(Template.charaktere.grace, " Ja natürlich. Ich meine sie ist nur eine Katze. Sie wird schon wissen was sie tut. Lassen sie uns den Abend dadurch nicht vermasseln. ");
        await Template.ƒS.Speech.tell(Template.charaktere.bronte, " Wenn das ihr Wunsch ist. ");
        await Template.ƒS.Speech.tell(Template.charaktere.maire, " (… nur eine Katze? Sie hatte vorhin fast einen Nervenzusammenbruch.) ");
        await Template.ƒS.Speech.tell(Template.charaktere.grace, " Perfekt. Ich lasse mal den Nachtisch holen! ");
        await Template.ƒS.Speech.tell(Template.charaktere.maire, " Das war… ");
        await Template.ƒS.Speech.tell(Template.charaktere.bronte, " Merkwürdig. ");
        await Template.ƒS.Speech.tell(Template.charaktere.maire, " Und wie. ");
        await Template.ƒS.Speech.tell(Template.charaktere.bronte, " Irgendwas stimmt hier doch nicht… Die Katze wurde eingesperrt aber Lady Grace scheint gar nicht daran interessiert zu sein.");
        await Template.ƒS.Speech.tell(Template.charaktere.bronte, " Oder um das Wohlbehagen von Artemis, obwohl sie vorhin so besorgt um sie war. ");
        await Template.ƒS.Speech.tell(Template.charaktere.maire, " Mhm… und sie will nicht, dass wir weiter investigieren. Was machen wir jetzt?");
        let userChooseWhatDoAfterExplainingCat = await Template.ƒS.Menu.getInput(chooseWhatDoAfterExplainingCat, "BasicChoice");
        switch (userChooseWhatDoAfterExplainingCat) {
            case chooseWhatDoAfterExplainingCat.stop:
                await Template.ƒS.Speech.tell(Template.charaktere.bronte, " Wir sollten aufhören. ");
                await Template.ƒS.Speech.tell(Template.charaktere.maire, " WAS!? Das kann nicht dein Ernst sein! ");
                await Template.ƒS.Speech.tell(Template.charaktere.bronte, " Mhm… vielleicht lieber nicht. ");
                await Template.ƒS.Speech.tell(Template.charaktere.maire, " Wir sollten auf jeden Fall weitermachen!");
                break;
            case chooseWhatDoAfterExplainingCat.continue:
                await Template.ƒS.Speech.tell(Template.charaktere.bronte, " Wir sollten weiter investigieren. Nur ein wenig vorsichtiger. ");
                await Template.ƒS.Speech.tell(Template.charaktere.maire, " Wir können damit anfangen die Gäste zu befragen und uns ein wenig umsehen! ");
                await Template.ƒS.Speech.tell(Template.charaktere.bronte, " Gute Idee! Wir müssen nur vorsichtig sein. Lass uns anfangen mit:");
                break;
        }
        Template.dataForSave.stellaScreamFinished = true;
        return "SceneEightBInterviews";
        //Fehlerdialog Auswahl chooseWhathappendToCat
        async function wrongAssumptionBronteFirstChoice() {
            await Template.ƒS.Speech.tell(Template.charaktere.alaistar, " … Das ist ein Witz, richtig? ");
            await Template.ƒS.Speech.tell(Template.charaktere.maire, " Oh ja… Bronte erzähl was wirklich passiert ist du Scherzkeks.");
        }
        async function rightChoiceFirstChoice() {
            await Template.ƒS.Speech.tell(Template.charaktere.bronte, "Es sieht ganz so aus als hätte jemand die in die Hütte eingesperrt. Wir haben die Säule weggeschoben, aber in der Hütte war nur noch das Halsband. ");
            await Template.ƒS.Speech.tell(Template.charaktere.grace, " Ooooh... kann ich es wiederhaben?");
        }
    }
    Template.SceneEightSaalonInterview = SceneEightSaalonInterview;
})(Template || (Template = {}));
var Template;
(function (Template) {
    async function SceneNineEntSceneElevenStudy() {
    }
    Template.SceneNineEntSceneElevenStudy = SceneNineEntSceneElevenStudy;
})(Template || (Template = {}));
var Template;
(function (Template) {
    async function SceneFiveOutside() {
        //Alle Wahlmöglichkeiten in Szene 
        let choosePerson = {
            Grace: "Die Lady",
            Stella: "Die Nichte",
            Butler: "Der Butler",
            Alaistar: "Der Lord",
            Isaac: "Der Schwager"
        };
        let chooseWhatToDoInfrontGarden = {
            garden: "Spuren folgen",
            go: "Aufgeben"
        };
        await Template.ƒS.Location.show(Template.location.infrontOfManorNight);
        await Template.ƒS.update(Template.transistions.inToOut.duration, Template.transistions.inToOut.alpha, Template.transistions.inToOut.edge);
        await Template.ƒS.Sound.fade(Template.sound.themeinfrontManorNight, 0.1, 0.2, true);
        await Template.ƒS.Character.show(Template.charaktere.maire, Template.charaktere.maire.pose.neutral, Template.ƒS.positionPercent(Template.charaktere.maire.positionStandard.x, Template.charaktere.maire.positionStandard.y));
        await Template.ƒS.Character.show(Template.charaktere.bronte, Template.charaktere.bronte.pose.happy, Template.ƒS.positionPercent(Template.charaktere.bronte.positionStandard.x, Template.charaktere.bronte.positionStandard.y));
        await Template.ƒS.update(0.8);
        if (Template.dataForSave.mairePuked == true) {
            await Template.ƒS.Character.hide(Template.charaktere.maire);
            await Template.ƒS.Character.show(Template.charaktere.maire, Template.charaktere.maire.pose.embarrassed, Template.ƒS.positionPercent(Template.charaktere.maire.positionStandard.x, Template.charaktere.maire.positionStandard.y));
            await Template.ƒS.update(0.4);
            await Template.ƒS.Speech.tell(Template.charaktere.maire, " Endlich frische Luft! Schafsmagen… Mich schüttelt es immer noch. ");
            await Template.ƒS.Speech.tell(Template.charaktere.bronte, " Arme Maire, das Essen hat sie wirklich mitgenommen.");
        }
        Template.dataForSave.lookingInTheGardenForCluesFinished = true;
        await Template.ƒS.Character.hide(Template.charaktere.maire);
        await Template.ƒS.Character.hide(Template.charaktere.bronte);
        await Template.ƒS.Character.show(Template.charaktere.maire, Template.charaktere.maire.pose.neutral, Template.ƒS.positionPercent(Template.charaktere.maire.positionStandard.x, Template.charaktere.maire.positionStandard.y));
        await Template.ƒS.Character.show(Template.charaktere.bronte, Template.charaktere.bronte.pose.think, Template.ƒS.positionPercent(Template.charaktere.bronte.positionStandard.x, Template.charaktere.bronte.positionStandard.y));
        await Template.ƒS.update(0.4);
        await Template.ƒS.Speech.tell(Template.charaktere.bronte, " Also vorhin ist sie in Richtung des Gebüsches gelaufe.");
        if (Template.dataForSave.foundRing == true) {
            await Template.ƒS.Character.show(Template.charaktere.bronte, Template.charaktere.bronte.pose.think, Template.ƒS.positionPercent(Template.charaktere.bronte.positionStandard.x, Template.charaktere.bronte.positionStandard.y));
            await Template.ƒS.update(0.4);
            await Template.ƒS.Speech.tell(Template.charaktere.bronte, "Und ziemlich schnell, immerhin haben wir sie danach nicht mehr gesehen.");
            await Template.ƒS.Character.show(Template.charaktere.maire, Template.charaktere.maire.pose.sad, Template.ƒS.positionPercent(Template.charaktere.maire.positionStandard.x, Template.charaktere.maire.positionStandard.y));
            await Template.ƒS.update(0.4);
            await Template.ƒS.Speech.tell(Template.charaktere.maire, " Mhm, hast du noch den Ring? ");
            await Template.ƒS.Speech.tell(Template.charaktere.bronte, " Klar hier…");
        }
        else {
            await Template.ƒS.Character.hide(Template.charaktere.bronte);
            await Template.ƒS.Character.show(Template.charaktere.bronte, Template.charaktere.bronte.pose.shout, Template.ƒS.positionPercent(Template.charaktere.bronte.positionStandard.x, Template.charaktere.bronte.positionStandard.y));
            await Template.ƒS.update(0.4);
            await Template.ƒS.Speech.tell(Template.charaktere.bronte, "Also mal schauen, was dort ist. Mhm… oh! Was ist das? ");
            await Template.ƒS.Sound.play(Template.sound.goingThrouBushes, 1);
            await Template.ƒS.Inventory.add(Template.inventory.ring);
            await Template.ƒS.Inventory.open();
            await Template.ƒS.Speech.tell(Template.charaktere.bronte, "Ein Siegelring? Was macht der dann hier? ");
        }
        await Template.ƒS.Character.hide(Template.charaktere.bronte);
        await Template.ƒS.Character.show(Template.charaktere.bronte, Template.charaktere.bronte.pose.think, Template.ƒS.positionPercent(Template.charaktere.bronte.positionStandard.x, Template.charaktere.bronte.positionStandard.y));
        await Template.ƒS.update(0.4);
        await Template.ƒS.Speech.tell(Template.charaktere.bronte, " Er sieht durchaus edel aus. Ein wenig dreckig nur. Mit den Buchstaben O.R. soweit ich es erkennen kann. ");
        await Template.ƒS.Character.hide(Template.charaktere.maire);
        await Template.ƒS.Character.show(Template.charaktere.maire, Template.charaktere.maire.pose.happy, Template.ƒS.positionPercent(Template.charaktere.maire.positionStandard.x, Template.charaktere.maire.positionStandard.y));
        await Template.ƒS.update(0.4);
        await Template.ƒS.Speech.tell(Template.charaktere.maire, " O und R…. oh! Wir kennen jemanden zu dem R. passen würde!");
        //todo: Punkte System 
        let userChoosePersonToRing = await Template.ƒS.Menu.getInput(choosePerson, "basicChoice");
        switch (userChoosePersonToRing) {
            case choosePerson.Butler:
                await Template.ƒS.Character.hide(Template.charaktere.bronte);
                await Template.ƒS.Character.show(Template.charaktere.bronte, Template.charaktere.bronte.pose.happy, Template.ƒS.positionPercent(Template.charaktere.bronte.positionStandard.x, Template.charaktere.bronte.positionStandard.y));
                await Template.ƒS.update(0.4);
                await Template.ƒS.Speech.tell(Template.charaktere.bronte, " Gute Schlussfolgerung… Der Butler heißt Remington. Aber ob der Vorname passt?");
                break;
            default:
                await Template.ƒS.Character.hide(Template.charaktere.maire);
                await Template.ƒS.Character.show(Template.charaktere.maire, Template.charaktere.maire.pose.sad, Template.ƒS.positionPercent(Template.charaktere.maire.positionStandard.x, Template.charaktere.maire.positionStandard.y));
                await Template.ƒS.Character.hide(Template.charaktere.bronte);
                await Template.ƒS.Character.show(Template.charaktere.bronte, Template.charaktere.bronte.pose.sad, Template.ƒS.positionPercent(Template.charaktere.bronte.positionStandard.x, Template.charaktere.bronte.positionStandard.y));
                await Template.ƒS.update(0.4);
                await Template.ƒS.Speech.tell(Template.charaktere.bronte, " Ah! Äh… nein das passt ja gar nicht… ");
                await Template.ƒS.Character.hide(Template.charaktere.maire);
                await Template.ƒS.Character.show(Template.charaktere.maire, Template.charaktere.maire.pose.happy, Template.ƒS.positionPercent(Template.charaktere.maire.positionStandard.x, Template.charaktere.maire.positionStandard.y));
                await Template.ƒS.Character.hide(Template.charaktere.bronte);
                await Template.ƒS.Character.show(Template.charaktere.bronte, Template.charaktere.bronte.pose.happy, Template.ƒS.positionPercent(Template.charaktere.bronte.positionStandard.x, Template.charaktere.bronte.positionStandard.y));
                await Template.ƒS.update(0.4);
                await Template.ƒS.Speech.tell(Template.charaktere.maire, " Aber der Butler passt! Es hat sich mit Remington vorgestellt!");
        }
        await Template.ƒS.Character.hide(Template.charaktere.maire);
        await Template.ƒS.Character.show(Template.charaktere.maire, Template.charaktere.maire.pose.neutral, Template.ƒS.positionPercent(Template.charaktere.maire.positionStandard.x, Template.charaktere.maire.positionStandard.y));
        await Template.ƒS.update(0.4);
        await Template.ƒS.Speech.tell(Template.charaktere.maire, " Oh er hat vorhin sich auch so merkwürdig benommen. Wie er vor der Tür gelauert hat! Wie er uns hier draußen aufgelauert hat! Der ist bestimmt der Übeltäter. ");
        await Template.ƒS.Character.hide(Template.charaktere.bronte);
        await Template.ƒS.Character.show(Template.charaktere.bronte, Template.charaktere.bronte.pose.think, Template.ƒS.positionPercent(Template.charaktere.bronte.positionStandard.x, Template.charaktere.bronte.positionStandard.y));
        await Template.ƒS.update(0.4);
        await Template.ƒS.Speech.tell(Template.charaktere.bronte, " Gute Theorie, aber noch ist ja nicht bewiesen, dass die Katze nicht einfach weggelaufen ist. Das würde ich zumindest auch tun wenn ich immer in einem Zimmer eingesperrt wäre. ");
        await Template.ƒS.Character.hide(Template.charaktere.maire);
        await Template.ƒS.Character.show(Template.charaktere.maire, Template.charaktere.maire.pose.sad, Template.ƒS.positionPercent(Template.charaktere.maire.positionStandard.x, Template.charaktere.maire.positionStandard.y));
        await Template.ƒS.update(0.4);
        await Template.ƒS.Speech.tell(Template.charaktere.maire, " Mhm… Ein Fall wäre spannender. Aber so oder so hier ist die Katze nicht. Was machen wir jetzt?");
        let userChooseWhatToDoInfrontGarden = await Template.ƒS.Menu.getInput(chooseWhatToDoInfrontGarden, "basicChoice");
        switch (userChooseWhatToDoInfrontGarden) {
            case chooseWhatToDoInfrontGarden.go:
                await Template.ƒS.Character.hide(Template.charaktere.bronte);
                await Template.ƒS.Character.show(Template.charaktere.bronte, Template.charaktere.bronte.pose.happy, Template.ƒS.positionPercent(Template.charaktere.bronte.positionStandard.x, Template.charaktere.bronte.positionStandard.y));
                await Template.ƒS.update(0.4);
                await Template.ƒS.Speech.tell(Template.charaktere.bronte, " Weißt du was… lass einfach aufhören. Ich glaube das ist zu schwierig für uns. ");
                await Template.ƒS.Character.hide(Template.charaktere.maire);
                await Template.ƒS.Character.show(Template.charaktere.maire, Template.charaktere.maire.pose.fear, Template.ƒS.positionPercent(Template.charaktere.maire.positionStandard.x, Template.charaktere.maire.positionStandard.y));
                await Template.ƒS.update(0.4);
                await Template.ƒS.Speech.tell(Template.charaktere.maire, " Was! Aber du bist Bronte! Die Meister Detektivin! ");
                await Template.ƒS.Character.hide(Template.charaktere.bronte);
                await Template.ƒS.Character.show(Template.charaktere.bronte, Template.charaktere.bronte.pose.think, Template.ƒS.positionPercent(Template.charaktere.bronte.positionStandard.x, Template.charaktere.bronte.positionStandard.y));
                await Template.ƒS.update(0.4);
                await Template.ƒS.Speech.tell(Template.charaktere.bronte, " Ja ich weiß, war doch nur ein Witz ");
                await Template.ƒS.Character.hide(Template.charaktere.maire);
                await Template.ƒS.Character.show(Template.charaktere.maire, Template.charaktere.maire.pose.neutral, Template.ƒS.positionPercent(Template.charaktere.maire.positionStandard.x, Template.charaktere.maire.positionStandard.y));
                await Template.ƒS.update(0.4);
                await Template.ƒS.Speech.tell(Template.charaktere.maire, " Mhm… witzig. ");
                await Template.ƒS.Speech.tell(Template.charaktere.bronte, " (Den Witz fand sie wohl nicht gut… sie sieht tatsächlich ziemlich genervt aus… ich sollte netter zu ihr sein.)");
            case chooseWhatToDoInfrontGarden.garden:
                await Template.ƒS.Character.hide(Template.charaktere.bronte);
                await Template.ƒS.Character.show(Template.charaktere.bronte, Template.charaktere.bronte.pose.happy, Template.ƒS.positionPercent(Template.charaktere.bronte.positionStandard.x, Template.charaktere.bronte.positionStandard.y));
                await Template.ƒS.update(0.4);
                await Template.ƒS.Speech.tell(Template.charaktere.bronte, " Vielleicht sind hier ja Spuren. Mhm.. Ja… Mhm… Autsch! Blöde Dornen! Oh hier! Tatsache sie führen in den Garten. ");
                await Template.ƒS.Character.hide(Template.charaktere.maire);
                await Template.ƒS.Character.show(Template.charaktere.maire, Template.charaktere.maire.pose.happy, Template.ƒS.positionPercent(Template.charaktere.maire.positionStandard.x, Template.charaktere.maire.positionStandard.y));
                await Template.ƒS.update(0.4);
                await Template.ƒS.Speech.tell(Template.charaktere.maire, " Hinterher!");
        }
        await Template.ƒS.Character.hide(Template.charaktere.maire);
        await Template.ƒS.Character.hide(Template.charaktere.bronte);
        await Template.ƒS.update(0.8);
        return "SceneSixGarden";
    }
    Template.SceneFiveOutside = SceneFiveOutside;
})(Template || (Template = {}));
var Template;
(function (Template) {
    async function SceneNineEntryhall() {
    }
    Template.SceneNineEntryhall = SceneNineEntryhall;
})(Template || (Template = {}));
var Template;
(function (Template) {
    async function SceneOneInfront() {
        console.log("FudgeStory Scene starting");
        //Alle Wahlmöglichkeiten in Szene 
        let chooseCatNoise = {
            bush: "Untersuche Busch",
            window: "Untersuche Fenster",
            knock: "Klopfe an der Tür"
        };
        //ƒS.Speech.set("Information", "Drücke 'M' um das Spielmenü zu öffnen und deinen Speicherstand zu speichern oder laden.");
        //todo: Input einbauen und stylen, gleich auf DataForSave speichern
        // let test = await ƒS.Speech.getInput();
        //return "SceneTwoEntrance"; 
        //return "SceneFourSaalonDrama";
        // return "SceneSixGarden";
        //return "SceneEightSaalonInterview";
        return "SceneEightBInterviews";
        // return "EndScreen";
        await Template.ƒS.Sound.fade(Template.sound.themeinfrontManor, 0.1, 1, true);
        await Template.ƒS.Location.show(Template.location.infrontOfManorDay);
        await Template.ƒS.update(Template.transistions.wallpaper.duration, Template.transistions.wallpaper.alpha, Template.transistions.wallpaper.edge);
        await Template.ƒS.update();
        await Template.ƒS.Speech.tell(Template.charaktere.maire, "Oh, was für ein prächtiges Anwesen. Und wir sind hier wirklich richtig?");
        await Template.ƒS.Character.show(Template.charaktere.maire, Template.charaktere.maire.pose.neutral, Template.ƒS.positionPercent(Template.charaktere.maire.positionStandard.x, Template.charaktere.maire.positionStandard.y));
        await Template.ƒS.Character.show(Template.charaktere.bronte, Template.charaktere.bronte.pose.happy, Template.ƒS.positionPercent(Template.charaktere.bronte.positionStandard.x, Template.charaktere.bronte.positionStandard.y));
        await Template.ƒS.update(1);
        await Template.ƒS.Speech.tell(Template.charaktere.bronte, "Ja, die Blackburns haben schon seit vielen Jahren diesen Wohnsitz. Ich habe dir doch gesagt, dass es heute Abend eine sehr vornehme Veranstaltung wird.");
        await Template.ƒS.Speech.tell(Template.charaktere.maire, "Ja aber doch nicht so vornehm! Du hättest mich besser warnen müssen. Ich sehe ja aus wie ein Dorftrampel. Ich dachte du hättest für die Dame des Hauses einen Fall gelöst?");
        await Template.ƒS.Character.hide(Template.charaktere.bronte);
        await Template.ƒS.Character.show(Template.charaktere.bronte, Template.charaktere.bronte.pose.think, Template.ƒS.positionPercent(Template.charaktere.bronte.positionStandard.x, Template.charaktere.bronte.positionStandard.y));
        await Template.ƒS.update(0.4);
        await Template.ƒS.Speech.tell(Template.charaktere.bronte, "Habe ich ja auch. Wobei es eher ein Zufall war, dass der Crossstreet-Bandit auch ihre Smaragd Brosche gestohlen hatte.");
        await Template.ƒS.Speech.tell(Template.charaktere.bronte, "Aber so oder so war die Lady jedoch so dankbar, dass sie mich reichlich belohnt hat und zu einem Essen eingeladen hat.");
        await Template.ƒS.Character.hide(Template.charaktere.maire);
        await Template.ƒS.Character.show(Template.charaktere.maire, Template.charaktere.maire.pose.embarrassed, Template.ƒS.positionPercent(Template.charaktere.maire.positionStandard.x, Template.charaktere.maire.positionStandard.y));
        await Template.ƒS.update(0.1);
        document.getElementById('speechContent').classList.add('textEffectBig');
        await Template.ƒS.Speech.tell(Template.charaktere.maire, "!!! ");
        document.getElementById('speechContent').classList.remove('textEffectBig');
        await Template.ƒS.Speech.tell(Template.charaktere.maire, "Eine Lady!");
        await Template.ƒS.Speech.tell(Template.charaktere.maire, "Bronte du hast nicht erwähnt, dass sie eine Lady ist! Oh großgütiger, ich sehe aus wie eine Heuschrecke! ");
        await Template.ƒS.Character.hide(Template.charaktere.bronte);
        await Template.ƒS.Character.show(Template.charaktere.bronte, Template.charaktere.bronte.pose.laugh, Template.ƒS.positionPercent(Template.charaktere.bronte.positionStandard.x, Template.charaktere.bronte.positionStandard.y));
        await Template.ƒS.update(0.3);
        await Template.ƒS.Speech.tell(Template.charaktere.bronte, "Ach was Maire, du siehst wie immer fantastisch aus. Mach dir keine Sorge-");
        await Template.ƒS.Character.hide(Template.charaktere.maire);
        await Template.ƒS.Character.show(Template.charaktere.maire, Template.charaktere.maire.pose.fear, Template.ƒS.positionPercent(Template.charaktere.maire.positionStandard.x, Template.charaktere.maire.positionStandard.y));
        await Template.ƒS.Character.hide(Template.charaktere.bronte);
        await Template.ƒS.Character.show(Template.charaktere.bronte, Template.charaktere.bronte.pose.shout, Template.ƒS.positionPercent(Template.charaktere.bronte.positionStandard.x, Template.charaktere.bronte.positionStandard.y));
        await Template.ƒS.update(0.1);
        await Template.showEmotion(Template.emotionen.ausrufezeichen, 1);
        await Template.ƒS.Sound.fade(Template.sound.catMeow, 0.8, 1, false);
        document.getElementById('speechContent').classList.add('textEffectBig');
        await Template.ƒS.Speech.tell("", "MAUI!");
        document.getElementById('speechContent').classList.remove('textEffectBig');
        await Template.ƒS.Speech.tell(Template.charaktere.maire, "AHH!");
        await Template.ƒS.Character.hide(Template.charaktere.maire);
        await Template.ƒS.Character.hide(Template.charaktere.bronte);
        await Template.ƒS.Character.show(Template.charaktere.maire, Template.charaktere.maire.pose.neutral, Template.ƒS.positionPercent(Template.charaktere.maire.positionStandard.x, Template.charaktere.maire.positionStandard.y));
        await Template.ƒS.Character.show(Template.charaktere.bronte, Template.charaktere.bronte.pose.think, Template.ƒS.positionPercent(Template.charaktere.bronte.positionStandard.x, Template.charaktere.bronte.positionStandard.y));
        await Template.ƒS.update(0.3);
        await Template.ƒS.Speech.tell(Template.charaktere.maire, "Was... war das eine Katze?");
        await Template.ƒS.Speech.tell(Template.charaktere.bronte, "Und eine schnelle dazu… sieht so aus als wäre sie in die Hecke verschwunden. Komisch, ich frag mich was sie da gesehen hat.");
        await Template.ƒS.Speech.tell(Template.charaktere.maire, "Vermutlich einen Vogel. Wir sollten glaube ich langsam Klopfen. Ich glaube jemand hat gerade durch das Fenster geschaut. Wir sehen ja aus wie gewöhnliche Straßendiebe für diese Leute. ");
        let userChooseCatNoise = await Template.ƒS.Menu.getInput(chooseCatNoise, "basicChoice");
        switch (userChooseCatNoise) {
            case chooseCatNoise.bush:
                Template.dataForSave.foundRing = true;
                await Template.ƒS.Speech.tell(Template.charaktere.bronte, "Nur ein Moment.");
                await Template.ƒS.Speech.tell(Template.charaktere.maire, "…Deshalb sind wir immer zu spät.");
                await Template.ƒS.Character.hide(Template.charaktere.maire);
                await Template.ƒS.Character.show(Template.charaktere.maire, Template.charaktere.maire.pose.sad, Template.ƒS.positionPercent(Template.charaktere.maire.positionStandard.x, Template.charaktere.maire.positionStandard.y));
                await Template.ƒS.Character.hide(Template.charaktere.bronte);
                await Template.ƒS.Character.show(Template.charaktere.bronte, Template.charaktere.bronte.pose.think, Template.ƒS.positionPercent(Template.charaktere.bronte.positionStandard.x, Template.charaktere.bronte.positionStandard.y));
                await Template.ƒS.update(0.3);
                await Template.ƒS.Sound.play(Template.sound.goingThrouBushes, 1);
                await Template.ƒS.Speech.tell(Template.charaktere.bronte, "Nun lass mal schauen... Oh!");
                await Template.ƒS.Inventory.add(Template.inventory.ring);
                await Template.ƒS.Inventory.open();
                await Template.ƒS.Character.hide(Template.charaktere.bronte);
                await Template.ƒS.Character.show(Template.charaktere.bronte, Template.charaktere.bronte.pose.happy, Template.ƒS.positionPercent(Template.charaktere.bronte.positionStandard.x, Template.charaktere.bronte.positionStandard.y));
                await Template.ƒS.update(0.3);
                await Template.ƒS.Speech.tell(Template.charaktere.bronte, "Komisch, warum sollte das hier einfach herum liegen?");
                await Template.ƒS.Speech.tell(Template.charaktere.bronte, "Mhm... O.R.");
                await Template.ƒS.Character.hide(Template.charaktere.bronte);
                await Template.ƒS.Character.show(Template.charaktere.bronte, Template.charaktere.bronte.pose.think, Template.ƒS.positionPercent(Template.charaktere.bronte.positionStandard.x, Template.charaktere.bronte.positionStandard.y));
                await Template.ƒS.update(0.3);
                await Template.ƒS.Speech.tell(Template.charaktere.maire, "Oh, da kommt jemand!");
                await Template.ƒS.Character.hide(Template.charaktere.maire);
                await Template.ƒS.Character.show(Template.charaktere.maire, Template.charaktere.maire.pose.fear, Template.ƒS.positionPercent(Template.charaktere.maire.positionStandard.x, Template.charaktere.maire.positionStandard.y));
                await Template.ƒS.update(0.3);
                await Template.ƒS.Character.show(Template.charaktere.remington, Template.charaktere.remington.pose.neutral, Template.ƒS.positionPercent(50, 100));
                await Template.ƒS.update(1);
                await Template.ƒS.Speech.tell(Template.charaktere.remington, "Entschuldigen Sie. Sind Sie Miss Bronte und ihre Begleitung?");
                await Template.ƒS.Character.hide(Template.charaktere.maire);
                await Template.ƒS.Character.show(Template.charaktere.maire, Template.charaktere.maire.pose.laugh, Template.ƒS.positionPercent(Template.charaktere.maire.positionStandard.x, Template.charaktere.maire.positionStandard.y));
                await Template.ƒS.update(0.3);
                await Template.ƒS.Speech.tell(Template.charaktere.maire, "Miss Bronte hihi");
                await Template.ƒS.Character.hide(Template.charaktere.bronte);
                await Template.ƒS.Character.show(Template.charaktere.bronte, Template.charaktere.bronte.pose.happy, Template.ƒS.positionPercent(Template.charaktere.bronte.positionStandard.x, Template.charaktere.bronte.positionStandard.y));
                await Template.ƒS.update(0.3);
                await Template.ƒS.Speech.tell(Template.charaktere.bronte, "Guten Abend. Genau, die sind wir. Freut mich sie kennenzulernen, Herr?");
                await Template.ƒS.Character.hide(Template.charaktere.maire);
                await Template.ƒS.Character.show(Template.charaktere.maire, Template.charaktere.maire.pose.happy, Template.ƒS.positionPercent(Template.charaktere.maire.positionStandard.x, Template.charaktere.maire.positionStandard.y));
                await Template.ƒS.update(0.3);
                await Template.ƒS.Speech.tell(Template.charaktere.remington, "Bitte folgen sie mir doch hinein.");
                await Template.ƒS.Character.hide(Template.charaktere.maire);
                await Template.ƒS.Character.show(Template.charaktere.maire, Template.charaktere.maire.pose.neutral, Template.ƒS.positionPercent(Template.charaktere.maire.positionStandard.x, Template.charaktere.maire.positionStandard.y));
                await Template.ƒS.update(0.3);
                await Template.ƒS.Speech.tell(Template.charaktere.maire, "Nicht sehr gesprächig...");
                break;
            case chooseCatNoise.window:
                Template.dataForSave.spiedThroughWindow = true;
                await Template.ƒS.Speech.tell(Template.charaktere.bronte, "Ich frag mich wer uns da heimlich beobachtet. ");
                await Template.ƒS.Character.hide(Template.charaktere.maire);
                await Template.ƒS.Character.show(Template.charaktere.maire, Template.charaktere.maire.pose.sad, Template.ƒS.positionPercent(Template.charaktere.maire.positionStandard.x, Template.charaktere.maire.positionStandard.y));
                await Template.ƒS.Character.hide(Template.charaktere.bronte);
                await Template.ƒS.Character.show(Template.charaktere.bronte, Template.charaktere.bronte.pose.think, Template.ƒS.positionPercent(Template.charaktere.bronte.positionStandard.x, Template.charaktere.bronte.positionStandard.y));
                await Template.ƒS.update(0.3);
                await Template.ƒS.Speech.tell(Template.charaktere.maire, "Oh bitte nicht… ");
                await Template.ƒS.Speech.tell(Template.charaktere.bronte, "Es dauert nur einen Moment… Hier sehe ich die Küche. Eine ältere Frau an einer Feuerstelle… Oh das Essen sieht klasse aus!");
                await Template.ƒS.Speech.tell(Template.charaktere.remington, "Entschuldigen Sie?");
                await Template.ƒS.Character.show(Template.charaktere.remington, Template.charaktere.remington.pose.neutral, Template.ƒS.positionPercent(50, 100));
                await Template.ƒS.update(0.1);
                await Template.ƒS.Character.hide(Template.charaktere.maire);
                await Template.ƒS.Character.show(Template.charaktere.maire, Template.charaktere.maire.pose.fear, Template.ƒS.positionPercent(Template.charaktere.maire.positionStandard.x, Template.charaktere.maire.positionStandard.y));
                await Template.ƒS.Character.hide(Template.charaktere.bronte);
                await Template.ƒS.Character.show(Template.charaktere.bronte, Template.charaktere.bronte.pose.shout, Template.ƒS.positionPercent(Template.charaktere.bronte.positionStandard.x, Template.charaktere.bronte.positionStandard.y));
                await Template.ƒS.update(0.3);
                document.getElementById('speechContent').classList.add('textEffectBig');
                await Template.ƒS.Speech.tell(Template.charaktere.maire, "AHH!");
                document.getElementById('speechContent').classList.remove('textEffectBig');
                await Template.ƒS.Character.hide(Template.charaktere.maire);
                await Template.ƒS.Character.show(Template.charaktere.maire, Template.charaktere.maire.pose.embarrassed, Template.ƒS.positionPercent(Template.charaktere.maire.positionStandard.x, Template.charaktere.maire.positionStandard.y));
                await Template.ƒS.Character.hide(Template.charaktere.bronte);
                await Template.ƒS.Character.show(Template.charaktere.bronte, Template.charaktere.bronte.pose.sad, Template.ƒS.positionPercent(Template.charaktere.bronte.positionStandard.x, Template.charaktere.bronte.positionStandard.y));
                await Template.ƒS.update(0.3);
                await Template.ƒS.Speech.tell(Template.charaktere.bronte, "Oh... äh... Hallo, wir sind die Gäste für den Abend.");
                await Template.ƒS.Speech.tell(Template.charaktere.remington, "Dass dachte ich mir. Bitte folgen sie mir herein. Und denken Sie heute Abend bitte an ihre Manieren. ");
                await Template.ƒS.Character.hide(Template.charaktere.maire);
                await Template.ƒS.Character.show(Template.charaktere.maire, Template.charaktere.maire.pose.neutral, Template.ƒS.positionPercent(Template.charaktere.maire.positionStandard.x, Template.charaktere.maire.positionStandard.y));
                await Template.ƒS.Character.hide(Template.charaktere.bronte);
                await Template.ƒS.Character.show(Template.charaktere.bronte, Template.charaktere.bronte.pose.think, Template.ƒS.positionPercent(Template.charaktere.bronte.positionStandard.x, Template.charaktere.bronte.positionStandard.y));
                await Template.ƒS.update(0.3);
                await Template.ƒS.Speech.tell(Template.charaktere.maire, "Da hast du ja einen tollen ersten Eindruck gemacht…");
                break;
            case chooseCatNoise.knock:
                await Template.ƒS.Sound.play(Template.sound.knockDoor, 1);
                await Template.ƒS.update(0.4);
                await Template.ƒS.Character.show(Template.charaktere.remington, Template.charaktere.remington.pose.neutral, Template.ƒS.positionPercent(50, 100));
                await Template.ƒS.update(0.1);
                await Template.ƒS.Character.hide(Template.charaktere.maire);
                await Template.ƒS.Character.show(Template.charaktere.maire, Template.charaktere.maire.pose.fear, Template.ƒS.positionPercent(Template.charaktere.maire.positionStandard.x, Template.charaktere.maire.positionStandard.y));
                await Template.ƒS.update(0.1);
                await Template.ƒS.Speech.tell(Template.charaktere.remington, " Willkommen, treten sie doch gerne ein.");
                await Template.ƒS.Character.hide(Template.charaktere.maire);
                await Template.ƒS.Character.show(Template.charaktere.maire, Template.charaktere.maire.pose.embarrassed, Template.ƒS.positionPercent(Template.charaktere.maire.positionStandard.x, Template.charaktere.maire.positionStandard.y));
                await Template.ƒS.update(0.3);
                await Template.ƒS.Speech.tell(Template.charaktere.maire, " AH! Oh… Entschuldigung… Sie standen direkt hinter der Tür? Äh ich meine… guten Abend. ");
                await Template.ƒS.Character.hide(Template.charaktere.bronte);
                await Template.ƒS.Character.show(Template.charaktere.bronte, Template.charaktere.bronte.pose.happy, Template.ƒS.positionPercent(Template.charaktere.bronte.positionStandard.x, Template.charaktere.bronte.positionStandard.y));
                await Template.ƒS.update(0.3);
                await Template.ƒS.Speech.tell(Template.charaktere.bronte, " Maire du bist wirklich ein wenig zu schreckhaft.");
        }
        await Template.ƒS.Character.hide(Template.charaktere.maire);
        await Template.ƒS.Character.hide(Template.charaktere.bronte);
        await Template.ƒS.Character.hide(Template.charaktere.remington);
        await Template.ƒS.update(0.8);
        await Template.ƒS.Sound.fade(Template.sound.themeinfrontManor, 0, 0.4, false);
        return "SceneTwoEntrance";
    }
    Template.SceneOneInfront = SceneOneInfront;
})(Template || (Template = {}));
var Template;
(function (Template) {
    async function SceneSevenCabin() {
        await Template.ƒS.Location.show(Template.location.cabin);
        await Template.ƒS.update(Template.transistions.inToOut.duration, Template.transistions.inToOut.alpha, Template.transistions.inToOut.edge);
        //todo: Music? 
        let chooseHowToGetToRoof = {
            maire: "Maire machen lassen",
            bronte: "Selber machen"
        };
        await Template.ƒS.Character.show(Template.charaktere.bronte, Template.charaktere.bronte.pose.think, Template.ƒS.positionPercent(Template.charaktere.bronte.positionStandard.x, Template.charaktere.bronte.positionStandard.y));
        await Template.ƒS.Character.show(Template.charaktere.maire, Template.charaktere.maire.pose.neutral, Template.ƒS.positionPercent(Template.charaktere.maire.positionStandard.x, Template.charaktere.maire.positionStandard.y));
        await Template.ƒS.update(0.8);
        await Template.ƒS.Sound.fade(Template.sound.themeinfrontManorNight, 0.1, 0.2, true);
        await Template.ƒS.Speech.tell(Template.charaktere.maire, " Schau eine Säule steht vor der Hütte! ");
        await Template.ƒS.Character.hide(Template.charaktere.bronte);
        await Template.ƒS.Character.hide(Template.charaktere.maire);
        await Template.ƒS.Character.show(Template.charaktere.bronte, Template.charaktere.bronte.pose.happy, Template.ƒS.positionPercent(Template.charaktere.bronte.positionStandard.x, Template.charaktere.bronte.positionStandard.y));
        await Template.ƒS.Character.show(Template.charaktere.maire, Template.charaktere.maire.pose.happy, Template.ƒS.positionPercent(Template.charaktere.maire.positionStandard.x, Template.charaktere.maire.positionStandard.y));
        await Template.ƒS.update(0.4);
        await Template.ƒS.Speech.tell(Template.charaktere.bronte, " Und die Spuren führen eindeutig hierher. Vermutlich ist sie eingesperrt. Ein Moment… So jetzt sollte sie aufgehen. Mhm… Schaufeln, Eimer und weitere Gartengeräte. Aber keine Katze. ");
        await Template.ƒS.Character.hide(Template.charaktere.bronte);
        await Template.ƒS.Character.hide(Template.charaktere.maire);
        await Template.ƒS.Character.show(Template.charaktere.bronte, Template.charaktere.bronte.pose.think, Template.ƒS.positionPercent(Template.charaktere.bronte.positionStandard.x, Template.charaktere.bronte.positionStandard.y));
        await Template.ƒS.Character.show(Template.charaktere.maire, Template.charaktere.maire.pose.fear, Template.ƒS.positionPercent(Template.charaktere.maire.positionStandard.x, Template.charaktere.maire.positionStandard.y));
        await Template.ƒS.update(0.4);
        await Template.ƒS.Speech.tell(Template.charaktere.maire, " Schau! Dort. Die Dachluke ist ein Stück offen und dort hängt etwas dran. Wir sollten versuchen ranzukommen!");
        //Auswahl Wie in Hütte kommen 
        // Selber
        let userChooseHowToGetToRoof = await Template.ƒS.Menu.getInput(chooseHowToGetToRoof, "basicChoice");
        switch (userChooseHowToGetToRoof) {
            case chooseHowToGetToRoof.bronte:
                await Template.ƒS.Character.hide(Template.charaktere.bronte);
                await Template.ƒS.Character.hide(Template.charaktere.maire);
                await Template.ƒS.Character.show(Template.charaktere.bronte, Template.charaktere.bronte.pose.happy, Template.ƒS.positionPercent(Template.charaktere.bronte.positionStandard.x, Template.charaktere.bronte.positionStandard.y));
                await Template.ƒS.Character.show(Template.charaktere.maire, Template.charaktere.maire.pose.neutral, Template.ƒS.positionPercent(Template.charaktere.maire.positionStandard.x, Template.charaktere.maire.positionStandard.y));
                await Template.ƒS.update(0.4);
                await Template.ƒS.Speech.tell(Template.charaktere.bronte, "Ein Moment das habe ich gleich! Perfekt. Gutes Auge Maire! Das ist ein Halsband.");
                //todo: öffne inventory
                break;
            case chooseHowToGetToRoof.maire:
                //Maire machen lassen: 
                //todo: Freundschaft Minus
                Template.dataForSave.maireHurtHerselfInCabin = true;
                await Template.ƒS.Character.hide(Template.charaktere.bronte);
                await Template.ƒS.Character.show(Template.charaktere.bronte, Template.charaktere.bronte.pose.happy, Template.ƒS.positionPercent(Template.charaktere.bronte.positionStandard.x, Template.charaktere.bronte.positionStandard.y));
                await Template.ƒS.update(0.4);
                await Template.ƒS.Speech.tell(Template.charaktere.bronte, " Versuch hochzuklettern. ");
                await Template.ƒS.Character.hide(Template.charaktere.maire);
                await Template.ƒS.Character.show(Template.charaktere.maire, Template.charaktere.maire.pose.embarrassed, Template.ƒS.positionPercent(Template.charaktere.maire.positionStandard.x, Template.charaktere.maire.positionStandard.y));
                await Template.ƒS.update(0.4);
                await Template.ƒS.Speech.tell(Template.charaktere.maire, " Okay… ich… autsch! Mein Knöchel! Aber hier… ein Halsband. ");
                // todo: Inventory öffnen
                await Template.ƒS.Character.hide(Template.charaktere.bronte);
                await Template.ƒS.Character.hide(Template.charaktere.maire);
                await Template.ƒS.Character.show(Template.charaktere.bronte, Template.charaktere.bronte.pose.think, Template.ƒS.positionPercent(Template.charaktere.bronte.positionStandard.x, Template.charaktere.bronte.positionStandard.y));
                await Template.ƒS.Character.show(Template.charaktere.maire, Template.charaktere.maire.pose.sad, Template.ƒS.positionPercent(Template.charaktere.maire.positionStandard.x, Template.charaktere.maire.positionStandard.y));
                await Template.ƒS.update(0.4);
                await Template.ƒS.Speech.tell(Template.charaktere.bronte, " (Oh weh, Maire scheint sich wirklich verletzt zu haben. Ich sollte netter zu ihr sein in nächster Zeit)");
                break;
        }
        Template.dataForSave.foundCatCollarFinished = true;
        await Template.ƒS.Character.hide(Template.charaktere.bronte);
        await Template.ƒS.Character.hide(Template.charaktere.maire);
        await Template.ƒS.Character.show(Template.charaktere.bronte, Template.charaktere.bronte.pose.think, Template.ƒS.positionPercent(Template.charaktere.bronte.positionStandard.x, Template.charaktere.bronte.positionStandard.y));
        await Template.ƒS.Character.show(Template.charaktere.maire, Template.charaktere.maire.pose.neutral, Template.ƒS.positionPercent(Template.charaktere.maire.positionStandard.x, Template.charaktere.maire.positionStandard.y));
        await Template.ƒS.update(0.4);
        await Template.ƒS.Speech.tell(Template.charaktere.bronte, " Hier ist eine Inschrift drauf. Artemis. Mhm… es fühlt sich an als wäre hier noch was drunter-  ");
        //todo: SCHREI 
        await Template.ƒS.Character.hide(Template.charaktere.bronte);
        await Template.ƒS.Character.hide(Template.charaktere.maire);
        await Template.ƒS.Character.show(Template.charaktere.bronte, Template.charaktere.bronte.pose.shout, Template.ƒS.positionPercent(Template.charaktere.bronte.positionStandard.x, Template.charaktere.bronte.positionStandard.y));
        await Template.ƒS.Character.show(Template.charaktere.maire, Template.charaktere.maire.pose.fear, Template.ƒS.positionPercent(Template.charaktere.maire.positionStandard.x, Template.charaktere.maire.positionStandard.y));
        await Template.ƒS.update(0.4);
        await Template.ƒS.Speech.tell(Template.charaktere.bronte, " !!! Das kam vom Haus! Schnell Maire!");
        if (Template.dataForSave.maireHurtHerselfInCabin) {
            await Template.ƒS.Character.hide(Template.charaktere.maire);
            await Template.ƒS.Character.show(Template.charaktere.maire, Template.charaktere.maire.pose.fear, Template.ƒS.positionPercent(Template.charaktere.maire.positionStandard.x, Template.charaktere.maire.positionStandard.y));
            await Template.ƒS.update(0.4);
            await Template.ƒS.Speech.tell(Template.charaktere.maire, " Ich komme… mein Knöchel… Au… Au… Au… ");
        }
        await Template.ƒS.Character.hide(Template.charaktere.bronte);
        await Template.ƒS.Character.hide(Template.charaktere.maire);
        await Template.ƒS.update(0.8);
        return "SceneEightSaalonInterview";
    }
    Template.SceneSevenCabin = SceneSevenCabin;
})(Template || (Template = {}));
var Template;
(function (Template) {
    async function SceneSixGarden() {
        let chooseWhatToDoGardenDark = {
            search: "Untersuchen",
            goFurther: "Weitergehen",
            goBack: "Zurückgehen",
        };
        let chooseWhatToDoGardenAfterInvestigation = {
            goBack: "Zurückgehen",
            searchMore: "Weiter untersuchen"
        };
        let chooseWhereWouldCatGo = {
            lamp: "Lampe",
            waterpond: "Wasserbecken",
            cabin: "Hütte"
        };
        await Template.ƒS.Location.show(Template.location.gardenDark);
        await Template.ƒS.update(Template.transistions.inToOut.duration, Template.transistions.inToOut.alpha, Template.transistions.inToOut.edge);
        await Template.ƒS.Sound.fade(Template.sound.themeinfrontManorNight, 0.1, 0.2, true);
        await Template.ƒS.Character.show(Template.charaktere.maire, Template.charaktere.maire.pose.neutral, Template.ƒS.positionPercent(Template.charaktere.maire.positionStandard.x, Template.charaktere.maire.positionStandard.y));
        await Template.ƒS.Character.show(Template.charaktere.bronte, Template.charaktere.bronte.pose.happy, Template.ƒS.positionPercent(Template.charaktere.bronte.positionStandard.x, Template.charaktere.bronte.positionStandard.y));
        await Template.ƒS.update(0.8);
        await Template.ƒS.Speech.tell(Template.charaktere.bronte, "Sie führen bis... Oh... Autsch! ");
        await Template.ƒS.Character.hide(Template.charaktere.maire);
        await Template.ƒS.Character.hide(Template.charaktere.bronte);
        await Template.ƒS.Character.show(Template.charaktere.maire, Template.charaktere.maire.pose.fear, Template.ƒS.positionPercent(Template.charaktere.maire.positionStandard.x, Template.charaktere.maire.positionStandard.y));
        await Template.ƒS.Character.show(Template.charaktere.bronte, Template.charaktere.bronte.pose.sad, Template.ƒS.positionPercent(Template.charaktere.bronte.positionStandard.x, Template.charaktere.bronte.positionStandard.y));
        await Template.ƒS.update(0.4);
        await Template.ƒS.Speech.tell(Template.charaktere.maire, "Alles okay? Oh man sieht ja die Hand vor Augen nicht. Was machen wir jetzt");
        let userChooseWhatToDoGardenDark = await Template.ƒS.Menu.getInput(chooseWhatToDoGardenDark, "basicChoice");
        switch (userChooseWhatToDoGardenDark) {
            case chooseWhatToDoGardenDark.search:
                //auswahl Untersuchen
                await Template.ƒS.Character.hide(Template.charaktere.maire);
                await Template.ƒS.Character.hide(Template.charaktere.bronte);
                await Template.ƒS.Character.show(Template.charaktere.maire, Template.charaktere.maire.pose.neutral, Template.ƒS.positionPercent(Template.charaktere.maire.positionStandard.x, Template.charaktere.maire.positionStandard.y));
                await Template.ƒS.Character.show(Template.charaktere.bronte, Template.charaktere.bronte.pose.think, Template.ƒS.positionPercent(Template.charaktere.bronte.positionStandard.x, Template.charaktere.bronte.positionStandard.y));
                await Template.ƒS.update(0.4);
                await Template.ƒS.Speech.tell(Template.charaktere.bronte, " Mhm… vielleicht… ich habe so ein Gefühl hier könnte etwas sein das Hilft. ");
                await Template.ƒS.Speech.tell(Template.charaktere.maire, " Pass bloß auf! Bei dieser Dunkelheit ist es leicht sich zu verletzten. ");
                await Template.ƒS.Character.hide(Template.charaktere.bronte);
                await Template.ƒS.Character.show(Template.charaktere.bronte, Template.charaktere.bronte.pose.sad, Template.ƒS.positionPercent(Template.charaktere.bronte.positionStandard.x, Template.charaktere.bronte.positionStandard.y));
                await Template.ƒS.update(0.4);
                await Template.ƒS.Speech.tell(Template.charaktere.bronte, " Ich bin schon vorsichtig… Autsch! Mhm… vielleicht hast du Recht.");
                // Unter Auswahl: endet immer mit: zurückgehen
                let userChooseWhatToDoGardenAfterInvestigation = await Template.ƒS.Menu.getInput(chooseWhatToDoGardenAfterInvestigation, "basicChoice");
                switch (userChooseWhatToDoGardenAfterInvestigation) {
                    case chooseWhatToDoGardenAfterInvestigation.searchMore:
                        await Template.ƒS.Character.hide(Template.charaktere.bronte);
                        await Template.ƒS.Character.show(Template.charaktere.bronte, Template.charaktere.bronte.pose.happy, Template.ƒS.positionPercent(Template.charaktere.bronte.positionStandard.x, Template.charaktere.bronte.positionStandard.y));
                        await Template.ƒS.update(0.4);
                        await Template.ƒS.Speech.tell(Template.charaktere.bronte, " Oh! Hier!");
                        await Template.ƒS.Character.hide(Template.charaktere.maire);
                        await Template.ƒS.Character.hide(Template.charaktere.bronte);
                        await Template.ƒS.Character.show(Template.charaktere.maire, Template.charaktere.maire.pose.fear, Template.ƒS.positionPercent(Template.charaktere.maire.positionStandard.x, Template.charaktere.maire.positionStandard.y));
                        await Template.ƒS.Character.show(Template.charaktere.bronte, Template.charaktere.bronte.pose.happy, Template.ƒS.positionPercent(Template.charaktere.bronte.positionStandard.x, Template.charaktere.bronte.positionStandard.y));
                        await Template.ƒS.update(0.4);
                        //todo: Laterne Licht
                        await Template.ƒS.Location.show(Template.location.gardenLight);
                        await Template.ƒS.Speech.tell(Template.charaktere.maire, "Oh wow!");
                        await Template.ƒS.Character.hide(Template.charaktere.maire);
                        await Template.ƒS.Character.show(Template.charaktere.maire, Template.charaktere.maire.pose.happy, Template.ƒS.positionPercent(Template.charaktere.maire.positionStandard.x, Template.charaktere.maire.positionStandard.y));
                        await Template.ƒS.update(0.4);
                        await Template.ƒS.Speech.tell(Template.charaktere.bronte, "Ein kleines Wunder der Technik. Und sehr praktisch dazu.");
                        break;
                    case chooseWhatToDoGardenAfterInvestigation.goBack:
                        await goBack();
                        break;
                }
                break;
            case chooseWhatToDoGardenDark.goFurther:
                //Weitergehen 
                Template.dataForSave.maireFellInPond = true;
                await Template.ƒS.Character.hide(Template.charaktere.maire);
                await Template.ƒS.Character.hide(Template.charaktere.bronte);
                await Template.ƒS.Character.show(Template.charaktere.maire, Template.charaktere.maire.pose.neutral, Template.ƒS.positionPercent(Template.charaktere.maire.positionStandard.x, Template.charaktere.maire.positionStandard.y));
                await Template.ƒS.Character.show(Template.charaktere.bronte, Template.charaktere.bronte.pose.happy, Template.ƒS.positionPercent(Template.charaktere.bronte.positionStandard.x, Template.charaktere.bronte.positionStandard.y));
                await Template.ƒS.update(0.4);
                await Template.ƒS.Speech.tell(Template.charaktere.bronte, " So ein bisschen Dunkelheit wird uns doch nicht aufhalten. ");
                await Template.ƒS.Character.hide(Template.charaktere.maire);
                await Template.ƒS.Character.show(Template.charaktere.maire, Template.charaktere.maire.pose.fear, Template.ƒS.positionPercent(Template.charaktere.maire.positionStandard.x, Template.charaktere.maire.positionStandard.y));
                await Template.ƒS.update(0.4);
                await Template.ƒS.Speech.tell(Template.charaktere.maire, " Wenn du meinst Bronte...  Pass nur auf hier ist");
                // <platsch>wasserbecken…
                await Template.ƒS.Character.hide(Template.charaktere.maire);
                await Template.ƒS.Character.hide(Template.charaktere.bronte);
                await Template.ƒS.Character.show(Template.charaktere.maire, Template.charaktere.maire.pose.sad, Template.ƒS.positionPercent(Template.charaktere.maire.positionStandard.x, Template.charaktere.maire.positionStandard.y));
                await Template.ƒS.Character.show(Template.charaktere.bronte, Template.charaktere.bronte.pose.shout, Template.ƒS.positionPercent(Template.charaktere.bronte.positionStandard.x, Template.charaktere.bronte.positionStandard.y));
                await Template.ƒS.update(0.4);
                await Template.ƒS.Speech.tell(Template.charaktere.maire, " AH! Ich ertrinke… Bronte ich… Ich… ich kann stehen… Aber meine ganzen Kleider… Tolle Idee von dir…");
                await Template.ƒS.Character.hide(Template.charaktere.bronte);
                await Template.ƒS.Character.show(Template.charaktere.bronte, Template.charaktere.bronte.pose.sad, Template.ƒS.positionPercent(Template.charaktere.bronte.positionStandard.x, Template.charaktere.bronte.positionStandard.y));
                await Template.ƒS.update(0.4);
                await Template.ƒS.Speech.tell(Template.charaktere.bronte, " Oh weh, dass tut mir Leid, ich wollte dich gerade warnen. Lass uns schnell zurück ins Warme gehen.");
                await goBack();
                break;
            case chooseWhatToDoGardenDark.goBack:
                // Zurückgehen (Methode)
                await goBack();
                break;
        }
        // alle zusammen
        await Template.ƒS.Character.hide(Template.charaktere.maire);
        await Template.ƒS.Character.hide(Template.charaktere.bronte);
        await Template.ƒS.Character.show(Template.charaktere.maire, Template.charaktere.maire.pose.happy, Template.ƒS.positionPercent(Template.charaktere.maire.positionStandard.x, Template.charaktere.maire.positionStandard.y));
        await Template.ƒS.Character.show(Template.charaktere.bronte, Template.charaktere.bronte.pose.happy, Template.ƒS.positionPercent(Template.charaktere.bronte.positionStandard.x, Template.charaktere.bronte.positionStandard.y));
        await Template.ƒS.update(0.4);
        await Template.ƒS.Speech.tell(Template.charaktere.bronte, " Schau mit etwas Licht ist es gleich viel besser. ");
        await Template.ƒS.Speech.tell(Template.charaktere.maire, " Und wie. Siehst du die Spuren? ");
        await Template.ƒS.Character.hide(Template.charaktere.bronte);
        await Template.ƒS.Character.show(Template.charaktere.bronte, Template.charaktere.bronte.pose.think, Template.ƒS.positionPercent(Template.charaktere.bronte.positionStandard.x, Template.charaktere.bronte.positionStandard.y));
        await Template.ƒS.update(0.4);
        await Template.ƒS.Speech.tell(Template.charaktere.bronte, " Mhm einen Moment… Wo würde ich hingehen wenn ich eine Katze wäre?");
        // solange bis Hütte ausgewählt dann nächste Scene
        while (true) {
            let userchooseWhereWouldCatGo = await Template.ƒS.Menu.getInput(chooseWhereWouldCatGo, "basicChoice");
            switch (userchooseWhereWouldCatGo) {
                case chooseWhereWouldCatGo.lamp:
                    await Template.ƒS.Character.hide(Template.charaktere.maire);
                    await Template.ƒS.Character.hide(Template.charaktere.bronte);
                    await Template.ƒS.Character.show(Template.charaktere.maire, Template.charaktere.maire.pose.neutral, Template.ƒS.positionPercent(Template.charaktere.maire.positionStandard.x, Template.charaktere.maire.positionStandard.y));
                    await Template.ƒS.Character.show(Template.charaktere.bronte, Template.charaktere.bronte.pose.happy, Template.ƒS.positionPercent(Template.charaktere.bronte.positionStandard.x, Template.charaktere.bronte.positionStandard.y));
                    await Template.ƒS.update(0.4);
                    await Template.ƒS.Speech.tell(Template.charaktere.bronte, " Welch beeindruckende Technologie. Schau der Strom kommt über Kabel in der Erde bis hier und schon haben wir Licht! ");
                    await Template.ƒS.Speech.tell(Template.charaktere.maire, " Spannend… aber sollten wir nicht was anderes machen? ");
                    await Template.ƒS.Speech.tell(Template.charaktere.bronte, " Oh… ja vermutlich…");
                    chooseWhereWouldCatGo.lamp = "";
                    break;
                case chooseWhereWouldCatGo.waterpond:
                    await Template.ƒS.Character.hide(Template.charaktere.bronte);
                    await Template.ƒS.Character.show(Template.charaktere.bronte, Template.charaktere.bronte.pose.sad, Template.ƒS.positionPercent(Template.charaktere.bronte.positionStandard.x, Template.charaktere.bronte.positionStandard.y));
                    await Template.ƒS.update(0.4);
                    await Template.ƒS.Speech.tell(Template.charaktere.bronte, " Vielleicht ist sie ins Wasser gefallen? ");
                    await Template.ƒS.Speech.tell(Template.charaktere.maire, " Ich glaube Katzen halten sich eher fern von Wasser. ");
                    await Template.ƒS.Character.hide(Template.charaktere.bronte);
                    await Template.ƒS.Character.show(Template.charaktere.bronte, Template.charaktere.bronte.pose.think, Template.ƒS.positionPercent(Template.charaktere.bronte.positionStandard.x, Template.charaktere.bronte.positionStandard.y));
                    await Template.ƒS.update(0.4);
                    await Template.ƒS.Speech.tell(Template.charaktere.bronte, " Mhm… da hast du wohl recht. Ich kann auch nichts erkennen.");
                    chooseWhereWouldCatGo.waterpond = "";
                    break;
                case chooseWhereWouldCatGo.cabin:
                    await Template.ƒS.Character.hide(Template.charaktere.maire);
                    await Template.ƒS.Character.hide(Template.charaktere.bronte);
                    await Template.ƒS.update(0.8);
                    return 'SceneSevenCabin';
            }
        }
        // Wir zwei mal ausgeführt daher function
        async function goBack() {
            await Template.ƒS.Character.hide(Template.charaktere.maire);
            await Template.ƒS.Character.hide(Template.charaktere.bronte);
            await Template.ƒS.update(0.8);
            await Template.ƒS.Location.show(Template.location.saalon);
            await Template.ƒS.update(Template.transistions.inToOut.duration, Template.transistions.inToOut.alpha, Template.transistions.inToOut.edge);
            await Template.ƒS.Character.hide(Template.charaktere.maire);
            await Template.ƒS.Character.hide(Template.charaktere.bronte);
            await Template.ƒS.Character.show(Template.charaktere.maire, Template.charaktere.maire.pose.neutral, Template.ƒS.positionPercent(Template.charaktere.maire.positionStandard.x, Template.charaktere.maire.positionStandard.y));
            await Template.ƒS.Character.show(Template.charaktere.bronte, Template.charaktere.bronte.pose.think, Template.ƒS.positionPercent(Template.charaktere.bronte.positionStandard.x, Template.charaktere.bronte.positionStandard.y));
            await Template.ƒS.update(0.8);
            await Template.ƒS.Character.show(Template.charaktere.grace, Template.charaktere.grace.pose.laugh, Template.ƒS.positionPercent(Template.charaktere.grace.positionStandard.x, Template.charaktere.grace.positionStandard.y));
            await Template.ƒS.update(0.4);
            await Template.ƒS.Speech.tell(Template.charaktere.grace, " Oh da kommen Sie! ");
            if (Template.dataForSave.maireFellInPond) {
                await Template.ƒS.Character.hide(Template.charaktere.grace);
                await Template.ƒS.Character.show(Template.charaktere.grace, Template.charaktere.grace.pose.sad, Template.ƒS.positionPercent(Template.charaktere.grace.positionStandard.x, Template.charaktere.grace.positionStandard.y));
                await Template.ƒS.update(0.4);
                await Template.ƒS.Speech.tell(Template.charaktere.grace, "Oh Gott, was ist denn mit Ihnen passiert?");
                await Template.ƒS.Character.hide(Template.charaktere.maire);
                await Template.ƒS.Character.hide(Template.charaktere.bronte);
                await Template.ƒS.Character.show(Template.charaktere.maire, Template.charaktere.maire.pose.embarrassed, Template.ƒS.positionPercent(Template.charaktere.maire.positionStandard.x, Template.charaktere.maire.positionStandard.y));
                await Template.ƒS.Character.show(Template.charaktere.bronte, Template.charaktere.bronte.pose.sad, Template.ƒS.positionPercent(Template.charaktere.bronte.positionStandard.x, Template.charaktere.bronte.positionStandard.y));
                await Template.ƒS.update(0.4);
                await Template.ƒS.Speech.tell(Template.charaktere.bronte, "Wir haben leider buchstäblich im Dunklen getappt. Am besten wir erzählen alles am Kamin. ");
                await Template.ƒS.Character.hide(Template.charaktere.grace);
                await Template.ƒS.Character.hide(Template.charaktere.maire);
                await Template.ƒS.Character.hide(Template.charaktere.bronte);
                await Template.ƒS.update(0.8);
                // fade to black
                await Template.ƒS.Location.show(Template.location.black);
                await Template.ƒS.update(Template.transistions.inToOut.duration, Template.transistions.inToOut.alpha, Template.transistions.inToOut.edge);
                //todo: sound
                await Template.ƒS.Location.show(Template.location.saalon);
                await Template.ƒS.update(Template.transistions.inToOut.duration, Template.transistions.inToOut.alpha, Template.transistions.inToOut.edge);
                await Template.ƒS.Character.show(Template.charaktere.maire, Template.charaktere.maire.pose.neutral, Template.ƒS.positionPercent(Template.charaktere.maire.positionStandard.x, Template.charaktere.maire.positionStandard.y));
                await Template.ƒS.Character.show(Template.charaktere.grace, Template.charaktere.grace.pose.think, Template.ƒS.positionPercent(Template.charaktere.grace.positionStandard.x, Template.charaktere.grace.positionStandard.y));
                await Template.ƒS.Character.show(Template.charaktere.bronte, Template.charaktere.bronte.pose.sad, Template.ƒS.positionPercent(Template.charaktere.bronte.positionStandard.x, Template.charaktere.bronte.positionStandard.y));
                await Template.ƒS.update(0.8);
                await Template.ƒS.Character.hide(Template.charaktere.grace);
                await Template.ƒS.Character.show(Template.charaktere.grace, Template.charaktere.grace.pose.angry, Template.ƒS.positionPercent(Template.charaktere.grace.positionStandard.x, Template.charaktere.grace.positionStandard.y));
                await Template.ƒS.update(0.4);
                //todo: Minus Punkte Grace		
                await Template.ƒS.Speech.tell(Template.charaktere.grace, "Aber… Oh sind das etwa Blüten meiner Seerosen! Oh weh. Die sind preisgekrönt! Das wird Monate dauern, die wieder so hinzubekommen. Passen sie doch besser auf! ");
            }
            else {
                await Template.ƒS.Speech.tell(Template.charaktere.grace, "Haben Sie sie gefunden?");
                await Template.ƒS.Character.hide(Template.charaktere.grace);
                await Template.ƒS.Character.hide(Template.charaktere.maire);
                await Template.ƒS.Character.hide(Template.charaktere.bronte);
                await Template.ƒS.Character.show(Template.charaktere.maire, Template.charaktere.maire.pose.sad, Template.ƒS.positionPercent(Template.charaktere.maire.positionStandard.x, Template.charaktere.maire.positionStandard.y));
                await Template.ƒS.Character.show(Template.charaktere.bronte, Template.charaktere.bronte.pose.sad, Template.ƒS.positionPercent(Template.charaktere.bronte.positionStandard.x, Template.charaktere.bronte.positionStandard.y));
                await Template.ƒS.Character.show(Template.charaktere.grace, Template.charaktere.grace.pose.sad, Template.ƒS.positionPercent(Template.charaktere.grace.positionStandard.x, Template.charaktere.grace.positionStandard.y));
                await Template.ƒS.update(0.4);
                await Template.ƒS.Speech.tell(Template.charaktere.bronte, "Wir haben Artemis leider noch nicht gefunden, jedoch ihre Spuren. Wir bräuchten nur ein bisschen Licht im Garten.");
                await Template.ƒS.Character.hide(Template.charaktere.grace);
                await Template.ƒS.Character.show(Template.charaktere.grace, Template.charaktere.grace.pose.think, Template.ƒS.positionPercent(Template.charaktere.grace.positionStandard.x, Template.charaktere.grace.positionStandard.y));
                await Template.ƒS.update(0.4);
                await Template.ƒS.Speech.tell(Template.charaktere.grace, " Licht? Oh, gehen die Laternen schon wieder nicht. Ich verstehe nichts von dieser Technik, aber wirklich zu verlässlich scheint sie mir ja nicht.");
                await Template.ƒS.Character.hide(Template.charaktere.grace);
                await Template.ƒS.Character.show(Template.charaktere.grace, Template.charaktere.grace.pose.happy, Template.ƒS.positionPercent(Template.charaktere.grace.positionStandard.x, Template.charaktere.grace.positionStandard.y));
                await Template.ƒS.update(0.4);
                await Template.ƒS.Speech.tell(Template.charaktere.grace, " Aber ich lasse gleich Remington danach sehen. ");
            }
            await Template.ƒS.Speech.tell(Template.charaktere.bronte, " Okay, ich denke wir können unsere Investigation fortsetzen. Lass uns gehen!");
            await Template.ƒS.Character.hide(Template.charaktere.maire);
            await Template.ƒS.Character.hide(Template.charaktere.grace);
            await Template.ƒS.Character.hide(Template.charaktere.bronte);
            await Template.ƒS.update(0.8);
            await Template.ƒS.Location.show(Template.location.gardenLight);
            await Template.ƒS.update(Template.transistions.inToOut.duration, Template.transistions.inToOut.alpha, Template.transistions.inToOut.edge);
        }
    }
    Template.SceneSixGarden = SceneSixGarden;
})(Template || (Template = {}));
var Template;
(function (Template) {
    async function SceneTenMaireAndIsaac() {
    }
    Template.SceneTenMaireAndIsaac = SceneTenMaireAndIsaac;
})(Template || (Template = {}));
var Template;
(function (Template) {
    async function SceneThreeSaalon() {
        let chooseWeirdPerson = {
            //todo: Pointsystem
            stella: "Stella",
            grace: "Grace",
            lordBlackburn: "Lord Blackburn"
        };
        let chooseHaggis = {
            //todo: Pointsystem
            lie: "Lüge",
            truth: "Erzähle Wahrheit"
        };
        await Template.ƒS.Sound.play(Template.sound.themeSaloon, 0.1, true);
        await Template.ƒS.Location.show(Template.location.saalon);
        await Template.ƒS.update(Template.transistions.inToOut.duration, Template.transistions.inToOut.alpha, Template.transistions.inToOut.edge);
        await Template.ƒS.Character.show(Template.charaktere.bronte, Template.charaktere.bronte.pose.happy, Template.ƒS.positionPercent(Template.charaktere.bronte.positionStandard.x, Template.charaktere.bronte.positionStandard.y));
        await Template.ƒS.Character.show(Template.charaktere.maire, Template.charaktere.maire.pose.neutral, Template.ƒS.positionPercent(Template.charaktere.maire.positionStandard.x, Template.charaktere.maire.positionStandard.y));
        await Template.ƒS.update(1);
        await Template.ƒS.Character.show(Template.charaktere.grace, Template.charaktere.grace.pose.laugh, Template.ƒS.positionPercent(Template.charaktere.grace.positionStandard.x, Template.charaktere.grace.positionStandard.y));
        await Template.ƒS.update(0.8);
        await Template.ƒS.Speech.tell(Template.charaktere.grace, " Oh! Miss Bronte! Welch eine Freude. Und oh… welch ein ungewöhnliches Outfit sie tragen. Sind das Hosen? Wie… modern. ");
        await Template.ƒS.Character.hide(Template.charaktere.grace);
        await Template.ƒS.Character.show(Template.charaktere.grace, Template.charaktere.grace.pose.happy, Template.ƒS.positionPercent(Template.charaktere.grace.positionStandard.x, Template.charaktere.grace.positionStandard.y));
        await Template.ƒS.update(0.4);
        await Template.ƒS.Speech.tell(Template.charaktere.bronte, " Vielen Dank. Sie sehen auch fantastisch aus Lady Blackburn. Darf ich Ihnen meine Begleitung vorstellen, dass hier ist Miss MacGinnis. ");
        await Template.ƒS.Character.hide(Template.charaktere.maire);
        await Template.ƒS.Character.show(Template.charaktere.maire, Template.charaktere.maire.pose.happy, Template.ƒS.positionPercent(Template.charaktere.maire.positionStandard.x, Template.charaktere.maire.positionStandard.y));
        await Template.ƒS.update(0.4);
        await Template.ƒS.Speech.tell(Template.charaktere.maire, " Oh, nennen sie mich Maire. ");
        await Template.ƒS.Character.hide(Template.charaktere.grace);
        await Template.ƒS.Character.show(Template.charaktere.grace, Template.charaktere.grace.pose.laugh, Template.ƒS.positionPercent(Template.charaktere.grace.positionStandard.x, Template.charaktere.grace.positionStandard.y));
        await Template.ƒS.update(0.4);
        await Template.ƒS.Speech.tell(Template.charaktere.grace, "Vornamen… wie… modern! Dann nennen sie mich doch gerne Grace. Die Etikette können Sie sich für meinen Bruder aufheben. Oh, da kommt er auch schon. ");
        await Template.ƒS.Character.hide(Template.charaktere.bronte);
        await Template.ƒS.Character.show(Template.charaktere.bronte, Template.charaktere.bronte.pose.happy, Template.ƒS.positionPercent(10, 110));
        await Template.ƒS.Character.hide(Template.charaktere.maire);
        await Template.ƒS.Character.show(Template.charaktere.maire, Template.charaktere.maire.pose.happy, Template.ƒS.positionPercent(90, 110));
        await Template.ƒS.update(0.2);
        await Template.ƒS.Character.hide(Template.charaktere.grace);
        await Template.ƒS.Character.show(Template.charaktere.grace, Template.charaktere.grace.pose.happy, Template.ƒS.positionPercent(Template.charaktere.grace.positionLeftMiddle.x, Template.charaktere.grace.positionLeftMiddle.y));
        await Template.ƒS.Character.hide(Template.charaktere.alaistar);
        await Template.ƒS.Character.show(Template.charaktere.alaistar, Template.charaktere.alaistar.pose.happy, Template.ƒS.positionPercent(Template.charaktere.alaistar.positionRightMiddle.x, Template.charaktere.alaistar.positionRightMiddle.y));
        await Template.ƒS.update(0.4);
        await Template.ƒS.Speech.tell(Template.charaktere.alaistar, "Guten Abend. Freut mich sie kennenzulernen. ");
        await Template.ƒS.Character.hide(Template.charaktere.alaistar);
        await Template.ƒS.Character.show(Template.charaktere.alaistar, Template.charaktere.alaistar.pose.neutral, Template.ƒS.positionPercent(Template.charaktere.alaistar.positionRightMiddle.x, Template.charaktere.alaistar.positionRightMiddle.y));
        await Template.ƒS.update(0.4);
        await Template.ƒS.Speech.tell(Template.charaktere.bronte, "Lord Blackburn, die Freude ist ganz unsererseits, vielen Dank für die Einladung zum Abendessen. ");
        await Template.ƒS.Speech.tell(Template.charaktere.alaistar, "Meine Schwester hat so von Ihnen geschwärmt, da wollte auch ich Sie kennenlernen. Ein Detektiv ist immer ein interessanter Gast. ");
        await Template.ƒS.Speech.tell(Template.charaktere.alaistar, " Auch wenn Ihre Fälle sich sicherlich eher mit verlorenen Schmuckstücken und verlegten Kleidern beschäftigten.");
        await Template.ƒS.Sound.play(Template.sound.alaisterLaugh, 0.6);
        await Template.ƒS.Character.hide(Template.charaktere.alaistar);
        await Template.ƒS.Character.show(Template.charaktere.alaistar, Template.charaktere.alaistar.pose.happy, Template.ƒS.positionPercent(Template.charaktere.alaistar.positionRightMiddle.x, Template.charaktere.alaistar.positionRightMiddle.y));
        await Template.ƒS.update(0.4);
        await Template.ƒS.Speech.tell(Template.charaktere.alaistar, " HoHo. Frauen Probleme.");
        await Template.ƒS.Character.hide(Template.charaktere.alaistar);
        await Template.ƒS.Character.show(Template.charaktere.alaistar, Template.charaktere.alaistar.pose.neutral, Template.ƒS.positionPercent(Template.charaktere.alaistar.positionRightMiddle.x, Template.charaktere.alaistar.positionRightMiddle.y));
        await Template.ƒS.update(0.4);
        await Template.ƒS.Character.hide(Template.charaktere.bronte);
        await Template.ƒS.Character.show(Template.charaktere.bronte, Template.charaktere.bronte.pose.sad, Template.ƒS.positionPercent(10, 110));
        await Template.ƒS.update(0.4);
        await Template.ƒS.Speech.tell(Template.charaktere.bronte, "Tatsächlich befassen sich meine Fälle mit allen Problemen, die in London auftauchen. Erst neulich habe ich die Napoleon Büchse- ");
        await Template.ƒS.Character.hide(Template.charaktere.bronte);
        await Template.ƒS.Character.show(Template.charaktere.bronte, Template.charaktere.bronte.pose.think, Template.ƒS.positionPercent(10, 110));
        await Template.ƒS.update(0.4);
        await Template.ƒS.Speech.tell(Template.charaktere.grace, "Oh Stella! Komm schnell rüber meine Liebe. Dann sind wir ja fast alle komplett. Komm schnell kleines und stell dich vor. Miss Bronte, dies ist meine Cousine, Stella Blackburn. ");
        await Template.ƒS.Character.hide(Template.charaktere.grace);
        await Template.ƒS.Character.show(Template.charaktere.grace, Template.charaktere.grace.pose.happy, Template.ƒS.positionPercent(Template.charaktere.grace.positionLeftMiddle.x, Template.charaktere.grace.positionLeftMiddle.y));
        await Template.ƒS.update(0.4);
        await Template.ƒS.Character.hide(Template.charaktere.stella);
        await Template.ƒS.Character.hide(Template.charaktere.alaistar);
        await Template.ƒS.Character.show(Template.charaktere.stella, Template.charaktere.stella.pose.sad, Template.ƒS.positionPercent(Template.charaktere.stella.positionRightMiddle.x, Template.charaktere.stella.positionRightMiddle.y));
        await Template.ƒS.update(0.8);
        await Template.ƒS.Speech.tell(Template.charaktere.stella, "Guten Abend. ");
        await Template.ƒS.Character.hide(Template.charaktere.bronte);
        await Template.ƒS.Character.show(Template.charaktere.bronte, Template.charaktere.bronte.pose.happy, Template.ƒS.positionPercent(10, 110));
        await Template.ƒS.update(0.4);
        await Template.ƒS.Speech.tell(Template.charaktere.bronte, "Freut mich Sie kennenzulernen. ");
        await Template.ƒS.Character.hide(Template.charaktere.grace);
        await Template.ƒS.Character.show(Template.charaktere.grace, Template.charaktere.grace.pose.laugh, Template.ƒS.positionPercent(Template.charaktere.grace.positionLeftMiddle.x, Template.charaktere.grace.positionLeftMiddle.y));
        await Template.ƒS.update(0.4);
        await Template.ƒS.Speech.tell(Template.charaktere.grace, "Stella ist ein fabelhaftes Mädchen. Sie verbringt den Sommer bei mir, um sich ein wenig an die Londoner Luft zu gewöhnen.");
        await Template.ƒS.Character.hide(Template.charaktere.grace);
        await Template.ƒS.Character.show(Template.charaktere.grace, Template.charaktere.grace.pose.happy, Template.ƒS.positionPercent(Template.charaktere.grace.positionLeftMiddle.x, Template.charaktere.grace.positionLeftMiddle.y));
        await Template.ƒS.update(0.4);
        await Template.ƒS.Speech.tell(Template.charaktere.grace, "Aber schauen sie sich mal diese wunderschönen Haare an. Ich denke wir werden nächste Season einen tollen Partner für sie finden. ");
        await Template.ƒS.Character.hide(Template.charaktere.bronte);
        await Template.ƒS.Character.show(Template.charaktere.bronte, Template.charaktere.bronte.pose.laugh, Template.ƒS.positionPercent(10, 110));
        await Template.ƒS.update(0.4);
        await Template.ƒS.Speech.tell(Template.charaktere.bronte, "Oh ja, sie müssen mir später unbedingt erklären, wie sie so großartige Locken herzaubern. ");
        await Template.ƒS.Speech.tell(Template.charaktere.stella, "Sicherlich. ");
        await Template.ƒS.Character.hide(Template.charaktere.bronte);
        await Template.ƒS.Character.show(Template.charaktere.bronte, Template.charaktere.bronte.pose.happy, Template.ƒS.positionPercent(10, 110));
        await Template.ƒS.update(0.4);
        await Template.ƒS.Character.hide(Template.charaktere.bronte);
        await Template.ƒS.Character.hide(Template.charaktere.maire);
        await Template.ƒS.Character.hide(Template.charaktere.stella);
        await Template.ƒS.Character.hide(Template.charaktere.grace);
        await Template.ƒS.update(0.4);
        await Template.ƒS.Character.show(Template.charaktere.remington, Template.charaktere.remington.pose.neutral, Template.ƒS.positionPercent(Template.charaktere.remington.positionStandard.x, Template.charaktere.remington.positionStandard.y));
        await Template.ƒS.update(0.8);
        await Template.ƒS.Speech.tell(Template.charaktere.remington, "Ehm… My Lord, my Lady, auch Mister Rothchester ist nun endlich eingetroffen. ");
        await Template.ƒS.Character.hide(Template.charaktere.remington);
        await Template.ƒS.update(0.4);
        await Template.ƒS.Character.show(Template.charaktere.alaistar, Template.charaktere.alaistar.pose.angry, Template.ƒS.positionPercent(50, Template.charaktere.alaistar.positionRightMiddle.y));
        await Template.ƒS.update(0.4);
        await Template.ƒS.Speech.tell(Template.charaktere.alaistar, " Wurde ja auch Zeit… Dieser Mann hat einfach keine Manieren. Bitte setzt euch alle schon Mal, ich werde Ihn kurz begrüßen und zur Eile mahnen. ");
        await Template.ƒS.Character.hide(Template.charaktere.alaistar);
        await Template.ƒS.update(0.8);
        await Template.ƒS.Character.show(Template.charaktere.maire, Template.charaktere.maire.pose.neutral, Template.ƒS.positionPercent(Template.charaktere.maire.positionStandard.x, Template.charaktere.maire.positionStandard.y));
        await Template.ƒS.update(0.4);
        await Template.ƒS.Speech.tell(Template.charaktere.maire, " Was für… Charaktere. Ich hätte mich wirklich besser anziehen sollen. Aber selbst mein bestes Kleid würde neben Lady Stella wie ein Putzlappen wirken. ");
        await Template.ƒS.Speech.tell(Template.charaktere.maire, "Aber… findest du nicht auch, dass einer der drei merkwürdig ist?");
        // todo: Point detectiv 
        let weirdPersonDecision = await Template.ƒS.Menu.getInput(chooseWeirdPerson, "basicChoice");
        switch (weirdPersonDecision) {
            case chooseWeirdPerson.stella:
                await Template.ƒS.Character.show(Template.charaktere.bronte, Template.charaktere.bronte.pose.think, Template.ƒS.positionPercent(Template.charaktere.bronte.positionStandard.x, Template.charaktere.bronte.positionStandard.y));
                await Template.ƒS.update(0.4);
                await Template.ƒS.Speech.tell(Template.charaktere.bronte, " Allerding, Stella sieht wirklich etwas blass aus. Ob sie wohl krank ist? ");
                await Template.ƒS.Character.hide(Template.charaktere.maire);
                await Template.ƒS.Character.show(Template.charaktere.maire, Template.charaktere.maire.pose.fear, Template.ƒS.positionPercent(Template.charaktere.maire.positionStandard.x, Template.charaktere.maire.positionStandard.y));
                await Template.ƒS.update(0.4);
                await Template.ƒS.Speech.tell(Template.charaktere.maire, " Hoffentlich stecke ich mich nicht an!");
                break;
            //todo: detectiv punkte
            case chooseWeirdPerson.grace:
                await Template.ƒS.Character.show(Template.charaktere.bronte, Template.charaktere.bronte.pose.think, Template.ƒS.positionPercent(Template.charaktere.bronte.positionStandard.x, Template.charaktere.bronte.positionStandard.y));
                await Template.ƒS.update(0.4);
                await Template.ƒS.Speech.tell(Template.charaktere.bronte, " Allerding, Grace ist eine sehr eigene Persönlichkeit. Und nicht sonderlich gut darin ihre Ansichten zu verstecke. ");
                await Template.ƒS.Speech.tell(Template.charaktere.maire, "Ich dachte ehrlich gesagt eher an Stella. Sie sieht etwas blass aus. ");
                break;
            case chooseWeirdPerson.lordBlackburn:
                await Template.ƒS.Character.show(Template.charaktere.bronte, Template.charaktere.bronte.pose.think, Template.ƒS.positionPercent(Template.charaktere.bronte.positionStandard.x, Template.charaktere.bronte.positionStandard.y));
                await Template.ƒS.update(0.4);
                await Template.ƒS.Speech.tell(Template.charaktere.bronte, " Allerdings, Lord Blackburns Einstellungen zu Frauen sind wohl bereits einige Jahrtausende alt… Wenn auch nicht ungewöhnlich für einen Mann seiner Stellung, leider.");
                await Template.ƒS.Speech.tell(Template.charaktere.maire, "Ich dachte ehrlich gesagt eher an Stella. Sie sieht etwas blass aus. ");
                break;
        }
        await Template.ƒS.Character.hide(Template.charaktere.bronte);
        await Template.ƒS.Character.show(Template.charaktere.bronte, Template.charaktere.bronte.pose.think, Template.ƒS.positionPercent(Template.charaktere.bronte.positionStandard.x, Template.charaktere.bronte.positionStandard.y));
        await Template.ƒS.Character.hide(Template.charaktere.maire);
        await Template.ƒS.Character.show(Template.charaktere.maire, Template.charaktere.maire.pose.neutral, Template.ƒS.positionPercent(Template.charaktere.maire.positionStandard.x, Template.charaktere.maire.positionStandard.y));
        await Template.ƒS.update(0.4);
        await Template.ƒS.Speech.tell(Template.charaktere.bronte, "Da scheint der letzte Gast zu kommen. ");
        await Template.ƒS.Character.hide(Template.charaktere.maire);
        await Template.ƒS.Character.hide(Template.charaktere.bronte);
        await Template.ƒS.update(0.4);
        await Template.ƒS.Character.show(Template.charaktere.isaac, Template.charaktere.isaac.pose.neutral, Template.ƒS.positionPercent(85, Template.charaktere.isaac.positionStandard.y));
        await Template.ƒS.update(0.4);
        await Template.ƒS.Speech.tell(Template.charaktere.isaac, "Guten Abend. Ich entschuldige meine Verspätung. ");
        await Template.ƒS.Character.show(Template.charaktere.grace, Template.charaktere.grace.pose.laugh, Template.ƒS.positionPercent(20, Template.charaktere.grace.positionStandard.y));
        await Template.ƒS.update(0.4);
        await Template.ƒS.Speech.tell(Template.charaktere.grace, "Nun… Als Gerichtsvertreter wird man wohl nicht pünktlich entlassen. Aber so ist die Mittelschicht wohl. ");
        await Template.ƒS.Character.hide(Template.charaktere.grace);
        await Template.ƒS.Character.hide(Template.charaktere.isaac);
        await Template.ƒS.Character.show(Template.charaktere.isaac, Template.charaktere.isaac.pose.sad, Template.ƒS.positionPercent(Template.charaktere.isaac.positionStandard.x, Template.charaktere.isaac.positionStandard.y));
        await Template.ƒS.update(0.8);
        await Template.ƒS.Character.show(Template.charaktere.bronte, Template.charaktere.bronte.pose.happy, Template.ƒS.positionPercent(Template.charaktere.bronte.positionStandard.x, Template.charaktere.bronte.positionStandard.y));
        await Template.ƒS.Character.show(Template.charaktere.maire, Template.charaktere.maire.pose.neutral, Template.ƒS.positionPercent(Template.charaktere.maire.positionStandard.x, Template.charaktere.maire.positionStandard.y));
        await Template.ƒS.update(0.8);
        await Template.ƒS.Speech.tell(Template.charaktere.isaac, "Ja… nun… Ah! Miss Bronte, richtig? Und sie müssen ihre Assistentin sein. Mac- Mac-? ");
        await Template.ƒS.Character.hide(Template.charaktere.maire);
        await Template.ƒS.Character.show(Template.charaktere.maire, Template.charaktere.maire.pose.happy, Template.ƒS.positionPercent(Template.charaktere.maire.positionStandard.x, Template.charaktere.maire.positionStandard.y));
        await Template.ƒS.update(0.4);
        await Template.ƒS.Speech.tell(Template.charaktere.maire, "Maire reicht aus. ");
        await Template.ƒS.Character.hide(Template.charaktere.isaac);
        await Template.ƒS.Character.show(Template.charaktere.isaac, Template.charaktere.isaac.pose.happy, Template.ƒS.positionPercent(Template.charaktere.isaac.positionStandard.x, Template.charaktere.isaac.positionStandard.y));
        await Template.ƒS.update(0.4);
        await Template.ƒS.Speech.tell(Template.charaktere.isaac, "Sehr erfreut. Ich bin Issac. Ich habe in Gericht ein paar Mal ihre Arbeit betrachten können. Sie scheinen sehr sorgfältig zu arbeiten! ");
        await Template.ƒS.Speech.tell(Template.charaktere.bronte, "Oh vielen dank. ");
        await Template.ƒS.Speech.tell(Template.charaktere.isaac, "Ah, ich sehe das Essen kommt, wir sollten uns setzte.");
        await Template.ƒS.Character.hide(Template.charaktere.isaac);
        await Template.ƒS.update(0.8);
        await Template.ƒS.Character.hide(Template.charaktere.maire);
        await Template.ƒS.Character.show(Template.charaktere.maire, Template.charaktere.maire.pose.embarrassed, Template.ƒS.positionPercent(Template.charaktere.maire.positionStandard.x, Template.charaktere.maire.positionStandard.y));
        await Template.ƒS.update(0.4);
        await Template.ƒS.Speech.tell(Template.charaktere.maire, "Bronte, bitte sag mir das ist keines dieser merkwürdigen britischen Gerichte?! ");
        await Template.ƒS.Character.hide(Template.charaktere.bronte);
        await Template.ƒS.Character.show(Template.charaktere.bronte, Template.charaktere.bronte.pose.think, Template.ƒS.positionPercent(Template.charaktere.bronte.positionStandard.x, Template.charaktere.bronte.positionStandard.y));
        await Template.ƒS.update(0.4);
        await Template.ƒS.Speech.tell(Template.charaktere.bronte, "Es ist tatsächlich Schottisch…");
        let haggisDecision = await Template.ƒS.Menu.getInput(chooseHaggis, "basicChoice");
        //todo: point system 
        switch (haggisDecision) {
            case chooseHaggis.lie:
                await Template.ƒS.Character.hide(Template.charaktere.bronte);
                await Template.ƒS.Character.show(Template.charaktere.bronte, Template.charaktere.bronte.pose.happy, Template.ƒS.positionPercent(Template.charaktere.bronte.positionStandard.x, Template.charaktere.bronte.positionStandard.y));
                await Template.ƒS.update(0.4);
                await Template.ƒS.Speech.tell(Template.charaktere.bronte, " Aber mach dir keine Sorge. Es ist ein sehr leckeres Gericht was aus etwas Lammfleisch besteht. ");
                await Template.ƒS.Character.hide(Template.charaktere.maire);
                await Template.ƒS.Character.show(Template.charaktere.maire, Template.charaktere.maire.pose.happy, Template.ƒS.positionPercent(Template.charaktere.maire.positionStandard.x, Template.charaktere.maire.positionStandard.y));
                await Template.ƒS.update(0.4);
                await Template.ƒS.Speech.tell(Template.charaktere.maire, " Phu… da bin ich erleichtert. Hatte mit dem schlimmsten gerechnet. Dann guten Appetit!");
                await Template.ƒS.Character.hide(Template.charaktere.bronte);
                await Template.ƒS.Character.hide(Template.charaktere.maire);
                await Template.ƒS.update(0.8);
                await Template.ƒS.Location.show(Template.location.black);
                await Template.ƒS.update(Template.transistions.inToOut.duration, Template.transistions.inToOut.alpha, Template.transistions.inToOut.edge);
                await Template.ƒS.Sound.play(Template.sound.dinnerSound, 0.5);
                await Template.ƒS.Sound.play(Template.sound.waterGlass, 0.1);
                await Template.ƒS.update(0.8);
                await Template.ƒS.Location.show(Template.location.saalon);
                await Template.ƒS.update(Template.transistions.inToOut.duration, Template.transistions.inToOut.alpha, Template.transistions.inToOut.edge);
                Template.dataForSave.greetingInSaalonFinished = true;
                await Template.ƒS.Character.show(Template.charaktere.bronte, Template.charaktere.bronte.pose.happy, Template.ƒS.positionPercent(Template.charaktere.bronte.positionStandard.x, Template.charaktere.bronte.positionStandard.y));
                await Template.ƒS.Character.show(Template.charaktere.maire, Template.charaktere.maire.pose.happy, Template.ƒS.positionPercent(Template.charaktere.maire.positionStandard.x, Template.charaktere.maire.positionStandard.y));
                await Template.ƒS.update(0.8);
                await Template.ƒS.Speech.tell(Template.charaktere.bronte, "Danke für das leckere Essen.");
                await Template.ƒS.Speech.tell(Template.charaktere.maire, "Ja vielen Dank!");
                await Template.ƒS.Character.show(Template.charaktere.grace, Template.charaktere.grace.pose.laugh, Template.ƒS.positionPercent(Template.charaktere.grace.positionStandard.x, Template.charaktere.grace.positionStandard.y));
                await Template.ƒS.update(0.4);
                await Template.ƒS.Speech.tell(Template.charaktere.grace, " Freut mich, dass es ihnen wohlbekommen ist. Mein Vater ist gebürtiger Schotte und so sind wir alle große Bewunderer der Schottischen Küche. ");
                await Template.ƒS.Speech.tell(Template.charaktere.grace, "Jetzt wo um unseren körperlichen Leib gesorgt ist, lasst uns den restlichen Abend genießen. Oh Miss Bronte ich habe noch eine kleine Überraschung für sie! Warten sie kurz. ");
                await Template.ƒS.Character.hide(Template.charaktere.grace);
                await Template.ƒS.update(0.8);
                await Template.ƒS.Character.show(Template.charaktere.isaac, Template.charaktere.isaac.pose.happy, Template.ƒS.positionPercent(Template.charaktere.isaac.positionStandard.x, Template.charaktere.isaac.positionStandard.y));
                await Template.ƒS.update(0.8);
                await Template.ƒS.Speech.tell(Template.charaktere.isaac, " Meine Schwägerin ist wohl sehr angetan von ihren Geschichten. Sie konnte beim Essen ja gar nicht von Ihnen ablassen. Ich hoffe sie konnten das Essen trotzdem genießen. ");
                await Template.ƒS.Speech.tell(Template.charaktere.bronte, " Oh ja keine Sorge und ich bin wohl auch zu Eitel um mir so eine Gelegenheit des Erzählens entgehen zu lassen. ");
                await Template.ƒS.Character.hide(Template.charaktere.bronte);
                await Template.ƒS.Character.show(Template.charaktere.bronte, Template.charaktere.bronte.pose.think, Template.ƒS.positionPercent(Template.charaktere.bronte.positionStandard.x, Template.charaktere.bronte.positionStandard.y));
                await Template.ƒS.update(0.4);
                await Template.ƒS.Speech.tell(Template.charaktere.bronte, "Wobei ich noch einmal betonnen muss, dass gerade Maire mir immer eine große Hilfe ist. Sie führt immerhin die Bücher.");
                await Template.ƒS.Character.hide(Template.charaktere.bronte);
                await Template.ƒS.Character.show(Template.charaktere.bronte, Template.charaktere.bronte.pose.happy, Template.ƒS.positionPercent(Template.charaktere.bronte.positionStandard.x, Template.charaktere.bronte.positionStandard.y));
                await Template.ƒS.Character.hide(Template.charaktere.maire);
                await Template.ƒS.Character.show(Template.charaktere.maire, Template.charaktere.maire.pose.embarrassed, Template.ƒS.positionPercent(Template.charaktere.maire.positionStandard.x, Template.charaktere.maire.positionStandard.y));
                await Template.ƒS.update(0.4);
                await Template.ƒS.Speech.tell(Template.charaktere.maire, " Oh… äh… Bronte dass ist ja keine große Sache. ");
                await Template.ƒS.Character.hide(Template.charaktere.maire);
                await Template.ƒS.Character.show(Template.charaktere.maire, Template.charaktere.maire.pose.happy, Template.ƒS.positionPercent(Template.charaktere.maire.positionStandard.x, Template.charaktere.maire.positionStandard.y));
                await Template.ƒS.update(0.4);
                await Template.ƒS.Speech.tell(Template.charaktere.isaac, " Wirklich sehr beeindruckend Maire.");
                break;
            case chooseHaggis.truth:
                Template.dataForSave.mairePuked = true;
                await Template.ƒS.Speech.tell(Template.charaktere.bronte, " Der Paunch – Magen eines Schafes – wird mit Herz, Niere, Leber und anderen Innereien gefüllt. Und das ergibt dann eine Art Wurst. Sehr lecker eigentlich, wenn auch ungewöhnlich. ");
                await Template.ƒS.Character.hide(Template.charaktere.maire);
                await Template.ƒS.Character.show(Template.charaktere.maire, Template.charaktere.maire.pose.fear, Template.ƒS.positionPercent(Template.charaktere.maire.positionStandard.x, Template.charaktere.maire.positionStandard.y));
                await Template.ƒS.update(0.4);
                await Template.ƒS.Speech.tell(Template.charaktere.maire, " Ich glaube mir wird schlecht…");
                //todo: sound food wie oben
                await Template.ƒS.Character.hide(Template.charaktere.bronte);
                await Template.ƒS.Character.hide(Template.charaktere.maire);
                await Template.ƒS.update(0.8);
                await Template.ƒS.Location.show(Template.location.black);
                await Template.ƒS.update(Template.transistions.inToOut.duration, Template.transistions.inToOut.alpha, Template.transistions.inToOut.edge);
                await Template.ƒS.Sound.play(Template.sound.dinnerSound, 0.5);
                await Template.ƒS.Sound.play(Template.sound.waterGlass, 0.1);
                await Template.ƒS.update(0.8);
                await Template.ƒS.Location.show(Template.location.saalon);
                await Template.ƒS.update(Template.transistions.inToOut.duration, Template.transistions.inToOut.alpha, Template.transistions.inToOut.edge);
                await Template.ƒS.Character.show(Template.charaktere.bronte, Template.charaktere.bronte.pose.happy, Template.ƒS.positionPercent(Template.charaktere.bronte.positionStandard.x, Template.charaktere.bronte.positionStandard.y));
                await Template.ƒS.Character.show(Template.charaktere.grace, Template.charaktere.grace.pose.laugh, Template.ƒS.positionPercent(Template.charaktere.grace.positionStandard.x, Template.charaktere.grace.positionStandard.y));
                await Template.ƒS.update(0.8);
                Template.dataForSave.greetingInSaalonFinished = true;
                await Template.ƒS.Speech.tell(Template.charaktere.bronte, "Danke für das leckere Essen.");
                await Template.ƒS.Character.hide(Template.charaktere.grace);
                await Template.ƒS.Character.show(Template.charaktere.grace, Template.charaktere.grace.pose.think, Template.ƒS.positionPercent(Template.charaktere.grace.positionStandard.x, Template.charaktere.grace.positionStandard.y));
                await Template.ƒS.update(0.4);
                await Template.ƒS.Speech.tell(Template.charaktere.grace, " Und Sie denken Ihrer Assistentin geht es wirklich gut? ");
                await Template.ƒS.Speech.tell(Template.charaktere.bronte, " Oh ja, Sie pudert sich bestimmt nur schnell die Nase.");
                await Template.ƒS.Character.hide(Template.charaktere.grace);
                await Template.ƒS.Character.show(Template.charaktere.grace, Template.charaktere.grace.pose.happy, Template.ƒS.positionPercent(Template.charaktere.grace.positionStandard.x, Template.charaktere.grace.positionStandard.y));
                await Template.ƒS.update(0.4);
                await Template.ƒS.Speech.tell(Template.charaktere.grace, " Freut mich, dass es ihnen wohlbekommen ist. Mein Vater ist gebürtiger Schotte und so sind wir alle große Bewunderer der Schottischen Küche. ");
                await Template.ƒS.Speech.tell(Template.charaktere.grace, "Jetzt wo um unseren körperlichen Leib gesorgt ist, lasst uns den restlichen Abend genießen. Oh Miss Bronte ich habe noch eine kleine Überraschung für sie! Warten sie kurz. ");
                await Template.ƒS.Character.hide(Template.charaktere.grace);
                await Template.ƒS.update(0.8);
                await Template.ƒS.Character.show(Template.charaktere.isaac, Template.charaktere.isaac.pose.happy, Template.ƒS.positionPercent(Template.charaktere.isaac.positionStandard.x, Template.charaktere.isaac.positionStandard.y));
                await Template.ƒS.update(0.8);
                await Template.ƒS.Speech.tell(Template.charaktere.isaac, " Meine Schwägerin ist wohl sehr angetan von ihren Geschichten. Sie konnte beim Essen ja gar nicht von Ihnen ablassen. Ich hoffe sie konnten das Essen trotzdem genießen. ");
                await Template.ƒS.Speech.tell(Template.charaktere.bronte, " Oh ja keine Sorge und ich bin wohl auch zu Eitel um mir so eine Gelegenheit des Erzählens entgehen zu lassen. ");
                await Template.ƒS.Character.hide(Template.charaktere.bronte);
                await Template.ƒS.Character.show(Template.charaktere.bronte, Template.charaktere.bronte.pose.think, Template.ƒS.positionPercent(Template.charaktere.bronte.positionStandard.x, Template.charaktere.bronte.positionStandard.y));
                await Template.ƒS.update(0.4);
                await Template.ƒS.Speech.tell(Template.charaktere.bronte, "Wobei ich noch einmal betonnen muss, dass gerade Maire mir immer eine große Hilfe ist. Sie führt immerhin die Bücher.");
                await Template.ƒS.Character.hide(Template.charaktere.isaac);
                await Template.ƒS.Character.show(Template.charaktere.isaac, Template.charaktere.isaac.pose.neutral, Template.ƒS.positionPercent(Template.charaktere.isaac.positionStandard.x, Template.charaktere.isaac.positionStandard.y));
                await Template.ƒS.update(0.4);
                await Template.ƒS.Speech.tell(Template.charaktere.isaac, " Oh wo wir gerade über sie sprechen… ");
                await Template.ƒS.Character.show(Template.charaktere.maire, Template.charaktere.maire.pose.neutral, Template.ƒS.positionPercent(Template.charaktere.maire.positionStandard.x, Template.charaktere.maire.positionStandard.y));
                await Template.ƒS.update(0.8);
                await Template.ƒS.Speech.tell(Template.charaktere.maire, " Bronte… Du kennst doch meinen Magen… das nächste Mal lüge mich einfach an. Ich habe mich ja komplett zum Deppen gemacht. Jetzt denken alle Irren hätten keine Manieren. ");
                await Template.ƒS.Speech.tell(Template.charaktere.bronte, " Dass tut mir sehr Leid… Aber ich denke niemand ist es wirklich aufgefallen. (Sie scheint es mir echt böse zu nehmen, ich sollte in nächster Zeit netter zu ihr sein).");
                break;
        }
    }
    Template.SceneThreeSaalon = SceneThreeSaalon;
})(Template || (Template = {}));
var Template;
(function (Template) {
    async function SceneTwelveFinal() {
    }
    Template.SceneTwelveFinal = SceneTwelveFinal;
})(Template || (Template = {}));
var Template;
(function (Template) {
    async function SceneTwoEntrance() {
        await Template.ƒS.Sound.play(Template.sound.themeEntrance, 0.1, true);
        await Template.ƒS.Location.show(Template.location.entrance);
        await Template.ƒS.update(Template.transistions.inToOut.duration, Template.transistions.inToOut.alpha, Template.transistions.inToOut.edge);
        await Template.ƒS.Character.show(Template.charaktere.maire, Template.charaktere.maire.pose.happy, Template.ƒS.positionPercent(Template.charaktere.maire.positionStandard.x, Template.charaktere.maire.positionStandard.y));
        await Template.ƒS.Character.show(Template.charaktere.remington, Template.charaktere.remington.pose.neutral, Template.ƒS.positionPercent(Template.charaktere.remington.positionStandard.x, Template.charaktere.remington.positionStandard.y));
        await Template.ƒS.Character.show(Template.charaktere.bronte, Template.charaktere.bronte.pose.happy, Template.ƒS.positionPercent(Template.charaktere.bronte.positionStandard.x, Template.charaktere.bronte.positionStandard.y));
        await Template.ƒS.update(1);
        await Template.ƒS.Speech.tell(Template.charaktere.maire, " Wow… was für eine schöne Eingangshalle ");
        await Template.ƒS.Speech.tell(Template.charaktere.remington, "Das Manor ist im Besitz der Familie Blackburn seit 1705. Nach 100 Jahren erlag es jedoch dem Ratcliff Feuer und musste zum großen Teil neu errichtet werden.");
        await Template.ƒS.Speech.tell(Template.charaktere.remington, "In den fünfziger Jahren bekam es dann noch einmal eine Renovierung von dem ehrenwerten Lord Blackburn Sr. – Gott habe ihn selig –");
        await Template.ƒS.Character.hide(Template.charaktere.maire);
        await Template.ƒS.Character.show(Template.charaktere.maire, Template.charaktere.maire.pose.neutral, Template.ƒS.positionPercent(Template.charaktere.maire.positionStandard.x, Template.charaktere.maire.positionStandard.y));
        await Template.ƒS.update(0.4);
        await Template.ƒS.Speech.tell(Template.charaktere.remington, "und ist nun unter der Obhut und Lord Blackburn, welcher seine ehrenwerte Schwester Lady Blackburn hier wohnen lässt.");
        await Template.ƒS.Character.hide(Template.charaktere.remington);
        await Template.ƒS.Character.show(Template.charaktere.remington, Template.charaktere.remington.pose.angry, Template.ƒS.positionPercent(Template.charaktere.remington.positionStandard.x, Template.charaktere.remington.positionStandard.y));
        await Template.ƒS.update(0.4);
        await Template.ƒS.Speech.tell(Template.charaktere.remington, " Entschuldigung, langweile ich sie? ");
        await Template.ƒS.Character.hide(Template.charaktere.maire);
        await Template.ƒS.Character.show(Template.charaktere.maire, Template.charaktere.maire.pose.fear, Template.ƒS.positionPercent(Template.charaktere.maire.positionStandard.x, Template.charaktere.maire.positionStandard.y));
        await Template.ƒS.update(0.4);
        await Template.ƒS.Speech.tell(Template.charaktere.maire, " Zzz Oh! Äh nein… natürlich nicht. Faszinierend… ");
        await Template.ƒS.Character.hide(Template.charaktere.maire);
        await Template.ƒS.Character.show(Template.charaktere.maire, Template.charaktere.maire.pose.embarrassed, Template.ƒS.positionPercent(Template.charaktere.maire.positionStandard.x, Template.charaktere.maire.positionStandard.y));
        await Template.ƒS.update(0.4);
        await Template.ƒS.Character.hide(Template.charaktere.remington);
        await Template.ƒS.Character.show(Template.charaktere.remington, Template.charaktere.remington.pose.neutral, Template.ƒS.positionPercent(Template.charaktere.remington.positionStandard.x, Template.charaktere.remington.positionStandard.y));
        await Template.ƒS.update(0.4);
        await Template.ƒS.Speech.tell(Template.charaktere.bronte, " Und wie. Wir haben Glück das die Familie in einen so guten Zustand hält. Es ist wirklich prächtig. ");
        await Template.ƒS.Character.hide(Template.charaktere.maire);
        await Template.ƒS.Character.show(Template.charaktere.maire, Template.charaktere.maire.pose.neutral, Template.ƒS.positionPercent(Template.charaktere.maire.positionStandard.x, Template.charaktere.maire.positionStandard.y));
        await Template.ƒS.update(0.4);
        await Template.ƒS.Speech.tell(Template.charaktere.remington, " Da stimme ich ihnen zu. Darf ich Ihnen Ihren Mantel abnehmen, Miss? ");
        await Template.ƒS.Character.hide(Template.charaktere.maire);
        await Template.ƒS.Character.show(Template.charaktere.maire, Template.charaktere.maire.pose.embarrassed, Template.ƒS.positionPercent(Template.charaktere.maire.positionStandard.x, Template.charaktere.maire.positionStandard.y));
        await Template.ƒS.update(0.4);
        await Template.ƒS.Speech.tell(Template.charaktere.maire, " Oh… vielen Dank, aber ich denke ich behalte ihn lieber an. Ich äh… erkälte mich so schnell… ");
        await Template.ƒS.Character.hide(Template.charaktere.maire);
        await Template.ƒS.Character.show(Template.charaktere.maire, Template.charaktere.maire.pose.neutral, Template.ƒS.positionPercent(Template.charaktere.maire.positionStandard.x, Template.charaktere.maire.positionStandard.y));
        await Template.ƒS.update(0.4);
        await Template.ƒS.Speech.tell(Template.charaktere.remington, " Wie Sie wünschen. Geben sie mir einen Moment. Ich werde Sie den Anwesenden Ankündigen. Nutzen Sie die Zeit gerne um sich… herzurichten. ");
        await Template.ƒS.Character.hide(Template.charaktere.remington);
        await Template.ƒS.update(0.8);
        await Template.ƒS.Character.hide(Template.charaktere.maire);
        await Template.ƒS.Character.show(Template.charaktere.maire, Template.charaktere.maire.pose.sad, Template.ƒS.positionPercent(Template.charaktere.maire.positionStandard.x, Template.charaktere.maire.positionStandard.y));
        await Template.ƒS.update(0.4);
        await Template.ƒS.Speech.tell(Template.charaktere.maire, " Oh weh… ich glaube er kann uns nicht leiden.");
        if (Template.dataForSave.foundRing == true) {
            await Template.ƒS.Speech.tell(Template.charaktere.maire, "Wir hätten nicht im Garten rumschnüffeln sollen.");
        }
        else if (Template.dataForSave.spiedThroughWindow == true) {
            await Template.ƒS.Speech.tell(Template.charaktere.maire, "Er denkt wohl wir schnüffeln hier herum.");
        }
        else {
            await Template.ƒS.Speech.tell(Template.charaktere.maire, "Dabei haben wir gar nichts gemacht.");
        }
        await Template.ƒS.Character.hide(Template.charaktere.bronte);
        await Template.ƒS.Character.show(Template.charaktere.bronte, Template.charaktere.bronte.pose.think, Template.ƒS.positionPercent(Template.charaktere.bronte.positionStandard.x, Template.charaktere.bronte.positionStandard.y));
        await Template.ƒS.update(0.4);
        await Template.ƒS.Speech.tell(Template.charaktere.bronte, " Ach was. Er ist halt ein wenig reserviert. Viele Butler sind so. Aber Maire, warum klammerst du dich so an denen Mantel? Geht es dir nicht gut? ");
        await Template.ƒS.Character.hide(Template.charaktere.maire);
        await Template.ƒS.Character.show(Template.charaktere.maire, Template.charaktere.maire.pose.embarrassed, Template.ƒS.positionPercent(Template.charaktere.maire.positionStandard.x, Template.charaktere.maire.positionStandard.y));
        await Template.ƒS.update(0.4);
        await Template.ƒS.Speech.tell(Template.charaktere.maire, " Oh nein… alles ist gut… Ich habe nur vorhin auf mein Kleid gekleckert. Ich wusste ja nicht, dass wir mit einer echten Lady essen. ");
        await Template.ƒS.Character.hide(Template.charaktere.maire);
        await Template.ƒS.Character.show(Template.charaktere.maire, Template.charaktere.maire.pose.neutral, Template.ƒS.positionPercent(Template.charaktere.maire.positionStandard.x, Template.charaktere.maire.positionStandard.y));
        await Template.ƒS.Character.hide(Template.charaktere.bronte);
        await Template.ƒS.Character.show(Template.charaktere.bronte, Template.charaktere.bronte.pose.laugh, Template.ƒS.positionPercent(Template.charaktere.bronte.positionStandard.x, Template.charaktere.bronte.positionStandard.y));
        await Template.ƒS.update(0.4);
        await Template.ƒS.Speech.tell(Template.charaktere.bronte, " hihi… nun gut, dass erklärt es natürlich. Ah, der Butler winkt uns herein.");
        await Template.ƒS.Speech.tell(Template.charaktere.maire, "Mhm, aber irgendwas gefällt mir an der ganzen Sache nicht. Weißt du, ich glaube ich werde den Abend heute dokumentieren.");
        await Template.ƒS.Character.hide(Template.charaktere.bronte);
        await Template.ƒS.Character.show(Template.charaktere.bronte, Template.charaktere.bronte.pose.think, Template.ƒS.positionPercent(Template.charaktere.bronte.positionStandard.x, Template.charaktere.bronte.positionStandard.y));
        await Template.ƒS.update(0.4);
        await Template.ƒS.Speech.tell(Template.charaktere.bronte, "So wie bei unseren Fällen? Keine schlechte Idee und eine gute Übung. Auch wenn du es nicht notwendig hast.");
        await Template.ƒS.Character.hide(Template.charaktere.maire);
        await Template.ƒS.Character.show(Template.charaktere.maire, Template.charaktere.maire.pose.happy, Template.ƒS.positionPercent(Template.charaktere.maire.positionStandard.x, Template.charaktere.maire.positionStandard.y));
        await Template.ƒS.update(0.4);
        await Template.ƒS.Speech.tell(Template.charaktere.maire, "Genau. Und wer weiß, vielleicht wird der Abend spanneder als gedacht.");
        Template.ƒS.Text.addClass("diaryUnlocked");
        Template.ƒS.Text.print("<h4> Tagebuch freigeschaltet </h4> <p>Das Tagebuch von Maire steht dir jederzeit im Menü zuverfügung. Drücke <b>'M'</b> um es jederzeit zu öffnen</p>");
        await Template.ƒS.Speech.tell(Template.charaktere.bronte, "Oh der Butler winkt uns rein. Lass uns gehen!");
        await Template.ƒS.Sound.fade(Template.sound.themeEntrance, 0, 1, false);
        await Template.ƒS.Character.hide(Template.charaktere.maire);
        await Template.ƒS.Character.hide(Template.charaktere.remington);
        await Template.ƒS.Character.hide(Template.charaktere.bronte);
        await Template.ƒS.update(0.8);
        return "SceneThreeSaalon";
    }
    Template.SceneTwoEntrance = SceneTwoEntrance;
})(Template || (Template = {}));
//# sourceMappingURL=ArtemisMysterium.js.map