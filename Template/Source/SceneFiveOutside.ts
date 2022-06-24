namespace Template {
    export async function SceneFiveOutside(): ƒS.SceneReturn {

        //Alle Wahlmöglichkeiten in Szene 
        let choosePerson = {
            Grace: "Die Lady",
            Stella: "Die Nichte",
            Butler: "Der Butler",
            Alaistar: "Der Lord",
            Isaac: "Der Schwager"
        }

        let chooseWhatToDoInfrontGarden = {
            garden: "Spuren folgen",
            go: "Aufgeben"
        }

        await ƒS.Location.show(location.infrontOfManorNight);
        await ƒS.update(transistions.inToOut.duration, transistions.inToOut.alpha, transistions.inToOut.edge);

        await ƒS.Sound.fade(sound.themeinfrontManorNight, 0.1, 0.2, true);

        await ƒS.Character.show(charaktere.maire, charaktere.maire.pose.neutral, ƒS.positionPercent(charaktere.maire.positionStandard.x, charaktere.maire.positionStandard.y));
        await ƒS.Character.show(charaktere.bronte, charaktere.bronte.pose.happy, ƒS.positionPercent(charaktere.bronte.positionStandard.x, charaktere.bronte.positionStandard.y));
        await ƒS.update(0.8);

        if (dataForSave.mairePuked == true) {

            await ƒS.Character.hide(charaktere.maire);
            await ƒS.Character.show(charaktere.maire, charaktere.maire.pose.embarrassed, ƒS.positionPercent(charaktere.maire.positionStandard.x, charaktere.maire.positionStandard.y));
            await ƒS.update(0.4);

            await ƒS.Speech.tell(charaktere.maire, " Endlich frische Luft! Schafsmagen… Mich schüttelt es immer noch. ");
            await ƒS.Speech.tell(charaktere.bronte, " Arme Maire, das Essen hat sie wirklich mitgenommen.");
        }

        dataForSave.lookingInTheGardenForCluesFinished = true; 

        await ƒS.Character.hide(charaktere.maire);
        await ƒS.Character.hide(charaktere.bronte);
        await ƒS.Character.show(charaktere.maire, charaktere.maire.pose.neutral, ƒS.positionPercent(charaktere.maire.positionStandard.x, charaktere.maire.positionStandard.y));
        await ƒS.Character.show(charaktere.bronte, charaktere.bronte.pose.think, ƒS.positionPercent(charaktere.bronte.positionStandard.x, charaktere.bronte.positionStandard.y));
        await ƒS.update(0.4);

        await ƒS.Speech.tell(charaktere.bronte, " Also vorhin ist sie in Richtung des Gebüsches gelaufe.");

        if (dataForSave.foundRing == true) {

            await ƒS.Character.show(charaktere.bronte, charaktere.bronte.pose.think, ƒS.positionPercent(charaktere.bronte.positionStandard.x, charaktere.bronte.positionStandard.y));
            await ƒS.update(0.4);
            await ƒS.Speech.tell(charaktere.bronte, "Und ziemlich schnell, immerhin haben wir sie danach nicht mehr gesehen.");
            await ƒS.Character.show(charaktere.maire, charaktere.maire.pose.sad, ƒS.positionPercent(charaktere.maire.positionStandard.x, charaktere.maire.positionStandard.y));
            await ƒS.update(0.4);

            await ƒS.Speech.tell(charaktere.maire, " Mhm, hast du noch den Ring? ");
            await ƒS.Speech.tell(charaktere.bronte, " Klar hier…");

        } else {

            await ƒS.Character.hide(charaktere.bronte);
            await ƒS.Character.show(charaktere.bronte, charaktere.bronte.pose.shout, ƒS.positionPercent(charaktere.bronte.positionStandard.x, charaktere.bronte.positionStandard.y));
            await ƒS.update(0.4);

            await ƒS.Speech.tell(charaktere.bronte, "Also mal schauen, was dort ist. Mhm… oh! Was ist das? ");

            await ƒS.Sound.play(sound.goingThrouBushes, 1);

            await ƒS.Inventory.add(inventory.ring);
            await ƒS.Inventory.open();

            await ƒS.Speech.tell(charaktere.bronte, "Ein Siegelring? Was macht der dann hier? ");
        }


        await ƒS.Character.hide(charaktere.bronte);
        await ƒS.Character.show(charaktere.bronte, charaktere.bronte.pose.think, ƒS.positionPercent(charaktere.bronte.positionStandard.x, charaktere.bronte.positionStandard.y));
        await ƒS.update(0.4);

        await ƒS.Speech.tell(charaktere.bronte, " Er sieht durchaus edel aus. Ein wenig dreckig nur. Mit den Buchstaben O.R. soweit ich es erkennen kann. ");

        await ƒS.Character.hide(charaktere.maire);
        await ƒS.Character.show(charaktere.maire, charaktere.maire.pose.happy, ƒS.positionPercent(charaktere.maire.positionStandard.x, charaktere.maire.positionStandard.y));
        await ƒS.update(0.4);

        await ƒS.Speech.tell(charaktere.maire, " O und R…. oh! Wir kennen jemanden zu dem R. passen würde!");

        //todo: Punkte System 
        let userChoosePersonToRing = await ƒS.Menu.getInput(choosePerson, "basicChoice");
        switch (userChoosePersonToRing) {
            case choosePerson.Butler:

                await ƒS.Character.hide(charaktere.bronte);
                await ƒS.Character.show(charaktere.bronte, charaktere.bronte.pose.happy, ƒS.positionPercent(charaktere.bronte.positionStandard.x, charaktere.bronte.positionStandard.y));
                await ƒS.update(0.4);

                await ƒS.Speech.tell(charaktere.bronte, " Gute Schlussfolgerung… Der Butler heißt Remington. Aber ob der Vorname passt?");
                break;

            default:

                await ƒS.Character.hide(charaktere.maire);
                await ƒS.Character.show(charaktere.maire, charaktere.maire.pose.sad, ƒS.positionPercent(charaktere.maire.positionStandard.x, charaktere.maire.positionStandard.y));
                await ƒS.Character.hide(charaktere.bronte);
                await ƒS.Character.show(charaktere.bronte, charaktere.bronte.pose.sad, ƒS.positionPercent(charaktere.bronte.positionStandard.x, charaktere.bronte.positionStandard.y));
                await ƒS.update(0.4);

                await ƒS.Speech.tell(charaktere.bronte, " Ah! Äh… nein das passt ja gar nicht… ");

                await ƒS.Character.hide(charaktere.maire);
                await ƒS.Character.show(charaktere.maire, charaktere.maire.pose.happy, ƒS.positionPercent(charaktere.maire.positionStandard.x, charaktere.maire.positionStandard.y));
                await ƒS.Character.hide(charaktere.bronte);
                await ƒS.Character.show(charaktere.bronte, charaktere.bronte.pose.happy, ƒS.positionPercent(charaktere.bronte.positionStandard.x, charaktere.bronte.positionStandard.y));
                await ƒS.update(0.4);

                await ƒS.Speech.tell(charaktere.maire, " Aber der Butler passt! Es hat sich mit Remington vorgestellt!");
        }

        await ƒS.Character.hide(charaktere.maire);
        await ƒS.Character.show(charaktere.maire, charaktere.maire.pose.neutral, ƒS.positionPercent(charaktere.maire.positionStandard.x, charaktere.maire.positionStandard.y));
        await ƒS.update(0.4);

        await ƒS.Speech.tell(charaktere.maire, " Oh er hat vorhin sich auch so merkwürdig benommen. Wie er vor der Tür gelauert hat! Wie er uns hier draußen aufgelauert hat! Der ist bestimmt der Übeltäter. ");

        await ƒS.Character.hide(charaktere.bronte);
        await ƒS.Character.show(charaktere.bronte, charaktere.bronte.pose.think, ƒS.positionPercent(charaktere.bronte.positionStandard.x, charaktere.bronte.positionStandard.y));
        await ƒS.update(0.4);

        await ƒS.Speech.tell(charaktere.bronte, " Gute Theorie, aber noch ist ja nicht bewiesen, dass die Katze nicht einfach weggelaufen ist. Das würde ich zumindest auch tun wenn ich immer in einem Zimmer eingesperrt wäre. ");

        await ƒS.Character.hide(charaktere.maire);
        await ƒS.Character.show(charaktere.maire, charaktere.maire.pose.sad, ƒS.positionPercent(charaktere.maire.positionStandard.x, charaktere.maire.positionStandard.y));
        await ƒS.update(0.4);
        await ƒS.Speech.tell(charaktere.maire, " Mhm… Ein Fall wäre spannender. Aber so oder so hier ist die Katze nicht. Was machen wir jetzt?");

        let userChooseWhatToDoInfrontGarden = await ƒS.Menu.getInput(chooseWhatToDoInfrontGarden, "basicChoice");
        switch (userChooseWhatToDoInfrontGarden) {

            case chooseWhatToDoInfrontGarden.go:

                await ƒS.Character.hide(charaktere.bronte);
                await ƒS.Character.show(charaktere.bronte, charaktere.bronte.pose.happy, ƒS.positionPercent(charaktere.bronte.positionStandard.x, charaktere.bronte.positionStandard.y));
                await ƒS.update(0.4);

                await ƒS.Speech.tell(charaktere.bronte, " Weißt du was… lass einfach aufhören. Ich glaube das ist zu schwierig für uns. ");

                await ƒS.Character.hide(charaktere.maire);
                await ƒS.Character.show(charaktere.maire, charaktere.maire.pose.fear, ƒS.positionPercent(charaktere.maire.positionStandard.x, charaktere.maire.positionStandard.y));
                await ƒS.update(0.4);

                await ƒS.Speech.tell(charaktere.maire, " Was! Aber du bist Bronte! Die Meister Detektivin! ");

                await ƒS.Character.hide(charaktere.bronte);
                await ƒS.Character.show(charaktere.bronte, charaktere.bronte.pose.think, ƒS.positionPercent(charaktere.bronte.positionStandard.x, charaktere.bronte.positionStandard.y));
                await ƒS.update(0.4);

                await ƒS.Speech.tell(charaktere.bronte, " Ja ich weiß, war doch nur ein Witz ");

                await ƒS.Character.hide(charaktere.maire);
                await ƒS.Character.show(charaktere.maire, charaktere.maire.pose.neutral, ƒS.positionPercent(charaktere.maire.positionStandard.x, charaktere.maire.positionStandard.y));
                await ƒS.update(0.4);

                await ƒS.Speech.tell(charaktere.maire, " Mhm… witzig. ");
                await ƒS.Speech.tell(charaktere.bronte, " (Den Witz fand sie wohl nicht gut… sie sieht tatsächlich ziemlich genervt aus… ich sollte netter zu ihr sein.)");

            case chooseWhatToDoInfrontGarden.garden:

                await ƒS.Character.hide(charaktere.bronte);
                await ƒS.Character.show(charaktere.bronte, charaktere.bronte.pose.happy, ƒS.positionPercent(charaktere.bronte.positionStandard.x, charaktere.bronte.positionStandard.y));
                await ƒS.update(0.4);

                await ƒS.Speech.tell(charaktere.bronte, " Vielleicht sind hier ja Spuren. Mhm.. Ja… Mhm… Autsch! Blöde Dornen! Oh hier! Tatsache sie führen in den Garten. ");

                await ƒS.Character.hide(charaktere.maire);
                await ƒS.Character.show(charaktere.maire, charaktere.maire.pose.happy, ƒS.positionPercent(charaktere.maire.positionStandard.x, charaktere.maire.positionStandard.y));
                await ƒS.update(0.4);

                await ƒS.Speech.tell(charaktere.maire, " Hinterher!");
        }

        await ƒS.Character.hide(charaktere.maire);
        await ƒS.Character.hide(charaktere.bronte);
        await ƒS.update(0.8); 

        return "SceneSixGarden";
    }
}