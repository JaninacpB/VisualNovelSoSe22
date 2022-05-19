namespace Template {
    export async function SceneSevenCabin(): ƒS.SceneReturn {

        await ƒS.Location.show(location.cabin);
        await ƒS.update(transistions.inToOut.duration, transistions.inToOut.alpha, transistions.inToOut.edge);

        //todo: Music? 
        await ƒS.Sound.fade(sound.themeinfrontManorNight, 0.1, 0.2, true);

        await ƒS.Speech.tell(charaktere.maire, " Schau eine Säule steht vor der Hütte! ");
        await ƒS.Speech.tell(charaktere.bronte, " Und die Spuren führen eindeutig hierher. Vermutlich ist sie eingesperrt. Ein Moment… So jetzt sollte sie aufgehen. Mhm… Schaufeln, Eimer und weitere Gartengeräte. Aber keine Katze. ");
        await ƒS.Speech.tell(charaktere.maire, " Schau! Dort. Die Dachluke ist ein Stück offen und dort hängt etwas dran. Wir sollten versuchen ranzukommen!");


        //Auswahl Wie in Hütte kommen 
        // Selber
        await ƒS.Speech.tell(charaktere.bronte, "Ein Moment das habe ich gleich! Perfekt. Gutes Auge Maire! Das ist ein Halsband.");

        //Maire machen lassen: 
        //todo: Freundschaft Minus

        dataForSave.maireHurtHerselfInCabin = true;
        await ƒS.Speech.tell(charaktere.bronte, " Versuch hochzuklettern. ");
        await ƒS.Speech.tell(charaktere.maire, " Okay… ich… autsch! Mein Knöchel! Aber hier… ein Halsband. ");
        await ƒS.Speech.tell(charaktere.bronte, " (Oh weh, Maire scheint sich wirklich verletzt zu haben. Ich sollte netter zu ihr sein in nächster Zeit)");

        // Ende auswahl
        await ƒS.Speech.tell(charaktere.bronte, " Hier ist eine Inschrift drauf. Artemis. Mhm… es fühlt sich an als wäre hier noch was drunter-  ");
        //todo: SCHREI 
        await ƒS.Speech.tell(charaktere.bronte, " !!! Das kam vom Haus! Schnell Maire!");

        if (dataForSave.maireHurtHerselfInCabin) {

            await ƒS.Speech.tell(charaktere.maire, " Ich komme… mein Knöchel… Au… Au… Au… ");

        }

        return "SceneEightSaalonInterview"; 
    }
}