"use strict";
var Template;
(function (Template) {
    async function EndScreen() {
        document.getElementById('endScreen').classList.add('endScreenVisible');
        document.getElementById('endScreen').classList.remove('endScreenInvisible');
        await Template.ƒS.Sound.fade(Template.sound.themeinfrontManor, 0.1, 1, true);
    }
    Template.EndScreen = EndScreen;
})(Template || (Template = {}));
var Template;
(function (Template) {
    Template.ƒ = FudgeCore;
    Template.ƒS = FudgeStory;
    console.log("Artemis Mysterium starting");
    //define transistions
    Template.transistions = {
        inToOut: {
            duration: 1,
            alpha: "Assets/Transistion/02.png",
            edge: 1 //härtegrad
        },
        wallpaper: {
            duration: 1,
            alpha: "Assets/Transistion/transistionWallpaper.png",
            edge: 1
        }
    };
    Template.sound = {
        //Themes
        //Scene 1
        themeinfrontManor: "blalElegant",
        themeinfrontManorNight: "./../Assets/sounds/forest-chorus-12444.mp3",
        themeEntrance: "./../../Assets/sounds/peter-tchaikovsky-neapolitan-song-opus-Entry.mp3",
        themeSaloon: "./../../Assets/sounds/peter-tchaikovsky-march-from-nutcracker-classical-remix-7691.mp3",
        dramaInSaloon: "./../../Assets/sounds/classical-piano-peter-tchaikovsky-chant-sans-paroles-opus-40-6-21872.mp3",
        saloonAfterScrem: "./../../Assets/sounds/frederic-chopin-nocturne-21-classical-remix-7611.mp3",
        //SFX
        catMeow: "./../../Assets/sounds/cat-meow-6226.mp3",
        goingThrouBushes: "./../../Assets/sounds/fx/shaken-bushes.mp3",
        knockDoor: "./../../Assets/sounds/fx/knockDoor.wav",
        alaisterLaugh: "./../../Assets/sounds/fx/alaistarLaugh.wav",
        dinnerSound: "./../../Assets/sounds/fx/dinnerdishesmp3-14762.wav",
        waterGlass: "/Assets/sounds/fx/water-filled-cup-9901.mp3"
    };
    Template.location = {
        infrontOfManorDay: {
            name: "manorDay",
            background: "Asset/background/vorDemManorBackground.png",
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
    };
    Template.charaktere = {
        bronte: {
            name: "Brontë",
            origin: Template.ƒS.ORIGIN.BOTTOMCENTER,
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
            origin: Template.ƒS.ORIGIN.BOTTOMCENTER,
            pose: {
                neutral: "./../../Assets/characters/maire/Assestentin-neutral.png",
                embarrassed: "./../../Assets/characters/maire/Assestentin-emberassed.png",
                fear: "./../../Assets/characters/maire/Assestentin-fear.png",
                happy: "./../../Assets/characters/maire/Assestentin-happy.png",
                sad: "./../../Assets/characters/maire/Assestentin-sad.png",
                laugh: "./../../Assets/characters/maire/Assestentin-laugh.png"
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
            origin: Template.ƒS.ORIGIN.BOTTOMCENTER,
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
            origin: Template.ƒS.ORIGIN.BOTTOMCENTER,
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
            origin: Template.ƒS.ORIGIN.BOTTOMCENTER,
            pose: {
                happy: "./../../Assets/characters/odette/odette-happy.png",
                angry: "./../../Assets/characters/odette/odette.angry.png"
            }
        },
        remington: {
            name: "Remington",
            origin: Template.ƒS.ORIGIN.BOTTOMCENTER,
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
            origin: Template.ƒS.ORIGIN.BOTTOMCENTER,
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
    };
    Template.inventory = {
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
    let inGameMenuButtons = {
        save: "Speichern",
        load: "Laden",
        credit: "Mitwirkende",
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
            { id: "SceneEightSaalonInterview", scene: Template.SceneEightSaalonInterview, name: "SceneEightSaalonInterview" }
            //{id: "EndScreen", scene: EndScreen, name: "EndScreen"}
        ];
        // start the sequence
        Template.ƒS.Progress.go(scenes);
    }
})(Template || (Template = {}));
var Template;
(function (Template) {
    async function SceneFourSaalonDrama() {
        let chooseBeRespectfull = {
            //todo: Pointsystem
            yes: "Ja",
            no: "Nein"
        };
        //todo am ende kann location einblenden weg
        await Template.ƒS.Location.show(Template.location.saalon);
        await Template.ƒS.update(0.1);
        //
        await Template.ƒS.Sound.fade(Template.sound.themeSaloon, 0, 0.3);
        await Template.ƒS.Sound.play(Template.sound.dramaInSaloon, 0.1, true);
        //todo: add hide für issac, bronte, maire
        await Template.ƒS.Character.show(Template.charaktere.maire, Template.charaktere.maire.pose.fear, Template.ƒS.positionPercent(Template.charaktere.maire.positionStandard.x, Template.charaktere.maire.positionStandard.y));
        await Template.ƒS.Character.show(Template.charaktere.isaac, Template.charaktere.isaac.pose.sad, Template.ƒS.positionPercent(Template.charaktere.isaac.positionStandard.x, Template.charaktere.isaac.positionStandard.y));
        await Template.ƒS.Character.show(Template.charaktere.bronte, Template.charaktere.bronte.pose.shout, Template.ƒS.positionPercent(Template.charaktere.bronte.positionStandard.x, Template.charaktere.bronte.positionStandard.y));
        await Template.ƒS.update(0.4);
        //todo: scream
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
        //todo: point system (?)
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
                break;
        }
        await Template.ƒS.Character.hide(Template.charaktere.alaistar);
        await Template.ƒS.Character.hide(Template.charaktere.grace);
        await Template.ƒS.update(0.4);
        //todo: Gemüteleiste einführen
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
    async function SceneEightSaalonInterview() {
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
        await Template.ƒS.Speech.tell(Template.charaktere.bronte, " Gut. Wir haben ein Hinweis auf den Verbleib der Katze gefunden. Sie ist");
        //Auswahl1 todo: detectives points
        //Dunkel ins Wasser 
        await Template.ƒS.Speech.tell(Template.charaktere.bronte, "  Aufgrund der Dunkelheit vor dem Manor ins Wasser gefallen.");
        await wrongAssumptionBronteFirstChoice();
        //in die hütte eingebrochen    
        await Template.ƒS.Speech.tell(Template.charaktere.bronte, "   In die Gartenhütte eingebrochen!");
        await wrongAssumptionBronteFirstChoice();
        //in die hütte einsperrt 
        await Template.ƒS.Speech.tell(Template.charaktere.bronte, " Es sieht ganz so aus als hätte jemand die in die Hütte eingesperrt. Wir haben die Säule weggeschoben, aber in der Hütte war nur noch das Halsband. ");
        await Template.ƒS.Speech.tell(Template.charaktere.grace, " Ooooh... kann ich es wiederhaben?");
        //Auswahl2 Halsband geben ja nein 
        // Ja todo: Halsband abgeben 
        await Template.ƒS.Speech.tell(Template.charaktere.bronte, "Natürlich. Hier");
        //Nein todo: - Grace
        await Template.ƒS.Speech.tell(Template.charaktere.bronte, "Nein, es ist weiterhin Teil der Untersuchung");
        //Auswahl2 Ende Halsband 
        //AUSWAHL1 ENDE 
        await Template.ƒS.Speech.tell(Template.charaktere.isaac, " Aber wenn sie das Halsband gefunden haben, wo ist dann die Katze? ");
        await Template.ƒS.Speech.tell(Template.charaktere.bronte, " Ganz einfach:");
        //Auswahl: wo ist Katze 
        // entführt
        await Template.ƒS.Speech.tell(Template.charaktere.bronte, " Sie wurde entführt! ");
        await Template.ƒS.Speech.tell(Template.charaktere.alaistar, " Meinten sie nicht gerade, sie wäre eingesperrt worden? Klingt nicht nach einer Entführung für mich. ");
        await Template.ƒS.Speech.tell(Template.charaktere.bronte, " Oh äh… ich meinte.");
        //Durch Dach entkommen 
        await Template.ƒS.Speech.tell(Template.charaktere.bronte, "Sie ist durch das Dach entkommen! Und dabei hat sie ihr Halsband verloren.");
        //Ende Auswahl
        // <if -2 Dedektive Points>
        // Grace: Mhm… Ihren anderen Fall haben sie eleganter gelöst… Sie scheinen heute etwas verwirrt zu sein. 
        // <ig -2/3? Punkte mit Maire>
        // Maire: Sie hat einen Punkt… 
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
        await Template.ƒS.Speech.tell(Template.charaktere.bronte, " Irgendwas stimmt hier doch nicht… Die Katze wurde eingesperrt aber Lady Grace scheint gar nicht daran interessiert zu sein. Oder um das Wohlbehagen von Artemis, obwohl sie vorhin so besorgt um sie war. ");
        await Template.ƒS.Speech.tell(Template.charaktere.maire, " Mhm… und sie will nicht, dass wir weiter investigieren. Was machen wir jetzt?");
        //Auswahl Was machen wir jetzt?
        //Wenn Dialog in zwei Auswahlen sich wiederholt
        async function wrongAssumptionBronteFirstChoice() {
            await Template.ƒS.Speech.tell(Template.charaktere.alaistar, " … Das ist ein Witz, richtig? ");
            await Template.ƒS.Speech.tell(Template.charaktere.maire, " Oh ja… Bronte erzähl was wirklich passiert ist du Scherzkeks.");
        }
    }
    Template.SceneEightSaalonInterview = SceneEightSaalonInterview;
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
    async function SceneOneInfront() {
        console.log("FudgeStory Template Scene starting");
        //Alle Wahlmöglichkeiten in Szene 
        let chooseCatNoise = {
            bush: "Untersuche Busch",
            window: "Untersuche Fenster",
            knock: "Klopfe an der Tür"
        };
        //ƒS.Speech.set("Information", "Drücke 'M' um das Spielmenü zu öffnen und deinen Speicherstand zu speichern oder laden.");
        //todo: Input einbauen und stylen, gleich auf DataForSave speichern
        // let test = await ƒS.Speech.getInput();
        //return "SceneEightSaalonInterview"; 
        //return "SceneFiveOutside";
        Template.dataForSave.pointAngryGrace += 20;
        // await ƒS.Sound.fade(sound.themeinfrontManor, 0.1, 1, true); 
        await Template.ƒS.Location.show(Template.location.infrontOfManorDay);
        await Template.ƒS.update(Template.transistions.wallpaper.duration, Template.transistions.wallpaper.alpha, Template.transistions.wallpaper.edge);
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
        //todo: hier unterschiedlicher Dialog
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