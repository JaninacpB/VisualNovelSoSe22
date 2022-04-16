namespace Template {
  export async function Scene(): ƒS.SceneReturn {
    console.log("FudgeStory Template Scene starting");

    //Alle Wahlmöglichkeiten in Szene 
    let chooseCatNoise = {
      bush: "Untersuche Busch",
      window: "Untersuche Fenster",
      knock: "Klopfe an der Tür"
    }

    // Text geschwindigkeit regulieren (was ist basic)
    //  await ƒS.Speech.setTickerDelays(1);

    await ƒS.Location.show(location.infrontOfManorDay);
    await ƒS.update(transistions.puzzle.duration, transistions.puzzle.alpha, transistions.puzzle.edge);
    
    await ƒS.Speech.tell(charaktere.maire, "	Oh, was für ein prächtiges Anwesen. Und wir sind hier wirklich richtig?");

    await ƒS.Character.show(charaktere.maire, charaktere.maire.pose.neutral, ƒS.positionPercent(75,100))
    await ƒS.update(1);

    await ƒS.Speech.tell(charaktere.bronte, "Ja, die Blackburns haben schon seit vielen Jahren diesen Wohnsitz. Ich habe dir doch gesagt, dass es heute Abend eine sehr vornehme Veranstaltung wird.");

    await ƒS.Speech.tell(charaktere.maire, "Ja aber doch nicht so vornehm! Du hättest mich besser warnen müssen. Ich sehe ja aus wie ein Dorftrampel. Ich dachte du hättest für die Dame des Hauses einen Fall gelöst?");

    await ƒS.Speech.tell(charaktere.bronte, "Habe ich ja auch. Wobei es eher ein Zufall war, dass der Crossstreet-Bandit auch ihre Smaragd Brosche gestohlen hatte. Aber so oder so war die Lady jedoch so dankbar, dass sie mich reichlich belohnt hat und zu einem Essen eingeladen hat. ");

    document.getElementById('speechContent').classList.add('textEffectBig');
    await ƒS.Speech.tell(charaktere.maire, "!!! ");
    document.getElementById('speechContent').classList.remove('textEffectBig');

    await ƒS.Speech.tell(charaktere.maire, "Eine Lady!");
    await ƒS.Speech.tell(charaktere.maire, "Bronte du hast nicht erwähnt, dass sie eine Lady ist! Oh großgütiger, ich sehe aus wie eine Heuschrecke! ");

    await ƒS.Speech.tell(charaktere.bronte, "Ach was Maire, du siehst wie immer fantastisch aus. Mach dir keine Sorge-");

    document.getElementById('speechContent').classList.add('textEffectBig');
    await ƒS.Speech.tell("", "MAUI!");
    document.getElementById('speechContent').classList.remove('textEffectBig');

    await ƒS.Speech.tell(charaktere.maire, "AHH!");
    await ƒS.Speech.tell(charaktere.maire, "Was... war das eine Katze?");

    await ƒS.Speech.tell(charaktere.bronte, "Und eine schnelle dazu… sieht so aus als wäre sie in die Hecke verschwunden. Komisch, ich frag mich was sie da gesehen hat.");

    await ƒS.Speech.tell(charaktere.maire, "Vermutlich einen Vogel. Wir sollten glaube ich langsam Klopfen. Ich glaube jemand hat gerade durch das Fenster geschaut. Wir sehen ja aus wie gewöhnliche Straßendiebe für diese Leute. ");

    let userChooseCatNoise = await ƒS.Menu.getInput(chooseCatNoise, "XXX");
    switch(userChooseCatNoise) {
      case chooseCatNoise.bush:
        
      break; 

     }


    await ƒS.Speech.tell(charaktere.bronte, "");

    await ƒS.Speech.tell(charaktere.maire, "");

  }
}