namespace Artemis {
    export async function EndingOneAllSurvive(): ƒS.SceneReturn {

        await ƒS.Sound.fade(sound.endingHappy, 0.4, 1, true);

        await ƒS.Location.show(location.black);
        await ƒS.update(transistions.standard.duration, "Asset/Transition/18.png", transistions.standard.edge);

        await ƒS.Speech.setTickerDelays(80);

        await ƒS.Speech.tell(charaktere.maire, " Und so endete ein weiterer Fall.");

        await ƒS.Character.show(charaktere.odette, charaktere.odette.pose.happy,  ƒS.positionPercent( 65, charaktere.odette.positionMiddle.y));
        await ƒS.Character.show(charaktere.isaac, charaktere.isaac.pose.happy, ƒS.positionPercent(35, charaktere.isaac.positionStandard.y));
        await ƒS.update(0.6);

        await ƒS.Speech.tell(charaktere.maire, " Isaac und Odette bezogen das Manor,");

        await ƒS.Character.hide(charaktere.isaac);
        await ƒS.Character.hide(charaktere.odette);
        await ƒS.update(0.6);

        await ƒS.Character.show(charaktere.alaistar, charaktere.alaistar.pose.angry, ƒS.positionPercent(charaktere.alaistar.positionMiddle.x, charaktere.alaistar.positionMiddle.y));
        await ƒS.update(0.6);

        await ƒS.Speech.tell(charaktere.maire, " Während Mr. Blackburn eine Zelle sein zuhause nennen durfte.  ");

        await ƒS.Character.hide(charaktere.alaistar);
        await ƒS.update(0.6);

        await ƒS.Character.show(charaktere.grace, charaktere.grace.pose.think, ƒS.positionPercent(charaktere.grace.positionMiddle.x, charaktere.grace.positionMiddle.y));
        await ƒS.update(0.6);

        await ƒS.Speech.tell(charaktere.maire, " Grace war erfreut ihre Schwester wiederzusehen, nicht jedoch ihren Bruder zu verlieren. Wobei auch sie nun von niemanden mehr abhängig war.  ");

        await ƒS.Character.hide(charaktere.grace);
        await ƒS.update(0.6);

        await ƒS.Speech.tell(charaktere.maire, " Oh und Artemis ist natürlich gesund und munter. Immer Mal wieder sind Bronte und ich bei Odette und Isaac und sehe dann auch den kleinen Tiger.  ");

        await ƒS.Character.show(charaktere.remington, charaktere.remington.pose.angry, ƒS.positionPercent(50, 100))
        await ƒS.update(0.6);

        await ƒS.Speech.tell(charaktere.maire, " Mr. Remington hat gekündig, doch niemand scheint ihn richtig zu vermissen.  ");

        await ƒS.Character.hide(charaktere.remington);
        await ƒS.update(0.6);

        await ƒS.Character.show(charaktere.bronte, charaktere.bronte.pose.happy, ƒS.positionPercent(charaktere.bronte.positionMiddle.x, charaktere.bronte.positionMiddle.y))
        await ƒS.update(1);

        await ƒS.Speech.tell(charaktere.maire, " Und Bronte. Sie ist nun eine noch gefragtere Detektivin und hat so viele Aufträge wie noch nie.  ");

        await ƒS.Character.hide(charaktere.bronte);
        await ƒS.Character.show(charaktere.bronte, charaktere.bronte.pose.think, ƒS.positionPercent(charaktere.bronte.positionMiddle.x, charaktere.bronte.positionMiddle.y))
        await ƒS.update(1);

        await ƒS.Speech.tell(charaktere.maire, " Erst neulich haben wir der Polizei bei der Lösung eines echten Mordes geholfen. Aber dass ist eine andere Geschichte… ");

        await ƒS.Progress.delay(1);

        await ƒS.Speech.hide();

        await ƒS.Character.hide(charaktere.bronte);
        await ƒS.update(5);

        localStorage.setItem('cat', JSON.stringify(true));

        return "EndScreen"; 

    }
}