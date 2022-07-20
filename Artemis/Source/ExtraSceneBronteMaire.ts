namespace Artemis {
    export async function ExtraSceneBronteMaire(): ƒS.SceneReturn {
        localStorage.setItem('MaireAndBronte', JSON.stringify(true));

        await ƒS.Sound.fade(sound.endingHappy, 0.7, 1, true);

        await ƒS.Location.show(location.infrontOfManorNight);
        await ƒS.update(1); 

        await ƒS.Character.hide(charaktere.bronte);
        await ƒS.Character.show(charaktere.bronte, charaktere.bronte.pose.think, ƒS.positionPercent(charaktere.bronte.positionStandard.x, charaktere.bronte.positionStandard.y))
        await ƒS.Character.hide(charaktere.maire);
        await ƒS.Character.show(charaktere.maire, charaktere.maire.pose.neutral, ƒS.positionPercent(charaktere.maire.positionStandard.x, charaktere.maire.positionStandard.y))
        await ƒS.update(0.8);

        await ƒS.Speech.tell(charaktere.bronte, " Maire… du siehst müde aus. ");
        await ƒS.Speech.tell(charaktere.maire, " Ja… ich bin ein wenig erschöpft… ");

        await ƒS.Character.hide(charaktere.bronte);
        await ƒS.Character.show(charaktere.bronte, charaktere.bronte.pose.laugh, ƒS.positionPercent(charaktere.bronte.positionStandard.x, charaktere.bronte.positionStandard.y))
        await ƒS.update(0.4);  

        await ƒS.Speech.tell(charaktere.bronte, " Heute war ein langer Tag. ");
        await ƒS.Speech.tell(charaktere.maire, " Ja… ");

        await ƒS.Character.hide(charaktere.bronte);
        await ƒS.Character.show(charaktere.bronte, charaktere.bronte.pose.happy, ƒS.positionPercent(charaktere.bronte.positionStandard.x, charaktere.bronte.positionStandard.y))
        await ƒS.update(0.4);  

        await ƒS.Speech.tell(charaktere.bronte, " Ich bin so froh, dass es dir gut geht. ");

        await ƒS.Character.hide(charaktere.maire);
        await ƒS.Character.show(charaktere.maire, charaktere.maire.pose.fear, ƒS.positionPercent(charaktere.maire.positionStandard.x, charaktere.maire.positionStandard.y))
        await ƒS.update(0.4);

        await ƒS.Speech.tell(charaktere.maire, " Ich auch. Aber ich hatte auch so Angst um dich! ");

        await ƒS.Character.hide(charaktere.bronte);
        await ƒS.Character.show(charaktere.bronte, charaktere.bronte.pose.think, ƒS.positionPercent(charaktere.bronte.positionStandard.x, charaktere.bronte.positionStandard.y))
        await ƒS.update(0.4);  

        await ƒS.Speech.tell(charaktere.bronte, " Oh… ja, wir waren in einer brenzlichen Lage. Aber zumindest geht es uns beiden gut. ");

        await ƒS.Character.hide(charaktere.maire);
        await ƒS.Character.show(charaktere.maire, charaktere.maire.pose.neutral, ƒS.positionPercent(charaktere.maire.positionStandard.x, charaktere.maire.positionStandard.y))
        await ƒS.update(0.4);

        await ƒS.Speech.tell(charaktere.maire, " Ja… ");
        await ƒS.Speech.tell(charaktere.bronte, "  Maire. ");

        await ƒS.Character.hide(charaktere.maire);
        await ƒS.Character.show(charaktere.maire, charaktere.maire.pose.happy, ƒS.positionPercent(charaktere.maire.positionStandard.x, charaktere.maire.positionStandard.y))
        await ƒS.update(0.4);

        await ƒS.Speech.tell(charaktere.maire, " Ja? ");

        await ƒS.Character.hide(charaktere.bronte);
        await ƒS.Character.show(charaktere.bronte, charaktere.bronte.pose.laugh, ƒS.positionPercent(charaktere.bronte.positionStandard.x, charaktere.bronte.positionStandard.y))
        await ƒS.update(0.4);  

        await ƒS.Speech.tell(charaktere.bronte, " Ich liebe dich. ");

        await ƒS.Character.hide(charaktere.maire);
        await ƒS.Character.show(charaktere.maire, charaktere.maire.pose.laugh, ƒS.positionPercent(charaktere.maire.positionStandard.x, charaktere.maire.positionStandard.y))
        await ƒS.update(0.4);

        await ƒS.Speech.tell(charaktere.maire, " Naw… Bronte ich liebe dich auch. ");

        await ƒS.Character.hide(charaktere.bronte);
        await ƒS.Character.show(charaktere.bronte, charaktere.bronte.pose.happy, ƒS.positionPercent(charaktere.bronte.positionStandard.x, charaktere.bronte.positionStandard.y))
        await ƒS.update(0.4);  

        await ƒS.Location.show(location.infrontOfManorDay);
        await ƒS.update(1); 

        await ƒS.Speech.tell(charaktere.bronte, " Oh schau… die Sonne geht auf. ");

        await ƒS.Character.hide(charaktere.maire);
        await ƒS.Character.show(charaktere.maire, charaktere.maire.pose.happy, ƒS.positionPercent(charaktere.maire.positionStandard.x, charaktere.maire.positionStandard.y))
        await ƒS.update(0.4);

        await ƒS.Speech.tell(charaktere.maire, " Oh… wie schön.");

        await ƒS.Character.hide(charaktere.bronte);
        await ƒS.Character.hide(charaktere.maire);
        await ƒS.update(3);

        ƒS.Sound.fade(sound.endingHappy, 0, 1, true);

        await ƒS.Location.show(location.black);
        await ƒS.update(1); 


        return "EndingOneAllSurvive"; 

    }
}