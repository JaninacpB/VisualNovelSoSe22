namespace Artemis {
    export async function SceneSevenCabin(): ƒS.SceneReturn {

        await ƒS.Location.show(location.cabin);
        await ƒS.update(transistions.inToOut.duration, transistions.inToOut.alpha, transistions.inToOut.edge);
        //todo: Music? 

        let chooseHowToGetToRoof = {
            maire: "Maire machen lassen",
            bronte: "Selber machen"
        }

        await ƒS.Character.show(charaktere.bronte, charaktere.bronte.pose.think, ƒS.positionPercent(charaktere.bronte.positionStandard.x, charaktere.bronte.positionStandard.y));
        await ƒS.Character.show(charaktere.maire, charaktere.maire.pose.neutral, ƒS.positionPercent(charaktere.maire.positionStandard.x, charaktere.maire.positionStandard.y))
        await ƒS.update(0.8);

        await ƒS.Sound.fade(sound.themeinfrontManorNight, 0.1, 0.2, true);

        await ƒS.Speech.tell(charaktere.maire, " Schau eine Säule steht vor der Hütte! ");

        await ƒS.Character.hide(charaktere.bronte);
        await ƒS.Character.hide(charaktere.maire);
        await ƒS.Character.show(charaktere.bronte, charaktere.bronte.pose.happy, ƒS.positionPercent(charaktere.bronte.positionStandard.x, charaktere.bronte.positionStandard.y));
        await ƒS.Character.show(charaktere.maire, charaktere.maire.pose.happy, ƒS.positionPercent(charaktere.maire.positionStandard.x, charaktere.maire.positionStandard.y))
        await ƒS.update(0.4);

        await ƒS.Speech.tell(charaktere.bronte, " Und die Spuren führen eindeutig hierher. Vermutlich ist sie eingesperrt. Ein Moment… So jetzt sollte sie aufgehen. Mhm… Schaufeln, Eimer und weitere Gartengeräte. Aber keine Katze. ");

        await ƒS.Character.hide(charaktere.bronte);
        await ƒS.Character.hide(charaktere.maire);
        await ƒS.Character.show(charaktere.bronte, charaktere.bronte.pose.think, ƒS.positionPercent(charaktere.bronte.positionStandard.x, charaktere.bronte.positionStandard.y));
        await ƒS.Character.show(charaktere.maire, charaktere.maire.pose.fear, ƒS.positionPercent(charaktere.maire.positionStandard.x, charaktere.maire.positionStandard.y))
        await ƒS.update(0.4);

        await ƒS.Speech.tell(charaktere.maire, " Schau! Dort. Die Dachluke ist ein Stück offen und dort hängt etwas dran. Wir sollten versuchen ranzukommen!");

        //Auswahl Wie in Hütte kommen 
        // Selber

        let userChooseHowToGetToRoof = await ƒS.Menu.getInput(chooseHowToGetToRoof, "basicChoice");
        switch (userChooseHowToGetToRoof) {
            case chooseHowToGetToRoof.bronte:

                await ƒS.Character.hide(charaktere.bronte);
                await ƒS.Character.hide(charaktere.maire);
                await ƒS.Character.show(charaktere.bronte, charaktere.bronte.pose.happy, ƒS.positionPercent(charaktere.bronte.positionStandard.x, charaktere.bronte.positionStandard.y));
                await ƒS.Character.show(charaktere.maire, charaktere.maire.pose.neutral, ƒS.positionPercent(charaktere.maire.positionStandard.x, charaktere.maire.positionStandard.y))
                await ƒS.update(0.4);

                await ƒS.Speech.tell(charaktere.bronte, "Ein Moment das habe ich gleich! Perfekt. Gutes Auge Maire! Das ist ein Halsband.");
                
                await ƒS.Inventory.add(inventory.collar);
                await ƒS.Inventory.open();

                break;

            case chooseHowToGetToRoof.maire:

                dataForSave.pointAngryMaire += 1; 
                dataForSave.maireHurtHerselfInCabin = true;

                await ƒS.Character.hide(charaktere.bronte);
                await ƒS.Character.show(charaktere.bronte, charaktere.bronte.pose.happy, ƒS.positionPercent(charaktere.bronte.positionStandard.x, charaktere.bronte.positionStandard.y));
                await ƒS.update(0.4);

                await ƒS.Speech.tell(charaktere.bronte, " Versuch hochzuklettern. ");

                await ƒS.Character.hide(charaktere.maire);
                await ƒS.Character.show(charaktere.maire, charaktere.maire.pose.embarrassed, ƒS.positionPercent(charaktere.maire.positionStandard.x, charaktere.maire.positionStandard.y))
                await ƒS.update(0.4);

                await ƒS.Speech.tell(charaktere.maire, " Okay… ich… autsch! Mein Knöchel! Aber hier… ein Halsband. ");

                await ƒS.Inventory.add(inventory.collar);
                await ƒS.Inventory.open();

                await ƒS.Character.hide(charaktere.bronte);
                await ƒS.Character.hide(charaktere.maire);
                await ƒS.Character.show(charaktere.bronte, charaktere.bronte.pose.think, ƒS.positionPercent(charaktere.bronte.positionStandard.x, charaktere.bronte.positionStandard.y));
                await ƒS.Character.show(charaktere.maire, charaktere.maire.pose.sad, ƒS.positionPercent(charaktere.maire.positionStandard.x, charaktere.maire.positionStandard.y))
                await ƒS.update(0.4);

                await ƒS.Speech.tell(charaktere.bronte, " (Oh weh, Maire scheint sich wirklich verletzt zu haben. Ich sollte netter zu ihr sein in nächster Zeit)");


                break;
        }

        dataForSave.foundCatCollarFinished = true; 

        await ƒS.Character.hide(charaktere.bronte);
        await ƒS.Character.hide(charaktere.maire);
        await ƒS.Character.show(charaktere.bronte, charaktere.bronte.pose.think, ƒS.positionPercent(charaktere.bronte.positionStandard.x, charaktere.bronte.positionStandard.y));
        await ƒS.Character.show(charaktere.maire, charaktere.maire.pose.neutral, ƒS.positionPercent(charaktere.maire.positionStandard.x, charaktere.maire.positionStandard.y))
        await ƒS.update(0.4);

        await ƒS.Speech.tell(charaktere.bronte, " Hier ist eine Inschrift drauf. Artemis.");
        await ƒS.Speech.tell(charaktere.bronte, " Es fühlt sich aber merkwürdig an, als wäre noch etwas...");
        await ƒS.Speech.tell(charaktere.bronte, " Drunter-");
        
        await ƒS.Sound.fade(sound.stellaScream, 0.8, 1, false);

        await ƒS.Character.hide(charaktere.bronte);
        await ƒS.Character.hide(charaktere.maire);
        await ƒS.Character.show(charaktere.bronte, charaktere.bronte.pose.shout, ƒS.positionPercent(charaktere.bronte.positionStandard.x, charaktere.bronte.positionStandard.y));
        await ƒS.Character.show(charaktere.maire, charaktere.maire.pose.fear, ƒS.positionPercent(charaktere.maire.positionStandard.x, charaktere.maire.positionStandard.y))
        await ƒS.update(0.4);

        await ƒS.Speech.tell(charaktere.bronte, " !!! Das kam vom Haus! Schnell Maire!");

        if (dataForSave.maireHurtHerselfInCabin) {

            await ƒS.Character.hide(charaktere.maire);
            await ƒS.Character.show(charaktere.maire, charaktere.maire.pose.fear, ƒS.positionPercent(charaktere.maire.positionStandard.x, charaktere.maire.positionStandard.y))
            await ƒS.update(0.4);
            await ƒS.Speech.tell(charaktere.maire, " Ich komme… mein Knöchel… Au… Au… Au… ");

        }
        await ƒS.Character.hide(charaktere.bronte);
        await ƒS.Character.hide(charaktere.maire);
        await ƒS.update(0.8);

        await ƒS.Sound.fade(sound.themeinfrontManorNight, 0, 0.5, true);

        return "SceneEightSaalonInterview";
    }
}