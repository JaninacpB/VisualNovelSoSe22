"use strict";
var Template;
(function (Template) {
    Template.ƒ = FudgeCore;
    Template.ƒS = FudgeStory;
    console.log("Artemis Mysterium starting");
    //define transistions
    Template.transistions = {
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
    };
    Template.sound = {
        //Themes
        //Scene 1
        themeinfrontManor: "./../../Assets/sounds/infrontOfManorScene1PianoElegeant.mp3",
        themeEntrance: "./../../Assets/sounds/peter-tchaikovsky-neapolitan-song-opus-Entry.mp3",
        //SFX
        guterNameSoundEffekt: ""
    };
    Template.location = {
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
            }
        },
        alaistar: {
            origin: Template.ƒS.ORIGIN.BOTTOMCENTER,
            pose: {
                angry: "./../../Assets/characters/alaistar/Alaistar-angry.png",
                happy: "./../../Assets/characters/alaistar/Alaistar-happy.png",
                neutral: "./../../Assets/characters/alaistar/Alaistar-neutral.png"
            }
        },
        grace: {
            origin: Template.ƒS.ORIGIN.BOTTOMCENTER,
            pose: {
                angry: "./../../Assets/characters/grace/Grace-angry.png",
                happy: "./../../Assets/characters/grace/Grace-happy.png",
                laugh: "./../../Assets/characters/grace/Grace-laugh.png",
                sad: "./../../Assets/characters/grace/Grace-sad.png",
                think: "./../../Assets/characters/grace/Grace-thinking.png"
            }
        },
        isaac: {
            origin: Template.ƒS.ORIGIN.BOTTOMCENTER,
            pose: {
                cry: "./../../Assets/characters/isaac/Isaac-cry.png",
                crying: "./../../Assets/characters/isaac/Isaac-crying.png",
                happy: "./../../Assets/characters/isaac/Isaac-happy.png",
                neutral: "./../../Assets/characters/isaac/Isaac-neutral.png",
                sad: "./../../Assets/characters/isaac/Isaac-sad.png"
            }
        },
        odette: {
            origin: Template.ƒS.ORIGIN.BOTTOMCENTER,
            pose: {
                happy: "./../../Assets/characters/odette/odette-happy.png",
                angry: "./../../Assets/characters/odette/odette.angry.png"
            }
        },
        remington: {
            origin: Template.ƒS.ORIGIN.BOTTOMCENTER,
            pose: {
                angry: "./../../Assets/characters/remington/Remington-angry.png",
                neutral: "./../../Assets/characters/remington/Remington-neutral-first.png"
            }
        },
        stella: {
            origin: Template.ƒS.ORIGIN.BOTTOMCENTER,
            pose: {
                frighten: "./../../Assets/characters/stella/stella-frighten.png",
                happy: "./../../Assets/characters/stella/stella-happy-first.png",
                laugh: "./../../Assets/characters/stella/stella-happy-laugh.png",
                sad: "./../../Assets/characters/stella/stella-sad.png"
            }
        }
    };
    Template.dataForSave = {
        //Sachen die Gespeichert werden müssen
        Achievment: {
            saveTheCat: false
        }
    };
    window.addEventListener("load", start);
    function start(_event) {
        let scenes = [
            { scene: Template.SceneOneInfront, name: "Scene" },
            { id: "SceneTwoEntrance", scene: Template.SceneTwoEntrance, name: "SceneTwoEntrance" },
            { id: "SceneThreeSaalon", scene: Template.SceneThreeSaalon, name: "SceneThreeSaalon" },
        ];
        // start the sequence
        Template.ƒS.Progress.go(scenes);
    }
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
        // Text geschwindigkeit regulieren (was ist basic)
        //  await ƒS.Speech.setTickerDelays(1);
        await Template.ƒS.Sound.fade(Template.sound.themeinfrontManor, 0.1, 1, true);
        await Template.ƒS.Location.show(Template.location.infrontOfManorDay);
        await Template.ƒS.update(Template.transistions.wallpaper.duration, Template.transistions.wallpaper.alpha, Template.transistions.wallpaper.edge);
        await Template.ƒS.Speech.tell(Template.charaktere.maire, "	Oh, was für ein prächtiges Anwesen. Und wir sind hier wirklich richtig?");
        await Template.ƒS.Character.show(Template.charaktere.maire, Template.charaktere.maire.pose.neutral, Template.ƒS.positionPercent(75, 100));
        await Template.ƒS.update(1);
        await Template.ƒS.Speech.tell(Template.charaktere.bronte, "Ja, die Blackburns haben schon seit vielen Jahren diesen Wohnsitz. Ich habe dir doch gesagt, dass es heute Abend eine sehr vornehme Veranstaltung wird.");
        await Template.ƒS.Speech.tell(Template.charaktere.maire, "Ja aber doch nicht so vornehm! Du hättest mich besser warnen müssen. Ich sehe ja aus wie ein Dorftrampel. Ich dachte du hättest für die Dame des Hauses einen Fall gelöst?");
        await Template.ƒS.Speech.tell(Template.charaktere.bronte, "Habe ich ja auch. Wobei es eher ein Zufall war, dass der Crossstreet-Bandit auch ihre Smaragd Brosche gestohlen hatte. Aber so oder so war die Lady jedoch so dankbar, dass sie mich reichlich belohnt hat und zu einem Essen eingeladen hat. ");
        document.getElementById('speechContent').classList.add('textEffectBig');
        await Template.ƒS.Speech.tell(Template.charaktere.maire, "!!! ");
        document.getElementById('speechContent').classList.remove('textEffectBig');
        await Template.ƒS.Speech.tell(Template.charaktere.maire, "Eine Lady!");
        await Template.ƒS.Speech.tell(Template.charaktere.maire, "Bronte du hast nicht erwähnt, dass sie eine Lady ist! Oh großgütiger, ich sehe aus wie eine Heuschrecke! ");
        await Template.ƒS.Speech.tell(Template.charaktere.bronte, "Ach was Maire, du siehst wie immer fantastisch aus. Mach dir keine Sorge-");
        document.getElementById('speechContent').classList.add('textEffectBig');
        await Template.ƒS.Speech.tell("", "MAUI!");
        document.getElementById('speechContent').classList.remove('textEffectBig');
        await Template.ƒS.Speech.tell(Template.charaktere.maire, "AHH!");
        await Template.ƒS.Speech.tell(Template.charaktere.maire, "Was... war das eine Katze?");
        await Template.ƒS.Speech.tell(Template.charaktere.bronte, "Und eine schnelle dazu… sieht so aus als wäre sie in die Hecke verschwunden. Komisch, ich frag mich was sie da gesehen hat.");
        await Template.ƒS.Speech.tell(Template.charaktere.maire, "Vermutlich einen Vogel. Wir sollten glaube ich langsam Klopfen. Ich glaube jemand hat gerade durch das Fenster geschaut. Wir sehen ja aus wie gewöhnliche Straßendiebe für diese Leute. ");
        let userChooseCatNoise = await Template.ƒS.Menu.getInput(chooseCatNoise, "XXX");
        switch (userChooseCatNoise) {
            case chooseCatNoise.bush:
                break;
        }
        await Template.ƒS.Speech.tell(Template.charaktere.bronte, "");
        await Template.ƒS.Speech.tell(Template.charaktere.maire, "");
        await Template.ƒS.Sound.fade(Template.sound.themeinfrontManor, 0, 0.4, false);
        return "SceneTwoEntrance";
    }
    Template.SceneOneInfront = SceneOneInfront;
})(Template || (Template = {}));
var Template;
(function (Template) {
    async function SceneThreeSaalon() {
        //await ƒS.Sound.play(sound.themeEntrance, 0.1, true); 
        await Template.ƒS.Location.show(Template.location.saalon);
        await Template.ƒS.update(Template.transistions.puzzle.duration, Template.transistions.puzzle.alpha, Template.transistions.puzzle.edge);
        await Template.ƒS.Speech.tell(Template.charaktere.maire, "Oh, was für ein prächtiges Anwesen. Und wir sind hier wirklich richtig?");
        await Template.ƒS.Character.show(Template.charaktere.maire, Template.charaktere.maire.pose.neutral, Template.ƒS.positionPercent(75, 100));
        await Template.ƒS.update(1);
    }
    Template.SceneThreeSaalon = SceneThreeSaalon;
})(Template || (Template = {}));
var Template;
(function (Template) {
    async function SceneTwoEntrance() {
        await Template.ƒS.Sound.play(Template.sound.themeEntrance, 0.1, true);
        await Template.ƒS.Location.show(Template.location.entrance);
        await Template.ƒS.update(Template.transistions.puzzle.duration, Template.transistions.puzzle.alpha, Template.transistions.puzzle.edge);
        await Template.ƒS.Speech.tell(Template.charaktere.maire, "Oh, was für ein prächtiges Anwesen. Und wir sind hier wirklich richtig?");
        await Template.ƒS.Character.show(Template.charaktere.maire, Template.charaktere.maire.pose.neutral, Template.ƒS.positionPercent(75, 100));
        await Template.ƒS.update(1);
        return "SceneThreeSaalon";
    }
    Template.SceneTwoEntrance = SceneTwoEntrance;
})(Template || (Template = {}));
//# sourceMappingURL=ArtemisMysterium.js.map