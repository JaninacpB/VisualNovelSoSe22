namespace Artemis {
    export async function EndingTwoBronteDead(): ƒS.SceneReturn {

        await ƒS.Sound.fade(sound.endingSad, 0.4, 1, true);

        await ƒS.Location.show(location.black);
        await ƒS.update(transistions.wallpaper.duration, transistions.wallpaper.alpha, transistions.wallpaper.edge);
        await ƒS.update(2);

        await ƒS.Speech.setTickerDelays(80);

        await ƒS.Speech.tell(charaktere.maire, "Es war der dunkelste Tag in meinem Leben.");

        await ƒS.Character.show(charaktere.alaistar, charaktere.alaistar.pose.neutral, ƒS.positionPercent(charaktere.alaistar.positionMiddle.x, charaktere.alaistar.positionMiddle.y));
        await ƒS.update(0.6);

        await ƒS.Speech.tell(charaktere.maire, " Alistar entkam und für Bronte kam jeder Hilfe zu spät.");

        await ƒS.Character.hide(charaktere.alaistar);
        await ƒS.update(0.6);


        await ƒS.Character.show(charaktere.odette, charaktere.odette.pose.angry, ƒS.positionPercent(65, charaktere.odette.positionMiddle.y));
        await ƒS.Character.show(charaktere.isaac, charaktere.isaac.pose.sad, ƒS.positionPercent(35, charaktere.isaac.positionStandard.y));
        await ƒS.update(0.6);


        await ƒS.Speech.tell(charaktere.maire, " Isaac und Odette freuten sich wiederzusehen, doch auch ihre Freude war durch diesen Vorfall gedämpft. Sie versprachen mir finanzielle Unterstützung, doch ich wollte nichts davon hören.");


        await ƒS.Character.hide(charaktere.isaac);
        await ƒS.Character.hide(charaktere.odette);
        await ƒS.update(0.6);

        await ƒS.Character.show(charaktere.maire, charaktere.maire.pose.neutral, ƒS.positionPercent(50, charaktere.maire.positionStandard.y));
        await ƒS.update(0.6);

        await ƒS.Speech.tell(charaktere.maire, " Ohne meine Geliebte, hielt mich nichts mehr in London. Ich zog zurück nach Irland und versuchte zu vergessen was ich in London verloren hatte. ");

        await ƒS.Progress.delay(1);

        await ƒS.Speech.hide();

        await ƒS.Character.hide(charaktere.maire);
        await ƒS.update(5);

        return "EndScreen";

    }
}
