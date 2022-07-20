"use strict";
var Artemis;
(function (Artemis) {
    async function EndScreen() {
        if (Artemis.dataForSave.pointAngryGrace = 4) {
            localStorage.setItem('angryGrace', JSON.stringify(true));
        }
        for (let i = 0; i < Artemis.achievments.length; i++) {
            if (checkIftrue(Artemis.achievments[i])) {
                getLocalStorrage(Artemis.achievments[i]);
            }
        }
        // Bilder einblenden und Canvas entfernen
        document.getElementById('endScreen').classList.add('endScreenVisible');
        document.getElementById('endScreen').classList.remove('endScreenInvisible');
        document.getElementById('flexRestartButton').setAttribute("style", "display: flex");
        document.getElementById('achivementTitle').setAttribute("style", "display: block");
        document.getElementById('detectivPoints').innerHTML = Artemis.dataForSave.pointDetectiv + "";
        let speech = document.getElementsByTagName('speech');
        let canvas = document.getElementsByTagName('scene');
        canvas[0].setAttribute("style", "height: 0px");
        speech[0].setAttribute("style", "vicibility: hidden;");
    }
    Artemis.EndScreen = EndScreen;
    function getLocalStorrage(achievment) {
        document.getElementById(achievment).setAttribute("style", " filter: none;");
    }
    function checkIftrue(achievment) {
        return JSON.parse(localStorage.getItem(achievment));
    }
})(Artemis || (Artemis = {}));
var Artemis;
(function (Artemis) {
    async function EndingBadGraceAngry() {
        await Artemis.ƒS.Sound.fade(Artemis.sound.endingSad, 0.4, 1, true);
        await Artemis.ƒS.Location.show(Artemis.location.black);
        await Artemis.ƒS.update(Artemis.transistions.standard.duration, "Asset/Transition/18.png", Artemis.transistions.standard.edge);
        await Artemis.ƒS.update(2);
        await Artemis.ƒS.Speech.setTickerDelays(80);
        await Artemis.ƒS.Speech.tell(Artemis.charaktere.maire, "Und so verließen wir das Manor Blackburn und sollten nie herausfinden, was hinter all den merkwürdigen Gegebenheiten war.");
        await Artemis.ƒS.Speech.tell(Artemis.charaktere.maire, "Ich frag mich was passiert wäre, wenn wir dageblieben wären...");
        await Artemis.ƒS.Progress.delay(1);
        await Artemis.ƒS.Speech.hide();
        await Artemis.ƒS.update(5);
        return "EndScreen";
    }
    Artemis.EndingBadGraceAngry = EndingBadGraceAngry;
})(Artemis || (Artemis = {}));
var Artemis;
(function (Artemis) {
    async function EndingOneAllSurvive() {
        await Artemis.ƒS.Sound.fade(Artemis.sound.endingHappy, 0.4, 1, true);
        await Artemis.ƒS.Location.show(Artemis.location.black);
        await Artemis.ƒS.update(Artemis.transistions.standard.duration, "Asset/Transition/18.png", Artemis.transistions.standard.edge);
        await Artemis.ƒS.Speech.setTickerDelays(80);
        await Artemis.ƒS.Speech.tell(Artemis.charaktere.maire, " Und so endete ein weiterer Fall.");
        await Artemis.ƒS.Character.show(Artemis.charaktere.odette, Artemis.charaktere.odette.pose.happy, Artemis.ƒS.positionPercent(65, Artemis.charaktere.odette.positionMiddle.y));
        await Artemis.ƒS.Character.show(Artemis.charaktere.isaac, Artemis.charaktere.isaac.pose.happy, Artemis.ƒS.positionPercent(35, Artemis.charaktere.isaac.positionStandard.y));
        await Artemis.ƒS.update(0.6);
        await Artemis.ƒS.Speech.tell(Artemis.charaktere.maire, " Isaac und Odette bezogen das Manor,");
        await Artemis.ƒS.Character.hide(Artemis.charaktere.isaac);
        await Artemis.ƒS.Character.hide(Artemis.charaktere.odette);
        await Artemis.ƒS.update(0.6);
        await Artemis.ƒS.Character.show(Artemis.charaktere.alaistar, Artemis.charaktere.alaistar.pose.angry, Artemis.ƒS.positionPercent(Artemis.charaktere.alaistar.positionMiddle.x, Artemis.charaktere.alaistar.positionMiddle.y));
        await Artemis.ƒS.update(0.6);
        await Artemis.ƒS.Speech.tell(Artemis.charaktere.maire, " Während Mr. Blackburn eine Zelle sein zuhause nennen durfte.  ");
        await Artemis.ƒS.Character.hide(Artemis.charaktere.alaistar);
        await Artemis.ƒS.update(0.6);
        await Artemis.ƒS.Character.show(Artemis.charaktere.grace, Artemis.charaktere.grace.pose.think, Artemis.ƒS.positionPercent(Artemis.charaktere.grace.positionMiddle.x, Artemis.charaktere.grace.positionMiddle.y));
        await Artemis.ƒS.update(0.6);
        await Artemis.ƒS.Speech.tell(Artemis.charaktere.maire, " Grace war erfreut ihre Schwester wiederzusehen, nicht jedoch ihren Bruder zu verlieren. Wobei auch sie nun von niemanden mehr abhängig war.  ");
        await Artemis.ƒS.Character.hide(Artemis.charaktere.grace);
        await Artemis.ƒS.update(0.6);
        await Artemis.ƒS.Speech.tell(Artemis.charaktere.maire, " Oh und Artemis ist natürlich gesund und munter. Immer Mal wieder sind Bronte und ich bei Odette und Isaac und sehe dann auch den kleinen Tiger.  ");
        await Artemis.ƒS.Character.show(Artemis.charaktere.remington, Artemis.charaktere.remington.pose.angry, Artemis.ƒS.positionPercent(50, 100));
        await Artemis.ƒS.update(0.6);
        await Artemis.ƒS.Speech.tell(Artemis.charaktere.maire, " Mr. Remington hat gekündig, doch niemand scheint ihn richtig zu vermissen.  ");
        await Artemis.ƒS.Character.hide(Artemis.charaktere.remington);
        await Artemis.ƒS.update(0.6);
        await Artemis.ƒS.Character.show(Artemis.charaktere.bronte, Artemis.charaktere.bronte.pose.happy, Artemis.ƒS.positionPercent(Artemis.charaktere.bronte.positionMiddle.x, Artemis.charaktere.bronte.positionMiddle.y));
        await Artemis.ƒS.update(1);
        await Artemis.ƒS.Speech.tell(Artemis.charaktere.maire, " Und Bronte. Sie ist nun eine noch gefragtere Detektivin und hat so viele Aufträge wie noch nie.  ");
        await Artemis.ƒS.Character.hide(Artemis.charaktere.bronte);
        await Artemis.ƒS.Character.show(Artemis.charaktere.bronte, Artemis.charaktere.bronte.pose.think, Artemis.ƒS.positionPercent(Artemis.charaktere.bronte.positionMiddle.x, Artemis.charaktere.bronte.positionMiddle.y));
        await Artemis.ƒS.update(1);
        await Artemis.ƒS.Speech.tell(Artemis.charaktere.maire, " Erst neulich haben wir der Polizei bei der Lösung eines echten Mordes geholfen. Aber dass ist eine andere Geschichte… ");
        await Artemis.ƒS.Progress.delay(1);
        await Artemis.ƒS.Speech.hide();
        await Artemis.ƒS.Character.hide(Artemis.charaktere.bronte);
        await Artemis.ƒS.update(5);
        localStorage.setItem('cat', JSON.stringify(true));
        return "EndScreen";
    }
    Artemis.EndingOneAllSurvive = EndingOneAllSurvive;
})(Artemis || (Artemis = {}));
var Artemis;
(function (Artemis) {
    async function EndingThreeOdetteDead() {
        await Artemis.ƒS.Sound.fade(Artemis.sound.endingSad, 0.4, 1, true);
        await Artemis.ƒS.Location.show(Artemis.location.black);
        await Artemis.ƒS.update(Artemis.transistions.standard.duration, "Asset/Transition/18.png", Artemis.transistions.standard.edge);
        await Artemis.ƒS.Speech.setTickerDelays(80);
        await Artemis.ƒS.Speech.tell(Artemis.charaktere.maire, "Bronte spricht nur selten über diesen Tag.");
        await Artemis.ƒS.Character.show(Artemis.charaktere.isaac, Artemis.charaktere.isaac.pose.cry, Artemis.ƒS.positionPercent(50, Artemis.charaktere.isaac.positionStandard.y));
        await Artemis.ƒS.update(0.6);
        await Artemis.ƒS.Speech.tell(Artemis.charaktere.maire, "Isaac konnte die Erlebnisse von jenen Tag nicht ruhen lassen, bis er vor einigen Monaten überfallen und getötet wurde.");
        await Artemis.ƒS.Character.hide(Artemis.charaktere.isaac);
        await Artemis.ƒS.update(0.6);
        await Artemis.ƒS.Character.show(Artemis.charaktere.alaistar, Artemis.charaktere.alaistar.pose.neutral, Artemis.ƒS.positionPercent(35, Artemis.charaktere.alaistar.positionMiddle.y));
        await Artemis.ƒS.Character.show(Artemis.charaktere.grace, Artemis.charaktere.grace.pose.think, Artemis.ƒS.positionPercent(65, Artemis.charaktere.grace.positionMiddle.y));
        await Artemis.ƒS.update(0.6);
        await Artemis.ƒS.Speech.tell(Artemis.charaktere.maire, " Auch das Manor brannte einige Tage später nieder, zusammen mit dem Testament. Alaistar und Grace bekamen eine große Menge Geld von der Versicherung.");
        await Artemis.ƒS.Character.hide(Artemis.charaktere.grace);
        await Artemis.ƒS.Character.hide(Artemis.charaktere.alaistar);
        await Artemis.ƒS.update(0.6);
        await Artemis.ƒS.Speech.tell(Artemis.charaktere.maire, " Wir wissen tatsächlich nicht was mit Artemis passiert ist und ob sie noch jemand gefunden hat.");
        await Artemis.ƒS.Character.show(Artemis.charaktere.bronte, Artemis.charaktere.bronte.pose.think, Artemis.ƒS.positionPercent(35, Artemis.charaktere.bronte.positionMiddle.y));
        await Artemis.ƒS.Character.show(Artemis.charaktere.maire, Artemis.charaktere.maire.pose.sad, Artemis.ƒS.positionPercent(65, Artemis.charaktere.maire.positionStandard.y));
        await Artemis.ƒS.update(0.6);
        await Artemis.ƒS.Speech.tell(Artemis.charaktere.maire, " Auch ich hoffe hauptsächlich diesen schrecklichen Tag hinter uns lassen zu können. ");
        await Artemis.ƒS.Progress.delay(1);
        await Artemis.ƒS.Speech.hide();
        await Artemis.ƒS.Character.hide(Artemis.charaktere.maire);
        await Artemis.ƒS.Character.hide(Artemis.charaktere.bronte);
        await Artemis.ƒS.update(5);
        return "EndScreen";
    }
    Artemis.EndingThreeOdetteDead = EndingThreeOdetteDead;
})(Artemis || (Artemis = {}));
var Artemis;
(function (Artemis) {
    async function EndingTwoBronteDead() {
        await Artemis.ƒS.Sound.fade(Artemis.sound.endingSad, 0.4, 1, true);
        await Artemis.ƒS.Location.show(Artemis.location.black);
        await Artemis.ƒS.update(Artemis.transistions.standard.duration, "Asset/Transition/18.png", Artemis.transistions.standard.edge);
        await Artemis.ƒS.Speech.setTickerDelays(80);
        await Artemis.ƒS.Speech.tell(Artemis.charaktere.maire, "Es war der dunkelste Tag in meinem Leben.");
        await Artemis.ƒS.Character.show(Artemis.charaktere.alaistar, Artemis.charaktere.alaistar.pose.neutral, Artemis.ƒS.positionPercent(Artemis.charaktere.alaistar.positionMiddle.x, Artemis.charaktere.alaistar.positionMiddle.y));
        await Artemis.ƒS.update(0.6);
        await Artemis.ƒS.Speech.tell(Artemis.charaktere.maire, " Alistar entkam und für Bronte kam jeder Hilfe zu spät.");
        await Artemis.ƒS.Character.hide(Artemis.charaktere.alaistar);
        await Artemis.ƒS.update(0.6);
        await Artemis.ƒS.Character.show(Artemis.charaktere.odette, Artemis.charaktere.odette.pose.angry, Artemis.ƒS.positionPercent(65, Artemis.charaktere.odette.positionMiddle.y));
        await Artemis.ƒS.Character.show(Artemis.charaktere.isaac, Artemis.charaktere.isaac.pose.sad, Artemis.ƒS.positionPercent(35, Artemis.charaktere.isaac.positionStandard.y));
        await Artemis.ƒS.update(0.6);
        await Artemis.ƒS.Speech.tell(Artemis.charaktere.maire, " Isaac und Odette freuten sich wiederzusehen, doch auch ihre Freude war durch diesen Vorfall gedämpft. Sie versprachen mir finanzielle Unterstützung, doch ich wollte nichts davon hören.");
        await Artemis.ƒS.Character.hide(Artemis.charaktere.isaac);
        await Artemis.ƒS.Character.hide(Artemis.charaktere.odette);
        await Artemis.ƒS.update(0.6);
        await Artemis.ƒS.Character.show(Artemis.charaktere.maire, Artemis.charaktere.maire.pose.neutral, Artemis.ƒS.positionPercent(50, Artemis.charaktere.maire.positionStandard.y));
        await Artemis.ƒS.update(0.6);
        await Artemis.ƒS.Speech.tell(Artemis.charaktere.maire, " Ohne meine Geliebte, hielt mich nichts mehr in London. Ich zog zurück nach Irland und versuchte zu vergessen was ich in London verloren hatte. ");
        await Artemis.ƒS.Progress.delay(1);
        await Artemis.ƒS.Speech.hide();
        await Artemis.ƒS.Character.hide(Artemis.charaktere.maire);
        await Artemis.ƒS.update(5);
        return "EndScreen";
    }
    Artemis.EndingTwoBronteDead = EndingTwoBronteDead;
})(Artemis || (Artemis = {}));
var Artemis;
(function (Artemis) {
    async function ExtraSceneBronteMaire() {
        localStorage.setItem('MaireAndBronte', JSON.stringify(true));
        await Artemis.ƒS.Sound.fade(Artemis.sound.endingHappy, 0.7, 1, true);
        await Artemis.ƒS.Location.show(Artemis.location.infrontOfManorNight);
        await Artemis.ƒS.update(1);
        await Artemis.ƒS.Character.hide(Artemis.charaktere.bronte);
        await Artemis.ƒS.Character.show(Artemis.charaktere.bronte, Artemis.charaktere.bronte.pose.think, Artemis.ƒS.positionPercent(Artemis.charaktere.bronte.positionStandard.x, Artemis.charaktere.bronte.positionStandard.y));
        await Artemis.ƒS.Character.hide(Artemis.charaktere.maire);
        await Artemis.ƒS.Character.show(Artemis.charaktere.maire, Artemis.charaktere.maire.pose.neutral, Artemis.ƒS.positionPercent(Artemis.charaktere.maire.positionStandard.x, Artemis.charaktere.maire.positionStandard.y));
        await Artemis.ƒS.update(0.8);
        await Artemis.ƒS.Speech.tell(Artemis.charaktere.bronte, " Maire… du siehst müde aus. ");
        await Artemis.ƒS.Speech.tell(Artemis.charaktere.maire, " Ja… ich bin ein wenig erschöpft… ");
        await Artemis.ƒS.Character.hide(Artemis.charaktere.bronte);
        await Artemis.ƒS.Character.show(Artemis.charaktere.bronte, Artemis.charaktere.bronte.pose.laugh, Artemis.ƒS.positionPercent(Artemis.charaktere.bronte.positionStandard.x, Artemis.charaktere.bronte.positionStandard.y));
        await Artemis.ƒS.update(0.4);
        await Artemis.ƒS.Speech.tell(Artemis.charaktere.bronte, " Heute war ein langer Tag. ");
        await Artemis.ƒS.Speech.tell(Artemis.charaktere.maire, " Ja… ");
        await Artemis.ƒS.Character.hide(Artemis.charaktere.bronte);
        await Artemis.ƒS.Character.show(Artemis.charaktere.bronte, Artemis.charaktere.bronte.pose.happy, Artemis.ƒS.positionPercent(Artemis.charaktere.bronte.positionStandard.x, Artemis.charaktere.bronte.positionStandard.y));
        await Artemis.ƒS.update(0.4);
        await Artemis.ƒS.Speech.tell(Artemis.charaktere.bronte, " Ich bin so froh, dass es dir gut geht. ");
        await Artemis.ƒS.Character.hide(Artemis.charaktere.maire);
        await Artemis.ƒS.Character.show(Artemis.charaktere.maire, Artemis.charaktere.maire.pose.fear, Artemis.ƒS.positionPercent(Artemis.charaktere.maire.positionStandard.x, Artemis.charaktere.maire.positionStandard.y));
        await Artemis.ƒS.update(0.4);
        await Artemis.ƒS.Speech.tell(Artemis.charaktere.maire, " Ich auch. Aber ich hatte auch so Angst um dich! ");
        await Artemis.ƒS.Character.hide(Artemis.charaktere.bronte);
        await Artemis.ƒS.Character.show(Artemis.charaktere.bronte, Artemis.charaktere.bronte.pose.think, Artemis.ƒS.positionPercent(Artemis.charaktere.bronte.positionStandard.x, Artemis.charaktere.bronte.positionStandard.y));
        await Artemis.ƒS.update(0.4);
        await Artemis.ƒS.Speech.tell(Artemis.charaktere.bronte, " Oh… ja, wir waren in einer brenzlichen Lage. Aber zumindest geht es uns beiden gut. ");
        await Artemis.ƒS.Character.hide(Artemis.charaktere.maire);
        await Artemis.ƒS.Character.show(Artemis.charaktere.maire, Artemis.charaktere.maire.pose.neutral, Artemis.ƒS.positionPercent(Artemis.charaktere.maire.positionStandard.x, Artemis.charaktere.maire.positionStandard.y));
        await Artemis.ƒS.update(0.4);
        await Artemis.ƒS.Speech.tell(Artemis.charaktere.maire, " Ja… ");
        await Artemis.ƒS.Speech.tell(Artemis.charaktere.bronte, "  Maire. ");
        await Artemis.ƒS.Character.hide(Artemis.charaktere.maire);
        await Artemis.ƒS.Character.show(Artemis.charaktere.maire, Artemis.charaktere.maire.pose.happy, Artemis.ƒS.positionPercent(Artemis.charaktere.maire.positionStandard.x, Artemis.charaktere.maire.positionStandard.y));
        await Artemis.ƒS.update(0.4);
        await Artemis.ƒS.Speech.tell(Artemis.charaktere.maire, " Ja? ");
        await Artemis.ƒS.Character.hide(Artemis.charaktere.bronte);
        await Artemis.ƒS.Character.show(Artemis.charaktere.bronte, Artemis.charaktere.bronte.pose.laugh, Artemis.ƒS.positionPercent(Artemis.charaktere.bronte.positionStandard.x, Artemis.charaktere.bronte.positionStandard.y));
        await Artemis.ƒS.update(0.4);
        await Artemis.ƒS.Speech.tell(Artemis.charaktere.bronte, " Ich liebe dich. ");
        await Artemis.ƒS.Character.hide(Artemis.charaktere.maire);
        await Artemis.ƒS.Character.show(Artemis.charaktere.maire, Artemis.charaktere.maire.pose.laugh, Artemis.ƒS.positionPercent(Artemis.charaktere.maire.positionStandard.x, Artemis.charaktere.maire.positionStandard.y));
        await Artemis.ƒS.update(0.4);
        await Artemis.ƒS.Speech.tell(Artemis.charaktere.maire, " Naw… Bronte ich liebe dich auch. ");
        await Artemis.ƒS.Character.hide(Artemis.charaktere.bronte);
        await Artemis.ƒS.Character.show(Artemis.charaktere.bronte, Artemis.charaktere.bronte.pose.happy, Artemis.ƒS.positionPercent(Artemis.charaktere.bronte.positionStandard.x, Artemis.charaktere.bronte.positionStandard.y));
        await Artemis.ƒS.update(0.4);
        await Artemis.ƒS.Location.show(Artemis.location.infrontOfManorDay);
        await Artemis.ƒS.update(1);
        await Artemis.ƒS.Speech.tell(Artemis.charaktere.bronte, " Oh schau… die Sonne geht auf. ");
        await Artemis.ƒS.Character.hide(Artemis.charaktere.maire);
        await Artemis.ƒS.Character.show(Artemis.charaktere.maire, Artemis.charaktere.maire.pose.happy, Artemis.ƒS.positionPercent(Artemis.charaktere.maire.positionStandard.x, Artemis.charaktere.maire.positionStandard.y));
        await Artemis.ƒS.update(0.4);
        await Artemis.ƒS.Speech.tell(Artemis.charaktere.maire, " Oh… wie schön.");
        await Artemis.ƒS.Character.hide(Artemis.charaktere.bronte);
        await Artemis.ƒS.Character.hide(Artemis.charaktere.maire);
        await Artemis.ƒS.update(3);
        Artemis.ƒS.Sound.fade(Artemis.sound.endingHappy, 0, 1, true);
        await Artemis.ƒS.Location.show(Artemis.location.black);
        await Artemis.ƒS.update(1);
        return "EndingOneAllSurvive";
    }
    Artemis.ExtraSceneBronteMaire = ExtraSceneBronteMaire;
})(Artemis || (Artemis = {}));
var Artemis;
(function (Artemis) {
    Artemis.ƒ = FudgeCore;
    Artemis.ƒS = FudgeStory;
    console.log("Artemis Mysterium starting");
    // emotionen
    Artemis.emotionen = {
        ausrufezeichen: "e-ausruf"
    };
    //define transistions
    Artemis.transistions = {
        standard: {
            duration: 1,
            alpha: "Asset/Transition/17.png",
            edge: 1
        }
    };
    Artemis.sound = {
        //Themes
        //Scene 1
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
    };
    Artemis.location = {
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
    };
    Artemis.charaktere = {
        bronte: {
            name: "Brontë",
            origin: Artemis.ƒS.ORIGIN.BOTTOMCENTER,
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
            origin: Artemis.ƒS.ORIGIN.BOTTOMCENTER,
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
            origin: Artemis.ƒS.ORIGIN.BOTTOMCENTER,
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
            origin: Artemis.ƒS.ORIGIN.BOTTOMCENTER,
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
            origin: Artemis.ƒS.ORIGIN.BOTTOMCENTER,
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
            origin: Artemis.ƒS.ORIGIN.BOTTOMCENTER,
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
            origin: Artemis.ƒS.ORIGIN.BOTTOMCENTER,
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
            origin: Artemis.ƒS.ORIGIN.BOTTOMCENTER,
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
    };
    Artemis.inventory = {
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
    };
    //Animation
    //grace falling
    function fromMiddleDown(startX, startY, endY) {
        return {
            start: { translation: Artemis.ƒS.positionPercent(startX, startY), rotation: 0 },
            end: { translation: Artemis.ƒS.positionPercent(startX, endY), rotation: 180 },
            duration: 2,
            playmode: Artemis.ƒS.ANIMATION_PLAYMODE.PLAYONCE
        };
    }
    Artemis.fromMiddleDown = fromMiddleDown;
    //maire sinking into water
    function fromMiddleSinking(startX, startY, endY, timeDuration) {
        return {
            start: { translation: Artemis.ƒS.positionPercent(startX, startY) },
            end: { translation: Artemis.ƒS.positionPercent(startX, endY) },
            duration: timeDuration,
            playmode: Artemis.ƒS.ANIMATION_PLAYMODE.PLAYONCE
        };
    }
    Artemis.fromMiddleSinking = fromMiddleSinking;
    Artemis.dataForSave = {
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
    };
    Artemis.achievments = ["cat", "angryMaire", "angryGrace", "MaireAndBronte", "collar", "pound", "haggisDisgusting", "haggisYummy"];
    // Menü 
    function showCredits() {
        Artemis.ƒS.Text.addClass("credit");
        Artemis.ƒS.Text.print("<b>Drehbuch:</b> Janina Bach  <br><b> Bilder: </b> Janina Bach <br> <b> Musik: </b>lizenzfrei von pixabay.com oder freesound.org <br> <b> Transistions: </b>free to use https://lemmasoft.renai.us/forums/viewtopic.php?f=52&t=37628<br> <b> Tester:</b> Tamara Auber, Alexander Thier, Jan Christmeier");
    }
    Artemis.showCredits = showCredits;
    function showDiary() {
        Artemis.ƒS.Text.addClass("diaryEntrys");
        let diaryText = "<p> Früher Abend: Wir sind vor dem Anwesen der Blackburns angekommen. Hier erschreckte uns eine Katze, bevor wir hinein gehen können. </p>";
        if (Artemis.dataForSave.greetingInSaalonFinished) {
            diaryText += "<p>Im Saalon treffen wir Mr. Blackburn ein konservativer und etwas herablassender Lord, dem das Anwesen gehört, seine Schwester Grace die Bronte und mich eingeladen hat und hier lebt und Isaac. Er scheint der Schwager zu sein und nicht sonderlich beliebt. </p>";
            if (Artemis.dataForSave.mairePuked) {
                diaryText += "<p> Das Essen war fürchterlich. </p>";
            }
            else {
                diaryText += "<p> Das Essen war sehr köstlich!</p>";
            }
            if (Artemis.dataForSave.lookingInTheGardenForCluesFinished) {
                diaryText += "<p>Artemis ist verschwunden! Die Katze von Grace. Aber da wir ja draußen eine Katze gesehen haben schauen wir uns jetzt im Garten mal genauer um. Oh und ich habe ja noch gar nicht den Ring erwähnt, den wir im Gebüsch gefunden haben! O.R. Für wenn steht das wohl?</p>";
            }
            if (Artemis.dataForSave.foundCatCollarFinished) {
                if (Artemis.dataForSave.maireFellInPond) {
                    diaryText += "<p>ARG! Ich bin in den blöden Teich gefallen und wir mussten Grace beten die Lichter anzumachen. Warum waren die eigentlich aus?</p>";
                }
                else {
                    diaryText += "<p>Komischerweise waren die Lichter defekt, aber nach etwas hin und her haben wir es schließlich doch hinbekommen.</p>";
                }
                diaryText += "<p>In der Hütte haben wir ein Halsband gefunden! Es gehört bestimmt Artemis. Aber von ihr war keine Spurt. Und merkwürdigerweise war der Schuppen auch zu gewesen. Hat sie jemand gar eingesperrt? Aber warum?</p>";
            }
            if (Artemis.dataForSave.stellaScreamFinished) {
                diaryText += "<p>Dann haben wir einen Schrei gehört und sind schnell zurück ins Haus. Stella sah ganz blass aus und meinte jemand draußen gesehen zu haben. Grace welche vorhin noch aus aufgelöst war über das verschwinden der Katze war plötzlich viel ruhiger und bat uns den restlichen Abend nicht mit der Suche zu verbringen. Komisch. Vielleicht sollten wir mal mit den Anwesenden Reden und Hinweise sammeln.</p>";
            }
            if (Artemis.dataForSave.interviewFinished) {
                diaryText += "<p> Isaac hat uns von seiner verstorbenen Frau Odette erzählt. Sie ist in der Themse vor Jahren ertrunken. Die Familie war wohl auch nicht begeistert von der Hochzeit. Gerade Remington schien nicht gut auf ihn zusprechen zu sein. </p>";
            }
            if (Artemis.dataForSave.searchedCloakFinished) {
                diaryText += "<p>Ich schlug Bronte vor die Mäntel in der Halle zu durchsuchen.</p>";
                if (Artemis.dataForSave.lookedAtCoats) {
                    diaryText += "<p>Bronte fand die Idee gut und wir haben es uns genauer angeschauen. Es gab 4 Mäntel hier. Vermutlich die von Alaistar, Grace, Stella und Isaac.</p>";
                    if (Artemis.dataForSave.tookGun) {
                        diaryText += "<p>In Alaistars Tasche war eine Pistole! Was will er damit? Zum Jagen war die nicht gedacht und das Anwesen scheint ja eigentlich nicht sonderlich bedrohlich. Wir haben sie mitgenommen.</p>";
                    }
                }
                else {
                    diaryText += "<p>Bronte fand die Idee jedoch nicht gut daher haben wir es gelassen. Vielleicht war das gut, denn kurz danach kam Isaac. Der wäre sicherlich nicht erfreut gewesen.</p>";
                }
            }
            if (Artemis.dataForSave.maireAndIsaacFinished) {
                diaryText += "<p>Isaac erzählte mir wie sehr er Odette vermisst und er tut mir echt Leid. Er schien sie so zu lieben wie ich Bronte. Die ist mittlerweile alleine im Haus unterwegs und ich hoffe-  Was war das?</p>";
            }
        }
        Artemis.ƒS.Text.print(diaryText.toString());
    }
    Artemis.showDiary = showDiary;
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
                await Artemis.ƒS.Progress.save();
                break;
            case inGameMenuButtons.load:
                await Artemis.ƒS.Progress.load();
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
            case Artemis.ƒ.KEYBOARD_CODE.F8:
                console.log("Save");
                await Artemis.ƒS.Progress.save();
                break;
            case Artemis.ƒ.KEYBOARD_CODE.F9:
                await Artemis.ƒS.Progress.load();
                break;
            case Artemis.ƒ.KEYBOARD_CODE.M:
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
            case Artemis.ƒ.KEYBOARD_CODE.I:
                if (inventoryOpen) {
                    console.log("Close");
                    Artemis.ƒS.Inventory.close();
                    inventoryOpen = false;
                }
                else {
                    console.log("Open");
                    Artemis.ƒS.Inventory.open();
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
            Artemis.ƒS.Inventory.close();
            inventoryOpen = false;
        }
        else {
            console.log("Open");
            Artemis.ƒS.Inventory.open();
            inventoryOpen = true;
        }
    }
    window.addEventListener("load", start);
    function start(_event) {
        gameMenu = Artemis.ƒS.Menu.create(inGameMenuButtons, buttonFunctionalities, "gameMenu");
        buttonFunctionalities("Close");
        gameMenu.close();
        menueIsOpen = false;
        let scenes = [
            { scene: Artemis.SceneOneInfront, name: "Scene" },
            { id: "SceneTwoEntrance", scene: Artemis.SceneTwoEntrance, name: "SceneTwoEntrance" },
            { id: "SceneThreeSaalon", scene: Artemis.SceneThreeSaalon, name: "SceneThreeSaalon" },
            { id: "SceneFourSaalonDrama", scene: Artemis.SceneFourSaalonDrama, name: "SceneFourSaalonDrama" },
            { id: "SceneFiveOutside", scene: Artemis.SceneFiveOutside, name: "SceneFiveOutside" },
            { id: "SceneSixGarden", scene: Artemis.SceneSixGarden, name: "SceneSixGarden" },
            { id: "SceneSevenCabin", scene: Artemis.SceneSevenCabin, name: "SceneSevenCabin" },
            { id: "SceneEightSaalonInterview", scene: Artemis.SceneEightSaalonInterview, name: "SceneEightSaalonInterview" },
            { id: "SceneEightBInterviews", scene: Artemis.SceneEightBInterviews, name: "SceneEightBInterviews" },
            { id: "SceneNineEntryhall", scene: Artemis.SceneNineEntryhall, name: "SceneNineEntryhall" },
            { id: "SceneTenMaireAndIsaac", scene: Artemis.SceneTenMaireAndIsaac, name: "SceneTenMaireAndIsaac" },
            { id: "SceneElevenStudy", scene: Artemis.SceneElevenStudy, name: "SceneElevenStudy" },
            { id: "SceneTwelveFinal", scene: Artemis.SceneTwelveFinal, name: "SceneTwelveFinal" },
            { id: "ExtraSceneBronteMaire", scene: Artemis.ExtraSceneBronteMaire, name: "ExtraSceneBronteMaire" },
            { id: "EndingOneAllSurvive", scene: Artemis.EndingOneAllSurvive, name: "EndingOneAllSurvive" },
            { id: "EndingTwoBronteDead", scene: Artemis.EndingTwoBronteDead, name: "EndingTwoBronteDead" },
            { id: "EndingThreeOdetteDead", scene: Artemis.EndingThreeOdetteDead, name: "EndingThreeOdetteDead" },
            { id: "EndingBadGraceAngry", scene: Artemis.EndingBadGraceAngry, name: "EndingBadGraceAngry" },
            { id: "EndScreen", scene: Artemis.EndScreen, name: "EndScreen" }
        ];
        let uiElement = document.querySelector("[type=interface]");
        Artemis.dataForSave = Artemis.ƒS.Progress.setData(Artemis.dataForSave, uiElement);
        let button = document.getElementById('restartButton');
        button.addEventListener("click", listenerRestart);
        // start the sequence
        Artemis.ƒS.Progress.go(scenes);
    }
    // Helper Methodes
    async function showEmotion(name, durationBreak) {
        document.getElementById(name).setAttribute("style", "display: inline;");
        await Artemis.ƒS.Progress.delay(durationBreak);
        document.getElementById(name).setAttribute("style", "display: none;");
    }
    Artemis.showEmotion = showEmotion;
    function listenerRestart() {
        window.location.reload();
    }
    Artemis.listenerRestart = listenerRestart;
    function deleteInventory(name) {
        document.getElementById(name).remove();
    }
    Artemis.deleteInventory = deleteInventory;
})(Artemis || (Artemis = {}));
var Artemis;
(function (Artemis) {
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
            let userchooseWhoToInterview = await Artemis.ƒS.Menu.getInput(chooseWhoToInterview, "basicChoice");
            switch (userchooseWhoToInterview) {
                case chooseWhoToInterview.stella:
                    await Artemis.ƒS.Character.show(Artemis.charaktere.stella, Artemis.charaktere.stella.pose.sad, Artemis.ƒS.positionPercent(Artemis.charaktere.stella.positionMiddle.x, Artemis.charaktere.stella.positionMiddle.y));
                    await Artemis.ƒS.update(0.4);
                    await Artemis.ƒS.Speech.tell(Artemis.charaktere.stella, " Oh… wie kann ich helfen? ");
                    let stellaLoop = true;
                    while (stellaLoop) {
                        let userChooseStellaTalk = await Artemis.ƒS.Menu.getInput(stellaTalk, "basicChoice");
                        await Artemis.ƒS.Character.hide(Artemis.charaktere.stella);
                        await Artemis.ƒS.Character.show(Artemis.charaktere.stella, Artemis.charaktere.stella.pose.sad, Artemis.ƒS.positionPercent(Artemis.charaktere.stella.positionMiddle.x, Artemis.charaktere.stella.positionMiddle.y));
                        await Artemis.ƒS.update(0.4);
                        switch (userChooseStellaTalk) {
                            case stellaTalk.family:
                                await Artemis.ƒS.Character.hide(Artemis.charaktere.bronte);
                                await Artemis.ƒS.Character.show(Artemis.charaktere.bronte, Artemis.charaktere.bronte.pose.think, Artemis.ƒS.positionPercent(Artemis.charaktere.bronte.positionStandard.x, Artemis.charaktere.bronte.positionStandard.y));
                                await Artemis.ƒS.update(0.4);
                                await Artemis.ƒS.Speech.tell(Artemis.charaktere.bronte, " Isaac ist dann dein Onkel? ");
                                await Artemis.ƒS.Character.hide(Artemis.charaktere.stella);
                                await Artemis.ƒS.Character.show(Artemis.charaktere.stella, Artemis.charaktere.stella.pose.frighten, Artemis.ƒS.positionPercent(Artemis.charaktere.stella.positionMiddle.x, Artemis.charaktere.stella.positionMiddle.y));
                                await Artemis.ƒS.update(0.4);
                                await Artemis.ƒS.Speech.tell(Artemis.charaktere.stella, " Oh nein! Ich bin die Tochter von Leopold Dufour. Mein Onkel ist Graces Ehemann, welcher leider vor einigen Jahren verstorben ist. ");
                                await Artemis.ƒS.Character.hide(Artemis.charaktere.stella);
                                await Artemis.ƒS.Character.show(Artemis.charaktere.stella, Artemis.charaktere.stella.pose.sad, Artemis.ƒS.positionPercent(Artemis.charaktere.stella.positionMiddle.x, Artemis.charaktere.stella.positionMiddle.y));
                                await Artemis.ƒS.update(0.4);
                                await Artemis.ƒS.Speech.tell(Artemis.charaktere.stella, " Sie hat nur nach seinem tot wieder ihren Mädchennamen angenommen. Und da sie keine Kinder bekommen haben, hat sie mich unter ihre Fittiche genommen. ");
                                await Artemis.ƒS.Character.hide(Artemis.charaktere.bronte);
                                await Artemis.ƒS.Character.show(Artemis.charaktere.bronte, Artemis.charaktere.bronte.pose.happy, Artemis.ƒS.positionPercent(Artemis.charaktere.bronte.positionStandard.x, Artemis.charaktere.bronte.positionStandard.y));
                                await Artemis.ƒS.update(0.4);
                                await Artemis.ƒS.Speech.tell(Artemis.charaktere.bronte, " Oh ich verstehe. Und wie sieht es bei Lord Blackburn mit der Familie aus? ");
                                await Artemis.ƒS.Speech.tell(Artemis.charaktere.stella, " Seine Frau ist in Wales im Landhaus der Familie und seine Söhne reisen zurzeit um die Welt soweit ich weiß.");
                                await Artemis.ƒS.Speech.tell(Artemis.charaktere.stella, " Er selber ist häufiger in London für geschäftliches und ist dann immer bei seiner Schwester, der er ja dafür extra das ehemalige Familienhaus gegeben hat. ");
                                await Artemis.ƒS.Speech.tell(Artemis.charaktere.bronte, " Ich sehe, die Familie kümmert sich umeinander.");
                                await Artemis.ƒS.Character.hide(Artemis.charaktere.bronte);
                                await Artemis.ƒS.Character.show(Artemis.charaktere.bronte, Artemis.charaktere.bronte.pose.think, Artemis.ƒS.positionPercent(Artemis.charaktere.bronte.positionStandard.x, Artemis.charaktere.bronte.positionStandard.y));
                                await Artemis.ƒS.update(0.4);
                                stellaTalk.family = "";
                                break;
                            case stellaTalk.personInfrontOfHouse:
                                await Artemis.ƒS.Character.hide(Artemis.charaktere.bronte);
                                await Artemis.ƒS.Character.show(Artemis.charaktere.bronte, Artemis.charaktere.bronte.pose.think, Artemis.ƒS.positionPercent(Artemis.charaktere.bronte.positionStandard.x, Artemis.charaktere.bronte.positionStandard.y));
                                await Artemis.ƒS.update(0.4);
                                await Artemis.ƒS.Speech.tell(Artemis.charaktere.bronte, " Vorhin schienen Sie sich ja wirklich sehr erschreckt zu haben. Können sie mehr darüber erzählen was genau sie ");
                                await Artemis.ƒS.Speech.tell(Artemis.charaktere.bronte, " Du hast die letzten Tage eine Gestalt vor dem Haus gesehen? ");
                                await Artemis.ƒS.Character.hide(Artemis.charaktere.stella);
                                await Artemis.ƒS.Character.show(Artemis.charaktere.stella, Artemis.charaktere.stella.pose.frighten, Artemis.ƒS.positionPercent(Artemis.charaktere.stella.positionMiddle.x, Artemis.charaktere.stella.positionMiddle.y));
                                await Artemis.ƒS.update(0.4);
                                await Artemis.ƒS.Speech.tell(Artemis.charaktere.stella, " Oh… ich… vermutlich nicht… ");
                                await Artemis.ƒS.Character.hide(Artemis.charaktere.stella);
                                await Artemis.ƒS.Character.show(Artemis.charaktere.stella, Artemis.charaktere.stella.pose.sad, Artemis.ƒS.positionPercent(Artemis.charaktere.stella.positionMiddle.x, Artemis.charaktere.stella.positionMiddle.y));
                                await Artemis.ƒS.update(0.4);
                                await Artemis.ƒS.Character.hide(Artemis.charaktere.maire);
                                await Artemis.ƒS.Character.show(Artemis.charaktere.maire, Artemis.charaktere.maire.pose.sad, Artemis.ƒS.positionPercent(Artemis.charaktere.maire.positionStandard.x, Artemis.charaktere.maire.positionStandard.y));
                                await Artemis.ƒS.Speech.tell(Artemis.charaktere.maire, "(Bronte so kommen wir bei ihr nicht weiter.)");
                                await Artemis.ƒS.Character.hide(Artemis.charaktere.maire);
                                await Artemis.ƒS.Character.show(Artemis.charaktere.maire, Artemis.charaktere.maire.pose.neutral, Artemis.ƒS.positionPercent(Artemis.charaktere.maire.positionStandard.x, Artemis.charaktere.maire.positionStandard.y));
                                await Artemis.ƒS.update(0.4);
                                stellaTalk.personInfrontOfHouse = "";
                                break;
                            case stellaTalk.scream:
                                await Artemis.ƒS.Character.hide(Artemis.charaktere.bronte);
                                await Artemis.ƒS.Character.show(Artemis.charaktere.bronte, Artemis.charaktere.bronte.pose.sad, Artemis.ƒS.positionPercent(Artemis.charaktere.bronte.positionStandard.x, Artemis.charaktere.bronte.positionStandard.y));
                                await Artemis.ƒS.update(0.4);
                                await Artemis.ƒS.Speech.tell(Artemis.charaktere.bronte, " Vorhin schienen Sie sich ja wirklich sehr erschreckt zu haben. Können sie mehr darüber erzählen was genau sie so erschreckt hat? ");
                                await Artemis.ƒS.Speech.tell(Artemis.charaktere.stella, " Oh… Ich weiß nicht. ");
                                await Artemis.ƒS.Character.hide(Artemis.charaktere.maire);
                                await Artemis.ƒS.Character.show(Artemis.charaktere.maire, Artemis.charaktere.maire.pose.sad, Artemis.ƒS.positionPercent(Artemis.charaktere.maire.positionStandard.x, Artemis.charaktere.maire.positionStandard.y));
                                await Artemis.ƒS.update(0.4);
                                await Artemis.ƒS.Speech.tell(Artemis.charaktere.maire, " (Bronte wir müssen sie irgendwie überzeugen uns alles zu erzählen.) ");
                                await Artemis.ƒS.Character.hide(Artemis.charaktere.maire);
                                await Artemis.ƒS.Character.show(Artemis.charaktere.maire, Artemis.charaktere.maire.pose.neutral, Artemis.ƒS.positionPercent(Artemis.charaktere.maire.positionStandard.x, Artemis.charaktere.maire.positionStandard.y));
                                await Artemis.ƒS.Character.hide(Artemis.charaktere.bronte);
                                await Artemis.ƒS.Character.show(Artemis.charaktere.bronte, Artemis.charaktere.bronte.pose.think, Artemis.ƒS.positionPercent(Artemis.charaktere.bronte.positionStandard.x, Artemis.charaktere.bronte.positionStandard.y));
                                await Artemis.ƒS.update(0.4);
                                await Artemis.ƒS.Speech.tell(Artemis.charaktere.bronte, " Mhm… ja aber wie?");
                                stellaTalk.scream = "";
                                break;
                            case stellaTalk.somebodyelse:
                                await Artemis.ƒS.Speech.tell(Artemis.charaktere.bronte, " Ich denke jemand anderes wäre gerade hilfreicher. ");
                                await Artemis.ƒS.Character.hide(Artemis.charaktere.stella);
                                await Artemis.ƒS.update(0.4);
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
                    await Artemis.ƒS.Character.show(Artemis.charaktere.alaistar, Artemis.charaktere.alaistar.pose.neutral, Artemis.ƒS.positionPercent(Artemis.charaktere.alaistar.positionMiddle.x, Artemis.charaktere.alaistar.positionMiddle.y));
                    await Artemis.ƒS.update(0.4);
                    await Artemis.ƒS.Speech.tell(Artemis.charaktere.alaistar, " Ja, was ist los?");
                    while (alaistarLoop) {
                        let userChooseAlaistarTalk = await Artemis.ƒS.Menu.getInput(alaistarTalk, "basicChoice");
                        switch (userChooseAlaistarTalk) {
                            case alaistarTalk.artemis:
                                await Artemis.ƒS.Speech.tell(Artemis.charaktere.bronte, " Wie ist eigentlich ihre Beziehung zu Artemis?  ");
                                await Artemis.ƒS.Speech.tell(Artemis.charaktere.alaistar, " Wer?  ");
                                await Artemis.ƒS.Speech.tell(Artemis.charaktere.alaistar, " Ach die Katze… Naja sie ist halt eine Katze. Nicht sonderlich interessant.  ");
                                await Artemis.ƒS.Speech.tell(Artemis.charaktere.bronte, " Ihre Schwester scheint sie sehr lieb zu haben.  ");
                                await Artemis.ƒS.Character.hide(Artemis.charaktere.alaistar);
                                await Artemis.ƒS.Character.show(Artemis.charaktere.alaistar, Artemis.charaktere.alaistar.pose.happy, Artemis.ƒS.positionPercent(Artemis.charaktere.alaistar.positionMiddle.x, Artemis.charaktere.alaistar.positionMiddle.y));
                                await Artemis.ƒS.update(0.4);
                                await Artemis.ƒS.Speech.tell(Artemis.charaktere.alaistar, " Ach die war nur ein wenig hysterisch vorhin. War meine Mutter schon immer.  ");
                                await Artemis.ƒS.Character.hide(Artemis.charaktere.alaistar);
                                await Artemis.ƒS.Character.show(Artemis.charaktere.alaistar, Artemis.charaktere.alaistar.pose.neutral, Artemis.ƒS.positionPercent(Artemis.charaktere.alaistar.positionMiddle.x, Artemis.charaktere.alaistar.positionMiddle.y));
                                await Artemis.ƒS.update(0.4);
                                await Artemis.ƒS.Speech.tell(Artemis.charaktere.alaistar, " Aber Grace hat sich ja mittlerweile beruhig.  ");
                                await Artemis.ƒS.Speech.tell(Artemis.charaktere.bronte, " Und überraschend schnell…");
                                alaistarTalk.artemis = "";
                                break;
                            case alaistarTalk.isaac:
                                await Artemis.ƒS.Speech.tell(Artemis.charaktere.bronte, " Ich möchte ihnen nicht zu nahetreten, aber ihre Beziehung zu ihrem Schwager scheint nicht sonderlich gut zu sein. ");
                                await Artemis.ƒS.Character.hide(Artemis.charaktere.alaistar);
                                await Artemis.ƒS.Character.show(Artemis.charaktere.alaistar, Artemis.charaktere.alaistar.pose.angry, Artemis.ƒS.positionPercent(Artemis.charaktere.alaistar.positionMiddle.x, Artemis.charaktere.alaistar.positionMiddle.y));
                                await Artemis.ƒS.update(0.4);
                                await Artemis.ƒS.Speech.tell(Artemis.charaktere.alaistar, " Nun, dass kann ich wohl schwer leugnen. ");
                                await Artemis.ƒS.Speech.tell(Artemis.charaktere.bronte, " Hat dies einen bestimmten Ursprung oder ist dies einfach… unterschiedlichen Charakteren geschuldet? ");
                                await Artemis.ƒS.Character.hide(Artemis.charaktere.alaistar);
                                await Artemis.ƒS.Character.show(Artemis.charaktere.alaistar, Artemis.charaktere.alaistar.pose.neutral, Artemis.ƒS.positionPercent(Artemis.charaktere.alaistar.positionMiddle.x, Artemis.charaktere.alaistar.positionMiddle.y));
                                await Artemis.ƒS.update(0.4);
                                await Artemis.ƒS.Speech.tell(Artemis.charaktere.alaistar, "Um es diplomatisch auszudrücken, er passt einfach nicht in die Familie. Es ist sowohl für mich als auch für ihn eine Schande der gleichen Familie anzugehören. ");
                                await Artemis.ƒS.Character.hide(Artemis.charaktere.alaistar);
                                await Artemis.ƒS.Character.show(Artemis.charaktere.alaistar, Artemis.charaktere.alaistar.pose.angry, Artemis.ƒS.positionPercent(Artemis.charaktere.alaistar.positionMiddle.x, Artemis.charaktere.alaistar.positionMiddle.y));
                                await Artemis.ƒS.update(0.4);
                                await Artemis.ƒS.Speech.tell(Artemis.charaktere.alaistar, "Um Himmelswillen, er muss arbeiten um Geld zu verdienen. Wie sieht dass denn bitte aus!? ");
                                await Artemis.ƒS.Character.hide(Artemis.charaktere.maire);
                                await Artemis.ƒS.Character.show(Artemis.charaktere.maire, Artemis.charaktere.maire.pose.sad, Artemis.ƒS.positionPercent(Artemis.charaktere.maire.positionStandard.x, Artemis.charaktere.maire.positionStandard.y));
                                await Artemis.ƒS.Character.hide(Artemis.charaktere.alaistar);
                                await Artemis.ƒS.Character.show(Artemis.charaktere.alaistar, Artemis.charaktere.alaistar.pose.neutral, Artemis.ƒS.positionPercent(Artemis.charaktere.alaistar.positionMiddle.x, Artemis.charaktere.alaistar.positionMiddle.y));
                                await Artemis.ƒS.update(0.4);
                                await Artemis.ƒS.Speech.tell(Artemis.charaktere.maire, " (…) ");
                                await Artemis.ƒS.Speech.tell(Artemis.charaktere.alaistar, " Entschuldigen Sie. Gibt es nicht vielleicht ein anderes Thema über dass wir sprechen können? ");
                                await Artemis.ƒS.Character.hide(Artemis.charaktere.maire);
                                await Artemis.ƒS.Character.show(Artemis.charaktere.maire, Artemis.charaktere.maire.pose.neutral, Artemis.ƒS.positionPercent(Artemis.charaktere.maire.positionStandard.x, Artemis.charaktere.maire.positionStandard.y));
                                await Artemis.ƒS.update(0.4);
                                await Artemis.ƒS.Speech.tell(Artemis.charaktere.maire, " (Er sieht ziemlich sauer aus, ich glaube das Thema ist nicht gut bei ihm angekommen) ");
                                Artemis.dataForSave.pointAngryGrace += 1;
                                if (Artemis.dataForSave.pointAngryGrace >= 4) {
                                    await graceBadEnding();
                                    return "EndingBadGraceAngry";
                                }
                                alaistarTalk.isaac = "";
                                break;
                            case alaistarTalk.somebodyelse:
                                await Artemis.ƒS.Speech.tell(Artemis.charaktere.bronte, " Wir sollten etwas anderes machen... ");
                                await Artemis.ƒS.Character.hide(Artemis.charaktere.alaistar);
                                await Artemis.ƒS.update(0.4);
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
                    await Artemis.ƒS.Speech.tell(Artemis.charaktere.bronte, "Lass uns den Raum genauer ansehen!");
                    while (roomLoop) {
                        let userChooseRoomOption = await Artemis.ƒS.Menu.getInput(roomOptions, "basicChoice");
                        switch (userChooseRoomOption) {
                            case roomOptions.food:
                                if (Artemis.dataForSave.mairePuked) {
                                    await Artemis.ƒS.Character.hide(Artemis.charaktere.maire);
                                    await Artemis.ƒS.Character.show(Artemis.charaktere.maire, Artemis.charaktere.maire.pose.embarrassed, Artemis.ƒS.positionPercent(Artemis.charaktere.maire.positionStandard.x, Artemis.charaktere.maire.positionStandard.y));
                                    await Artemis.ƒS.update(0.4);
                                    await Artemis.ƒS.Speech.tell(Artemis.charaktere.maire, " Ihh! Bronte bleib davon weg. Ich kann mir, dass nicht ansehen. ");
                                }
                                else {
                                    await Artemis.ƒS.Character.hide(Artemis.charaktere.maire);
                                    await Artemis.ƒS.Character.show(Artemis.charaktere.maire, Artemis.charaktere.maire.pose.happy, Artemis.ƒS.positionPercent(Artemis.charaktere.maire.positionStandard.x, Artemis.charaktere.maire.positionStandard.y));
                                    await Artemis.ƒS.update(0.4);
                                    await Artemis.ƒS.Speech.tell(Artemis.charaktere.maire, " Das müssen wir unbedingt bald mal wieder Essen. ");
                                    await Artemis.ƒS.Character.hide(Artemis.charaktere.bronte);
                                    await Artemis.ƒS.Character.show(Artemis.charaktere.bronte, Artemis.charaktere.bronte.pose.happy, Artemis.ƒS.positionPercent(Artemis.charaktere.bronte.positionStandard.x, Artemis.charaktere.bronte.positionStandard.y));
                                    await Artemis.ƒS.update(0.4);
                                    await Artemis.ƒS.Speech.tell(Artemis.charaktere.bronte, " Klar. Ungewöhnlich scheint hier aber nichts zu sein.");
                                    await Artemis.ƒS.Character.hide(Artemis.charaktere.maire);
                                    await Artemis.ƒS.Character.show(Artemis.charaktere.maire, Artemis.charaktere.maire.pose.neutral, Artemis.ƒS.positionPercent(Artemis.charaktere.maire.positionStandard.x, Artemis.charaktere.maire.positionStandard.y));
                                    await Artemis.ƒS.update(0.4);
                                }
                                roomOptions.food = "";
                                break;
                            case roomOptions.painting:
                                await Artemis.ƒS.Character.hide(Artemis.charaktere.bronte);
                                await Artemis.ƒS.Character.show(Artemis.charaktere.bronte, Artemis.charaktere.bronte.pose.think, Artemis.ƒS.positionPercent(Artemis.charaktere.bronte.positionStandard.x, Artemis.charaktere.bronte.positionStandard.y));
                                await Artemis.ƒS.update(0.4);
                                await Artemis.ƒS.Speech.tell(Artemis.charaktere.bronte, " Fällt dir etwas bei dem großen Bild auf? ");
                                await Artemis.ƒS.Character.hide(Artemis.charaktere.maire);
                                await Artemis.ƒS.Character.show(Artemis.charaktere.maire, Artemis.charaktere.maire.pose.sad, Artemis.ƒS.positionPercent(Artemis.charaktere.maire.positionStandard.x, Artemis.charaktere.maire.positionStandard.y));
                                await Artemis.ƒS.update(0.4);
                                await Artemis.ƒS.Speech.tell(Artemis.charaktere.maire, " Mhm… Es ist ziemlich hässlich. Wie alle Bilder hier. Ehrlich gesagt ist das ganze Anwesen ein wenig… schief und krumm. ");
                                await Artemis.ƒS.Character.hide(Artemis.charaktere.bronte);
                                await Artemis.ƒS.Character.show(Artemis.charaktere.bronte, Artemis.charaktere.bronte.pose.happy, Artemis.ƒS.positionPercent(Artemis.charaktere.bronte.positionStandard.x, Artemis.charaktere.bronte.positionStandard.y));
                                await Artemis.ƒS.update(0.4);
                                await Artemis.ƒS.Speech.tell(Artemis.charaktere.bronte, " Da muss ich dir recht geben… aber das meine ich nicht. Schau dir die Personen an. ");
                                await Artemis.ƒS.Character.hide(Artemis.charaktere.maire);
                                await Artemis.ƒS.Character.show(Artemis.charaktere.maire, Artemis.charaktere.maire.pose.neutral, Artemis.ƒS.positionPercent(Artemis.charaktere.maire.positionStandard.x, Artemis.charaktere.maire.positionStandard.y));
                                await Artemis.ƒS.update(0.4);
                                await Artemis.ƒS.Speech.tell(Artemis.charaktere.maire, " Ein alter Mann… wohl der Senor. Und ein junger Mann an seiner Seite, dass muss schon älter sein scheint ja Alaistar Blackburn zu sein. Und diese junge Frau war dann wohl Grace als sie jünger war. ");
                                await Artemis.ƒS.Character.hide(Artemis.charaktere.maire);
                                await Artemis.ƒS.Character.show(Artemis.charaktere.maire, Artemis.charaktere.maire.pose.sad, Artemis.ƒS.positionPercent(Artemis.charaktere.maire.positionStandard.x, Artemis.charaktere.maire.positionStandard.y));
                                await Artemis.ƒS.update(0.4);
                                await Artemis.ƒS.Speech.tell(Artemis.charaktere.maire, "  Ah und dann ein kleines Mädchen… mhm Stella ist das wohl nicht, aber wer sonst?");
                                await Artemis.ƒS.Character.hide(Artemis.charaktere.bronte);
                                await Artemis.ƒS.Character.show(Artemis.charaktere.bronte, Artemis.charaktere.bronte.pose.think, Artemis.ƒS.positionPercent(Artemis.charaktere.bronte.positionStandard.x, Artemis.charaktere.bronte.positionStandard.y));
                                await Artemis.ƒS.update(0.4);
                                await Artemis.ƒS.Speech.tell(Artemis.charaktere.bronte, " Ein drittes Kind. Vom Abstand der Jahre vermutlich die Ehefrau von Isaac. Hast du dich nicht gewundert warum die Familie ihn so… schlecht behandelt? ");
                                await Artemis.ƒS.Character.hide(Artemis.charaktere.maire);
                                await Artemis.ƒS.Character.show(Artemis.charaktere.maire, Artemis.charaktere.maire.pose.fear, Artemis.ƒS.positionPercent(Artemis.charaktere.maire.positionStandard.x, Artemis.charaktere.maire.positionStandard.y));
                                await Artemis.ƒS.update(0.4);
                                await Artemis.ƒS.Speech.tell(Artemis.charaktere.maire, " Er ist gar kein Blackburn sondern nur angeheiratet? Aber wo ist seine Frau? Die fehlende Schwester spannend… ");
                                await Artemis.ƒS.Character.hide(Artemis.charaktere.maire);
                                await Artemis.ƒS.Character.show(Artemis.charaktere.maire, Artemis.charaktere.maire.pose.neutral, Artemis.ƒS.positionPercent(Artemis.charaktere.maire.positionStandard.x, Artemis.charaktere.maire.positionStandard.y));
                                await Artemis.ƒS.update(0.4);
                                await Artemis.ƒS.Speech.tell(Artemis.charaktere.bronte, " Wir sollten auch mit Isaac reden.");
                                await Artemis.ƒS.Character.hide(Artemis.charaktere.bronte);
                                await Artemis.ƒS.Character.show(Artemis.charaktere.bronte, Artemis.charaktere.bronte.pose.sad, Artemis.ƒS.positionPercent(Artemis.charaktere.bronte.positionStandard.x, Artemis.charaktere.bronte.positionStandard.y));
                                await Artemis.ƒS.update(0.4);
                                roomOptions.painting = "";
                                chooseWhoToInterview.isaac = "Isaac";
                                break;
                            case roomOptions.window:
                                await Artemis.ƒS.Speech.tell(Artemis.charaktere.maire, " Von hier muss Stella die Person gesehen haben. ");
                                await Artemis.ƒS.Character.hide(Artemis.charaktere.maire);
                                await Artemis.ƒS.Character.show(Artemis.charaktere.maire, Artemis.charaktere.maire.pose.sad, Artemis.ƒS.positionPercent(Artemis.charaktere.maire.positionStandard.x, Artemis.charaktere.maire.positionStandard.y));
                                await Artemis.ƒS.Character.hide(Artemis.charaktere.bronte);
                                await Artemis.ƒS.Character.show(Artemis.charaktere.bronte, Artemis.charaktere.bronte.pose.think, Artemis.ƒS.positionPercent(Artemis.charaktere.bronte.positionStandard.x, Artemis.charaktere.bronte.positionStandard.y));
                                await Artemis.ƒS.update(0.4);
                                await Artemis.ƒS.Speech.tell(Artemis.charaktere.bronte, " Ja. Mit dem Licht an kann man eigentlich viel vom Garten sehen. Den Teich, die Hecken und ein kleiner Bereich mit Stühlen und einen Pavillon. Ein wirklich schöner Garten. ");
                                await Artemis.ƒS.Character.hide(Artemis.charaktere.maire);
                                await Artemis.ƒS.Character.show(Artemis.charaktere.maire, Artemis.charaktere.maire.pose.neutral, Artemis.ƒS.positionPercent(Artemis.charaktere.maire.positionStandard.x, Artemis.charaktere.maire.positionStandard.y));
                                await Artemis.ƒS.update(0.4);
                                await Artemis.ƒS.Speech.tell(Artemis.charaktere.maire, " Mhm ja… Was Stella wohl gesehen hat? ");
                                await Artemis.ƒS.Character.hide(Artemis.charaktere.bronte);
                                await Artemis.ƒS.Character.show(Artemis.charaktere.bronte, Artemis.charaktere.bronte.pose.sad, Artemis.ƒS.positionPercent(Artemis.charaktere.bronte.positionStandard.x, Artemis.charaktere.bronte.positionStandard.y));
                                await Artemis.ƒS.update(0.4);
                                await Artemis.ƒS.Speech.tell(Artemis.charaktere.bronte, " Gute Frage…");
                                roomOptions.window = "";
                                break;
                            case roomOptions.somethingelse:
                                await Artemis.ƒS.Speech.tell(Artemis.charaktere.bronte, "Lass etwas anderes machen...");
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
                    await Artemis.ƒS.Character.show(Artemis.charaktere.isaac, Artemis.charaktere.isaac.pose.neutral, Artemis.ƒS.positionPercent(Artemis.charaktere.isaac.positionStandard.x, Artemis.charaktere.isaac.positionStandard.y));
                    await Artemis.ƒS.update(0.4);
                    while (issacLoop) {
                        let userIsaacTalk = await Artemis.ƒS.Menu.getInput(isaacTalk, "basicChoice");
                        switch (userIsaacTalk) {
                            case isaacTalk.family:
                                await Artemis.ƒS.Character.hide(Artemis.charaktere.bronte);
                                await Artemis.ƒS.Character.show(Artemis.charaktere.bronte, Artemis.charaktere.bronte.pose.think, Artemis.ƒS.positionPercent(Artemis.charaktere.bronte.positionStandard.x, Artemis.charaktere.bronte.positionStandard.y));
                                await Artemis.ƒS.update(0.4);
                                await Artemis.ƒS.Speech.tell(Artemis.charaktere.bronte, " Die Beziehung zu ihrer Familie ist nicht sonderlich eng, oder? ");
                                await Artemis.ƒS.Character.hide(Artemis.charaktere.isaac);
                                await Artemis.ƒS.Character.show(Artemis.charaktere.isaac, Artemis.charaktere.isaac.pose.happy, Artemis.ƒS.positionPercent(Artemis.charaktere.isaac.positionStandard.x, Artemis.charaktere.isaac.positionStandard.y));
                                await Artemis.ƒS.update(0.4);
                                await Artemis.ƒS.Speech.tell(Artemis.charaktere.isaac, " Eng? Ja so kann man es wohl nennen. Ich war noch nie sonderlich beliebt bei den Blackburns. Immerhin besitzen meine Eltern kein Land. ");
                                await Artemis.ƒS.Character.hide(Artemis.charaktere.isaac);
                                await Artemis.ƒS.Character.show(Artemis.charaktere.isaac, Artemis.charaktere.isaac.pose.sad, Artemis.ƒS.positionPercent(Artemis.charaktere.isaac.positionStandard.x, Artemis.charaktere.isaac.positionStandard.y));
                                await Artemis.ƒS.Character.hide(Artemis.charaktere.maire);
                                await Artemis.ƒS.Character.show(Artemis.charaktere.maire, Artemis.charaktere.maire.pose.happy, Artemis.ƒS.positionPercent(Artemis.charaktere.maire.positionStandard.x, Artemis.charaktere.maire.positionStandard.y));
                                await Artemis.ƒS.update(0.4);
                                await Artemis.ƒS.Speech.tell(Artemis.charaktere.maire, " Aber sie sind doch ein Anwalt! Dass ist doch ein sehr ehrbarer Beruf?! ");
                                await Artemis.ƒS.Character.hide(Artemis.charaktere.isaac);
                                await Artemis.ƒS.Character.show(Artemis.charaktere.isaac, Artemis.charaktere.isaac.pose.neutral, Artemis.ƒS.positionPercent(Artemis.charaktere.isaac.positionStandard.x, Artemis.charaktere.isaac.positionStandard.y));
                                await Artemis.ƒS.update(0.4);
                                await Artemis.ƒS.Speech.tell(Artemis.charaktere.isaac, " Haha… ja dass mag für sie so sein, aber bei den Blackburns ist das nicht genug. ");
                                await Artemis.ƒS.Character.hide(Artemis.charaktere.maire);
                                await Artemis.ƒS.Character.show(Artemis.charaktere.maire, Artemis.charaktere.maire.pose.sad, Artemis.ƒS.positionPercent(Artemis.charaktere.maire.positionStandard.x, Artemis.charaktere.maire.positionStandard.y));
                                await Artemis.ƒS.Character.hide(Artemis.charaktere.bronte);
                                await Artemis.ƒS.Character.show(Artemis.charaktere.bronte, Artemis.charaktere.bronte.pose.sad, Artemis.ƒS.positionPercent(Artemis.charaktere.bronte.positionStandard.x, Artemis.charaktere.bronte.positionStandard.y));
                                await Artemis.ƒS.update(0.4);
                                await Artemis.ƒS.Speech.tell(Artemis.charaktere.bronte, " Ich verstehe, die Familie ist sehr konservativ und traditionell. ");
                                await Artemis.ƒS.Character.hide(Artemis.charaktere.isaac);
                                await Artemis.ƒS.Character.show(Artemis.charaktere.isaac, Artemis.charaktere.isaac.pose.sad, Artemis.ƒS.positionPercent(Artemis.charaktere.isaac.positionStandard.x, Artemis.charaktere.isaac.positionStandard.y));
                                await Artemis.ƒS.update(0.4);
                                await Artemis.ƒS.Speech.tell(Artemis.charaktere.isaac, " So kann man es wohl ausdrücken…");
                                await Artemis.ƒS.Character.hide(Artemis.charaktere.isaac);
                                await Artemis.ƒS.Character.show(Artemis.charaktere.isaac, Artemis.charaktere.isaac.pose.neutral, Artemis.ƒS.positionPercent(Artemis.charaktere.isaac.positionStandard.x, Artemis.charaktere.isaac.positionStandard.y));
                                await Artemis.ƒS.Character.hide(Artemis.charaktere.maire);
                                await Artemis.ƒS.Character.show(Artemis.charaktere.maire, Artemis.charaktere.maire.pose.neutral, Artemis.ƒS.positionPercent(Artemis.charaktere.maire.positionStandard.x, Artemis.charaktere.maire.positionStandard.y));
                                await Artemis.ƒS.update(0.4);
                                isaacTalk.family = "";
                                break;
                            case isaacTalk.wife:
                                await Artemis.ƒS.Character.hide(Artemis.charaktere.bronte);
                                await Artemis.ƒS.Character.show(Artemis.charaktere.bronte, Artemis.charaktere.bronte.pose.happy, Artemis.ƒS.positionPercent(Artemis.charaktere.bronte.positionStandard.x, Artemis.charaktere.bronte.positionStandard.y));
                                await Artemis.ƒS.update(0.4);
                                await Artemis.ƒS.Speech.tell(Artemis.charaktere.bronte, " Isaac, dürfte ich sie etwas persönliches Fragen? ");
                                await Artemis.ƒS.Character.hide(Artemis.charaktere.isaac);
                                await Artemis.ƒS.Character.show(Artemis.charaktere.isaac, Artemis.charaktere.isaac.pose.happy, Artemis.ƒS.positionPercent(Artemis.charaktere.isaac.positionStandard.x, Artemis.charaktere.isaac.positionStandard.y));
                                await Artemis.ƒS.update(0.4);
                                await Artemis.ƒS.Speech.tell(Artemis.charaktere.isaac, " Welch spannende Frage. Solange sie mich nicht beleidigen, sollte das in Ordnung gehen. ");
                                await Artemis.ƒS.Character.hide(Artemis.charaktere.bronte);
                                await Artemis.ƒS.Character.show(Artemis.charaktere.bronte, Artemis.charaktere.bronte.pose.think, Artemis.ƒS.positionPercent(Artemis.charaktere.bronte.positionStandard.x, Artemis.charaktere.bronte.positionStandard.y));
                                await Artemis.ƒS.update(0.4);
                                await Artemis.ƒS.Speech.tell(Artemis.charaktere.bronte, " Wir haben das Bild hier betrachtet und uns ist aufgefallen, dass die jüngste Tochter der Blackburns heute gar nicht anwesend ist. Wir nehmen an das ist ihre Frau? ");
                                await Artemis.ƒS.Character.hide(Artemis.charaktere.isaac);
                                await Artemis.ƒS.Character.show(Artemis.charaktere.isaac, Artemis.charaktere.isaac.pose.cry, Artemis.ƒS.positionPercent(Artemis.charaktere.isaac.positionStandard.x, Artemis.charaktere.isaac.positionStandard.y));
                                await Artemis.ƒS.update(0.4);
                                await Artemis.ƒS.Speech.tell(Artemis.charaktere.isaac, " Oh… ja… das war sie. ");
                                await Artemis.ƒS.Character.hide(Artemis.charaktere.bronte);
                                await Artemis.ƒS.Character.show(Artemis.charaktere.bronte, Artemis.charaktere.bronte.pose.shout, Artemis.ƒS.positionPercent(Artemis.charaktere.bronte.positionStandard.x, Artemis.charaktere.bronte.positionStandard.y));
                                await Artemis.ƒS.update(0.4);
                                await Artemis.ƒS.Speech.tell(Artemis.charaktere.bronte, " Oh, dass tut mir sehr leid. ");
                                await Artemis.ƒS.Character.hide(Artemis.charaktere.bronte);
                                await Artemis.ƒS.Character.show(Artemis.charaktere.bronte, Artemis.charaktere.bronte.pose.sad, Artemis.ƒS.positionPercent(Artemis.charaktere.bronte.positionStandard.x, Artemis.charaktere.bronte.positionStandard.y));
                                await Artemis.ƒS.Character.hide(Artemis.charaktere.isaac);
                                await Artemis.ƒS.Character.show(Artemis.charaktere.isaac, Artemis.charaktere.isaac.pose.sad, Artemis.ƒS.positionPercent(Artemis.charaktere.isaac.positionStandard.x, Artemis.charaktere.isaac.positionStandard.y));
                                await Artemis.ƒS.update(0.4);
                                await Artemis.ƒS.Speech.tell(Artemis.charaktere.isaac, " Danke für Ihre Anteilnahme… Odette war eine sehr liebenswürdige Person. Ich vermisse sie sehr. ");
                                await Artemis.ƒS.Character.hide(Artemis.charaktere.bronte);
                                await Artemis.ƒS.Character.show(Artemis.charaktere.bronte, Artemis.charaktere.bronte.pose.shout, Artemis.ƒS.positionPercent(Artemis.charaktere.bronte.positionStandard.x, Artemis.charaktere.bronte.positionStandard.y));
                                await Artemis.ƒS.update(0.4);
                                await Artemis.ƒS.Character.hide(Artemis.charaktere.maire);
                                await Artemis.ƒS.Character.show(Artemis.charaktere.maire, Artemis.charaktere.maire.pose.sad, Artemis.ƒS.positionPercent(Artemis.charaktere.maire.positionStandard.x, Artemis.charaktere.maire.positionStandard.y));
                                await Artemis.ƒS.update(0.4);
                                await Artemis.ƒS.Speech.tell(Artemis.charaktere.maire, " Wie ist sie verstorben? ");
                                await Artemis.ƒS.Character.hide(Artemis.charaktere.bronte);
                                await Artemis.ƒS.Character.show(Artemis.charaktere.bronte, Artemis.charaktere.bronte.pose.sad, Artemis.ƒS.positionPercent(Artemis.charaktere.bronte.positionStandard.x, Artemis.charaktere.bronte.positionStandard.y));
                                await Artemis.ƒS.update(0.4);
                                await Artemis.ƒS.Speech.tell(Artemis.charaktere.bronte, " Maire… dass ist wirklich sehr persönlich. Entschuldung Isaac. ");
                                await Artemis.ƒS.Character.hide(Artemis.charaktere.maire);
                                await Artemis.ƒS.Character.show(Artemis.charaktere.maire, Artemis.charaktere.maire.pose.embarrassed, Artemis.ƒS.positionPercent(Artemis.charaktere.maire.positionStandard.x, Artemis.charaktere.maire.positionStandard.y));
                                await Artemis.ƒS.Character.hide(Artemis.charaktere.isaac);
                                await Artemis.ƒS.Character.show(Artemis.charaktere.isaac, Artemis.charaktere.isaac.pose.cry, Artemis.ƒS.positionPercent(Artemis.charaktere.isaac.positionStandard.x, Artemis.charaktere.isaac.positionStandard.y));
                                await Artemis.ƒS.update(0.4);
                                await Artemis.ƒS.Speech.tell(Artemis.charaktere.isaac, " Nein, alles in Ordnung. Sie hat sich vor zwei Jahren in die Themse gestürzt. ");
                                await Artemis.ƒS.Character.hide(Artemis.charaktere.bronte);
                                await Artemis.ƒS.Character.show(Artemis.charaktere.bronte, Artemis.charaktere.bronte.pose.shout, Artemis.ƒS.positionPercent(Artemis.charaktere.bronte.positionStandard.x, Artemis.charaktere.bronte.positionStandard.y));
                                await Artemis.ƒS.Character.hide(Artemis.charaktere.maire);
                                await Artemis.ƒS.Character.show(Artemis.charaktere.maire, Artemis.charaktere.maire.pose.sad, Artemis.ƒS.positionPercent(Artemis.charaktere.maire.positionStandard.x, Artemis.charaktere.maire.positionStandard.y));
                                await Artemis.ƒS.update(0.4);
                                await Artemis.ƒS.Speech.tell(Artemis.charaktere.bronte, " Oh! Wie überaus tragisch. Dass tut mir sehr leid. ");
                                await Artemis.ƒS.Character.hide(Artemis.charaktere.isaac);
                                await Artemis.ƒS.Character.show(Artemis.charaktere.isaac, Artemis.charaktere.isaac.pose.sad, Artemis.ƒS.positionPercent(Artemis.charaktere.isaac.positionStandard.x, Artemis.charaktere.isaac.positionStandard.y));
                                await Artemis.ƒS.Character.hide(Artemis.charaktere.bronte);
                                await Artemis.ƒS.Character.show(Artemis.charaktere.bronte, Artemis.charaktere.bronte.pose.sad, Artemis.ƒS.positionPercent(Artemis.charaktere.bronte.positionStandard.x, Artemis.charaktere.bronte.positionStandard.y));
                                await Artemis.ƒS.update(0.4);
                                await Artemis.ƒS.Speech.tell(Artemis.charaktere.isaac, " Ja… ");
                                await Artemis.ƒS.Speech.tell(Artemis.charaktere.maire, " Moment Mal… O.R. Bronte!");
                                await Artemis.ƒS.Character.hide(Artemis.charaktere.maire);
                                await Artemis.ƒS.Character.show(Artemis.charaktere.maire, Artemis.charaktere.maire.pose.neutral, Artemis.ƒS.positionPercent(Artemis.charaktere.maire.positionStandard.x, Artemis.charaktere.maire.positionStandard.y));
                                await Artemis.ƒS.update(0.4);
                                isaacTalk.wife = "";
                                isaacTalk.ring = "Ring geben";
                                break;
                            case isaacTalk.ring:
                                await Artemis.ƒS.Speech.tell(Artemis.charaktere.bronte, " Könnten sie sich etwas ansehen? ");
                                await Artemis.ƒS.Character.hide(Artemis.charaktere.bronte);
                                await Artemis.ƒS.Character.show(Artemis.charaktere.bronte, Artemis.charaktere.bronte.pose.think, Artemis.ƒS.positionPercent(Artemis.charaktere.bronte.positionStandard.x, Artemis.charaktere.bronte.positionStandard.y));
                                await Artemis.ƒS.update(0.4);
                                await Artemis.ƒS.Speech.tell(Artemis.charaktere.isaac, " Oh natürlich.  ");
                                await Artemis.ƒS.Character.hide(Artemis.charaktere.isaac);
                                await Artemis.ƒS.Character.show(Artemis.charaktere.isaac, Artemis.charaktere.isaac.pose.cry, Artemis.ƒS.positionPercent(Artemis.charaktere.isaac.positionStandard.x, Artemis.charaktere.isaac.positionStandard.y));
                                await Artemis.ƒS.update(0.4);
                                await Artemis.ƒS.Speech.tell(Artemis.charaktere.isaac, " !!!  ");
                                await Artemis.ƒS.Speech.tell(Artemis.charaktere.isaac, "Wo haben sie den her! ");
                                await Artemis.ƒS.Character.hide(Artemis.charaktere.isaac);
                                await Artemis.ƒS.Character.show(Artemis.charaktere.isaac, Artemis.charaktere.isaac.pose.sad, Artemis.ƒS.positionPercent(Artemis.charaktere.isaac.positionStandard.x, Artemis.charaktere.isaac.positionStandard.y));
                                await Artemis.ƒS.Character.hide(Artemis.charaktere.bronte);
                                await Artemis.ƒS.Character.show(Artemis.charaktere.bronte, Artemis.charaktere.bronte.pose.shout, Artemis.ƒS.positionPercent(Artemis.charaktere.bronte.positionStandard.x, Artemis.charaktere.bronte.positionStandard.y));
                                await Artemis.ƒS.update(0.4);
                                await Artemis.ƒS.Speech.tell(Artemis.charaktere.bronte, " Kennen sie den? ");
                                await Artemis.ƒS.Character.hide(Artemis.charaktere.isaac);
                                await Artemis.ƒS.Character.show(Artemis.charaktere.isaac, Artemis.charaktere.isaac.pose.neutral, Artemis.ƒS.positionPercent(Artemis.charaktere.isaac.positionStandard.x, Artemis.charaktere.isaac.positionStandard.y));
                                await Artemis.ƒS.update(0.4);
                                await Artemis.ƒS.Speech.tell(Artemis.charaktere.isaac, " Natürlich. Ich habe ihn gekauft. ");
                                await Artemis.ƒS.Character.hide(Artemis.charaktere.bronte);
                                await Artemis.ƒS.Character.show(Artemis.charaktere.bronte, Artemis.charaktere.bronte.pose.sad, Artemis.ƒS.positionPercent(Artemis.charaktere.bronte.positionStandard.x, Artemis.charaktere.bronte.positionStandard.y));
                                await Artemis.ƒS.update(0.4);
                                await Artemis.ƒS.Speech.tell(Artemis.charaktere.bronte, " Oh… aber… oh… Ihre Frau Odette gehörte er oder? ");
                                await Artemis.ƒS.Character.hide(Artemis.charaktere.maire);
                                await Artemis.ƒS.Character.show(Artemis.charaktere.maire, Artemis.charaktere.maire.pose.fear, Artemis.ƒS.positionPercent(Artemis.charaktere.maire.positionStandard.x, Artemis.charaktere.maire.positionStandard.y));
                                await Artemis.ƒS.update(0.4);
                                await Artemis.ƒS.Speech.tell(Artemis.charaktere.maire, " Seiner toten Frau! ");
                                await Artemis.ƒS.Character.hide(Artemis.charaktere.maire);
                                await Artemis.ƒS.Character.show(Artemis.charaktere.maire, Artemis.charaktere.maire.pose.sad, Artemis.ƒS.positionPercent(Artemis.charaktere.maire.positionStandard.x, Artemis.charaktere.maire.positionStandard.y));
                                await Artemis.ƒS.Character.hide(Artemis.charaktere.isaac);
                                await Artemis.ƒS.Character.show(Artemis.charaktere.isaac, Artemis.charaktere.isaac.pose.sad, Artemis.ƒS.positionPercent(Artemis.charaktere.isaac.positionStandard.x, Artemis.charaktere.isaac.positionStandard.y));
                                await Artemis.ƒS.update(0.4);
                                await Artemis.ƒS.Speech.tell(Artemis.charaktere.isaac, " Ja… ich fürchte das ist so. Wo haben sie ihn her? ");
                                await Artemis.ƒS.Character.hide(Artemis.charaktere.bronte);
                                await Artemis.ƒS.Character.show(Artemis.charaktere.bronte, Artemis.charaktere.bronte.pose.think, Artemis.ƒS.positionPercent(Artemis.charaktere.bronte.positionStandard.x, Artemis.charaktere.bronte.positionStandard.y));
                                await Artemis.ƒS.update(0.4);
                                await Artemis.ƒS.Speech.tell(Artemis.charaktere.bronte, " Wir haben ihn draußen in den Büschen gefunden, als uns die Katze heute erschrocken hat. ");
                                await Artemis.ƒS.Character.hide(Artemis.charaktere.isaac);
                                await Artemis.ƒS.Character.show(Artemis.charaktere.isaac, Artemis.charaktere.isaac.pose.cry, Artemis.ƒS.positionPercent(Artemis.charaktere.isaac.positionStandard.x, Artemis.charaktere.isaac.positionStandard.y));
                                await Artemis.ƒS.update(0.4);
                                await Artemis.ƒS.Speech.tell(Artemis.charaktere.isaac, " !! ");
                                await Artemis.ƒS.Character.hide(Artemis.charaktere.maire);
                                await Artemis.ƒS.Character.show(Artemis.charaktere.maire, Artemis.charaktere.maire.pose.fear, Artemis.ƒS.positionPercent(Artemis.charaktere.maire.positionStandard.x, Artemis.charaktere.maire.positionStandard.y));
                                await Artemis.ƒS.update(0.4);
                                await Artemis.ƒS.Speech.tell(Artemis.charaktere.maire, " Geht es ihnen gut? Sie sehen… alarmiert aus. ");
                                await Artemis.ƒS.Speech.tell(Artemis.charaktere.isaac, " Wenn sie mich entschuldigen würden… Ich denke ich brauche etwas frische Luft. ");
                                await Artemis.ƒS.Character.hide(Artemis.charaktere.maire);
                                await Artemis.ƒS.Character.show(Artemis.charaktere.maire, Artemis.charaktere.maire.pose.sad, Artemis.ƒS.positionPercent(Artemis.charaktere.maire.positionStandard.x, Artemis.charaktere.maire.positionStandard.y));
                                await Artemis.ƒS.Character.hide(Artemis.charaktere.bronte);
                                await Artemis.ƒS.Character.show(Artemis.charaktere.bronte, Artemis.charaktere.bronte.pose.sad, Artemis.ƒS.positionPercent(Artemis.charaktere.bronte.positionStandard.x, Artemis.charaktere.bronte.positionStandard.y));
                                await Artemis.ƒS.update(0.4);
                                await Artemis.ƒS.Speech.tell(Artemis.charaktere.bronte, " Natürlich. ");
                                await Artemis.ƒS.Character.hide(Artemis.charaktere.isaac);
                                await Artemis.ƒS.update(0.8);
                                await Artemis.ƒS.Speech.tell(Artemis.charaktere.maire, " Schau Bronte wer da wiederkommt! ");
                                await Artemis.ƒS.Speech.tell(Artemis.charaktere.bronte, " Und die anderen sind gerade in Gespräche vertieft. Das sollte ein guter Zeitpunkt sein mehr über die Familie zu erfahren.");
                                await Artemis.ƒS.Character.hide(Artemis.charaktere.maire);
                                await Artemis.ƒS.Character.show(Artemis.charaktere.maire, Artemis.charaktere.maire.pose.neutral, Artemis.ƒS.positionPercent(Artemis.charaktere.maire.positionStandard.x, Artemis.charaktere.maire.positionStandard.y));
                                await Artemis.ƒS.update(0.4);
                                //Loop endet Szene Endet 
                                issacLoop = false;
                                stillInLoop = false;
                                break;
                            case isaacTalk.somebodyelse:
                                Artemis.ƒS.Character.hide(Artemis.charaktere.isaac);
                                issacLoop = false;
                                break;
                        }
                    }
                    break;
            }
        }
        await Artemis.ƒS.Character.show(Artemis.charaktere.remington, Artemis.charaktere.remington.pose.neutral, Artemis.ƒS.positionPercent(Artemis.charaktere.remington.positionStandard.x, Artemis.charaktere.remington.positionStandard.y));
        await Artemis.ƒS.update(0.8);
        await Artemis.ƒS.Character.hide(Artemis.charaktere.bronte);
        await Artemis.ƒS.Character.show(Artemis.charaktere.bronte, Artemis.charaktere.bronte.pose.happy, Artemis.ƒS.positionPercent(Artemis.charaktere.bronte.positionStandard.x, Artemis.charaktere.bronte.positionStandard.y));
        await Artemis.ƒS.update(0.4);
        await Artemis.ƒS.Speech.tell(Artemis.charaktere.bronte, " Mr Remington? Hätten sie einen Moment Zeit? ");
        await Artemis.ƒS.Speech.tell(Artemis.charaktere.remington, " Wenn es nur kurz ist. Ich serviere gleich den Nachtisch. ");
        await Artemis.ƒS.Speech.tell(Artemis.charaktere.bronte, " Es geht ganz schnell… Ich habe gerade nur dieses schöne Bild bewundert und mir ist das junge Mädchen drauf aufgefallen. Es ist Odette oder? Die jüngste der Blackburn Geschwister. ");
        await Artemis.ƒS.Speech.tell(Artemis.charaktere.remington, " Ja… So ist es. ");
        await Artemis.ƒS.Character.hide(Artemis.charaktere.bronte);
        await Artemis.ƒS.Character.show(Artemis.charaktere.bronte, Artemis.charaktere.bronte.pose.think, Artemis.ƒS.positionPercent(Artemis.charaktere.bronte.positionStandard.x, Artemis.charaktere.bronte.positionStandard.y));
        await Artemis.ƒS.update(0.4);
        await Artemis.ƒS.Speech.tell(Artemis.charaktere.bronte, " Da sie bereits unter dem vorigen Lord gedient haben, nehme ich an sie kannten seine Tochter ebenfalls? ");
        await Artemis.ƒS.Speech.tell(Artemis.charaktere.remington, " Natürlich. Sie war der Sonnenschein der Familie. Als Kind nicht der jungen Stella unähnlich. ");
        await Artemis.ƒS.Speech.tell(Artemis.charaktere.bronte, " Und doch hat sie sich -ich nehme an entgegen dem Wunsch der Familie- dazu entschieden Isaac zu heiraten. ");
        await Artemis.ƒS.Character.hide(Artemis.charaktere.remington);
        await Artemis.ƒS.Character.show(Artemis.charaktere.remington, Artemis.charaktere.remington.pose.angry, Artemis.ƒS.positionPercent(Artemis.charaktere.remington.positionStandard.x, Artemis.charaktere.remington.positionStandard.y));
        await Artemis.ƒS.Character.hide(Artemis.charaktere.bronte);
        await Artemis.ƒS.Character.show(Artemis.charaktere.bronte, Artemis.charaktere.bronte.pose.shout, Artemis.ƒS.positionPercent(Artemis.charaktere.bronte.positionStandard.x, Artemis.charaktere.bronte.positionStandard.y));
        await Artemis.ƒS.update(0.4);
        await Artemis.ƒS.Speech.tell(Artemis.charaktere.remington, " Ja… Das Arme Ding wurde von diesem… Schuft verführt und in ein unglückliches und viel zu kurzes Leben gestürzt. Es brach ihren Eltern das Herz. Und nach all dem Leid was er der Familie angetan hat, wäre er fast dafür belohnt wurden! ");
        await Artemis.ƒS.Character.hide(Artemis.charaktere.bronte);
        await Artemis.ƒS.Character.show(Artemis.charaktere.bronte, Artemis.charaktere.bronte.pose.think, Artemis.ƒS.positionPercent(Artemis.charaktere.bronte.positionStandard.x, Artemis.charaktere.bronte.positionStandard.y));
        await Artemis.ƒS.update(0.4);
        await Artemis.ƒS.Speech.tell(Artemis.charaktere.bronte, " Belohnt wurde? Entschuldigung, wie meinen sie das? ");
        await Artemis.ƒS.Speech.tell(Artemis.charaktere.remington, "Nun das Testament von der ehemaligen Lady Blackburn – der Mutter der Geschwister- sah eigentlich vor das alle ihre Kinder ein Teil des Vermögens bekommen sollten. Aber sie änderte es kurz vor ihrem Tod.");
        await Artemis.ƒS.Speech.tell(Artemis.charaktere.remington, "Zum Glück. Wenig später verstarb Odette und stellen sie sich nur vor Isaac hätte auch nur einen Pfennig davon gesehen!");
        await Artemis.ƒS.Speech.tell(Artemis.charaktere.bronte, " Ja… welch ein Glück. ");
        await Artemis.ƒS.Character.hide(Artemis.charaktere.remington);
        await Artemis.ƒS.Character.show(Artemis.charaktere.remington, Artemis.charaktere.remington.pose.neutral, Artemis.ƒS.positionPercent(Artemis.charaktere.remington.positionStandard.x, Artemis.charaktere.remington.positionStandard.y));
        await Artemis.ƒS.update(0.4);
        await Artemis.ƒS.Speech.tell(Artemis.charaktere.remington, " Verzeihen sie mir ich muss das Essen auftischen. ");
        await Artemis.ƒS.Character.hide(Artemis.charaktere.bronte);
        await Artemis.ƒS.Character.show(Artemis.charaktere.bronte, Artemis.charaktere.bronte.pose.happy, Artemis.ƒS.positionPercent(Artemis.charaktere.bronte.positionStandard.x, Artemis.charaktere.bronte.positionStandard.y));
        await Artemis.ƒS.update(0.4);
        await Artemis.ƒS.Speech.tell(Artemis.charaktere.bronte, " Natürlich… Ähm ich glaube ich muss mir noch kurz die Haare richten. Maire würdest du mir helfen. ");
        await Artemis.ƒS.Character.hide(Artemis.charaktere.remington);
        await Artemis.ƒS.update(0.8);
        await Artemis.ƒS.Character.hide(Artemis.charaktere.maire);
        await Artemis.ƒS.Character.show(Artemis.charaktere.maire, Artemis.charaktere.maire.pose.embarrassed, Artemis.ƒS.positionPercent(Artemis.charaktere.maire.positionStandard.x, Artemis.charaktere.maire.positionStandard.y));
        await Artemis.ƒS.update(0.4);
        await Artemis.ƒS.Speech.tell(Artemis.charaktere.maire, " Bei deinen Haaren aber die sind doch- !!! Oh, natürlich! Wir sind gleich wieder da!");
        await Artemis.ƒS.Character.hide(Artemis.charaktere.maire);
        await Artemis.ƒS.Character.hide(Artemis.charaktere.bronte);
        await Artemis.ƒS.update(0.8);
        Artemis.dataForSave.interviewFinished = true;
        await Artemis.ƒS.Sound.fade(Artemis.sound.saloonAfterScrem, 0, 0.5, true);
        return "SceneNineEntryhall";
        async function graceBadEnding() {
            await Artemis.ƒS.Character.hide(Artemis.charaktere.bronte);
            await Artemis.ƒS.Character.hide(Artemis.charaktere.maire);
            await Artemis.ƒS.update(0.8);
            await Artemis.ƒS.Character.show(Artemis.charaktere.grace, Artemis.charaktere.grace.pose.happy, Artemis.ƒS.positionPercent(Artemis.charaktere.grace.positionLeftMiddle.x, Artemis.charaktere.grace.positionLeftMiddle.y));
            await Artemis.ƒS.update(0.8);
            await Artemis.ƒS.Speech.tell(Artemis.charaktere.grace, " Der Pudding ist da! Oh was verzieht ihr dann alle für Gesichter? ");
            await Artemis.ƒS.Character.hide(Artemis.charaktere.grace);
            await Artemis.ƒS.Character.show(Artemis.charaktere.grace, Artemis.charaktere.grace.pose.sad, Artemis.ƒS.positionPercent(Artemis.charaktere.grace.positionLeftMiddle.x, Artemis.charaktere.grace.positionLeftMiddle.y));
            await Artemis.ƒS.Character.show(Artemis.charaktere.alaistar, Artemis.charaktere.alaistar.pose.angry, Artemis.ƒS.positionPercent(Artemis.charaktere.alaistar.positionRightMiddle.x, Artemis.charaktere.alaistar.positionRightMiddle.y));
            await Artemis.ƒS.update(0.8);
            await Artemis.ƒS.Speech.tell(Artemis.charaktere.alaistar, " Ich glaube unsere Detektiv Gäste haben leider etwas die Stimmung runtergezogen mit ihren lästigen Fragen. ");
            await Artemis.ƒS.Character.hide(Artemis.charaktere.grace);
            await Artemis.ƒS.Character.show(Artemis.charaktere.grace, Artemis.charaktere.grace.pose.angry, Artemis.ƒS.positionPercent(Artemis.charaktere.grace.positionLeftMiddle.x, Artemis.charaktere.grace.positionLeftMiddle.y));
            await Artemis.ƒS.update(0.8);
            await Artemis.ƒS.Speech.tell(Artemis.charaktere.grace, " Ich bin sehr enttäuscht von Ihnen Miss Bronte! Ich hatte bessere Manieren von Ihnen erwartet. ");
            await Artemis.ƒS.Speech.tell(Artemis.charaktere.bronte, " Oh, dass- ");
            await Artemis.ƒS.Speech.tell(Artemis.charaktere.grace, " Nein, bitte gehen sie alle. Ich habe Kopfschmerzen.");
            await Artemis.ƒS.Character.hide(Artemis.charaktere.grace);
            await Artemis.ƒS.Character.hide(Artemis.charaktere.alaistar);
            await Artemis.ƒS.update(0.8);
            Artemis.ƒS.Sound.fade(Artemis.sound.saloonAfterScrem, 0, 1, true);
            await Artemis.ƒS.Character.hide(Artemis.charaktere.grace);
            await Artemis.ƒS.Character.hide(Artemis.charaktere.alaistar);
            await Artemis.ƒS.Location.show(Artemis.location.black);
            await Artemis.ƒS.update(3);
        }
    }
    Artemis.SceneEightBInterviews = SceneEightBInterviews;
})(Artemis || (Artemis = {}));
var Artemis;
(function (Artemis) {
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
        await Artemis.ƒS.Location.show(Artemis.location.saalon);
        await Artemis.ƒS.update(Artemis.transistions.standard.duration, "Asset/Transition/18.png", Artemis.transistions.standard.edge);
        await Artemis.ƒS.Sound.fade(Artemis.sound.saloonAfterScrem, 0.1, 0.2, true);
        await Artemis.ƒS.update(0.4);
        await Artemis.ƒS.Character.show(Artemis.charaktere.alaistar, Artemis.charaktere.alaistar.pose.neutral, Artemis.ƒS.positionPercent(Artemis.charaktere.alaistar.positionRightMiddle.x, Artemis.charaktere.alaistar.positionRightMiddle.y));
        await Artemis.ƒS.Character.show(Artemis.charaktere.grace, Artemis.charaktere.grace.pose.sad, Artemis.ƒS.positionPercent(Artemis.charaktere.grace.positionLeftMiddle.x, Artemis.charaktere.grace.positionLeftMiddle.y));
        await Artemis.ƒS.update(0.4);
        await Artemis.ƒS.Character.show(Artemis.charaktere.maire, Artemis.charaktere.maire.pose.fear, Artemis.ƒS.positionPercent(Artemis.charaktere.maire.positionStandard.x, Artemis.charaktere.maire.positionStandard.y));
        await Artemis.ƒS.Character.show(Artemis.charaktere.bronte, Artemis.charaktere.bronte.pose.think, Artemis.ƒS.positionPercent(Artemis.charaktere.bronte.positionStandard.x, Artemis.charaktere.bronte.positionStandard.y));
        await Artemis.ƒS.update(0.8);
        await Artemis.ƒS.Speech.tell(Artemis.charaktere.alaistar, " Da kommen sie ja schon… ");
        await Artemis.ƒS.Speech.tell(Artemis.charaktere.bronte, " Was ist passiert? ");
        await Artemis.ƒS.Speech.tell(Artemis.charaktere.grace, " Ja uns geht es gut. Die gute Stella hat sich nur erschreckt. ");
        await Artemis.ƒS.Character.hide(Artemis.charaktere.alaistar);
        await Artemis.ƒS.Character.hide(Artemis.charaktere.grace);
        await Artemis.ƒS.Character.hide(Artemis.charaktere.bronte);
        await Artemis.ƒS.Character.hide(Artemis.charaktere.maire);
        await Artemis.ƒS.Character.show(Artemis.charaktere.stella, Artemis.charaktere.stella.pose.sad, Artemis.ƒS.positionPercent(Artemis.charaktere.stella.positionMiddle.x, Artemis.charaktere.stella.positionMiddle.y));
        await Artemis.ƒS.update(0.4);
        await Artemis.ƒS.Speech.tell(Artemis.charaktere.stella, " … ");
        await Artemis.ƒS.Character.hide(Artemis.charaktere.stella);
        await Artemis.ƒS.Character.show(Artemis.charaktere.alaistar, Artemis.charaktere.alaistar.pose.neutral, Artemis.ƒS.positionPercent(Artemis.charaktere.alaistar.positionRightMiddle.x, Artemis.charaktere.alaistar.positionRightMiddle.y));
        await Artemis.ƒS.Character.show(Artemis.charaktere.grace, Artemis.charaktere.grace.pose.sad, Artemis.ƒS.positionPercent(Artemis.charaktere.grace.positionLeftMiddle.x, Artemis.charaktere.grace.positionLeftMiddle.y));
        await Artemis.ƒS.Character.show(Artemis.charaktere.maire, Artemis.charaktere.maire.pose.fear, Artemis.ƒS.positionPercent(Artemis.charaktere.maire.positionStandard.x, Artemis.charaktere.maire.positionStandard.y));
        await Artemis.ƒS.Character.show(Artemis.charaktere.bronte, Artemis.charaktere.bronte.pose.think, Artemis.ƒS.positionPercent(Artemis.charaktere.bronte.positionStandard.x, Artemis.charaktere.bronte.positionStandard.y));
        await Artemis.ƒS.update(0.4);
        await Artemis.ƒS.Speech.tell(Artemis.charaktere.alaistar, " Sie hat wohl draußen einen Baum gesehen, der sie erschreckt hat oder so. Ein wenig hysterisch die Gute. ");
        await Artemis.ƒS.Character.hide(Artemis.charaktere.alaistar);
        await Artemis.ƒS.Character.hide(Artemis.charaktere.grace);
        await Artemis.ƒS.Character.hide(Artemis.charaktere.bronte);
        await Artemis.ƒS.Character.hide(Artemis.charaktere.maire);
        await Artemis.ƒS.Character.show(Artemis.charaktere.stella, Artemis.charaktere.stella.pose.sad, Artemis.ƒS.positionPercent(Artemis.charaktere.stella.positionMiddle.x, Artemis.charaktere.stella.positionMiddle.y));
        await Artemis.ƒS.update(0.4);
        await Artemis.ƒS.Speech.tell(Artemis.charaktere.stella, " … ");
        await Artemis.ƒS.Character.hide(Artemis.charaktere.stella);
        await Artemis.ƒS.Character.show(Artemis.charaktere.alaistar, Artemis.charaktere.alaistar.pose.neutral, Artemis.ƒS.positionPercent(Artemis.charaktere.alaistar.positionRightMiddle.x, Artemis.charaktere.alaistar.positionRightMiddle.y));
        await Artemis.ƒS.Character.show(Artemis.charaktere.grace, Artemis.charaktere.grace.pose.sad, Artemis.ƒS.positionPercent(Artemis.charaktere.grace.positionLeftMiddle.x, Artemis.charaktere.grace.positionLeftMiddle.y));
        await Artemis.ƒS.Character.show(Artemis.charaktere.maire, Artemis.charaktere.maire.pose.neutral, Artemis.ƒS.positionPercent(Artemis.charaktere.maire.positionStandard.x, Artemis.charaktere.maire.positionStandard.y));
        await Artemis.ƒS.Character.show(Artemis.charaktere.bronte, Artemis.charaktere.bronte.pose.sad, Artemis.ƒS.positionPercent(Artemis.charaktere.bronte.positionStandard.x, Artemis.charaktere.bronte.positionStandard.y));
        await Artemis.ƒS.update(0.4);
        await Artemis.ƒS.Speech.tell(Artemis.charaktere.alaistar, " Wie sind ihre „Ermittlungen“ vorangekommen. ");
        await Artemis.ƒS.Character.hide(Artemis.charaktere.bronte);
        await Artemis.ƒS.Character.show(Artemis.charaktere.bronte, Artemis.charaktere.bronte.pose.think, Artemis.ƒS.positionPercent(Artemis.charaktere.bronte.positionStandard.x, Artemis.charaktere.bronte.positionStandard.y));
        await Artemis.ƒS.update(0.4);
        await Artemis.ƒS.Speech.tell(Artemis.charaktere.bronte, "Gut. Wir haben ein Hinweis auf den Verbleib der Katze gefunden. Sie ist in");
        let userChooseWhathappendToCat = await Artemis.ƒS.Menu.getInput(chooseWhathappendToCat, "basicChoice");
        switch (userChooseWhathappendToCat) {
            case chooseWhathappendToCat.fellInWater:
                await Artemis.ƒS.Speech.tell(Artemis.charaktere.bronte, "Sie ist aufgrund der Dunkelheit vor dem Manor ins Wasser gefallen.");
                await wrongAssumptionBronteFirstChoice();
                await rightChoiceFirstChoice();
                break;
            case chooseWhathappendToCat.brokeIn:
                await Artemis.ƒS.Speech.tell(Artemis.charaktere.bronte, "Sie ist in die Gartenhütte eingebrochen!");
                await wrongAssumptionBronteFirstChoice();
                await rightChoiceFirstChoice();
                break;
            case chooseWhathappendToCat.closedIn:
                Artemis.dataForSave.pointDetectiv += 1;
                await rightChoiceFirstChoice();
                break;
        }
        let userChooseGiveCollar = await Artemis.ƒS.Menu.getInput(chooseGiveCollar, "basicChoice");
        switch (userChooseGiveCollar) {
            case chooseGiveCollar.yes:
                Artemis.deleteInventory(Artemis.inventory.collar.name);
                await Artemis.ƒS.Speech.tell(Artemis.charaktere.bronte, "Natürlich. Hier");
                await Artemis.ƒS.Character.hide(Artemis.charaktere.grace);
                await Artemis.ƒS.Character.show(Artemis.charaktere.grace, Artemis.charaktere.grace.pose.happy, Artemis.ƒS.positionPercent(Artemis.charaktere.grace.positionLeftMiddle.x, Artemis.charaktere.grace.positionLeftMiddle.y));
                await Artemis.ƒS.update(0.4);
                await Artemis.ƒS.Character.hide(Artemis.charaktere.bronte);
                await Artemis.ƒS.Character.show(Artemis.charaktere.bronte, Artemis.charaktere.bronte.pose.think, Artemis.ƒS.positionPercent(Artemis.charaktere.bronte.positionStandard.x, Artemis.charaktere.bronte.positionStandard.y));
                await Artemis.ƒS.update(0.4);
                await Artemis.ƒS.Speech.tell(Artemis.charaktere.bronte, "(Oh, wie glücklich sie darüber ist. Merkwürdig.");
                break;
            case chooseGiveCollar.no:
                await Artemis.ƒS.Character.hide(Artemis.charaktere.grace);
                await Artemis.ƒS.Character.show(Artemis.charaktere.grace, Artemis.charaktere.grace.pose.angry, Artemis.ƒS.positionPercent(Artemis.charaktere.grace.positionLeftMiddle.x, Artemis.charaktere.grace.positionLeftMiddle.y));
                await Artemis.ƒS.update(0.4);
                await Artemis.ƒS.Speech.tell(Artemis.charaktere.bronte, "Nein, es ist weiterhin Teil der Untersuchung");
                Artemis.dataForSave.pointAngryGrace += 1;
                await Artemis.ƒS.Speech.tell(Artemis.charaktere.grace, " Ja, aber ich hätte es wirklich gerne zurück!");
                await Artemis.ƒS.Speech.tell(Artemis.charaktere.alaistar, " Grace jetzt stell dich nicht so an, du bekommst es bestimmt noch rechtzeitig zurück. ");
                await Artemis.ƒS.Speech.tell(Artemis.charaktere.grace, " ... ");
                break;
        }
        await Artemis.ƒS.Character.hide(Artemis.charaktere.grace);
        await Artemis.ƒS.Character.hide(Artemis.charaktere.alaistar);
        await Artemis.ƒS.Character.show(Artemis.charaktere.isaac, Artemis.charaktere.isaac.pose.neutral, Artemis.ƒS.positionPercent(Artemis.charaktere.isaac.positionStandard.x, Artemis.charaktere.isaac.positionStandard.y));
        await Artemis.ƒS.update(0.4);
        await Artemis.ƒS.Speech.tell(Artemis.charaktere.isaac, "Aber wenn sie das Halsband gefunden haben, wo ist dann die Katze? ");
        await Artemis.ƒS.Character.hide(Artemis.charaktere.bronte);
        await Artemis.ƒS.Character.show(Artemis.charaktere.bronte, Artemis.charaktere.bronte.pose.happy, Artemis.ƒS.positionPercent(Artemis.charaktere.bronte.positionStandard.x, Artemis.charaktere.bronte.positionStandard.y));
        await Artemis.ƒS.update(0.4);
        await Artemis.ƒS.Speech.tell(Artemis.charaktere.bronte, "Ganz einfach:");
        let userChooseWhereIsCat = await Artemis.ƒS.Menu.getInput(chooseWhereIsCat, "basicChoice");
        switch (userChooseWhereIsCat) {
            case chooseWhereIsCat.catnapped:
                await Artemis.ƒS.Speech.tell(Artemis.charaktere.bronte, "Sie wurde entführt! ");
                await Artemis.ƒS.Character.hide(Artemis.charaktere.isaac);
                await Artemis.ƒS.Character.show(Artemis.charaktere.isaac, Artemis.charaktere.isaac.pose.neutral, Artemis.ƒS.positionPercent(Artemis.charaktere.isaac.positionStandard.x, Artemis.charaktere.isaac.positionStandard.y));
                await Artemis.ƒS.update(0.4);
                await Artemis.ƒS.Speech.tell(Artemis.charaktere.isaac, "Meinten sie nicht gerade, sie wäre eingesperrt worden? Klingt nicht nach einer Entführung für mich. ");
                await Artemis.ƒS.Character.hide(Artemis.charaktere.bronte);
                await Artemis.ƒS.Character.show(Artemis.charaktere.bronte, Artemis.charaktere.bronte.pose.sad, Artemis.ƒS.positionPercent(Artemis.charaktere.bronte.positionStandard.x, Artemis.charaktere.bronte.positionStandard.y));
                await Artemis.ƒS.update(0.4);
                await Artemis.ƒS.Speech.tell(Artemis.charaktere.bronte, " Oh äh… ich meinte...");
            //wichtig kein Break hier! soll anderen Dialog auslösen! 
            case chooseWhereIsCat.fleedThroughRoof:
                Artemis.dataForSave.pointDetectiv += 1;
                await Artemis.ƒS.Character.hide(Artemis.charaktere.bronte);
                await Artemis.ƒS.Character.show(Artemis.charaktere.bronte, Artemis.charaktere.bronte.pose.happy, Artemis.ƒS.positionPercent(Artemis.charaktere.bronte.positionStandard.x, Artemis.charaktere.bronte.positionStandard.y));
                await Artemis.ƒS.update(0.4);
                await Artemis.ƒS.Speech.tell(Artemis.charaktere.bronte, "Sie ist durch das Dach entkommen! Und dabei hat sie ihr Halsband verloren.");
                break;
        }
        await Artemis.ƒS.Character.hide(Artemis.charaktere.isaac);
        await Artemis.ƒS.Character.show(Artemis.charaktere.grace, Artemis.charaktere.grace.pose.think, Artemis.ƒS.positionPercent(Artemis.charaktere.grace.positionMiddle.x, Artemis.charaktere.grace.positionMiddle.y));
        await Artemis.ƒS.update(0.4);
        if (Artemis.dataForSave.pointDetectiv < 2) {
            await Artemis.ƒS.Speech.tell(Artemis.charaktere.grace, "Mhm… Ihren anderen Fall haben sie eleganter gelöst… Sie scheinen heute etwas verwirrt zu sein.");
        }
        if (Artemis.dataForSave.pointAngryMaire > 2) {
            await Artemis.ƒS.Speech.tell(Artemis.charaktere.maire, " Sie hat einen Punkt… ");
        }
        await Artemis.ƒS.Character.hide(Artemis.charaktere.grace);
        await Artemis.ƒS.Character.show(Artemis.charaktere.grace, Artemis.charaktere.grace.pose.laugh, Artemis.ƒS.positionPercent(Artemis.charaktere.grace.positionMiddle.x, Artemis.charaktere.grace.positionMiddle.y));
        await Artemis.ƒS.update(0.4);
        await Artemis.ƒS.Speech.tell(Artemis.charaktere.grace, " Aber ich denke sie haben Recht. Artemis wird bestimmt bald wieder auftauchen. Wir müssen einfach etwas vorsichtiger mit ihr sein. Danke für ihre Investigation. ");
        await Artemis.ƒS.Character.hide(Artemis.charaktere.grace);
        await Artemis.ƒS.Character.show(Artemis.charaktere.grace, Artemis.charaktere.grace.pose.happy, Artemis.ƒS.positionPercent(Artemis.charaktere.grace.positionMiddle.x, Artemis.charaktere.grace.positionMiddle.y));
        await Artemis.ƒS.Character.hide(Artemis.charaktere.bronte);
        await Artemis.ƒS.Character.show(Artemis.charaktere.bronte, Artemis.charaktere.bronte.pose.shout, Artemis.ƒS.positionPercent(Artemis.charaktere.bronte.positionStandard.x, Artemis.charaktere.bronte.positionStandard.y));
        await Artemis.ƒS.update(0.4);
        await Artemis.ƒS.Speech.tell(Artemis.charaktere.bronte, " … Äh? Ich werde natürlich erst aufhören, wenn Artemis wieder sicher da ist. ");
        await Artemis.ƒS.Speech.tell(Artemis.charaktere.grace, " Oh, ich denke das ist nicht notwendig… ");
        await Artemis.ƒS.Character.hide(Artemis.charaktere.bronte);
        await Artemis.ƒS.Character.hide(Artemis.charaktere.maire);
        await Artemis.ƒS.Character.show(Artemis.charaktere.maire, Artemis.charaktere.maire.pose.fear, Artemis.ƒS.positionPercent(Artemis.charaktere.maire.positionStandard.x, Artemis.charaktere.maire.positionStandard.y));
        await Artemis.ƒS.Character.show(Artemis.charaktere.bronte, Artemis.charaktere.bronte.pose.think, Artemis.ƒS.positionPercent(Artemis.charaktere.bronte.positionStandard.x, Artemis.charaktere.bronte.positionStandard.y));
        await Artemis.ƒS.update(0.4);
        await Artemis.ƒS.Speech.tell(Artemis.charaktere.bronte, " Aber… Sind sie sicher? ");
        await Artemis.ƒS.Character.hide(Artemis.charaktere.grace);
        await Artemis.ƒS.Character.show(Artemis.charaktere.grace, Artemis.charaktere.grace.pose.laugh, Artemis.ƒS.positionPercent(Artemis.charaktere.grace.positionMiddle.x, Artemis.charaktere.grace.positionMiddle.y));
        await Artemis.ƒS.update(0.4);
        await Artemis.ƒS.Speech.tell(Artemis.charaktere.grace, " Ja natürlich. Ich meine sie ist nur eine Katze. Sie wird schon wissen was sie tut. Lassen sie uns den Abend dadurch nicht vermasseln. ");
        await Artemis.ƒS.Character.hide(Artemis.charaktere.grace);
        await Artemis.ƒS.Character.hide(Artemis.charaktere.maire);
        await Artemis.ƒS.Character.show(Artemis.charaktere.maire, Artemis.charaktere.maire.pose.neutral, Artemis.ƒS.positionPercent(Artemis.charaktere.maire.positionStandard.x, Artemis.charaktere.maire.positionStandard.y));
        await Artemis.ƒS.Character.show(Artemis.charaktere.grace, Artemis.charaktere.grace.pose.happy, Artemis.ƒS.positionPercent(Artemis.charaktere.grace.positionMiddle.x, Artemis.charaktere.grace.positionMiddle.y));
        await Artemis.ƒS.update(0.4);
        await Artemis.ƒS.Speech.tell(Artemis.charaktere.bronte, " Wenn das ihr Wunsch ist. ");
        await Artemis.ƒS.Character.hide(Artemis.charaktere.maire);
        await Artemis.ƒS.Character.show(Artemis.charaktere.maire, Artemis.charaktere.maire.pose.sad, Artemis.ƒS.positionPercent(Artemis.charaktere.maire.positionStandard.x, Artemis.charaktere.maire.positionStandard.y));
        await Artemis.ƒS.update(0.4);
        await Artemis.ƒS.Speech.tell(Artemis.charaktere.maire, " (… nur eine Katze? Sie hatte vorhin fast einen Nervenzusammenbruch.) ");
        await Artemis.ƒS.Speech.tell(Artemis.charaktere.grace, " Perfekt. Ich lasse mal den Nachtisch holen! ");
        await Artemis.ƒS.Character.hide(Artemis.charaktere.grace);
        await Artemis.ƒS.update(0.8);
        await Artemis.ƒS.Character.hide(Artemis.charaktere.maire);
        await Artemis.ƒS.Character.show(Artemis.charaktere.maire, Artemis.charaktere.maire.pose.neutral, Artemis.ƒS.positionPercent(Artemis.charaktere.maire.positionStandard.x, Artemis.charaktere.maire.positionStandard.y));
        await Artemis.ƒS.update(0.4);
        await Artemis.ƒS.Speech.tell(Artemis.charaktere.maire, " Das war… ");
        await Artemis.ƒS.Speech.tell(Artemis.charaktere.bronte, " Merkwürdig. ");
        await Artemis.ƒS.Character.hide(Artemis.charaktere.bronte);
        await Artemis.ƒS.Character.show(Artemis.charaktere.bronte, Artemis.charaktere.bronte.pose.sad, Artemis.ƒS.positionPercent(Artemis.charaktere.bronte.positionStandard.x, Artemis.charaktere.bronte.positionStandard.y));
        await Artemis.ƒS.update(0.4);
        await Artemis.ƒS.Speech.tell(Artemis.charaktere.maire, " Und wie. ");
        await Artemis.ƒS.Character.hide(Artemis.charaktere.bronte);
        await Artemis.ƒS.Character.show(Artemis.charaktere.bronte, Artemis.charaktere.bronte.pose.think, Artemis.ƒS.positionPercent(Artemis.charaktere.bronte.positionStandard.x, Artemis.charaktere.bronte.positionStandard.y));
        await Artemis.ƒS.update(0.4);
        await Artemis.ƒS.Speech.tell(Artemis.charaktere.bronte, " Irgendwas stimmt hier doch nicht… Die Katze wurde eingesperrt aber Lady Grace scheint gar nicht daran interessiert zu sein.");
        await Artemis.ƒS.Speech.tell(Artemis.charaktere.bronte, " Oder um das Wohlbehagen von Artemis, obwohl sie vorhin so besorgt um sie war. ");
        await Artemis.ƒS.Speech.tell(Artemis.charaktere.maire, " Mhm… und sie will nicht, dass wir weiter investigieren. Was machen wir jetzt?");
        let userChooseWhatDoAfterExplainingCat = await Artemis.ƒS.Menu.getInput(chooseWhatDoAfterExplainingCat, "basicChoice");
        switch (userChooseWhatDoAfterExplainingCat) {
            case chooseWhatDoAfterExplainingCat.stop:
                await Artemis.ƒS.Character.hide(Artemis.charaktere.bronte);
                await Artemis.ƒS.Character.show(Artemis.charaktere.bronte, Artemis.charaktere.bronte.pose.happy, Artemis.ƒS.positionPercent(Artemis.charaktere.bronte.positionStandard.x, Artemis.charaktere.bronte.positionStandard.y));
                await Artemis.ƒS.update(0.4);
                await Artemis.ƒS.Speech.tell(Artemis.charaktere.bronte, " Wir sollten aufhören. ");
                await Artemis.ƒS.Character.hide(Artemis.charaktere.maire);
                await Artemis.ƒS.Character.show(Artemis.charaktere.maire, Artemis.charaktere.maire.pose.fear, Artemis.ƒS.positionPercent(Artemis.charaktere.maire.positionStandard.x, Artemis.charaktere.maire.positionStandard.y));
                await Artemis.ƒS.update(0.4);
                await Artemis.ƒS.Speech.tell(Artemis.charaktere.maire, " WAS!? Das kann nicht dein Ernst sein! ");
                await Artemis.ƒS.Character.hide(Artemis.charaktere.bronte);
                await Artemis.ƒS.Character.show(Artemis.charaktere.bronte, Artemis.charaktere.bronte.pose.think, Artemis.ƒS.positionPercent(Artemis.charaktere.bronte.positionStandard.x, Artemis.charaktere.bronte.positionStandard.y));
                await Artemis.ƒS.update(0.4);
                await Artemis.ƒS.Speech.tell(Artemis.charaktere.bronte, " Mhm… vielleicht lieber nicht. ");
                await Artemis.ƒS.Character.hide(Artemis.charaktere.maire);
                await Artemis.ƒS.Character.show(Artemis.charaktere.maire, Artemis.charaktere.maire.pose.neutral, Artemis.ƒS.positionPercent(Artemis.charaktere.maire.positionStandard.x, Artemis.charaktere.maire.positionStandard.y));
                await Artemis.ƒS.update(0.4);
                await Artemis.ƒS.Speech.tell(Artemis.charaktere.maire, " Wir sollten auf jeden Fall weitermachen!");
                break;
            case chooseWhatDoAfterExplainingCat.continue:
                await Artemis.ƒS.Character.hide(Artemis.charaktere.bronte);
                await Artemis.ƒS.Character.show(Artemis.charaktere.bronte, Artemis.charaktere.bronte.pose.happy, Artemis.ƒS.positionPercent(Artemis.charaktere.bronte.positionStandard.x, Artemis.charaktere.bronte.positionStandard.y));
                await Artemis.ƒS.update(0.4);
                await Artemis.ƒS.Speech.tell(Artemis.charaktere.bronte, " Wir sollten weiter investigieren. Nur ein wenig vorsichtiger. ");
                await Artemis.ƒS.Speech.tell(Artemis.charaktere.maire, " Wir können damit anfangen die Gäste zu befragen und uns ein wenig umsehen! ");
                await Artemis.ƒS.Character.hide(Artemis.charaktere.bronte);
                await Artemis.ƒS.Character.show(Artemis.charaktere.bronte, Artemis.charaktere.bronte.pose.laugh, Artemis.ƒS.positionPercent(Artemis.charaktere.bronte.positionStandard.x, Artemis.charaktere.bronte.positionStandard.y));
                await Artemis.ƒS.update(0.4);
                await Artemis.ƒS.Speech.tell(Artemis.charaktere.bronte, " Gute Idee! Wir müssen nur vorsichtig sein. Lass uns anfangen mit:");
                break;
        }
        Artemis.dataForSave.stellaScreamFinished = true;
        return "SceneEightBInterviews";
        //Fehlerdialog Auswahl chooseWhathappendToCat
        async function wrongAssumptionBronteFirstChoice() {
            await Artemis.ƒS.Character.hide(Artemis.charaktere.alaistar);
            await Artemis.ƒS.Character.hide(Artemis.charaktere.bronte);
            await Artemis.ƒS.Character.show(Artemis.charaktere.bronte, Artemis.charaktere.bronte.pose.sad, Artemis.ƒS.positionPercent(Artemis.charaktere.bronte.positionStandard.x, Artemis.charaktere.bronte.positionStandard.y));
            await Artemis.ƒS.Character.show(Artemis.charaktere.alaistar, Artemis.charaktere.alaistar.pose.angry, Artemis.ƒS.positionPercent(Artemis.charaktere.alaistar.positionRightMiddle.x, Artemis.charaktere.alaistar.positionRightMiddle.y));
            await Artemis.ƒS.update(0.4);
            await Artemis.ƒS.Speech.tell(Artemis.charaktere.alaistar, " … Das ist ein Witz, richtig? ");
            await Artemis.ƒS.Character.hide(Artemis.charaktere.maire);
            await Artemis.ƒS.Character.show(Artemis.charaktere.maire, Artemis.charaktere.maire.pose.embarrassed, Artemis.ƒS.positionPercent(Artemis.charaktere.maire.positionStandard.x, Artemis.charaktere.maire.positionStandard.y));
            await Artemis.ƒS.update(0.4);
            await Artemis.ƒS.Speech.tell(Artemis.charaktere.maire, " Oh ja… Bronte erzähl was wirklich passiert ist du Scherzkeks.");
        }
        async function rightChoiceFirstChoice() {
            await Artemis.ƒS.Character.hide(Artemis.charaktere.alaistar);
            await Artemis.ƒS.Character.hide(Artemis.charaktere.bronte);
            await Artemis.ƒS.Character.hide(Artemis.charaktere.maire);
            await Artemis.ƒS.Character.show(Artemis.charaktere.maire, Artemis.charaktere.maire.pose.neutral, Artemis.ƒS.positionPercent(Artemis.charaktere.maire.positionStandard.x, Artemis.charaktere.maire.positionStandard.y));
            await Artemis.ƒS.Character.show(Artemis.charaktere.bronte, Artemis.charaktere.bronte.pose.happy, Artemis.ƒS.positionPercent(Artemis.charaktere.bronte.positionStandard.x, Artemis.charaktere.bronte.positionStandard.y));
            await Artemis.ƒS.Character.show(Artemis.charaktere.alaistar, Artemis.charaktere.alaistar.pose.neutral, Artemis.ƒS.positionPercent(Artemis.charaktere.alaistar.positionRightMiddle.x, Artemis.charaktere.alaistar.positionRightMiddle.y));
            await Artemis.ƒS.update(0.4);
            await Artemis.ƒS.Speech.tell(Artemis.charaktere.bronte, "Es sieht ganz so aus als hätte jemand die in die Hütte eingesperrt. Wir haben die Säule weggeschoben, aber in der Hütte war nur noch das Halsband. ");
            await Artemis.ƒS.Character.hide(Artemis.charaktere.grace);
            await Artemis.ƒS.Character.show(Artemis.charaktere.grace, Artemis.charaktere.grace.pose.happy, Artemis.ƒS.positionPercent(Artemis.charaktere.grace.positionLeftMiddle.x, Artemis.charaktere.grace.positionLeftMiddle.y));
            await Artemis.ƒS.Speech.tell(Artemis.charaktere.grace, " Ooooh... kann ich es wiederhaben?");
        }
    }
    Artemis.SceneEightSaalonInterview = SceneEightSaalonInterview;
})(Artemis || (Artemis = {}));
var Artemis;
(function (Artemis) {
    async function SceneElevenStudy() {
        let chooseHide = {
            hide: "Verstecken",
            greet: "Begrüßen",
            gun: ""
        };
        if (Artemis.dataForSave.tookGun) {
            chooseHide.gun = "Waffe ziehen";
        }
        let chooseContinueHide = {
            continue: "Weiterverstecken",
            show: "Herauskommen"
        };
        let countDialogAlreadyDid = 0;
        let chooseKnow = {
            cat: "Wo ist Artemis?",
            ghosting: "Warum 'herumgegeister'",
            whyhere: "Warum hier?",
            whyNotDead: "Warum nicht tot?"
        };
        let chooseWhoHideTestament = {
            isaac: "Isaac",
            grace: "Grace",
            stella: "Stella",
            alaistar: "Alaistar"
        };
        let chooseSomethingThatHelps = {
            yes: "Ja",
            no: "Nein"
        };
        let chooseFromInventory = {
            ring: "Ring",
            gun: "",
            collar: ""
        };
        if (Artemis.ƒS.Inventory.getAmount(Artemis.inventory.collar)) {
            chooseFromInventory.collar = "Halsband";
        }
        if (Artemis.ƒS.Inventory.getAmount(Artemis.inventory.pistol)) {
            chooseFromInventory.gun = "Pistole";
        }
        await Artemis.ƒS.Sound.fade(Artemis.sound.study, 0.1, 0.2, true);
        await Artemis.ƒS.Location.show(Artemis.location.studyroom);
        await Artemis.ƒS.update(Artemis.transistions.standard.duration, Artemis.transistions.standard.alpha, Artemis.transistions.standard.edge);
        await Artemis.ƒS.update();
        await Artemis.ƒS.Character.show(Artemis.charaktere.bronte, Artemis.charaktere.bronte.pose.shout, Artemis.ƒS.positionPercent(Artemis.charaktere.bronte.positionStandard.x, Artemis.charaktere.bronte.positionStandard.y));
        await Artemis.ƒS.update(1);
        await Artemis.ƒS.Speech.tell(Artemis.charaktere.bronte, " Okay. Wow… diese Einrichtung ist eine… Entscheidung. ");
        await Artemis.ƒS.Character.hide(Artemis.charaktere.bronte);
        await Artemis.ƒS.Character.show(Artemis.charaktere.bronte, Artemis.charaktere.bronte.pose.think, Artemis.ƒS.positionPercent(Artemis.charaktere.bronte.positionStandard.x, Artemis.charaktere.bronte.positionStandard.y));
        await Artemis.ƒS.update(0.4);
        await Artemis.ƒS.Speech.tell(Artemis.charaktere.bronte, " Nicht sonderlich viel hier. ");
        await Artemis.ƒS.Speech.tell(Artemis.charaktere.bronte, " Ein Bücherregal an der Wand. Ein Sessel, ein Tisch und ein Fenster. Wo soll ich nur anfangen. ");
        await Artemis.ƒS.Location.show(Artemis.location.studyroomWindow);
        await Artemis.ƒS.Character.hide(Artemis.charaktere.bronte);
        await Artemis.ƒS.Character.show(Artemis.charaktere.bronte, Artemis.charaktere.bronte.pose.shout, Artemis.ƒS.positionPercent(Artemis.charaktere.bronte.positionStandard.x, Artemis.charaktere.bronte.positionStandard.y));
        await Artemis.ƒS.update(0.4);
        await Artemis.ƒS.Speech.tell(Artemis.charaktere.bronte, " Oh. Was ist das? Das Fenster ist aufgegangen. ");
        await Artemis.ƒS.Speech.tell(Artemis.charaktere.bronte, " !!! ");
        await Artemis.ƒS.Speech.tell(Artemis.charaktere.bronte, " Jemand kommt durch Fenster?! Was soll ich tun?");
        let userchooseHide = await Artemis.ƒS.Menu.getInput(chooseHide, "basicChoice");
        switch (userchooseHide) {
            case chooseHide.greet:
                await Artemis.ƒS.Character.hide(Artemis.charaktere.bronte);
                await Artemis.ƒS.Character.show(Artemis.charaktere.bronte, Artemis.charaktere.bronte.pose.think, Artemis.ƒS.positionPercent(Artemis.charaktere.bronte.positionStandard.x, Artemis.charaktere.bronte.positionStandard.y));
                await Artemis.ƒS.update(0.4);
                await Artemis.ƒS.Character.show(Artemis.charaktere.odette, Artemis.charaktere.odette.pose.shadow, Artemis.ƒS.positionPercent(Artemis.charaktere.odette.positionStandard.x, Artemis.charaktere.odette.positionStandard.y));
                await Artemis.ƒS.update(1);
                await Artemis.ƒS.Speech.tell(Artemis.charaktere.bronte, " Hallo? ");
                await Artemis.ƒS.Speech.tell(Artemis.charaktere.shadow, " !!! ");
                await Artemis.ƒS.Character.hide(Artemis.charaktere.bronte);
                await Artemis.ƒS.Character.show(Artemis.charaktere.bronte, Artemis.charaktere.bronte.pose.shout, Artemis.ƒS.positionPercent(Artemis.charaktere.bronte.positionStandard.x, Artemis.charaktere.bronte.positionStandard.y));
                await Artemis.ƒS.update(0.4);
                await Artemis.ƒS.Speech.tell(Artemis.charaktere.shadow, " Wer… wer ist da?");
                break;
            case chooseHide.gun:
                await Artemis.ƒS.Character.hide(Artemis.charaktere.bronte);
                await Artemis.ƒS.Character.show(Artemis.charaktere.bronte, Artemis.charaktere.bronte.pose.angry, Artemis.ƒS.positionPercent(Artemis.charaktere.bronte.positionStandard.x, Artemis.charaktere.bronte.positionStandard.y));
                await Artemis.ƒS.update(0.4);
                await Artemis.ƒS.Character.show(Artemis.charaktere.odette, Artemis.charaktere.odette.pose.shadow, Artemis.ƒS.positionPercent(Artemis.charaktere.odette.positionStandard.x, Artemis.charaktere.odette.positionStandard.y));
                await Artemis.ƒS.update(1);
                await Artemis.ƒS.Speech.tell(Artemis.charaktere.bronte, " Ich bin bewaffnet. Keine Falsche Bewegung. ");
                await Artemis.ƒS.Speech.tell(Artemis.charaktere.shadow, " !!! ");
                await Artemis.ƒS.Speech.tell(Artemis.charaktere.shadow, " Bitte schieß nicht. Ich bin nicht bewaffnet. ");
                await Artemis.ƒS.Character.hide(Artemis.charaktere.bronte);
                await Artemis.ƒS.Character.show(Artemis.charaktere.bronte, Artemis.charaktere.bronte.pose.think, Artemis.ƒS.positionPercent(Artemis.charaktere.bronte.positionStandard.x, Artemis.charaktere.bronte.positionStandard.y));
                await Artemis.ƒS.update(0.4);
                await Artemis.ƒS.Speech.tell(Artemis.charaktere.bronte, " Okay… aber komm aus den Schatten heraus, dann lasse ich die Waffe sinken. ");
                await Artemis.ƒS.Speech.tell(Artemis.charaktere.shadow, " Okay. Hier. Bitte steck den Revolver weg. Ich tu nichts. ");
                await Artemis.ƒS.Speech.tell(Artemis.charaktere.bronte, " Okay… ");
                await Artemis.ƒS.Speech.tell(Artemis.charaktere.shadow, " Wer… wer bist du?");
                break;
            case chooseHide.hide:
                await Artemis.ƒS.Character.hide(Artemis.charaktere.bronte);
                await Artemis.ƒS.update(1);
                await Artemis.ƒS.Character.show(Artemis.charaktere.odette, Artemis.charaktere.odette.pose.shadow, Artemis.ƒS.positionPercent(Artemis.charaktere.odette.positionStandard.x, Artemis.charaktere.odette.positionStandard.y));
                await Artemis.ƒS.update(1);
                await Artemis.ƒS.Speech.tell(Artemis.charaktere.shadow, " Mhm… Ich verstehe das nicht. Er muss es geändert haben. ");
                await Artemis.ƒS.Speech.tell(Artemis.charaktere.bronte, " (Die Gestalt ist am Bücherregal. Sie packt Bücher zu Seite und… Oh ist das etwas ein-)  ");
                // todo: Lautes Geräusch
                await Artemis.ƒS.Speech.tell(Artemis.charaktere.bronte, " !!! ");
                await Artemis.ƒS.Speech.tell(Artemis.charaktere.shadow, " … ");
                await Artemis.ƒS.Speech.tell(Artemis.charaktere.shadow, " Hallo? ");
                await Artemis.ƒS.Speech.tell(Artemis.charaktere.shadow, " Stella?");
                let userchooseContinueHide = await Artemis.ƒS.Menu.getInput(chooseContinueHide, "basicChoice");
                switch (userchooseContinueHide) {
                    case chooseContinueHide.continue:
                        await Artemis.ƒS.Speech.tell(Artemis.charaktere.bronte, " … ");
                        await Artemis.ƒS.Speech.tell(Artemis.charaktere.shadow, " … ");
                        await Artemis.ƒS.Speech.tell(Artemis.charaktere.bronte, " … ");
                        await Artemis.ƒS.Character.hide(Artemis.charaktere.bronte);
                        await Artemis.ƒS.Character.show(Artemis.charaktere.bronte, Artemis.charaktere.bronte.pose.shout, Artemis.ƒS.positionPercent(Artemis.charaktere.bronte.positionStandard.x, Artemis.charaktere.bronte.positionStandard.y));
                        await Artemis.ƒS.update(1);
                        await Artemis.ƒS.Speech.tell(Artemis.charaktere.shadow, "  Wer bist du?");
                        break;
                    case chooseContinueHide.show:
                        await Artemis.ƒS.Character.hide(Artemis.charaktere.bronte);
                        await Artemis.ƒS.Character.show(Artemis.charaktere.bronte, Artemis.charaktere.bronte.pose.think, Artemis.ƒS.positionPercent(Artemis.charaktere.bronte.positionStandard.x, Artemis.charaktere.bronte.positionStandard.y));
                        await Artemis.ƒS.update(0.4);
                        await Artemis.ƒS.Speech.tell(Artemis.charaktere.bronte, " Nein. Aber es wundert mich doch, dass Stella in all dies verwickelt ist. ");
                        await Artemis.ƒS.Speech.tell(Artemis.charaktere.shadow, " !!! ");
                        await Artemis.ƒS.Speech.tell(Artemis.charaktere.shadow, " Wer… Wer bist du?");
                        break;
                }
                break;
        }
        await Artemis.ƒS.Character.hide(Artemis.charaktere.bronte);
        await Artemis.ƒS.Character.show(Artemis.charaktere.bronte, Artemis.charaktere.bronte.pose.happy, Artemis.ƒS.positionPercent(Artemis.charaktere.bronte.positionStandard.x, Artemis.charaktere.bronte.positionStandard.y));
        await Artemis.ƒS.update(0.4);
        await Artemis.ƒS.Speech.tell(Artemis.charaktere.bronte, " Ich bin Bronte. Ein Gast des Hauses Blackburn und wie es scheint auch Geisterjägerin. Wenn ich mich nicht irre dann sind Sie- ");
        await Artemis.ƒS.Character.hide(Artemis.charaktere.odette);
        await Artemis.ƒS.Character.show(Artemis.charaktere.odette, Artemis.charaktere.odette.pose.angry, Artemis.ƒS.positionPercent(Artemis.charaktere.odette.positionStandard.x, Artemis.charaktere.odette.positionStandard.y));
        await Artemis.ƒS.update(1);
        await Artemis.ƒS.Speech.tell(Artemis.charaktere.bronte, " Odette Blackburn. ");
        await Artemis.ƒS.Character.hide(Artemis.charaktere.bronte);
        await Artemis.ƒS.Character.show(Artemis.charaktere.bronte, Artemis.charaktere.bronte.pose.think, Artemis.ƒS.positionPercent(Artemis.charaktere.bronte.positionStandard.x, Artemis.charaktere.bronte.positionStandard.y));
        await Artemis.ƒS.update(0.4);
        await Artemis.ƒS.Speech.tell(Artemis.charaktere.bronte, " Verstorben vor einer ganzen Weile wenn ich mich richtig erinnere. ");
        await Artemis.ƒS.Character.hide(Artemis.charaktere.odette);
        await Artemis.ƒS.Character.show(Artemis.charaktere.odette, Artemis.charaktere.odette.pose.scream, Artemis.ƒS.positionPercent(Artemis.charaktere.odette.positionStandard.x, Artemis.charaktere.odette.positionStandard.y));
        await Artemis.ƒS.update(0.4);
        await Artemis.ƒS.Speech.tell(Artemis.charaktere.odette, " !!! ");
        await Artemis.ƒS.Character.hide(Artemis.charaktere.bronte);
        await Artemis.ƒS.Character.show(Artemis.charaktere.bronte, Artemis.charaktere.bronte.pose.angry, Artemis.ƒS.positionPercent(Artemis.charaktere.bronte.positionStandard.x, Artemis.charaktere.bronte.positionStandard.y));
        await Artemis.ƒS.update(0.4);
        await Artemis.ƒS.Speech.tell(Artemis.charaktere.bronte, " Und sie haben der guten Stella einen ganz schön bösen Streich gespielt, oder ist sie etwa Teil dieses Spieles? Sie muss noch sehr jung gewesen sein, als Sie angeblich in der Themse verschwunden sind. ");
        await Artemis.ƒS.Character.hide(Artemis.charaktere.odette);
        await Artemis.ƒS.Character.show(Artemis.charaktere.odette, Artemis.charaktere.odette.pose.sad, Artemis.ƒS.positionPercent(Artemis.charaktere.odette.positionStandard.x, Artemis.charaktere.odette.positionStandard.y));
        await Artemis.ƒS.update(0.4);
        await Artemis.ƒS.Speech.tell(Artemis.charaktere.odette, " Ich… oh… Nein, Stella hat nichts mit all dem zu tun. ");
        await Artemis.ƒS.Character.hide(Artemis.charaktere.bronte);
        await Artemis.ƒS.Character.show(Artemis.charaktere.bronte, Artemis.charaktere.bronte.pose.think, Artemis.ƒS.positionPercent(Artemis.charaktere.bronte.positionStandard.x, Artemis.charaktere.bronte.positionStandard.y));
        await Artemis.ƒS.update(0.4);
        await Artemis.ƒS.Speech.tell(Artemis.charaktere.bronte, " Und Isaac? Warum schleichen sie um das Haus, wenn ihr Ehemann doch auch so Einlass in das Haus bekommt. ");
        await Artemis.ƒS.Character.hide(Artemis.charaktere.bronte);
        await Artemis.ƒS.Character.show(Artemis.charaktere.bronte, Artemis.charaktere.bronte.pose.sad, Artemis.ƒS.positionPercent(Artemis.charaktere.bronte.positionStandard.x, Artemis.charaktere.bronte.positionStandard.y));
        await Artemis.ƒS.Character.hide(Artemis.charaktere.odette);
        await Artemis.ƒS.Character.show(Artemis.charaktere.odette, Artemis.charaktere.odette.pose.think, Artemis.ƒS.positionPercent(Artemis.charaktere.odette.positionStandard.x, Artemis.charaktere.odette.positionStandard.y));
        await Artemis.ƒS.update(0.4);
        await Artemis.ƒS.Speech.tell(Artemis.charaktere.odette, " Isaac… Er… Oh… Bitte Sie müssen mir helfen. Sie sind eine Detektivin oder nicht? Ich habe ihr Bild vor einiger Zeit in der Zeitung gesehen. ");
        await Artemis.ƒS.Character.hide(Artemis.charaktere.bronte);
        await Artemis.ƒS.Character.show(Artemis.charaktere.bronte, Artemis.charaktere.bronte.pose.think, Artemis.ƒS.positionPercent(Artemis.charaktere.bronte.positionStandard.x, Artemis.charaktere.bronte.positionStandard.y));
        await Artemis.ƒS.update(0.4);
        await Artemis.ƒS.Speech.tell(Artemis.charaktere.bronte, " Dieser Fall wird immer seltsamer… ");
        await Artemis.ƒS.Speech.tell(Artemis.charaktere.bronte, " Ich muss gestehen, dass ich den Fall immer noch nicht komplett begreife. Wenn Sie mir helfen können, Klarheit zu schaffen, dann verspreche ich zumindest darüber nachzudenken Ihnen zu helfen. ");
        await Artemis.ƒS.Character.hide(Artemis.charaktere.odette);
        await Artemis.ƒS.Character.show(Artemis.charaktere.odette, Artemis.charaktere.odette.pose.angry, Artemis.ƒS.positionPercent(Artemis.charaktere.odette.positionStandard.x, Artemis.charaktere.odette.positionStandard.y));
        await Artemis.ƒS.update(0.4);
        await Artemis.ƒS.Speech.tell(Artemis.charaktere.odette, " Dass muss mir wohl erst einmal genügen. ");
        await Artemis.ƒS.Character.hide(Artemis.charaktere.odette);
        await Artemis.ƒS.Character.show(Artemis.charaktere.odette, Artemis.charaktere.odette.pose.think, Artemis.ƒS.positionPercent(Artemis.charaktere.odette.positionStandard.x, Artemis.charaktere.odette.positionStandard.y));
        await Artemis.ƒS.update(0.4);
        await Artemis.ƒS.Speech.tell(Artemis.charaktere.odette, " Was wollen sie wissen?");
        while (countDialogAlreadyDid != 4) {
            let userchooseKnow = await Artemis.ƒS.Menu.getInput(chooseKnow, "basicChoice");
            switch (userchooseKnow) {
                case chooseKnow.cat:
                    await Artemis.ƒS.Character.hide(Artemis.charaktere.bronte);
                    await Artemis.ƒS.Character.show(Artemis.charaktere.bronte, Artemis.charaktere.bronte.pose.sad, Artemis.ƒS.positionPercent(Artemis.charaktere.bronte.positionStandard.x, Artemis.charaktere.bronte.positionStandard.y));
                    await Artemis.ƒS.update(0.4);
                    await Artemis.ƒS.Speech.tell(Artemis.charaktere.bronte, " Nun wo ist Artemis? Ich nehme an sie haben die Katze in den Schuppen gesperrt? ");
                    await Artemis.ƒS.Character.hide(Artemis.charaktere.odette);
                    await Artemis.ƒS.Character.show(Artemis.charaktere.odette, Artemis.charaktere.odette.pose.sad, Artemis.ƒS.positionPercent(Artemis.charaktere.odette.positionStandard.x, Artemis.charaktere.odette.positionStandard.y));
                    await Artemis.ƒS.update(0.4);
                    await Artemis.ƒS.Speech.tell(Artemis.charaktere.odette, " Oh ja, das war leider ich. Die gute Seele hat mich wiedererkannt. Kam auf mich zustürzt und hat nicht aufgehört zu Miauen. Da habe ich sie in den Schuppen gesperrt. ");
                    await Artemis.ƒS.Character.hide(Artemis.charaktere.bronte);
                    await Artemis.ƒS.Character.show(Artemis.charaktere.bronte, Artemis.charaktere.bronte.pose.think, Artemis.ƒS.positionPercent(Artemis.charaktere.bronte.positionStandard.x, Artemis.charaktere.bronte.positionStandard.y));
                    await Artemis.ƒS.update(0.4);
                    await Artemis.ƒS.Speech.tell(Artemis.charaktere.bronte, " Aber wie kam Artemis aus dem Arbeitszimmer? ");
                    await Artemis.ƒS.Character.hide(Artemis.charaktere.odette);
                    await Artemis.ƒS.Character.show(Artemis.charaktere.odette, Artemis.charaktere.odette.pose.think, Artemis.ƒS.positionPercent(Artemis.charaktere.odette.positionStandard.x, Artemis.charaktere.odette.positionStandard.y));
                    await Artemis.ƒS.update(0.4);
                    await Artemis.ƒS.Speech.tell(Artemis.charaktere.odette, " Oh, ich habe versucht über das Fenster hereinzukommen, wurde aber von Remington gestört, der sauber gemacht hat. ");
                    await Artemis.ƒS.Speech.tell(Artemis.charaktere.odette, " Ich habe die Flucht ergriffen bevor er mich sah, aber dabei das Fenster vergessen und Artemis ist mir gefolgt. ");
                    await Artemis.ƒS.Character.hide(Artemis.charaktere.odette);
                    await Artemis.ƒS.Character.show(Artemis.charaktere.odette, Artemis.charaktere.odette.pose.sad, Artemis.ƒS.positionPercent(Artemis.charaktere.odette.positionStandard.x, Artemis.charaktere.odette.positionStandard.y));
                    await Artemis.ƒS.update(0.4);
                    await Artemis.ƒS.Speech.tell(Artemis.charaktere.odette, " Ich habe sie im Schuppen eingesperrt. ");
                    await Artemis.ƒS.Character.hide(Artemis.charaktere.bronte);
                    await Artemis.ƒS.Character.show(Artemis.charaktere.bronte, Artemis.charaktere.bronte.pose.happy, Artemis.ƒS.positionPercent(Artemis.charaktere.bronte.positionStandard.x, Artemis.charaktere.bronte.positionStandard.y));
                    await Artemis.ƒS.update(0.4);
                    await Artemis.ƒS.Speech.tell(Artemis.charaktere.bronte, " Das war nicht sonderlich erfolgreich. Sie ist durch das Dach entkommen und hat dabei ihr Halsband verloren. ");
                    await Artemis.ƒS.Speech.tell(Artemis.charaktere.odette, " Oh die Arme, ich wollte ihr aber wirklich keinen Schrecken machen. ");
                    await Artemis.ƒS.Character.hide(Artemis.charaktere.bronte);
                    await Artemis.ƒS.Character.show(Artemis.charaktere.bronte, Artemis.charaktere.bronte.pose.laugh, Artemis.ƒS.positionPercent(Artemis.charaktere.bronte.positionStandard.x, Artemis.charaktere.bronte.positionStandard.y));
                    await Artemis.ƒS.update(0.4);
                    await Artemis.ƒS.Speech.tell(Artemis.charaktere.bronte, " Dass erklärt das Mysterium der eigesperrten Katze.");
                    chooseKnow.cat = "";
                    countDialogAlreadyDid += 1;
                    break;
                case chooseKnow.ghosting:
                    await Artemis.ƒS.Character.hide(Artemis.charaktere.bronte);
                    await Artemis.ƒS.Character.show(Artemis.charaktere.bronte, Artemis.charaktere.bronte.pose.think, Artemis.ƒS.positionPercent(Artemis.charaktere.bronte.positionStandard.x, Artemis.charaktere.bronte.positionStandard.y));
                    await Artemis.ƒS.update(0.4);
                    await Artemis.ƒS.Speech.tell(Artemis.charaktere.bronte, " Warum jagen sie Stella solch einen Schrecken ein? ");
                    await Artemis.ƒS.Character.hide(Artemis.charaktere.odette);
                    await Artemis.ƒS.Character.show(Artemis.charaktere.odette, Artemis.charaktere.odette.pose.sad, Artemis.ƒS.positionPercent(Artemis.charaktere.odette.positionStandard.x, Artemis.charaktere.odette.positionStandard.y));
                    await Artemis.ƒS.update(0.4);
                    await Artemis.ƒS.Speech.tell(Artemis.charaktere.odette, " Oh, das war keine Absicht. Ich wusste nicht, dass Besuch im Haus ist und war deshalb unvorsichtig. Nachts bin ich einmal in ihr Zimmer eingebrochen und sie hat mich gesehen. ");
                    await Artemis.ƒS.Character.hide(Artemis.charaktere.odette);
                    await Artemis.ƒS.Character.show(Artemis.charaktere.odette, Artemis.charaktere.odette.pose.angry, Artemis.ƒS.positionPercent(Artemis.charaktere.odette.positionStandard.x, Artemis.charaktere.odette.positionStandard.y));
                    await Artemis.ƒS.update(0.4);
                    await Artemis.ƒS.Speech.tell(Artemis.charaktere.odette, " Oder zumindest eine Gestalt. Die Arme hat sich ziemlich erschreckt und wohl noch nicht ganz davon erholt. ");
                    await Artemis.ƒS.Speech.tell(Artemis.charaktere.bronte, " Und heute Abend? ");
                    await Artemis.ƒS.Character.hide(Artemis.charaktere.odette);
                    await Artemis.ƒS.Character.show(Artemis.charaktere.odette, Artemis.charaktere.odette.pose.think, Artemis.ƒS.positionPercent(Artemis.charaktere.odette.positionStandard.x, Artemis.charaktere.odette.positionStandard.y));
                    await Artemis.ƒS.update(0.4);
                    await Artemis.ƒS.Speech.tell(Artemis.charaktere.odette, " Auch das war nicht geplant. Die Laternen gingen an, obwohl ich sie manipuliert hatte und auf meinem Weg durch den Garten sah sie mich durchs Fenster. ");
                    await Artemis.ƒS.Speech.tell(Artemis.charaktere.odette, " Zum Glück konnte nur sie mich sehen. ");
                    await Artemis.ƒS.Character.hide(Artemis.charaktere.bronte);
                    await Artemis.ƒS.Character.show(Artemis.charaktere.bronte, Artemis.charaktere.bronte.pose.sad, Artemis.ƒS.positionPercent(Artemis.charaktere.bronte.positionStandard.x, Artemis.charaktere.bronte.positionStandard.y));
                    await Artemis.ƒS.update(0.4);
                    await Artemis.ƒS.Speech.tell(Artemis.charaktere.bronte, " Dass erklärt was mit Stella los ist und warum sie sich so unwohl hier zu fühlen scheint.");
                    chooseKnow.ghosting = "";
                    countDialogAlreadyDid += 1;
                    break;
                case chooseKnow.whyNotDead:
                    await Artemis.ƒS.Character.hide(Artemis.charaktere.bronte);
                    await Artemis.ƒS.Character.show(Artemis.charaktere.bronte, Artemis.charaktere.bronte.pose.think, Artemis.ƒS.positionPercent(Artemis.charaktere.bronte.positionStandard.x, Artemis.charaktere.bronte.positionStandard.y));
                    await Artemis.ƒS.update(0.4);
                    await Artemis.ƒS.Speech.tell(Artemis.charaktere.bronte, " Nun… Wieso leben Sie noch? ");
                    await Artemis.ƒS.Character.hide(Artemis.charaktere.odette);
                    await Artemis.ƒS.Character.show(Artemis.charaktere.odette, Artemis.charaktere.odette.pose.think, Artemis.ƒS.positionPercent(Artemis.charaktere.odette.positionStandard.x, Artemis.charaktere.odette.positionStandard.y));
                    await Artemis.ƒS.update(0.4);
                    await Artemis.ƒS.Speech.tell(Artemis.charaktere.odette, " Ja… dass ist eine lange Geschichte. Ich habe nicht viel Zeit daher halte ich mich kurz. ");
                    await Artemis.ƒS.Character.hide(Artemis.charaktere.odette);
                    await Artemis.ƒS.Character.show(Artemis.charaktere.odette, Artemis.charaktere.odette.pose.sad, Artemis.ƒS.positionPercent(Artemis.charaktere.odette.positionStandard.x, Artemis.charaktere.odette.positionStandard.y));
                    await Artemis.ƒS.update(0.4);
                    await Artemis.ƒS.Speech.tell(Artemis.charaktere.odette, " Mein Bruder riet mir vor einigen Jahren meine Nase nicht zu tief in fremde Angelegenheiten zu stecken und machte mir klar, dass er bereit wäre drastische Maßnahmen durchzuführen. ");
                    await Artemis.ƒS.Character.hide(Artemis.charaktere.odette);
                    await Artemis.ƒS.Character.show(Artemis.charaktere.odette, Artemis.charaktere.odette.pose.angry, Artemis.ƒS.positionPercent(Artemis.charaktere.odette.positionStandard.x, Artemis.charaktere.odette.positionStandard.y));
                    await Artemis.ƒS.update(0.4);
                    await Artemis.ƒS.Speech.tell(Artemis.charaktere.odette, " Er hatte Angst um sein Erbe und Geld war ihm schon immer wichtiger als alles andere. Aber er hatte noch immer die Kontakte und Mittel wirklich schreckliche Sachen zu tun. ");
                    await Artemis.ƒS.Character.hide(Artemis.charaktere.odette);
                    await Artemis.ƒS.Character.show(Artemis.charaktere.odette, Artemis.charaktere.odette.pose.think, Artemis.ƒS.positionPercent(Artemis.charaktere.odette.positionStandard.x, Artemis.charaktere.odette.positionStandard.y));
                    await Artemis.ƒS.update(0.4);
                    await Artemis.ƒS.Speech.tell(Artemis.charaktere.odette, " Also kam ich ihm zuvor. Ließ es aussehen als hätte die Themse mich fortgerissen. Es war töricht und doch würde ich es jederzeit wieder tun. ");
                    await Artemis.ƒS.Character.hide(Artemis.charaktere.bronte);
                    await Artemis.ƒS.Character.show(Artemis.charaktere.bronte, Artemis.charaktere.bronte.pose.shout, Artemis.ƒS.positionPercent(Artemis.charaktere.bronte.positionStandard.x, Artemis.charaktere.bronte.positionStandard.y));
                    await Artemis.ƒS.update(0.4);
                    await Artemis.ƒS.Speech.tell(Artemis.charaktere.odette, " Ich musste Isaac einfach vor meiner Familie schützen. Egal um welchen Preis. ");
                    await Artemis.ƒS.Character.hide(Artemis.charaktere.bronte);
                    await Artemis.ƒS.Character.show(Artemis.charaktere.bronte, Artemis.charaktere.bronte.pose.think, Artemis.ƒS.positionPercent(Artemis.charaktere.bronte.positionStandard.x, Artemis.charaktere.bronte.positionStandard.y));
                    await Artemis.ƒS.update(0.4);
                    await Artemis.ƒS.Speech.tell(Artemis.charaktere.bronte, " Er wusste nichts davon? ");
                    await Artemis.ƒS.Character.hide(Artemis.charaktere.odette);
                    await Artemis.ƒS.Character.show(Artemis.charaktere.odette, Artemis.charaktere.odette.pose.sad, Artemis.ƒS.positionPercent(Artemis.charaktere.odette.positionStandard.x, Artemis.charaktere.odette.positionStandard.y));
                    await Artemis.ƒS.update(0.4);
                    await Artemis.ƒS.Speech.tell(Artemis.charaktere.odette, " Nein. Mein Bruder ließ ihn beschatten und ich konnte es nicht riskieren bei ihm gesehen zu werden. ");
                    await Artemis.ƒS.Speech.tell(Artemis.charaktere.odette, " Er hätte mich gesucht, sofern ich ein Lebenszeichen geschickt hätte. Und so blieb ich versteckt. ");
                    await Artemis.ƒS.Character.hide(Artemis.charaktere.bronte);
                    await Artemis.ƒS.Character.show(Artemis.charaktere.bronte, Artemis.charaktere.bronte.pose.sad, Artemis.ƒS.positionPercent(Artemis.charaktere.bronte.positionStandard.x, Artemis.charaktere.bronte.positionStandard.y));
                    await Artemis.ƒS.update(0.4);
                    await Artemis.ƒS.Speech.tell(Artemis.charaktere.bronte, " Und warteten auf ihre Rückkehr? ");
                    await Artemis.ƒS.Character.hide(Artemis.charaktere.odette);
                    await Artemis.ƒS.Character.show(Artemis.charaktere.odette, Artemis.charaktere.odette.pose.scream, Artemis.ƒS.positionPercent(Artemis.charaktere.odette.positionStandard.x, Artemis.charaktere.odette.positionStandard.y));
                    await Artemis.ƒS.update(0.4);
                    await Artemis.ƒS.Speech.tell(Artemis.charaktere.odette, " Oh nein… ich hatte mich damit abgefunden ein einfaches Leben zu führen. Keine Gefahr für niemanden zu sein. Aber dann- ");
                    await Artemis.ƒS.Character.hide(Artemis.charaktere.odette);
                    await Artemis.ƒS.Character.show(Artemis.charaktere.odette, Artemis.charaktere.odette.pose.angry, Artemis.ƒS.positionPercent(Artemis.charaktere.odette.positionStandard.x, Artemis.charaktere.odette.positionStandard.y));
                    await Artemis.ƒS.update(0.4);
                    await Artemis.ƒS.Speech.tell(Artemis.charaktere.odette, "  Verstarb Doktor Johansson. Der Notar, welcher auch das Testament meines Vaters angefertigt hatte. Und das meiner Mutter. ");
                    await Artemis.ƒS.Speech.tell(Artemis.charaktere.bronte, " Und was genau hat sein tot mit all diesem zu tun? ");
                    await Artemis.ƒS.Character.hide(Artemis.charaktere.bronte);
                    await Artemis.ƒS.Character.show(Artemis.charaktere.bronte, Artemis.charaktere.bronte.pose.shout, Artemis.ƒS.positionPercent(Artemis.charaktere.bronte.positionStandard.x, Artemis.charaktere.bronte.positionStandard.y));
                    await Artemis.ƒS.update(0.4);
                    await Artemis.ƒS.Speech.tell(Artemis.charaktere.odette, " Es war die Tatsache, dass meine Mutter ihr Testament bei ihm angefertigt hatte. Sie müssen wissen, bisher wirkt das Testament meines Vaters, da niemand annahm meine Mutter hätte eins angefertigt. ");
                    await Artemis.ƒS.Speech.tell(Artemis.charaktere.bronte, " !!! ");
                    await Artemis.ƒS.Character.hide(Artemis.charaktere.bronte);
                    await Artemis.ƒS.Character.show(Artemis.charaktere.bronte, Artemis.charaktere.bronte.pose.happy, Artemis.ƒS.positionPercent(Artemis.charaktere.bronte.positionStandard.x, Artemis.charaktere.bronte.positionStandard.y));
                    await Artemis.ƒS.update(0.4);
                    await Artemis.ƒS.Speech.tell(Artemis.charaktere.bronte, " Ein weiteres  Testament? Oh, jetzt macht es natürlich etwas mehr Sinn. Es gab natürlich jemand, der Interesse hatte ein weiteres Testament verschwinden zu lassen.");
                    let userchooseWhoHideTestament = await Artemis.ƒS.Menu.getInput(chooseWhoHideTestament, "basicChoice");
                    switch (userchooseWhoHideTestament) {
                        case chooseWhoHideTestament.alaistar:
                            Artemis.dataForSave.pointDetectiv += 1;
                            await Artemis.ƒS.Character.hide(Artemis.charaktere.bronte);
                            await Artemis.ƒS.Character.show(Artemis.charaktere.bronte, Artemis.charaktere.bronte.pose.think, Artemis.ƒS.positionPercent(Artemis.charaktere.bronte.positionStandard.x, Artemis.charaktere.bronte.positionStandard.y));
                            await Artemis.ƒS.update(0.4);
                            await Artemis.ƒS.Speech.tell(Artemis.charaktere.bronte, " Natürlich der Alleinerbe Alaistar Balckburn hatte am meisten durch ein weiteres Testament zu verlieren.");
                            break;
                        case chooseWhoHideTestament.grace:
                        case chooseWhoHideTestament.isaac:
                        case chooseWhoHideTestament.stella:
                            await Artemis.ƒS.Character.hide(Artemis.charaktere.bronte);
                            await Artemis.ƒS.Character.show(Artemis.charaktere.bronte, Artemis.charaktere.bronte.pose.sad, Artemis.ƒS.positionPercent(Artemis.charaktere.bronte.positionStandard.x, Artemis.charaktere.bronte.positionStandard.y));
                            await Artemis.ƒS.update(0.4);
                            await Artemis.ƒS.Speech.tell(Artemis.charaktere.bronte, " Nein, dass passt nicht. ");
                            await Artemis.ƒS.Character.hide(Artemis.charaktere.odette);
                            await Artemis.ƒS.Character.show(Artemis.charaktere.odette, Artemis.charaktere.odette.pose.sad, Artemis.ƒS.positionPercent(Artemis.charaktere.odette.positionStandard.x, Artemis.charaktere.odette.positionStandard.y));
                            await Artemis.ƒS.update(0.4);
                            await Artemis.ƒS.Speech.tell(Artemis.charaktere.odette, " Mein Bruder Alistair. Er war es.");
                            break;
                    }
                    await Artemis.ƒS.Speech.tell(Artemis.charaktere.odette, " Alaistar fürchtete wohl um sein Erbe und zurecht. ");
                    await Artemis.ƒS.Character.hide(Artemis.charaktere.bronte);
                    await Artemis.ƒS.Character.show(Artemis.charaktere.bronte, Artemis.charaktere.bronte.pose.think, Artemis.ƒS.positionPercent(Artemis.charaktere.bronte.positionStandard.x, Artemis.charaktere.bronte.positionStandard.y));
                    await Artemis.ƒS.update(0.4);
                    await Artemis.ƒS.Speech.tell(Artemis.charaktere.bronte, " Ihre Mutter hat ihm nicht das Vermögen vermacht? ");
                    await Artemis.ƒS.Character.hide(Artemis.charaktere.odette);
                    await Artemis.ƒS.Character.show(Artemis.charaktere.odette, Artemis.charaktere.odette.pose.think, Artemis.ƒS.positionPercent(Artemis.charaktere.odette.positionStandard.x, Artemis.charaktere.odette.positionStandard.y));
                    await Artemis.ƒS.update(0.4);
                    await Artemis.ƒS.Speech.tell(Artemis.charaktere.odette, " Nein. Zumindest nicht alles. Er kommt ein Drittel von dem Vermögen meines Vaters und nur ein wenig von dem Vermögen was meine Mutter in Heirat eingebracht hat. ");
                    await Artemis.ƒS.Speech.tell(Artemis.charaktere.bronte, " Und das war eine Menge? ");
                    await Artemis.ƒS.Character.hide(Artemis.charaktere.odette);
                    await Artemis.ƒS.Character.show(Artemis.charaktere.odette, Artemis.charaktere.odette.pose.sad, Artemis.ƒS.positionPercent(Artemis.charaktere.odette.positionStandard.x, Artemis.charaktere.odette.positionStandard.y));
                    await Artemis.ƒS.update(0.4);
                    await Artemis.ƒS.Speech.tell(Artemis.charaktere.odette, " Eine ganze Menge. Mein Vater hatte viele Schulden bevor der Hochzeit. Sie rettete ihn finanziell. ");
                    await Artemis.ƒS.Character.hide(Artemis.charaktere.bronte);
                    await Artemis.ƒS.Character.show(Artemis.charaktere.bronte, Artemis.charaktere.bronte.pose.angry, Artemis.ƒS.positionPercent(Artemis.charaktere.bronte.positionStandard.x, Artemis.charaktere.bronte.positionStandard.y));
                    await Artemis.ƒS.update(0.4);
                    await Artemis.ƒS.Speech.tell(Artemis.charaktere.bronte, " Und wenn ich es recht verstehe, dann vermachte ihre Mutter ihnen den Rest? Ihr Bruder bekam Wind davon und bedrohte Sie? ");
                    await Artemis.ƒS.Character.hide(Artemis.charaktere.odette);
                    await Artemis.ƒS.Character.show(Artemis.charaktere.odette, Artemis.charaktere.odette.pose.angry, Artemis.ƒS.positionPercent(Artemis.charaktere.odette.positionStandard.x, Artemis.charaktere.odette.positionStandard.y));
                    await Artemis.ƒS.update(0.4);
                    await Artemis.ƒS.Speech.tell(Artemis.charaktere.odette, " Ja. Er bekam das Original in die Finger und versteckte es. ");
                    await Artemis.ƒS.Character.hide(Artemis.charaktere.bronte);
                    await Artemis.ƒS.Character.show(Artemis.charaktere.bronte, Artemis.charaktere.bronte.pose.think, Artemis.ƒS.positionPercent(Artemis.charaktere.bronte.positionStandard.x, Artemis.charaktere.bronte.positionStandard.y));
                    await Artemis.ƒS.update(0.4);
                    await Artemis.ƒS.Speech.tell(Artemis.charaktere.bronte, " Er zerstörte es nicht? ");
                    await Artemis.ƒS.Character.hide(Artemis.charaktere.odette);
                    await Artemis.ƒS.Character.show(Artemis.charaktere.odette, Artemis.charaktere.odette.pose.think, Artemis.ƒS.positionPercent(Artemis.charaktere.odette.positionStandard.x, Artemis.charaktere.odette.positionStandard.y));
                    await Artemis.ƒS.update(0.4);
                    await Artemis.ƒS.Speech.tell(Artemis.charaktere.odette, " Dass nahm ich zuerst auch an. Für die letzten Jahre glaubte ich das Testament sei zerstört, aber dann erreichte mich der Brief von Doktor Johanson. ");
                    await Artemis.ƒS.Character.hide(Artemis.charaktere.bronte);
                    await Artemis.ƒS.Character.show(Artemis.charaktere.bronte, Artemis.charaktere.bronte.pose.shout, Artemis.ƒS.positionPercent(Artemis.charaktere.bronte.positionStandard.x, Artemis.charaktere.bronte.positionStandard.y));
                    await Artemis.ƒS.update(0.4);
                    await Artemis.ƒS.Speech.tell(Artemis.charaktere.bronte, " Der tote Notar hatte nicht etwa eine Kopie? ");
                    await Artemis.ƒS.Character.hide(Artemis.charaktere.bronte);
                    await Artemis.ƒS.Character.show(Artemis.charaktere.bronte, Artemis.charaktere.bronte.pose.sad, Artemis.ƒS.positionPercent(Artemis.charaktere.bronte.positionStandard.x, Artemis.charaktere.bronte.positionStandard.y));
                    await Artemis.ƒS.Character.hide(Artemis.charaktere.odette);
                    await Artemis.ƒS.Character.show(Artemis.charaktere.odette, Artemis.charaktere.odette.pose.sad, Artemis.ƒS.positionPercent(Artemis.charaktere.odette.positionStandard.x, Artemis.charaktere.odette.positionStandard.y));
                    await Artemis.ƒS.update(0.4);
                    await Artemis.ƒS.Speech.tell(Artemis.charaktere.odette, " Nein und mein Bruder schüchterte ihn zu Lebzeiten zu sehr ein, als dass er etwas versucht hätte zu unternehmen. Aber als er verstarb ließ er in Auftrag geben mir einen Brief zu senden. ");
                    await Artemis.ƒS.Character.hide(Artemis.charaktere.odette);
                    await Artemis.ƒS.Character.show(Artemis.charaktere.odette, Artemis.charaktere.odette.pose.sad, Artemis.ƒS.positionPercent(Artemis.charaktere.odette.positionStandard.x, Artemis.charaktere.odette.positionStandard.y));
                    await Artemis.ƒS.update(0.4);
                    await Artemis.ƒS.Speech.tell(Artemis.charaktere.odette, " Er schrieb, dass meine Mutter das Testament auf einem wichtigen Dokument geschrieben hätte. Alaistar konnte nicht riskieren diese Urkunde zu verlieren, daher muss es das Testament noch geben! ");
                    await Artemis.ƒS.Speech.tell(Artemis.charaktere.bronte, " Ich verstehe… ");
                    await Artemis.ƒS.Character.hide(Artemis.charaktere.bronte);
                    await Artemis.ƒS.Character.show(Artemis.charaktere.bronte, Artemis.charaktere.bronte.pose.think, Artemis.ƒS.positionPercent(Artemis.charaktere.bronte.positionStandard.x, Artemis.charaktere.bronte.positionStandard.y));
                    await Artemis.ƒS.update(0.4);
                    await Artemis.ƒS.Speech.tell(Artemis.charaktere.bronte, " Du willst es finden und so dein rechtmäßiges Erbe bekommen? ");
                    await Artemis.ƒS.Character.hide(Artemis.charaktere.odette);
                    await Artemis.ƒS.Character.show(Artemis.charaktere.odette, Artemis.charaktere.odette.pose.angry, Artemis.ƒS.positionPercent(Artemis.charaktere.odette.positionStandard.x, Artemis.charaktere.odette.positionStandard.y));
                    await Artemis.ƒS.update(0.4);
                    await Artemis.ƒS.Speech.tell(Artemis.charaktere.odette, " Ich will vor allem frei von der Tyrannei meines Bruders sein. Ich kenne seine Freunde, die Leute, die eher seine Angestellten sind. ");
                    await Artemis.ƒS.Character.hide(Artemis.charaktere.bronte);
                    await Artemis.ƒS.Character.show(Artemis.charaktere.bronte, Artemis.charaktere.bronte.pose.sad, Artemis.ƒS.positionPercent(Artemis.charaktere.bronte.positionStandard.x, Artemis.charaktere.bronte.positionStandard.y));
                    await Artemis.ƒS.update(0.4);
                    await Artemis.ƒS.Speech.tell(Artemis.charaktere.odette, " Wenn er kein Geld mehr hat, wird er sie alle verlieren.");
                    chooseKnow.whyNotDead = "";
                    countDialogAlreadyDid += 1;
                    break;
                case chooseKnow.whyhere:
                    await Artemis.ƒS.Character.hide(Artemis.charaktere.bronte);
                    await Artemis.ƒS.Character.show(Artemis.charaktere.bronte, Artemis.charaktere.bronte.pose.think, Artemis.ƒS.positionPercent(Artemis.charaktere.bronte.positionStandard.x, Artemis.charaktere.bronte.positionStandard.y));
                    await Artemis.ƒS.update(0.4);
                    await Artemis.ƒS.Speech.tell(Artemis.charaktere.bronte, " Was willst du hier? Also im Haus und im Arbeitszimmer. ");
                    await Artemis.ƒS.Character.hide(Artemis.charaktere.bronte);
                    await Artemis.ƒS.Character.show(Artemis.charaktere.bronte, Artemis.charaktere.bronte.pose.sad, Artemis.ƒS.positionPercent(Artemis.charaktere.bronte.positionStandard.x, Artemis.charaktere.bronte.positionStandard.y));
                    await Artemis.ƒS.Character.hide(Artemis.charaktere.odette);
                    await Artemis.ƒS.Character.show(Artemis.charaktere.odette, Artemis.charaktere.odette.pose.think, Artemis.ƒS.positionPercent(Artemis.charaktere.odette.positionStandard.x, Artemis.charaktere.odette.positionStandard.y));
                    await Artemis.ƒS.update(0.4);
                    await Artemis.ƒS.Speech.tell(Artemis.charaktere.odette, " Ich suche ein Dokument, was mir hilft aus diesem Schlamassel heraus zu kommen. ");
                    await Artemis.ƒS.Character.hide(Artemis.charaktere.bronte);
                    await Artemis.ƒS.Character.show(Artemis.charaktere.bronte, Artemis.charaktere.bronte.pose.think, Artemis.ƒS.positionPercent(Artemis.charaktere.bronte.positionStandard.x, Artemis.charaktere.bronte.positionStandard.y));
                    await Artemis.ƒS.update(0.4);
                    await Artemis.ƒS.Speech.tell(Artemis.charaktere.bronte, " Und das ist hier im Arbeitszimmer? ");
                    await Artemis.ƒS.Speech.tell(Artemis.charaktere.odette, " Ich nehme es an.");
                    chooseKnow.whyhere = "";
                    countDialogAlreadyDid += 1;
                    break;
            }
            if (countDialogAlreadyDid < 4) {
                await Artemis.ƒS.Speech.tell(Artemis.charaktere.bronte, "Aber was ist mit…");
            }
        }
        await Artemis.ƒS.Character.hide(Artemis.charaktere.bronte);
        await Artemis.ƒS.Character.show(Artemis.charaktere.bronte, Artemis.charaktere.bronte.pose.happy, Artemis.ƒS.positionPercent(Artemis.charaktere.bronte.positionStandard.x, Artemis.charaktere.bronte.positionStandard.y));
        await Artemis.ƒS.update(0.4);
        await Artemis.ƒS.Speech.tell(Artemis.charaktere.bronte, " Okay, ich helfe dir. ");
        await Artemis.ƒS.Character.hide(Artemis.charaktere.odette);
        await Artemis.ƒS.Character.show(Artemis.charaktere.odette, Artemis.charaktere.odette.pose.gleefull, Artemis.ƒS.positionPercent(Artemis.charaktere.odette.positionStandard.x, Artemis.charaktere.odette.positionStandard.y));
        await Artemis.ƒS.update(0.4);
        await Artemis.ƒS.Speech.tell(Artemis.charaktere.odette, " Wirklich! Vielen Dank. ");
        await Artemis.ƒS.Character.hide(Artemis.charaktere.bronte);
        await Artemis.ƒS.Character.show(Artemis.charaktere.bronte, Artemis.charaktere.bronte.pose.think, Artemis.ƒS.positionPercent(Artemis.charaktere.bronte.positionStandard.x, Artemis.charaktere.bronte.positionStandard.y));
        await Artemis.ƒS.Character.hide(Artemis.charaktere.odette);
        await Artemis.ƒS.Character.show(Artemis.charaktere.odette, Artemis.charaktere.odette.pose.angry, Artemis.ƒS.positionPercent(Artemis.charaktere.odette.positionStandard.x, Artemis.charaktere.odette.positionStandard.y));
        await Artemis.ƒS.update(0.4);
        await Artemis.ƒS.Speech.tell(Artemis.charaktere.bronte, " Ich weiß nicht, ob du die Wahrheit sagst, aber das lässt sich überprüfen, wenn wir das Testament finden. ");
        await Artemis.ƒS.Speech.tell(Artemis.charaktere.bronte, " Wo genau vermutet du es? Ich nehme an Mr. Blackburn hat ein Tresor für solch sensible Details? ");
        await Artemis.ƒS.Character.hide(Artemis.charaktere.bronte);
        await Artemis.ƒS.Character.show(Artemis.charaktere.bronte, Artemis.charaktere.bronte.pose.sad, Artemis.ƒS.positionPercent(Artemis.charaktere.bronte.positionStandard.x, Artemis.charaktere.bronte.positionStandard.y));
        await Artemis.ƒS.Character.hide(Artemis.charaktere.odette);
        await Artemis.ƒS.Character.show(Artemis.charaktere.odette, Artemis.charaktere.odette.pose.think, Artemis.ƒS.positionPercent(Artemis.charaktere.odette.positionStandard.x, Artemis.charaktere.odette.positionStandard.y));
        await Artemis.ƒS.update(0.4);
        await Artemis.ƒS.Speech.tell(Artemis.charaktere.odette, " Ja, meine Mutter lagerte hier immer die teuersten Schmuckstücke. Grace und ich beide haben daher auch immer Zugriff gehabt. Wenn ich mich richtig erinnere, müsste er hier hinter dem Bücherregal sein. ");
        await Artemis.ƒS.Speech.tell(Artemis.charaktere.bronte, " Okay, na dann. ");
        await Artemis.ƒS.Speech.tell(Artemis.charaktere.bronte, " Einfach ein paar Bücher zur Seite legen. ");
        await Artemis.ƒS.Speech.tell(Artemis.charaktere.bronte, " Mhm und.. ");
        await Artemis.ƒS.Character.hide(Artemis.charaktere.bronte);
        await Artemis.ƒS.Character.show(Artemis.charaktere.bronte, Artemis.charaktere.bronte.pose.shout, Artemis.ƒS.positionPercent(Artemis.charaktere.bronte.positionStandard.x, Artemis.charaktere.bronte.positionStandard.y));
        await Artemis.ƒS.Character.hide(Artemis.charaktere.odette);
        await Artemis.ƒS.Character.show(Artemis.charaktere.odette, Artemis.charaktere.odette.pose.scream, Artemis.ƒS.positionPercent(Artemis.charaktere.odette.positionStandard.x, Artemis.charaktere.odette.positionStandard.y));
        await Artemis.ƒS.update(0.4);
        await Artemis.ƒS.Speech.tell(Artemis.charaktere.bronte, " Oh! ");
        await Artemis.ƒS.Character.hide(Artemis.charaktere.bronte);
        await Artemis.ƒS.Character.show(Artemis.charaktere.bronte, Artemis.charaktere.bronte.pose.think, Artemis.ƒS.positionPercent(Artemis.charaktere.bronte.positionStandard.x, Artemis.charaktere.bronte.positionStandard.y));
        await Artemis.ƒS.Character.hide(Artemis.charaktere.odette);
        await Artemis.ƒS.Character.show(Artemis.charaktere.odette, Artemis.charaktere.odette.pose.angry, Artemis.ƒS.positionPercent(Artemis.charaktere.odette.positionStandard.x, Artemis.charaktere.odette.positionStandard.y));
        await Artemis.ƒS.update(0.4);
        await Artemis.ƒS.Speech.tell(Artemis.charaktere.bronte, " Hier ist ein Tresor! Mhm eine Zahlenkombination. ");
        await Artemis.ƒS.Speech.tell(Artemis.charaktere.odette, " Mhm… Es ist nicht mehr der Geburtstag meiner Mutter. Alaistar hat wohl geändert. Mist! ");
        await Artemis.ƒS.Speech.tell(Artemis.charaktere.bronte, " Ich frage mich… Ob ich vielleicht ein Item dabeihabe, was uns helfen könnte");
        let userchooseSomethingThatHelps = await Artemis.ƒS.Menu.getInput(chooseSomethingThatHelps, "basicChoice");
        switch (userchooseSomethingThatHelps) {
            case chooseSomethingThatHelps.yes:
                let userchooseFromInventory = await Artemis.ƒS.Menu.getInput(chooseFromInventory, "basicChoice");
                switch (userchooseFromInventory) {
                    case chooseFromInventory.collar:
                        Artemis.dataForSave.pointDetectiv += 1;
                        Artemis.dataForSave.gotTestament = true;
                        await Artemis.ƒS.Character.hide(Artemis.charaktere.bronte);
                        await Artemis.ƒS.Character.show(Artemis.charaktere.bronte, Artemis.charaktere.bronte.pose.laugh, Artemis.ƒS.positionPercent(Artemis.charaktere.bronte.positionStandard.x, Artemis.charaktere.bronte.positionStandard.y));
                        await Artemis.ƒS.update(0.4);
                        await Artemis.ƒS.Speech.tell(Artemis.charaktere.bronte, " Oh! Hier! Ich wusste dass dort noch mehr im Halsband ist. Wenn ich es umdrehe ist hier eine Nummer! ");
                        await Artemis.ƒS.Character.hide(Artemis.charaktere.bronte);
                        await Artemis.ƒS.Character.show(Artemis.charaktere.bronte, Artemis.charaktere.bronte.pose.happy, Artemis.ƒS.positionPercent(Artemis.charaktere.bronte.positionStandard.x, Artemis.charaktere.bronte.positionStandard.y));
                        await Artemis.ƒS.Character.hide(Artemis.charaktere.odette);
                        await Artemis.ƒS.Character.show(Artemis.charaktere.odette, Artemis.charaktere.odette.pose.happy, Artemis.ƒS.positionPercent(Artemis.charaktere.odette.positionStandard.x, Artemis.charaktere.odette.positionStandard.y));
                        await Artemis.ƒS.update(0.4);
                        await Artemis.ƒS.Speech.tell(Artemis.charaktere.odette, " Tatsächlich auf der Rückseite des Namensanhänger. ");
                        await Artemis.ƒS.Character.hide(Artemis.charaktere.odette);
                        await Artemis.ƒS.Character.show(Artemis.charaktere.odette, Artemis.charaktere.odette.pose.think, Artemis.ƒS.positionPercent(Artemis.charaktere.odette.positionStandard.x, Artemis.charaktere.odette.positionStandard.y));
                        await Artemis.ƒS.update(0.4);
                        await Artemis.ƒS.Speech.tell(Artemis.charaktere.odette, " In der Handschrift meiner vergesslichen Schwester. ");
                        await Artemis.ƒS.Character.hide(Artemis.charaktere.bronte);
                        await Artemis.ƒS.Character.show(Artemis.charaktere.bronte, Artemis.charaktere.bronte.pose.think, Artemis.ƒS.positionPercent(Artemis.charaktere.bronte.positionStandard.x, Artemis.charaktere.bronte.positionStandard.y));
                        await Artemis.ƒS.update(0.4);
                        await Artemis.ƒS.Speech.tell(Artemis.charaktere.bronte, " Das erklärt warum sie so aufgebracht war über das Verschwinden der Katze. Es ging ihr um den Code. Wie lautet er? ");
                        await Artemis.ƒS.Speech.tell(Artemis.charaktere.odette, " 279.");
                        await Artemis.ƒS.Character.hide(Artemis.charaktere.bronte);
                        await Artemis.ƒS.Character.show(Artemis.charaktere.bronte, Artemis.charaktere.bronte.pose.shout, Artemis.ƒS.positionPercent(Artemis.charaktere.bronte.positionStandard.x, Artemis.charaktere.bronte.positionStandard.y));
                        await Artemis.ƒS.Character.hide(Artemis.charaktere.odette);
                        await Artemis.ƒS.Character.show(Artemis.charaktere.odette, Artemis.charaktere.odette.pose.scream, Artemis.ƒS.positionPercent(Artemis.charaktere.odette.positionStandard.x, Artemis.charaktere.odette.positionStandard.y));
                        await Artemis.ƒS.update(0.4);
                        await Artemis.ƒS.Speech.tell(Artemis.charaktere.odette, " !!! ");
                        await Artemis.ƒS.Character.hide(Artemis.charaktere.odette);
                        await Artemis.ƒS.Character.show(Artemis.charaktere.odette, Artemis.charaktere.odette.pose.gleefull, Artemis.ƒS.positionPercent(Artemis.charaktere.odette.positionStandard.x, Artemis.charaktere.odette.positionStandard.y));
                        await Artemis.ƒS.update(0.4);
                        await Artemis.ƒS.Speech.tell(Artemis.charaktere.odette, " Der Tresor, er ist offen! ");
                        await Artemis.ƒS.Character.hide(Artemis.charaktere.bronte);
                        await Artemis.ƒS.Character.show(Artemis.charaktere.bronte, Artemis.charaktere.bronte.pose.think, Artemis.ƒS.positionPercent(Artemis.charaktere.bronte.positionStandard.x, Artemis.charaktere.bronte.positionStandard.y));
                        await Artemis.ƒS.Character.hide(Artemis.charaktere.odette);
                        await Artemis.ƒS.Character.show(Artemis.charaktere.odette, Artemis.charaktere.odette.pose.think, Artemis.ƒS.positionPercent(Artemis.charaktere.odette.positionStandard.x, Artemis.charaktere.odette.positionStandard.y));
                        await Artemis.ƒS.update(0.4);
                        await Artemis.ƒS.Speech.tell(Artemis.charaktere.bronte, " Schmuck, ein paar Scheine und hier! Die Besitzurkunde des Hauses. ");
                        await Artemis.ƒS.Inventory.add(Artemis.inventory.testament);
                        await Artemis.ƒS.Inventory.open();
                        await Artemis.ƒS.Character.hide(Artemis.charaktere.bronte);
                        await Artemis.ƒS.Character.show(Artemis.charaktere.bronte, Artemis.charaktere.bronte.pose.happy, Artemis.ƒS.positionPercent(Artemis.charaktere.bronte.positionStandard.x, Artemis.charaktere.bronte.positionStandard.y));
                        await Artemis.ƒS.Character.hide(Artemis.charaktere.odette);
                        await Artemis.ƒS.Character.show(Artemis.charaktere.odette, Artemis.charaktere.odette.pose.happy, Artemis.ƒS.positionPercent(Artemis.charaktere.odette.positionStandard.x, Artemis.charaktere.odette.positionStandard.y));
                        await Artemis.ƒS.update(0.4);
                        await Artemis.ƒS.Speech.tell(Artemis.charaktere.bronte, " Deine Mutter war ziemlich clever. ");
                        await Artemis.ƒS.Character.hide(Artemis.charaktere.bronte);
                        await Artemis.ƒS.Character.show(Artemis.charaktere.bronte, Artemis.charaktere.bronte.pose.laugh, Artemis.ƒS.positionPercent(Artemis.charaktere.bronte.positionStandard.x, Artemis.charaktere.bronte.positionStandard.y));
                        await Artemis.ƒS.update(0.4);
                        await Artemis.ƒS.Speech.tell(Artemis.charaktere.bronte, " Ich denke wir kennen beide einen Anwalt der-");
                        await Artemis.ƒS.Character.hide(Artemis.charaktere.bronte);
                        await Artemis.ƒS.Character.show(Artemis.charaktere.bronte, Artemis.charaktere.bronte.pose.shout, Artemis.ƒS.positionPercent(Artemis.charaktere.bronte.positionStandard.x, Artemis.charaktere.bronte.positionStandard.y));
                        await Artemis.ƒS.Character.hide(Artemis.charaktere.odette);
                        await Artemis.ƒS.Character.show(Artemis.charaktere.odette, Artemis.charaktere.odette.pose.scream, Artemis.ƒS.positionPercent(Artemis.charaktere.odette.positionStandard.x, Artemis.charaktere.odette.positionStandard.y));
                        await Artemis.ƒS.update(0.4);
                        break;
                    case chooseFromInventory.gun:
                    case chooseFromInventory.ring:
                        await Artemis.ƒS.Character.hide(Artemis.charaktere.bronte);
                        await Artemis.ƒS.Character.show(Artemis.charaktere.bronte, Artemis.charaktere.bronte.pose.sad, Artemis.ƒS.positionPercent(Artemis.charaktere.bronte.positionStandard.x, Artemis.charaktere.bronte.positionStandard.y));
                        await Artemis.ƒS.update(0.4);
                        await Artemis.ƒS.Speech.tell(Artemis.charaktere.bronte, " Mhm ne, dass macht ja keinen Sinn. Aber vielleicht-");
                        await Artemis.ƒS.Character.hide(Artemis.charaktere.bronte);
                        await Artemis.ƒS.Character.show(Artemis.charaktere.bronte, Artemis.charaktere.bronte.pose.shout, Artemis.ƒS.positionPercent(Artemis.charaktere.bronte.positionStandard.x, Artemis.charaktere.bronte.positionStandard.y));
                        await Artemis.ƒS.Character.hide(Artemis.charaktere.odette);
                        await Artemis.ƒS.Character.show(Artemis.charaktere.odette, Artemis.charaktere.odette.pose.scream, Artemis.ƒS.positionPercent(Artemis.charaktere.odette.positionStandard.x, Artemis.charaktere.odette.positionStandard.y));
                        await Artemis.ƒS.update(0.4);
                        break;
                }
                break;
            case chooseSomethingThatHelps.no:
                await Artemis.ƒS.Character.hide(Artemis.charaktere.bronte);
                await Artemis.ƒS.Character.show(Artemis.charaktere.bronte, Artemis.charaktere.bronte.pose.sad, Artemis.ƒS.positionPercent(Artemis.charaktere.bronte.positionStandard.x, Artemis.charaktere.bronte.positionStandard.y));
                await Artemis.ƒS.update(0.4);
                await Artemis.ƒS.Speech.tell(Artemis.charaktere.bronte, " Tut mir leid, ich glaube ich habe nichts dabei was uns helfen könnte. ");
                await Artemis.ƒS.Speech.tell(Artemis.charaktere.odette, " Oh schade, aber-");
                await Artemis.ƒS.Character.hide(Artemis.charaktere.bronte);
                await Artemis.ƒS.Character.show(Artemis.charaktere.bronte, Artemis.charaktere.bronte.pose.shout, Artemis.ƒS.positionPercent(Artemis.charaktere.bronte.positionStandard.x, Artemis.charaktere.bronte.positionStandard.y));
                await Artemis.ƒS.Character.hide(Artemis.charaktere.odette);
                await Artemis.ƒS.Character.show(Artemis.charaktere.odette, Artemis.charaktere.odette.pose.scream, Artemis.ƒS.positionPercent(Artemis.charaktere.odette.positionStandard.x, Artemis.charaktere.odette.positionStandard.y));
                await Artemis.ƒS.update(0.4);
                break;
        }
        return "SceneTwelveFinal";
    }
    Artemis.SceneElevenStudy = SceneElevenStudy;
})(Artemis || (Artemis = {}));
var Artemis;
(function (Artemis) {
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
        await Artemis.ƒS.Location.show(Artemis.location.infrontOfManorNight);
        await Artemis.ƒS.update(Artemis.transistions.standard.duration, Artemis.transistions.standard.alpha, Artemis.transistions.standard.edge);
        await Artemis.ƒS.Sound.fade(Artemis.sound.themeinfrontManorNight, 0.1, 0.2, true);
        await Artemis.ƒS.Character.show(Artemis.charaktere.maire, Artemis.charaktere.maire.pose.neutral, Artemis.ƒS.positionPercent(Artemis.charaktere.maire.positionStandard.x, Artemis.charaktere.maire.positionStandard.y));
        await Artemis.ƒS.Character.show(Artemis.charaktere.bronte, Artemis.charaktere.bronte.pose.happy, Artemis.ƒS.positionPercent(Artemis.charaktere.bronte.positionStandard.x, Artemis.charaktere.bronte.positionStandard.y));
        await Artemis.ƒS.update(0.8);
        if (Artemis.dataForSave.mairePuked == true) {
            await Artemis.ƒS.Character.hide(Artemis.charaktere.maire);
            await Artemis.ƒS.Character.show(Artemis.charaktere.maire, Artemis.charaktere.maire.pose.embarrassed, Artemis.ƒS.positionPercent(Artemis.charaktere.maire.positionStandard.x, Artemis.charaktere.maire.positionStandard.y));
            await Artemis.ƒS.update(0.4);
            await Artemis.ƒS.Speech.tell(Artemis.charaktere.maire, " Endlich frische Luft! Schafsmagen… Mich schüttelt es immer noch. ");
            await Artemis.ƒS.Speech.tell(Artemis.charaktere.bronte, " Arme Maire, das Essen hat sie wirklich mitgenommen.");
        }
        Artemis.dataForSave.lookingInTheGardenForCluesFinished = true;
        await Artemis.ƒS.Character.hide(Artemis.charaktere.maire);
        await Artemis.ƒS.Character.hide(Artemis.charaktere.bronte);
        await Artemis.ƒS.Character.show(Artemis.charaktere.maire, Artemis.charaktere.maire.pose.neutral, Artemis.ƒS.positionPercent(Artemis.charaktere.maire.positionStandard.x, Artemis.charaktere.maire.positionStandard.y));
        await Artemis.ƒS.Character.show(Artemis.charaktere.bronte, Artemis.charaktere.bronte.pose.think, Artemis.ƒS.positionPercent(Artemis.charaktere.bronte.positionStandard.x, Artemis.charaktere.bronte.positionStandard.y));
        await Artemis.ƒS.update(0.4);
        await Artemis.ƒS.Speech.tell(Artemis.charaktere.bronte, " Also vorhin ist sie in Richtung des Gebüsches gelaufen.");
        if (Artemis.dataForSave.foundRing == true) {
            await Artemis.ƒS.Character.show(Artemis.charaktere.bronte, Artemis.charaktere.bronte.pose.think, Artemis.ƒS.positionPercent(Artemis.charaktere.bronte.positionStandard.x, Artemis.charaktere.bronte.positionStandard.y));
            await Artemis.ƒS.update(0.4);
            await Artemis.ƒS.Speech.tell(Artemis.charaktere.bronte, "Und ziemlich schnell, immerhin haben wir sie danach nicht mehr gesehen.");
            await Artemis.ƒS.Character.show(Artemis.charaktere.maire, Artemis.charaktere.maire.pose.sad, Artemis.ƒS.positionPercent(Artemis.charaktere.maire.positionStandard.x, Artemis.charaktere.maire.positionStandard.y));
            await Artemis.ƒS.update(0.4);
            await Artemis.ƒS.Speech.tell(Artemis.charaktere.maire, " Mhm, hast du noch den Ring? ");
            await Artemis.ƒS.Speech.tell(Artemis.charaktere.bronte, " Klar hier…");
        }
        else {
            await Artemis.ƒS.Character.hide(Artemis.charaktere.bronte);
            await Artemis.ƒS.Character.show(Artemis.charaktere.bronte, Artemis.charaktere.bronte.pose.shout, Artemis.ƒS.positionPercent(Artemis.charaktere.bronte.positionStandard.x, Artemis.charaktere.bronte.positionStandard.y));
            await Artemis.ƒS.update(0.4);
            await Artemis.ƒS.Speech.tell(Artemis.charaktere.bronte, "Also mal schauen, was dort ist. Mhm… oh! Was ist das? ");
            await Artemis.ƒS.Sound.play(Artemis.sound.goingThrouBushes, 1);
            await Artemis.ƒS.Inventory.add(Artemis.inventory.ring);
            await Artemis.ƒS.Inventory.open();
            await Artemis.ƒS.Speech.tell(Artemis.charaktere.bronte, "Ein Siegelring? Was macht der dann hier? ");
        }
        await Artemis.ƒS.Character.hide(Artemis.charaktere.bronte);
        await Artemis.ƒS.Character.show(Artemis.charaktere.bronte, Artemis.charaktere.bronte.pose.think, Artemis.ƒS.positionPercent(Artemis.charaktere.bronte.positionStandard.x, Artemis.charaktere.bronte.positionStandard.y));
        await Artemis.ƒS.update(0.4);
        await Artemis.ƒS.Speech.tell(Artemis.charaktere.bronte, " Er sieht durchaus edel aus. Ein wenig dreckig nur. Mit den Buchstaben O.R. soweit ich es erkennen kann. ");
        await Artemis.ƒS.Character.hide(Artemis.charaktere.maire);
        await Artemis.ƒS.Character.show(Artemis.charaktere.maire, Artemis.charaktere.maire.pose.happy, Artemis.ƒS.positionPercent(Artemis.charaktere.maire.positionStandard.x, Artemis.charaktere.maire.positionStandard.y));
        await Artemis.ƒS.update(0.4);
        await Artemis.ƒS.Speech.tell(Artemis.charaktere.maire, " O und R…. oh! Wir kennen jemanden zu dem R. passen würde!");
        let userChoosePersonToRing = await Artemis.ƒS.Menu.getInput(choosePerson, "basicChoice");
        switch (userChoosePersonToRing) {
            case choosePerson.Butler:
                Artemis.dataForSave.pointAngryMaire += 1;
                await Artemis.ƒS.Character.hide(Artemis.charaktere.bronte);
                await Artemis.ƒS.Character.show(Artemis.charaktere.bronte, Artemis.charaktere.bronte.pose.happy, Artemis.ƒS.positionPercent(Artemis.charaktere.bronte.positionStandard.x, Artemis.charaktere.bronte.positionStandard.y));
                await Artemis.ƒS.update(0.4);
                await Artemis.ƒS.Speech.tell(Artemis.charaktere.bronte, " Gute Schlussfolgerung… Der Butler heißt Remington. Aber ob der Vorname passt?");
                break;
            case choosePerson.Isaac:
                await Artemis.ƒS.Character.hide(Artemis.charaktere.maire);
                await Artemis.ƒS.Character.show(Artemis.charaktere.maire, Artemis.charaktere.maire.pose.sad, Artemis.ƒS.positionPercent(Artemis.charaktere.maire.positionStandard.x, Artemis.charaktere.maire.positionStandard.y));
                await Artemis.ƒS.Character.hide(Artemis.charaktere.bronte);
                await Artemis.ƒS.Character.show(Artemis.charaktere.bronte, Artemis.charaktere.bronte.pose.sad, Artemis.ƒS.positionPercent(Artemis.charaktere.bronte.positionStandard.x, Artemis.charaktere.bronte.positionStandard.y));
                await Artemis.ƒS.update(0.4);
                await Artemis.ƒS.Speech.tell(Artemis.charaktere.bronte, " Ah! Äh… nein das passt nicht. Er heißt da Isaac mit Vorname.");
                await Artemis.ƒS.Character.hide(Artemis.charaktere.maire);
                await Artemis.ƒS.Character.show(Artemis.charaktere.maire, Artemis.charaktere.maire.pose.happy, Artemis.ƒS.positionPercent(Artemis.charaktere.maire.positionStandard.x, Artemis.charaktere.maire.positionStandard.y));
                await Artemis.ƒS.Character.hide(Artemis.charaktere.bronte);
                await Artemis.ƒS.Character.show(Artemis.charaktere.bronte, Artemis.charaktere.bronte.pose.happy, Artemis.ƒS.positionPercent(Artemis.charaktere.bronte.positionStandard.x, Artemis.charaktere.bronte.positionStandard.y));
                await Artemis.ƒS.update(0.4);
                await Artemis.ƒS.Speech.tell(Artemis.charaktere.maire, " Aber der Butler passt! Es hat sich mit Remington vorgestellt! Und sein Vorname wissen wir nicht!");
            default:
                await Artemis.ƒS.Character.hide(Artemis.charaktere.maire);
                await Artemis.ƒS.Character.show(Artemis.charaktere.maire, Artemis.charaktere.maire.pose.sad, Artemis.ƒS.positionPercent(Artemis.charaktere.maire.positionStandard.x, Artemis.charaktere.maire.positionStandard.y));
                await Artemis.ƒS.Character.hide(Artemis.charaktere.bronte);
                await Artemis.ƒS.Character.show(Artemis.charaktere.bronte, Artemis.charaktere.bronte.pose.sad, Artemis.ƒS.positionPercent(Artemis.charaktere.bronte.positionStandard.x, Artemis.charaktere.bronte.positionStandard.y));
                await Artemis.ƒS.update(0.4);
                await Artemis.ƒS.Speech.tell(Artemis.charaktere.bronte, " Ah! Äh… nein das passt ja gar nicht… ");
                await Artemis.ƒS.Character.hide(Artemis.charaktere.maire);
                await Artemis.ƒS.Character.show(Artemis.charaktere.maire, Artemis.charaktere.maire.pose.happy, Artemis.ƒS.positionPercent(Artemis.charaktere.maire.positionStandard.x, Artemis.charaktere.maire.positionStandard.y));
                await Artemis.ƒS.Character.hide(Artemis.charaktere.bronte);
                await Artemis.ƒS.Character.show(Artemis.charaktere.bronte, Artemis.charaktere.bronte.pose.happy, Artemis.ƒS.positionPercent(Artemis.charaktere.bronte.positionStandard.x, Artemis.charaktere.bronte.positionStandard.y));
                await Artemis.ƒS.update(0.4);
                await Artemis.ƒS.Speech.tell(Artemis.charaktere.maire, " Aber der Butler passt! Es hat sich mit Remington vorgestellt!");
        }
        await Artemis.ƒS.Character.hide(Artemis.charaktere.maire);
        await Artemis.ƒS.Character.show(Artemis.charaktere.maire, Artemis.charaktere.maire.pose.neutral, Artemis.ƒS.positionPercent(Artemis.charaktere.maire.positionStandard.x, Artemis.charaktere.maire.positionStandard.y));
        await Artemis.ƒS.update(0.4);
        await Artemis.ƒS.Speech.tell(Artemis.charaktere.maire, " Oh er hat vorhin sich auch so merkwürdig benommen. Wie er vor der Tür gelauert hat! Wie er uns hier draußen aufgelauert hat! Der ist bestimmt der Übeltäter. ");
        await Artemis.ƒS.Character.hide(Artemis.charaktere.bronte);
        await Artemis.ƒS.Character.show(Artemis.charaktere.bronte, Artemis.charaktere.bronte.pose.think, Artemis.ƒS.positionPercent(Artemis.charaktere.bronte.positionStandard.x, Artemis.charaktere.bronte.positionStandard.y));
        await Artemis.ƒS.update(0.4);
        await Artemis.ƒS.Speech.tell(Artemis.charaktere.bronte, " Gute Theorie, aber noch ist ja nicht bewiesen, dass die Katze nicht einfach weggelaufen ist. Das würde ich zumindest auch tun wenn ich immer in einem Zimmer eingesperrt wäre. ");
        await Artemis.ƒS.Character.hide(Artemis.charaktere.maire);
        await Artemis.ƒS.Character.show(Artemis.charaktere.maire, Artemis.charaktere.maire.pose.sad, Artemis.ƒS.positionPercent(Artemis.charaktere.maire.positionStandard.x, Artemis.charaktere.maire.positionStandard.y));
        await Artemis.ƒS.update(0.4);
        await Artemis.ƒS.Speech.tell(Artemis.charaktere.maire, " Mhm… Ein Fall wäre spannender. Aber so oder so hier ist die Katze nicht. Was machen wir jetzt?");
        let userChooseWhatToDoInfrontGarden = await Artemis.ƒS.Menu.getInput(chooseWhatToDoInfrontGarden, "basicChoice");
        switch (userChooseWhatToDoInfrontGarden) {
            case chooseWhatToDoInfrontGarden.go:
                Artemis.dataForSave.pointAngryMaire += 1;
                await Artemis.ƒS.Character.hide(Artemis.charaktere.bronte);
                await Artemis.ƒS.Character.show(Artemis.charaktere.bronte, Artemis.charaktere.bronte.pose.happy, Artemis.ƒS.positionPercent(Artemis.charaktere.bronte.positionStandard.x, Artemis.charaktere.bronte.positionStandard.y));
                await Artemis.ƒS.update(0.4);
                await Artemis.ƒS.Speech.tell(Artemis.charaktere.bronte, " Weißt du was… lass einfach aufhören. Ich glaube das ist zu schwierig für uns. ");
                await Artemis.ƒS.Character.hide(Artemis.charaktere.maire);
                await Artemis.ƒS.Character.show(Artemis.charaktere.maire, Artemis.charaktere.maire.pose.fear, Artemis.ƒS.positionPercent(Artemis.charaktere.maire.positionStandard.x, Artemis.charaktere.maire.positionStandard.y));
                await Artemis.ƒS.update(0.4);
                await Artemis.ƒS.Speech.tell(Artemis.charaktere.maire, " Was! Aber du bist Bronte! Die Meister Detektivin! ");
                await Artemis.ƒS.Character.hide(Artemis.charaktere.bronte);
                await Artemis.ƒS.Character.show(Artemis.charaktere.bronte, Artemis.charaktere.bronte.pose.think, Artemis.ƒS.positionPercent(Artemis.charaktere.bronte.positionStandard.x, Artemis.charaktere.bronte.positionStandard.y));
                await Artemis.ƒS.update(0.4);
                await Artemis.ƒS.Speech.tell(Artemis.charaktere.bronte, " Ja ich weiß, war doch nur ein Witz ");
                await Artemis.ƒS.Character.hide(Artemis.charaktere.maire);
                await Artemis.ƒS.Character.show(Artemis.charaktere.maire, Artemis.charaktere.maire.pose.neutral, Artemis.ƒS.positionPercent(Artemis.charaktere.maire.positionStandard.x, Artemis.charaktere.maire.positionStandard.y));
                await Artemis.ƒS.update(0.4);
                await Artemis.ƒS.Speech.tell(Artemis.charaktere.maire, " Mhm… witzig. ");
                await Artemis.ƒS.Speech.tell(Artemis.charaktere.bronte, " (Den Witz fand sie wohl nicht gut… sie sieht tatsächlich ziemlich genervt aus… ich sollte netter zu ihr sein.)");
            case chooseWhatToDoInfrontGarden.garden:
                await Artemis.ƒS.Character.hide(Artemis.charaktere.bronte);
                await Artemis.ƒS.Character.show(Artemis.charaktere.bronte, Artemis.charaktere.bronte.pose.happy, Artemis.ƒS.positionPercent(Artemis.charaktere.bronte.positionStandard.x, Artemis.charaktere.bronte.positionStandard.y));
                await Artemis.ƒS.update(0.4);
                await Artemis.ƒS.Speech.tell(Artemis.charaktere.bronte, " Vielleicht sind hier ja Spuren. Mhm.. Ja… Mhm… Autsch! Blöde Dornen! Oh hier! Tatsache sie führen in den Garten. ");
                await Artemis.ƒS.Character.hide(Artemis.charaktere.maire);
                await Artemis.ƒS.Character.show(Artemis.charaktere.maire, Artemis.charaktere.maire.pose.happy, Artemis.ƒS.positionPercent(Artemis.charaktere.maire.positionStandard.x, Artemis.charaktere.maire.positionStandard.y));
                await Artemis.ƒS.update(0.4);
                await Artemis.ƒS.Speech.tell(Artemis.charaktere.maire, " Hinterher!");
        }
        await Artemis.ƒS.Character.hide(Artemis.charaktere.maire);
        await Artemis.ƒS.Character.hide(Artemis.charaktere.bronte);
        await Artemis.ƒS.update(0.8);
        await Artemis.ƒS.Sound.fade(Artemis.sound.themeinfrontManorNight, 0, 0.4);
        return "SceneSixGarden";
    }
    Artemis.SceneFiveOutside = SceneFiveOutside;
})(Artemis || (Artemis = {}));
var Artemis;
(function (Artemis) {
    async function SceneFourSaalonDrama() {
        let chooseBeRespectfull = {
            yes: "Ja",
            no: "Nein"
        };
        await Artemis.ƒS.Location.show(Artemis.location.saalon);
        await Artemis.ƒS.update(0.1);
        await Artemis.ƒS.Sound.fade(Artemis.sound.themeSaloon, 0, 0.3);
        await Artemis.ƒS.Sound.play(Artemis.sound.dramaInSaloon, 0.1, true);
        await Artemis.ƒS.Character.hide(Artemis.charaktere.isaac);
        await Artemis.ƒS.Character.hide(Artemis.charaktere.maire);
        await Artemis.ƒS.Character.hide(Artemis.charaktere.bronte);
        await Artemis.ƒS.Character.show(Artemis.charaktere.maire, Artemis.charaktere.maire.pose.fear, Artemis.ƒS.positionPercent(Artemis.charaktere.maire.positionStandard.x, Artemis.charaktere.maire.positionStandard.y));
        await Artemis.ƒS.Character.show(Artemis.charaktere.isaac, Artemis.charaktere.isaac.pose.sad, Artemis.ƒS.positionPercent(Artemis.charaktere.isaac.positionStandard.x, Artemis.charaktere.isaac.positionStandard.y));
        await Artemis.ƒS.Character.show(Artemis.charaktere.bronte, Artemis.charaktere.bronte.pose.shout, Artemis.ƒS.positionPercent(Artemis.charaktere.bronte.positionStandard.x, Artemis.charaktere.bronte.positionStandard.y));
        await Artemis.ƒS.update(0.4);
        Artemis.ƒS.Sound.play(Artemis.sound.graceScream, 0.8);
        await Artemis.showEmotion(Artemis.emotionen.ausrufezeichen, 1);
        document.getElementById('speechContent').classList.add('textEffectBig');
        await Artemis.ƒS.Speech.tell(Artemis.charaktere.bronte, " !!!!! ");
        await Artemis.ƒS.Speech.tell(Artemis.charaktere.grace, " Artemis!");
        document.getElementById('speechContent').classList.remove('textEffectBig');
        await Artemis.ƒS.Character.hide(Artemis.charaktere.isaac);
        await Artemis.ƒS.Character.hide(Artemis.charaktere.bronte);
        await Artemis.ƒS.Character.hide(Artemis.charaktere.maire);
        await Artemis.ƒS.Character.show(Artemis.charaktere.grace, Artemis.charaktere.grace.pose.sad, Artemis.ƒS.positionPercent(Artemis.charaktere.grace.positionStandard.x, Artemis.charaktere.grace.positionStandard.y));
        await Artemis.ƒS.Character.show(Artemis.charaktere.bronte, Artemis.charaktere.bronte.pose.think, Artemis.ƒS.positionPercent(Artemis.charaktere.bronte.positionStandard.x, Artemis.charaktere.bronte.positionStandard.y));
        await Artemis.ƒS.Character.show(Artemis.charaktere.maire, Artemis.charaktere.maire.pose.neutral, Artemis.ƒS.positionPercent(Artemis.charaktere.maire.positionStandard.x, Artemis.charaktere.maire.positionStandard.y));
        await Artemis.ƒS.update(0.8);
        await Artemis.ƒS.Speech.tell(Artemis.charaktere.grace, "Jemand hat meine Artemis gestohlen!");
        await Artemis.ƒS.Character.hide(Artemis.charaktere.bronte);
        await Artemis.ƒS.Character.hide(Artemis.charaktere.maire);
        await Artemis.ƒS.Character.show(Artemis.charaktere.maire, Artemis.charaktere.maire.pose.fear, Artemis.ƒS.positionPercent(Artemis.charaktere.maire.positionStandard.x, Artemis.charaktere.maire.positionStandard.y));
        await Artemis.ƒS.Character.show(Artemis.charaktere.bronte, Artemis.charaktere.bronte.pose.shout, Artemis.ƒS.positionPercent(Artemis.charaktere.bronte.positionStandard.x, Artemis.charaktere.bronte.positionStandard.y));
        await Artemis.ƒS.update(0.4);
        await Artemis.ƒS.Speech.tell(Artemis.charaktere.maire, " Sie fällt! Oh jemand sollte sie- Fangen… ");
        await Artemis.ƒS.Character.animate(Artemis.charaktere.grace, Artemis.charaktere.grace.pose.sad, Artemis.fromMiddleDown(Artemis.charaktere.grace.positionStandard.x, Artemis.charaktere.grace.positionStandard.y, 100));
        await Artemis.ƒS.Character.hide(Artemis.charaktere.maire);
        await Artemis.ƒS.Character.show(Artemis.charaktere.maire, Artemis.charaktere.maire.pose.neutral, Artemis.ƒS.positionPercent(Artemis.charaktere.maire.positionStandard.x, Artemis.charaktere.maire.positionStandard.y));
        await Artemis.ƒS.update(0.4);
        await Artemis.ƒS.Speech.tell(Artemis.charaktere.maire, " Das gibt eine Beule. ");
        await Artemis.ƒS.Character.hide(Artemis.charaktere.bronte);
        await Artemis.ƒS.Character.show(Artemis.charaktere.bronte, Artemis.charaktere.bronte.pose.think, Artemis.ƒS.positionPercent(Artemis.charaktere.bronte.positionStandard.x, Artemis.charaktere.bronte.positionStandard.y));
        await Artemis.ƒS.update(0.4);
        await Artemis.ƒS.Speech.tell(Artemis.charaktere.bronte, " Nein schau, ihr Kopf ist sanft auf einen der Kissen gelandet. Sie ist geübt. Mrs. Grace? Alles in Ordnung? ");
        await Artemis.ƒS.Character.show(Artemis.charaktere.grace, Artemis.charaktere.grace.pose.sad, Artemis.ƒS.positionPercent(Artemis.charaktere.grace.positionLeftMiddle.x, Artemis.charaktere.grace.positionLeftMiddle.y));
        await Artemis.ƒS.update(0.8);
        await Artemis.ƒS.Speech.tell(Artemis.charaktere.grace, " Ich… oh… Nein! Meine Artemis wurde gestohlen! ");
        await Artemis.ƒS.Character.hide(Artemis.charaktere.bronte);
        await Artemis.ƒS.Character.show(Artemis.charaktere.bronte, Artemis.charaktere.bronte.pose.sad, Artemis.ƒS.positionPercent(Artemis.charaktere.bronte.positionStandard.x, Artemis.charaktere.bronte.positionStandard.y));
        await Artemis.ƒS.update(0.4);
        await Artemis.ƒS.Character.show(Artemis.charaktere.alaistar, Artemis.charaktere.alaistar.pose.angry, Artemis.ƒS.positionPercent(Artemis.charaktere.alaistar.positionRightMiddle.x, Artemis.charaktere.alaistar.positionRightMiddle.y));
        await Artemis.ƒS.update(0.4);
        await Artemis.ƒS.Speech.tell(Artemis.charaktere.alaistar, " Gestohlen? Die Katze. Grace stell dich doch bitte nicht so an. Und rede deutlich! ");
        await Artemis.ƒS.Character.hide(Artemis.charaktere.alaistar);
        await Artemis.ƒS.Character.show(Artemis.charaktere.alaistar, Artemis.charaktere.alaistar.pose.neutral, Artemis.ƒS.positionPercent(Artemis.charaktere.alaistar.positionRightMiddle.x, Artemis.charaktere.alaistar.positionRightMiddle.y));
        await Artemis.ƒS.update(0.4);
        await Artemis.ƒS.Speech.tell(Artemis.charaktere.grace, " Bestimmt gestohlen! Ich war im Arbeitszimmer, wo sie immer ist, wenn Mrs. May-Porter sie nicht in den Garten lässt und dort war sie nicht! ");
        await Artemis.ƒS.Character.hide(Artemis.charaktere.alaistar);
        await Artemis.ƒS.Character.show(Artemis.charaktere.alaistar, Artemis.charaktere.alaistar.pose.angry, Artemis.ƒS.positionPercent(Artemis.charaktere.alaistar.positionRightMiddle.x, Artemis.charaktere.alaistar.positionRightMiddle.y));
        await Artemis.ƒS.update(0.4);
        await Artemis.ƒS.Speech.tell(Artemis.charaktere.alaistar, " Aber Schwester. Das ist doch lächerlich. Sie wird hier irgendwo im Haus sein. Sieh doch wie viel Angst du der armen Stella einjagst! ");
        await Artemis.ƒS.Speech.tell(Artemis.charaktere.grace, " Nein! Sie wurde gestohlen! Ich weiß es einfach. ");
        await Artemis.ƒS.Character.hide(Artemis.charaktere.alaistar);
        await Artemis.ƒS.Character.show(Artemis.charaktere.alaistar, Artemis.charaktere.alaistar.pose.neutral, Artemis.ƒS.positionPercent(Artemis.charaktere.alaistar.positionRightMiddle.x, Artemis.charaktere.alaistar.positionRightMiddle.y));
        await Artemis.ƒS.Character.hide(Artemis.charaktere.bronte);
        await Artemis.ƒS.Character.show(Artemis.charaktere.bronte, Artemis.charaktere.bronte.pose.think, Artemis.ƒS.positionPercent(Artemis.charaktere.bronte.positionStandard.x, Artemis.charaktere.bronte.positionStandard.y));
        await Artemis.ƒS.update(0.4);
        await Artemis.ƒS.Speech.tell(Artemis.charaktere.bronte, " Entschuldigung Mr. Blackburn. Meine Begleitung und ich haben draußen bei der Ankunft tatsächlich eine Katze gesehen. ");
        await Artemis.ƒS.Speech.tell(Artemis.charaktere.bronte, " Wenn es Ihnen nichts ausmacht, könnten wir kurz raus gehen und schauen, ob wir sie finden.  ");
        await Artemis.ƒS.Speech.tell(Artemis.charaktere.grace, " Oh meine arme Artemis… Ganz alleine in dieser schrecklichen Welt! Was ist wenn sie irgend so einen Streuner trifft. Oh weh, die Arme zittert bestimmt vor Angst! ");
        await Artemis.ƒS.Character.hide(Artemis.charaktere.grace);
        await Artemis.ƒS.Character.show(Artemis.charaktere.isaac, Artemis.charaktere.isaac.pose.neutral, Artemis.ƒS.positionPercent(Artemis.charaktere.isaac.positionLeftMiddle.x, Artemis.charaktere.isaac.positionLeftMiddle.y));
        await Artemis.ƒS.update(0.4);
        await Artemis.ƒS.Speech.tell(Artemis.charaktere.isaac, " Kaum vorzustellen, warum sie weglaufen sollte… ");
        await Artemis.ƒS.Character.hide(Artemis.charaktere.isaac);
        await Artemis.ƒS.Character.show(Artemis.charaktere.grace, Artemis.charaktere.grace.pose.sad, Artemis.ƒS.positionPercent(Artemis.charaktere.grace.positionLeftMiddle.x, Artemis.charaktere.grace.positionLeftMiddle.y));
        await Artemis.ƒS.update(0.4);
        await Artemis.ƒS.Speech.tell(Artemis.charaktere.grace, " Bitte Miss Bronte! Helfen sie mir! Bitte. ");
        await Artemis.ƒS.Character.hide(Artemis.charaktere.bronte);
        await Artemis.ƒS.Character.show(Artemis.charaktere.bronte, Artemis.charaktere.bronte.pose.think, Artemis.ƒS.positionPercent(Artemis.charaktere.bronte.positionStandard.x, Artemis.charaktere.bronte.positionStandard.y));
        await Artemis.ƒS.update(0.4);
        await Artemis.ƒS.Speech.tell(Artemis.charaktere.bronte, " Natürlich. Wenn wir sie gerade wirklich draußen gesehen haben, kann sie ja nicht weit sein. Maire und ich schauen es uns kurz an. ");
        await Artemis.ƒS.Speech.tell(Artemis.charaktere.alaistar, " Einen Moment noch. ");
        await Artemis.ƒS.Character.hide(Artemis.charaktere.bronte);
        await Artemis.ƒS.Character.show(Artemis.charaktere.bronte, Artemis.charaktere.bronte.pose.happy, Artemis.ƒS.positionPercent(Artemis.charaktere.bronte.positionStandard.x, Artemis.charaktere.bronte.positionStandard.y));
        await Artemis.ƒS.update(0.4);
        await Artemis.ƒS.Speech.tell(Artemis.charaktere.bronte, " Ja? ");
        await Artemis.ƒS.Speech.tell(Artemis.charaktere.alaistar, " Bitte denken sie daran, dass Sie sich immer noch auf einem alten und sehr Ehrenwerten Anwesen befinden. Verhalten Sie sich dementsprechend.");
        let beeingRespectfullDecision = await Artemis.ƒS.Menu.getInput(chooseBeRespectfull, "basicChoice");
        switch (beeingRespectfullDecision) {
            case chooseBeRespectfull.yes:
                await Artemis.ƒS.Speech.tell(Artemis.charaktere.bronte, "Natürlich. Meine Untersuchungen nehmen immer Rücksicht auf die Betroffenen. ");
                await Artemis.ƒS.Speech.tell(Artemis.charaktere.alaistar, " Danke.");
                break;
            case chooseBeRespectfull.no:
                await Artemis.ƒS.Character.hide(Artemis.charaktere.bronte);
                await Artemis.ƒS.Character.show(Artemis.charaktere.bronte, Artemis.charaktere.bronte.pose.angry, Artemis.ƒS.positionPercent(Artemis.charaktere.bronte.positionStandard.x, Artemis.charaktere.bronte.positionStandard.y));
                await Artemis.ƒS.update(0.4);
                await Artemis.ƒS.Speech.tell(Artemis.charaktere.bronte, "Dass ist nicht akzeptabel. Meine Untersuchungen werden so geführt, wie ich es für richtig halte!");
                await Artemis.ƒS.Character.hide(Artemis.charaktere.alaistar);
                await Artemis.ƒS.Character.show(Artemis.charaktere.alaistar, Artemis.charaktere.alaistar.pose.angry, Artemis.ƒS.positionPercent(Artemis.charaktere.alaistar.positionRightMiddle.x, Artemis.charaktere.alaistar.positionRightMiddle.y));
                await Artemis.ƒS.update(0.4);
                await Artemis.ƒS.Speech.tell(Artemis.charaktere.alaistar, "Sie vergessen wohl, dass sie nur Gäste sind. Sollten Ihre „Untersuchungen“ unseren Frieden stören, werde ich sie auffordern zu gehen.");
                await Artemis.ƒS.Speech.tell(Artemis.charaktere.bronte, "Mhm…");
                Artemis.dataForSave.pointAngryGrace += 1;
                break;
        }
        await Artemis.ƒS.Character.hide(Artemis.charaktere.alaistar);
        await Artemis.ƒS.Character.hide(Artemis.charaktere.grace);
        await Artemis.ƒS.update(0.4);
        document.getElementById("meterScale").setAttribute("style", "display: block;");
        Artemis.ƒS.Text.addClass("scaleUnlocked");
        Artemis.ƒS.Text.print("<h4> Gemütleiste freigeschaltet </h4> <p>Achte auf die Gemütsleiste um bei deinen Gastgebern nicht negativ aufzufallen. Das Abenteuer könnte sonst schnell vorbei sein. ");
        await Artemis.ƒS.Character.hide(Artemis.charaktere.maire);
        await Artemis.ƒS.Character.show(Artemis.charaktere.maire, Artemis.charaktere.maire.pose.sad, Artemis.ƒS.positionPercent(Artemis.charaktere.maire.positionStandard.x, Artemis.charaktere.maire.positionStandard.y));
        await Artemis.ƒS.update(0.4);
        await Artemis.ƒS.Speech.tell(Artemis.charaktere.maire, "Wir sollten wirklich vorsichtig sein nicht den guten Willen unserer Gastgeber zu stören. ");
        await Artemis.ƒS.Speech.tell(Artemis.charaktere.bronte, "Scheinbar… lass uns gehen.");
        await Artemis.ƒS.Character.hide(Artemis.charaktere.maire);
        await Artemis.ƒS.Character.hide(Artemis.charaktere.bronte);
        await Artemis.ƒS.update(0.8);
        await Artemis.ƒS.Sound.fade(Artemis.sound.dramaInSaloon, 0, 0);
        return "SceneFiveOutside";
    }
    Artemis.SceneFourSaalonDrama = SceneFourSaalonDrama;
})(Artemis || (Artemis = {}));
var Artemis;
(function (Artemis) {
    async function SceneNineEntryhall() {
        let chooseWhatHapppendFirst = {
            sawCat: "Katze gesehen",
            remington: "Remington gesehen",
            house: "Haus bewundert"
        };
        let chooseWhatButlerTold = {
            houseOld: "Haus ist alt",
            graceInheritance: "Grace erbte",
            alaistarInheritance: "Alaistar erbte"
        };
        let chooseWhoWrongInSaalon = {
            stella: "Stella",
            isaac: "Isaac",
            alaistarGarce: "Alaistar & Grace"
        };
        let chooseWhatHappendCat = {
            secretShed: "Geheimer Schuppen",
            catTrapped: "Katze eingesperrt"
        };
        let chooseWhoActedWeird = {
            isaac: "Isaac",
            grace: "Grace",
            stella: "Stella"
        };
        let pointsRecap = 0;
        let chooseSearchCloaks = {
            yes: "Ja",
            no: "Nein"
        };
        let chooseWhichCloak = {
            isaac: "Geflickte Jacke",
            grace: "Damenpelz",
            alaistar: "Schwarzer Mantel mit rotem Samt",
            stella: "Leichte Damenjacke",
            stop: "Aufhören"
        };
        let chooseWhoGun = {
            isaac: "Isaac",
            grace: "Grace",
            stella: "Stella",
            alaistar: "Alaistar"
        };
        let takeGun = {
            yes: "Ja",
            no: "Nein"
        };
        let lastCloakIsaac = false;
        let counterHowManyCloaks = 0;
        let stillInLoop = true;
        Artemis.ƒS.Sound.play(Artemis.sound.themeEntryhall, 0.4, true);
        await Artemis.ƒS.Location.show(Artemis.location.entrance);
        await Artemis.ƒS.update(Artemis.transistions.standard.duration, Artemis.transistions.standard.alpha, Artemis.transistions.standard.edge);
        await Artemis.ƒS.update();
        await Artemis.ƒS.Character.show(Artemis.charaktere.maire, Artemis.charaktere.maire.pose.neutral, Artemis.ƒS.positionPercent(Artemis.charaktere.maire.positionStandard.x, Artemis.charaktere.maire.positionStandard.y));
        await Artemis.ƒS.Character.show(Artemis.charaktere.bronte, Artemis.charaktere.bronte.pose.happy, Artemis.ƒS.positionPercent(Artemis.charaktere.bronte.positionStandard.x, Artemis.charaktere.bronte.positionStandard.y));
        await Artemis.ƒS.update(0.8);
        await Artemis.ƒS.Speech.tell(Artemis.charaktere.maire, " Uff… meinst du, die haben verdacht geschöpft? ");
        await Artemis.ƒS.Character.hide(Artemis.charaktere.bronte);
        await Artemis.ƒS.Character.show(Artemis.charaktere.bronte, Artemis.charaktere.bronte.pose.laugh, Artemis.ƒS.positionPercent(Artemis.charaktere.bronte.positionStandard.x, Artemis.charaktere.bronte.positionStandard.y));
        await Artemis.ƒS.update(0.4);
        await Artemis.ƒS.Speech.tell(Artemis.charaktere.bronte, " Ich denke nicht. Aber du solltest die Codewörter vielleicht noch einmal wiederholen. ");
        await Artemis.ƒS.Character.hide(Artemis.charaktere.bronte);
        await Artemis.ƒS.Character.show(Artemis.charaktere.bronte, Artemis.charaktere.bronte.pose.happy, Artemis.ƒS.positionPercent(Artemis.charaktere.bronte.positionStandard.x, Artemis.charaktere.bronte.positionStandard.y));
        await Artemis.ƒS.Character.hide(Artemis.charaktere.maire);
        await Artemis.ƒS.Character.show(Artemis.charaktere.maire, Artemis.charaktere.maire.pose.embarrassed, Artemis.ƒS.positionPercent(Artemis.charaktere.maire.positionStandard.x, Artemis.charaktere.maire.positionStandard.y));
        await Artemis.ƒS.update(0.4);
        await Artemis.ƒS.Speech.tell(Artemis.charaktere.maire, " Ja, tut mir leid. Ich stand etwas auf dem Schlauch. Aber jetzt wo wir unsere Ruhe haben was ist der Plan? ");
        await Artemis.ƒS.Character.hide(Artemis.charaktere.maire);
        await Artemis.ƒS.Character.show(Artemis.charaktere.maire, Artemis.charaktere.maire.pose.neutral, Artemis.ƒS.positionPercent(Artemis.charaktere.maire.positionStandard.x, Artemis.charaktere.maire.positionStandard.y));
        await Artemis.ƒS.update(0.4);
        await Artemis.ƒS.Speech.tell(Artemis.charaktere.bronte, " Wir sollten uns etwas umschauen. Die ganze Sache gefällt mir nicht. ");
        await Artemis.ƒS.Character.hide(Artemis.charaktere.maire);
        await Artemis.ƒS.Character.show(Artemis.charaktere.maire, Artemis.charaktere.maire.pose.happy, Artemis.ƒS.positionPercent(Artemis.charaktere.maire.positionStandard.x, Artemis.charaktere.maire.positionStandard.y));
        await Artemis.ƒS.update(0.4);
        await Artemis.ƒS.Speech.tell(Artemis.charaktere.maire, " Ja warte, lass uns kurz alles zusammentragen. Was genau ist heute Abend passiert? Konzentrieren wir uns dabei auf das was wirklich wichtig war! ");
        await Artemis.ƒS.Character.hide(Artemis.charaktere.bronte);
        await Artemis.ƒS.Character.show(Artemis.charaktere.bronte, Artemis.charaktere.bronte.pose.think, Artemis.ƒS.positionPercent(Artemis.charaktere.bronte.positionStandard.x, Artemis.charaktere.bronte.positionStandard.y));
        await Artemis.ƒS.update(0.4);
        await Artemis.ƒS.Speech.tell(Artemis.charaktere.bronte, " Okay. Als wir beim Anwesen angekommen sind, ist…");
        let userChooseWhatHapppendFirst = await Artemis.ƒS.Menu.getInput(chooseWhatHapppendFirst, "basicChoice");
        switch (userChooseWhatHapppendFirst) {
            case chooseWhatHapppendFirst.house:
                break;
            case chooseWhatHapppendFirst.remington:
                break;
            case chooseWhatHapppendFirst.sawCat:
                pointsRecap += 1;
                break;
        }
        await Artemis.ƒS.Speech.tell(Artemis.charaktere.bronte, "Danach, hat der Butler uns erzählt das...");
        let userChooseWhatButlerTold = await Artemis.ƒS.Menu.getInput(chooseWhatButlerTold, "basicChoice");
        switch (userChooseWhatButlerTold) {
            case chooseWhatButlerTold.alaistarInheritance:
                pointsRecap += 1;
                break;
            case chooseWhatButlerTold.graceInheritance:
                break;
            case chooseWhatButlerTold.houseOld:
                break;
        }
        await Artemis.ƒS.Speech.tell(Artemis.charaktere.bronte, "Im Saalon wirkte eine Person fehl am Platz...");
        let userchooseWhoWrongInSaalon = await Artemis.ƒS.Menu.getInput(chooseWhoWrongInSaalon, "basicChoice");
        switch (userchooseWhoWrongInSaalon) {
            case chooseWhoWrongInSaalon.alaistarGarce:
                break;
            case chooseWhoWrongInSaalon.isaac:
                pointsRecap += 1;
                break;
            case chooseWhoWrongInSaalon.stella:
                break;
        }
        await Artemis.ƒS.Speech.tell(Artemis.charaktere.bronte, "Die Katze ist verschwunden und wir haben herausgefunden, dass ...");
        let userChooseWhatHappendCat = await Artemis.ƒS.Menu.getInput(chooseWhatHappendCat, "basicChoice");
        switch (userChooseWhatHappendCat) {
            case chooseWhatHappendCat.catTrapped:
                pointsRecap += 1;
                break;
            case chooseWhatHappendCat.secretShed:
                break;
        }
        await Artemis.ƒS.Speech.tell(Artemis.charaktere.bronte, "Doch das seltsamste Verhalten danach war von...");
        let userChooseWhoActedWeird = await Artemis.ƒS.Menu.getInput(chooseWhoActedWeird, "basicChoice");
        switch (userChooseWhoActedWeird) {
            case chooseWhoActedWeird.grace:
                break;
            case chooseWhoActedWeird.isaac:
                break;
            case chooseWhoActedWeird.stella:
                pointsRecap += 1;
                break;
        }
        if (pointsRecap >= 3) {
            Artemis.dataForSave.pointDetectiv += 1;
            await Artemis.ƒS.Character.hide(Artemis.charaktere.maire);
            await Artemis.ƒS.Character.show(Artemis.charaktere.maire, Artemis.charaktere.maire.pose.laugh, Artemis.ƒS.positionPercent(Artemis.charaktere.maire.positionStandard.x, Artemis.charaktere.maire.positionStandard.y));
            await Artemis.ƒS.update(0.4);
            await Artemis.ƒS.Speech.tell(Artemis.charaktere.maire, "  Sehr gut! Vielleicht müssen wir noch an manchen Einzelheiten Pfeilen aber, ungefähr so war es. ");
            await Artemis.ƒS.Character.hide(Artemis.charaktere.maire);
            await Artemis.ƒS.Character.show(Artemis.charaktere.maire, Artemis.charaktere.maire.pose.neutral, Artemis.ƒS.positionPercent(Artemis.charaktere.maire.positionStandard.x, Artemis.charaktere.maire.positionStandard.y));
            await Artemis.ƒS.update(0.4);
        }
        else {
            await Artemis.ƒS.Character.hide(Artemis.charaktere.maire);
            await Artemis.ƒS.Character.show(Artemis.charaktere.maire, Artemis.charaktere.maire.pose.sad, Artemis.ƒS.positionPercent(Artemis.charaktere.maire.positionStandard.x, Artemis.charaktere.maire.positionStandard.y));
            await Artemis.ƒS.update(0.4);
            await Artemis.ƒS.Speech.tell(Artemis.charaktere.maire, "Mhm… also meine Notizen sind etwas anders. Wir haben Artemis gesehen, dann hat der Butler uns erzählt Alaistar sei der Erbe. ");
            await Artemis.ƒS.Speech.tell(Artemis.charaktere.maire, "Isaac kommt zu besuch obwohl die Familie ihn nicht mag. Jemand hat die Katze im Garten einschlossen und Stella hat geschrien.");
            await Artemis.ƒS.Character.hide(Artemis.charaktere.bronte);
            await Artemis.ƒS.Character.show(Artemis.charaktere.bronte, Artemis.charaktere.bronte.pose.laugh, Artemis.ƒS.positionPercent(Artemis.charaktere.bronte.positionStandard.x, Artemis.charaktere.bronte.positionStandard.y));
            await Artemis.ƒS.Character.hide(Artemis.charaktere.maire);
            await Artemis.ƒS.Character.show(Artemis.charaktere.maire, Artemis.charaktere.maire.pose.happy, Artemis.ƒS.positionPercent(Artemis.charaktere.maire.positionStandard.x, Artemis.charaktere.maire.positionStandard.y));
            await Artemis.ƒS.update(0.4);
            await Artemis.ƒS.Speech.tell(Artemis.charaktere.bronte, "Was würde ich nur ohne deine Hilfe tun. Danke Maire.");
            await Artemis.ƒS.Character.hide(Artemis.charaktere.maire);
            await Artemis.ƒS.Character.show(Artemis.charaktere.maire, Artemis.charaktere.maire.pose.neutral, Artemis.ƒS.positionPercent(Artemis.charaktere.maire.positionStandard.x, Artemis.charaktere.maire.positionStandard.y));
            await Artemis.ƒS.update(0.4);
        }
        await Artemis.ƒS.Speech.tell(Artemis.charaktere.maire, " Ja… komisch diese ganzen Sachen. ");
        await Artemis.ƒS.Character.hide(Artemis.charaktere.bronte);
        await Artemis.ƒS.Character.show(Artemis.charaktere.bronte, Artemis.charaktere.bronte.pose.sad, Artemis.ƒS.positionPercent(Artemis.charaktere.bronte.positionStandard.x, Artemis.charaktere.bronte.positionStandard.y));
        await Artemis.ƒS.update(0.4);
        await Artemis.ƒS.Speech.tell(Artemis.charaktere.bronte, " Und wie… ich denke uns fehlen noch ein paar Informationen, um wirklich alles zusammenzusetzen. ");
        await Artemis.ƒS.Character.hide(Artemis.charaktere.maire);
        await Artemis.ƒS.Character.show(Artemis.charaktere.maire, Artemis.charaktere.maire.pose.sad, Artemis.ƒS.positionPercent(Artemis.charaktere.maire.positionStandard.x, Artemis.charaktere.maire.positionStandard.y));
        await Artemis.ƒS.update(0.4);
        await Artemis.ƒS.Speech.tell(Artemis.charaktere.maire, " Ja. Woher kommt der Ring? Was ist mit Stella los? Und ich für meinen Teil traue dem Butler immer noch nicht. ");
        await Artemis.ƒS.Character.hide(Artemis.charaktere.maire);
        await Artemis.ƒS.Character.show(Artemis.charaktere.maire, Artemis.charaktere.maire.pose.neutral, Artemis.ƒS.positionPercent(Artemis.charaktere.maire.positionStandard.x, Artemis.charaktere.maire.positionStandard.y));
        await Artemis.ƒS.update(0.4);
        await Artemis.ƒS.Speech.tell(Artemis.charaktere.bronte, " Alles gute Punkte. Auf meiner Liste steht auch immer noch Isaac. ");
        await Artemis.ƒS.Character.hide(Artemis.charaktere.maire);
        await Artemis.ƒS.Character.show(Artemis.charaktere.maire, Artemis.charaktere.maire.pose.fear, Artemis.ƒS.positionPercent(Artemis.charaktere.maire.positionStandard.x, Artemis.charaktere.maire.positionStandard.y));
        await Artemis.ƒS.update(0.4);
        await Artemis.ƒS.Speech.tell(Artemis.charaktere.maire, " Oh warum das? ");
        await Artemis.ƒS.Character.hide(Artemis.charaktere.maire);
        await Artemis.ƒS.Character.show(Artemis.charaktere.maire, Artemis.charaktere.maire.pose.neutral, Artemis.ƒS.positionPercent(Artemis.charaktere.maire.positionStandard.x, Artemis.charaktere.maire.positionStandard.y));
        await Artemis.ƒS.Character.hide(Artemis.charaktere.bronte);
        await Artemis.ƒS.Character.show(Artemis.charaktere.bronte, Artemis.charaktere.bronte.pose.think, Artemis.ƒS.positionPercent(Artemis.charaktere.bronte.positionStandard.x, Artemis.charaktere.bronte.positionStandard.y));
        await Artemis.ƒS.update(0.4);
        await Artemis.ƒS.Speech.tell(Artemis.charaktere.bronte, " Mich wundert es, dass er immer noch die Familie besucht, die ihn doch nicht äußerst anständig behandelt. ");
        await Artemis.ƒS.Speech.tell(Artemis.charaktere.maire, " Das ist ein sehr guter Punkt, der mir bisher gar nicht eingefallen war. Die Frage ist nur wo wir diese ganzen Antworten herbekommen? ");
        await Artemis.ƒS.Character.hide(Artemis.charaktere.bronte);
        await Artemis.ƒS.Character.show(Artemis.charaktere.bronte, Artemis.charaktere.bronte.pose.sad, Artemis.ƒS.positionPercent(Artemis.charaktere.bronte.positionStandard.x, Artemis.charaktere.bronte.positionStandard.y));
        await Artemis.ƒS.update(0.4);
        await Artemis.ƒS.Speech.tell(Artemis.charaktere.bronte, " Ich denke wir sollten das Manor etwas genauer unter die Luppe nehmen. Vor allem das Arbeitszimmer. ");
        await Artemis.ƒS.Character.hide(Artemis.charaktere.maire);
        await Artemis.ƒS.Character.show(Artemis.charaktere.maire, Artemis.charaktere.maire.pose.fear, Artemis.ƒS.positionPercent(Artemis.charaktere.maire.positionStandard.x, Artemis.charaktere.maire.positionStandard.y));
        await Artemis.ƒS.update(0.4);
        await Artemis.ƒS.Speech.tell(Artemis.charaktere.maire, " Das Arbeitszimmer? Interessierst du dich etwas für die Steuern der Familie? ");
        await Artemis.ƒS.Character.hide(Artemis.charaktere.maire);
        await Artemis.ƒS.Character.show(Artemis.charaktere.maire, Artemis.charaktere.maire.pose.neutral, Artemis.ƒS.positionPercent(Artemis.charaktere.maire.positionStandard.x, Artemis.charaktere.maire.positionStandard.y));
        await Artemis.ƒS.update(0.4);
        await Artemis.ƒS.Speech.tell(Artemis.charaktere.bronte, " Nein, aber ich habe so eine Vermutung, dort könnten interessante Unterlagen sein. Und es ist immerhin der Ursprungspunkt des Verbrechens! ");
        await Artemis.ƒS.Speech.tell(Artemis.charaktere.maire, " Hä? ");
        await Artemis.ƒS.Speech.tell(Artemis.charaktere.bronte, " Naja dort ist Artemis verschwunden. ");
        await Artemis.ƒS.Character.hide(Artemis.charaktere.maire);
        await Artemis.ƒS.Character.show(Artemis.charaktere.maire, Artemis.charaktere.maire.pose.happy, Artemis.ƒS.positionPercent(Artemis.charaktere.maire.positionStandard.x, Artemis.charaktere.maire.positionStandard.y));
        await Artemis.ƒS.update(0.4);
        await Artemis.ƒS.Speech.tell(Artemis.charaktere.maire, " Oh stimmt! Grace meinte das Artemis dort eigentlich immer ist, außer sie wird in den Garten gelassen von den Angestellten. ");
        await Artemis.ƒS.Character.hide(Artemis.charaktere.maire);
        await Artemis.ƒS.Character.show(Artemis.charaktere.maire, Artemis.charaktere.maire.pose.neutral, Artemis.ƒS.positionPercent(Artemis.charaktere.maire.positionStandard.x, Artemis.charaktere.maire.positionStandard.y));
        await Artemis.ƒS.Character.hide(Artemis.charaktere.bronte);
        await Artemis.ƒS.Character.show(Artemis.charaktere.bronte, Artemis.charaktere.bronte.pose.happy, Artemis.ƒS.positionPercent(Artemis.charaktere.bronte.positionStandard.x, Artemis.charaktere.bronte.positionStandard.y));
        await Artemis.ƒS.update(0.4);
        await Artemis.ƒS.Speech.tell(Artemis.charaktere.bronte, " Ja, ich denke dort können wir vielleicht Hinweise darüber finden, was genau hier vorgeht. Also lass uns loslegen! ");
        await Artemis.ƒS.Character.hide(Artemis.charaktere.bronte);
        await Artemis.ƒS.Character.show(Artemis.charaktere.bronte, Artemis.charaktere.bronte.pose.shout, Artemis.ƒS.positionPercent(Artemis.charaktere.bronte.positionStandard.x, Artemis.charaktere.bronte.positionStandard.y));
        await Artemis.ƒS.Character.hide(Artemis.charaktere.maire);
        await Artemis.ƒS.Character.show(Artemis.charaktere.maire, Artemis.charaktere.maire.pose.fear, Artemis.ƒS.positionPercent(Artemis.charaktere.maire.positionStandard.x, Artemis.charaktere.maire.positionStandard.y));
        await Artemis.ƒS.update(0.4);
        await Artemis.ƒS.Speech.tell(Artemis.charaktere.maire, " Warte… ich habe noch eine andere Idee. Sie ist nur etwas… radikal. ");
        await Artemis.ƒS.Character.hide(Artemis.charaktere.maire);
        await Artemis.ƒS.Character.show(Artemis.charaktere.maire, Artemis.charaktere.maire.pose.neutral, Artemis.ƒS.positionPercent(Artemis.charaktere.maire.positionStandard.x, Artemis.charaktere.maire.positionStandard.y));
        await Artemis.ƒS.Character.hide(Artemis.charaktere.bronte);
        await Artemis.ƒS.Character.show(Artemis.charaktere.bronte, Artemis.charaktere.bronte.pose.think, Artemis.ƒS.positionPercent(Artemis.charaktere.bronte.positionStandard.x, Artemis.charaktere.bronte.positionStandard.y));
        await Artemis.ƒS.update(0.4);
        await Artemis.ƒS.Speech.tell(Artemis.charaktere.bronte, " Was genau? ");
        await Artemis.ƒS.Character.hide(Artemis.charaktere.maire);
        await Artemis.ƒS.Character.show(Artemis.charaktere.maire, Artemis.charaktere.maire.pose.sad, Artemis.ƒS.positionPercent(Artemis.charaktere.maire.positionStandard.x, Artemis.charaktere.maire.positionStandard.y));
        await Artemis.ƒS.update(0.4);
        await Artemis.ƒS.Speech.tell(Artemis.charaktere.maire, " Naja, ich dachte, weil alle so verschlossen sind und wir eh schon am naja rumschnüffeln sind, könnten wir vielleicht gleich ihre Sachen untersuchen? ");
        await Artemis.ƒS.Character.hide(Artemis.charaktere.bronte);
        await Artemis.ƒS.Character.show(Artemis.charaktere.bronte, Artemis.charaktere.bronte.pose.shout, Artemis.ƒS.positionPercent(Artemis.charaktere.bronte.positionStandard.x, Artemis.charaktere.bronte.positionStandard.y));
        await Artemis.ƒS.update(0.4);
        await Artemis.ƒS.Speech.tell(Artemis.charaktere.bronte, " Ihre Sachen? ");
        await Artemis.ƒS.Character.hide(Artemis.charaktere.maire);
        await Artemis.ƒS.Character.show(Artemis.charaktere.maire, Artemis.charaktere.maire.pose.neutral, Artemis.ƒS.positionPercent(Artemis.charaktere.maire.positionStandard.x, Artemis.charaktere.maire.positionStandard.y));
        await Artemis.ƒS.Character.hide(Artemis.charaktere.bronte);
        await Artemis.ƒS.Character.show(Artemis.charaktere.bronte, Artemis.charaktere.bronte.pose.think, Artemis.ƒS.positionPercent(Artemis.charaktere.bronte.positionStandard.x, Artemis.charaktere.bronte.positionStandard.y));
        await Artemis.ƒS.update(0.4);
        await Artemis.ƒS.Speech.tell(Artemis.charaktere.maire, " Ja, der Butler hat die Mäntel doch vorhin aufgehängt. Dort vorne hängen sie. Wenn gerade keiner da ist, könnten wir sie vielleicht durchsuchen…");
        let userChooseSearchCloaks = await Artemis.ƒS.Menu.getInput(chooseSearchCloaks, "basicChoice");
        switch (userChooseSearchCloaks) {
            case chooseSearchCloaks.yes:
                Artemis.dataForSave.lookedAtCoats = true;
                await Artemis.ƒS.Speech.tell(Artemis.charaktere.bronte, " Ich denke, dass ist eine gute Idee. Wir sollten nur schnell sein, nicht dass uns jemand erwischt. ");
                await Artemis.ƒS.Character.hide(Artemis.charaktere.maire);
                await Artemis.ƒS.Character.show(Artemis.charaktere.maire, Artemis.charaktere.maire.pose.sad, Artemis.ƒS.positionPercent(Artemis.charaktere.maire.positionStandard.x, Artemis.charaktere.maire.positionStandard.y));
                await Artemis.ƒS.update(0.4);
                await Artemis.ƒS.Speech.tell(Artemis.charaktere.maire, " Okay, dann schnell. Mhm… Also wir haben hier 4 Jacken. Welche sollen wir zuerst anschauen?");
                while (stillInLoop) {
                    let userChooseWhichCloak = await Artemis.ƒS.Menu.getInput(chooseWhichCloak, "basicChoice");
                    switch (userChooseWhichCloak) {
                        case chooseWhichCloak.grace:
                            await Artemis.ƒS.Speech.tell(Artemis.charaktere.bronte, " Ein schwerer Damenmantel aus einem teuren Pelz.  ");
                            await Artemis.ƒS.Character.hide(Artemis.charaktere.bronte);
                            await Artemis.ƒS.Character.show(Artemis.charaktere.bronte, Artemis.charaktere.bronte.pose.sad, Artemis.ƒS.positionPercent(Artemis.charaktere.bronte.positionStandard.x, Artemis.charaktere.bronte.positionStandard.y));
                            await Artemis.ƒS.update(0.4);
                            await Artemis.ƒS.Speech.tell(Artemis.charaktere.bronte, " Mhm… Hier in der Tasche ist eine Tanzkarte von einem Ball. Eine Puderdose aber sonst nicht wirklich viel.   ");
                            await Artemis.ƒS.Character.hide(Artemis.charaktere.bronte);
                            await Artemis.ƒS.Character.show(Artemis.charaktere.bronte, Artemis.charaktere.bronte.pose.think, Artemis.ƒS.positionPercent(Artemis.charaktere.bronte.positionStandard.x, Artemis.charaktere.bronte.positionStandard.y));
                            await Artemis.ƒS.update(0.4);
                            counterHowManyCloaks += 1;
                            lastCloakIsaac = false;
                            chooseWhichCloak.grace = "";
                            await checkIfLoopShouldContinue();
                            break;
                        case chooseWhichCloak.alaistar:
                            await Artemis.ƒS.Speech.tell(Artemis.charaktere.bronte, " Einen schwerer schwarzer Mantel mit rotem Samt drin. ");
                            await Artemis.ƒS.Character.hide(Artemis.charaktere.bronte);
                            await Artemis.ƒS.Character.show(Artemis.charaktere.bronte, Artemis.charaktere.bronte.pose.shout, Artemis.ƒS.positionPercent(Artemis.charaktere.bronte.positionStandard.x, Artemis.charaktere.bronte.positionStandard.y));
                            await Artemis.ƒS.update(0.4);
                            await Artemis.ƒS.Speech.tell(Artemis.charaktere.bronte, " Eine Brille, ein Tabakdose und oh… Oh weh. ");
                            await Artemis.ƒS.Character.hide(Artemis.charaktere.maire);
                            await Artemis.ƒS.Character.show(Artemis.charaktere.maire, Artemis.charaktere.maire.pose.neutral, Artemis.ƒS.positionPercent(Artemis.charaktere.maire.positionStandard.x, Artemis.charaktere.maire.positionStandard.y));
                            await Artemis.ƒS.update(0.4);
                            await Artemis.ƒS.Speech.tell(Artemis.charaktere.maire, " Was ist? ");
                            await Artemis.ƒS.Character.hide(Artemis.charaktere.maire);
                            await Artemis.ƒS.Character.show(Artemis.charaktere.maire, Artemis.charaktere.maire.pose.fear, Artemis.ƒS.positionPercent(Artemis.charaktere.maire.positionStandard.x, Artemis.charaktere.maire.positionStandard.y));
                            await Artemis.ƒS.Character.hide(Artemis.charaktere.bronte);
                            await Artemis.ƒS.Character.show(Artemis.charaktere.bronte, Artemis.charaktere.bronte.pose.think, Artemis.ƒS.positionPercent(Artemis.charaktere.bronte.positionStandard.x, Artemis.charaktere.bronte.positionStandard.y));
                            await Artemis.ƒS.update(0.4);
                            await Artemis.ƒS.Speech.tell(Artemis.charaktere.bronte, " Hier ist eine Waffe. ");
                            await Artemis.ƒS.Character.hide(Artemis.charaktere.bronte);
                            await Artemis.ƒS.Character.show(Artemis.charaktere.bronte, Artemis.charaktere.bronte.pose.sad, Artemis.ƒS.positionPercent(Artemis.charaktere.bronte.positionStandard.x, Artemis.charaktere.bronte.positionStandard.y));
                            await Artemis.ƒS.update(0.4);
                            await Artemis.ƒS.Speech.tell(Artemis.charaktere.maire, " !!! Was ");
                            await Artemis.ƒS.Character.hide(Artemis.charaktere.maire);
                            await Artemis.ƒS.Character.show(Artemis.charaktere.maire, Artemis.charaktere.maire.pose.sad, Artemis.ƒS.positionPercent(Artemis.charaktere.maire.positionStandard.x, Artemis.charaktere.maire.positionStandard.y));
                            await Artemis.ƒS.update(0.4);
                            await Artemis.ƒS.Speech.tell(Artemis.charaktere.bronte, " Ja eine kleine Pistole.  4 Schuss. Keine Jagdwaffe oder so. Ein echter Revolver. ");
                            await Artemis.ƒS.Character.hide(Artemis.charaktere.maire);
                            await Artemis.ƒS.Character.show(Artemis.charaktere.maire, Artemis.charaktere.maire.pose.neutral, Artemis.ƒS.positionPercent(Artemis.charaktere.maire.positionStandard.x, Artemis.charaktere.maire.positionStandard.y));
                            await Artemis.ƒS.update(0.4);
                            await Artemis.ƒS.Speech.tell(Artemis.charaktere.maire, " Wer würde so ein Revolver einfach in seinem Mantel dabeihaben?");
                            let userChooseWhoGun = await Artemis.ƒS.Menu.getInput(chooseWhoGun, "basicChoice");
                            switch (userChooseWhoGun) {
                                case chooseWhoGun.grace:
                                case chooseWhoGun.isaac:
                                case chooseWhoGun.stella:
                                    await Artemis.ƒS.Character.hide(Artemis.charaktere.maire);
                                    await Artemis.ƒS.Character.show(Artemis.charaktere.maire, Artemis.charaktere.maire.pose.sad, Artemis.ƒS.positionPercent(Artemis.charaktere.maire.positionStandard.x, Artemis.charaktere.maire.positionStandard.y));
                                    await Artemis.ƒS.update(0.4);
                                    await Artemis.ƒS.Speech.tell(Artemis.charaktere.maire, " Mhm… ich weiß ja nicht. Der Mantel scheint eher zu Mr. Blackburn zu gehören. Er ist der einzige mit einer Brille. ");
                                    break;
                                case chooseWhoGun.alaistar:
                                    Artemis.dataForSave.pointDetectiv += 1;
                                    await Artemis.ƒS.Speech.tell(Artemis.charaktere.bronte, "Dunkler teurer Mantel mit einer Brille. Dieser Mantel gehört zu Mr. Blackburn. Aber ich weiß nicht warum er eine Waffe braucht. ");
                                    break;
                            }
                            await Artemis.ƒS.Speech.tell(Artemis.charaktere.maire, "Wir können denn nicht hierlassen, oder? Sollen wir ihn mitnehmen?");
                            let userTakeGun = await Artemis.ƒS.Menu.getInput(takeGun, "basicChoice");
                            switch (userTakeGun) {
                                case takeGun.yes:
                                    await Artemis.ƒS.Inventory.add(Artemis.inventory.pistol);
                                    await Artemis.ƒS.Inventory.open();
                                    Artemis.dataForSave.tookGun = true;
                                    await Artemis.ƒS.Speech.tell(Artemis.charaktere.bronte, " Ja. Ich habe ein schlechtes Gefühl… Lass ihn mitnehmen. ");
                                    break;
                                case takeGun.no:
                                    await Artemis.ƒS.Character.hide(Artemis.charaktere.bronte);
                                    await Artemis.ƒS.Character.show(Artemis.charaktere.bronte, Artemis.charaktere.bronte.pose.think, Artemis.ƒS.positionPercent(Artemis.charaktere.bronte.positionStandard.x, Artemis.charaktere.bronte.positionStandard.y));
                                    await Artemis.ƒS.update(0.4);
                                    await Artemis.ƒS.Speech.tell(Artemis.charaktere.bronte, "Mhm… ich weiß nicht. Es wäre Diebstahl.  ");
                                    await Artemis.ƒS.Character.hide(Artemis.charaktere.maire);
                                    await Artemis.ƒS.Character.show(Artemis.charaktere.maire, Artemis.charaktere.maire.pose.neutral, Artemis.ƒS.positionPercent(Artemis.charaktere.maire.positionStandard.x, Artemis.charaktere.maire.positionStandard.y));
                                    await Artemis.ƒS.update(0.4);
                                    await Artemis.ƒS.Speech.tell(Artemis.charaktere.maire, " Ja stimmt schon… Trotzdem. Ich habe ein schlechtes Gefühl bei der Sache. ");
                                    await Artemis.ƒS.Character.hide(Artemis.charaktere.bronte);
                                    await Artemis.ƒS.Character.show(Artemis.charaktere.bronte, Artemis.charaktere.bronte.pose.sad, Artemis.ƒS.positionPercent(Artemis.charaktere.bronte.positionStandard.x, Artemis.charaktere.bronte.positionStandard.y));
                                    await Artemis.ƒS.update(0.4);
                                    break;
                            }
                            counterHowManyCloaks += 1;
                            lastCloakIsaac = false;
                            chooseWhichCloak.alaistar = "";
                            await checkIfLoopShouldContinue();
                            break;
                        case chooseWhichCloak.stella:
                            await Artemis.ƒS.Speech.tell(Artemis.charaktere.bronte, " Eine leichte Sommerjacke in einem zarten Blau. ");
                            await Artemis.ƒS.Character.hide(Artemis.charaktere.bronte);
                            await Artemis.ƒS.Character.show(Artemis.charaktere.bronte, Artemis.charaktere.bronte.pose.laugh, Artemis.ƒS.positionPercent(Artemis.charaktere.bronte.positionStandard.x, Artemis.charaktere.bronte.positionStandard.y));
                            await Artemis.ƒS.update(0.4);
                            await Artemis.ƒS.Speech.tell(Artemis.charaktere.bronte, " Eine Puderdose und ein kleiner Spiegel. Oh und ein paar Bonbons. Himbeere.   ");
                            await Artemis.ƒS.Character.hide(Artemis.charaktere.bronte);
                            await Artemis.ƒS.Character.show(Artemis.charaktere.bronte, Artemis.charaktere.bronte.pose.think, Artemis.ƒS.positionPercent(Artemis.charaktere.bronte.positionStandard.x, Artemis.charaktere.bronte.positionStandard.y));
                            await Artemis.ƒS.update(0.4);
                            counterHowManyCloaks += 1;
                            lastCloakIsaac = false;
                            chooseWhichCloak.stella = "";
                            await checkIfLoopShouldContinue();
                            break;
                        case chooseWhichCloak.isaac:
                            await Artemis.ƒS.Character.hide(Artemis.charaktere.bronte);
                            await Artemis.ƒS.Character.show(Artemis.charaktere.bronte, Artemis.charaktere.bronte.pose.sad, Artemis.ƒS.positionPercent(Artemis.charaktere.bronte.positionStandard.x, Artemis.charaktere.bronte.positionStandard.y));
                            await Artemis.ƒS.update(0.4);
                            await Artemis.ƒS.Speech.tell(Artemis.charaktere.bronte, " Ein Bild… Oh… Ein Datum von vor zwei Jahren. Eine junge Frau… Dass muss Odette sein. ");
                            await Artemis.ƒS.Character.hide(Artemis.charaktere.maire);
                            await Artemis.ƒS.Character.show(Artemis.charaktere.maire, Artemis.charaktere.maire.pose.happy, Artemis.ƒS.positionPercent(Artemis.charaktere.maire.positionStandard.x, Artemis.charaktere.maire.positionStandard.y));
                            await Artemis.ƒS.update(0.4);
                            await Artemis.ƒS.Speech.tell(Artemis.charaktere.maire, " Sie sieht so glücklich aus… Dass muss Isaacs Mantel sein. ");
                            await Artemis.ƒS.Character.hide(Artemis.charaktere.maire);
                            await Artemis.ƒS.Character.show(Artemis.charaktere.maire, Artemis.charaktere.maire.pose.sad, Artemis.ƒS.positionPercent(Artemis.charaktere.maire.positionStandard.x, Artemis.charaktere.maire.positionStandard.y));
                            await Artemis.ƒS.update(0.4);
                            await Artemis.ƒS.Speech.tell(Artemis.charaktere.bronte, " Ja… Hier ist noch ein Taschentuch und etwas Kleingeld, sonst nichts… Mhm… ");
                            await Artemis.ƒS.Speech.tell(Artemis.charaktere.maire, " Nichts Auffälliges hier. Er scheint Odette wirklich sehr zu vermissen… Der Arme.");
                            lastCloakIsaac = true;
                            counterHowManyCloaks += 1;
                            chooseWhichCloak.isaac = "";
                            await checkIfLoopShouldContinue();
                            break;
                        case chooseWhichCloak.stop:
                            await Artemis.ƒS.Character.hide(Artemis.charaktere.bronte);
                            await Artemis.ƒS.Character.show(Artemis.charaktere.bronte, Artemis.charaktere.bronte.pose.sad, Artemis.ƒS.positionPercent(Artemis.charaktere.bronte.positionStandard.x, Artemis.charaktere.bronte.positionStandard.y));
                            await Artemis.ƒS.update(0.4);
                            await Artemis.ƒS.Speech.tell(Artemis.charaktere.bronte, " Dass ist zu riskant. Lass uns gehen. ");
                            await Artemis.ƒS.Speech.tell(Artemis.charaktere.maire, " Okay.");
                            stillInLoop = false;
                            break;
                    }
                }
                break;
            case chooseSearchCloaks.no:
                await Artemis.ƒS.Speech.tell(Artemis.charaktere.bronte, " Maire, das ist keine gute Idee. Vor allem wenn Mr. Blackburn oder Grace uns dabei erwischt. Wir müssen vorsichtiger sein. ");
                await Artemis.ƒS.Speech.tell(Artemis.charaktere.maire, " Mhm… wenn du meist. Ich habe nur das Gefühl… ach… egal. Oh, da kommt Isaac. Was will der hier?");
                break;
        }
        if (lastCloakIsaac && counterHowManyCloaks == 2) {
            await Artemis.ƒS.Character.show(Artemis.charaktere.isaac, Artemis.charaktere.isaac.pose.sad, Artemis.ƒS.positionPercent(Artemis.charaktere.isaac.positionStandard.x, Artemis.charaktere.isaac.positionStandard.y));
            await Artemis.ƒS.update(0.8);
            await Artemis.ƒS.Character.hide(Artemis.charaktere.maire);
            await Artemis.ƒS.Character.show(Artemis.charaktere.maire, Artemis.charaktere.maire.pose.embarrassed, Artemis.ƒS.positionPercent(Artemis.charaktere.maire.positionStandard.x, Artemis.charaktere.maire.positionStandard.y));
            await Artemis.ƒS.Character.hide(Artemis.charaktere.bronte);
            await Artemis.ƒS.Character.show(Artemis.charaktere.bronte, Artemis.charaktere.bronte.pose.shout, Artemis.ƒS.positionPercent(Artemis.charaktere.bronte.positionStandard.x, Artemis.charaktere.bronte.positionStandard.y));
            await Artemis.ƒS.Character.hide(Artemis.charaktere.isaac);
            await Artemis.ƒS.Character.show(Artemis.charaktere.isaac, Artemis.charaktere.isaac.pose.cry, Artemis.ƒS.positionPercent(Artemis.charaktere.isaac.positionStandard.x, Artemis.charaktere.isaac.positionStandard.y));
            await Artemis.ƒS.update(0.4);
            await Artemis.ƒS.Speech.tell(Artemis.charaktere.isaac, " !!! Was machen sie da? Dass ist mein Mantel! ");
            await Artemis.ƒS.Character.hide(Artemis.charaktere.maire);
            await Artemis.ƒS.Character.show(Artemis.charaktere.maire, Artemis.charaktere.maire.pose.fear, Artemis.ƒS.positionPercent(Artemis.charaktere.maire.positionStandard.x, Artemis.charaktere.maire.positionStandard.y));
            await Artemis.ƒS.Character.hide(Artemis.charaktere.bronte);
            await Artemis.ƒS.Character.show(Artemis.charaktere.bronte, Artemis.charaktere.bronte.pose.sad, Artemis.ƒS.positionPercent(Artemis.charaktere.bronte.positionStandard.x, Artemis.charaktere.bronte.positionStandard.y));
            await Artemis.ƒS.Character.hide(Artemis.charaktere.isaac);
            await Artemis.ƒS.Character.show(Artemis.charaktere.isaac, Artemis.charaktere.isaac.pose.neutral, Artemis.ƒS.positionPercent(Artemis.charaktere.isaac.positionStandard.x, Artemis.charaktere.isaac.positionStandard.y));
            await Artemis.ƒS.update(0.4);
            await Artemis.ƒS.Speech.tell(Artemis.charaktere.maire, " Oh… äh… Dass tut uns Leid. Ich… dachte es wäre meiner. ");
            await Artemis.ƒS.Character.hide(Artemis.charaktere.maire);
            await Artemis.ƒS.Character.show(Artemis.charaktere.maire, Artemis.charaktere.maire.pose.embarrassed, Artemis.ƒS.positionPercent(Artemis.charaktere.maire.positionStandard.x, Artemis.charaktere.maire.positionStandard.y));
            await Artemis.ƒS.update(0.4);
            await Artemis.ƒS.Speech.tell(Artemis.charaktere.isaac, " Sie tragen ihren Mantel! ");
            await Artemis.ƒS.Character.hide(Artemis.charaktere.maire);
            await Artemis.ƒS.Character.show(Artemis.charaktere.maire, Artemis.charaktere.maire.pose.neutral, Artemis.ƒS.positionPercent(Artemis.charaktere.maire.positionStandard.x, Artemis.charaktere.maire.positionStandard.y));
            await Artemis.ƒS.update(0.4);
            await Artemis.ƒS.Speech.tell(Artemis.charaktere.maire, " Oh… haha… stimmt… wie doof von mir… ");
            await Artemis.ƒS.Character.hide(Artemis.charaktere.isaac);
            await Artemis.ƒS.Character.show(Artemis.charaktere.isaac, Artemis.charaktere.isaac.pose.sad, Artemis.ƒS.positionPercent(Artemis.charaktere.isaac.positionStandard.x, Artemis.charaktere.isaac.positionStandard.y));
            await Artemis.ƒS.update(0.4);
            await Artemis.ƒS.Speech.tell(Artemis.charaktere.isaac, " Mhm…");
            Artemis.dataForSave.pointAngryGrace -= 1;
            if (Artemis.dataForSave.pointAngryGrace >= 4) {
                await issacBadEnding();
                return "EndingBadGraceAngry";
            }
        }
        else {
            await Artemis.ƒS.Character.hide(Artemis.charaktere.isaac);
            await Artemis.ƒS.Character.show(Artemis.charaktere.isaac, Artemis.charaktere.isaac.pose.neutral, Artemis.ƒS.positionPercent(Artemis.charaktere.isaac.positionStandard.x, Artemis.charaktere.isaac.positionStandard.y));
            await Artemis.ƒS.update(0.8);
            await Artemis.ƒS.Character.hide(Artemis.charaktere.bronte);
            await Artemis.ƒS.Character.show(Artemis.charaktere.bronte, Artemis.charaktere.bronte.pose.shout, Artemis.ƒS.positionPercent(Artemis.charaktere.bronte.positionStandard.x, Artemis.charaktere.bronte.positionStandard.y));
            await Artemis.ƒS.Character.hide(Artemis.charaktere.maire);
            await Artemis.ƒS.Character.show(Artemis.charaktere.maire, Artemis.charaktere.maire.pose.fear, Artemis.ƒS.positionPercent(Artemis.charaktere.maire.positionStandard.x, Artemis.charaktere.maire.positionStandard.y));
            await Artemis.ƒS.Character.hide(Artemis.charaktere.isaac);
            await Artemis.ƒS.Character.show(Artemis.charaktere.isaac, Artemis.charaktere.isaac.pose.cry, Artemis.ƒS.positionPercent(Artemis.charaktere.isaac.positionStandard.x, Artemis.charaktere.isaac.positionStandard.y));
            await Artemis.ƒS.update(0.4);
            await Artemis.ƒS.Speech.tell(Artemis.charaktere.isaac, " Entschuldigen sie? ");
            await Artemis.ƒS.Character.hide(Artemis.charaktere.maire);
            await Artemis.ƒS.Character.show(Artemis.charaktere.maire, Artemis.charaktere.maire.pose.embarrassed, Artemis.ƒS.positionPercent(Artemis.charaktere.maire.positionStandard.x, Artemis.charaktere.maire.positionStandard.y));
            await Artemis.ƒS.Character.hide(Artemis.charaktere.isaac);
            await Artemis.ƒS.Character.show(Artemis.charaktere.isaac, Artemis.charaktere.isaac.pose.neutral, Artemis.ƒS.positionPercent(Artemis.charaktere.isaac.positionStandard.x, Artemis.charaktere.isaac.positionStandard.y));
            await Artemis.ƒS.update(0.4);
            await Artemis.ƒS.Speech.tell(Artemis.charaktere.maire, " !!! ");
            await Artemis.ƒS.Character.hide(Artemis.charaktere.bronte);
            await Artemis.ƒS.Character.show(Artemis.charaktere.bronte, Artemis.charaktere.bronte.pose.sad, Artemis.ƒS.positionPercent(Artemis.charaktere.bronte.positionStandard.x, Artemis.charaktere.bronte.positionStandard.y));
            await Artemis.ƒS.update(0.4);
            await Artemis.ƒS.Speech.tell(Artemis.charaktere.bronte, " Oh, verzeihen sie. Wir wollen nur- ");
            await Artemis.ƒS.Character.hide(Artemis.charaktere.maire);
            await Artemis.ƒS.Character.show(Artemis.charaktere.maire, Artemis.charaktere.maire.pose.neutral, Artemis.ƒS.positionPercent(Artemis.charaktere.maire.positionStandard.x, Artemis.charaktere.maire.positionStandard.y));
            await Artemis.ƒS.Character.hide(Artemis.charaktere.isaac);
            await Artemis.ƒS.Character.show(Artemis.charaktere.isaac, Artemis.charaktere.isaac.pose.happy, Artemis.ƒS.positionPercent(Artemis.charaktere.isaac.positionStandard.x, Artemis.charaktere.isaac.positionStandard.y));
            await Artemis.ƒS.update(0.4);
            await Artemis.ƒS.Speech.tell(Artemis.charaktere.isaac, " Etwas herumstöbern. Keine Sorge, ich werde nichts erzählen. ");
            await Artemis.ƒS.Character.hide(Artemis.charaktere.bronte);
            await Artemis.ƒS.Character.show(Artemis.charaktere.bronte, Artemis.charaktere.bronte.pose.happy, Artemis.ƒS.positionPercent(Artemis.charaktere.bronte.positionStandard.x, Artemis.charaktere.bronte.positionStandard.y));
            await Artemis.ƒS.update(0.4);
            await Artemis.ƒS.Speech.tell(Artemis.charaktere.maire, " Puh, da haben wir noch einmal Glück gehabt.");
        }
        await Artemis.ƒS.Character.hide(Artemis.charaktere.isaac);
        await Artemis.ƒS.Character.show(Artemis.charaktere.isaac, Artemis.charaktere.isaac.pose.neutral, Artemis.ƒS.positionPercent(Artemis.charaktere.isaac.positionStandard.x, Artemis.charaktere.isaac.positionStandard.y));
        await Artemis.ƒS.update(0.4);
        await Artemis.ƒS.Speech.tell(Artemis.charaktere.isaac, " Ich weiß nicht wie es euch geht, aber im Salon halte ich es nicht mehr länger aus. Ich glaube ich rauche ein wenig draußen. Ich lade euch gerne auf eine ein, wenn ihr wollt. ");
        await Artemis.ƒS.Character.hide(Artemis.charaktere.bronte);
        await Artemis.ƒS.Character.show(Artemis.charaktere.bronte, Artemis.charaktere.bronte.pose.sad, Artemis.ƒS.positionPercent(Artemis.charaktere.bronte.positionStandard.x, Artemis.charaktere.bronte.positionStandard.y));
        await Artemis.ƒS.update(0.4);
        await Artemis.ƒS.Speech.tell(Artemis.charaktere.bronte, " Oh, nein danke, wir- ");
        await Artemis.ƒS.Character.hide(Artemis.charaktere.bronte);
        await Artemis.ƒS.Character.show(Artemis.charaktere.bronte, Artemis.charaktere.bronte.pose.shout, Artemis.ƒS.positionPercent(Artemis.charaktere.bronte.positionStandard.x, Artemis.charaktere.bronte.positionStandard.y));
        await Artemis.ƒS.Character.hide(Artemis.charaktere.maire);
        await Artemis.ƒS.Character.show(Artemis.charaktere.maire, Artemis.charaktere.maire.pose.laugh, Artemis.ƒS.positionPercent(Artemis.charaktere.maire.positionStandard.x, Artemis.charaktere.maire.positionStandard.y));
        await Artemis.ƒS.update(0.4);
        await Artemis.ƒS.Speech.tell(Artemis.charaktere.maire, " Dass klingt fabelhaft! Bronte muss sich noch die Nase pudern, aber ich komme gerne mit. ");
        await Artemis.ƒS.Character.hide(Artemis.charaktere.bronte);
        await Artemis.ƒS.Character.show(Artemis.charaktere.bronte, Artemis.charaktere.bronte.pose.think, Artemis.ƒS.positionPercent(Artemis.charaktere.bronte.positionStandard.x, Artemis.charaktere.bronte.positionStandard.y));
        await Artemis.ƒS.update(0.4);
        await Artemis.ƒS.Speech.tell(Artemis.charaktere.bronte, " Oh… bist du dir sicher? ");
        await Artemis.ƒS.Character.hide(Artemis.charaktere.maire);
        await Artemis.ƒS.Character.show(Artemis.charaktere.maire, Artemis.charaktere.maire.pose.happy, Artemis.ƒS.positionPercent(Artemis.charaktere.maire.positionStandard.x, Artemis.charaktere.maire.positionStandard.y));
        await Artemis.ƒS.update(0.4);
        await Artemis.ƒS.Speech.tell(Artemis.charaktere.maire, " Ja klar. ");
        await Artemis.ƒS.Character.hide(Artemis.charaktere.bronte);
        await Artemis.ƒS.Character.show(Artemis.charaktere.bronte, Artemis.charaktere.bronte.pose.sad, Artemis.ƒS.positionPercent(Artemis.charaktere.bronte.positionStandard.x, Artemis.charaktere.bronte.positionStandard.y));
        await Artemis.ƒS.update(0.4);
        await Artemis.ƒS.Speech.tell(Artemis.charaktere.bronte, " Okay… dann bis gleich... ");
        await Artemis.ƒS.Character.hide(Artemis.charaktere.maire);
        await Artemis.ƒS.Character.hide(Artemis.charaktere.isaac);
        await Artemis.ƒS.update(0.8);
        await Artemis.ƒS.Character.hide(Artemis.charaktere.bronte);
        await Artemis.ƒS.update(1);
        Artemis.dataForSave.searchedCloakFinished = true;
        Artemis.ƒS.Sound.fade(Artemis.sound.themeEntryhall, 0, 2);
        return "SceneTenMaireAndIsaac";
        async function checkIfLoopShouldContinue() {
            console.log(counterHowManyCloaks);
            if (counterHowManyCloaks == 1) {
                await Artemis.ƒS.Speech.tell(Artemis.charaktere.maire, " Oh ich glaube ich höre Schritte… Was tun wir?");
            }
            else if (counterHowManyCloaks == 2) {
                stillInLoop = false;
            }
        }
        async function issacBadEnding() {
            await Artemis.ƒS.Speech.tell(Artemis.charaktere.isaac, "Ich finde es nicht richtig, dass hier einfach in den privaten Sachen der Anwesenden rumwühlt.");
            await Artemis.ƒS.Character.show(Artemis.charaktere.isaac, Artemis.charaktere.isaac.pose.neutral, Artemis.ƒS.positionPercent(Artemis.charaktere.isaac.positionStandard.x, Artemis.charaktere.isaac.positionStandard.y));
            await Artemis.ƒS.Character.hide(Artemis.charaktere.isaac);
            await Artemis.ƒS.update(0.4);
            await Artemis.ƒS.Speech.tell(Artemis.charaktere.isaac, "Selbst gegenüber Grace und Alaistar ist das nicht fair.");
            await Artemis.ƒS.Speech.tell(Artemis.charaktere.isaac, "Grace!");
            await Artemis.ƒS.Character.hide(Artemis.charaktere.bronte);
            await Artemis.ƒS.Character.hide(Artemis.charaktere.maire);
            await Artemis.ƒS.update(0.8);
            await Artemis.ƒS.Character.show(Artemis.charaktere.grace, Artemis.charaktere.grace.pose.think, Artemis.ƒS.positionPercent(20, Artemis.charaktere.grace.positionLeftMiddle.y));
            await Artemis.ƒS.update(0.8);
            await Artemis.ƒS.Speech.tell(Artemis.charaktere.grace, " Ja, Isaac? ");
            await Artemis.ƒS.Speech.tell(Artemis.charaktere.isaac, "Miss Bronte hat angefangen in unseren persönlichen Sachen herum zu wühlen. ");
            await Artemis.ƒS.Character.hide(Artemis.charaktere.grace);
            await Artemis.ƒS.Character.show(Artemis.charaktere.grace, Artemis.charaktere.grace.pose.angry, Artemis.ƒS.positionPercent(20, Artemis.charaktere.grace.positionLeftMiddle.y));
            await Artemis.ƒS.update(0.8);
            await Artemis.ƒS.Speech.tell(Artemis.charaktere.grace, " Ich bin sehr enttäuscht von Ihnen Miss Bronte! Ich hatte bessere Manieren von Ihnen erwartet. ");
            await Artemis.ƒS.Speech.tell(Artemis.charaktere.bronte, " Oh, dass- ");
            await Artemis.ƒS.Speech.tell(Artemis.charaktere.grace, " Nein, bitte gehen sie alle. Ich habe Kopfschmerzen.");
            await Artemis.ƒS.Character.hide(Artemis.charaktere.grace);
            await Artemis.ƒS.Character.hide(Artemis.charaktere.isaac);
            await Artemis.ƒS.update(0.8);
            Artemis.ƒS.Sound.fade(Artemis.sound.saloonAfterScrem, 0, 1, true);
            await Artemis.ƒS.Location.show(Artemis.location.black);
            await Artemis.ƒS.update(5);
        }
    }
    Artemis.SceneNineEntryhall = SceneNineEntryhall;
})(Artemis || (Artemis = {}));
var Artemis;
(function (Artemis) {
    async function SceneOneInfront() {
        console.log("FudgeStory Scene starting");
        //Alle Wahlmöglichkeiten in Szene 
        let chooseCatNoise = {
            bush: "Untersuche Busch",
            window: "Untersuche Fenster",
            knock: "Klopfe an der Tür"
        };
        await Artemis.ƒS.Speech.tell("Information", "Drücke 'M' um das Spielmenü zu öffnen und deinen Speicherstand zu speichern oder laden. Drücke I um dein Iventar zu öffnen.");
        //return "SceneTwoEntrance";
        // return "SceneThreeSaalon";
        // return "SceneFourSaalonDrama";
        // return "SceneSixGarden";
        // return "SceneSevenCabin";
        // return "SceneEightSaalonInterview";
        // return "SceneEightBInterviews";
        // return "SceneNineEntryhall"; 
        // return "SceneTenMaireAndIsaac";
        // return "SceneElevenStudy";
        // return "SceneTwelveFinal";
        // return "EndingOneAllSurvive"
        // return "EndingTwoBronteDead";
        // return "EndingThreeOdetteDead";
        // return "ExtraSceneBronteMaire";
        //return "EndScreen";
        await Artemis.ƒS.Sound.fade(Artemis.sound.themeinfrontManor, 0.4, 1, true);
        await Artemis.ƒS.Location.show(Artemis.location.infrontOfManorDay);
        await Artemis.ƒS.update(Artemis.transistions.standard.duration, "Asset/Transition/18.png", Artemis.transistions.standard.edge);
        await Artemis.ƒS.Speech.tell(Artemis.charaktere.maire, "Oh, was für ein prächtiges Anwesen. Und wir sind hier wirklich richtig?");
        await Artemis.ƒS.Character.show(Artemis.charaktere.maire, Artemis.charaktere.maire.pose.neutral, Artemis.ƒS.positionPercent(Artemis.charaktere.maire.positionStandard.x, Artemis.charaktere.maire.positionStandard.y));
        await Artemis.ƒS.Character.show(Artemis.charaktere.bronte, Artemis.charaktere.bronte.pose.happy, Artemis.ƒS.positionPercent(Artemis.charaktere.bronte.positionStandard.x, Artemis.charaktere.bronte.positionStandard.y));
        await Artemis.ƒS.update(1);
        await Artemis.ƒS.Speech.tell(Artemis.charaktere.bronte, "Ja, die Blackburns haben schon seit vielen Jahren diesen Wohnsitz. Ich habe dir doch gesagt, dass es heute Abend eine sehr vornehme Veranstaltung wird.");
        await Artemis.ƒS.Speech.tell(Artemis.charaktere.maire, "Ja aber doch nicht so vornehm! Du hättest mich besser warnen müssen. Ich sehe ja aus wie ein Dorftrampel. Ich dachte du hättest für die Dame des Hauses einen Fall gelöst?");
        await Artemis.ƒS.Character.hide(Artemis.charaktere.bronte);
        await Artemis.ƒS.Character.show(Artemis.charaktere.bronte, Artemis.charaktere.bronte.pose.think, Artemis.ƒS.positionPercent(Artemis.charaktere.bronte.positionStandard.x, Artemis.charaktere.bronte.positionStandard.y));
        await Artemis.ƒS.update(0.4);
        await Artemis.ƒS.Speech.tell(Artemis.charaktere.bronte, "Habe ich ja auch. Wobei es eher ein Zufall war, dass der Crossstreet-Bandit auch ihre Smaragd Brosche gestohlen hatte.");
        await Artemis.ƒS.Speech.tell(Artemis.charaktere.bronte, "Aber so oder so war die Lady jedoch so dankbar, dass sie mich reichlich belohnt hat und zu einem Essen eingeladen hat.");
        await Artemis.ƒS.Character.hide(Artemis.charaktere.maire);
        await Artemis.ƒS.Character.show(Artemis.charaktere.maire, Artemis.charaktere.maire.pose.embarrassed, Artemis.ƒS.positionPercent(Artemis.charaktere.maire.positionStandard.x, Artemis.charaktere.maire.positionStandard.y));
        await Artemis.ƒS.update(0.1);
        document.getElementById('speechContent').classList.add('textEffectBig');
        await Artemis.ƒS.Speech.tell(Artemis.charaktere.maire, "!!! ");
        document.getElementById('speechContent').classList.remove('textEffectBig');
        await Artemis.ƒS.Speech.tell(Artemis.charaktere.maire, "Eine Lady!");
        await Artemis.ƒS.Speech.tell(Artemis.charaktere.maire, "Bronte du hast nicht erwähnt, dass sie eine Lady ist! Oh großgütiger, ich sehe aus wie eine Heuschrecke! ");
        await Artemis.ƒS.Character.hide(Artemis.charaktere.bronte);
        await Artemis.ƒS.Character.show(Artemis.charaktere.bronte, Artemis.charaktere.bronte.pose.laugh, Artemis.ƒS.positionPercent(Artemis.charaktere.bronte.positionStandard.x, Artemis.charaktere.bronte.positionStandard.y));
        await Artemis.ƒS.update(0.3);
        await Artemis.ƒS.Speech.tell(Artemis.charaktere.bronte, "Ach was Maire, du siehst wie immer fantastisch aus. Mach dir keine Sorge-");
        await Artemis.ƒS.Character.hide(Artemis.charaktere.maire);
        await Artemis.ƒS.Character.show(Artemis.charaktere.maire, Artemis.charaktere.maire.pose.fear, Artemis.ƒS.positionPercent(Artemis.charaktere.maire.positionStandard.x, Artemis.charaktere.maire.positionStandard.y));
        await Artemis.ƒS.Character.hide(Artemis.charaktere.bronte);
        await Artemis.ƒS.Character.show(Artemis.charaktere.bronte, Artemis.charaktere.bronte.pose.shout, Artemis.ƒS.positionPercent(Artemis.charaktere.bronte.positionStandard.x, Artemis.charaktere.bronte.positionStandard.y));
        await Artemis.ƒS.update(0.1);
        await Artemis.showEmotion(Artemis.emotionen.ausrufezeichen, 1);
        await Artemis.ƒS.Sound.fade(Artemis.sound.catMeow, 0.8, 1, false);
        document.getElementById('speechContent').classList.add('textEffectBig');
        await Artemis.ƒS.Speech.tell("", "MAUI!");
        document.getElementById('speechContent').classList.remove('textEffectBig');
        await Artemis.ƒS.Speech.tell(Artemis.charaktere.maire, "AHH!");
        await Artemis.ƒS.Character.hide(Artemis.charaktere.maire);
        await Artemis.ƒS.Character.hide(Artemis.charaktere.bronte);
        await Artemis.ƒS.Character.show(Artemis.charaktere.maire, Artemis.charaktere.maire.pose.neutral, Artemis.ƒS.positionPercent(Artemis.charaktere.maire.positionStandard.x, Artemis.charaktere.maire.positionStandard.y));
        await Artemis.ƒS.Character.show(Artemis.charaktere.bronte, Artemis.charaktere.bronte.pose.think, Artemis.ƒS.positionPercent(Artemis.charaktere.bronte.positionStandard.x, Artemis.charaktere.bronte.positionStandard.y));
        await Artemis.ƒS.update(0.3);
        await Artemis.ƒS.Speech.tell(Artemis.charaktere.maire, "Was... war das eine Katze?");
        await Artemis.ƒS.Speech.tell(Artemis.charaktere.bronte, "Und eine schnelle dazu… sieht so aus als wäre sie in die Hecke verschwunden. Komisch, ich frag mich was sie da gesehen hat.");
        await Artemis.ƒS.Speech.tell(Artemis.charaktere.maire, "Vermutlich einen Vogel. Wir sollten glaube ich langsam Klopfen. Ich glaube jemand hat gerade durch das Fenster geschaut. Wir sehen ja aus wie gewöhnliche Straßendiebe für diese Leute. ");
        let userChooseCatNoise = await Artemis.ƒS.Menu.getInput(chooseCatNoise, "basicChoice");
        switch (userChooseCatNoise) {
            case chooseCatNoise.bush:
                Artemis.dataForSave.foundRing = true;
                await Artemis.ƒS.Speech.tell(Artemis.charaktere.bronte, "Nur ein Moment.");
                await Artemis.ƒS.Speech.tell(Artemis.charaktere.maire, "…Deshalb sind wir immer zu spät.");
                await Artemis.ƒS.Character.hide(Artemis.charaktere.maire);
                await Artemis.ƒS.Character.show(Artemis.charaktere.maire, Artemis.charaktere.maire.pose.sad, Artemis.ƒS.positionPercent(Artemis.charaktere.maire.positionStandard.x, Artemis.charaktere.maire.positionStandard.y));
                await Artemis.ƒS.Character.hide(Artemis.charaktere.bronte);
                await Artemis.ƒS.Character.show(Artemis.charaktere.bronte, Artemis.charaktere.bronte.pose.think, Artemis.ƒS.positionPercent(Artemis.charaktere.bronte.positionStandard.x, Artemis.charaktere.bronte.positionStandard.y));
                await Artemis.ƒS.update(0.3);
                await Artemis.ƒS.Sound.play(Artemis.sound.goingThrouBushes, 1);
                await Artemis.ƒS.Speech.tell(Artemis.charaktere.bronte, "Nun lass mal schauen... Oh!");
                await Artemis.ƒS.Inventory.add(Artemis.inventory.ring);
                await Artemis.ƒS.Inventory.open();
                await Artemis.ƒS.Character.hide(Artemis.charaktere.bronte);
                await Artemis.ƒS.Character.show(Artemis.charaktere.bronte, Artemis.charaktere.bronte.pose.happy, Artemis.ƒS.positionPercent(Artemis.charaktere.bronte.positionStandard.x, Artemis.charaktere.bronte.positionStandard.y));
                await Artemis.ƒS.update(0.3);
                await Artemis.ƒS.Speech.tell(Artemis.charaktere.bronte, "Komisch, warum sollte das hier einfach herum liegen?");
                await Artemis.ƒS.Speech.tell(Artemis.charaktere.bronte, "Mhm... O.R.");
                await Artemis.ƒS.Character.hide(Artemis.charaktere.bronte);
                await Artemis.ƒS.Character.show(Artemis.charaktere.bronte, Artemis.charaktere.bronte.pose.think, Artemis.ƒS.positionPercent(Artemis.charaktere.bronte.positionStandard.x, Artemis.charaktere.bronte.positionStandard.y));
                await Artemis.ƒS.update(0.3);
                await Artemis.ƒS.Speech.tell(Artemis.charaktere.maire, "Oh, da kommt jemand!");
                await Artemis.ƒS.Character.hide(Artemis.charaktere.maire);
                await Artemis.ƒS.Character.show(Artemis.charaktere.maire, Artemis.charaktere.maire.pose.fear, Artemis.ƒS.positionPercent(Artemis.charaktere.maire.positionStandard.x, Artemis.charaktere.maire.positionStandard.y));
                await Artemis.ƒS.update(0.3);
                await Artemis.ƒS.Character.show(Artemis.charaktere.remington, Artemis.charaktere.remington.pose.neutral, Artemis.ƒS.positionPercent(50, 100));
                await Artemis.ƒS.update(1);
                await Artemis.ƒS.Speech.tell(Artemis.charaktere.remington, "Entschuldigen Sie. Sind Sie Miss Bronte und ihre Begleitung?");
                await Artemis.ƒS.Character.hide(Artemis.charaktere.maire);
                await Artemis.ƒS.Character.show(Artemis.charaktere.maire, Artemis.charaktere.maire.pose.laugh, Artemis.ƒS.positionPercent(Artemis.charaktere.maire.positionStandard.x, Artemis.charaktere.maire.positionStandard.y));
                await Artemis.ƒS.update(0.3);
                await Artemis.ƒS.Speech.tell(Artemis.charaktere.maire, "Miss Bronte hihi");
                await Artemis.ƒS.Character.hide(Artemis.charaktere.bronte);
                await Artemis.ƒS.Character.show(Artemis.charaktere.bronte, Artemis.charaktere.bronte.pose.happy, Artemis.ƒS.positionPercent(Artemis.charaktere.bronte.positionStandard.x, Artemis.charaktere.bronte.positionStandard.y));
                await Artemis.ƒS.update(0.3);
                await Artemis.ƒS.Speech.tell(Artemis.charaktere.bronte, "Guten Abend. Genau, die sind wir. Freut mich sie kennenzulernen, Herr?");
                await Artemis.ƒS.Character.hide(Artemis.charaktere.maire);
                await Artemis.ƒS.Character.show(Artemis.charaktere.maire, Artemis.charaktere.maire.pose.happy, Artemis.ƒS.positionPercent(Artemis.charaktere.maire.positionStandard.x, Artemis.charaktere.maire.positionStandard.y));
                await Artemis.ƒS.update(0.3);
                await Artemis.ƒS.Speech.tell(Artemis.charaktere.remington, "Bitte folgen sie mir doch hinein.");
                await Artemis.ƒS.Character.hide(Artemis.charaktere.maire);
                await Artemis.ƒS.Character.show(Artemis.charaktere.maire, Artemis.charaktere.maire.pose.neutral, Artemis.ƒS.positionPercent(Artemis.charaktere.maire.positionStandard.x, Artemis.charaktere.maire.positionStandard.y));
                await Artemis.ƒS.update(0.3);
                await Artemis.ƒS.Speech.tell(Artemis.charaktere.maire, "Nicht sehr gesprächig...");
                break;
            case chooseCatNoise.window:
                Artemis.dataForSave.spiedThroughWindow = true;
                await Artemis.ƒS.Speech.tell(Artemis.charaktere.bronte, "Ich frag mich wer uns da heimlich beobachtet. ");
                await Artemis.ƒS.Character.hide(Artemis.charaktere.maire);
                await Artemis.ƒS.Character.show(Artemis.charaktere.maire, Artemis.charaktere.maire.pose.sad, Artemis.ƒS.positionPercent(Artemis.charaktere.maire.positionStandard.x, Artemis.charaktere.maire.positionStandard.y));
                await Artemis.ƒS.Character.hide(Artemis.charaktere.bronte);
                await Artemis.ƒS.Character.show(Artemis.charaktere.bronte, Artemis.charaktere.bronte.pose.think, Artemis.ƒS.positionPercent(Artemis.charaktere.bronte.positionStandard.x, Artemis.charaktere.bronte.positionStandard.y));
                await Artemis.ƒS.update(0.3);
                await Artemis.ƒS.Speech.tell(Artemis.charaktere.maire, "Oh bitte nicht… ");
                await Artemis.ƒS.Speech.tell(Artemis.charaktere.bronte, "Es dauert nur einen Moment… Hier sehe ich die Küche. Eine ältere Frau an einer Feuerstelle… Oh das Essen sieht klasse aus!");
                await Artemis.ƒS.Speech.tell(Artemis.charaktere.remington, "Entschuldigen Sie?");
                await Artemis.ƒS.Character.show(Artemis.charaktere.remington, Artemis.charaktere.remington.pose.neutral, Artemis.ƒS.positionPercent(50, 100));
                await Artemis.ƒS.update(0.1);
                await Artemis.ƒS.Character.hide(Artemis.charaktere.maire);
                await Artemis.ƒS.Character.show(Artemis.charaktere.maire, Artemis.charaktere.maire.pose.fear, Artemis.ƒS.positionPercent(Artemis.charaktere.maire.positionStandard.x, Artemis.charaktere.maire.positionStandard.y));
                await Artemis.ƒS.Character.hide(Artemis.charaktere.bronte);
                await Artemis.ƒS.Character.show(Artemis.charaktere.bronte, Artemis.charaktere.bronte.pose.shout, Artemis.ƒS.positionPercent(Artemis.charaktere.bronte.positionStandard.x, Artemis.charaktere.bronte.positionStandard.y));
                await Artemis.ƒS.update(0.3);
                document.getElementById('speechContent').classList.add('textEffectBig');
                await Artemis.ƒS.Speech.tell(Artemis.charaktere.maire, "AHH!");
                document.getElementById('speechContent').classList.remove('textEffectBig');
                await Artemis.ƒS.Character.hide(Artemis.charaktere.maire);
                await Artemis.ƒS.Character.show(Artemis.charaktere.maire, Artemis.charaktere.maire.pose.embarrassed, Artemis.ƒS.positionPercent(Artemis.charaktere.maire.positionStandard.x, Artemis.charaktere.maire.positionStandard.y));
                await Artemis.ƒS.Character.hide(Artemis.charaktere.bronte);
                await Artemis.ƒS.Character.show(Artemis.charaktere.bronte, Artemis.charaktere.bronte.pose.sad, Artemis.ƒS.positionPercent(Artemis.charaktere.bronte.positionStandard.x, Artemis.charaktere.bronte.positionStandard.y));
                await Artemis.ƒS.update(0.3);
                await Artemis.ƒS.Speech.tell(Artemis.charaktere.bronte, "Oh... äh... Hallo, wir sind die Gäste für den Abend.");
                await Artemis.ƒS.Speech.tell(Artemis.charaktere.remington, "Dass dachte ich mir. Bitte folgen sie mir herein. Und denken Sie heute Abend bitte an ihre Manieren. ");
                await Artemis.ƒS.Character.hide(Artemis.charaktere.maire);
                await Artemis.ƒS.Character.show(Artemis.charaktere.maire, Artemis.charaktere.maire.pose.neutral, Artemis.ƒS.positionPercent(Artemis.charaktere.maire.positionStandard.x, Artemis.charaktere.maire.positionStandard.y));
                await Artemis.ƒS.Character.hide(Artemis.charaktere.bronte);
                await Artemis.ƒS.Character.show(Artemis.charaktere.bronte, Artemis.charaktere.bronte.pose.think, Artemis.ƒS.positionPercent(Artemis.charaktere.bronte.positionStandard.x, Artemis.charaktere.bronte.positionStandard.y));
                await Artemis.ƒS.update(0.3);
                await Artemis.ƒS.Speech.tell(Artemis.charaktere.maire, "Da hast du ja einen tollen ersten Eindruck gemacht…");
                break;
            case chooseCatNoise.knock:
                await Artemis.ƒS.Sound.play(Artemis.sound.knockDoor, 1);
                await Artemis.ƒS.update(0.4);
                await Artemis.ƒS.Character.show(Artemis.charaktere.remington, Artemis.charaktere.remington.pose.neutral, Artemis.ƒS.positionPercent(50, 100));
                await Artemis.ƒS.update(0.1);
                await Artemis.ƒS.Character.hide(Artemis.charaktere.maire);
                await Artemis.ƒS.Character.show(Artemis.charaktere.maire, Artemis.charaktere.maire.pose.fear, Artemis.ƒS.positionPercent(Artemis.charaktere.maire.positionStandard.x, Artemis.charaktere.maire.positionStandard.y));
                await Artemis.ƒS.update(0.1);
                await Artemis.ƒS.Speech.tell(Artemis.charaktere.remington, " Willkommen, treten sie doch gerne ein.");
                await Artemis.ƒS.Character.hide(Artemis.charaktere.maire);
                await Artemis.ƒS.Character.show(Artemis.charaktere.maire, Artemis.charaktere.maire.pose.embarrassed, Artemis.ƒS.positionPercent(Artemis.charaktere.maire.positionStandard.x, Artemis.charaktere.maire.positionStandard.y));
                await Artemis.ƒS.update(0.3);
                await Artemis.ƒS.Speech.tell(Artemis.charaktere.maire, " AH! Oh… Entschuldigung… Sie standen direkt hinter der Tür? Äh ich meine… guten Abend. ");
                await Artemis.ƒS.Character.hide(Artemis.charaktere.bronte);
                await Artemis.ƒS.Character.show(Artemis.charaktere.bronte, Artemis.charaktere.bronte.pose.happy, Artemis.ƒS.positionPercent(Artemis.charaktere.bronte.positionStandard.x, Artemis.charaktere.bronte.positionStandard.y));
                await Artemis.ƒS.update(0.3);
                await Artemis.ƒS.Speech.tell(Artemis.charaktere.bronte, " Maire du bist wirklich ein wenig zu schreckhaft.");
        }
        await Artemis.ƒS.Character.hide(Artemis.charaktere.maire);
        await Artemis.ƒS.Character.hide(Artemis.charaktere.bronte);
        await Artemis.ƒS.Character.hide(Artemis.charaktere.remington);
        await Artemis.ƒS.update(0.8);
        await Artemis.ƒS.Sound.fade(Artemis.sound.themeinfrontManor, 0, 0.4, false);
        return "SceneTwoEntrance";
    }
    Artemis.SceneOneInfront = SceneOneInfront;
})(Artemis || (Artemis = {}));
var Artemis;
(function (Artemis) {
    async function SceneSevenCabin() {
        localStorage.setItem('collar', JSON.stringify(true));
        await Artemis.ƒS.Location.show(Artemis.location.cabin);
        await Artemis.ƒS.update(Artemis.transistions.standard.duration, Artemis.transistions.standard.alpha, Artemis.transistions.standard.edge);
        let chooseHowToGetToRoof = {
            maire: "Maire machen lassen",
            bronte: "Selber machen"
        };
        await Artemis.ƒS.Character.show(Artemis.charaktere.bronte, Artemis.charaktere.bronte.pose.think, Artemis.ƒS.positionPercent(Artemis.charaktere.bronte.positionStandard.x, Artemis.charaktere.bronte.positionStandard.y));
        await Artemis.ƒS.Character.show(Artemis.charaktere.maire, Artemis.charaktere.maire.pose.neutral, Artemis.ƒS.positionPercent(Artemis.charaktere.maire.positionStandard.x, Artemis.charaktere.maire.positionStandard.y));
        await Artemis.ƒS.update(0.8);
        await Artemis.ƒS.Sound.fade(Artemis.sound.themeinfrontManorNight, 0.1, 0.2, true);
        await Artemis.ƒS.Speech.tell(Artemis.charaktere.maire, " Schau eine Säule steht vor der Hütte! ");
        await Artemis.ƒS.Character.hide(Artemis.charaktere.bronte);
        await Artemis.ƒS.Character.hide(Artemis.charaktere.maire);
        await Artemis.ƒS.Character.show(Artemis.charaktere.bronte, Artemis.charaktere.bronte.pose.happy, Artemis.ƒS.positionPercent(Artemis.charaktere.bronte.positionStandard.x, Artemis.charaktere.bronte.positionStandard.y));
        await Artemis.ƒS.Character.show(Artemis.charaktere.maire, Artemis.charaktere.maire.pose.happy, Artemis.ƒS.positionPercent(Artemis.charaktere.maire.positionStandard.x, Artemis.charaktere.maire.positionStandard.y));
        await Artemis.ƒS.update(0.4);
        await Artemis.ƒS.Speech.tell(Artemis.charaktere.bronte, " Und die Spuren führen eindeutig hierher. Vermutlich ist sie eingesperrt. Ein Moment… So jetzt sollte sie aufgehen. Mhm… Schaufeln, Eimer und weitere Gartengeräte. Aber keine Katze. ");
        await Artemis.ƒS.Character.hide(Artemis.charaktere.bronte);
        await Artemis.ƒS.Character.hide(Artemis.charaktere.maire);
        await Artemis.ƒS.Character.show(Artemis.charaktere.bronte, Artemis.charaktere.bronte.pose.think, Artemis.ƒS.positionPercent(Artemis.charaktere.bronte.positionStandard.x, Artemis.charaktere.bronte.positionStandard.y));
        await Artemis.ƒS.Character.show(Artemis.charaktere.maire, Artemis.charaktere.maire.pose.fear, Artemis.ƒS.positionPercent(Artemis.charaktere.maire.positionStandard.x, Artemis.charaktere.maire.positionStandard.y));
        await Artemis.ƒS.update(0.4);
        await Artemis.ƒS.Speech.tell(Artemis.charaktere.maire, " Schau! Dort. Die Dachluke ist ein Stück offen und dort hängt etwas dran. Wir sollten versuchen ranzukommen!");
        //Auswahl Wie in Hütte kommen 
        // Selber
        let userChooseHowToGetToRoof = await Artemis.ƒS.Menu.getInput(chooseHowToGetToRoof, "basicChoice");
        switch (userChooseHowToGetToRoof) {
            case chooseHowToGetToRoof.bronte:
                await Artemis.ƒS.Character.hide(Artemis.charaktere.bronte);
                await Artemis.ƒS.Character.hide(Artemis.charaktere.maire);
                await Artemis.ƒS.Character.show(Artemis.charaktere.bronte, Artemis.charaktere.bronte.pose.happy, Artemis.ƒS.positionPercent(Artemis.charaktere.bronte.positionStandard.x, Artemis.charaktere.bronte.positionStandard.y));
                await Artemis.ƒS.Character.show(Artemis.charaktere.maire, Artemis.charaktere.maire.pose.neutral, Artemis.ƒS.positionPercent(Artemis.charaktere.maire.positionStandard.x, Artemis.charaktere.maire.positionStandard.y));
                await Artemis.ƒS.update(0.4);
                await Artemis.ƒS.Speech.tell(Artemis.charaktere.bronte, "Ein Moment das habe ich gleich! Perfekt. Gutes Auge Maire! Das ist ein Halsband.");
                await Artemis.ƒS.Inventory.add(Artemis.inventory.collar);
                await Artemis.ƒS.Inventory.open();
                break;
            case chooseHowToGetToRoof.maire:
                Artemis.dataForSave.pointAngryMaire += 1;
                Artemis.dataForSave.maireHurtHerselfInCabin = true;
                await Artemis.ƒS.Character.hide(Artemis.charaktere.bronte);
                await Artemis.ƒS.Character.show(Artemis.charaktere.bronte, Artemis.charaktere.bronte.pose.happy, Artemis.ƒS.positionPercent(Artemis.charaktere.bronte.positionStandard.x, Artemis.charaktere.bronte.positionStandard.y));
                await Artemis.ƒS.update(0.4);
                await Artemis.ƒS.Speech.tell(Artemis.charaktere.bronte, " Versuch hochzuklettern. ");
                await Artemis.ƒS.Character.hide(Artemis.charaktere.maire);
                await Artemis.ƒS.Character.show(Artemis.charaktere.maire, Artemis.charaktere.maire.pose.embarrassed, Artemis.ƒS.positionPercent(Artemis.charaktere.maire.positionStandard.x, Artemis.charaktere.maire.positionStandard.y));
                await Artemis.ƒS.update(0.4);
                await Artemis.ƒS.Speech.tell(Artemis.charaktere.maire, " Okay… ich… autsch! Mein Knöchel! Aber hier… ein Halsband. ");
                await Artemis.ƒS.Inventory.add(Artemis.inventory.collar);
                await Artemis.ƒS.Inventory.open();
                await Artemis.ƒS.Character.hide(Artemis.charaktere.bronte);
                await Artemis.ƒS.Character.hide(Artemis.charaktere.maire);
                await Artemis.ƒS.Character.show(Artemis.charaktere.bronte, Artemis.charaktere.bronte.pose.think, Artemis.ƒS.positionPercent(Artemis.charaktere.bronte.positionStandard.x, Artemis.charaktere.bronte.positionStandard.y));
                await Artemis.ƒS.Character.show(Artemis.charaktere.maire, Artemis.charaktere.maire.pose.sad, Artemis.ƒS.positionPercent(Artemis.charaktere.maire.positionStandard.x, Artemis.charaktere.maire.positionStandard.y));
                await Artemis.ƒS.update(0.4);
                await Artemis.ƒS.Speech.tell(Artemis.charaktere.bronte, " (Oh weh, Maire scheint sich wirklich verletzt zu haben. Ich sollte netter zu ihr sein in nächster Zeit)");
                break;
        }
        Artemis.dataForSave.foundCatCollarFinished = true;
        await Artemis.ƒS.Character.hide(Artemis.charaktere.bronte);
        await Artemis.ƒS.Character.hide(Artemis.charaktere.maire);
        await Artemis.ƒS.Character.show(Artemis.charaktere.bronte, Artemis.charaktere.bronte.pose.think, Artemis.ƒS.positionPercent(Artemis.charaktere.bronte.positionStandard.x, Artemis.charaktere.bronte.positionStandard.y));
        await Artemis.ƒS.Character.show(Artemis.charaktere.maire, Artemis.charaktere.maire.pose.neutral, Artemis.ƒS.positionPercent(Artemis.charaktere.maire.positionStandard.x, Artemis.charaktere.maire.positionStandard.y));
        await Artemis.ƒS.update(0.4);
        await Artemis.ƒS.Speech.tell(Artemis.charaktere.bronte, " Hier ist eine Inschrift drauf. Artemis.");
        await Artemis.ƒS.Speech.tell(Artemis.charaktere.bronte, " Es fühlt sich aber merkwürdig an, als wäre noch etwas...");
        await Artemis.ƒS.Speech.tell(Artemis.charaktere.bronte, " Drunter-");
        await Artemis.ƒS.Sound.fade(Artemis.sound.stellaScream, 0.8, 1, false);
        await Artemis.ƒS.Character.hide(Artemis.charaktere.bronte);
        await Artemis.ƒS.Character.hide(Artemis.charaktere.maire);
        await Artemis.ƒS.Character.show(Artemis.charaktere.bronte, Artemis.charaktere.bronte.pose.shout, Artemis.ƒS.positionPercent(Artemis.charaktere.bronte.positionStandard.x, Artemis.charaktere.bronte.positionStandard.y));
        await Artemis.ƒS.Character.show(Artemis.charaktere.maire, Artemis.charaktere.maire.pose.fear, Artemis.ƒS.positionPercent(Artemis.charaktere.maire.positionStandard.x, Artemis.charaktere.maire.positionStandard.y));
        await Artemis.ƒS.update(0.4);
        await Artemis.ƒS.Speech.tell(Artemis.charaktere.bronte, " !!! Das kam vom Haus! Schnell Maire!");
        if (Artemis.dataForSave.maireHurtHerselfInCabin) {
            await Artemis.ƒS.Character.hide(Artemis.charaktere.maire);
            await Artemis.ƒS.Character.show(Artemis.charaktere.maire, Artemis.charaktere.maire.pose.fear, Artemis.ƒS.positionPercent(Artemis.charaktere.maire.positionStandard.x, Artemis.charaktere.maire.positionStandard.y));
            await Artemis.ƒS.update(0.4);
            await Artemis.ƒS.Speech.tell(Artemis.charaktere.maire, " Ich komme… mein Knöchel… Au… Au… Au… ");
        }
        await Artemis.ƒS.Character.hide(Artemis.charaktere.bronte);
        await Artemis.ƒS.Character.hide(Artemis.charaktere.maire);
        await Artemis.ƒS.update(0.8);
        await Artemis.ƒS.Sound.fade(Artemis.sound.themeinfrontManorNight, 0, 0.5, true);
        return "SceneEightSaalonInterview";
    }
    Artemis.SceneSevenCabin = SceneSevenCabin;
})(Artemis || (Artemis = {}));
var Artemis;
(function (Artemis) {
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
        await Artemis.ƒS.Location.show(Artemis.location.gardenDark);
        await Artemis.ƒS.update(Artemis.transistions.standard.duration, "Asset/Transition/18.png", Artemis.transistions.standard.edge);
        await Artemis.ƒS.Sound.fade(Artemis.sound.themeinfrontManorNight, 0.1, 0.2, true);
        await Artemis.ƒS.Character.show(Artemis.charaktere.maire, Artemis.charaktere.maire.pose.neutral, Artemis.ƒS.positionPercent(Artemis.charaktere.maire.positionStandard.x, Artemis.charaktere.maire.positionStandard.y));
        await Artemis.ƒS.Character.show(Artemis.charaktere.bronte, Artemis.charaktere.bronte.pose.happy, Artemis.ƒS.positionPercent(Artemis.charaktere.bronte.positionStandard.x, Artemis.charaktere.bronte.positionStandard.y));
        await Artemis.ƒS.update(0.8);
        await Artemis.ƒS.Speech.tell(Artemis.charaktere.bronte, "Sie führen bis... Oh... Autsch! ");
        await Artemis.ƒS.Character.hide(Artemis.charaktere.maire);
        await Artemis.ƒS.Character.hide(Artemis.charaktere.bronte);
        await Artemis.ƒS.Character.show(Artemis.charaktere.maire, Artemis.charaktere.maire.pose.fear, Artemis.ƒS.positionPercent(Artemis.charaktere.maire.positionStandard.x, Artemis.charaktere.maire.positionStandard.y));
        await Artemis.ƒS.Character.show(Artemis.charaktere.bronte, Artemis.charaktere.bronte.pose.sad, Artemis.ƒS.positionPercent(Artemis.charaktere.bronte.positionStandard.x, Artemis.charaktere.bronte.positionStandard.y));
        await Artemis.ƒS.update(0.4);
        await Artemis.ƒS.Speech.tell(Artemis.charaktere.maire, "Alles okay? Oh man sieht ja die Hand vor Augen nicht. Was machen wir jetzt");
        let userChooseWhatToDoGardenDark = await Artemis.ƒS.Menu.getInput(chooseWhatToDoGardenDark, "basicChoice");
        switch (userChooseWhatToDoGardenDark) {
            case chooseWhatToDoGardenDark.search:
                //auswahl Untersuchen
                await Artemis.ƒS.Character.hide(Artemis.charaktere.maire);
                await Artemis.ƒS.Character.hide(Artemis.charaktere.bronte);
                await Artemis.ƒS.Character.show(Artemis.charaktere.maire, Artemis.charaktere.maire.pose.neutral, Artemis.ƒS.positionPercent(Artemis.charaktere.maire.positionStandard.x, Artemis.charaktere.maire.positionStandard.y));
                await Artemis.ƒS.Character.show(Artemis.charaktere.bronte, Artemis.charaktere.bronte.pose.think, Artemis.ƒS.positionPercent(Artemis.charaktere.bronte.positionStandard.x, Artemis.charaktere.bronte.positionStandard.y));
                await Artemis.ƒS.update(0.4);
                await Artemis.ƒS.Speech.tell(Artemis.charaktere.bronte, " Mhm… vielleicht… ich habe so ein Gefühl hier könnte etwas sein das Hilft. ");
                await Artemis.ƒS.Speech.tell(Artemis.charaktere.maire, " Pass bloß auf! Bei dieser Dunkelheit ist es leicht sich zu verletzten. ");
                await Artemis.ƒS.Character.hide(Artemis.charaktere.bronte);
                await Artemis.ƒS.Character.show(Artemis.charaktere.bronte, Artemis.charaktere.bronte.pose.sad, Artemis.ƒS.positionPercent(Artemis.charaktere.bronte.positionStandard.x, Artemis.charaktere.bronte.positionStandard.y));
                await Artemis.ƒS.update(0.4);
                await Artemis.ƒS.Speech.tell(Artemis.charaktere.bronte, " Ich bin schon vorsichtig… Autsch! Mhm… vielleicht hast du Recht.");
                // Unter Auswahl: endet immer mit: zurückgehen
                let userChooseWhatToDoGardenAfterInvestigation = await Artemis.ƒS.Menu.getInput(chooseWhatToDoGardenAfterInvestigation, "basicChoice");
                switch (userChooseWhatToDoGardenAfterInvestigation) {
                    case chooseWhatToDoGardenAfterInvestigation.searchMore:
                        await Artemis.ƒS.Character.hide(Artemis.charaktere.bronte);
                        await Artemis.ƒS.Character.show(Artemis.charaktere.bronte, Artemis.charaktere.bronte.pose.happy, Artemis.ƒS.positionPercent(Artemis.charaktere.bronte.positionStandard.x, Artemis.charaktere.bronte.positionStandard.y));
                        await Artemis.ƒS.update(0.4);
                        await Artemis.ƒS.Speech.tell(Artemis.charaktere.bronte, " Oh! Hier!");
                        await Artemis.ƒS.Character.hide(Artemis.charaktere.maire);
                        await Artemis.ƒS.Character.hide(Artemis.charaktere.bronte);
                        await Artemis.ƒS.Character.show(Artemis.charaktere.maire, Artemis.charaktere.maire.pose.fear, Artemis.ƒS.positionPercent(Artemis.charaktere.maire.positionStandard.x, Artemis.charaktere.maire.positionStandard.y));
                        await Artemis.ƒS.Character.show(Artemis.charaktere.bronte, Artemis.charaktere.bronte.pose.happy, Artemis.ƒS.positionPercent(Artemis.charaktere.bronte.positionStandard.x, Artemis.charaktere.bronte.positionStandard.y));
                        await Artemis.ƒS.update(0.4);
                        await Artemis.ƒS.Location.show(Artemis.location.gardenLight);
                        await Artemis.ƒS.Speech.tell(Artemis.charaktere.maire, "Oh wow!");
                        await Artemis.ƒS.Character.hide(Artemis.charaktere.maire);
                        await Artemis.ƒS.Character.show(Artemis.charaktere.maire, Artemis.charaktere.maire.pose.happy, Artemis.ƒS.positionPercent(Artemis.charaktere.maire.positionStandard.x, Artemis.charaktere.maire.positionStandard.y));
                        await Artemis.ƒS.update(0.4);
                        await Artemis.ƒS.Speech.tell(Artemis.charaktere.bronte, "Ein kleines Wunder der Technik. Und sehr praktisch dazu.");
                        break;
                    case chooseWhatToDoGardenAfterInvestigation.goBack:
                        await goBack();
                        break;
                }
                break;
            case chooseWhatToDoGardenDark.goFurther:
                //Weitergehen 
                Artemis.dataForSave.maireFellInPond = true;
                Artemis.dataForSave.pointAngryMaire += 1;
                localStorage.setItem('pound', JSON.stringify(true));
                await Artemis.ƒS.Character.hide(Artemis.charaktere.maire);
                await Artemis.ƒS.Character.hide(Artemis.charaktere.bronte);
                await Artemis.ƒS.Character.show(Artemis.charaktere.maire, Artemis.charaktere.maire.pose.neutral, Artemis.ƒS.positionPercent(Artemis.charaktere.maire.positionStandard.x, Artemis.charaktere.maire.positionStandard.y));
                await Artemis.ƒS.Character.show(Artemis.charaktere.bronte, Artemis.charaktere.bronte.pose.happy, Artemis.ƒS.positionPercent(Artemis.charaktere.bronte.positionStandard.x, Artemis.charaktere.bronte.positionStandard.y));
                await Artemis.ƒS.update(0.4);
                await Artemis.ƒS.Speech.tell(Artemis.charaktere.bronte, " So ein bisschen Dunkelheit wird uns doch nicht aufhalten. ");
                await Artemis.ƒS.Character.hide(Artemis.charaktere.maire);
                await Artemis.ƒS.Character.show(Artemis.charaktere.maire, Artemis.charaktere.maire.pose.fear, Artemis.ƒS.positionPercent(Artemis.charaktere.maire.positionStandard.x, Artemis.charaktere.maire.positionStandard.y));
                await Artemis.ƒS.update(0.4);
                await Artemis.ƒS.Speech.tell(Artemis.charaktere.maire, " Wenn du meinst Bronte...  Pass nur auf hier ist.");
                await Artemis.ƒS.Character.animate(Artemis.charaktere.maire, Artemis.charaktere.maire.pose.fear, Artemis.fromMiddleSinking(Artemis.charaktere.maire.positionStandard.x, Artemis.charaktere.maire.positionStandard.y, 230, 0.2));
                await Artemis.ƒS.Character.hide(Artemis.charaktere.maire);
                await Artemis.ƒS.Character.hide(Artemis.charaktere.bronte);
                await Artemis.ƒS.Character.show(Artemis.charaktere.bronte, Artemis.charaktere.bronte.pose.shout, Artemis.ƒS.positionPercent(Artemis.charaktere.bronte.positionStandard.x, Artemis.charaktere.bronte.positionStandard.y));
                await Artemis.ƒS.update(0.4);
                await Artemis.ƒS.Speech.tell(Artemis.charaktere.maire, " AH! Ich ertrinke… Bronte ich… Ich… ");
                await Artemis.ƒS.Character.animate(Artemis.charaktere.maire, Artemis.charaktere.maire.pose.fear, Artemis.fromMiddleSinking(Artemis.charaktere.maire.positionStandard.x, 230, Artemis.charaktere.maire.positionStandard.y, 1));
                await Artemis.ƒS.Character.hide(Artemis.charaktere.maire);
                await Artemis.ƒS.Character.show(Artemis.charaktere.maire, Artemis.charaktere.maire.pose.embarrassed, Artemis.ƒS.positionPercent(Artemis.charaktere.maire.positionStandard.x, Artemis.charaktere.maire.positionStandard.y));
                await Artemis.ƒS.update(0.4);
                await Artemis.ƒS.Speech.tell(Artemis.charaktere.maire, "Ich kann stehen… Aber meine ganzen Kleider… Tolle Idee von dir…");
                await Artemis.ƒS.Character.hide(Artemis.charaktere.bronte);
                await Artemis.ƒS.Character.show(Artemis.charaktere.bronte, Artemis.charaktere.bronte.pose.sad, Artemis.ƒS.positionPercent(Artemis.charaktere.bronte.positionStandard.x, Artemis.charaktere.bronte.positionStandard.y));
                await Artemis.ƒS.update(0.4);
                await Artemis.ƒS.Speech.tell(Artemis.charaktere.bronte, " Oh weh, dass tut mir Leid, ich wollte dich gerade warnen. Lass uns schnell zurück ins Warme gehen.");
                await Artemis.ƒS.Speech.tell(Artemis.charaktere.bronte, " (Sie sieht sehr wüttend aus.)");
                await goBack();
                break;
            case chooseWhatToDoGardenDark.goBack:
                await goBack();
                break;
        }
        // alle zusammen
        await Artemis.ƒS.Character.hide(Artemis.charaktere.maire);
        await Artemis.ƒS.Character.hide(Artemis.charaktere.bronte);
        await Artemis.ƒS.Character.show(Artemis.charaktere.maire, Artemis.charaktere.maire.pose.happy, Artemis.ƒS.positionPercent(Artemis.charaktere.maire.positionStandard.x, Artemis.charaktere.maire.positionStandard.y));
        await Artemis.ƒS.Character.show(Artemis.charaktere.bronte, Artemis.charaktere.bronte.pose.happy, Artemis.ƒS.positionPercent(Artemis.charaktere.bronte.positionStandard.x, Artemis.charaktere.bronte.positionStandard.y));
        await Artemis.ƒS.update(0.4);
        await Artemis.ƒS.Speech.tell(Artemis.charaktere.bronte, " Schau mit etwas Licht ist es gleich viel besser. ");
        await Artemis.ƒS.Speech.tell(Artemis.charaktere.maire, " Und wie. Siehst du die Spuren? ");
        await Artemis.ƒS.Character.hide(Artemis.charaktere.bronte);
        await Artemis.ƒS.Character.show(Artemis.charaktere.bronte, Artemis.charaktere.bronte.pose.think, Artemis.ƒS.positionPercent(Artemis.charaktere.bronte.positionStandard.x, Artemis.charaktere.bronte.positionStandard.y));
        await Artemis.ƒS.update(0.4);
        await Artemis.ƒS.Speech.tell(Artemis.charaktere.bronte, " Mhm einen Moment… Wo würde ich hingehen wenn ich eine Katze wäre?");
        // solange bis Hütte ausgewählt dann nächste Scene
        while (true) {
            let userchooseWhereWouldCatGo = await Artemis.ƒS.Menu.getInput(chooseWhereWouldCatGo, "basicChoice");
            switch (userchooseWhereWouldCatGo) {
                case chooseWhereWouldCatGo.lamp:
                    await Artemis.ƒS.Character.hide(Artemis.charaktere.maire);
                    await Artemis.ƒS.Character.hide(Artemis.charaktere.bronte);
                    await Artemis.ƒS.Character.show(Artemis.charaktere.maire, Artemis.charaktere.maire.pose.neutral, Artemis.ƒS.positionPercent(Artemis.charaktere.maire.positionStandard.x, Artemis.charaktere.maire.positionStandard.y));
                    await Artemis.ƒS.Character.show(Artemis.charaktere.bronte, Artemis.charaktere.bronte.pose.happy, Artemis.ƒS.positionPercent(Artemis.charaktere.bronte.positionStandard.x, Artemis.charaktere.bronte.positionStandard.y));
                    await Artemis.ƒS.update(0.4);
                    await Artemis.ƒS.Speech.tell(Artemis.charaktere.bronte, " Welch beeindruckende Technologie. Schau der Strom kommt über Kabel in der Erde bis hier und schon haben wir Licht! ");
                    await Artemis.ƒS.Speech.tell(Artemis.charaktere.maire, " Spannend… aber sollten wir nicht was anderes machen? ");
                    await Artemis.ƒS.Speech.tell(Artemis.charaktere.bronte, " Oh… ja vermutlich…");
                    chooseWhereWouldCatGo.lamp = "";
                    break;
                case chooseWhereWouldCatGo.waterpond:
                    await Artemis.ƒS.Character.hide(Artemis.charaktere.bronte);
                    await Artemis.ƒS.Character.show(Artemis.charaktere.bronte, Artemis.charaktere.bronte.pose.sad, Artemis.ƒS.positionPercent(Artemis.charaktere.bronte.positionStandard.x, Artemis.charaktere.bronte.positionStandard.y));
                    await Artemis.ƒS.update(0.4);
                    await Artemis.ƒS.Speech.tell(Artemis.charaktere.bronte, " Vielleicht ist sie ins Wasser gefallen? ");
                    await Artemis.ƒS.Speech.tell(Artemis.charaktere.maire, " Ich glaube Katzen halten sich eher fern von Wasser. ");
                    await Artemis.ƒS.Character.hide(Artemis.charaktere.bronte);
                    await Artemis.ƒS.Character.show(Artemis.charaktere.bronte, Artemis.charaktere.bronte.pose.think, Artemis.ƒS.positionPercent(Artemis.charaktere.bronte.positionStandard.x, Artemis.charaktere.bronte.positionStandard.y));
                    await Artemis.ƒS.update(0.4);
                    await Artemis.ƒS.Speech.tell(Artemis.charaktere.bronte, " Mhm… da hast du wohl recht. Ich kann auch nichts erkennen.");
                    chooseWhereWouldCatGo.waterpond = "";
                    break;
                case chooseWhereWouldCatGo.cabin:
                    await Artemis.ƒS.Character.hide(Artemis.charaktere.maire);
                    await Artemis.ƒS.Character.hide(Artemis.charaktere.maire);
                    await Artemis.ƒS.Character.hide(Artemis.charaktere.bronte);
                    await Artemis.ƒS.update(0.8);
                    return 'SceneSevenCabin';
            }
        }
        // Wir zwei mal ausgeführt daher function
        async function goBack() {
            await Artemis.ƒS.Character.hide(Artemis.charaktere.maire);
            await Artemis.ƒS.Character.hide(Artemis.charaktere.bronte);
            await Artemis.ƒS.update(0.8);
            await Artemis.ƒS.Location.show(Artemis.location.saalon);
            await Artemis.ƒS.update(Artemis.transistions.standard.duration, Artemis.transistions.standard.alpha, Artemis.transistions.standard.edge);
            await Artemis.ƒS.Character.hide(Artemis.charaktere.maire);
            await Artemis.ƒS.Character.hide(Artemis.charaktere.bronte);
            await Artemis.ƒS.Character.show(Artemis.charaktere.maire, Artemis.charaktere.maire.pose.neutral, Artemis.ƒS.positionPercent(Artemis.charaktere.maire.positionStandard.x, Artemis.charaktere.maire.positionStandard.y));
            await Artemis.ƒS.Character.show(Artemis.charaktere.bronte, Artemis.charaktere.bronte.pose.think, Artemis.ƒS.positionPercent(Artemis.charaktere.bronte.positionStandard.x, Artemis.charaktere.bronte.positionStandard.y));
            await Artemis.ƒS.update(0.8);
            await Artemis.ƒS.Character.show(Artemis.charaktere.grace, Artemis.charaktere.grace.pose.laugh, Artemis.ƒS.positionPercent(Artemis.charaktere.grace.positionStandard.x, Artemis.charaktere.grace.positionStandard.y));
            await Artemis.ƒS.update(0.4);
            await Artemis.ƒS.Speech.tell(Artemis.charaktere.grace, " Oh da kommen Sie! ");
            if (Artemis.dataForSave.maireFellInPond) {
                await Artemis.ƒS.Character.hide(Artemis.charaktere.grace);
                await Artemis.ƒS.Character.show(Artemis.charaktere.grace, Artemis.charaktere.grace.pose.sad, Artemis.ƒS.positionPercent(Artemis.charaktere.grace.positionStandard.x, Artemis.charaktere.grace.positionStandard.y));
                await Artemis.ƒS.update(0.4);
                await Artemis.ƒS.Speech.tell(Artemis.charaktere.grace, "Oh Gott, was ist denn mit Ihnen passiert?");
                await Artemis.ƒS.Character.hide(Artemis.charaktere.maire);
                await Artemis.ƒS.Character.hide(Artemis.charaktere.bronte);
                await Artemis.ƒS.Character.show(Artemis.charaktere.maire, Artemis.charaktere.maire.pose.embarrassed, Artemis.ƒS.positionPercent(Artemis.charaktere.maire.positionStandard.x, Artemis.charaktere.maire.positionStandard.y));
                await Artemis.ƒS.Character.show(Artemis.charaktere.bronte, Artemis.charaktere.bronte.pose.sad, Artemis.ƒS.positionPercent(Artemis.charaktere.bronte.positionStandard.x, Artemis.charaktere.bronte.positionStandard.y));
                await Artemis.ƒS.update(0.4);
                await Artemis.ƒS.Speech.tell(Artemis.charaktere.bronte, "Wir haben leider buchstäblich im Dunklen getappt. Am besten wir erzählen alles am Kamin. ");
                await Artemis.ƒS.Character.hide(Artemis.charaktere.grace);
                await Artemis.ƒS.Character.hide(Artemis.charaktere.maire);
                await Artemis.ƒS.Character.hide(Artemis.charaktere.bronte);
                await Artemis.ƒS.update(0.8);
                await Artemis.ƒS.Location.show(Artemis.location.black);
                await Artemis.ƒS.update(Artemis.transistions.standard.duration, "Asset/Transition/18.png", Artemis.transistions.standard.edge);
                await Artemis.ƒS.Location.show(Artemis.location.saalon);
                await Artemis.ƒS.update(Artemis.transistions.standard.duration, Artemis.transistions.standard.alpha, Artemis.transistions.standard.edge);
                await Artemis.ƒS.Character.show(Artemis.charaktere.maire, Artemis.charaktere.maire.pose.neutral, Artemis.ƒS.positionPercent(Artemis.charaktere.maire.positionStandard.x, Artemis.charaktere.maire.positionStandard.y));
                await Artemis.ƒS.Character.show(Artemis.charaktere.grace, Artemis.charaktere.grace.pose.think, Artemis.ƒS.positionPercent(Artemis.charaktere.grace.positionStandard.x, Artemis.charaktere.grace.positionStandard.y));
                await Artemis.ƒS.Character.show(Artemis.charaktere.bronte, Artemis.charaktere.bronte.pose.sad, Artemis.ƒS.positionPercent(Artemis.charaktere.bronte.positionStandard.x, Artemis.charaktere.bronte.positionStandard.y));
                await Artemis.ƒS.update(0.8);
                await Artemis.ƒS.Character.hide(Artemis.charaktere.grace);
                await Artemis.ƒS.Character.show(Artemis.charaktere.grace, Artemis.charaktere.grace.pose.angry, Artemis.ƒS.positionPercent(Artemis.charaktere.grace.positionStandard.x, Artemis.charaktere.grace.positionStandard.y));
                await Artemis.ƒS.update(0.4);
                Artemis.dataForSave.pointAngryGrace += 1;
                await Artemis.ƒS.Speech.tell(Artemis.charaktere.grace, "Aber… Oh sind das etwa Blüten meiner Seerosen! Oh weh. Die sind preisgekrönt! Das wird Monate dauern, die wieder so hinzubekommen. Passen sie doch besser auf! ");
            }
            else {
                await Artemis.ƒS.Speech.tell(Artemis.charaktere.grace, "Haben Sie sie gefunden?");
                await Artemis.ƒS.Character.hide(Artemis.charaktere.grace);
                await Artemis.ƒS.Character.hide(Artemis.charaktere.maire);
                await Artemis.ƒS.Character.hide(Artemis.charaktere.bronte);
                await Artemis.ƒS.Character.show(Artemis.charaktere.maire, Artemis.charaktere.maire.pose.sad, Artemis.ƒS.positionPercent(Artemis.charaktere.maire.positionStandard.x, Artemis.charaktere.maire.positionStandard.y));
                await Artemis.ƒS.Character.show(Artemis.charaktere.bronte, Artemis.charaktere.bronte.pose.sad, Artemis.ƒS.positionPercent(Artemis.charaktere.bronte.positionStandard.x, Artemis.charaktere.bronte.positionStandard.y));
                await Artemis.ƒS.Character.show(Artemis.charaktere.grace, Artemis.charaktere.grace.pose.sad, Artemis.ƒS.positionPercent(Artemis.charaktere.grace.positionStandard.x, Artemis.charaktere.grace.positionStandard.y));
                await Artemis.ƒS.update(0.4);
                await Artemis.ƒS.Speech.tell(Artemis.charaktere.bronte, "Wir haben Artemis leider noch nicht gefunden, jedoch ihre Spuren. Wir bräuchten nur ein bisschen Licht im Garten.");
                await Artemis.ƒS.Character.hide(Artemis.charaktere.grace);
                await Artemis.ƒS.Character.show(Artemis.charaktere.grace, Artemis.charaktere.grace.pose.think, Artemis.ƒS.positionPercent(Artemis.charaktere.grace.positionStandard.x, Artemis.charaktere.grace.positionStandard.y));
                await Artemis.ƒS.update(0.4);
                await Artemis.ƒS.Speech.tell(Artemis.charaktere.grace, " Licht? Oh, gehen die Laternen schon wieder nicht. Ich verstehe nichts von dieser Technik, aber wirklich zu verlässlich scheint sie mir ja nicht.");
                await Artemis.ƒS.Speech.tell(Artemis.charaktere.grace, " Sie sind die letzten Tage mehrmals einfach ausgegangen.");
                await Artemis.ƒS.Speech.tell(Artemis.charaktere.grace, " Dabei haben die Techniker mir hoch und heilig versprochen es wäre zuverlässig und nicht gefährlich!");
                await Artemis.ƒS.Character.hide(Artemis.charaktere.grace);
                await Artemis.ƒS.Character.show(Artemis.charaktere.grace, Artemis.charaktere.grace.pose.happy, Artemis.ƒS.positionPercent(Artemis.charaktere.grace.positionStandard.x, Artemis.charaktere.grace.positionStandard.y));
                await Artemis.ƒS.update(0.4);
                await Artemis.ƒS.Speech.tell(Artemis.charaktere.grace, " Aber ich lasse gleich Remington danach sehen. ");
                await Artemis.ƒS.Speech.tell(Artemis.charaktere.grace, " Ich habe die Anweisungen zum Neustarten aufschreiben lassen. Besser alles wichtige auf Papier festhalten sag ich immer!  ");
            }
            await Artemis.ƒS.Speech.tell(Artemis.charaktere.bronte, " Okay, ich denke wir können unsere Investigation fortsetzen. Lass uns gehen!");
            await Artemis.ƒS.Character.hide(Artemis.charaktere.maire);
            await Artemis.ƒS.Character.hide(Artemis.charaktere.grace);
            await Artemis.ƒS.Character.hide(Artemis.charaktere.bronte);
            await Artemis.ƒS.update(0.8);
            await Artemis.ƒS.Location.show(Artemis.location.gardenLight);
            await Artemis.ƒS.update(Artemis.transistions.standard.duration, "Asset/Transition/18.png", Artemis.transistions.standard.edge);
            await Artemis.ƒS.Sound.fade(Artemis.sound.themeinfrontManorNight, 0, 0.5, true);
        }
    }
    Artemis.SceneSixGarden = SceneSixGarden;
})(Artemis || (Artemis = {}));
var Artemis;
(function (Artemis) {
    async function SceneTenMaireAndIsaac() {
        Artemis.ƒS.Sound.play(Artemis.sound.maireAndIsaac, 0.4, true);
        await Artemis.ƒS.Location.show(Artemis.location.infrontOfManorNight);
        await Artemis.ƒS.update(Artemis.transistions.standard.duration, "Asset/Transition/18.png", Artemis.transistions.standard.edge);
        await Artemis.ƒS.Character.show(Artemis.charaktere.maire, Artemis.charaktere.maire.pose.happy, Artemis.ƒS.positionPercent(Artemis.charaktere.maire.positionStandard.x, Artemis.charaktere.maire.positionStandard.y));
        await Artemis.ƒS.Character.show(Artemis.charaktere.isaac, Artemis.charaktere.isaac.pose.neutral, Artemis.ƒS.positionPercent(Artemis.charaktere.isaac.positionStandard.x, Artemis.charaktere.isaac.positionStandard.y));
        await Artemis.ƒS.update(0.8);
        await Artemis.ƒS.Speech.tell(Artemis.charaktere.isaac, " Hier, nimm gerne eine. ");
        await Artemis.ƒS.Character.hide(Artemis.charaktere.maire);
        await Artemis.ƒS.Character.show(Artemis.charaktere.maire, Artemis.charaktere.maire.pose.embarrassed, Artemis.ƒS.positionPercent(Artemis.charaktere.maire.positionStandard.x, Artemis.charaktere.maire.positionStandard.y));
        await Artemis.ƒS.update(0.4);
        await Artemis.ƒS.Speech.tell(Artemis.charaktere.maire, " Danke. *Husten* Oh… hust… wow… hust… klasse Geschmack. ");
        await Artemis.ƒS.Character.hide(Artemis.charaktere.maire);
        await Artemis.ƒS.Character.hide(Artemis.charaktere.isaac);
        await Artemis.ƒS.Character.show(Artemis.charaktere.maire, Artemis.charaktere.maire.pose.neutral, Artemis.ƒS.positionPercent(Artemis.charaktere.maire.positionStandard.x, Artemis.charaktere.maire.positionStandard.y));
        await Artemis.ƒS.Character.show(Artemis.charaktere.isaac, Artemis.charaktere.isaac.pose.happy, Artemis.ƒS.positionPercent(Artemis.charaktere.isaac.positionStandard.x, Artemis.charaktere.isaac.positionStandard.y));
        await Artemis.ƒS.update(0.4);
        await Artemis.ƒS.Speech.tell(Artemis.charaktere.isaac, " Kein Raucher? ");
        await Artemis.ƒS.Speech.tell(Artemis.charaktere.maire, " Eher selten. Früher waren sie zu teuer und auch heute gebe ich mein Gehalt lieber für etwas anderes aus. ");
        await Artemis.ƒS.Speech.tell(Artemis.charaktere.isaac, " Bezahlt Bronte nicht gut? ");
        await Artemis.ƒS.Character.hide(Artemis.charaktere.maire);
        await Artemis.ƒS.Character.show(Artemis.charaktere.maire, Artemis.charaktere.maire.pose.laugh, Artemis.ƒS.positionPercent(Artemis.charaktere.maire.positionStandard.x, Artemis.charaktere.maire.positionStandard.y));
        await Artemis.ƒS.update(0.4);
        await Artemis.ƒS.Speech.tell(Artemis.charaktere.maire, " Oh doch, sie und ich teilen uns die Einkünfte, aber ich bin immer noch etwas sparsam. Alte Gewohnheiten wird man schlecht los. ");
        await Artemis.ƒS.Character.hide(Artemis.charaktere.maire);
        await Artemis.ƒS.Character.show(Artemis.charaktere.maire, Artemis.charaktere.maire.pose.neutral, Artemis.ƒS.positionPercent(Artemis.charaktere.maire.positionStandard.x, Artemis.charaktere.maire.positionStandard.y));
        await Artemis.ƒS.Character.hide(Artemis.charaktere.isaac);
        await Artemis.ƒS.Character.show(Artemis.charaktere.isaac, Artemis.charaktere.isaac.pose.cry, Artemis.ƒS.positionPercent(Artemis.charaktere.isaac.positionStandard.x, Artemis.charaktere.isaac.positionStandard.y));
        await Artemis.ƒS.update(0.4);
        await Artemis.ƒS.Speech.tell(Artemis.charaktere.isaac, " Ja… dass stimmt wohl. ");
        await Artemis.ƒS.Character.hide(Artemis.charaktere.maire);
        await Artemis.ƒS.Character.show(Artemis.charaktere.maire, Artemis.charaktere.maire.pose.sad, Artemis.ƒS.positionPercent(Artemis.charaktere.maire.positionStandard.x, Artemis.charaktere.maire.positionStandard.y));
        await Artemis.ƒS.Character.hide(Artemis.charaktere.isaac);
        await Artemis.ƒS.Character.show(Artemis.charaktere.isaac, Artemis.charaktere.isaac.pose.neutral, Artemis.ƒS.positionPercent(Artemis.charaktere.isaac.positionStandard.x, Artemis.charaktere.isaac.positionStandard.y));
        await Artemis.ƒS.update(0.4);
        await Artemis.ƒS.Speech.tell(Artemis.charaktere.maire, " Darf ich etwas fragen? ");
        await Artemis.ƒS.Character.hide(Artemis.charaktere.isaac);
        await Artemis.ƒS.Character.show(Artemis.charaktere.isaac, Artemis.charaktere.isaac.pose.happy, Artemis.ƒS.positionPercent(Artemis.charaktere.isaac.positionStandard.x, Artemis.charaktere.isaac.positionStandard.y));
        await Artemis.ƒS.update(0.4);
        await Artemis.ƒS.Speech.tell(Artemis.charaktere.isaac, " Natürlich. ");
        await Artemis.ƒS.Speech.tell(Artemis.charaktere.maire, " Warum besuchst du deinen Schwager und deine Schwägerin immer noch? Ihr scheint euch beide nicht sonderlich gut zu leiden… ");
        await Artemis.ƒS.Character.hide(Artemis.charaktere.isaac);
        await Artemis.ƒS.Character.show(Artemis.charaktere.isaac, Artemis.charaktere.isaac.pose.sad, Artemis.ƒS.positionPercent(Artemis.charaktere.isaac.positionStandard.x, Artemis.charaktere.isaac.positionStandard.y));
        await Artemis.ƒS.update(0.4);
        await Artemis.ƒS.Speech.tell(Artemis.charaktere.isaac, " Ja… dass fragte ich mich auch manchmal. Es ist nur… Hier hat sie früher gewohnt. ");
        await Artemis.ƒS.Character.hide(Artemis.charaktere.maire);
        await Artemis.ƒS.Character.show(Artemis.charaktere.maire, Artemis.charaktere.maire.pose.fear, Artemis.ƒS.positionPercent(Artemis.charaktere.maire.positionStandard.x, Artemis.charaktere.maire.positionStandard.y));
        await Artemis.ƒS.update(0.4);
        await Artemis.ƒS.Speech.tell(Artemis.charaktere.maire, " Sie? Oh Odette, ihre Frau? ");
        await Artemis.ƒS.Character.hide(Artemis.charaktere.maire);
        await Artemis.ƒS.Character.show(Artemis.charaktere.maire, Artemis.charaktere.maire.pose.sad, Artemis.ƒS.positionPercent(Artemis.charaktere.maire.positionStandard.x, Artemis.charaktere.maire.positionStandard.y));
        await Artemis.ƒS.Character.hide(Artemis.charaktere.isaac);
        await Artemis.ƒS.Character.show(Artemis.charaktere.isaac, Artemis.charaktere.isaac.pose.neutral, Artemis.ƒS.positionPercent(Artemis.charaktere.isaac.positionStandard.x, Artemis.charaktere.isaac.positionStandard.y));
        await Artemis.ƒS.update(0.4);
        await Artemis.ƒS.Speech.tell(Artemis.charaktere.isaac, " Genau… Hier hat sie gewohnt als wir uns kennengelernt haben. Wir haben im Ballsaal getanzt, im Garten herumgetollt wie Kindern und in der Bücherei uns Geschichten ausgedacht. Sie war… so voller Leben hier. ");
        await Artemis.ƒS.Speech.tell(Artemis.charaktere.maire, " Sie haben viel Zeit hier verbracht? ");
        await Artemis.ƒS.Character.hide(Artemis.charaktere.isaac);
        await Artemis.ƒS.Character.show(Artemis.charaktere.isaac, Artemis.charaktere.isaac.pose.sad, Artemis.ƒS.positionPercent(Artemis.charaktere.isaac.positionStandard.x, Artemis.charaktere.isaac.positionStandard.y));
        await Artemis.ƒS.update(0.4);
        await Artemis.ƒS.Speech.tell(Artemis.charaktere.isaac, " Ja. Also nachdem ihr Vater verstorben war. Der ehemalige Lord Blackburn war kein Fan von mir. Sein Sohn – Alaistar – ist wie er. Traditionell und auf Klasse bedacht. Hält jeden der Arbeiten muss, um zu überleben, für weniger wert als sich selbst. ");
        await Artemis.ƒS.Character.hide(Artemis.charaktere.maire);
        await Artemis.ƒS.Character.show(Artemis.charaktere.maire, Artemis.charaktere.maire.pose.neutral, Artemis.ƒS.positionPercent(Artemis.charaktere.maire.positionStandard.x, Artemis.charaktere.maire.positionStandard.y));
        await Artemis.ƒS.update(0.4);
        await Artemis.ƒS.Speech.tell(Artemis.charaktere.maire, " Ja, er ist nicht sonderlich nett. Geradewegs herablassend. ");
        await Artemis.ƒS.Character.hide(Artemis.charaktere.isaac);
        await Artemis.ƒS.Character.show(Artemis.charaktere.isaac, Artemis.charaktere.isaac.pose.cry, Artemis.ƒS.positionPercent(Artemis.charaktere.isaac.positionStandard.x, Artemis.charaktere.isaac.positionStandard.y));
        await Artemis.ƒS.update(0.4);
        await Artemis.ƒS.Speech.tell(Artemis.charaktere.isaac, " Ja. Odette und er hatten einen fürchterlichen Streit, als sie beschloss mich zu heiraten. Seine Mutter konnte ihn beruhigen, aber es war trotzdem fürchterlich. ");
        await Artemis.ƒS.Speech.tell(Artemis.charaktere.isaac, "  Ich bot an für immer zu verschwinden und sie in Ruhe zu lassen, aber Odette wollte es nicht. Sie liebte mich… ");
        await Artemis.ƒS.Character.hide(Artemis.charaktere.isaac);
        await Artemis.ƒS.Character.show(Artemis.charaktere.isaac, Artemis.charaktere.isaac.pose.neutral, Artemis.ƒS.positionPercent(Artemis.charaktere.isaac.positionStandard.x, Artemis.charaktere.isaac.positionStandard.y));
        await Artemis.ƒS.update(0.4);
        await Artemis.ƒS.Speech.tell(Artemis.charaktere.maire, " Odettes Mutter war auf ihrer Seite? ");
        await Artemis.ƒS.Speech.tell(Artemis.charaktere.isaac, " Ja. Sie war eine gutherzige Frau. Sanft und lieb wie meine Odette. Sie ließ uns hier wohnen, als sie das Haus nicht mehr brauchte und versprach uns es zu vererben. ");
        await Artemis.ƒS.Character.hide(Artemis.charaktere.maire);
        await Artemis.ƒS.Character.show(Artemis.charaktere.maire, Artemis.charaktere.maire.pose.fear, Artemis.ƒS.positionPercent(Artemis.charaktere.maire.positionStandard.x, Artemis.charaktere.maire.positionStandard.y));
        await Artemis.ƒS.update(0.4);
        await Artemis.ƒS.Speech.tell(Artemis.charaktere.maire, " Oh… aber so kam es nicht? ");
        await Artemis.ƒS.Character.hide(Artemis.charaktere.maire);
        await Artemis.ƒS.Character.show(Artemis.charaktere.maire, Artemis.charaktere.maire.pose.sad, Artemis.ƒS.positionPercent(Artemis.charaktere.maire.positionStandard.x, Artemis.charaktere.maire.positionStandard.y));
        await Artemis.ƒS.Character.hide(Artemis.charaktere.isaac);
        await Artemis.ƒS.Character.show(Artemis.charaktere.isaac, Artemis.charaktere.isaac.pose.cry, Artemis.ƒS.positionPercent(Artemis.charaktere.isaac.positionStandard.x, Artemis.charaktere.isaac.positionStandard.y));
        await Artemis.ƒS.update(0.4);
        await Artemis.ƒS.Speech.tell(Artemis.charaktere.isaac, " Nein, es scheint ihr tot kam schneller als was sie gedacht hätte du es war keine Zeit das Testament zu ändern. Aber das Geld ist mir auch egal. Wenn nur Odette mir geblieben wäre… ");
        await Artemis.ƒS.Character.hide(Artemis.charaktere.isaac);
        await Artemis.ƒS.Character.show(Artemis.charaktere.isaac, Artemis.charaktere.isaac.pose.sad, Artemis.ƒS.positionPercent(Artemis.charaktere.isaac.positionStandard.x, Artemis.charaktere.isaac.positionStandard.y));
        await Artemis.ƒS.update(0.4);
        await Artemis.ƒS.Speech.tell(Artemis.charaktere.maire, " Dass mit ihrer Frau tut mir so leid. Bronte habe ich damals auch angeboten von meiner Stelle zurückzutreten, aber sie wollte es auch nicht. ");
        await Artemis.ƒS.Character.hide(Artemis.charaktere.maire);
        await Artemis.ƒS.Character.show(Artemis.charaktere.maire, Artemis.charaktere.maire.pose.neutral, Artemis.ƒS.positionPercent(Artemis.charaktere.maire.positionStandard.x, Artemis.charaktere.maire.positionStandard.y));
        await Artemis.ƒS.update(0.4);
        await Artemis.ƒS.Character.hide(Artemis.charaktere.isaac);
        await Artemis.ƒS.Character.show(Artemis.charaktere.isaac, Artemis.charaktere.isaac.pose.neutral, Artemis.ƒS.positionPercent(Artemis.charaktere.isaac.positionStandard.x, Artemis.charaktere.isaac.positionStandard.y));
        await Artemis.ƒS.update(0.4);
        await Artemis.ƒS.Speech.tell(Artemis.charaktere.isaac, " Ja… Liebe kann manchmal sehr schwer auf den Leuten liegen, die sie tragen. Und manchmal überrascht sie einen auch. Oder man trifft etwas, dass man an sie erinnert… ");
        await Artemis.ƒS.Speech.tell(Artemis.charaktere.maire, " Es muss sehr wehgetan haben, als wir Ihnen den Ring gezeigt haben. Ich hoffe Sie können uns verzeihen. ");
        await Artemis.ƒS.Speech.tell(Artemis.charaktere.isaac, " Alles gut… Ich frag mich immer noch nur… Woher kam der Ring? ");
        await Artemis.ƒS.Character.hide(Artemis.charaktere.maire);
        await Artemis.ƒS.Character.show(Artemis.charaktere.maire, Artemis.charaktere.maire.pose.sad, Artemis.ƒS.positionPercent(Artemis.charaktere.maire.positionStandard.x, Artemis.charaktere.maire.positionStandard.y));
        await Artemis.ƒS.update(0.4);
        await Artemis.ƒS.Speech.tell(Artemis.charaktere.maire, " Tut mir leid, darauf habe ich auch immer noch keine wirkliche Antwort. ");
        await Artemis.ƒS.Speech.tell(Artemis.charaktere.isaac, "  Darf ich Sie jetzt etwas fragen? ");
        await Artemis.ƒS.Character.hide(Artemis.charaktere.maire);
        await Artemis.ƒS.Character.show(Artemis.charaktere.maire, Artemis.charaktere.maire.pose.neutral, Artemis.ƒS.positionPercent(Artemis.charaktere.maire.positionStandard.x, Artemis.charaktere.maire.positionStandard.y));
        await Artemis.ƒS.update(0.4);
        await Artemis.ƒS.Speech.tell(Artemis.charaktere.maire, " Oh… äh… natürlich. ");
        await Artemis.ƒS.Character.hide(Artemis.charaktere.isaac);
        await Artemis.ƒS.Character.show(Artemis.charaktere.isaac, Artemis.charaktere.isaac.pose.happy, Artemis.ƒS.positionPercent(Artemis.charaktere.isaac.positionStandard.x, Artemis.charaktere.isaac.positionStandard.y));
        await Artemis.ƒS.update(0.4);
        await Artemis.ƒS.Speech.tell(Artemis.charaktere.isaac, "  Wo genau schnüffelt Bronte gerade herum? ");
        await Artemis.ƒS.Character.hide(Artemis.charaktere.maire);
        await Artemis.ƒS.Character.show(Artemis.charaktere.maire, Artemis.charaktere.maire.pose.embarrassed, Artemis.ƒS.positionPercent(Artemis.charaktere.maire.positionStandard.x, Artemis.charaktere.maire.positionStandard.y));
        await Artemis.ƒS.update(0.4);
        await Artemis.ƒS.Speech.tell(Artemis.charaktere.maire, " Äh… also-");
        await Artemis.ƒS.Character.hide(Artemis.charaktere.maire);
        await Artemis.ƒS.Character.hide(Artemis.charaktere.isaac);
        await Artemis.ƒS.update(0.4);
        Artemis.ƒS.Sound.fade(Artemis.sound.maireAndIsaac, 0, 2);
        Artemis.dataForSave.maireAndIsaacFinished = true;
        return "SceneElevenStudy";
    }
    Artemis.SceneTenMaireAndIsaac = SceneTenMaireAndIsaac;
})(Artemis || (Artemis = {}));
var Artemis;
(function (Artemis) {
    async function SceneThreeSaalon() {
        let chooseWeirdPerson = {
            stella: "Stella",
            grace: "Grace",
            lordBlackburn: "Lord Blackburn"
        };
        let chooseHaggis = {
            lie: "Lüge",
            truth: "Erzähle Wahrheit"
        };
        Artemis.ƒS.Sound.play(Artemis.sound.themeSaloon, 0.1, true);
        await Artemis.ƒS.Location.show(Artemis.location.saalon);
        await Artemis.ƒS.update(Artemis.transistions.standard.duration, "Asset/Transition/18.png", Artemis.transistions.standard.edge);
        await Artemis.ƒS.Character.show(Artemis.charaktere.bronte, Artemis.charaktere.bronte.pose.happy, Artemis.ƒS.positionPercent(Artemis.charaktere.bronte.positionStandard.x, Artemis.charaktere.bronte.positionStandard.y));
        await Artemis.ƒS.Character.show(Artemis.charaktere.maire, Artemis.charaktere.maire.pose.neutral, Artemis.ƒS.positionPercent(Artemis.charaktere.maire.positionStandard.x, Artemis.charaktere.maire.positionStandard.y));
        await Artemis.ƒS.update(1);
        await Artemis.ƒS.Character.show(Artemis.charaktere.grace, Artemis.charaktere.grace.pose.laugh, Artemis.ƒS.positionPercent(Artemis.charaktere.grace.positionStandard.x, Artemis.charaktere.grace.positionStandard.y));
        await Artemis.ƒS.update(0.8);
        await Artemis.ƒS.Speech.tell(Artemis.charaktere.grace, " Oh! Miss ... äh... ah Bronte! ");
        await Artemis.ƒS.Speech.tell(Artemis.charaktere.bronte, "Bronte. ");
        await Artemis.ƒS.Speech.tell(Artemis.charaktere.grace, " Oh verzeihen Sie mir bitte. Ich und mein gedächtnis.  ");
        await Artemis.ƒS.Speech.tell(Artemis.charaktere.grace, " Welch eine Freude, dass sie hier sind. Und oh… welch ein ungewöhnliches Outfit sie tragen. Sind das Hosen? Wie… modern. ");
        await Artemis.ƒS.Character.hide(Artemis.charaktere.grace);
        await Artemis.ƒS.Character.show(Artemis.charaktere.grace, Artemis.charaktere.grace.pose.happy, Artemis.ƒS.positionPercent(Artemis.charaktere.grace.positionStandard.x, Artemis.charaktere.grace.positionStandard.y));
        await Artemis.ƒS.update(0.4);
        await Artemis.ƒS.Speech.tell(Artemis.charaktere.bronte, " Vielen Dank. Sie sehen auch fantastisch aus Lady Blackburn. Darf ich Ihnen meine Begleitung vorstellen, das hier ist Miss MacGinnis. ");
        await Artemis.ƒS.Character.hide(Artemis.charaktere.maire);
        await Artemis.ƒS.Character.show(Artemis.charaktere.maire, Artemis.charaktere.maire.pose.happy, Artemis.ƒS.positionPercent(Artemis.charaktere.maire.positionStandard.x, Artemis.charaktere.maire.positionStandard.y));
        await Artemis.ƒS.update(0.4);
        await Artemis.ƒS.Speech.tell(Artemis.charaktere.maire, " Oh, nennen sie mich Maire. ");
        await Artemis.ƒS.Character.hide(Artemis.charaktere.grace);
        await Artemis.ƒS.Character.show(Artemis.charaktere.grace, Artemis.charaktere.grace.pose.laugh, Artemis.ƒS.positionPercent(Artemis.charaktere.grace.positionStandard.x, Artemis.charaktere.grace.positionStandard.y));
        await Artemis.ƒS.update(0.4);
        await Artemis.ƒS.Speech.tell(Artemis.charaktere.grace, "Vornamen… wie… modern! Dann nennen sie mich doch gerne Grace. Die Etikette können Sie sich für meinen Bruder aufheben. Oh, da kommt er auch schon. ");
        await Artemis.ƒS.Character.hide(Artemis.charaktere.bronte);
        await Artemis.ƒS.Character.show(Artemis.charaktere.bronte, Artemis.charaktere.bronte.pose.happy, Artemis.ƒS.positionPercent(10, 110));
        await Artemis.ƒS.Character.hide(Artemis.charaktere.maire);
        await Artemis.ƒS.Character.show(Artemis.charaktere.maire, Artemis.charaktere.maire.pose.happy, Artemis.ƒS.positionPercent(90, 110));
        await Artemis.ƒS.update(0.2);
        await Artemis.ƒS.Character.hide(Artemis.charaktere.grace);
        await Artemis.ƒS.Character.show(Artemis.charaktere.grace, Artemis.charaktere.grace.pose.happy, Artemis.ƒS.positionPercent(Artemis.charaktere.grace.positionLeftMiddle.x, Artemis.charaktere.grace.positionLeftMiddle.y));
        await Artemis.ƒS.Character.hide(Artemis.charaktere.alaistar);
        await Artemis.ƒS.Character.show(Artemis.charaktere.alaistar, Artemis.charaktere.alaistar.pose.happy, Artemis.ƒS.positionPercent(Artemis.charaktere.alaistar.positionRightMiddle.x, Artemis.charaktere.alaistar.positionRightMiddle.y));
        await Artemis.ƒS.update(0.4);
        await Artemis.ƒS.Speech.tell(Artemis.charaktere.alaistar, "Guten Abend. Freut mich sie kennenzulernen. ");
        await Artemis.ƒS.Character.hide(Artemis.charaktere.alaistar);
        await Artemis.ƒS.Character.show(Artemis.charaktere.alaistar, Artemis.charaktere.alaistar.pose.neutral, Artemis.ƒS.positionPercent(Artemis.charaktere.alaistar.positionRightMiddle.x, Artemis.charaktere.alaistar.positionRightMiddle.y));
        await Artemis.ƒS.update(0.4);
        await Artemis.ƒS.Speech.tell(Artemis.charaktere.bronte, "Lord Blackburn, die Freude ist ganz unsererseits, vielen Dank für die Einladung zum Abendessen. ");
        await Artemis.ƒS.Speech.tell(Artemis.charaktere.alaistar, "Meine Schwester hat so von Ihnen geschwärmt und da ich gerade selber in der Stadt war wegen einigen Geschäfitlichkeiten, wollte auch ich Sie kennenlernen.");
        await Artemis.ƒS.Speech.tell(Artemis.charaktere.alaistar, "Ein Detektiv ist immer ein interessanter Gast. ");
        await Artemis.ƒS.Speech.tell(Artemis.charaktere.alaistar, " Auch wenn Ihre Fälle sich sicherlich eher mit verlorenen Schmuckstücken und verlegten Kleidern beschäftigten.");
        await Artemis.ƒS.Sound.play(Artemis.sound.alaisterLaugh, 0.6);
        await Artemis.ƒS.Character.hide(Artemis.charaktere.alaistar);
        await Artemis.ƒS.Character.show(Artemis.charaktere.alaistar, Artemis.charaktere.alaistar.pose.happy, Artemis.ƒS.positionPercent(Artemis.charaktere.alaistar.positionRightMiddle.x, Artemis.charaktere.alaistar.positionRightMiddle.y));
        await Artemis.ƒS.update(0.4);
        await Artemis.ƒS.Speech.tell(Artemis.charaktere.alaistar, " HoHo. Frauen Probleme.");
        await Artemis.ƒS.Character.hide(Artemis.charaktere.alaistar);
        await Artemis.ƒS.Character.show(Artemis.charaktere.alaistar, Artemis.charaktere.alaistar.pose.neutral, Artemis.ƒS.positionPercent(Artemis.charaktere.alaistar.positionRightMiddle.x, Artemis.charaktere.alaistar.positionRightMiddle.y));
        await Artemis.ƒS.update(0.4);
        await Artemis.ƒS.Character.hide(Artemis.charaktere.bronte);
        await Artemis.ƒS.Character.show(Artemis.charaktere.bronte, Artemis.charaktere.bronte.pose.sad, Artemis.ƒS.positionPercent(10, 110));
        await Artemis.ƒS.update(0.4);
        await Artemis.ƒS.Speech.tell(Artemis.charaktere.bronte, "Tatsächlich befassen sich meine Fälle mit allen Problemen, die in London auftauchen. Erst neulich habe ich die Napoleon Büchse- ");
        await Artemis.ƒS.Character.hide(Artemis.charaktere.bronte);
        await Artemis.ƒS.Character.show(Artemis.charaktere.bronte, Artemis.charaktere.bronte.pose.think, Artemis.ƒS.positionPercent(10, 110));
        await Artemis.ƒS.update(0.4);
        await Artemis.ƒS.Speech.tell(Artemis.charaktere.grace, "Oh Stella! Komm schnell rüber meine Liebe. Dann sind wir ja fast alle komplett. Komm schnell Kleines und stell dich vor. Miss Bronte, dies ist meine Nichte, Stella Dufour. ");
        await Artemis.ƒS.Character.hide(Artemis.charaktere.grace);
        await Artemis.ƒS.Character.show(Artemis.charaktere.grace, Artemis.charaktere.grace.pose.happy, Artemis.ƒS.positionPercent(Artemis.charaktere.grace.positionLeftMiddle.x, Artemis.charaktere.grace.positionLeftMiddle.y));
        await Artemis.ƒS.update(0.4);
        await Artemis.ƒS.Character.hide(Artemis.charaktere.stella);
        await Artemis.ƒS.Character.hide(Artemis.charaktere.alaistar);
        await Artemis.ƒS.Character.show(Artemis.charaktere.stella, Artemis.charaktere.stella.pose.sad, Artemis.ƒS.positionPercent(Artemis.charaktere.stella.positionRightMiddle.x, Artemis.charaktere.stella.positionRightMiddle.y));
        await Artemis.ƒS.update(0.8);
        await Artemis.ƒS.Speech.tell(Artemis.charaktere.stella, "Guten Abend. ");
        await Artemis.ƒS.Character.hide(Artemis.charaktere.bronte);
        await Artemis.ƒS.Character.show(Artemis.charaktere.bronte, Artemis.charaktere.bronte.pose.happy, Artemis.ƒS.positionPercent(10, 110));
        await Artemis.ƒS.update(0.4);
        await Artemis.ƒS.Speech.tell(Artemis.charaktere.bronte, "Freut mich Sie kennenzulernen. ");
        await Artemis.ƒS.Character.hide(Artemis.charaktere.grace);
        await Artemis.ƒS.Character.show(Artemis.charaktere.grace, Artemis.charaktere.grace.pose.laugh, Artemis.ƒS.positionPercent(Artemis.charaktere.grace.positionLeftMiddle.x, Artemis.charaktere.grace.positionLeftMiddle.y));
        await Artemis.ƒS.update(0.4);
        await Artemis.ƒS.Speech.tell(Artemis.charaktere.grace, "Stella ist ein fabelhaftes Mädchen. Sie verbringt den Sommer bei mir, um sich ein wenig an die Londoner Luft zu gewöhnen.");
        await Artemis.ƒS.Character.hide(Artemis.charaktere.grace);
        await Artemis.ƒS.Character.show(Artemis.charaktere.grace, Artemis.charaktere.grace.pose.happy, Artemis.ƒS.positionPercent(Artemis.charaktere.grace.positionLeftMiddle.x, Artemis.charaktere.grace.positionLeftMiddle.y));
        await Artemis.ƒS.update(0.4);
        await Artemis.ƒS.Speech.tell(Artemis.charaktere.grace, "Aber schauen sie sich mal diese wunderschönen Haare an. Ich denke wir werden nächste Season einen tollen Partner für sie finden. ");
        await Artemis.ƒS.Character.hide(Artemis.charaktere.bronte);
        await Artemis.ƒS.Character.show(Artemis.charaktere.bronte, Artemis.charaktere.bronte.pose.laugh, Artemis.ƒS.positionPercent(10, 110));
        await Artemis.ƒS.update(0.4);
        await Artemis.ƒS.Speech.tell(Artemis.charaktere.bronte, "Oh ja, sie müssen mir später unbedingt erklären, wie sie so großartige Locken herzaubern. ");
        await Artemis.ƒS.Speech.tell(Artemis.charaktere.stella, "Sicherlich. ");
        await Artemis.ƒS.Character.hide(Artemis.charaktere.bronte);
        await Artemis.ƒS.Character.show(Artemis.charaktere.bronte, Artemis.charaktere.bronte.pose.happy, Artemis.ƒS.positionPercent(10, 110));
        await Artemis.ƒS.update(0.4);
        await Artemis.ƒS.Character.hide(Artemis.charaktere.bronte);
        await Artemis.ƒS.Character.hide(Artemis.charaktere.maire);
        await Artemis.ƒS.Character.hide(Artemis.charaktere.stella);
        await Artemis.ƒS.Character.hide(Artemis.charaktere.grace);
        await Artemis.ƒS.update(0.4);
        await Artemis.ƒS.Character.show(Artemis.charaktere.remington, Artemis.charaktere.remington.pose.neutral, Artemis.ƒS.positionPercent(Artemis.charaktere.remington.positionStandard.x, Artemis.charaktere.remington.positionStandard.y));
        await Artemis.ƒS.update(0.8);
        await Artemis.ƒS.Speech.tell(Artemis.charaktere.remington, "Ehm… My Lord, my Lady, auch Mister Rothchester ist nun endlich eingetroffen. ");
        await Artemis.ƒS.Character.hide(Artemis.charaktere.remington);
        await Artemis.ƒS.update(0.4);
        await Artemis.ƒS.Character.show(Artemis.charaktere.alaistar, Artemis.charaktere.alaistar.pose.angry, Artemis.ƒS.positionPercent(50, Artemis.charaktere.alaistar.positionRightMiddle.y));
        await Artemis.ƒS.update(0.4);
        await Artemis.ƒS.Speech.tell(Artemis.charaktere.alaistar, " Wurde ja auch Zeit… Dieser Mann hat einfach keine Manieren. ");
        await Artemis.ƒS.Speech.tell(Artemis.charaktere.alaistar, "Wir waren so höflich Ihn einzuladen und so dankt er es uns...");
        await Artemis.ƒS.Speech.tell(Artemis.charaktere.alaistar, "Bitte setzt euch alle schonmal, ich werde Ihn kurz begrüßen und zur Eile mahnen. ");
        await Artemis.ƒS.Character.hide(Artemis.charaktere.alaistar);
        await Artemis.ƒS.update(0.8);
        await Artemis.ƒS.Character.show(Artemis.charaktere.bronte, Artemis.charaktere.bronte.pose.happy, Artemis.ƒS.positionPercent(Artemis.charaktere.bronte.positionStandard.x, Artemis.charaktere.bronte.positionStandard.y));
        await Artemis.ƒS.Character.show(Artemis.charaktere.maire, Artemis.charaktere.maire.pose.neutral, Artemis.ƒS.positionPercent(Artemis.charaktere.maire.positionStandard.x, Artemis.charaktere.maire.positionStandard.y));
        await Artemis.ƒS.update(0.4);
        await Artemis.ƒS.Speech.tell(Artemis.charaktere.maire, " Was für… Charaktere. Ich hätte mich wirklich besser anziehen sollen. Aber selbst mein bestes Kleid würde neben Lady Stella wie ein Putzlappen wirken. ");
        await Artemis.ƒS.Speech.tell(Artemis.charaktere.maire, "Aber… findest du nicht auch, dass einer der drei merkwürdig ist?");
        let weirdPersonDecision = await Artemis.ƒS.Menu.getInput(chooseWeirdPerson, "basicChoice");
        switch (weirdPersonDecision) {
            case chooseWeirdPerson.stella:
                await Artemis.ƒS.Character.hide(Artemis.charaktere.bronte);
                await Artemis.ƒS.Character.show(Artemis.charaktere.bronte, Artemis.charaktere.bronte.pose.think, Artemis.ƒS.positionPercent(Artemis.charaktere.bronte.positionStandard.x, Artemis.charaktere.bronte.positionStandard.y));
                await Artemis.ƒS.update(0.4);
                await Artemis.ƒS.Speech.tell(Artemis.charaktere.bronte, " Allerding, Stella sieht wirklich etwas blass aus. Ob sie wohl krank ist? ");
                await Artemis.ƒS.Character.hide(Artemis.charaktere.maire);
                await Artemis.ƒS.Character.show(Artemis.charaktere.maire, Artemis.charaktere.maire.pose.fear, Artemis.ƒS.positionPercent(Artemis.charaktere.maire.positionStandard.x, Artemis.charaktere.maire.positionStandard.y));
                await Artemis.ƒS.update(0.4);
                await Artemis.ƒS.Speech.tell(Artemis.charaktere.maire, " Hoffentlich stecke ich mich nicht an!");
                await Artemis.ƒS.Speech.tell(Artemis.charaktere.bronte, " Die roten Augen deuten entweder auf wenig Schlaf oder weinen hin... merkwürdig...");
                Artemis.dataForSave.pointDetectiv += 1;
                break;
            case chooseWeirdPerson.grace:
                await Artemis.ƒS.Character.hide(Artemis.charaktere.bronte);
                await Artemis.ƒS.Character.show(Artemis.charaktere.bronte, Artemis.charaktere.bronte.pose.think, Artemis.ƒS.positionPercent(Artemis.charaktere.bronte.positionStandard.x, Artemis.charaktere.bronte.positionStandard.y));
                await Artemis.ƒS.update(0.4);
                await Artemis.ƒS.Speech.tell(Artemis.charaktere.bronte, " Allerding, Grace ist eine sehr eigene Persönlichkeit. Und nicht sonderlich gut darin ihre Ansichten zu verstecke. ");
                await Artemis.ƒS.Speech.tell(Artemis.charaktere.maire, "Ich dachte ehrlich gesagt eher an Stella. Sie sieht etwas blass aus. ");
                break;
            case chooseWeirdPerson.lordBlackburn:
                await Artemis.ƒS.Character.hide(Artemis.charaktere.alaistar);
                await Artemis.ƒS.Character.show(Artemis.charaktere.bronte, Artemis.charaktere.bronte.pose.think, Artemis.ƒS.positionPercent(Artemis.charaktere.bronte.positionStandard.x, Artemis.charaktere.bronte.positionStandard.y));
                await Artemis.ƒS.update(0.4);
                await Artemis.ƒS.Speech.tell(Artemis.charaktere.bronte, " Allerdings, Lord Blackburns Einstellungen zu Frauen sind wohl bereits einige Jahrtausende alt… Wenn auch nicht ungewöhnlich für einen Mann seiner Stellung, leider.");
                await Artemis.ƒS.Speech.tell(Artemis.charaktere.maire, "Ich dachte ehrlich gesagt eher an Stella. Sie sieht etwas blass aus. ");
                break;
        }
        await Artemis.ƒS.Character.hide(Artemis.charaktere.bronte);
        await Artemis.ƒS.Character.show(Artemis.charaktere.bronte, Artemis.charaktere.bronte.pose.think, Artemis.ƒS.positionPercent(Artemis.charaktere.bronte.positionStandard.x, Artemis.charaktere.bronte.positionStandard.y));
        await Artemis.ƒS.Character.hide(Artemis.charaktere.maire);
        await Artemis.ƒS.Character.show(Artemis.charaktere.maire, Artemis.charaktere.maire.pose.neutral, Artemis.ƒS.positionPercent(Artemis.charaktere.maire.positionStandard.x, Artemis.charaktere.maire.positionStandard.y));
        await Artemis.ƒS.update(0.4);
        await Artemis.ƒS.Speech.tell(Artemis.charaktere.bronte, "Da scheint der letzte Gast zu kommen. ");
        await Artemis.ƒS.Character.hide(Artemis.charaktere.maire);
        await Artemis.ƒS.Character.hide(Artemis.charaktere.bronte);
        await Artemis.ƒS.update(0.4);
        await Artemis.ƒS.Character.hide(Artemis.charaktere.isaac);
        await Artemis.ƒS.Character.show(Artemis.charaktere.isaac, Artemis.charaktere.isaac.pose.neutral, Artemis.ƒS.positionPercent(85, Artemis.charaktere.isaac.positionStandard.y));
        await Artemis.ƒS.update(0.4);
        await Artemis.ƒS.Speech.tell(Artemis.charaktere.isaac, "Guten Abend. Ich entschuldige meine Verspätung. ");
        await Artemis.ƒS.Character.show(Artemis.charaktere.grace, Artemis.charaktere.grace.pose.laugh, Artemis.ƒS.positionPercent(20, Artemis.charaktere.grace.positionStandard.y));
        await Artemis.ƒS.update(0.4);
        await Artemis.ƒS.Speech.tell(Artemis.charaktere.grace, "Nun… Als Gerichtsvertreter wird man wohl nicht pünktlich entlassen. Aber so ist die Mittelschicht wohl. ");
        await Artemis.ƒS.Speech.tell(Artemis.charaktere.grace, "Und Familie ist wohl oder übel Familie... ");
        await Artemis.ƒS.Character.hide(Artemis.charaktere.grace);
        await Artemis.ƒS.Character.hide(Artemis.charaktere.isaac);
        await Artemis.ƒS.Character.show(Artemis.charaktere.isaac, Artemis.charaktere.isaac.pose.sad, Artemis.ƒS.positionPercent(Artemis.charaktere.isaac.positionStandard.x, Artemis.charaktere.isaac.positionStandard.y));
        await Artemis.ƒS.update(0.8);
        await Artemis.ƒS.Character.show(Artemis.charaktere.bronte, Artemis.charaktere.bronte.pose.happy, Artemis.ƒS.positionPercent(Artemis.charaktere.bronte.positionStandard.x, Artemis.charaktere.bronte.positionStandard.y));
        await Artemis.ƒS.Character.show(Artemis.charaktere.maire, Artemis.charaktere.maire.pose.neutral, Artemis.ƒS.positionPercent(Artemis.charaktere.maire.positionStandard.x, Artemis.charaktere.maire.positionStandard.y));
        await Artemis.ƒS.update(0.8);
        await Artemis.ƒS.Speech.tell(Artemis.charaktere.isaac, "Ja… nun… Ah! Miss Bronte, richtig? Und sie müssen ihre Assistentin sein. Mac- Mac-? ");
        await Artemis.ƒS.Character.hide(Artemis.charaktere.maire);
        await Artemis.ƒS.Character.show(Artemis.charaktere.maire, Artemis.charaktere.maire.pose.happy, Artemis.ƒS.positionPercent(Artemis.charaktere.maire.positionStandard.x, Artemis.charaktere.maire.positionStandard.y));
        await Artemis.ƒS.update(0.4);
        await Artemis.ƒS.Speech.tell(Artemis.charaktere.maire, "Maire reicht aus. ");
        await Artemis.ƒS.Character.hide(Artemis.charaktere.isaac);
        await Artemis.ƒS.Character.show(Artemis.charaktere.isaac, Artemis.charaktere.isaac.pose.happy, Artemis.ƒS.positionPercent(Artemis.charaktere.isaac.positionStandard.x, Artemis.charaktere.isaac.positionStandard.y));
        await Artemis.ƒS.update(0.4);
        await Artemis.ƒS.Speech.tell(Artemis.charaktere.isaac, "Sehr erfreut. Ich bin Isaac. Ich habe im Gericht ein paar Mal ihre Arbeit betrachten können. Sie scheinen sehr sorgfältig zu arbeiten! ");
        await Artemis.ƒS.Speech.tell(Artemis.charaktere.bronte, "Oh vielen Dank. ");
        await Artemis.ƒS.Speech.tell(Artemis.charaktere.isaac, "Ah, ich sehe das Essen kommt, wir sollten uns setzen.");
        await Artemis.ƒS.Character.hide(Artemis.charaktere.isaac);
        await Artemis.ƒS.update(0.8);
        await Artemis.ƒS.Character.hide(Artemis.charaktere.maire);
        await Artemis.ƒS.Character.show(Artemis.charaktere.maire, Artemis.charaktere.maire.pose.embarrassed, Artemis.ƒS.positionPercent(Artemis.charaktere.maire.positionStandard.x, Artemis.charaktere.maire.positionStandard.y));
        await Artemis.ƒS.update(0.4);
        await Artemis.ƒS.Speech.tell(Artemis.charaktere.maire, "Bronte, bitte sag mir das ist keines dieser merkwürdigen britischen Gerichte?! ");
        await Artemis.ƒS.Character.hide(Artemis.charaktere.bronte);
        await Artemis.ƒS.Character.show(Artemis.charaktere.bronte, Artemis.charaktere.bronte.pose.think, Artemis.ƒS.positionPercent(Artemis.charaktere.bronte.positionStandard.x, Artemis.charaktere.bronte.positionStandard.y));
        await Artemis.ƒS.update(0.4);
        await Artemis.ƒS.Speech.tell(Artemis.charaktere.bronte, "Es ist tatsächlich Schottisch…");
        let haggisDecision = await Artemis.ƒS.Menu.getInput(chooseHaggis, "basicChoice");
        switch (haggisDecision) {
            case chooseHaggis.lie:
                localStorage.setItem('haggisYummy', JSON.stringify(true));
                await Artemis.ƒS.Character.hide(Artemis.charaktere.bronte);
                await Artemis.ƒS.Character.show(Artemis.charaktere.bronte, Artemis.charaktere.bronte.pose.happy, Artemis.ƒS.positionPercent(Artemis.charaktere.bronte.positionStandard.x, Artemis.charaktere.bronte.positionStandard.y));
                await Artemis.ƒS.update(0.4);
                await Artemis.ƒS.Speech.tell(Artemis.charaktere.bronte, " Aber mach dir keine Sorge. Es ist ein sehr leckeres Gericht was aus etwas Lammfleisch besteht. ");
                await Artemis.ƒS.Character.hide(Artemis.charaktere.maire);
                await Artemis.ƒS.Character.show(Artemis.charaktere.maire, Artemis.charaktere.maire.pose.happy, Artemis.ƒS.positionPercent(Artemis.charaktere.maire.positionStandard.x, Artemis.charaktere.maire.positionStandard.y));
                await Artemis.ƒS.update(0.4);
                await Artemis.ƒS.Speech.tell(Artemis.charaktere.maire, " Phu… da bin ich erleichtert. Hatte mit dem schlimmsten gerechnet. Dann guten Appetit!");
                await Artemis.ƒS.Character.hide(Artemis.charaktere.bronte);
                await Artemis.ƒS.Character.hide(Artemis.charaktere.maire);
                await Artemis.ƒS.update(0.8);
                await Artemis.ƒS.Location.show(Artemis.location.black);
                await Artemis.ƒS.update(Artemis.transistions.standard.duration, Artemis.transistions.standard.alpha, Artemis.transistions.standard.edge);
                Artemis.ƒS.Sound.play(Artemis.sound.dinnerSound, 0.5);
                Artemis.ƒS.Sound.play(Artemis.sound.waterGlass, 0.1);
                await Artemis.ƒS.update(0.8);
                await Artemis.ƒS.Location.show(Artemis.location.saalon);
                await Artemis.ƒS.update(Artemis.transistions.standard.duration, "Asset/Transition/18.png", Artemis.transistions.standard.edge);
                Artemis.dataForSave.greetingInSaalonFinished = true;
                await Artemis.ƒS.Character.show(Artemis.charaktere.bronte, Artemis.charaktere.bronte.pose.happy, Artemis.ƒS.positionPercent(Artemis.charaktere.bronte.positionStandard.x, Artemis.charaktere.bronte.positionStandard.y));
                await Artemis.ƒS.Character.show(Artemis.charaktere.maire, Artemis.charaktere.maire.pose.happy, Artemis.ƒS.positionPercent(Artemis.charaktere.maire.positionStandard.x, Artemis.charaktere.maire.positionStandard.y));
                await Artemis.ƒS.update(0.8);
                await Artemis.ƒS.Speech.tell(Artemis.charaktere.bronte, "Danke für das leckere Essen.");
                await Artemis.ƒS.Speech.tell(Artemis.charaktere.maire, "Ja vielen Dank!");
                await Artemis.ƒS.Character.show(Artemis.charaktere.grace, Artemis.charaktere.grace.pose.laugh, Artemis.ƒS.positionPercent(Artemis.charaktere.grace.positionStandard.x, Artemis.charaktere.grace.positionStandard.y));
                await Artemis.ƒS.update(0.4);
                await Artemis.ƒS.Speech.tell(Artemis.charaktere.grace, " Freut mich, dass es ihnen wohlbekommen ist. Mein Vater ist gebürtiger Schotte und so sind wir alle große Bewunderer der Schottischen Küche. ");
                await Artemis.ƒS.Speech.tell(Artemis.charaktere.grace, " Auch wenn es sich natürlich nicht für Frauen von Stand gehört, hat mir meine Mutter beigebracht zu kochen. ");
                await Artemis.ƒS.Speech.tell(Artemis.charaktere.grace, " Aber zum Glück hat sie es auch niedergeschrieben. Mein Gedächtnis lässt mich doch oft im Stich.");
                await Artemis.ƒS.Speech.tell(Artemis.charaktere.grace, "Und es wäre wirklich ein Jammer gewesen, wenn das Gericht meinetwegen verloren gegangen wäre.");
                await Artemis.ƒS.Speech.tell(Artemis.charaktere.grace, " Aber zum Glück gibt es ja Stift und Papier. Haha ");
                await Artemis.ƒS.Speech.tell(Artemis.charaktere.grace, "Jetzt wo um unseren körperlichen Leib gesorgt ist, lasst uns den restlichen Abend genießen. Oh Miss Bronte ich habe noch eine kleine Überraschung für sie! Warten sie kurz. ");
                await Artemis.ƒS.Character.hide(Artemis.charaktere.grace);
                await Artemis.ƒS.update(0.8);
                await Artemis.ƒS.Character.hide(Artemis.charaktere.isaac);
                await Artemis.ƒS.Character.show(Artemis.charaktere.isaac, Artemis.charaktere.isaac.pose.happy, Artemis.ƒS.positionPercent(Artemis.charaktere.isaac.positionStandard.x, Artemis.charaktere.isaac.positionStandard.y));
                await Artemis.ƒS.update(0.8);
                await Artemis.ƒS.Speech.tell(Artemis.charaktere.isaac, " Meine Schwägerin ist wohl sehr angetan von ihren Geschichten. Sie konnte beim Essen ja gar nicht von Ihnen ablassen. Ich hoffe sie konnten das Essen trotzdem genießen. ");
                await Artemis.ƒS.Speech.tell(Artemis.charaktere.bronte, " Oh ja keine Sorge und ich bin wohl auch zu Eitel um mir so eine Gelegenheit des Erzählens entgehen zu lassen. ");
                await Artemis.ƒS.Character.hide(Artemis.charaktere.bronte);
                await Artemis.ƒS.Character.show(Artemis.charaktere.bronte, Artemis.charaktere.bronte.pose.think, Artemis.ƒS.positionPercent(Artemis.charaktere.bronte.positionStandard.x, Artemis.charaktere.bronte.positionStandard.y));
                await Artemis.ƒS.update(0.4);
                await Artemis.ƒS.Speech.tell(Artemis.charaktere.bronte, "Wobei ich noch einmal betonnen muss, dass gerade Maire mir immer eine große Hilfe ist. Sie führt immerhin die Bücher.");
                await Artemis.ƒS.Character.hide(Artemis.charaktere.bronte);
                await Artemis.ƒS.Character.show(Artemis.charaktere.bronte, Artemis.charaktere.bronte.pose.happy, Artemis.ƒS.positionPercent(Artemis.charaktere.bronte.positionStandard.x, Artemis.charaktere.bronte.positionStandard.y));
                await Artemis.ƒS.Character.hide(Artemis.charaktere.maire);
                await Artemis.ƒS.Character.show(Artemis.charaktere.maire, Artemis.charaktere.maire.pose.embarrassed, Artemis.ƒS.positionPercent(Artemis.charaktere.maire.positionStandard.x, Artemis.charaktere.maire.positionStandard.y));
                await Artemis.ƒS.update(0.4);
                await Artemis.ƒS.Speech.tell(Artemis.charaktere.maire, " Oh… äh… Bronte dass ist ja keine große Sache. ");
                await Artemis.ƒS.Character.hide(Artemis.charaktere.maire);
                await Artemis.ƒS.Character.show(Artemis.charaktere.maire, Artemis.charaktere.maire.pose.happy, Artemis.ƒS.positionPercent(Artemis.charaktere.maire.positionStandard.x, Artemis.charaktere.maire.positionStandard.y));
                await Artemis.ƒS.update(0.4);
                await Artemis.ƒS.Speech.tell(Artemis.charaktere.isaac, " Wirklich sehr beeindruckend Maire.");
                break;
            case chooseHaggis.truth:
                Artemis.dataForSave.mairePuked = true;
                Artemis.dataForSave.pointAngryMaire += 1;
                localStorage.setItem('haggisDisgusting', JSON.stringify(true));
                await Artemis.ƒS.Speech.tell(Artemis.charaktere.bronte, " Der Paunch – Magen eines Schafes – wird mit Herz, Niere, Leber und anderen Innereien gefüllt. Und das ergibt dann eine Art Wurst. Sehr lecker eigentlich, wenn auch ungewöhnlich. ");
                await Artemis.ƒS.Character.hide(Artemis.charaktere.maire);
                await Artemis.ƒS.Character.show(Artemis.charaktere.maire, Artemis.charaktere.maire.pose.fear, Artemis.ƒS.positionPercent(Artemis.charaktere.maire.positionStandard.x, Artemis.charaktere.maire.positionStandard.y));
                await Artemis.ƒS.update(0.4);
                await Artemis.ƒS.Speech.tell(Artemis.charaktere.maire, " Ich glaube mir wird schlecht…");
                await Artemis.ƒS.Character.hide(Artemis.charaktere.bronte);
                await Artemis.ƒS.Character.hide(Artemis.charaktere.maire);
                await Artemis.ƒS.update(0.8);
                await Artemis.ƒS.Location.show(Artemis.location.black);
                await Artemis.ƒS.update(Artemis.transistions.standard.duration, Artemis.transistions.standard.alpha, Artemis.transistions.standard.edge);
                Artemis.ƒS.Sound.play(Artemis.sound.dinnerSound, 0.5);
                Artemis.ƒS.Sound.play(Artemis.sound.waterGlass, 0.1);
                await Artemis.ƒS.update(0.8);
                await Artemis.ƒS.Location.show(Artemis.location.saalon);
                await Artemis.ƒS.update(Artemis.transistions.standard.duration, "Asset/Transition/18.png", Artemis.transistions.standard.edge);
                await Artemis.ƒS.Character.show(Artemis.charaktere.bronte, Artemis.charaktere.bronte.pose.happy, Artemis.ƒS.positionPercent(Artemis.charaktere.bronte.positionStandard.x, Artemis.charaktere.bronte.positionStandard.y));
                await Artemis.ƒS.Character.show(Artemis.charaktere.grace, Artemis.charaktere.grace.pose.laugh, Artemis.ƒS.positionPercent(Artemis.charaktere.grace.positionStandard.x, Artemis.charaktere.grace.positionStandard.y));
                await Artemis.ƒS.update(0.8);
                Artemis.dataForSave.greetingInSaalonFinished = true;
                await Artemis.ƒS.Speech.tell(Artemis.charaktere.bronte, "Danke für das leckere Essen.");
                await Artemis.ƒS.Character.hide(Artemis.charaktere.grace);
                await Artemis.ƒS.Character.show(Artemis.charaktere.grace, Artemis.charaktere.grace.pose.think, Artemis.ƒS.positionPercent(Artemis.charaktere.grace.positionStandard.x, Artemis.charaktere.grace.positionStandard.y));
                await Artemis.ƒS.update(0.4);
                await Artemis.ƒS.Speech.tell(Artemis.charaktere.grace, " Und Sie denken Ihrer Assistentin geht es wirklich gut? ");
                await Artemis.ƒS.Speech.tell(Artemis.charaktere.bronte, " Oh ja, Sie pudert sich bestimmt nur schnell die Nase.");
                await Artemis.ƒS.Character.hide(Artemis.charaktere.grace);
                await Artemis.ƒS.Character.show(Artemis.charaktere.grace, Artemis.charaktere.grace.pose.happy, Artemis.ƒS.positionPercent(Artemis.charaktere.grace.positionStandard.x, Artemis.charaktere.grace.positionStandard.y));
                await Artemis.ƒS.update(0.4);
                await Artemis.ƒS.Speech.tell(Artemis.charaktere.grace, " Freut mich, dass es ihnen wohlbekommen ist. Mein Vater ist gebürtiger Schotte und so sind wir alle große Bewunderer der Schottischen Küche. ");
                await Artemis.ƒS.Speech.tell(Artemis.charaktere.grace, " Auch wenn es sich natürlich nicht für Frauen von Stand gehört hat meine Mutter mir es tatsächlich beigebracht zu kochen. ");
                await Artemis.ƒS.Speech.tell(Artemis.charaktere.grace, " Aber zum Glück hat sie es auch niedergeschrieben. Mein Gedächtnis lässt mich doch oft im Stich.");
                await Artemis.ƒS.Speech.tell(Artemis.charaktere.grace, "Und es wäre wirklich ein Jammer gewesen, wenn das Gericht meinetwegen verloren gegangen wäre.");
                await Artemis.ƒS.Speech.tell(Artemis.charaktere.grace, " Aber zum Glück gibt es ja Stift und Papier. Haha ");
                await Artemis.ƒS.Speech.tell(Artemis.charaktere.grace, "Jetzt wo um unseren körperlichen Leib gesorgt ist, lasst uns den restlichen Abend genießen. Oh Miss Bronte ich habe noch eine kleine Überraschung für sie! Warten sie kurz. ");
                await Artemis.ƒS.Character.hide(Artemis.charaktere.grace);
                await Artemis.ƒS.update(0.8);
                await Artemis.ƒS.Character.hide(Artemis.charaktere.isaac);
                await Artemis.ƒS.Character.show(Artemis.charaktere.isaac, Artemis.charaktere.isaac.pose.happy, Artemis.ƒS.positionPercent(Artemis.charaktere.isaac.positionStandard.x, Artemis.charaktere.isaac.positionStandard.y));
                await Artemis.ƒS.update(0.8);
                await Artemis.ƒS.Speech.tell(Artemis.charaktere.isaac, " Meine Schwägerin ist wohl sehr angetan von ihren Geschichten. Sie konnte beim Essen ja gar nicht von Ihnen ablassen. Ich hoffe sie konnten das Essen trotzdem genießen. ");
                await Artemis.ƒS.Speech.tell(Artemis.charaktere.bronte, " Oh ja keine Sorge und ich bin wohl auch zu Eitel um mir so eine Gelegenheit des Erzählens entgehen zu lassen. ");
                await Artemis.ƒS.Character.hide(Artemis.charaktere.bronte);
                await Artemis.ƒS.Character.show(Artemis.charaktere.bronte, Artemis.charaktere.bronte.pose.think, Artemis.ƒS.positionPercent(Artemis.charaktere.bronte.positionStandard.x, Artemis.charaktere.bronte.positionStandard.y));
                await Artemis.ƒS.update(0.4);
                await Artemis.ƒS.Speech.tell(Artemis.charaktere.bronte, "Wobei ich noch einmal betonnen muss, dass gerade Maire mir immer eine große Hilfe ist. Sie führt immerhin die Bücher.");
                await Artemis.ƒS.Character.hide(Artemis.charaktere.isaac);
                await Artemis.ƒS.Character.show(Artemis.charaktere.isaac, Artemis.charaktere.isaac.pose.neutral, Artemis.ƒS.positionPercent(Artemis.charaktere.isaac.positionStandard.x, Artemis.charaktere.isaac.positionStandard.y));
                await Artemis.ƒS.update(0.4);
                await Artemis.ƒS.Speech.tell(Artemis.charaktere.isaac, " Oh wo wir gerade über sie sprechen… ");
                await Artemis.ƒS.Character.hide(Artemis.charaktere.maire);
                await Artemis.ƒS.Character.show(Artemis.charaktere.maire, Artemis.charaktere.maire.pose.neutral, Artemis.ƒS.positionPercent(Artemis.charaktere.maire.positionStandard.x, Artemis.charaktere.maire.positionStandard.y));
                await Artemis.ƒS.update(0.8);
                await Artemis.ƒS.Speech.tell(Artemis.charaktere.maire, " Bronte… Du kennst doch meinen Magen… das nächste Mal lüge mich einfach an. Ich habe mich ja komplett zum Deppen gemacht. Jetzt denken alle Iren hätten keine Manieren. ");
                await Artemis.ƒS.Speech.tell(Artemis.charaktere.bronte, " Dass tut mir sehr Leid… Aber ich denke niemand ist es wirklich aufgefallen. (Sie scheint es mir echt böse zu nehmen, ich sollte in nächster Zeit netter zu ihr sein).");
                break;
        }
    }
    Artemis.SceneThreeSaalon = SceneThreeSaalon;
})(Artemis || (Artemis = {}));
var Artemis;
(function (Artemis) {
    async function SceneTwelveFinal() {
        let chooseFinalChoice = {
            infrontOfOdette: "Vor Odette stellen",
            attack: "Angreifen",
            nothing: "Nichts"
        };
        let chooseIfGiveTestament = {
            yes: "Ja",
            no: "Nein"
        };
        if (Artemis.dataForSave.pointAngryMaire = 5) {
            localStorage.setItem('cat', JSON.stringify(true));
        }
        await Artemis.ƒS.Sound.fade(Artemis.sound.study, 0, 1);
        Artemis.ƒS.Sound.fade(Artemis.sound.final, 0.5, 1, true);
        await Artemis.ƒS.Character.show(Artemis.charaktere.alaistar, Artemis.charaktere.alaistar.pose.evil, Artemis.ƒS.positionPercent(Artemis.charaktere.alaistar.positionMiddle.x, Artemis.charaktere.alaistar.positionMiddle.y));
        await Artemis.ƒS.update(2);
        await Artemis.ƒS.Speech.tell(Artemis.charaktere.alaistar, " Schwester. ");
        await Artemis.ƒS.Speech.tell(Artemis.charaktere.odette, " !!! ");
        await Artemis.ƒS.Speech.tell(Artemis.charaktere.alaistar, " Miss Bronte, Grace würde gerne etwas mit Ihnen besprechen. ");
        await Artemis.ƒS.Character.hide(Artemis.charaktere.bronte);
        await Artemis.ƒS.Character.show(Artemis.charaktere.bronte, Artemis.charaktere.bronte.pose.sad, Artemis.ƒS.positionPercent(Artemis.charaktere.bronte.positionStandard.x, Artemis.charaktere.bronte.positionStandard.y));
        await Artemis.ƒS.Character.hide(Artemis.charaktere.odette);
        await Artemis.ƒS.Character.show(Artemis.charaktere.odette, Artemis.charaktere.odette.pose.sad, Artemis.ƒS.positionPercent(Artemis.charaktere.odette.positionStandard.x, Artemis.charaktere.odette.positionStandard.y));
        await Artemis.ƒS.update(0.4);
        await Artemis.ƒS.Speech.tell(Artemis.charaktere.bronte, " Ich denke ich bleiben lieber hier. Es muss eine ganzschöne Überraschung sein ihre Schwester zu sehen. ");
        await Artemis.ƒS.Character.hide(Artemis.charaktere.alaistar);
        await Artemis.ƒS.Character.show(Artemis.charaktere.alaistar, Artemis.charaktere.alaistar.pose.angry, Artemis.ƒS.positionPercent(Artemis.charaktere.alaistar.positionMiddle.x, Artemis.charaktere.alaistar.positionMiddle.y));
        await Artemis.ƒS.update(0.4);
        await Artemis.ƒS.Speech.tell(Artemis.charaktere.alaistar, " Gehen Sie. ");
        await Artemis.ƒS.Character.hide(Artemis.charaktere.bronte);
        await Artemis.ƒS.Character.show(Artemis.charaktere.bronte, Artemis.charaktere.bronte.pose.angry, Artemis.ƒS.positionPercent(Artemis.charaktere.bronte.positionStandard.x, Artemis.charaktere.bronte.positionStandard.y));
        await Artemis.ƒS.update(0.4);
        await Artemis.ƒS.Speech.tell(Artemis.charaktere.bronte, " Nein. ");
        await Artemis.ƒS.Speech.tell(Artemis.charaktere.odette, " Alaistar bitte, es gibt keinen Grund- ");
        await Artemis.ƒS.Character.hide(Artemis.charaktere.bronte);
        await Artemis.ƒS.Character.show(Artemis.charaktere.bronte, Artemis.charaktere.bronte.pose.shout, Artemis.ƒS.positionPercent(Artemis.charaktere.bronte.positionStandard.x, Artemis.charaktere.bronte.positionStandard.y));
        await Artemis.ƒS.update(0.4);
        await Artemis.ƒS.Speech.tell(Artemis.charaktere.bronte, " (Er will etwas aus seiner Jacke ziehen. Was soll ich tun?)");
        let userchooseFinalChoice = await Artemis.ƒS.Menu.getInput(chooseFinalChoice, "basicChoice");
        await Artemis.ƒS.Character.hide(Artemis.charaktere.bronte);
        await Artemis.ƒS.Character.show(Artemis.charaktere.bronte, Artemis.charaktere.bronte.pose.shout, Artemis.ƒS.positionPercent(Artemis.charaktere.bronte.positionStandard.x, Artemis.charaktere.bronte.positionStandard.y));
        await Artemis.ƒS.update(0.4);
        await Artemis.ƒS.Character.hide(Artemis.charaktere.bronte);
        await Artemis.ƒS.Character.hide(Artemis.charaktere.odette);
        await Artemis.ƒS.Character.hide(Artemis.charaktere.alaistar);
        await Artemis.ƒS.update(2);
        await Artemis.ƒS.Location.show(Artemis.location.infrontOfManorNight);
        await Artemis.ƒS.Character.show(Artemis.charaktere.maire, Artemis.charaktere.maire.pose.fear, Artemis.ƒS.positionPercent(Artemis.charaktere.maire.positionStandard.x, Artemis.charaktere.maire.positionStandard.y));
        await Artemis.ƒS.Character.show(Artemis.charaktere.isaac, Artemis.charaktere.isaac.pose.cry, Artemis.ƒS.positionPercent(Artemis.charaktere.isaac.positionStandard.x, Artemis.charaktere.isaac.positionStandard.y));
        await Artemis.ƒS.update(0.1);
        if (!Artemis.dataForSave.tookGun) {
            Artemis.ƒS.Sound.fade(Artemis.sound.gunShoot, 1, 1, false);
            await Artemis.ƒS.Speech.tell(Artemis.charaktere.maire, "Ein Schuss!  ");
        }
        else {
            Artemis.ƒS.Sound.fade(Artemis.sound.stellaScream, 0.8, 1, false);
            await Artemis.ƒS.Speech.tell(Artemis.charaktere.maire, "Ein Schrei!  ");
        }
        await Artemis.ƒS.Character.hide(Artemis.charaktere.isaac);
        await Artemis.ƒS.Character.hide(Artemis.charaktere.maire);
        await Artemis.ƒS.Location.show(Artemis.location.studyroom);
        await Artemis.ƒS.update(0.2);
        if (userchooseFinalChoice == chooseFinalChoice.infrontOfOdette && Artemis.dataForSave.tookGun) {
            await Artemis.ƒS.Character.hide(Artemis.charaktere.bronte);
            await Artemis.ƒS.Character.show(Artemis.charaktere.bronte, Artemis.charaktere.bronte.pose.shout, Artemis.ƒS.positionPercent(50, Artemis.charaktere.bronte.positionStandard.y));
            await Artemis.ƒS.Character.hide(Artemis.charaktere.alaistar);
            await Artemis.ƒS.Character.show(Artemis.charaktere.alaistar, Artemis.charaktere.alaistar.pose.confussed, Artemis.ƒS.positionPercent(15, Artemis.charaktere.alaistar.positionMiddle.y));
            await Artemis.ƒS.Character.hide(Artemis.charaktere.odette);
            await Artemis.ƒS.Character.show(Artemis.charaktere.odette, Artemis.charaktere.odette.pose.scream, Artemis.ƒS.positionPercent(85, Artemis.charaktere.odette.positionStandard.y));
            await Artemis.ƒS.update(0.4);
            await Artemis.ƒS.Speech.tell(Artemis.charaktere.bronte, " NEIN! ");
            await Artemis.ƒS.Character.hide(Artemis.charaktere.alaistar);
            await Artemis.ƒS.Character.show(Artemis.charaktere.alaistar, Artemis.charaktere.alaistar.pose.emotionalDrained, Artemis.ƒS.positionPercent(15, Artemis.charaktere.alaistar.positionMiddle.y));
            await Artemis.ƒS.update(0.4);
            await Artemis.ƒS.Speech.tell(Artemis.charaktere.alaistar, " Wo… nein… arg! ");
            Artemis.ƒS.Sound.fade(Artemis.sound.final, 0, 4, true);
            Artemis.ƒS.Sound.fade(Artemis.sound.finalGood, 0.8, 4, true);
            await Artemis.ƒS.Character.hide(Artemis.charaktere.bronte);
            await Artemis.ƒS.Character.show(Artemis.charaktere.bronte, Artemis.charaktere.bronte.pose.happy, Artemis.ƒS.positionPercent(50, Artemis.charaktere.bronte.positionStandard.y));
            await Artemis.ƒS.update(0.4);
            await Artemis.ƒS.Speech.tell(Artemis.charaktere.bronte, " Suchen sie dies? Ein sehr schöner Revolver. Auch wenn ich die Kugeln aus Sicherheit entfern habe. ");
            await Artemis.ƒS.Character.hide(Artemis.charaktere.alaistar);
            await Artemis.ƒS.Character.show(Artemis.charaktere.alaistar, Artemis.charaktere.alaistar.pose.angry, Artemis.ƒS.positionPercent(15, Artemis.charaktere.alaistar.positionMiddle.y));
            await Artemis.ƒS.update(0.4);
            await Artemis.ƒS.Speech.tell(Artemis.charaktere.alaistar, " Nein! ");
            await Artemis.ƒS.Character.hide(Artemis.charaktere.odette);
            await Artemis.ƒS.Character.hide(Artemis.charaktere.bronte);
            await Artemis.ƒS.Character.hide(Artemis.charaktere.alaistar);
            await Artemis.ƒS.update(0.4);
            await Artemis.ƒS.Character.show(Artemis.charaktere.maire, Artemis.charaktere.maire.pose.fear, Artemis.ƒS.positionPercent(20, Artemis.charaktere.maire.positionStandard.y));
            await Artemis.ƒS.Character.show(Artemis.charaktere.isaac, Artemis.charaktere.isaac.pose.neutral, Artemis.ƒS.positionPercent(Artemis.charaktere.isaac.positionStandard.x, Artemis.charaktere.isaac.positionStandard.y));
            await Artemis.ƒS.update(1);
            await Artemis.ƒS.Speech.tell(Artemis.charaktere.maire, " Bronte! Was… ");
            await Artemis.ƒS.Character.hide(Artemis.charaktere.isaac);
            await Artemis.ƒS.Character.show(Artemis.charaktere.isaac, Artemis.charaktere.isaac.pose.cry, Artemis.ƒS.positionPercent(Artemis.charaktere.isaac.positionStandard.x, Artemis.charaktere.isaac.positionStandard.y));
            await Artemis.ƒS.update(0.4);
            await Artemis.ƒS.Speech.tell(Artemis.charaktere.isaac, " !!! ");
            await Artemis.ƒS.Character.hide(Artemis.charaktere.isaac);
            await Artemis.ƒS.Character.show(Artemis.charaktere.isaac, Artemis.charaktere.isaac.pose.crying, Artemis.ƒS.positionPercent(Artemis.charaktere.isaac.positionStandard.x, Artemis.charaktere.isaac.positionStandard.y));
            await Artemis.ƒS.update(0.4);
            await Artemis.ƒS.Speech.tell(Artemis.charaktere.isaac, " Wie… Oh Götter. ");
            await Artemis.ƒS.Character.hide(Artemis.charaktere.isaac);
            await Artemis.ƒS.Character.hide(Artemis.charaktere.maire);
            await Artemis.ƒS.Character.show(Artemis.charaktere.odette, Artemis.charaktere.odette.pose.gleefull, Artemis.ƒS.positionPercent(Artemis.charaktere.odette.positionMiddle.x, Artemis.charaktere.odette.positionStandard.y));
            await Artemis.ƒS.update(0.4);
            await Artemis.ƒS.Speech.tell(Artemis.charaktere.odette, " Isaac!");
            await Artemis.ƒS.Character.hide(Artemis.charaktere.odette);
            await Artemis.ƒS.update(1);
            await Artemis.ƒS.Character.show(Artemis.charaktere.bronte, Artemis.charaktere.bronte.pose.happy, Artemis.ƒS.positionPercent(Artemis.charaktere.bronte.positionStandard.x, Artemis.charaktere.bronte.positionStandard.y));
            await Artemis.ƒS.Character.show(Artemis.charaktere.maire, Artemis.charaktere.maire.pose.neutral, Artemis.ƒS.positionPercent(Artemis.charaktere.maire.positionStandard.x, Artemis.charaktere.maire.positionStandard.y));
            await Artemis.ƒS.update(0.4);
            await Artemis.ƒS.Speech.tell(Artemis.charaktere.bronte, " Maire, wenn du so lieb wärst die Polizei zu rufen. Ich denke sie werden eine schöne neue Wohnung für Mr. Blackburn besorgen. ");
            if (!Artemis.dataForSave.gotTestament) {
                await Artemis.ƒS.Character.hide(Artemis.charaktere.bronte);
                await Artemis.ƒS.Character.show(Artemis.charaktere.bronte, Artemis.charaktere.bronte.pose.laugh, Artemis.ƒS.positionPercent(Artemis.charaktere.bronte.positionStandard.x, Artemis.charaktere.bronte.positionStandard.y));
                await Artemis.ƒS.update(0.4);
                await Artemis.ƒS.Speech.tell(Artemis.charaktere.bronte, "Oh und ich denke wenn ich mein Dietrichset hole, wird auch der Safe nicht allzu lange verschlossen bleiben. ");
                await Artemis.ƒS.Character.hide(Artemis.charaktere.bronte);
                await Artemis.ƒS.Character.show(Artemis.charaktere.bronte, Artemis.charaktere.bronte.pose.think, Artemis.ƒS.positionPercent(Artemis.charaktere.bronte.positionStandard.x, Artemis.charaktere.bronte.positionStandard.y));
                await Artemis.ƒS.update(0.4);
                await Artemis.ƒS.Speech.tell(Artemis.charaktere.bronte, "Und wenn ich mich nicht ganz irre wird diese Wohnung dann an die jüngste Tochter gehen.");
            }
            else {
                await Artemis.ƒS.Character.hide(Artemis.charaktere.bronte);
                await Artemis.ƒS.Character.show(Artemis.charaktere.bronte, Artemis.charaktere.bronte.pose.happy, Artemis.ƒS.positionPercent(Artemis.charaktere.bronte.positionStandard.x, Artemis.charaktere.bronte.positionStandard.y));
                await Artemis.ƒS.update(0.4);
                await Artemis.ƒS.Speech.tell(Artemis.charaktere.bronte, " Immerhin wird diese Wohnung nun wohl an die jüngste Tochter gehen. ");
                await Artemis.ƒS.Speech.tell(Artemis.charaktere.bronte, " Ich habe es hier schwarz auf weiß. Das echte Testamant von Lady Blackburn. ");
                await Artemis.ƒS.Speech.tell(Artemis.charaktere.bronte, "Sie teilt ihr Geld mit all ihren Kindern, nicht nur Alaistar Blackburn. ");
            }
            await Artemis.ƒS.Character.hide(Artemis.charaktere.maire);
            await Artemis.ƒS.Character.show(Artemis.charaktere.maire, Artemis.charaktere.maire.pose.embarrassed, Artemis.ƒS.positionPercent(Artemis.charaktere.maire.positionStandard.x, Artemis.charaktere.maire.positionStandard.y));
            await Artemis.ƒS.update(0.4);
            await Artemis.ƒS.Speech.tell(Artemis.charaktere.maire, " Ich… oh...klar, die Polizei… ");
            await Artemis.ƒS.Character.hide(Artemis.charaktere.maire);
            await Artemis.ƒS.Character.show(Artemis.charaktere.maire, Artemis.charaktere.maire.pose.happy, Artemis.ƒS.positionPercent(Artemis.charaktere.maire.positionStandard.x, Artemis.charaktere.maire.positionStandard.y));
            await Artemis.ƒS.update(0.4);
            await Artemis.ƒS.Speech.tell(Artemis.charaktere.maire, " Was für ein Abend. ");
            await Artemis.ƒS.Character.hide(Artemis.charaktere.maire);
            await Artemis.ƒS.Character.show(Artemis.charaktere.maire, Artemis.charaktere.maire.pose.laugh, Artemis.ƒS.positionPercent(Artemis.charaktere.maire.positionStandard.x, Artemis.charaktere.maire.positionStandard.y));
            await Artemis.ƒS.update(0.4);
            await Artemis.ƒS.Speech.tell(Artemis.charaktere.maire, " Oh! Haha ");
            await Artemis.ƒS.Character.hide(Artemis.charaktere.bronte);
            await Artemis.ƒS.Character.show(Artemis.charaktere.bronte, Artemis.charaktere.bronte.pose.think, Artemis.ƒS.positionPercent(Artemis.charaktere.bronte.positionStandard.x, Artemis.charaktere.bronte.positionStandard.y));
            await Artemis.ƒS.update(0.4);
            await Artemis.ƒS.Speech.tell(Artemis.charaktere.bronte, " Maire? ");
            await Artemis.ƒS.Character.hide(Artemis.charaktere.maire);
            await Artemis.ƒS.Character.show(Artemis.charaktere.maire, Artemis.charaktere.maire.pose.happy, Artemis.ƒS.positionPercent(Artemis.charaktere.maire.positionStandard.x, Artemis.charaktere.maire.positionStandard.y));
            await Artemis.ƒS.update(0.4);
            await Artemis.ƒS.Speech.tell(Artemis.charaktere.maire, " Schau wenn ich gefunden habe! ");
            await Artemis.ƒS.Character.hide(Artemis.charaktere.bronte);
            await Artemis.ƒS.Character.show(Artemis.charaktere.bronte, Artemis.charaktere.bronte.pose.laugh, Artemis.ƒS.positionPercent(Artemis.charaktere.bronte.positionStandard.x, Artemis.charaktere.bronte.positionStandard.y));
            await Artemis.ƒS.update(0.4);
            Artemis.ƒS.Sound.play(Artemis.sound.catMeow, 1);
            await Artemis.ƒS.Speech.tell("Artemis", " Miau. ");
            await Artemis.ƒS.Speech.tell(Artemis.charaktere.bronte, " Damit hätte sich wohl auch das letzte Mysterium gelöst.");
            Artemis.ƒS.Sound.fade(Artemis.sound.finalGood, 0, 1, true);
            await Artemis.ƒS.Character.hide(Artemis.charaktere.maire);
            await Artemis.ƒS.Character.hide(Artemis.charaktere.bronte);
            await Artemis.ƒS.Location.show(Artemis.location.black);
            await Artemis.ƒS.update(3);
            if (Artemis.dataForSave.pointAngryMaire <= 1) {
                return "ExtraSceneBronteMaire";
            }
            return "EndingOneAllSurvive";
        }
        else if (userchooseFinalChoice == chooseFinalChoice.infrontOfOdette) {
            await Artemis.ƒS.Character.show(Artemis.charaktere.bronte, Artemis.charaktere.bronte.pose.shout, Artemis.ƒS.positionPercent(Artemis.charaktere.bronte.positionMiddle.x, Artemis.charaktere.bronte.positionStandard.y));
            await Artemis.ƒS.update(0.4);
            await Artemis.ƒS.Speech.tell(Artemis.charaktere.bronte, " Oh… oh weh…");
            await Artemis.ƒS.Character.hide(Artemis.charaktere.bronte);
            await Artemis.ƒS.update(4);
            await Artemis.ƒS.Character.show(Artemis.charaktere.maire, Artemis.charaktere.maire.pose.fear, Artemis.ƒS.positionPercent(20, Artemis.charaktere.maire.positionStandard.y));
            await Artemis.ƒS.Character.show(Artemis.charaktere.isaac, Artemis.charaktere.isaac.pose.cry, Artemis.ƒS.positionPercent(Artemis.charaktere.isaac.positionStandard.x, Artemis.charaktere.isaac.positionStandard.y));
            await Artemis.ƒS.update(1);
            await Artemis.ƒS.Speech.tell(Artemis.charaktere.maire, " NEIN! ");
            await Artemis.ƒS.Character.hide(Artemis.charaktere.maire);
            await Artemis.ƒS.Character.show(Artemis.charaktere.maire, Artemis.charaktere.maire.pose.shooked, Artemis.ƒS.positionPercent(20, Artemis.charaktere.maire.positionStandard.y));
            await Artemis.ƒS.update(0.4);
            await Artemis.ƒS.Speech.tell(Artemis.charaktere.maire, " Bronte bitte… nein! Bitte schau mich an! ");
            await Artemis.ƒS.Character.hide(Artemis.charaktere.maire);
            await Artemis.ƒS.Character.hide(Artemis.charaktere.isaac);
            await Artemis.ƒS.Character.show(Artemis.charaktere.isaac, Artemis.charaktere.isaac.pose.sad, Artemis.ƒS.positionPercent(Artemis.charaktere.isaac.positionStandard.x, Artemis.charaktere.isaac.positionStandard.y));
            await Artemis.ƒS.Character.show(Artemis.charaktere.alaistar, Artemis.charaktere.alaistar.pose.confussed, Artemis.ƒS.positionPercent(15, Artemis.charaktere.alaistar.positionMiddle.y));
            await Artemis.ƒS.update(0.4);
            await Artemis.ƒS.Speech.tell(Artemis.charaktere.alaistar, " Nein… ich… ich wollte nicht sie treffen ich…  ");
            await Artemis.ƒS.Character.hide(Artemis.charaktere.alaistar);
            await Artemis.ƒS.update(1);
            await Artemis.ƒS.Speech.tell(Artemis.charaktere.isaac, " Alaistar! ");
            await Artemis.ƒS.Character.hide(Artemis.charaktere.isaac);
            await Artemis.ƒS.update(1);
            await Artemis.ƒS.Character.show(Artemis.charaktere.maire, Artemis.charaktere.maire.pose.shooked, Artemis.ƒS.positionPercent(20, Artemis.charaktere.maire.positionStandard.y));
            await Artemis.ƒS.Character.show(Artemis.charaktere.odette, Artemis.charaktere.odette.pose.scream, Artemis.ƒS.positionPercent(85, Artemis.charaktere.odette.positionStandard.y));
            await Artemis.ƒS.update(0.4);
            await Artemis.ƒS.Speech.tell(Artemis.charaktere.odette, " Oh Götter. Miss Bronte es tut mir so Leid… ich. ");
            Artemis.ƒS.Sound.fade(Artemis.sound.final, 0, 4);
            Artemis.ƒS.Sound.play(Artemis.sound.finalSad, 0.8, true);
            await Artemis.ƒS.Character.hide(Artemis.charaktere.odette);
            await Artemis.ƒS.Character.show(Artemis.charaktere.odette, Artemis.charaktere.odette.pose.scream, Artemis.ƒS.positionPercent(85, Artemis.charaktere.odette.positionStandard.y));
            await Artemis.ƒS.update(0.4);
            await Artemis.ƒS.Speech.tell(Artemis.charaktere.bronte, " Ist… okay… ");
            await Artemis.ƒS.Character.hide(Artemis.charaktere.maire);
            await Artemis.ƒS.Character.show(Artemis.charaktere.maire, Artemis.charaktere.maire.pose.cry, Artemis.ƒS.positionPercent(20, Artemis.charaktere.maire.positionStandard.y));
            await Artemis.ƒS.update(0.4);
            await Artemis.ƒS.Speech.tell(Artemis.charaktere.maire, " Bitte nicht. Wir brauchen einen Arzt! Sofort! ");
            await Artemis.ƒS.Character.hide(Artemis.charaktere.odette);
            await Artemis.ƒS.Character.show(Artemis.charaktere.odette, Artemis.charaktere.odette.pose.sad, Artemis.ƒS.positionPercent(85, Artemis.charaktere.odette.positionStandard.y));
            await Artemis.ƒS.update(0.4);
            await Artemis.ƒS.Speech.tell(Artemis.charaktere.odette, " Ich… Ich versuche jemand zu holen, aber… Hier ist so viel Blut. ");
            await Artemis.ƒS.Character.hide(Artemis.charaktere.maire);
            await Artemis.ƒS.Character.show(Artemis.charaktere.maire, Artemis.charaktere.maire.pose.sad, Artemis.ƒS.positionPercent(20, Artemis.charaktere.maire.positionStandard.y));
            await Artemis.ƒS.update(0.4);
            await Artemis.ƒS.Speech.tell(Artemis.charaktere.maire, " Nein… beeile dich! Geh schon!");
            await Artemis.ƒS.Character.hide(Artemis.charaktere.maire);
            await Artemis.ƒS.Character.show(Artemis.charaktere.maire, Artemis.charaktere.maire.pose.fear, Artemis.ƒS.positionPercent(20, Artemis.charaktere.maire.positionStandard.y));
            await Artemis.ƒS.update(0.4);
            document.getElementById('speechContent').classList.add('textEffectBig');
            await Artemis.ƒS.Speech.tell(Artemis.charaktere.maire, "GEH!");
            await Artemis.ƒS.Character.hide(Artemis.charaktere.odette);
            await Artemis.ƒS.Character.show(Artemis.charaktere.odette, Artemis.charaktere.odette.pose.scream, Artemis.ƒS.positionPercent(85, Artemis.charaktere.odette.positionStandard.y));
            await Artemis.ƒS.Character.hide(Artemis.charaktere.maire);
            await Artemis.ƒS.Character.show(Artemis.charaktere.maire, Artemis.charaktere.maire.pose.shooked, Artemis.ƒS.positionPercent(20, Artemis.charaktere.maire.positionStandard.y));
            await Artemis.ƒS.update(0.4);
            await Artemis.ƒS.Character.hide(Artemis.charaktere.odette);
            await Artemis.ƒS.update(2);
            document.getElementById('speechContent').classList.remove('textEffectBig');
            await Artemis.ƒS.Speech.tell(Artemis.charaktere.bronte, " Maire… *hust*… Ich… liebe… dich… ");
            await Artemis.ƒS.Character.hide(Artemis.charaktere.maire);
            await Artemis.ƒS.Character.show(Artemis.charaktere.maire, Artemis.charaktere.maire.pose.cry, Artemis.ƒS.positionPercent(20, Artemis.charaktere.maire.positionStandard.y));
            await Artemis.ƒS.update(0.4);
            await Artemis.ƒS.Speech.tell(Artemis.charaktere.maire, " Ich weiß. Ich weiß doch Bronte. Ich liebe dich auch. Bitte halte durch!");
            Artemis.ƒS.Sound.fade(Artemis.sound.finalSad, 0, 4);
            await Artemis.ƒS.Character.hide(Artemis.charaktere.maire);
            await Artemis.ƒS.Location.show(Artemis.location.black);
            await Artemis.ƒS.update(3);
            return "EndingTwoBronteDead";
        }
        else if (userchooseFinalChoice == chooseFinalChoice.attack && Artemis.dataForSave.tookGun) {
            await Artemis.ƒS.Character.show(Artemis.charaktere.alaistar, Artemis.charaktere.alaistar.pose.confussed, Artemis.ƒS.positionPercent(Artemis.charaktere.alaistar.positionMiddle.x, Artemis.charaktere.alaistar.positionMiddle.y));
            await Artemis.ƒS.Character.show(Artemis.charaktere.bronte, Artemis.charaktere.bronte.pose.angry, Artemis.ƒS.positionPercent(Artemis.charaktere.bronte.positionStandard.x, Artemis.charaktere.bronte.positionStandard.y));
            await Artemis.ƒS.update(0.4);
            await Artemis.ƒS.Speech.tell(Artemis.charaktere.bronte, " ARG! ");
            await Artemis.ƒS.Character.hide(Artemis.charaktere.alaistar);
            await Artemis.ƒS.Character.show(Artemis.charaktere.alaistar, Artemis.charaktere.alaistar.pose.evil, Artemis.ƒS.positionPercent(Artemis.charaktere.alaistar.positionMiddle.x, Artemis.charaktere.alaistar.positionMiddle.y));
            await Artemis.ƒS.update(0.4);
            await Artemis.ƒS.Speech.tell(Artemis.charaktere.alaistar, " Hmpf! NEIN! ARG… FASS MICH NICHT AN. ");
            await Artemis.ƒS.Speech.tell(Artemis.charaktere.bronte, " HIYEA! ");
            await Artemis.ƒS.Character.hide(Artemis.charaktere.alaistar);
            await Artemis.ƒS.Character.animate(Artemis.charaktere.alaistar, Artemis.charaktere.alaistar.pose.confussed, Artemis.fromMiddleDown(Artemis.charaktere.alaistar.positionStandard.x, Artemis.charaktere.alaistar.positionStandard.y, 150));
            await Artemis.ƒS.Character.hide(Artemis.charaktere.bronte);
            await Artemis.ƒS.update(0.4);
            await Artemis.ƒS.Character.show(Artemis.charaktere.maire, Artemis.charaktere.maire.pose.fear, Artemis.ƒS.positionPercent(20, Artemis.charaktere.maire.positionStandard.y));
            await Artemis.ƒS.Character.show(Artemis.charaktere.isaac, Artemis.charaktere.isaac.pose.cry, Artemis.ƒS.positionPercent(Artemis.charaktere.isaac.positionStandard.x, Artemis.charaktere.isaac.positionStandard.y));
            await Artemis.ƒS.update(1);
            await Artemis.ƒS.Speech.tell(Artemis.charaktere.maire, " Bronte was ist… Oh ");
            Artemis.ƒS.Sound.fade(Artemis.sound.final, 0, 4);
            Artemis.ƒS.Sound.play(Artemis.sound.finalGood, 0.8, true);
            await Artemis.ƒS.Speech.tell(Artemis.charaktere.maire, " Alaistar er liegt auf den Boden. Ist er bewusstlos? ");
            await Artemis.ƒS.Character.hide(Artemis.charaktere.maire);
            await Artemis.ƒS.Character.hide(Artemis.charaktere.isaac);
            await Artemis.ƒS.Character.show(Artemis.charaktere.bronte, Artemis.charaktere.bronte.pose.angry, Artemis.ƒS.positionPercent(Artemis.charaktere.bronte.positionMiddle.x, Artemis.charaktere.bronte.positionMiddle.y));
            await Artemis.ƒS.update(0.4);
            await Artemis.ƒS.Speech.tell(Artemis.charaktere.bronte, " Er hätte es besser wissen sollen. ");
            await Artemis.ƒS.Character.hide(Artemis.charaktere.bronte);
            await Artemis.ƒS.Character.show(Artemis.charaktere.odette, Artemis.charaktere.odette.pose.scream, Artemis.ƒS.positionPercent(75, Artemis.charaktere.odette.positionStandard.y));
            await Artemis.ƒS.Character.show(Artemis.charaktere.isaac, Artemis.charaktere.isaac.pose.cry, Artemis.ƒS.positionPercent(Artemis.charaktere.isaac.positionLeftMiddle.x, Artemis.charaktere.isaac.positionLeftMiddle.y));
            await Artemis.ƒS.update(0.4);
            await Artemis.ƒS.Speech.tell(Artemis.charaktere.isaac, " Ich war- ");
            await Artemis.ƒS.Speech.tell(Artemis.charaktere.isaac, " !!! ");
            await Artemis.ƒS.Character.hide(Artemis.charaktere.odette);
            await Artemis.ƒS.Character.hide(Artemis.charaktere.isaac);
            await Artemis.ƒS.Character.show(Artemis.charaktere.odette, Artemis.charaktere.odette.pose.gleefull, Artemis.ƒS.positionPercent(75, Artemis.charaktere.odette.positionStandard.y));
            await Artemis.ƒS.Character.show(Artemis.charaktere.isaac, Artemis.charaktere.isaac.pose.crying, Artemis.ƒS.positionPercent(Artemis.charaktere.isaac.positionLeftMiddle.x, Artemis.charaktere.isaac.positionLeftMiddle.y));
            await Artemis.ƒS.update(0.4);
            await Artemis.ƒS.Speech.tell(Artemis.charaktere.isaac, " Odette? ");
            await Artemis.ƒS.Character.hide(Artemis.charaktere.odette);
            await Artemis.ƒS.Character.hide(Artemis.charaktere.isaac);
            await Artemis.ƒS.Character.show(Artemis.charaktere.odette, Artemis.charaktere.odette.pose.happy, Artemis.ƒS.positionPercent(75, Artemis.charaktere.odette.positionStandard.y));
            await Artemis.ƒS.Character.show(Artemis.charaktere.isaac, Artemis.charaktere.isaac.pose.happy, Artemis.ƒS.positionPercent(Artemis.charaktere.isaac.positionLeftMiddle.x, Artemis.charaktere.isaac.positionLeftMiddle.y));
            await Artemis.ƒS.update(0.4);
            await Artemis.ƒS.Speech.tell(Artemis.charaktere.odette, " Isaac… ich… oh Götter. ");
            await Artemis.ƒS.Character.hide(Artemis.charaktere.odette);
            await Artemis.ƒS.Character.hide(Artemis.charaktere.isaac);
            await Artemis.ƒS.update(0.4);
            await Artemis.ƒS.Character.hide(Artemis.charaktere.maire);
            await Artemis.ƒS.Character.show(Artemis.charaktere.maire, Artemis.charaktere.maire.pose.fear, Artemis.ƒS.positionPercent(Artemis.charaktere.maire.positionStandard.x, Artemis.charaktere.maire.positionStandard.y));
            await Artemis.ƒS.Character.hide(Artemis.charaktere.bronte);
            await Artemis.ƒS.Character.show(Artemis.charaktere.bronte, Artemis.charaktere.bronte.pose.happy, Artemis.ƒS.positionPercent(Artemis.charaktere.bronte.positionStandard.x, Artemis.charaktere.bronte.positionStandard.y));
            await Artemis.ƒS.update(0.4);
            await Artemis.ƒS.Speech.tell(Artemis.charaktere.maire, " Ich verstehe nicht… Wie… ");
            await Artemis.ƒS.Character.hide(Artemis.charaktere.maire);
            await Artemis.ƒS.Character.show(Artemis.charaktere.maire, Artemis.charaktere.maire.pose.neutral, Artemis.ƒS.positionPercent(Artemis.charaktere.maire.positionStandard.x, Artemis.charaktere.maire.positionStandard.y));
            await Artemis.ƒS.Character.hide(Artemis.charaktere.bronte);
            await Artemis.ƒS.Character.show(Artemis.charaktere.bronte, Artemis.charaktere.bronte.pose.laugh, Artemis.ƒS.positionPercent(Artemis.charaktere.bronte.positionStandard.x, Artemis.charaktere.bronte.positionStandard.y));
            await Artemis.ƒS.update(0.4);
            await Artemis.ƒS.Speech.tell(Artemis.charaktere.bronte, " Ich erkläre dir gleich alles. Lassen wir den beiden etwas Zeit für sich. Und wir sollten ohnehin die Polizei rufen. ");
            if (!Artemis.dataForSave.gotTestament) {
                await Artemis.ƒS.Character.hide(Artemis.charaktere.bronte);
                await Artemis.ƒS.Character.show(Artemis.charaktere.bronte, Artemis.charaktere.bronte.pose.think, Artemis.ƒS.positionPercent(Artemis.charaktere.bronte.positionStandard.x, Artemis.charaktere.bronte.positionStandard.y));
                await Artemis.ƒS.update(0.4);
                await Artemis.ƒS.Speech.tell(Artemis.charaktere.bronte, "Oh und ich denke ich sollte mein Dietrichset hole, wir müssen einen Safe knacken. ");
                await Artemis.ƒS.Speech.tell(Artemis.charaktere.bronte, "Und wenn ich mich nicht ganz irre wird diese Wohnung dann an die jüngste Tochter gehen.");
            }
            else {
                await Artemis.ƒS.Character.hide(Artemis.charaktere.bronte);
                await Artemis.ƒS.Character.show(Artemis.charaktere.bronte, Artemis.charaktere.bronte.pose.think, Artemis.ƒS.positionPercent(Artemis.charaktere.bronte.positionStandard.x, Artemis.charaktere.bronte.positionStandard.y));
                await Artemis.ƒS.update(0.4);
                await Artemis.ƒS.Speech.tell(Artemis.charaktere.bronte, " Ich denke wir können das Haustelefon nutzen. ");
                await Artemis.ƒS.Speech.tell(Artemis.charaktere.bronte, " Die neue Inhaberhin wird wohl nichts dagegen habe. Schau- ");
                await Artemis.ƒS.Character.hide(Artemis.charaktere.bronte);
                await Artemis.ƒS.Character.show(Artemis.charaktere.bronte, Artemis.charaktere.bronte.pose.laugh, Artemis.ƒS.positionPercent(Artemis.charaktere.bronte.positionStandard.x, Artemis.charaktere.bronte.positionStandard.y));
                await Artemis.ƒS.update(0.4);
                await Artemis.ƒS.Speech.tell(Artemis.charaktere.bronte, " Ich habe es hier schwarz auf weiß. Das echte Testamant von Lady Blackburn. ");
                await Artemis.ƒS.Speech.tell(Artemis.charaktere.bronte, " Sie teilt ihr Geld mit all ihren Kindern, nicht nur Alaistar Blackburn. ");
                await Artemis.ƒS.Character.hide(Artemis.charaktere.bronte);
                await Artemis.ƒS.Character.show(Artemis.charaktere.bronte, Artemis.charaktere.bronte.pose.angry, Artemis.ƒS.positionPercent(Artemis.charaktere.bronte.positionStandard.x, Artemis.charaktere.bronte.positionStandard.y));
                await Artemis.ƒS.update(0.4);
                await Artemis.ƒS.Speech.tell(Artemis.charaktere.bronte, "Dass schien ihm gar nicht zu gefallen.");
            }
            await Artemis.ƒS.Character.hide(Artemis.charaktere.maire);
            await Artemis.ƒS.Character.show(Artemis.charaktere.maire, Artemis.charaktere.maire.pose.happy, Artemis.ƒS.positionPercent(Artemis.charaktere.maire.positionStandard.x, Artemis.charaktere.maire.positionStandard.y));
            await Artemis.ƒS.Character.hide(Artemis.charaktere.bronte);
            await Artemis.ƒS.Character.show(Artemis.charaktere.bronte, Artemis.charaktere.bronte.pose.happy, Artemis.ƒS.positionPercent(Artemis.charaktere.bronte.positionStandard.x, Artemis.charaktere.bronte.positionStandard.y));
            await Artemis.ƒS.update(0.4);
            await Artemis.ƒS.Speech.tell(Artemis.charaktere.maire, " Ich bin nur froh, dass es dir gut geht. Ich hatte kurz Angst- ");
            await Artemis.ƒS.Speech.tell(Artemis.charaktere.bronte, " Mir geht es gut und schau! ");
            await Artemis.ƒS.Character.hide(Artemis.charaktere.maire);
            await Artemis.ƒS.Character.show(Artemis.charaktere.maire, Artemis.charaktere.maire.pose.fear, Artemis.ƒS.positionPercent(Artemis.charaktere.maire.positionStandard.x, Artemis.charaktere.maire.positionStandard.y));
            await Artemis.ƒS.Character.hide(Artemis.charaktere.bronte);
            await Artemis.ƒS.Character.show(Artemis.charaktere.bronte, Artemis.charaktere.bronte.pose.laugh, Artemis.ƒS.positionPercent(Artemis.charaktere.bronte.positionStandard.x, Artemis.charaktere.bronte.positionStandard.y));
            await Artemis.ƒS.update(0.4);
            Artemis.ƒS.Sound.play(Artemis.sound.catMeow, 1);
            await Artemis.ƒS.Speech.tell("Artemis", " Miau ");
            await Artemis.ƒS.Character.hide(Artemis.charaktere.maire);
            await Artemis.ƒS.Character.show(Artemis.charaktere.maire, Artemis.charaktere.maire.pose.happy, Artemis.ƒS.positionPercent(Artemis.charaktere.maire.positionStandard.x, Artemis.charaktere.maire.positionStandard.y));
            await Artemis.ƒS.update(0.4);
            await Artemis.ƒS.Speech.tell(Artemis.charaktere.bronte, " Gerade rechtzeitig zurückgekommen.");
            Artemis.ƒS.Sound.fade(Artemis.sound.finalGood, 0, 4);
            if (Artemis.dataForSave.pointAngryMaire <= 1) {
                await Artemis.ƒS.Character.hide(Artemis.charaktere.maire);
                await Artemis.ƒS.Character.hide(Artemis.charaktere.bronte);
                await Artemis.ƒS.update(4);
                return "ExtraSceneBronteMaire";
            }
            await Artemis.ƒS.Character.hide(Artemis.charaktere.maire);
            await Artemis.ƒS.Character.hide(Artemis.charaktere.bronte);
            await Artemis.ƒS.update(4);
            await Artemis.ƒS.Location.show(Artemis.location.black);
            await Artemis.ƒS.update(4);
            return "EndingOneAllSurvive";
        }
        else if (userchooseFinalChoice == chooseFinalChoice.attack) {
            await Artemis.ƒS.Character.show(Artemis.charaktere.alaistar, Artemis.charaktere.alaistar.pose.evil, Artemis.ƒS.positionPercent(Artemis.charaktere.alaistar.positionMiddle.x, Artemis.charaktere.alaistar.positionMiddle.y));
            await Artemis.ƒS.Character.show(Artemis.charaktere.bronte, Artemis.charaktere.bronte.pose.sad, Artemis.ƒS.positionPercent(Artemis.charaktere.bronte.positionStandard.x, Artemis.charaktere.bronte.positionStandard.y));
            await Artemis.ƒS.update(0.4);
            await Artemis.ƒS.Speech.tell(Artemis.charaktere.bronte, "Nein!");
            await Artemis.ƒS.Character.hide(Artemis.charaktere.alaistar);
            await Artemis.ƒS.Character.show(Artemis.charaktere.alaistar, Artemis.charaktere.alaistar.pose.angry, Artemis.ƒS.positionPercent(Artemis.charaktere.alaistar.positionMiddle.x, Artemis.charaktere.alaistar.positionMiddle.y));
            await Artemis.ƒS.update(0.4);
            await Artemis.ƒS.Speech.tell(Artemis.charaktere.alaistar, " BLEIB WEG!  ");
            Artemis.ƒS.Sound.play(Artemis.sound.gunShoot, 1, false);
            await Artemis.ƒS.Character.hide(Artemis.charaktere.alaistar);
            await Artemis.ƒS.Character.show(Artemis.charaktere.alaistar, Artemis.charaktere.alaistar.pose.emotionalDrained, Artemis.ƒS.positionPercent(Artemis.charaktere.alaistar.positionMiddle.x, Artemis.charaktere.alaistar.positionMiddle.y));
            await Artemis.ƒS.update(0.4);
            await Artemis.ƒS.Character.hide(Artemis.charaktere.bronte);
            await Artemis.ƒS.Character.show(Artemis.charaktere.bronte, Artemis.charaktere.bronte.pose.shout, Artemis.ƒS.positionPercent(Artemis.charaktere.bronte.positionStandard.x, Artemis.charaktere.bronte.positionStandard.y));
            await Artemis.ƒS.update(0.4);
            await Artemis.ƒS.Speech.tell(Artemis.charaktere.bronte, " AH! ");
            await Artemis.ƒS.Character.hide(Artemis.charaktere.bronte);
            await Artemis.ƒS.update(4);
            await Artemis.ƒS.Character.hide(Artemis.charaktere.alaistar);
            await Artemis.ƒS.Character.show(Artemis.charaktere.maire, Artemis.charaktere.maire.pose.shooked, Artemis.ƒS.positionPercent(20, Artemis.charaktere.maire.positionStandard.y));
            await Artemis.ƒS.Character.show(Artemis.charaktere.isaac, Artemis.charaktere.isaac.pose.cry, Artemis.ƒS.positionPercent(Artemis.charaktere.isaac.positionStandard.x, Artemis.charaktere.isaac.positionStandard.y));
            await Artemis.ƒS.update(1);
            await Artemis.ƒS.Speech.tell(Artemis.charaktere.maire, " Bronte?! NEIN! ");
            await Artemis.ƒS.Character.hide(Artemis.charaktere.maire);
            await Artemis.ƒS.Character.hide(Artemis.charaktere.isaac);
            await Artemis.ƒS.Character.show(Artemis.charaktere.isaac, Artemis.charaktere.isaac.pose.sad, Artemis.ƒS.positionPercent(Artemis.charaktere.isaac.positionStandard.x, Artemis.charaktere.isaac.positionStandard.y));
            await Artemis.ƒS.Character.show(Artemis.charaktere.alaistar, Artemis.charaktere.alaistar.pose.confussed, Artemis.ƒS.positionPercent(15, Artemis.charaktere.alaistar.positionMiddle.y));
            await Artemis.ƒS.update(0.4);
            await Artemis.ƒS.Speech.tell(Artemis.charaktere.alaistar, " Wer.. Arg! Nein… sie hätte weg bleiben sollen! ");
            await Artemis.ƒS.Character.hide(Artemis.charaktere.alaistar);
            await Artemis.ƒS.update(1);
            await Artemis.ƒS.Speech.tell(Artemis.charaktere.isaac, " Was ist… Oh Götter. ");
            await Artemis.ƒS.Speech.tell(Artemis.charaktere.isaac, " Alaistar! Bleib!");
            await Artemis.ƒS.Character.hide(Artemis.charaktere.isaac);
            await Artemis.ƒS.update(1);
            await Artemis.ƒS.Character.show(Artemis.charaktere.maire, Artemis.charaktere.maire.pose.shooked, Artemis.ƒS.positionPercent(20, Artemis.charaktere.maire.positionStandard.y));
            await Artemis.ƒS.Character.show(Artemis.charaktere.odette, Artemis.charaktere.odette.pose.scream, Artemis.ƒS.positionPercent(85, Artemis.charaktere.odette.positionStandard.y));
            await Artemis.ƒS.update(0.4);
            await Artemis.ƒS.Speech.tell(Artemis.charaktere.odette, " Oh Götter. Miss Bronte es tut mir so Leid… ich. ");
            Artemis.ƒS.Sound.fade(Artemis.sound.final, 0, 4);
            Artemis.ƒS.Sound.play(Artemis.sound.finalSad, 0.8, true);
            await Artemis.ƒS.Character.hide(Artemis.charaktere.odette);
            await Artemis.ƒS.Character.show(Artemis.charaktere.odette, Artemis.charaktere.odette.pose.scream, Artemis.ƒS.positionPercent(85, Artemis.charaktere.odette.positionStandard.y));
            await Artemis.ƒS.update(0.4);
            await Artemis.ƒS.Speech.tell(Artemis.charaktere.bronte, " Ist… okay… ");
            await Artemis.ƒS.Character.hide(Artemis.charaktere.maire);
            await Artemis.ƒS.Character.show(Artemis.charaktere.maire, Artemis.charaktere.maire.pose.cry, Artemis.ƒS.positionPercent(20, Artemis.charaktere.maire.positionStandard.y));
            await Artemis.ƒS.update(0.4);
            await Artemis.ƒS.Speech.tell(Artemis.charaktere.maire, " Bitte nicht. Wir brauchen einen Arzt! Sofort! ");
            await Artemis.ƒS.Character.hide(Artemis.charaktere.odette);
            await Artemis.ƒS.Character.show(Artemis.charaktere.odette, Artemis.charaktere.odette.pose.sad, Artemis.ƒS.positionPercent(85, Artemis.charaktere.odette.positionStandard.y));
            await Artemis.ƒS.update(0.4);
            await Artemis.ƒS.Speech.tell(Artemis.charaktere.odette, " Ich… Ich versuche jemand zu holen, aber… Hier ist so viel Blut. ");
            await Artemis.ƒS.Character.hide(Artemis.charaktere.maire);
            await Artemis.ƒS.Character.show(Artemis.charaktere.maire, Artemis.charaktere.maire.pose.sad, Artemis.ƒS.positionPercent(20, Artemis.charaktere.maire.positionStandard.y));
            await Artemis.ƒS.update(0.4);
            await Artemis.ƒS.Speech.tell(Artemis.charaktere.maire, " Nein… beeile dich! Geh schon!");
            await Artemis.ƒS.Character.hide(Artemis.charaktere.maire);
            await Artemis.ƒS.Character.show(Artemis.charaktere.maire, Artemis.charaktere.maire.pose.fear, Artemis.ƒS.positionPercent(20, Artemis.charaktere.maire.positionStandard.y));
            await Artemis.ƒS.update(0.4);
            document.getElementById('speechContent').classList.add('textEffectBig');
            await Artemis.ƒS.Speech.tell(Artemis.charaktere.maire, "GEH!");
            await Artemis.ƒS.Character.hide(Artemis.charaktere.odette);
            await Artemis.ƒS.Character.show(Artemis.charaktere.odette, Artemis.charaktere.odette.pose.scream, Artemis.ƒS.positionPercent(85, Artemis.charaktere.odette.positionStandard.y));
            await Artemis.ƒS.Character.hide(Artemis.charaktere.maire);
            await Artemis.ƒS.Character.show(Artemis.charaktere.maire, Artemis.charaktere.maire.pose.shooked, Artemis.ƒS.positionPercent(20, Artemis.charaktere.maire.positionStandard.y));
            await Artemis.ƒS.update(0.4);
            await Artemis.ƒS.Character.hide(Artemis.charaktere.odette);
            await Artemis.ƒS.update(2);
            document.getElementById('speechContent').classList.remove('textEffectBig');
            await Artemis.ƒS.Speech.tell(Artemis.charaktere.bronte, " Maire… *hust*… Ich… liebe… dich… ");
            await Artemis.ƒS.Character.hide(Artemis.charaktere.maire);
            await Artemis.ƒS.Character.show(Artemis.charaktere.maire, Artemis.charaktere.maire.pose.cry, Artemis.ƒS.positionPercent(20, Artemis.charaktere.maire.positionStandard.y));
            await Artemis.ƒS.update(0.4);
            await Artemis.ƒS.Speech.tell(Artemis.charaktere.maire, " Ich weiß. Ich weiß doch Bronte. Ich liebe dich auch. Bitte halte durch!");
            Artemis.ƒS.Sound.fade(Artemis.sound.finalSad, 0, 4);
            await Artemis.ƒS.Character.hide(Artemis.charaktere.maire);
            await Artemis.ƒS.Location.show(Artemis.location.black);
            await Artemis.ƒS.update(3);
            return "EndingTwoBronteDead";
        }
        else if (userchooseFinalChoice == chooseFinalChoice.nothing && Artemis.dataForSave.tookGun) {
            await Artemis.ƒS.Character.show(Artemis.charaktere.alaistar, Artemis.charaktere.alaistar.pose.evil, Artemis.ƒS.positionPercent(Artemis.charaktere.alaistar.positionMiddle.x, Artemis.charaktere.alaistar.positionMiddle.y));
            await Artemis.ƒS.Character.show(Artemis.charaktere.bronte, Artemis.charaktere.bronte.pose.shout, Artemis.ƒS.positionPercent(Artemis.charaktere.bronte.positionStandard.x, Artemis.charaktere.bronte.positionStandard.y));
            await Artemis.ƒS.Character.show(Artemis.charaktere.odette, Artemis.charaktere.odette.pose.scream, Artemis.ƒS.positionPercent(Artemis.charaktere.odette.positionStandard.x, Artemis.charaktere.odette.positionStandard.y));
            await Artemis.ƒS.update(0.4);
            await Artemis.ƒS.Speech.tell(Artemis.charaktere.alaistar, " Auf Wiedersehen ");
            await Artemis.ƒS.Speech.tell(Artemis.charaktere.odette, " AH! ");
            await Artemis.ƒS.Character.hide(Artemis.charaktere.alaistar);
            await Artemis.ƒS.Character.show(Artemis.charaktere.alaistar, Artemis.charaktere.alaistar.pose.confussed, Artemis.ƒS.positionPercent(Artemis.charaktere.alaistar.positionMiddle.x, Artemis.charaktere.alaistar.positionMiddle.y));
            await Artemis.ƒS.update(0.4);
            await Artemis.ƒS.Speech.tell(Artemis.charaktere.alaistar, " Was… wo… ");
            await Artemis.ƒS.Character.hide(Artemis.charaktere.bronte);
            await Artemis.ƒS.Character.show(Artemis.charaktere.bronte, Artemis.charaktere.bronte.pose.happy, Artemis.ƒS.positionPercent(Artemis.charaktere.bronte.positionStandard.x, Artemis.charaktere.bronte.positionStandard.y));
            await Artemis.ƒS.update(0.4);
            await Artemis.ƒS.Speech.tell(Artemis.charaktere.bronte, " Suchen sie dies? Ein sehr schöner Revolver. Auch wenn ich die Kugeln aus Sicherheit entfern habe. ");
            await Artemis.ƒS.Character.hide(Artemis.charaktere.alaistar);
            await Artemis.ƒS.Character.show(Artemis.charaktere.alaistar, Artemis.charaktere.alaistar.pose.angry, Artemis.ƒS.positionPercent(Artemis.charaktere.alaistar.positionMiddle.x, Artemis.charaktere.alaistar.positionMiddle.y));
            await Artemis.ƒS.update(0.4);
            await Artemis.ƒS.Speech.tell(Artemis.charaktere.alaistar, " Nein! ");
            Artemis.ƒS.Sound.fade(Artemis.sound.final, 0, 2);
            Artemis.ƒS.Sound.play(Artemis.sound.finalGood, 1);
            await Artemis.ƒS.Character.hide(Artemis.charaktere.odette);
            await Artemis.ƒS.Character.hide(Artemis.charaktere.bronte);
            await Artemis.ƒS.Character.hide(Artemis.charaktere.alaistar);
            await Artemis.ƒS.update(0.4);
            await Artemis.ƒS.Character.show(Artemis.charaktere.maire, Artemis.charaktere.maire.pose.fear, Artemis.ƒS.positionPercent(20, Artemis.charaktere.maire.positionStandard.y));
            await Artemis.ƒS.Character.show(Artemis.charaktere.isaac, Artemis.charaktere.isaac.pose.neutral, Artemis.ƒS.positionPercent(Artemis.charaktere.isaac.positionStandard.x, Artemis.charaktere.isaac.positionStandard.y));
            await Artemis.ƒS.update(1);
            await Artemis.ƒS.Speech.tell(Artemis.charaktere.maire, " Bronte!? Was ist los?");
            await Artemis.ƒS.Character.hide(Artemis.charaktere.isaac);
            await Artemis.ƒS.Character.show(Artemis.charaktere.isaac, Artemis.charaktere.isaac.pose.cry, Artemis.ƒS.positionPercent(Artemis.charaktere.isaac.positionStandard.x, Artemis.charaktere.isaac.positionStandard.y));
            await Artemis.ƒS.update(0.4);
            await Artemis.ƒS.Speech.tell(Artemis.charaktere.isaac, " !!! ");
            await Artemis.ƒS.Character.hide(Artemis.charaktere.isaac);
            await Artemis.ƒS.Character.show(Artemis.charaktere.isaac, Artemis.charaktere.isaac.pose.crying, Artemis.ƒS.positionPercent(Artemis.charaktere.isaac.positionStandard.x, Artemis.charaktere.isaac.positionStandard.y));
            await Artemis.ƒS.update(0.4);
            await Artemis.ƒS.Speech.tell(Artemis.charaktere.isaac, " Wie… Oh Götter. ");
            await Artemis.ƒS.Character.hide(Artemis.charaktere.isaac);
            await Artemis.ƒS.Character.hide(Artemis.charaktere.maire);
            await Artemis.ƒS.Character.show(Artemis.charaktere.odette, Artemis.charaktere.odette.pose.gleefull, Artemis.ƒS.positionPercent(Artemis.charaktere.odette.positionMiddle.x, Artemis.charaktere.odette.positionStandard.y));
            await Artemis.ƒS.update(0.4);
            await Artemis.ƒS.Speech.tell(Artemis.charaktere.odette, " Isaac!");
            await Artemis.ƒS.Character.hide(Artemis.charaktere.odette);
            await Artemis.ƒS.update(1);
            await Artemis.ƒS.Character.show(Artemis.charaktere.bronte, Artemis.charaktere.bronte.pose.happy, Artemis.ƒS.positionPercent(Artemis.charaktere.bronte.positionStandard.x, Artemis.charaktere.bronte.positionStandard.y));
            await Artemis.ƒS.Character.show(Artemis.charaktere.maire, Artemis.charaktere.maire.pose.neutral, Artemis.ƒS.positionPercent(Artemis.charaktere.maire.positionStandard.x, Artemis.charaktere.maire.positionStandard.y));
            await Artemis.ƒS.update(0.4);
            await Artemis.ƒS.Speech.tell(Artemis.charaktere.bronte, " Maire, wenn du so lieb wärst die Polizei zu rufen. Ich denke sie werden eine schöne neue Wohnung für Mr. Blackburn besorgen. ");
            if (!Artemis.dataForSave.gotTestament) {
                await Artemis.ƒS.Character.hide(Artemis.charaktere.bronte);
                await Artemis.ƒS.Character.show(Artemis.charaktere.bronte, Artemis.charaktere.bronte.pose.laugh, Artemis.ƒS.positionPercent(Artemis.charaktere.bronte.positionStandard.x, Artemis.charaktere.bronte.positionStandard.y));
                await Artemis.ƒS.update(0.4);
                await Artemis.ƒS.Speech.tell(Artemis.charaktere.bronte, "Oh und ich denke wenn ich mein Dietrichset hole, wird auch der Safe nicht allzu lange verschlossen bleiben. ");
                await Artemis.ƒS.Character.hide(Artemis.charaktere.bronte);
                await Artemis.ƒS.Character.show(Artemis.charaktere.bronte, Artemis.charaktere.bronte.pose.think, Artemis.ƒS.positionPercent(Artemis.charaktere.bronte.positionStandard.x, Artemis.charaktere.bronte.positionStandard.y));
                await Artemis.ƒS.update(0.4);
                await Artemis.ƒS.Speech.tell(Artemis.charaktere.bronte, "Und wenn ich mich nicht ganz irre wird diese Wohnung dann an die jüngste Tochter gehen.");
            }
            else {
                await Artemis.ƒS.Character.hide(Artemis.charaktere.bronte);
                await Artemis.ƒS.Character.show(Artemis.charaktere.bronte, Artemis.charaktere.bronte.pose.happy, Artemis.ƒS.positionPercent(Artemis.charaktere.bronte.positionStandard.x, Artemis.charaktere.bronte.positionStandard.y));
                await Artemis.ƒS.update(0.4);
                await Artemis.ƒS.Speech.tell(Artemis.charaktere.bronte, " Immerhin wird diese Wohnung nun wohl an die jüngste Tochter gehen. ");
                await Artemis.ƒS.Speech.tell(Artemis.charaktere.bronte, " Ich habe es hier schwarz auf weiß. Das echte Testamant von Lady Blackburn. ");
                await Artemis.ƒS.Speech.tell(Artemis.charaktere.bronte, "Sie teilt ihr Geld mit all ihren Kindern, nicht nur Alaistar Blackburn. ");
            }
            await Artemis.ƒS.Character.hide(Artemis.charaktere.maire);
            await Artemis.ƒS.Character.show(Artemis.charaktere.maire, Artemis.charaktere.maire.pose.embarrassed, Artemis.ƒS.positionPercent(Artemis.charaktere.maire.positionStandard.x, Artemis.charaktere.maire.positionStandard.y));
            await Artemis.ƒS.update(0.4);
            await Artemis.ƒS.Speech.tell(Artemis.charaktere.maire, " Ich… oh...klar, die Polizei… ");
            await Artemis.ƒS.Character.hide(Artemis.charaktere.maire);
            await Artemis.ƒS.Character.show(Artemis.charaktere.maire, Artemis.charaktere.maire.pose.happy, Artemis.ƒS.positionPercent(Artemis.charaktere.maire.positionStandard.x, Artemis.charaktere.maire.positionStandard.y));
            await Artemis.ƒS.update(0.4);
            await Artemis.ƒS.Speech.tell(Artemis.charaktere.maire, " Was für ein Abend. ");
            await Artemis.ƒS.Character.hide(Artemis.charaktere.maire);
            await Artemis.ƒS.Character.show(Artemis.charaktere.maire, Artemis.charaktere.maire.pose.laugh, Artemis.ƒS.positionPercent(Artemis.charaktere.maire.positionStandard.x, Artemis.charaktere.maire.positionStandard.y));
            await Artemis.ƒS.update(0.4);
            await Artemis.ƒS.Speech.tell(Artemis.charaktere.maire, " Oh! Haha ");
            await Artemis.ƒS.Character.hide(Artemis.charaktere.bronte);
            await Artemis.ƒS.Character.show(Artemis.charaktere.bronte, Artemis.charaktere.bronte.pose.think, Artemis.ƒS.positionPercent(Artemis.charaktere.bronte.positionStandard.x, Artemis.charaktere.bronte.positionStandard.y));
            await Artemis.ƒS.update(0.4);
            await Artemis.ƒS.Speech.tell(Artemis.charaktere.bronte, " Maire? ");
            await Artemis.ƒS.Character.hide(Artemis.charaktere.maire);
            await Artemis.ƒS.Character.show(Artemis.charaktere.maire, Artemis.charaktere.maire.pose.happy, Artemis.ƒS.positionPercent(Artemis.charaktere.maire.positionStandard.x, Artemis.charaktere.maire.positionStandard.y));
            await Artemis.ƒS.update(0.4);
            await Artemis.ƒS.Speech.tell(Artemis.charaktere.maire, " Schau wenn ich gefunden habe! ");
            await Artemis.ƒS.Character.hide(Artemis.charaktere.bronte);
            await Artemis.ƒS.Character.show(Artemis.charaktere.bronte, Artemis.charaktere.bronte.pose.laugh, Artemis.ƒS.positionPercent(Artemis.charaktere.bronte.positionStandard.x, Artemis.charaktere.bronte.positionStandard.y));
            await Artemis.ƒS.update(0.4);
            Artemis.ƒS.Sound.play(Artemis.sound.catMeow, 1);
            await Artemis.ƒS.Speech.tell("Artemis", " Miau. ");
            await Artemis.ƒS.Speech.tell(Artemis.charaktere.bronte, " Damit hätte sich wohl auch das letzte Mysterium gelöst.");
            Artemis.ƒS.Sound.fade(Artemis.sound.finalGood, 0, 1, true);
            await Artemis.ƒS.Character.hide(Artemis.charaktere.maire);
            await Artemis.ƒS.Character.hide(Artemis.charaktere.bronte);
            await Artemis.ƒS.Location.show(Artemis.location.black);
            await Artemis.ƒS.update(3);
            if (Artemis.dataForSave.pointAngryMaire <= 1) {
                return "ExtraSceneBronteMaire";
            }
            return "EndingOneAllSurvive";
        }
        else if (userchooseFinalChoice == chooseFinalChoice.nothing) {
            await Artemis.ƒS.Character.show(Artemis.charaktere.alaistar, Artemis.charaktere.alaistar.pose.evil, Artemis.ƒS.positionPercent(Artemis.charaktere.alaistar.positionMiddle.x, Artemis.charaktere.alaistar.positionMiddle.y));
            await Artemis.ƒS.Character.show(Artemis.charaktere.bronte, Artemis.charaktere.bronte.pose.shout, Artemis.ƒS.positionPercent(Artemis.charaktere.bronte.positionStandard.x, Artemis.charaktere.bronte.positionStandard.y));
            await Artemis.ƒS.Character.show(Artemis.charaktere.odette, Artemis.charaktere.odette.pose.scream, Artemis.ƒS.positionPercent(Artemis.charaktere.odette.positionStandard.x, Artemis.charaktere.odette.positionStandard.y));
            await Artemis.ƒS.update(0.4);
            Artemis.ƒS.Sound.play(Artemis.sound.gunShoot, 1, false);
            await Artemis.ƒS.Speech.tell(Artemis.charaktere.odette, " AH!  ");
            await Artemis.ƒS.Speech.tell(Artemis.charaktere.odette, " a… oh… ");
            await Artemis.ƒS.Character.hide(Artemis.charaktere.odette);
            await Artemis.ƒS.update(4);
            await Artemis.ƒS.Character.hide(Artemis.charaktere.bronte);
            await Artemis.ƒS.Character.show(Artemis.charaktere.bronte, Artemis.charaktere.bronte.pose.sad, Artemis.ƒS.positionPercent(Artemis.charaktere.bronte.positionStandard.x, Artemis.charaktere.bronte.positionStandard.y));
            await Artemis.ƒS.update(0.4);
            await Artemis.ƒS.Speech.tell(Artemis.charaktere.bronte, " NEIN! ");
            await Artemis.ƒS.Character.hide(Artemis.charaktere.bronte);
            await Artemis.ƒS.Character.hide(Artemis.charaktere.alaistar);
            await Artemis.ƒS.update(0.4);
            await Artemis.ƒS.Character.show(Artemis.charaktere.maire, Artemis.charaktere.maire.pose.fear, Artemis.ƒS.positionPercent(20, Artemis.charaktere.maire.positionStandard.y));
            await Artemis.ƒS.Character.show(Artemis.charaktere.isaac, Artemis.charaktere.isaac.pose.neutral, Artemis.ƒS.positionPercent(Artemis.charaktere.isaac.positionStandard.x, Artemis.charaktere.isaac.positionStandard.y));
            await Artemis.ƒS.update(1);
            await Artemis.ƒS.Character.hide(Artemis.charaktere.maire);
            await Artemis.ƒS.Character.show(Artemis.charaktere.maire, Artemis.charaktere.maire.pose.shooked, Artemis.ƒS.positionPercent(20, Artemis.charaktere.maire.positionStandard.y));
            await Artemis.ƒS.update(0.4);
            await Artemis.ƒS.Speech.tell(Artemis.charaktere.maire, " Bronte! Was wo- Wer? ");
            await Artemis.ƒS.Character.hide(Artemis.charaktere.isaac);
            await Artemis.ƒS.Character.show(Artemis.charaktere.isaac, Artemis.charaktere.isaac.pose.cry, Artemis.ƒS.positionPercent(Artemis.charaktere.isaac.positionStandard.x, Artemis.charaktere.isaac.positionStandard.y));
            await Artemis.ƒS.update(0.4);
            await Artemis.ƒS.Speech.tell(Artemis.charaktere.isaac, " !!! ");
            await Artemis.ƒS.Speech.tell(Artemis.charaktere.isaac, " NEIN! ");
            await Artemis.ƒS.Character.hide(Artemis.charaktere.isaac);
            await Artemis.ƒS.Character.show(Artemis.charaktere.isaac, Artemis.charaktere.isaac.pose.crying, Artemis.ƒS.positionPercent(Artemis.charaktere.isaac.positionStandard.x, Artemis.charaktere.isaac.positionStandard.y));
            await Artemis.ƒS.update(0.4);
            await Artemis.ƒS.Speech.tell(Artemis.charaktere.isaac, " ODETTE! Wie nein… ");
            await Artemis.ƒS.Speech.tell(Artemis.charaktere.isaac, " Liebste… ");
            await Artemis.ƒS.Speech.tell(Artemis.charaktere.odette, " Isaac… Es… ");
            await Artemis.ƒS.Speech.tell(Artemis.charaktere.odette, " Tut… Leid… ");
            await Artemis.ƒS.Character.hide(Artemis.charaktere.isaac);
            await Artemis.ƒS.Character.show(Artemis.charaktere.isaac, Artemis.charaktere.isaac.pose.cry, Artemis.ƒS.positionPercent(Artemis.charaktere.isaac.positionStandard.x, Artemis.charaktere.isaac.positionStandard.y));
            await Artemis.ƒS.update(0.4);
            await Artemis.ƒS.Speech.tell(Artemis.charaktere.isaac, " Nein sprich nicht… ich… ");
            await Artemis.ƒS.Speech.tell(Artemis.charaktere.isaac, " Nein… bitte bleib ");
            await Artemis.ƒS.Character.hide(Artemis.charaktere.isaac);
            await Artemis.ƒS.Character.show(Artemis.charaktere.isaac, Artemis.charaktere.isaac.pose.crying, Artemis.ƒS.positionPercent(Artemis.charaktere.isaac.positionStandard.x, Artemis.charaktere.isaac.positionStandard.y));
            await Artemis.ƒS.update(0.4);
            await Artemis.ƒS.Speech.tell(Artemis.charaktere.isaac, " Verlass mich nicht erneut! ");
            await Artemis.ƒS.Speech.tell(Artemis.charaktere.isaac, " Nein… bitte…. Bitte… ");
            await Artemis.ƒS.Character.hide(Artemis.charaktere.maire);
            await Artemis.ƒS.Character.show(Artemis.charaktere.maire, Artemis.charaktere.maire.pose.cry, Artemis.ƒS.positionPercent(20, Artemis.charaktere.maire.positionStandard.y));
            await Artemis.ƒS.update(0.4);
            await Artemis.ƒS.Speech.tell(Artemis.charaktere.maire, " Wir brauchen einen Arzt! ");
            await Artemis.ƒS.Character.hide(Artemis.charaktere.maire);
            await Artemis.ƒS.Character.hide(Artemis.charaktere.isaac);
            await Artemis.ƒS.update(0.4);
            await Artemis.ƒS.Character.show(Artemis.charaktere.bronte, Artemis.charaktere.bronte.pose.sad, Artemis.ƒS.positionPercent(70, Artemis.charaktere.bronte.positionStandard.y));
            await Artemis.ƒS.update(0.4);
            await Artemis.ƒS.Speech.tell(Artemis.charaktere.bronte, " Ja… ich… ");
            await Artemis.ƒS.Character.show(Artemis.charaktere.alaistar, Artemis.charaktere.alaistar.pose.evil, Artemis.ƒS.positionPercent(15, Artemis.charaktere.alaistar.positionMiddle.y));
            await Artemis.ƒS.update(2);
            await Artemis.ƒS.Speech.tell(Artemis.charaktere.alaistar, " Wir bleiben jetzt alle ganz ruhig. ");
            //todo: error? 
            await Artemis.ƒS.Character.show(Artemis.charaktere.isaac, Artemis.charaktere.isaac.pose.crying, Artemis.ƒS.positionPercent(Artemis.charaktere.isaac.positionStandard.x, Artemis.charaktere.isaac.positionStandard.y));
            await Artemis.ƒS.Character.show(Artemis.charaktere.maire, Artemis.charaktere.maire.pose.smallHorror, Artemis.ƒS.positionPercent(85, 105));
            await Artemis.ƒS.update(0.4);
            await Artemis.ƒS.Speech.tell(Artemis.charaktere.maire, " Oh Götter… er hat eine Waffe! ");
            if (Artemis.dataForSave.gotTestament) {
                await Artemis.ƒS.Speech.tell(Artemis.charaktere.alaistar, " Miss Bronte geben sie mir das Testament. Jetzt! ");
                let userchooseFinalChoice = await Artemis.ƒS.Menu.getInput(chooseIfGiveTestament, "basicChoice");
                switch (userchooseFinalChoice) {
                    case chooseIfGiveTestament.yes:
                        await Artemis.ƒS.Character.hide(Artemis.charaktere.bronte);
                        await Artemis.ƒS.Character.show(Artemis.charaktere.bronte, Artemis.charaktere.bronte.pose.shout, Artemis.ƒS.positionPercent(70, Artemis.charaktere.bronte.positionStandard.y));
                        await Artemis.ƒS.update(0.4);
                        await Artemis.ƒS.Speech.tell(Artemis.charaktere.bronte, " Okay… Wir gehen. Aber verletzen Sie niemanden. ");
                        await Artemis.ƒS.Speech.tell(Artemis.charaktere.alaistar, " Nicht wenn sie alle Schweigen. ");
                        await Artemis.ƒS.Speech.tell(Artemis.charaktere.maire, " Ich… ich verstehe nicht… ");
                        await Artemis.ƒS.Character.hide(Artemis.charaktere.isaac);
                        await Artemis.ƒS.Character.show(Artemis.charaktere.isaac, Artemis.charaktere.isaac.pose.cry, Artemis.ƒS.positionPercent(Artemis.charaktere.isaac.positionStandard.x, Artemis.charaktere.isaac.positionStandard.y));
                        await Artemis.ƒS.update(0.4);
                        await Artemis.ƒS.Speech.tell(Artemis.charaktere.isaac, " Odette… ich kann sie nicht… nicht hierlassen! ");
                        await Artemis.ƒS.Character.hide(Artemis.charaktere.bronte);
                        await Artemis.ƒS.Character.show(Artemis.charaktere.bronte, Artemis.charaktere.bronte.pose.sad, Artemis.ƒS.positionPercent(70, Artemis.charaktere.bronte.positionStandard.y));
                        await Artemis.ƒS.update(0.4);
                        await Artemis.ƒS.Speech.tell(Artemis.charaktere.bronte, " Bitte Maire, Isaac. Wir sollten gehen.");
                        await Artemis.ƒS.Character.hide(Artemis.charaktere.bronte);
                        await Artemis.ƒS.Character.hide(Artemis.charaktere.isaac);
                        await Artemis.ƒS.Character.hide(Artemis.charaktere.maire);
                        await Artemis.ƒS.update(1);
                        await Artemis.ƒS.Character.hide(Artemis.charaktere.alaistar);
                        await Artemis.ƒS.Sound.fade(Artemis.sound.final, 0, 1);
                        return "EndingThreeOdetteDead";
                    case chooseIfGiveTestament.no:
                        Artemis.ƒS.Sound.fade(Artemis.sound.final, 0, 2);
                        await Artemis.ƒS.Progress.delay(0.8);
                        Artemis.ƒS.Sound.play(Artemis.sound.finalSad, 0.8);
                        await Artemis.ƒS.Character.hide(Artemis.charaktere.bronte);
                        await Artemis.ƒS.Character.show(Artemis.charaktere.bronte, Artemis.charaktere.bronte.pose.angry, Artemis.ƒS.positionPercent(70, Artemis.charaktere.bronte.positionStandard.y));
                        await Artemis.ƒS.update(0.4);
                        await Artemis.ƒS.Speech.tell(Artemis.charaktere.bronte, "Nein!");
                        await Artemis.ƒS.Speech.tell(Artemis.charaktere.alaistar, "Miss Bronte! Tun Sie keine Dummheiten.");
                        await Artemis.ƒS.Character.hide(Artemis.charaktere.bronte);
                        await Artemis.ƒS.Character.show(Artemis.charaktere.bronte, Artemis.charaktere.bronte.pose.shout, Artemis.ƒS.positionPercent(70, Artemis.charaktere.bronte.positionStandard.y));
                        await Artemis.ƒS.update(0.4);
                        await Artemis.ƒS.Speech.tell(Artemis.charaktere.bronte, " Ich werde Sie hiermit nicht durchkommen lassen! Ich-");
                        await Artemis.ƒS.Character.hide(Artemis.charaktere.bronte);
                        await Artemis.ƒS.Character.hide(Artemis.charaktere.maire);
                        await Artemis.ƒS.Character.hide(Artemis.charaktere.isaac);
                        await Artemis.ƒS.Character.hide(Artemis.charaktere.alaistar);
                        await Artemis.ƒS.Location.show(Artemis.location.black);
                        await Artemis.ƒS.update(1);
                        await Artemis.ƒS.Sound.play(Artemis.sound.gunShoot, 1);
                        await Artemis.ƒS.Progress.delay(0.5);
                        await Artemis.ƒS.Sound.play(Artemis.sound.gunShoot, 1);
                        await Artemis.ƒS.Progress.delay(0.5);
                        await Artemis.ƒS.Sound.play(Artemis.sound.gunShoot, 1);
                        Artemis.ƒS.Sound.fade(Artemis.sound.finalSad, 1, 2);
                        await Artemis.ƒS.Progress.delay(7);
                        return "EndScreen";
                }
            }
            else {
                Artemis.ƒS.Sound.fade(Artemis.sound.final, 0, 2);
                await Artemis.ƒS.Progress.delay(0.8);
                Artemis.ƒS.Sound.play(Artemis.sound.finalSad, 0.8);
                await Artemis.ƒS.Speech.tell(Artemis.charaktere.alaistar, " Es tut mir sehr Leid, aber ich muss meine Familie schützen. ");
                await Artemis.ƒS.Speech.tell(Artemis.charaktere.bronte, " Mr. Blackburn, tun sie nichts-");
                await Artemis.ƒS.Speech.hide();
                await Artemis.ƒS.Character.hide(Artemis.charaktere.bronte);
                await Artemis.ƒS.Character.hide(Artemis.charaktere.maire);
                await Artemis.ƒS.Character.hide(Artemis.charaktere.isaac);
                await Artemis.ƒS.Character.hide(Artemis.charaktere.alaistar);
                await Artemis.ƒS.Location.show(Artemis.location.black);
                await Artemis.ƒS.update(1);
                await Artemis.ƒS.Sound.play(Artemis.sound.gunShoot, 1);
                await Artemis.ƒS.Progress.delay(0.5);
                await Artemis.ƒS.Sound.play(Artemis.sound.gunShoot, 1);
                await Artemis.ƒS.Progress.delay(0.5);
                await Artemis.ƒS.Sound.play(Artemis.sound.gunShoot, 1);
                Artemis.ƒS.Sound.fade(Artemis.sound.finalSad, 1, 2);
                await Artemis.ƒS.Progress.delay(7);
                return "EndScreen";
            }
        }
    }
    Artemis.SceneTwelveFinal = SceneTwelveFinal;
})(Artemis || (Artemis = {}));
var Artemis;
(function (Artemis) {
    async function SceneTwoEntrance() {
        await Artemis.ƒS.Sound.play(Artemis.sound.themeEntrance, 0.1, true);
        await Artemis.ƒS.Location.show(Artemis.location.entrance);
        await Artemis.ƒS.update(Artemis.transistions.standard.duration, Artemis.transistions.standard.alpha, Artemis.transistions.standard.edge);
        await Artemis.ƒS.Character.show(Artemis.charaktere.maire, Artemis.charaktere.maire.pose.happy, Artemis.ƒS.positionPercent(Artemis.charaktere.maire.positionStandard.x, Artemis.charaktere.maire.positionStandard.y));
        await Artemis.ƒS.Character.show(Artemis.charaktere.remington, Artemis.charaktere.remington.pose.neutral, Artemis.ƒS.positionPercent(Artemis.charaktere.remington.positionStandard.x, Artemis.charaktere.remington.positionStandard.y));
        await Artemis.ƒS.Character.show(Artemis.charaktere.bronte, Artemis.charaktere.bronte.pose.happy, Artemis.ƒS.positionPercent(Artemis.charaktere.bronte.positionStandard.x, Artemis.charaktere.bronte.positionStandard.y));
        await Artemis.ƒS.update(1);
        await Artemis.ƒS.Speech.tell(Artemis.charaktere.maire, " Wow… was für eine schöne Eingangshalle ");
        await Artemis.ƒS.Speech.tell(Artemis.charaktere.remington, "Das Manor ist im Besitz der Familie Blackburn seit 1705. Nach 100 Jahren erlag es jedoch dem Ratcliff Feuer und musste zum großen Teil neu errichtet werden.");
        await Artemis.ƒS.Speech.tell(Artemis.charaktere.remington, "In den fünfziger Jahren bekam es dann noch einmal eine Renovierung von dem ehrenwerten Lord Blackburn Sr. – Gott habe ihn selig –");
        await Artemis.ƒS.Character.hide(Artemis.charaktere.maire);
        await Artemis.ƒS.Character.show(Artemis.charaktere.maire, Artemis.charaktere.maire.pose.neutral, Artemis.ƒS.positionPercent(Artemis.charaktere.maire.positionStandard.x, Artemis.charaktere.maire.positionStandard.y));
        await Artemis.ƒS.update(0.4);
        await Artemis.ƒS.Speech.tell(Artemis.charaktere.remington, "und ist nun unter der Obhut von Lord Blackburn, welcher seine ehrenwerte Schwester Lady Blackburn hier wohnen lässt.");
        await Artemis.ƒS.Speech.tell(Artemis.charaktere.remington, "Er hat natürlich das gesamte Erbe vermacht bekommen und sich mit Hingabe hierdrum gekümmert. ");
        await Artemis.ƒS.Character.hide(Artemis.charaktere.remington);
        await Artemis.ƒS.Character.show(Artemis.charaktere.remington, Artemis.charaktere.remington.pose.angry, Artemis.ƒS.positionPercent(Artemis.charaktere.remington.positionStandard.x, Artemis.charaktere.remington.positionStandard.y));
        await Artemis.ƒS.update(0.4);
        await Artemis.ƒS.Speech.tell(Artemis.charaktere.remington, " Entschuldigung, langweile ich sie? ");
        await Artemis.ƒS.Character.hide(Artemis.charaktere.maire);
        await Artemis.ƒS.Character.show(Artemis.charaktere.maire, Artemis.charaktere.maire.pose.fear, Artemis.ƒS.positionPercent(Artemis.charaktere.maire.positionStandard.x, Artemis.charaktere.maire.positionStandard.y));
        await Artemis.ƒS.update(0.4);
        await Artemis.ƒS.Speech.tell(Artemis.charaktere.maire, " Zzz Oh! Äh nein… natürlich nicht. Faszinierend… ");
        await Artemis.ƒS.Character.hide(Artemis.charaktere.maire);
        await Artemis.ƒS.Character.show(Artemis.charaktere.maire, Artemis.charaktere.maire.pose.embarrassed, Artemis.ƒS.positionPercent(Artemis.charaktere.maire.positionStandard.x, Artemis.charaktere.maire.positionStandard.y));
        await Artemis.ƒS.update(0.4);
        await Artemis.ƒS.Character.hide(Artemis.charaktere.remington);
        await Artemis.ƒS.Character.show(Artemis.charaktere.remington, Artemis.charaktere.remington.pose.neutral, Artemis.ƒS.positionPercent(Artemis.charaktere.remington.positionStandard.x, Artemis.charaktere.remington.positionStandard.y));
        await Artemis.ƒS.update(0.4);
        await Artemis.ƒS.Speech.tell(Artemis.charaktere.bronte, " Und wie. Wir haben Glück das die Familie in einen so guten Zustand hält. Es ist wirklich prächtig. ");
        await Artemis.ƒS.Character.hide(Artemis.charaktere.maire);
        await Artemis.ƒS.Character.show(Artemis.charaktere.maire, Artemis.charaktere.maire.pose.neutral, Artemis.ƒS.positionPercent(Artemis.charaktere.maire.positionStandard.x, Artemis.charaktere.maire.positionStandard.y));
        await Artemis.ƒS.update(0.4);
        await Artemis.ƒS.Speech.tell(Artemis.charaktere.remington, " Da stimme ich ihnen zu. Darf ich Ihnen Ihren Mantel abnehmen, Miss? ");
        await Artemis.ƒS.Character.hide(Artemis.charaktere.maire);
        await Artemis.ƒS.Character.show(Artemis.charaktere.maire, Artemis.charaktere.maire.pose.embarrassed, Artemis.ƒS.positionPercent(Artemis.charaktere.maire.positionStandard.x, Artemis.charaktere.maire.positionStandard.y));
        await Artemis.ƒS.update(0.4);
        await Artemis.ƒS.Speech.tell(Artemis.charaktere.maire, " Oh… vielen Dank, aber ich denke ich behalte ihn lieber an. Ich äh… erkälte mich so schnell… ");
        await Artemis.ƒS.Character.hide(Artemis.charaktere.maire);
        await Artemis.ƒS.Character.show(Artemis.charaktere.maire, Artemis.charaktere.maire.pose.neutral, Artemis.ƒS.positionPercent(Artemis.charaktere.maire.positionStandard.x, Artemis.charaktere.maire.positionStandard.y));
        await Artemis.ƒS.update(0.4);
        await Artemis.ƒS.Speech.tell(Artemis.charaktere.remington, " Wie Sie wünschen. Geben sie mir einen Moment. Ich werde Sie den Anwesenden ankündigen. Nutzen Sie die Zeit gerne um sich… herzurichten. ");
        await Artemis.ƒS.Character.hide(Artemis.charaktere.remington);
        await Artemis.ƒS.update(0.8);
        await Artemis.ƒS.Character.hide(Artemis.charaktere.maire);
        await Artemis.ƒS.Character.show(Artemis.charaktere.maire, Artemis.charaktere.maire.pose.sad, Artemis.ƒS.positionPercent(Artemis.charaktere.maire.positionStandard.x, Artemis.charaktere.maire.positionStandard.y));
        await Artemis.ƒS.update(0.4);
        await Artemis.ƒS.Speech.tell(Artemis.charaktere.maire, " Oh weh… ich glaube er kann uns nicht leiden.");
        if (Artemis.dataForSave.foundRing == true) {
            await Artemis.ƒS.Speech.tell(Artemis.charaktere.maire, "Wir hätten nicht im Garten rumschnüffeln sollen.");
        }
        else if (Artemis.dataForSave.spiedThroughWindow == true) {
            await Artemis.ƒS.Speech.tell(Artemis.charaktere.maire, "Er denkt wohl wir schnüffeln hier herum.");
        }
        else {
            await Artemis.ƒS.Speech.tell(Artemis.charaktere.maire, "Dabei haben wir gar nichts gemacht.");
        }
        await Artemis.ƒS.Character.hide(Artemis.charaktere.bronte);
        await Artemis.ƒS.Character.show(Artemis.charaktere.bronte, Artemis.charaktere.bronte.pose.think, Artemis.ƒS.positionPercent(Artemis.charaktere.bronte.positionStandard.x, Artemis.charaktere.bronte.positionStandard.y));
        await Artemis.ƒS.update(0.4);
        await Artemis.ƒS.Speech.tell(Artemis.charaktere.bronte, " Ach was. Er ist halt ein wenig reserviert. Viele Butler sind so. Aber Maire, warum klammerst du dich so an denen Mantel? Geht es dir nicht gut? ");
        await Artemis.ƒS.Character.hide(Artemis.charaktere.maire);
        await Artemis.ƒS.Character.show(Artemis.charaktere.maire, Artemis.charaktere.maire.pose.embarrassed, Artemis.ƒS.positionPercent(Artemis.charaktere.maire.positionStandard.x, Artemis.charaktere.maire.positionStandard.y));
        await Artemis.ƒS.update(0.4);
        await Artemis.ƒS.Speech.tell(Artemis.charaktere.maire, " Oh nein… alles ist gut… Ich habe nur vorhin auf mein Kleid gekleckert. Ich wusste ja nicht, dass wir mit einer echten Lady essen. ");
        await Artemis.ƒS.Character.hide(Artemis.charaktere.maire);
        await Artemis.ƒS.Character.show(Artemis.charaktere.maire, Artemis.charaktere.maire.pose.neutral, Artemis.ƒS.positionPercent(Artemis.charaktere.maire.positionStandard.x, Artemis.charaktere.maire.positionStandard.y));
        await Artemis.ƒS.Character.hide(Artemis.charaktere.bronte);
        await Artemis.ƒS.Character.show(Artemis.charaktere.bronte, Artemis.charaktere.bronte.pose.laugh, Artemis.ƒS.positionPercent(Artemis.charaktere.bronte.positionStandard.x, Artemis.charaktere.bronte.positionStandard.y));
        await Artemis.ƒS.update(0.4);
        await Artemis.ƒS.Speech.tell(Artemis.charaktere.bronte, " hihi… nun gut, dass erklärt es natürlich. Ah, der Butler winkt uns herein.");
        await Artemis.ƒS.Speech.tell(Artemis.charaktere.maire, "Mhm, aber irgendwas gefällt mir an der ganzen Sache nicht. Weißt du, ich glaube ich werde den Abend heute dokumentieren.");
        await Artemis.ƒS.Character.hide(Artemis.charaktere.bronte);
        await Artemis.ƒS.Character.show(Artemis.charaktere.bronte, Artemis.charaktere.bronte.pose.think, Artemis.ƒS.positionPercent(Artemis.charaktere.bronte.positionStandard.x, Artemis.charaktere.bronte.positionStandard.y));
        await Artemis.ƒS.update(0.4);
        await Artemis.ƒS.Speech.tell(Artemis.charaktere.bronte, "So wie bei unseren Fällen? Keine schlechte Idee und eine gute Übung. Auch wenn du es nicht notwendig hast.");
        await Artemis.ƒS.Character.hide(Artemis.charaktere.maire);
        await Artemis.ƒS.Character.show(Artemis.charaktere.maire, Artemis.charaktere.maire.pose.happy, Artemis.ƒS.positionPercent(Artemis.charaktere.maire.positionStandard.x, Artemis.charaktere.maire.positionStandard.y));
        await Artemis.ƒS.update(0.4);
        await Artemis.ƒS.Speech.tell(Artemis.charaktere.maire, "Genau. Und wer weiß, vielleicht wird der Abend spanneder als gedacht.");
        Artemis.ƒS.Text.addClass("diaryUnlocked");
        Artemis.ƒS.Text.print("<h4> Tagebuch freigeschaltet </h4> <p>Das Tagebuch von Maire steht dir jederzeit im Menü zuverfügung. Drücke <b>'M'</b> um es jederzeit zu öffnen</p>");
        await Artemis.ƒS.Speech.tell(Artemis.charaktere.bronte, "Oh der Butler winkt uns rein. Lass uns gehen!");
        await Artemis.ƒS.Sound.fade(Artemis.sound.themeEntrance, 0, 1, false);
        await Artemis.ƒS.Character.hide(Artemis.charaktere.maire);
        await Artemis.ƒS.Character.hide(Artemis.charaktere.remington);
        await Artemis.ƒS.Character.hide(Artemis.charaktere.bronte);
        await Artemis.ƒS.update(0.8);
        return "SceneThreeSaalon";
    }
    Artemis.SceneTwoEntrance = SceneTwoEntrance;
})(Artemis || (Artemis = {}));
//# sourceMappingURL=ArtemisMysterium.js.map