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
        catMeow: "./../../Assets/sounds/cat-meow-6226.mp3"
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
            },
            positionStandard: {
                x: 20,
                y: 130
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
                x: 75,
                y: 120
            }
        },
        alaistar: {
            name: "Alaistar",
            origin: Template.ƒS.ORIGIN.BOTTOMCENTER,
            pose: {
                angry: "./../../Assets/characters/alaistar/Alaistar-angry.png",
                happy: "./../../Assets/characters/alaistar/Alaistar-happy.png",
                neutral: "./../../Assets/characters/alaistar/Alaistar-neutral.png"
            }
        },
        grace: {
            name: "Garce",
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
            name: "Isaac",
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
            { id: "EndScreen", scene: Template.EndScreen, name: "EndScreen" }
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
        //  Text geschwindigkeit regulieren (was ist basic)
        //  await ƒS.Speech.setTickerDelays(1);
        //  wie funktionieren  animationen?
        await Template.ƒS.Sound.fade(Template.sound.themeinfrontManor, 0.1, 1, true);
        await Template.ƒS.Location.show(Template.location.infrontOfManorDay);
        await Template.ƒS.update(Template.transistions.wallpaper.duration, Template.transistions.wallpaper.alpha, Template.transistions.wallpaper.edge);
        await Template.ƒS.Speech.tell(Template.charaktere.maire, "Oh, was für ein prächtiges Anwesen. Und wir sind hier wirklich richtig?");
        await Template.ƒS.Character.show(Template.charaktere.maire, Template.charaktere.maire.pose.neutral, Template.ƒS.positionPercent(75, 120));
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
        await Template.ƒS.Character.show(Template.charaktere.maire, Template.charaktere.maire.pose.embarrassed, Template.ƒS.positionPercent(75, 120));
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
        await Template.ƒS.Character.show(Template.charaktere.maire, Template.charaktere.maire.pose.fear, Template.ƒS.positionPercent(75, 120));
        await Template.ƒS.Character.hide(Template.charaktere.bronte);
        await Template.ƒS.Character.show(Template.charaktere.bronte, Template.charaktere.bronte.pose.shout, Template.ƒS.positionPercent(Template.charaktere.bronte.positionStandard.x, Template.charaktere.bronte.positionStandard.y));
        await Template.ƒS.update(0.1);
        await Template.ƒS.Sound.fade(Template.sound.catMeow, 0.8, 1, false);
        document.getElementById('speechContent').classList.add('textEffectBig');
        await Template.ƒS.Speech.tell("", "MAUI!");
        document.getElementById('speechContent').classList.remove('textEffectBig');
        await Template.ƒS.Speech.tell(Template.charaktere.maire, "AHH!");
        await Template.ƒS.Character.hide(Template.charaktere.maire);
        await Template.ƒS.Character.show(Template.charaktere.maire, Template.charaktere.maire.pose.neutral, Template.ƒS.positionPercent(75, 120));
        await Template.ƒS.Character.hide(Template.charaktere.bronte);
        await Template.ƒS.Character.show(Template.charaktere.bronte, Template.charaktere.bronte.pose.think, Template.ƒS.positionPercent(Template.charaktere.bronte.positionStandard.x, Template.charaktere.bronte.positionStandard.y));
        await Template.ƒS.update(0.3);
        await Template.ƒS.Speech.tell(Template.charaktere.maire, "Was... war das eine Katze?");
        await Template.ƒS.Speech.tell(Template.charaktere.bronte, "Und eine schnelle dazu… sieht so aus als wäre sie in die Hecke verschwunden. Komisch, ich frag mich was sie da gesehen hat.");
        await Template.ƒS.Speech.tell(Template.charaktere.maire, "Vermutlich einen Vogel. Wir sollten glaube ich langsam Klopfen. Ich glaube jemand hat gerade durch das Fenster geschaut. Wir sehen ja aus wie gewöhnliche Straßendiebe für diese Leute. ");
        let userChooseCatNoise = await Template.ƒS.Menu.getInput(chooseCatNoise, "XXX");
        switch (userChooseCatNoise) {
            case chooseCatNoise.bush:
                await Template.ƒS.Speech.tell(Template.charaktere.bronte, "Nur ein Moment.");
                await Template.ƒS.Speech.tell(Template.charaktere.maire, "…Deshalb sind wir immer zu spät.");
                await Template.ƒS.Character.hide(Template.charaktere.maire);
                await Template.ƒS.Character.show(Template.charaktere.maire, Template.charaktere.maire.pose.sad, Template.ƒS.positionPercent(75, 120));
                await Template.ƒS.Character.hide(Template.charaktere.bronte);
                await Template.ƒS.Character.show(Template.charaktere.bronte, Template.charaktere.bronte.pose.think, Template.ƒS.positionPercent(Template.charaktere.bronte.positionStandard.x, Template.charaktere.bronte.positionStandard.y));
                await Template.ƒS.update(0.3);
                await Template.ƒS.Speech.tell(Template.charaktere.bronte, "Nun lass mal schauen... Oh!");
                // todo: XXX Item einblenden nutzen und speichern das ausgewählt
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
                await Template.ƒS.Character.show(Template.charaktere.maire, Template.charaktere.maire.pose.fear, Template.ƒS.positionPercent(75, 120));
                await Template.ƒS.update(0.3);
                //todo: positionieren XXX
                await Template.ƒS.Character.show(Template.charaktere.remington, Template.charaktere.remington.pose.neutral, Template.ƒS.positionPercent(0, 100));
                await Template.ƒS.update(1);
                await Template.ƒS.Speech.tell(Template.charaktere.remington, "Entschuldigen Sie. Sind Sie Miss Bronte und ihre Begleitung?");
                // todo: klein oder kursiv, für Flüstern?
                await Template.ƒS.Character.hide(Template.charaktere.maire);
                await Template.ƒS.Character.show(Template.charaktere.maire, Template.charaktere.maire.pose.laugh, Template.ƒS.positionPercent(75, 120));
                await Template.ƒS.update(0.3);
                await Template.ƒS.Speech.tell(Template.charaktere.maire, "Miss Bronte hihi");
                await Template.ƒS.Character.hide(Template.charaktere.bronte);
                await Template.ƒS.Character.show(Template.charaktere.bronte, Template.charaktere.bronte.pose.happy, Template.ƒS.positionPercent(Template.charaktere.bronte.positionStandard.x, Template.charaktere.bronte.positionStandard.y));
                await Template.ƒS.update(0.3);
                await Template.ƒS.Speech.tell(Template.charaktere.bronte, "Guten Abend. Genau, die sind wir. Freut mich sie kennenzulernen, Herr?");
                await Template.ƒS.Character.hide(Template.charaktere.maire);
                await Template.ƒS.Character.show(Template.charaktere.maire, Template.charaktere.maire.pose.happy, Template.ƒS.positionPercent(75, 120));
                await Template.ƒS.update(0.3);
                await Template.ƒS.Speech.tell(Template.charaktere.remington, "Bitte folgen sie mir doch hinein.");
                await Template.ƒS.Character.hide(Template.charaktere.maire);
                await Template.ƒS.Character.show(Template.charaktere.maire, Template.charaktere.maire.pose.neutral, Template.ƒS.positionPercent(75, 120));
                await Template.ƒS.update(0.3);
                await Template.ƒS.Speech.tell(Template.charaktere.maire, "Nicht sehr gesprächig...");
                break;
            case chooseCatNoise.window:
                await Template.ƒS.Speech.tell(Template.charaktere.bronte, "Ich frag mich wer uns da heimlich beobachtet. ");
                await Template.ƒS.Character.hide(Template.charaktere.maire);
                await Template.ƒS.Character.show(Template.charaktere.maire, Template.charaktere.maire.pose.sad, Template.ƒS.positionPercent(75, 120));
                await Template.ƒS.Character.hide(Template.charaktere.bronte);
                await Template.ƒS.Character.show(Template.charaktere.bronte, Template.charaktere.bronte.pose.think, Template.ƒS.positionPercent(Template.charaktere.bronte.positionStandard.x, Template.charaktere.bronte.positionStandard.y));
                await Template.ƒS.update(0.3);
                await Template.ƒS.Speech.tell(Template.charaktere.maire, "Oh bitte nicht… ");
                await Template.ƒS.Speech.tell(Template.charaktere.bronte, "Es dauert nur einen Moment… Hier sehe ich die Küche. Eine ältere Frau an einer Feuerstelle… Oh das Essen sieht klasse aus!");
                await Template.ƒS.Speech.tell(Template.charaktere.remington, "Entschuldigen Sie?");
                //todo: position siehe oben
                await Template.ƒS.Character.show(Template.charaktere.remington, Template.charaktere.remington.pose.neutral, Template.ƒS.positionPercent(0, 100));
                await Template.ƒS.update(0.1);
                await Template.ƒS.Character.hide(Template.charaktere.maire);
                await Template.ƒS.Character.show(Template.charaktere.maire, Template.charaktere.maire.pose.fear, Template.ƒS.positionPercent(75, 120));
                await Template.ƒS.Character.hide(Template.charaktere.bronte);
                await Template.ƒS.Character.show(Template.charaktere.bronte, Template.charaktere.bronte.pose.shout, Template.ƒS.positionPercent(Template.charaktere.bronte.positionStandard.x, Template.charaktere.bronte.positionStandard.y));
                await Template.ƒS.update(0.3);
                document.getElementById('speechContent').classList.add('textEffectBig');
                await Template.ƒS.Speech.tell(Template.charaktere.maire, "AHH!");
                document.getElementById('speechContent').classList.remove('textEffectBig');
                await Template.ƒS.Character.hide(Template.charaktere.maire);
                await Template.ƒS.Character.show(Template.charaktere.maire, Template.charaktere.maire.pose.embarrassed, Template.ƒS.positionPercent(75, 120));
                await Template.ƒS.Character.hide(Template.charaktere.bronte);
                await Template.ƒS.Character.show(Template.charaktere.bronte, Template.charaktere.bronte.pose.sad, Template.ƒS.positionPercent(Template.charaktere.bronte.positionStandard.x, Template.charaktere.bronte.positionStandard.y));
                await Template.ƒS.update(0.3);
                await Template.ƒS.Speech.tell(Template.charaktere.bronte, "Oh... äh... Hallo, wir sind die Gäste für den Abend.");
                await Template.ƒS.Speech.tell(Template.charaktere.remington, "Dass dachte ich mir. Bitte folgen sie mir herein. Und denken Sie heute Abend bitte an ihre Manieren. ");
                await Template.ƒS.Character.hide(Template.charaktere.maire);
                await Template.ƒS.Character.show(Template.charaktere.maire, Template.charaktere.maire.pose.neutral, Template.ƒS.positionPercent(75, 120));
                await Template.ƒS.Character.hide(Template.charaktere.bronte);
                await Template.ƒS.Character.show(Template.charaktere.bronte, Template.charaktere.bronte.pose.think, Template.ƒS.positionPercent(Template.charaktere.bronte.positionStandard.x, Template.charaktere.bronte.positionStandard.y));
                await Template.ƒS.update(0.3);
                await Template.ƒS.Speech.tell(Template.charaktere.maire, "Da hast du ja einen tollen ersten Eindruck gemacht…");
                break;
            case chooseCatNoise.knock:
                await Template.ƒS.Character.show(Template.charaktere.remington, Template.charaktere.remington.pose.neutral, Template.ƒS.positionPercent(0, 100));
                await Template.ƒS.update(0.1);
                await Template.ƒS.Character.hide(Template.charaktere.maire);
                await Template.ƒS.Character.show(Template.charaktere.maire, Template.charaktere.maire.pose.fear, Template.ƒS.positionPercent(75, 120));
                await Template.ƒS.update(0.1);
                await Template.ƒS.Speech.tell(Template.charaktere.remington, " Willkommen, treten sie doch gerne ein.");
                await Template.ƒS.Character.hide(Template.charaktere.maire);
                await Template.ƒS.Character.show(Template.charaktere.maire, Template.charaktere.maire.pose.embarrassed, Template.ƒS.positionPercent(75, 120));
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
    async function SceneThreeSaalon() {
        //await ƒS.Sound.play(sound.themeEntrance, 0.1, true); 
        await Template.ƒS.Location.show(Template.location.saalon);
        await Template.ƒS.update(Template.transistions.inToOut.duration, Template.transistions.inToOut.alpha, Template.transistions.inToOut.edge);
        await Template.ƒS.Character.show(Template.charaktere.maire, Template.charaktere.maire.pose.neutral, Template.ƒS.positionPercent(75, 100));
        await Template.ƒS.update(1);
        await Template.ƒS.Speech.tell(Template.charaktere.grace, " Oh! Miss Bronte! Welch eine Freude. Und oh… welch ein ungewöhnliches Outfit sie tragen. Sind das Hosen? Wie… modern. ");
        await Template.ƒS.Speech.tell(Template.charaktere.bronte, " Vielen Dank. Sie sehen auch fantastisch aus Lady Blackburn. Darf ich Ihnen meine Begleitung vorstellen, dass hier ist Miss MacGinnis. ");
        await Template.ƒS.Speech.tell(Template.charaktere.maire, " Oh, nennen sie mich Maire. ");
        await Template.ƒS.Speech.tell(Template.charaktere.grace, " Vornamen… wie… modern! Dann nennen sie mich doch gerne Grace. Die Etikette können Sie sich für meinen Bruder aufheben. Oh, da kommt er auch schon. ");
        await Template.ƒS.Speech.tell(Template.charaktere.alaistar, " Guten Abend. Freut mich sie kennenzulernen. ");
        await Template.ƒS.Speech.tell(Template.charaktere.bronte, " Lord Blackburn, die Freude ist ganz unsererseits, vielen Dank für die Einladung zum Abendessen. ");
        await Template.ƒS.Speech.tell(Template.charaktere.alaistar, " Meine Schwester hat so von Ihnen geschwärmt, da wollte auch ich Sie kennenlernen. Ein Detektiv ist immer ein interessanter Gast. Auch wenn Ihre Fälle sich sicherlich eher mit verlorenen Schmuckstücken und verlegten Kleidern beschäftigten. HoHo. Frauen Probleme. ");
        await Template.ƒS.Speech.tell(Template.charaktere.bronte, " Tatsächlich befassen sich meine Fälle mit allen Problemen, die in London auftauchen. Erst neulich habe ich die Napoleon Büchse- ");
        await Template.ƒS.Speech.tell(Template.charaktere.grace, " Oh Stella! Komm schnell rüber meine Liebe. Dann sind wir ja fast alle komplett. Komm schnell kleines und stell dich vor. Miss Bronte, dies ist meine Cousine, Stella Blackburn. ");
        await Template.ƒS.Speech.tell(Template.charaktere.stella, " Guten Abend. ");
        await Template.ƒS.Speech.tell(Template.charaktere.bronte, " Freud mich Sie kennenzulernen. ");
        await Template.ƒS.Speech.tell(Template.charaktere.grace, " Stella ist ein fabelhaftes Mädchen. Sie verbringt den Sommer bei mir, um sich ein wenig an die Londoner Luft zu gewöhnen. Aber schauen sie sich mal diese wunderschönen Haare an. Ich denke wir werden nächste Season einen tollen Partner für sie finden. ");
        await Template.ƒS.Speech.tell(Template.charaktere.bronte, " Oh ja, sie müssen mir später unbedingt erklären, wie sie so großartige Locken herzaubern. ");
        await Template.ƒS.Speech.tell(Template.charaktere.stella, " Sicherlich. ");
        await Template.ƒS.Speech.tell(Template.charaktere.remington, " Ehm… My Lord, my Lady, auch Mister Rothchester ist nun endlich eingetroffen. ");
        await Template.ƒS.Speech.tell(Template.charaktere.alaistar, " Wurde ja auch Zeit… Dieser Mann hat einfach keine Manieren. Bitte setzt euch alle schon Mal, ich werde Ihn kurz begrüßen und zur Eile mahnen. ");
        await Template.ƒS.Speech.tell(Template.charaktere.maire, " Was für… Charaktere. Ich hätte mich wirklich besser anziehen sollen. Aber selbst mein bestes Kleid würde neben Lady Stella wie ein Putzlappen wirken. Aber… findest du nicht auch, dass einer der drei merkwürdig ist?");
        //WAHL Merkwürige Person komplett todo
        await Template.ƒS.Speech.tell(Template.charaktere.bronte, " Da scheint der letzte Gast zu kommen. ");
        await Template.ƒS.Speech.tell(Template.charaktere.isaac, " Guten Abend. Ich entschuldige meine Verspätung. ");
        await Template.ƒS.Speech.tell(Template.charaktere.grace, " Nun… Als Gerichtsvertreter wird man wohl nicht pünktlich entlassen. Aber so ist die Mittelschicht wohl. ");
        await Template.ƒS.Speech.tell(Template.charaktere.isaac, " Ja… nun… Ah! Miss Bronte, richtig? Und sie müssen ihre Assistentin sein. Mac- Mac-? ");
        await Template.ƒS.Speech.tell(Template.charaktere.maire, " Maire reicht aus. ");
        await Template.ƒS.Speech.tell(Template.charaktere.isaac, " Sehr erfreut. Ich bin Issac. Ich habe in Gericht ein paar Mal ihre Arbeit betrachten können. Sie scheinen sehr sorgfältig zu arbeiten! ");
        await Template.ƒS.Speech.tell(Template.charaktere.bronte, " Oh vielen dank. ");
        await Template.ƒS.Speech.tell(Template.charaktere.grace, " Oh, das Essen! Mrs. May-Porter hat wieder ihr Bestes gegeben. Es gibt Haggis! ");
        await Template.ƒS.Speech.tell(Template.charaktere.maire, " Bronte, bitte sag mir das ist keines dieser merkwürdigen britischen Gerichte?! ");
        await Template.ƒS.Speech.tell(Template.charaktere.bronte, " Es ist tatsächlich Schottisch…");
        //WAHL Haggis komplett todo: 
    }
    Template.SceneThreeSaalon = SceneThreeSaalon;
})(Template || (Template = {}));
var Template;
(function (Template) {
    async function SceneTwoEntrance() {
        await Template.ƒS.Sound.play(Template.sound.themeEntrance, 0.1, true);
        await Template.ƒS.Location.show(Template.location.entrance);
        await Template.ƒS.update(Template.transistions.inToOut.duration, Template.transistions.inToOut.alpha, Template.transistions.inToOut.edge);
        await Template.ƒS.Character.show(Template.charaktere.maire, Template.charaktere.maire.pose.neutral, Template.ƒS.positionPercent(75, 100));
        await Template.ƒS.update(1);
        await Template.ƒS.Speech.tell(Template.charaktere.maire, " Wow… was für eine schöne Eingangshalle ");
        await Template.ƒS.Speech.tell(Template.charaktere.remington, " Das Manor ist im Besitz der Familie Blackburn seit 1705. Nach 100 Jahren erlag es jedoch dem Ratcliff Feuer und musste zum großen Teil neu errichtet werden. In den fünfziger Jahren bekam es dann noch einmal eine Renovierung von dem ehrenwerten Lord Blackburn Sr. – Gott habe ihn selig – und ist nun unter der Obhut und Lord Blackburn, welcher seine ehrenwerte Schwester Lady Blackburn hier wohnen lässt. Entschuldigung, langweile ich sie? ");
        await Template.ƒS.Speech.tell(Template.charaktere.maire, " Zzz Oh! Äh nein… natürlich nicht. Faszinierend… ");
        await Template.ƒS.Speech.tell(Template.charaktere.bronte, " Und wie. Wir haben Glück das die Familie in einen so guten Zustand hält. Es ist wirklich prächtig. ");
        await Template.ƒS.Speech.tell(Template.charaktere.remington, " Da stimme ich ihnen zu. Darf ich Ihnen Ihren Mantel abnehmen, Miss? ");
        await Template.ƒS.Speech.tell(Template.charaktere.maire, " Oh… vielen Dank, aber ich denke ich behalte ihn lieber an. Ich äh… erkälte mich so schnell… ");
        await Template.ƒS.Speech.tell(Template.charaktere.remington, " Wie Sie wünschen. Geben sie mir einen Moment. Ich werde Sie den Anwesenden Ankündigen. Nutzen Sie die Zeit gerne um sich… herzurichten. ");
        await Template.ƒS.Speech.tell(Template.charaktere.maire, " Oh weh… ich glaube er kann uns nicht leiden. Dabei haben wir gar nichts gemacht Er denkt wohl wir schnüffeln hier herum Wir hätten nicht im Garten rumschnüffeln sollen. ");
        await Template.ƒS.Speech.tell(Template.charaktere.bronte, " Ach was. Er ist halt ein wenig reserviert. Viele Butler sind so. Aber Maire, warum klammerst du dich so an denen Mantel? Geht es dir nicht gut? ");
        await Template.ƒS.Speech.tell(Template.charaktere.maire, " Oh nein… alles ist gut… Ich habe nur vorhin auf mein Kleid gekleckert. Ich wusste ja nicht, dass wir mit einer echten Lady essen. ");
        await Template.ƒS.Speech.tell(Template.charaktere.bronte, " hihi… nun gut, dass erklärt es natürlich. Ah, der Butler winkt uns herein.");
        return "SceneThreeSaalon";
    }
    Template.SceneTwoEntrance = SceneTwoEntrance;
})(Template || (Template = {}));
//# sourceMappingURL=ArtemisMysterium.js.map