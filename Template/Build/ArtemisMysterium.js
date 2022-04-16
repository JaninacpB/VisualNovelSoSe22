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
        }
    };
    Template.sound = {
        //Themes
        themeMitGutenNamen: "",
        //SFX
        guterNameSoundEffekt: ""
    };
    Template.location = {
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
    };
    Template.charaktere = {
        bronte: {
            name: "Brontë",
            origin: Template.ƒS.ORIGIN.BOTTOMCENTER,
            pose: {
                neutral: ""
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
            { scene: Template.Scene, name: "Scene" }
        ];
        // start the sequence
        Template.ƒS.Progress.go(scenes);
    }
})(Template || (Template = {}));
var Template;
(function (Template) {
    async function Scene() {
        console.log("FudgeStory Template Scene starting");
        //Alle Wahlmöglichkeiten in Szene 
        let chooseCatNoise = {
            bush: "Untersuche Busch",
            window: "Untersuche Fenster",
            knock: "Klopfe an der Tür"
        };
        // Text geschwindigkeit regulieren (was ist basic)
        //  await ƒS.Speech.setTickerDelays(1);
        await Template.ƒS.Location.show(Template.location.infrontOfManorDay);
        await Template.ƒS.update(Template.transistions.puzzle.duration, Template.transistions.puzzle.alpha, Template.transistions.puzzle.edge);
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
    }
    Template.Scene = Scene;
})(Template || (Template = {}));
//# sourceMappingURL=ArtemisMysterium.js.map