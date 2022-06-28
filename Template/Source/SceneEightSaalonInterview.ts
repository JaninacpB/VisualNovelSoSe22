namespace Artemis {
    export async function SceneEightSaalonInterview(): ƒS.SceneReturn {

        let chooseWhathappendToCat = {
            fellInWater: "Wasser gefallen",
            brokeIn: "Hütte eingebrochen",
            closedIn: "Hütte eingesperrt"
        }

        let chooseGiveCollar = {
            no: "Nein",
            yes: "Ja"
        }

        let chooseWhereIsCat = {
            catnapped: "Entführt",
            fleedThroughRoof: "Durch Dach entkommen"
        }

        let chooseWhatDoAfterExplainingCat = {
            stop: "Aufhören",
            continue: "Weitermachen"
        }

        await ƒS.Location.show(location.saalon);
        await ƒS.update(transistions.inToOut.duration, transistions.inToOut.alpha, transistions.inToOut.edge);

        await ƒS.Sound.fade(sound.saloonAfterScrem, 0.1, 0.2, true);
        await ƒS.update(0.4);

        await ƒS.Character.show(charaktere.alaistar, charaktere.alaistar.pose.neutral, ƒS.positionPercent(charaktere.alaistar.positionRightMiddle.x, charaktere.alaistar.positionRightMiddle.y));
        await ƒS.Character.show(charaktere.grace, charaktere.grace.pose.sad, ƒS.positionPercent(charaktere.grace.positionLeftMiddle.x, charaktere.grace.positionLeftMiddle.y));
        await ƒS.update(0.4);

        await ƒS.Character.show(charaktere.maire, charaktere.maire.pose.fear, ƒS.positionPercent(charaktere.maire.positionStandard.x, charaktere.maire.positionStandard.y));
        await ƒS.Character.show(charaktere.bronte, charaktere.bronte.pose.think, ƒS.positionPercent(charaktere.bronte.positionStandard.x, charaktere.bronte.positionStandard.y));
        await ƒS.update(0.8);

        await ƒS.Speech.tell(charaktere.alaistar, " Da kommen sie ja schon… ");
        await ƒS.Speech.tell(charaktere.bronte, " Was ist passiert? ");
        await ƒS.Speech.tell(charaktere.grace, " Ja uns geht es gut. Die gute Stella hat sich nur erschreckt. ");

        await ƒS.Character.hide(charaktere.alaistar);
        await ƒS.Character.hide(charaktere.grace);
        await ƒS.Character.hide(charaktere.bronte);
        await ƒS.Character.hide(charaktere.maire);
        await ƒS.Character.show(charaktere.stella, charaktere.stella.pose.sad, ƒS.positionPercent(charaktere.stella.positionMiddle.x, charaktere.stella.positionMiddle.y));
        await ƒS.update(0.4);

        await ƒS.Speech.tell(charaktere.stella, " … ");

        await ƒS.Character.hide(charaktere.stella);
        await ƒS.Character.show(charaktere.alaistar, charaktere.alaistar.pose.neutral, ƒS.positionPercent(charaktere.alaistar.positionRightMiddle.x, charaktere.alaistar.positionRightMiddle.y));
        await ƒS.Character.show(charaktere.grace, charaktere.grace.pose.sad, ƒS.positionPercent(charaktere.grace.positionLeftMiddle.x, charaktere.grace.positionLeftMiddle.y));
        await ƒS.Character.show(charaktere.maire, charaktere.maire.pose.fear, ƒS.positionPercent(charaktere.maire.positionStandard.x, charaktere.maire.positionStandard.y));
        await ƒS.Character.show(charaktere.bronte, charaktere.bronte.pose.think, ƒS.positionPercent(charaktere.bronte.positionStandard.x, charaktere.bronte.positionStandard.y));
        await ƒS.update(0.4);

        await ƒS.Speech.tell(charaktere.alaistar, " Sie hat wohl draußen einen Baum gesehen, der sie erschreckt hat oder so. Ein wenig hysterisch die Gute. ");

        await ƒS.Character.hide(charaktere.alaistar);
        await ƒS.Character.hide(charaktere.grace);
        await ƒS.Character.hide(charaktere.bronte);
        await ƒS.Character.hide(charaktere.maire);
        await ƒS.Character.show(charaktere.stella, charaktere.stella.pose.sad, ƒS.positionPercent(charaktere.stella.positionMiddle.x, charaktere.stella.positionMiddle.y));
        await ƒS.update(0.4);

        await ƒS.Speech.tell(charaktere.stella, " … ");

        await ƒS.Character.hide(charaktere.stella);
        await ƒS.Character.show(charaktere.alaistar, charaktere.alaistar.pose.neutral, ƒS.positionPercent(charaktere.alaistar.positionRightMiddle.x, charaktere.alaistar.positionRightMiddle.y));
        await ƒS.Character.show(charaktere.grace, charaktere.grace.pose.sad, ƒS.positionPercent(charaktere.grace.positionLeftMiddle.x, charaktere.grace.positionLeftMiddle.y));
        await ƒS.Character.show(charaktere.maire, charaktere.maire.pose.neutral, ƒS.positionPercent(charaktere.maire.positionStandard.x, charaktere.maire.positionStandard.y));
        await ƒS.Character.show(charaktere.bronte, charaktere.bronte.pose.sad, ƒS.positionPercent(charaktere.bronte.positionStandard.x, charaktere.bronte.positionStandard.y));
        await ƒS.update(0.4);

        await ƒS.Speech.tell(charaktere.alaistar, " Wie sind ihre „Ermittlungen“ vorangekommen. ");

        await ƒS.Character.hide(charaktere.bronte);
        await ƒS.Character.show(charaktere.bronte, charaktere.bronte.pose.think, ƒS.positionPercent(charaktere.bronte.positionStandard.x, charaktere.bronte.positionStandard.y));
        await ƒS.update(0.4);

        await ƒS.Speech.tell(charaktere.bronte, "Gut. Wir haben ein Hinweis auf den Verbleib der Katze gefunden. Sie ist in");

        let userChooseWhathappendToCat = await ƒS.Menu.getInput(chooseWhathappendToCat, "basicChoice");
        switch (userChooseWhathappendToCat) {
            case chooseWhathappendToCat.fellInWater:

                await ƒS.Speech.tell(charaktere.bronte, "Sie ist aufgrund der Dunkelheit vor dem Manor ins Wasser gefallen.");
                await wrongAssumptionBronteFirstChoice();
                await rightChoiceFirstChoice();

                break;

            case chooseWhathappendToCat.brokeIn:
                await ƒS.Speech.tell(charaktere.bronte, "Sie ist in die Gartenhütte eingebrochen!");
                await wrongAssumptionBronteFirstChoice();
                await rightChoiceFirstChoice();

                break;

            case chooseWhathappendToCat.closedIn:
                dataForSave.pointDetectiv += 1;
                await rightChoiceFirstChoice();
                break;

        }

        let userChooseGiveCollar = await ƒS.Menu.getInput(chooseGiveCollar, "basicChoice");
        switch (userChooseGiveCollar) {

            case chooseGiveCollar.yes:
            
                deleteInventory(inventory.collar.name); 

                await ƒS.Speech.tell(charaktere.bronte, "Natürlich. Hier");
                await ƒS.Character.hide(charaktere.grace);
                await ƒS.Character.show(charaktere.grace, charaktere.grace.pose.happy, ƒS.positionPercent(charaktere.grace.positionLeftMiddle.x, charaktere.grace.positionLeftMiddle.y));
                await ƒS.update(0.4);

                await ƒS.Character.hide(charaktere.bronte);
                await ƒS.Character.show(charaktere.bronte, charaktere.bronte.pose.think, ƒS.positionPercent(charaktere.bronte.positionStandard.x, charaktere.bronte.positionStandard.y));
                await ƒS.update(0.4);

                await ƒS.Speech.tell(charaktere.bronte, "(Oh, wie glücklich sie darüber ist. Merkwürdig.");

                break;

            case chooseGiveCollar.no:

                await ƒS.Character.hide(charaktere.grace);
                await ƒS.Character.show(charaktere.grace, charaktere.grace.pose.angry, ƒS.positionPercent(charaktere.grace.positionLeftMiddle.x, charaktere.grace.positionLeftMiddle.y));
                await ƒS.update(0.4);

                await ƒS.Speech.tell(charaktere.bronte, "Nein, es ist weiterhin Teil der Untersuchung");
                dataForSave.pointAngryGrace += 1;

                await ƒS.Speech.tell(charaktere.grace, " Ja, aber ich hätte es wirklich gerne zurück!");
                await ƒS.Speech.tell(charaktere.alaistar, " Grace jetzt stell dich nicht so an, du bekommst es bestimmt noch rechtzeitig zurück. ");

                await ƒS.Speech.tell(charaktere.grace, " ... ");

                break;

        }

        await ƒS.Character.hide(charaktere.grace);
        await ƒS.Character.hide(charaktere.alaistar);
        await ƒS.Character.show(charaktere.isaac, charaktere.isaac.pose.neutral, ƒS.positionPercent(charaktere.isaac.positionStandard.x, charaktere.isaac.positionStandard.y));
        await ƒS.update(0.4);

        await ƒS.Speech.tell(charaktere.isaac, "Aber wenn sie das Halsband gefunden haben, wo ist dann die Katze? ");

        await ƒS.Character.hide(charaktere.bronte);
        await ƒS.Character.show(charaktere.bronte, charaktere.bronte.pose.happy, ƒS.positionPercent(charaktere.bronte.positionStandard.x, charaktere.bronte.positionStandard.y));
        await ƒS.update(0.4);

        await ƒS.Speech.tell(charaktere.bronte, "Ganz einfach:");

        let userChooseWhereIsCat = await ƒS.Menu.getInput(chooseWhereIsCat, "basicChoice");
        switch (userChooseWhereIsCat) {
            case chooseWhereIsCat.catnapped:
                await ƒS.Speech.tell(charaktere.bronte, "Sie wurde entführt! ");

                await ƒS.Character.hide(charaktere.isaac);
                await ƒS.Character.show(charaktere.isaac, charaktere.isaac.pose.neutral, ƒS.positionPercent(charaktere.isaac.positionStandard.x, charaktere.isaac.positionStandard.y));
                await ƒS.update(0.4);

                await ƒS.Speech.tell(charaktere.isaac, "Meinten sie nicht gerade, sie wäre eingesperrt worden? Klingt nicht nach einer Entführung für mich. ");

                await ƒS.Character.hide(charaktere.bronte);
                await ƒS.Character.show(charaktere.bronte, charaktere.bronte.pose.sad, ƒS.positionPercent(charaktere.bronte.positionStandard.x, charaktere.bronte.positionStandard.y));
                await ƒS.update(0.4);

                await ƒS.Speech.tell(charaktere.bronte, " Oh äh… ich meinte...");

            //wichtig kein Break hier! soll anderen Dialog auslösen! 

            case chooseWhereIsCat.fleedThroughRoof:
                dataForSave.pointDetectiv += 1;
                await ƒS.Character.hide(charaktere.bronte);
                await ƒS.Character.show(charaktere.bronte, charaktere.bronte.pose.happy, ƒS.positionPercent(charaktere.bronte.positionStandard.x, charaktere.bronte.positionStandard.y));
                await ƒS.update(0.4);
                await ƒS.Speech.tell(charaktere.bronte, "Sie ist durch das Dach entkommen! Und dabei hat sie ihr Halsband verloren.");
                break;
        }

        await ƒS.Character.hide(charaktere.isaac);
        await ƒS.Character.show(charaktere.grace, charaktere.grace.pose.think, ƒS.positionPercent(charaktere.grace.positionMiddle.x, charaktere.grace.positionMiddle.y));
        await ƒS.update(0.4);

        //  dataForSave.pointDetectiv += 1; 

        //todo: Number correct maybe
        if (dataForSave.pointDetectiv < 2) {
            await ƒS.Speech.tell(charaktere.grace, "Mhm… Ihren anderen Fall haben sie eleganter gelöst… Sie scheinen heute etwas verwirrt zu sein.");
        }

        //todo: maire punkte prüfe
        if (dataForSave.pointAngryMaire > 2) {
            await ƒS.Speech.tell(charaktere.maire, " Sie hat einen Punkt… ");
        }

        await ƒS.Character.hide(charaktere.grace);
        await ƒS.Character.show(charaktere.grace, charaktere.grace.pose.laugh, ƒS.positionPercent(charaktere.grace.positionMiddle.x, charaktere.grace.positionMiddle.y));
        await ƒS.update(0.4);

        await ƒS.Speech.tell(charaktere.grace, " Aber ich denke sie haben Recht. Artemis wird bestimmt bald wieder auftauchen. Wir müssen einfach etwas vorsichtiger mit ihr sein. Danke für ihre Investigation. ");

        await ƒS.Character.hide(charaktere.grace);
        await ƒS.Character.show(charaktere.grace, charaktere.grace.pose.happy, ƒS.positionPercent(charaktere.grace.positionMiddle.x, charaktere.grace.positionMiddle.y));
        await ƒS.Character.hide(charaktere.bronte);
        await ƒS.Character.show(charaktere.bronte, charaktere.bronte.pose.shout, ƒS.positionPercent(charaktere.bronte.positionStandard.x, charaktere.bronte.positionStandard.y));
        await ƒS.update(0.4);

        await ƒS.Speech.tell(charaktere.bronte, " … Äh? Ich werde natürlich erst aufhören, wenn Artemis wieder sicher da ist. ");
        await ƒS.Speech.tell(charaktere.grace, " Oh, ich denke das ist nicht notwendig… ");

        await ƒS.Character.hide(charaktere.bronte);
        await ƒS.Character.hide(charaktere.maire);
        await ƒS.Character.show(charaktere.maire, charaktere.maire.pose.fear, ƒS.positionPercent(charaktere.maire.positionStandard.x, charaktere.maire.positionStandard.y));
        await ƒS.Character.show(charaktere.bronte, charaktere.bronte.pose.think, ƒS.positionPercent(charaktere.bronte.positionStandard.x, charaktere.bronte.positionStandard.y));
        await ƒS.update(0.4);

        await ƒS.Speech.tell(charaktere.bronte, " Aber… Sind sie sicher? ");

        await ƒS.Character.hide(charaktere.grace);
        await ƒS.Character.show(charaktere.grace, charaktere.grace.pose.laugh, ƒS.positionPercent(charaktere.grace.positionMiddle.x, charaktere.grace.positionMiddle.y));
        await ƒS.update(0.4);

        await ƒS.Speech.tell(charaktere.grace, " Ja natürlich. Ich meine sie ist nur eine Katze. Sie wird schon wissen was sie tut. Lassen sie uns den Abend dadurch nicht vermasseln. ");

        await ƒS.Character.hide(charaktere.grace);
        await ƒS.Character.hide(charaktere.maire);
        await ƒS.Character.show(charaktere.maire, charaktere.maire.pose.neutral, ƒS.positionPercent(charaktere.maire.positionStandard.x, charaktere.maire.positionStandard.y));
        await ƒS.Character.show(charaktere.grace, charaktere.grace.pose.happy, ƒS.positionPercent(charaktere.grace.positionMiddle.x, charaktere.grace.positionMiddle.y));
        await ƒS.update(0.4);

        await ƒS.Speech.tell(charaktere.bronte, " Wenn das ihr Wunsch ist. ");

        await ƒS.Character.hide(charaktere.maire);
        await ƒS.Character.show(charaktere.maire, charaktere.maire.pose.sad, ƒS.positionPercent(charaktere.maire.positionStandard.x, charaktere.maire.positionStandard.y));
        await ƒS.update(0.4);

        await ƒS.Speech.tell(charaktere.maire, " (… nur eine Katze? Sie hatte vorhin fast einen Nervenzusammenbruch.) ");
        await ƒS.Speech.tell(charaktere.grace, " Perfekt. Ich lasse mal den Nachtisch holen! ");

        await ƒS.Character.hide(charaktere.grace);
        await ƒS.update(0.8);

        await ƒS.Character.hide(charaktere.maire);
        await ƒS.Character.show(charaktere.maire, charaktere.maire.pose.neutral, ƒS.positionPercent(charaktere.maire.positionStandard.x, charaktere.maire.positionStandard.y));
        await ƒS.update(0.4);

        await ƒS.Speech.tell(charaktere.maire, " Das war… ");

        await ƒS.Speech.tell(charaktere.bronte, " Merkwürdig. ");

        await ƒS.Character.hide(charaktere.bronte);
        await ƒS.Character.show(charaktere.bronte, charaktere.bronte.pose.sad, ƒS.positionPercent(charaktere.bronte.positionStandard.x, charaktere.bronte.positionStandard.y));
        await ƒS.update(0.4);

        await ƒS.Speech.tell(charaktere.maire, " Und wie. ");

        await ƒS.Character.hide(charaktere.bronte);
        await ƒS.Character.show(charaktere.bronte, charaktere.bronte.pose.think, ƒS.positionPercent(charaktere.bronte.positionStandard.x, charaktere.bronte.positionStandard.y));
        await ƒS.update(0.4);

        await ƒS.Speech.tell(charaktere.bronte, " Irgendwas stimmt hier doch nicht… Die Katze wurde eingesperrt aber Lady Grace scheint gar nicht daran interessiert zu sein.");
        await ƒS.Speech.tell(charaktere.bronte, " Oder um das Wohlbehagen von Artemis, obwohl sie vorhin so besorgt um sie war. ");

        await ƒS.Speech.tell(charaktere.maire, " Mhm… und sie will nicht, dass wir weiter investigieren. Was machen wir jetzt?");

        let userChooseWhatDoAfterExplainingCat = await ƒS.Menu.getInput(chooseWhatDoAfterExplainingCat, "BasicChoice");
        switch (userChooseWhatDoAfterExplainingCat) {
            case chooseWhatDoAfterExplainingCat.stop:

                await ƒS.Character.hide(charaktere.bronte);
                await ƒS.Character.show(charaktere.bronte, charaktere.bronte.pose.happy, ƒS.positionPercent(charaktere.bronte.positionStandard.x, charaktere.bronte.positionStandard.y));
                await ƒS.update(0.4);

                await ƒS.Speech.tell(charaktere.bronte, " Wir sollten aufhören. ");

                await ƒS.Character.hide(charaktere.maire);
                await ƒS.Character.show(charaktere.maire, charaktere.maire.pose.fear, ƒS.positionPercent(charaktere.maire.positionStandard.x, charaktere.maire.positionStandard.y));
                await ƒS.update(0.4);

                await ƒS.Speech.tell(charaktere.maire, " WAS!? Das kann nicht dein Ernst sein! ");

                await ƒS.Character.hide(charaktere.bronte);
                await ƒS.Character.show(charaktere.bronte, charaktere.bronte.pose.think, ƒS.positionPercent(charaktere.bronte.positionStandard.x, charaktere.bronte.positionStandard.y));
                await ƒS.update(0.4);

                await ƒS.Speech.tell(charaktere.bronte, " Mhm… vielleicht lieber nicht. ");

                await ƒS.Character.hide(charaktere.maire);
                await ƒS.Character.show(charaktere.maire, charaktere.maire.pose.neutral, ƒS.positionPercent(charaktere.maire.positionStandard.x, charaktere.maire.positionStandard.y));
                await ƒS.update(0.4);

                await ƒS.Speech.tell(charaktere.maire, " Wir sollten auf jeden Fall weitermachen!");
                break;

            case chooseWhatDoAfterExplainingCat.continue:
                await ƒS.Character.hide(charaktere.bronte);
                await ƒS.Character.show(charaktere.bronte, charaktere.bronte.pose.happy, ƒS.positionPercent(charaktere.bronte.positionStandard.x, charaktere.bronte.positionStandard.y));
                await ƒS.update(0.4);

                await ƒS.Speech.tell(charaktere.bronte, " Wir sollten weiter investigieren. Nur ein wenig vorsichtiger. ");
                await ƒS.Speech.tell(charaktere.maire, " Wir können damit anfangen die Gäste zu befragen und uns ein wenig umsehen! ");

                await ƒS.Character.hide(charaktere.bronte);
                await ƒS.Character.show(charaktere.bronte, charaktere.bronte.pose.laugh, ƒS.positionPercent(charaktere.bronte.positionStandard.x, charaktere.bronte.positionStandard.y));
                await ƒS.update(0.4);

                await ƒS.Speech.tell(charaktere.bronte, " Gute Idee! Wir müssen nur vorsichtig sein. Lass uns anfangen mit:");
                break;
        }

        dataForSave.stellaScreamFinished = true;

        return "SceneEightBInterviews";





        //Fehlerdialog Auswahl chooseWhathappendToCat
        async function wrongAssumptionBronteFirstChoice(): Promise<void> {
            await ƒS.Character.hide(charaktere.alaistar);
            await ƒS.Character.hide(charaktere.bronte);
            await ƒS.Character.show(charaktere.bronte, charaktere.bronte.pose.sad, ƒS.positionPercent(charaktere.bronte.positionStandard.x, charaktere.bronte.positionStandard.y));
            await ƒS.Character.show(charaktere.alaistar, charaktere.alaistar.pose.angry, ƒS.positionPercent(charaktere.alaistar.positionRightMiddle.x, charaktere.alaistar.positionRightMiddle.y));
            await ƒS.update(0.4);

            await ƒS.Speech.tell(charaktere.alaistar, " … Das ist ein Witz, richtig? ");

            await ƒS.Character.hide(charaktere.maire);
            await ƒS.Character.show(charaktere.maire, charaktere.maire.pose.embarrassed, ƒS.positionPercent(charaktere.maire.positionStandard.x, charaktere.maire.positionStandard.y));
            await ƒS.update(0.4);

            await ƒS.Speech.tell(charaktere.maire, " Oh ja… Bronte erzähl was wirklich passiert ist du Scherzkeks.");
        }

        async function rightChoiceFirstChoice(): Promise<void> {
            await ƒS.Character.hide(charaktere.alaistar);
            await ƒS.Character.hide(charaktere.bronte);
            await ƒS.Character.hide(charaktere.maire);
            await ƒS.Character.show(charaktere.maire, charaktere.maire.pose.neutral, ƒS.positionPercent(charaktere.maire.positionStandard.x, charaktere.maire.positionStandard.y));
            await ƒS.Character.show(charaktere.bronte, charaktere.bronte.pose.happy, ƒS.positionPercent(charaktere.bronte.positionStandard.x, charaktere.bronte.positionStandard.y));
            await ƒS.Character.show(charaktere.alaistar, charaktere.alaistar.pose.neutral, ƒS.positionPercent(charaktere.alaistar.positionRightMiddle.x, charaktere.alaistar.positionRightMiddle.y));
            await ƒS.update(0.4);

            await ƒS.Speech.tell(charaktere.bronte, "Es sieht ganz so aus als hätte jemand die in die Hütte eingesperrt. Wir haben die Säule weggeschoben, aber in der Hütte war nur noch das Halsband. ");

            await ƒS.Character.hide(charaktere.grace);
            await ƒS.Character.show(charaktere.grace, charaktere.grace.pose.happy, ƒS.positionPercent(charaktere.grace.positionLeftMiddle.x, charaktere.grace.positionLeftMiddle.y));

            await ƒS.Speech.tell(charaktere.grace, " Ooooh... kann ich es wiederhaben?");
        }

    }
}