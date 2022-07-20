namespace Artemis {
    export async function EndingBadGraceAngry(): ƒS.SceneReturn {

        await ƒS.Sound.fade(sound.endingSad, 0.4, 1, true);

        await ƒS.Location.show(location.black);
        await ƒS.update(transistions.standard.duration, "Asset/Transition/18.png", transistions.standard.edge);
        await ƒS.update(2);

        await ƒS.Speech.setTickerDelays(80);

        await ƒS.Speech.tell(charaktere.maire, "Und so verließen wir das Manor Blackburn und sollten nie herausfinden, was hinter all den merkwürdigen Gegebenheiten war.");

        await ƒS.Speech.tell(charaktere.maire, "Ich frag mich was passiert wäre, wenn wir dageblieben wären...");

        await ƒS.Progress.delay(1);

        await ƒS.Speech.hide();
        await ƒS.update(5);

        return "EndScreen";
    }
}