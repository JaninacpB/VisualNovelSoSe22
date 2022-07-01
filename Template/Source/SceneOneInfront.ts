namespace Artemis {
  export async function SceneOneInfront(): ƒS.SceneReturn {
    console.log("FudgeStory Scene starting");

    //Alle Wahlmöglichkeiten in Szene 
    let chooseCatNoise = {
      bush: "Untersuche Busch",
      window: "Untersuche Fenster",
      knock: "Klopfe an der Tür"
    }

    //ƒS.Speech.set("Information", "Drücke 'M' um das Spielmenü zu öffnen und deinen Speicherstand zu speichern oder laden.");

    //todo: Input einbauen und stylen, gleich auf DataForSave speichern
    // let test = await ƒS.Speech.getInput();


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

    // return "EndScreen";

    await ƒS.Sound.fade(sound.themeinfrontManor, 0.4, 1, true);

    await ƒS.Location.show(location.infrontOfManorDay);
    await ƒS.update(transistions.wallpaper.duration, transistions.wallpaper.alpha, transistions.wallpaper.edge);
    await ƒS.update();

    await ƒS.Speech.tell(charaktere.maire, "Oh, was für ein prächtiges Anwesen. Und wir sind hier wirklich richtig?");
    await ƒS.Character.show(charaktere.maire, charaktere.maire.pose.neutral, ƒS.positionPercent(charaktere.maire.positionStandard.x, charaktere.maire.positionStandard.y));

    await ƒS.Character.show(charaktere.bronte, charaktere.bronte.pose.happy, ƒS.positionPercent(charaktere.bronte.positionStandard.x, charaktere.bronte.positionStandard.y))
    await ƒS.update(1);

    await ƒS.Speech.tell(charaktere.bronte, "Ja, die Blackburns haben schon seit vielen Jahren diesen Wohnsitz. Ich habe dir doch gesagt, dass es heute Abend eine sehr vornehme Veranstaltung wird.");

    await ƒS.Speech.tell(charaktere.maire, "Ja aber doch nicht so vornehm! Du hättest mich besser warnen müssen. Ich sehe ja aus wie ein Dorftrampel. Ich dachte du hättest für die Dame des Hauses einen Fall gelöst?");

    await ƒS.Character.hide(charaktere.bronte);
    await ƒS.Character.show(charaktere.bronte, charaktere.bronte.pose.think, ƒS.positionPercent(charaktere.bronte.positionStandard.x, charaktere.bronte.positionStandard.y));
    await ƒS.update(0.4);

    await ƒS.Speech.tell(charaktere.bronte, "Habe ich ja auch. Wobei es eher ein Zufall war, dass der Crossstreet-Bandit auch ihre Smaragd Brosche gestohlen hatte.");

    await ƒS.Speech.tell(charaktere.bronte, "Aber so oder so war die Lady jedoch so dankbar, dass sie mich reichlich belohnt hat und zu einem Essen eingeladen hat.");

    await ƒS.Character.hide(charaktere.maire);
    await ƒS.Character.show(charaktere.maire, charaktere.maire.pose.embarrassed, ƒS.positionPercent(charaktere.maire.positionStandard.x, charaktere.maire.positionStandard.y))
    await ƒS.update(0.1);

    document.getElementById('speechContent').classList.add('textEffectBig');
    await ƒS.Speech.tell(charaktere.maire, "!!! ");
    document.getElementById('speechContent').classList.remove('textEffectBig');

    await ƒS.Speech.tell(charaktere.maire, "Eine Lady!");
    await ƒS.Speech.tell(charaktere.maire, "Bronte du hast nicht erwähnt, dass sie eine Lady ist! Oh großgütiger, ich sehe aus wie eine Heuschrecke! ");

    await ƒS.Character.hide(charaktere.bronte);
    await ƒS.Character.show(charaktere.bronte, charaktere.bronte.pose.laugh, ƒS.positionPercent(charaktere.bronte.positionStandard.x, charaktere.bronte.positionStandard.y));
    await ƒS.update(0.3);
    await ƒS.Speech.tell(charaktere.bronte, "Ach was Maire, du siehst wie immer fantastisch aus. Mach dir keine Sorge-");

    await ƒS.Character.hide(charaktere.maire);
    await ƒS.Character.show(charaktere.maire, charaktere.maire.pose.fear, ƒS.positionPercent(charaktere.maire.positionStandard.x, charaktere.maire.positionStandard.y))
    await ƒS.Character.hide(charaktere.bronte);
    await ƒS.Character.show(charaktere.bronte, charaktere.bronte.pose.shout, ƒS.positionPercent(charaktere.bronte.positionStandard.x, charaktere.bronte.positionStandard.y))
    await ƒS.update(0.1);

    await showEmotion(emotionen.ausrufezeichen, 1);

    await ƒS.Sound.fade(sound.catMeow, 0.8, 1, false);
    document.getElementById('speechContent').classList.add('textEffectBig');
    await ƒS.Speech.tell("", "MAUI!");
    document.getElementById('speechContent').classList.remove('textEffectBig');

    await ƒS.Speech.tell(charaktere.maire, "AHH!");

    await ƒS.Character.hide(charaktere.maire);
    await ƒS.Character.hide(charaktere.bronte);
    await ƒS.Character.show(charaktere.maire, charaktere.maire.pose.neutral, ƒS.positionPercent(charaktere.maire.positionStandard.x, charaktere.maire.positionStandard.y));
    await ƒS.Character.show(charaktere.bronte, charaktere.bronte.pose.think, ƒS.positionPercent(charaktere.bronte.positionStandard.x, charaktere.bronte.positionStandard.y));
    await ƒS.update(0.3);

    await ƒS.Speech.tell(charaktere.maire, "Was... war das eine Katze?");

    await ƒS.Speech.tell(charaktere.bronte, "Und eine schnelle dazu… sieht so aus als wäre sie in die Hecke verschwunden. Komisch, ich frag mich was sie da gesehen hat.");

    await ƒS.Speech.tell(charaktere.maire, "Vermutlich einen Vogel. Wir sollten glaube ich langsam Klopfen. Ich glaube jemand hat gerade durch das Fenster geschaut. Wir sehen ja aus wie gewöhnliche Straßendiebe für diese Leute. ");

    let userChooseCatNoise = await ƒS.Menu.getInput(chooseCatNoise, "basicChoice");
    switch (userChooseCatNoise) {
      case chooseCatNoise.bush:

        dataForSave.foundRing = true;

        await ƒS.Speech.tell(charaktere.bronte, "Nur ein Moment.");
        await ƒS.Speech.tell(charaktere.maire, "…Deshalb sind wir immer zu spät.");

        await ƒS.Character.hide(charaktere.maire);
        await ƒS.Character.show(charaktere.maire, charaktere.maire.pose.sad, ƒS.positionPercent(charaktere.maire.positionStandard.x, charaktere.maire.positionStandard.y))
        await ƒS.Character.hide(charaktere.bronte);
        await ƒS.Character.show(charaktere.bronte, charaktere.bronte.pose.think, ƒS.positionPercent(charaktere.bronte.positionStandard.x, charaktere.bronte.positionStandard.y))
        await ƒS.update(0.3);

        await ƒS.Sound.play(sound.goingThrouBushes, 1);

        await ƒS.Speech.tell(charaktere.bronte, "Nun lass mal schauen... Oh!");

        await ƒS.Inventory.add(inventory.ring);
        await ƒS.Inventory.open();

        await ƒS.Character.hide(charaktere.bronte);
        await ƒS.Character.show(charaktere.bronte, charaktere.bronte.pose.happy, ƒS.positionPercent(charaktere.bronte.positionStandard.x, charaktere.bronte.positionStandard.y))
        await ƒS.update(0.3);

        await ƒS.Speech.tell(charaktere.bronte, "Komisch, warum sollte das hier einfach herum liegen?");
        await ƒS.Speech.tell(charaktere.bronte, "Mhm... O.R.");
        await ƒS.Character.hide(charaktere.bronte);
        await ƒS.Character.show(charaktere.bronte, charaktere.bronte.pose.think, ƒS.positionPercent(charaktere.bronte.positionStandard.x, charaktere.bronte.positionStandard.y))
        await ƒS.update(0.3);
        await ƒS.Speech.tell(charaktere.maire, "Oh, da kommt jemand!");

        await ƒS.Character.hide(charaktere.maire);
        await ƒS.Character.show(charaktere.maire, charaktere.maire.pose.fear, ƒS.positionPercent(charaktere.maire.positionStandard.x, charaktere.maire.positionStandard.y));
        await ƒS.update(0.3);

        await ƒS.Character.show(charaktere.remington, charaktere.remington.pose.neutral, ƒS.positionPercent(50, 100))
        await ƒS.update(1);

        await ƒS.Speech.tell(charaktere.remington, "Entschuldigen Sie. Sind Sie Miss Bronte und ihre Begleitung?");

        await ƒS.Character.hide(charaktere.maire);
        await ƒS.Character.show(charaktere.maire, charaktere.maire.pose.laugh, ƒS.positionPercent(charaktere.maire.positionStandard.x, charaktere.maire.positionStandard.y));
        await ƒS.update(0.3);

        await ƒS.Speech.tell(charaktere.maire, "Miss Bronte hihi");

        await ƒS.Character.hide(charaktere.bronte);
        await ƒS.Character.show(charaktere.bronte, charaktere.bronte.pose.happy, ƒS.positionPercent(charaktere.bronte.positionStandard.x, charaktere.bronte.positionStandard.y))
        await ƒS.update(0.3);

        await ƒS.Speech.tell(charaktere.bronte, "Guten Abend. Genau, die sind wir. Freut mich sie kennenzulernen, Herr?");

        await ƒS.Character.hide(charaktere.maire);
        await ƒS.Character.show(charaktere.maire, charaktere.maire.pose.happy, ƒS.positionPercent(charaktere.maire.positionStandard.x, charaktere.maire.positionStandard.y));
        await ƒS.update(0.3);

        await ƒS.Speech.tell(charaktere.remington, "Bitte folgen sie mir doch hinein.");

        await ƒS.Character.hide(charaktere.maire);
        await ƒS.Character.show(charaktere.maire, charaktere.maire.pose.neutral, ƒS.positionPercent(charaktere.maire.positionStandard.x, charaktere.maire.positionStandard.y));
        await ƒS.update(0.3);

        await ƒS.Speech.tell(charaktere.maire, "Nicht sehr gesprächig...");

        break;

      case chooseCatNoise.window:

        dataForSave.spiedThroughWindow = true;

        await ƒS.Speech.tell(charaktere.bronte, "Ich frag mich wer uns da heimlich beobachtet. ");

        await ƒS.Character.hide(charaktere.maire);
        await ƒS.Character.show(charaktere.maire, charaktere.maire.pose.sad, ƒS.positionPercent(charaktere.maire.positionStandard.x, charaktere.maire.positionStandard.y))
        await ƒS.Character.hide(charaktere.bronte);
        await ƒS.Character.show(charaktere.bronte, charaktere.bronte.pose.think, ƒS.positionPercent(charaktere.bronte.positionStandard.x, charaktere.bronte.positionStandard.y))
        await ƒS.update(0.3);

        await ƒS.Speech.tell(charaktere.maire, "Oh bitte nicht… ");
        await ƒS.Speech.tell(charaktere.bronte, "Es dauert nur einen Moment… Hier sehe ich die Küche. Eine ältere Frau an einer Feuerstelle… Oh das Essen sieht klasse aus!");

        await ƒS.Speech.tell(charaktere.remington, "Entschuldigen Sie?");


        await ƒS.Character.show(charaktere.remington, charaktere.remington.pose.neutral, ƒS.positionPercent(50, 100))
        await ƒS.update(0.1);

        await ƒS.Character.hide(charaktere.maire);
        await ƒS.Character.show(charaktere.maire, charaktere.maire.pose.fear, ƒS.positionPercent(charaktere.maire.positionStandard.x, charaktere.maire.positionStandard.y))
        await ƒS.Character.hide(charaktere.bronte);
        await ƒS.Character.show(charaktere.bronte, charaktere.bronte.pose.shout, ƒS.positionPercent(charaktere.bronte.positionStandard.x, charaktere.bronte.positionStandard.y))
        await ƒS.update(0.3);

        document.getElementById('speechContent').classList.add('textEffectBig');
        await ƒS.Speech.tell(charaktere.maire, "AHH!");
        document.getElementById('speechContent').classList.remove('textEffectBig');

        await ƒS.Character.hide(charaktere.maire);
        await ƒS.Character.show(charaktere.maire, charaktere.maire.pose.embarrassed, ƒS.positionPercent(charaktere.maire.positionStandard.x, charaktere.maire.positionStandard.y))
        await ƒS.Character.hide(charaktere.bronte);
        await ƒS.Character.show(charaktere.bronte, charaktere.bronte.pose.sad, ƒS.positionPercent(charaktere.bronte.positionStandard.x, charaktere.bronte.positionStandard.y))
        await ƒS.update(0.3);

        await ƒS.Speech.tell(charaktere.bronte, "Oh... äh... Hallo, wir sind die Gäste für den Abend.");
        await ƒS.Speech.tell(charaktere.remington, "Dass dachte ich mir. Bitte folgen sie mir herein. Und denken Sie heute Abend bitte an ihre Manieren. ");

        await ƒS.Character.hide(charaktere.maire);
        await ƒS.Character.show(charaktere.maire, charaktere.maire.pose.neutral, ƒS.positionPercent(charaktere.maire.positionStandard.x, charaktere.maire.positionStandard.y))
        await ƒS.Character.hide(charaktere.bronte);
        await ƒS.Character.show(charaktere.bronte, charaktere.bronte.pose.think, ƒS.positionPercent(charaktere.bronte.positionStandard.x, charaktere.bronte.positionStandard.y))
        await ƒS.update(0.3);

        await ƒS.Speech.tell(charaktere.maire, "Da hast du ja einen tollen ersten Eindruck gemacht…");

        break;

      case chooseCatNoise.knock:

        await ƒS.Sound.play(sound.knockDoor, 1);
        await ƒS.update(0.4);

        await ƒS.Character.show(charaktere.remington, charaktere.remington.pose.neutral, ƒS.positionPercent(50, 100))
        await ƒS.update(0.1);

        await ƒS.Character.hide(charaktere.maire);
        await ƒS.Character.show(charaktere.maire, charaktere.maire.pose.fear, ƒS.positionPercent(charaktere.maire.positionStandard.x, charaktere.maire.positionStandard.y))
        await ƒS.update(0.1);

        await ƒS.Speech.tell(charaktere.remington, " Willkommen, treten sie doch gerne ein.");

        await ƒS.Character.hide(charaktere.maire);
        await ƒS.Character.show(charaktere.maire, charaktere.maire.pose.embarrassed, ƒS.positionPercent(charaktere.maire.positionStandard.x, charaktere.maire.positionStandard.y))
        await ƒS.update(0.3);

        await ƒS.Speech.tell(charaktere.maire, " AH! Oh… Entschuldigung… Sie standen direkt hinter der Tür? Äh ich meine… guten Abend. ");

        await ƒS.Character.hide(charaktere.bronte);
        await ƒS.Character.show(charaktere.bronte, charaktere.bronte.pose.happy, ƒS.positionPercent(charaktere.bronte.positionStandard.x, charaktere.bronte.positionStandard.y))
        await ƒS.update(0.3);
        await ƒS.Speech.tell(charaktere.bronte, " Maire du bist wirklich ein wenig zu schreckhaft.");
    }

    await ƒS.Character.hide(charaktere.maire);
    await ƒS.Character.hide(charaktere.bronte);
    await ƒS.Character.hide(charaktere.remington);
    await ƒS.update(0.8);

    await ƒS.Sound.fade(sound.themeinfrontManor, 0, 0.4, false);

    return "SceneTwoEntrance";
  }
}