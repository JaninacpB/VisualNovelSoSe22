namespace Artemis {
    export async function ExtraSceneBronteMaire(): ƒS.SceneReturn {
        await ƒS.Speech.tell(charaktere.bronte, " Maire… du siehst müde aus. ");
        await ƒS.Speech.tell(charaktere.maire, " Ja… ich bin ein wenig erschöpft… ");
        await ƒS.Speech.tell(charaktere.bronte, " Heute war ein langer Tag. ");
        await ƒS.Speech.tell(charaktere.maire, " Ja… ");
        await ƒS.Speech.tell(charaktere.bronte, " Ich bin so froh, dass es dir gut geht. ");
        await ƒS.Speech.tell(charaktere.maire, " Ich auch. Aber ich hatte auch so Angst um dich! ");
        await ƒS.Speech.tell(charaktere.bronte, " Oh… ja, wir waren in einer brenzlichen Lage. Aber zumindest geht es uns beiden gut. ");
        await ƒS.Speech.tell(charaktere.maire, " Ja… ");
        await ƒS.Speech.tell(charaktere.bronte, "  Maire. ");
        await ƒS.Speech.tell(charaktere.maire, " Ja? ");
        await ƒS.Speech.tell(charaktere.bronte, " Ich liebe dich. ");
        await ƒS.Speech.tell(charaktere.maire, " Naw… Bronte ich liebe dich auch. ");
        await ƒS.Speech.tell(charaktere.bronte, " Oh schau… die Sonne geht auf. ");
        await ƒS.Speech.tell(charaktere.maire, " Oh… wie schön.");

        return "EndScreen"; 

    }
}