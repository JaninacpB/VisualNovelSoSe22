namespace Template {
    export async function SceneFourSaalonDrama(): ƒS.SceneReturn {

        let chooseBeRespectfull = {
            //todo: Pointsystem
            yes: "Ja",
            no: "Nein"
        }

        await ƒS.Sound.fade(sound.themeSaloon, 0, 0.3);
        await ƒS.Sound.play(sound.dramaInSaloon, 0.1, true);


        await ƒS.Speech.tell(charaktere.bronte, " !!!!! ");
        await ƒS.Speech.tell(charaktere.grace, " Artemis! Jemand hat meine Artemis gestohlen!");
        await ƒS.Speech.tell(charaktere.maire, " Sie fällt! Oh jemand sollte sie- Fangen… Das gibt eine Beule. ");
        await ƒS.Speech.tell(charaktere.bronte, " Nein schau, ihr Kopf ist sanft auf einen der Kissen gelandet. Sie ist geübt. Mrs. Grace? Alles in Ordnung? ");
        await ƒS.Speech.tell(charaktere.grace, " Ich… oh… Nein! Meine Artemis wurde gestohlen! ");
        await ƒS.Speech.tell(charaktere.alaistar, " Gestohlen? Die Katze. Grace stell dich doch bitte nicht so an. Und rede deutlich! ");
        await ƒS.Speech.tell(charaktere.grace, " Bestimmt gestohlen! Ich war im Arbeitszimmer, wo sie immer ist, wenn Mrs. May-Porter sie nicht in den Garten lässt und dort war sie nicht! ");
        await ƒS.Speech.tell(charaktere.alaistar, " Aber Schwester. Das ist doch lächerlich. Sie wird hier irgendwo im Haus sein. Sieh doch wie viel Angst du der armen Stella einjagst! ");
        await ƒS.Speech.tell(charaktere.grace, " Nein! Sie wurde gestohlen! Ich weiß es einfach. ");
        await ƒS.Speech.tell(charaktere.bronte, " Entschuldigung Mr. Blackburn. Meine Begleitung und ich haben draußen bei der Ankunft tatsächlich eine Katze gesehen. Wenn es Ihnen nichts ausmacht, könnten wir kurz raus gehen und schauen, ob wir sie finden. ");
        await ƒS.Speech.tell(charaktere.grace, " Oh meine arme Artemis… Ganz alleine in dieser schrecklichen Welt! Was ist wenn sie irgend so einen Streuner trifft. Oh weh, die Arme zittert bestimmt vor Angst! ");
        await ƒS.Speech.tell(charaktere.isaac, " Kaum vorzustellen, warum sie weglaufen sollte… ");
        await ƒS.Speech.tell(charaktere.grace, " Bitte Miss Bronte! Helfen sie mir! Bitte. ");
        await ƒS.Speech.tell(charaktere.bronte, " Natürlich. Wenn wir sie gerade wirklich draußen gesehen haben, kann sie ja nicht weit sein. Maire und ich schauen es uns kurz an. ");
        await ƒS.Speech.tell(charaktere.alaistar, " Einen Moment noch. ");
        await ƒS.Speech.tell(charaktere.bronte, " Ja? ");
        await ƒS.Speech.tell(charaktere.alaistar, " Bitte denken sie daran, dass Sie sich immer noch auf einem alten und sehr Ehrenwerten Anwesen befinden. Verhalten Sie sich dementsprechend.");


        let beeingRespectfullDecision = await ƒS.Menu.getInput(chooseBeRespectfull, "basicChoice");
        //todo: point system (?)
        switch (beeingRespectfullDecision) {
            case chooseBeRespectfull.yes:
                await ƒS.Speech.tell(charaktere.bronte, "Natürlich. Meine Untersuchungen nehmen immer Rücksicht auf die Betroffenen. ");
                await ƒS.Speech.tell(charaktere.alaistar, " Danke.");
                break;

            case chooseBeRespectfull.no:
                await ƒS.Speech.tell(charaktere.bronte, "Dass ist nicht akzeptabel. Meine Untersuchungen werden so geführt, wie ich es für richtig halte!");
                await ƒS.Speech.tell(charaktere.alaistar, "Sie vergessen wohl, dass sie nur Gäste sind. Sollten Ihre „Untersuchungen“ unseren Frieden stören, werde ich sie auffordern zu gehen.");
                await ƒS.Speech.tell(charaktere.bronte, "Mhm…");
                break;
        }
        
        //todo: Gemüteleiste einführen
        await ƒS.Speech.tell(charaktere.maire, "Wir sollten wirklich vorsichtig sein nicht den guten Willen unserer Gastgeber zu stören. ");
        await ƒS.Speech.tell(charaktere.bronte, "Scheinbar… lass uns gehen.");
    }
}
