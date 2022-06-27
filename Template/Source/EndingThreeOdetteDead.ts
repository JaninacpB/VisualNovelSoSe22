namespace Artemis {
    export async function EndingThreeOdetteDead(): ƒS.SceneReturn {

        await ƒS.Sound.fade(sound.endingSad, 0.4, 1, true);

        await ƒS.Location.show(location.black);
        await ƒS.update(transistions.wallpaper.duration, transistions.wallpaper.alpha, transistions.wallpaper.edge);
        await ƒS.update(2);

        await ƒS.Speech.setTickerDelays(80);

        await ƒS.Speech.tell(charaktere.maire, "Bronte spricht nur selten über diesen Tag.");

        await ƒS.Character.show(charaktere.isaac, charaktere.isaac.pose.cry, ƒS.positionPercent(50, charaktere.isaac.positionStandard.y));
        await ƒS.update(0.6);

        await ƒS.Speech.tell(charaktere.maire, "Isaac konnte die Erlebnisse von jenen Tag nicht ruhen lassen, bis er vor einigen Monaten überfallen und getötet wurde.");

        await ƒS.Character.hide(charaktere.isaac);
        await ƒS.update(0.6);     
        
        await ƒS.Character.show(charaktere.alaistar, charaktere.alaistar.pose.neutral, ƒS.positionPercent(35 , charaktere.alaistar.positionMiddle.y));
        await ƒS.Character.show(charaktere.grace, charaktere.grace.pose.think, ƒS.positionPercent(65 , charaktere.grace.positionMiddle.y));
        await ƒS.update(0.6);

        await ƒS.Speech.tell(charaktere.maire, " Auch das Manor brannte einige Tage später nieder, zusammen mit dem Testament. Alaistar und Grace bekamen eine große Menge Geld von der Versicherung.");

        await ƒS.Character.hide(charaktere.grace);
        await ƒS.Character.hide(charaktere.alaistar);
        await ƒS.update(0.6);

        await ƒS.Speech.tell(charaktere.maire, " Wir wissen tatsächlich nicht was mit Artemis passiert ist und ob sie noch jemand gefunden hat.");

        await ƒS.Character.show(charaktere.bronte, charaktere.bronte.pose.think, ƒS.positionPercent(35 , charaktere.bronte.positionMiddle.y));
        await ƒS.Character.show(charaktere.maire, charaktere.maire.pose.sad, ƒS.positionPercent(65 , charaktere.maire.positionStandard.y));
        await ƒS.update(0.6);

        await ƒS.Speech.tell(charaktere.maire, " Auch ich hoffe hauptsächlich diesen schrecklichen Tag hinter uns lassen zu können. ");

        await ƒS.Progress.delay(1);

        await ƒS.Speech.hide();

        await ƒS.Character.hide(charaktere.maire);
        await ƒS.Character.hide(charaktere.bronte);
        await ƒS.update(5);

        return "EndScreen";

    }
}
