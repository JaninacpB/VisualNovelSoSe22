namespace Template {
    export async function SceneFourSaalonDrama(): ƒS.SceneReturn {

        let chooseBeRespectfull = {
            //todo: Pointsystem
            yes: "Ja",
            no: "Nein"
        }

        //todo am ende kann location einblenden weg
        await ƒS.Location.show(location.saalon);
        await ƒS.update(0.1);

        await ƒS.Sound.fade(sound.themeSaloon, 0, 0.3);
        await ƒS.Sound.play(sound.dramaInSaloon, 0.1, true);

        //todo: add hide für issac, bronte, maire

        await ƒS.Character.show(charaktere.maire, charaktere.maire.pose.fear, ƒS.positionPercent(charaktere.maire.positionStandard.x , charaktere.maire.positionStandard.y));
        await ƒS.Character.show(charaktere.isaac, charaktere.isaac.pose.sad, ƒS.positionPercent(charaktere.isaac.positionStandard.x , charaktere.isaac.positionStandard.y));
        await ƒS.Character.show(charaktere.bronte, charaktere.bronte.pose.shout, ƒS.positionPercent(charaktere.bronte.positionStandard.x , charaktere.bronte.positionStandard.y));
        await ƒS.update(0.4);

        //todo: scream

        document.getElementById('speechContent').classList.add('textEffectBig');
        await ƒS.Speech.tell(charaktere.bronte, " !!!!! ");
        
        await ƒS.Speech.tell(charaktere.grace, " Artemis!" );
        document.getElementById('speechContent').classList.remove('textEffectBig');

        await ƒS.Character.hide(charaktere.isaac);
        await ƒS.Character.hide(charaktere.bronte);
        await ƒS.Character.hide(charaktere.maire);
        await ƒS.Character.show(charaktere.grace, charaktere.grace.pose.sad, ƒS.positionPercent(charaktere.grace.positionStandard.x , charaktere.grace.positionStandard.y));
        await ƒS.Character.show(charaktere.bronte, charaktere.bronte.pose.think, ƒS.positionPercent(charaktere.bronte.positionStandard.x , charaktere.bronte.positionStandard.y));
        await ƒS.Character.show(charaktere.maire, charaktere.maire.pose.neutral, ƒS.positionPercent(charaktere.maire.positionStandard.x , charaktere.maire.positionStandard.y));

        await ƒS.update(0.8);

        await ƒS.Speech.tell(charaktere.grace, "Jemand hat meine Artemis gestohlen!");

        await ƒS.Character.hide(charaktere.bronte);
        await ƒS.Character.hide(charaktere.maire);
        await ƒS.Character.show(charaktere.maire, charaktere.maire.pose.fear, ƒS.positionPercent(charaktere.maire.positionStandard.x , charaktere.maire.positionStandard.y));
        await ƒS.Character.show(charaktere.bronte, charaktere.bronte.pose.shout, ƒS.positionPercent(charaktere.bronte.positionStandard.x , charaktere.bronte.positionStandard.y));
        await ƒS.update(0.4);

        await ƒS.Speech.tell(charaktere.maire, " Sie fällt! Oh jemand sollte sie- Fangen… ");



        await ƒS.Character.animate(charaktere.grace, charaktere.grace.pose.sad, fromMiddleDown(charaktere.grace.positionStandard.x , charaktere.grace.positionStandard.y, 100));

        await ƒS.Character.hide(charaktere.maire);
        await ƒS.Character.show(charaktere.maire, charaktere.maire.pose.neutral, ƒS.positionPercent(charaktere.maire.positionStandard.x , charaktere.maire.positionStandard.y));
        await ƒS.update(0.4);

        await ƒS.Speech.tell(charaktere.maire, " Das gibt eine Beule. ");

        await ƒS.Character.hide(charaktere.bronte);
        await ƒS.Character.show(charaktere.bronte, charaktere.bronte.pose.think, ƒS.positionPercent(charaktere.bronte.positionStandard.x , charaktere.bronte.positionStandard.y));
        await ƒS.update(0.4);

        await ƒS.Speech.tell(charaktere.bronte, " Nein schau, ihr Kopf ist sanft auf einen der Kissen gelandet. Sie ist geübt. Mrs. Grace? Alles in Ordnung? ");

        await ƒS.Character.show(charaktere.grace, charaktere.grace.pose.sad, ƒS.positionPercent(charaktere.grace.positionLeftMiddle.x , charaktere.grace.positionLeftMiddle.y));
        await ƒS.update(0.8);

        await ƒS.Speech.tell(charaktere.grace, " Ich… oh… Nein! Meine Artemis wurde gestohlen! ");

        await ƒS.Character.hide(charaktere.bronte);
        await ƒS.Character.show(charaktere.bronte, charaktere.bronte.pose.sad, ƒS.positionPercent(charaktere.bronte.positionStandard.x , charaktere.bronte.positionStandard.y));
        await ƒS.update(0.4);

        await ƒS.Character.show(charaktere.alaistar, charaktere.alaistar.pose.angry, ƒS.positionPercent(charaktere.alaistar.positionRightMiddle.x , charaktere.alaistar.positionRightMiddle.y));
        await ƒS.update(0.4);

        await ƒS.Speech.tell(charaktere.alaistar, " Gestohlen? Die Katze. Grace stell dich doch bitte nicht so an. Und rede deutlich! ");

        await ƒS.Character.hide(charaktere.alaistar);
        await ƒS.Character.show(charaktere.alaistar, charaktere.alaistar.pose.neutral, ƒS.positionPercent(charaktere.alaistar.positionRightMiddle.x , charaktere.alaistar.positionRightMiddle.y));
        await ƒS.update(0.4);

        await ƒS.Speech.tell(charaktere.grace, " Bestimmt gestohlen! Ich war im Arbeitszimmer, wo sie immer ist, wenn Mrs. May-Porter sie nicht in den Garten lässt und dort war sie nicht! ");

        await ƒS.Character.hide(charaktere.alaistar);
        await ƒS.Character.show(charaktere.alaistar, charaktere.alaistar.pose.angry, ƒS.positionPercent(charaktere.alaistar.positionRightMiddle.x , charaktere.alaistar.positionRightMiddle.y));
        await ƒS.update(0.4);

        await ƒS.Speech.tell(charaktere.alaistar, " Aber Schwester. Das ist doch lächerlich. Sie wird hier irgendwo im Haus sein. Sieh doch wie viel Angst du der armen Stella einjagst! ");
        await ƒS.Speech.tell(charaktere.grace, " Nein! Sie wurde gestohlen! Ich weiß es einfach. ");

        await ƒS.Character.hide(charaktere.alaistar);
        await ƒS.Character.show(charaktere.alaistar, charaktere.alaistar.pose.neutral, ƒS.positionPercent(charaktere.alaistar.positionRightMiddle.x , charaktere.alaistar.positionRightMiddle.y));
        await ƒS.Character.hide(charaktere.bronte);
        await ƒS.Character.show(charaktere.bronte, charaktere.bronte.pose.think, ƒS.positionPercent(charaktere.bronte.positionStandard.x , charaktere.bronte.positionStandard.y));
        await ƒS.update(0.4);

        await ƒS.Speech.tell(charaktere.bronte, " Entschuldigung Mr. Blackburn. Meine Begleitung und ich haben draußen bei der Ankunft tatsächlich eine Katze gesehen. ");
        await ƒS.Speech.tell(charaktere.bronte, " Wenn es Ihnen nichts ausmacht, könnten wir kurz raus gehen und schauen, ob wir sie finden.  ");
        await ƒS.Speech.tell(charaktere.grace, " Oh meine arme Artemis… Ganz alleine in dieser schrecklichen Welt! Was ist wenn sie irgend so einen Streuner trifft. Oh weh, die Arme zittert bestimmt vor Angst! ");
        
        await ƒS.Character.hide(charaktere.grace);
        await ƒS.Character.show(charaktere.isaac, charaktere.isaac.pose.neutral, ƒS.positionPercent(charaktere.isaac.positionLeftMiddle.x , charaktere.isaac.positionLeftMiddle.y));
        await ƒS.update(0.4);

        await ƒS.Speech.tell(charaktere.isaac, " Kaum vorzustellen, warum sie weglaufen sollte… ");

        await ƒS.Character.hide(charaktere.isaac);
        await ƒS.Character.show(charaktere.grace, charaktere.grace.pose.sad, ƒS.positionPercent(charaktere.grace.positionLeftMiddle.x , charaktere.grace.positionLeftMiddle.y));
        await ƒS.update(0.4);

        await ƒS.Speech.tell(charaktere.grace, " Bitte Miss Bronte! Helfen sie mir! Bitte. ");

        await ƒS.Character.hide(charaktere.bronte);
        await ƒS.Character.show(charaktere.bronte, charaktere.bronte.pose.think, ƒS.positionPercent(charaktere.bronte.positionStandard.x , charaktere.bronte.positionStandard.y));
        await ƒS.update(0.4);

        await ƒS.Speech.tell(charaktere.bronte, " Natürlich. Wenn wir sie gerade wirklich draußen gesehen haben, kann sie ja nicht weit sein. Maire und ich schauen es uns kurz an. ");
        await ƒS.Speech.tell(charaktere.alaistar, " Einen Moment noch. ");

        await ƒS.Character.hide(charaktere.bronte);
        await ƒS.Character.show(charaktere.bronte, charaktere.bronte.pose.happy, ƒS.positionPercent(charaktere.bronte.positionStandard.x , charaktere.bronte.positionStandard.y));
        await ƒS.update(0.4);

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

                await ƒS.Character.hide(charaktere.bronte);
                await ƒS.Character.show(charaktere.bronte, charaktere.bronte.pose.angry, ƒS.positionPercent(charaktere.bronte.positionStandard.x , charaktere.bronte.positionStandard.y));
                await ƒS.update(0.4);

                await ƒS.Speech.tell(charaktere.bronte, "Dass ist nicht akzeptabel. Meine Untersuchungen werden so geführt, wie ich es für richtig halte!");

                await ƒS.Character.hide(charaktere.alaistar);
                await ƒS.Character.show(charaktere.alaistar, charaktere.alaistar.pose.angry, ƒS.positionPercent(charaktere.alaistar.positionRightMiddle.x , charaktere.alaistar.positionRightMiddle.y));
                await ƒS.update(0.4);

                await ƒS.Speech.tell(charaktere.alaistar, "Sie vergessen wohl, dass sie nur Gäste sind. Sollten Ihre „Untersuchungen“ unseren Frieden stören, werde ich sie auffordern zu gehen.");
                await ƒS.Speech.tell(charaktere.bronte, "Mhm…");
                break;
        }

        await ƒS.Character.hide(charaktere.alaistar);
        await ƒS.Character.hide(charaktere.grace);
        await ƒS.update(0.4);
        //todo: Gemüteleiste einführen

        await ƒS.Character.hide(charaktere.maire);
        await ƒS.Character.show(charaktere.maire, charaktere.maire.pose.sad, ƒS.positionPercent(charaktere.maire.positionStandard.x , charaktere.maire.positionStandard.y));
        await ƒS.update(0.4);


        await ƒS.Speech.tell(charaktere.maire, "Wir sollten wirklich vorsichtig sein nicht den guten Willen unserer Gastgeber zu stören. ");
        await ƒS.Speech.tell(charaktere.bronte, "Scheinbar… lass uns gehen.");

        await ƒS.Character.hide(charaktere.maire);
        await ƒS.Character.hide(charaktere.bronte);
        await ƒS.update(0.8);

        return "SceneFiveOutside";
    }
}
