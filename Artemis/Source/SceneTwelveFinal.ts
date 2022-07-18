namespace Artemis {
    export async function SceneTwelveFinal(): ƒS.SceneReturn {

        let chooseFinalChoice = {
            infrontOfOdette: "Vor Odette stellen",
            attack: "Angreifen",
            nothing: "Nichts"
        }

        let chooseIfGiveTestament = {
            yes: "Ja",
            no: "Nein"
        }

        if(dataForSave.pointAngryMaire = 5){
            localStorage.setItem('cat', JSON.stringify(true));

        }

        await ƒS.Sound.fade(sound.study, 0, 1);

        ƒS.Sound.fade(sound.final, 0.7, 1, true);

        await ƒS.Character.show(charaktere.alaistar, charaktere.alaistar.pose.evil, ƒS.positionPercent( charaktere.alaistar.positionMiddle.x, charaktere.alaistar.positionMiddle.y));
        await ƒS.update(2);  

        await ƒS.Speech.tell(charaktere.alaistar, " Schwester. ");
        await ƒS.Speech.tell(charaktere.odette, " !!! ");
        await ƒS.Speech.tell(charaktere.alaistar, " Miss Bronte, Grace würde gerne etwas mit Ihnen besprechen. ");

        await ƒS.Character.hide(charaktere.bronte);
        await ƒS.Character.show(charaktere.bronte, charaktere.bronte.pose.sad, ƒS.positionPercent(charaktere.bronte.positionStandard.x, charaktere.bronte.positionStandard.y));

        await ƒS.Character.hide(charaktere.odette);
        await ƒS.Character.show(charaktere.odette, charaktere.odette.pose.sad, ƒS.positionPercent(charaktere.odette.positionStandard.x, charaktere.odette.positionStandard.y))
        await ƒS.update(0.4);  

        await ƒS.Speech.tell(charaktere.bronte, " Ich denke ich bleiben lieber hier. Es muss eine ganzschöne Überraschung sein ihre Schwester zu sehen. ");

        await ƒS.Character.hide(charaktere.alaistar);
        await ƒS.Character.show(charaktere.alaistar, charaktere.alaistar.pose.angry, ƒS.positionPercent( charaktere.alaistar.positionMiddle.x, charaktere.alaistar.positionMiddle.y));
        await ƒS.update(0.4);  

        await ƒS.Speech.tell(charaktere.alaistar, " Gehen Sie. ");

        await ƒS.Character.hide(charaktere.bronte);
        await ƒS.Character.show(charaktere.bronte, charaktere.bronte.pose.angry, ƒS.positionPercent(charaktere.bronte.positionStandard.x, charaktere.bronte.positionStandard.y))
        await ƒS.update(0.4);  

        await ƒS.Speech.tell(charaktere.bronte, " Nein. ");
        await ƒS.Speech.tell(charaktere.odette, " Alaistar bitte, es gibt keinen Grund- ");

        await ƒS.Character.hide(charaktere.bronte);
        await ƒS.Character.show(charaktere.bronte, charaktere.bronte.pose.shout, ƒS.positionPercent(charaktere.bronte.positionStandard.x, charaktere.bronte.positionStandard.y))
        await ƒS.update(0.4);  

        await ƒS.Speech.tell(charaktere.bronte, " (Er will etwas aus seiner Jacke ziehen. Was soll ich tun?)");

        let userchooseFinalChoice = await ƒS.Menu.getInput(chooseFinalChoice, "basicChoice");

        await ƒS.Character.hide(charaktere.bronte);
        await ƒS.Character.show(charaktere.bronte, charaktere.bronte.pose.shout, ƒS.positionPercent(charaktere.bronte.positionStandard.x, charaktere.bronte.positionStandard.y))
        await ƒS.update(0.4);

        await ƒS.Character.hide(charaktere.bronte);
        await ƒS.Character.hide(charaktere.odette);
        await ƒS.Character.hide(charaktere.alaistar);
        await ƒS.update(2);

        await ƒS.Location.show(location.infrontOfManorNight);

        await ƒS.Character.show(charaktere.maire, charaktere.maire.pose.fear, ƒS.positionPercent(charaktere.maire.positionStandard.x, charaktere.maire.positionStandard.y));
        await ƒS.Character.show(charaktere.isaac, charaktere.isaac.pose.cry, ƒS.positionPercent(charaktere.isaac.positionStandard.x, charaktere.isaac.positionStandard.y))
        await ƒS.update(0.1);


        if (!dataForSave.tookGun) {

            ƒS.Sound.fade(sound.gunShoot, 1, 1, false);

            await ƒS.Speech.tell(charaktere.maire, "Ein Schuss!  ");

        } else {

            ƒS.Sound.fade(sound.stellaScream, 0.8, 1, false);

            await ƒS.Speech.tell(charaktere.maire, "Ein Schrei!  ");
        }

        await ƒS.Character.hide(charaktere.isaac);
        await ƒS.Character.hide(charaktere.maire);
        await ƒS.Location.show(location.studyroom);
        await ƒS.update(0.2);

        if (userchooseFinalChoice == chooseFinalChoice.infrontOfOdette && dataForSave.tookGun) {

            await ƒS.Character.hide(charaktere.bronte);
            await ƒS.Character.show(charaktere.bronte, charaktere.bronte.pose.shout, ƒS.positionPercent(50, charaktere.bronte.positionStandard.y))

            await ƒS.Character.hide(charaktere.alaistar);
            await ƒS.Character.show(charaktere.alaistar, charaktere.alaistar.pose.confussed, ƒS.positionPercent(15, charaktere.alaistar.positionMiddle.y));

            await ƒS.Character.hide(charaktere.odette);
            await ƒS.Character.show(charaktere.odette, charaktere.odette.pose.scream, ƒS.positionPercent(85, charaktere.odette.positionStandard.y))
            await ƒS.update(0.4);

            await ƒS.Speech.tell(charaktere.bronte, " NEIN! ");

            await ƒS.Character.hide(charaktere.alaistar);
            await ƒS.Character.show(charaktere.alaistar, charaktere.alaistar.pose.emotionalDrained, ƒS.positionPercent(15, charaktere.alaistar.positionMiddle.y));
            await ƒS.update(0.4);

            await ƒS.Speech.tell(charaktere.alaistar, " Wo… nein… arg! ");

            ƒS.Sound.fade(sound.final, 0, 4, true);

            ƒS.Sound.fade(sound.finalGood, 0.8, 4, true);

            await ƒS.Character.hide(charaktere.bronte);
            await ƒS.Character.show(charaktere.bronte, charaktere.bronte.pose.happy, ƒS.positionPercent(50, charaktere.bronte.positionStandard.y))
            await ƒS.update(0.4);

            await ƒS.Speech.tell(charaktere.bronte, " Suchen sie dies? Ein sehr schöner Revolver. Auch wenn ich die Kugeln aus Sicherheit entfern habe. ");

            await ƒS.Character.hide(charaktere.alaistar);
            await ƒS.Character.show(charaktere.alaistar, charaktere.alaistar.pose.angry, ƒS.positionPercent(15, charaktere.alaistar.positionMiddle.y));
            await ƒS.update(0.4);

            await ƒS.Speech.tell(charaktere.alaistar, " Nein! ");

            await ƒS.Character.hide(charaktere.odette);
            await ƒS.Character.hide(charaktere.bronte);
            await ƒS.Character.hide(charaktere.alaistar);
            await ƒS.update(0.4);

            await ƒS.Character.show(charaktere.maire, charaktere.maire.pose.fear, ƒS.positionPercent(20, charaktere.maire.positionStandard.y));
            await ƒS.Character.show(charaktere.isaac, charaktere.isaac.pose.neutral, ƒS.positionPercent(charaktere.isaac.positionStandard.x, charaktere.isaac.positionStandard.y))
            await ƒS.update(1);

            await ƒS.Speech.tell(charaktere.maire, " Bronte! Was… ");

            await ƒS.Character.hide(charaktere.isaac);
            await ƒS.Character.show(charaktere.isaac, charaktere.isaac.pose.cry, ƒS.positionPercent(charaktere.isaac.positionStandard.x, charaktere.isaac.positionStandard.y))
            await ƒS.update(0.4);

            await ƒS.Speech.tell(charaktere.isaac, " !!! ");

            await ƒS.Character.hide(charaktere.isaac);
            await ƒS.Character.show(charaktere.isaac, charaktere.isaac.pose.crying, ƒS.positionPercent(charaktere.isaac.positionStandard.x, charaktere.isaac.positionStandard.y))
            await ƒS.update(0.4);

            await ƒS.Speech.tell(charaktere.isaac, " Wie… Oh Götter. ");

            await ƒS.Character.hide(charaktere.isaac);
            await ƒS.Character.hide(charaktere.maire);
            await ƒS.Character.show(charaktere.odette, charaktere.odette.pose.gleefull, ƒS.positionPercent(charaktere.odette.positionMiddle.x, charaktere.odette.positionStandard.y))
            await ƒS.update(0.4);

            await ƒS.Speech.tell(charaktere.odette, " Isaac!");

            await ƒS.Character.hide(charaktere.odette);
            await ƒS.update(1);

            await ƒS.Character.show(charaktere.bronte, charaktere.bronte.pose.happy, ƒS.positionPercent(charaktere.bronte.positionStandard.x, charaktere.bronte.positionStandard.y))
            await ƒS.Character.show(charaktere.maire, charaktere.maire.pose.neutral, ƒS.positionPercent(charaktere.maire.positionStandard.x, charaktere.maire.positionStandard.y));
            await ƒS.update(0.4);

            await ƒS.Speech.tell(charaktere.bronte, " Maire, wenn du so lieb wärst die Polizei zu rufen. Ich denke sie werden eine schöne neue Wohnung für Mr. Blackburn besorgen. ");
            if (!dataForSave.gotTestament) {

                await ƒS.Character.hide(charaktere.bronte);
                await ƒS.Character.show(charaktere.bronte, charaktere.bronte.pose.laugh, ƒS.positionPercent(charaktere.bronte.positionStandard.x, charaktere.bronte.positionStandard.y))
                await ƒS.update(0.4);

                await ƒS.Speech.tell(charaktere.bronte, "Oh und ich denke wenn ich mein Dietrichset hole, wird auch der Safe nicht allzu lange verschlossen bleiben. ");

                await ƒS.Character.hide(charaktere.bronte);
                await ƒS.Character.show(charaktere.bronte, charaktere.bronte.pose.think, ƒS.positionPercent(charaktere.bronte.positionStandard.x, charaktere.bronte.positionStandard.y))
                await ƒS.update(0.4);

                await ƒS.Speech.tell(charaktere.bronte, "Und wenn ich mich nicht ganz irre wird diese Wohnung dann an die jüngste Tochter gehen.");
            } else {

                await ƒS.Character.hide(charaktere.bronte);
                await ƒS.Character.show(charaktere.bronte, charaktere.bronte.pose.happy, ƒS.positionPercent(charaktere.bronte.positionStandard.x, charaktere.bronte.positionStandard.y))
                await ƒS.update(0.4);

                await ƒS.Speech.tell(charaktere.bronte, " Immerhin wird diese Wohnung nun wohl an die jüngste Tochter gehen. ");
                await ƒS.Speech.tell(charaktere.bronte, " Ich habe es hier schwarz auf weiß. Das echte Testamant von Lady Blackburn. ");
                await ƒS.Speech.tell(charaktere.bronte, "Sie teilt ihr Geld mit all ihren Kindern, nicht nur Alaistar Blackburn. ");
            }

            await ƒS.Character.hide(charaktere.maire);
            await ƒS.Character.show(charaktere.maire, charaktere.maire.pose.embarrassed, ƒS.positionPercent(charaktere.maire.positionStandard.x, charaktere.maire.positionStandard.y));
            await ƒS.update(0.4);

            await ƒS.Speech.tell(charaktere.maire, " Ich… oh...klar, die Polizei… ");

            await ƒS.Character.hide(charaktere.maire);
            await ƒS.Character.show(charaktere.maire, charaktere.maire.pose.happy, ƒS.positionPercent(charaktere.maire.positionStandard.x, charaktere.maire.positionStandard.y));
            await ƒS.update(0.4);

            await ƒS.Speech.tell(charaktere.maire, " Was für ein Abend. ");

            await ƒS.Character.hide(charaktere.maire);
            await ƒS.Character.show(charaktere.maire, charaktere.maire.pose.laugh, ƒS.positionPercent(charaktere.maire.positionStandard.x, charaktere.maire.positionStandard.y));
            await ƒS.update(0.4);

            await ƒS.Speech.tell(charaktere.maire, " Oh! Haha ");

            await ƒS.Character.hide(charaktere.bronte);
            await ƒS.Character.show(charaktere.bronte, charaktere.bronte.pose.think, ƒS.positionPercent(charaktere.bronte.positionStandard.x, charaktere.bronte.positionStandard.y))
            await ƒS.update(0.4);

            await ƒS.Speech.tell(charaktere.bronte, " Maire? ");

            await ƒS.Character.hide(charaktere.maire);
            await ƒS.Character.show(charaktere.maire, charaktere.maire.pose.happy, ƒS.positionPercent(charaktere.maire.positionStandard.x, charaktere.maire.positionStandard.y));
            await ƒS.update(0.4);

            await ƒS.Speech.tell(charaktere.maire, " Schau wenn ich gefunden habe! ");

            await ƒS.Character.hide(charaktere.bronte);
            await ƒS.Character.show(charaktere.bronte, charaktere.bronte.pose.laugh, ƒS.positionPercent(charaktere.bronte.positionStandard.x, charaktere.bronte.positionStandard.y))
            await ƒS.update(0.4);

            ƒS.Sound.play(sound.catMeow, 1);

            await ƒS.Speech.tell("Artemis", " Miau. ");
            await ƒS.Speech.tell(charaktere.bronte, " Damit hätte sich wohl auch das letzte Mysterium gelöst.");

            ƒS.Sound.fade(sound.finalGood, 0, 1, true);

            await ƒS.Character.hide(charaktere.maire);
            await ƒS.Character.hide(charaktere.bronte);
            await ƒS.Location.show(location.black);
            await ƒS.update(3);

            if (dataForSave.pointAngryMaire <= 1) {
                return "ExtraSceneBronteMaire";
            }
            return "EndingOneAllSurvive";

        } else if (userchooseFinalChoice == chooseFinalChoice.infrontOfOdette) {

            await ƒS.Character.show(charaktere.bronte, charaktere.bronte.pose.shout, ƒS.positionPercent(charaktere.bronte.positionMiddle.x, charaktere.bronte.positionStandard.y))
            await ƒS.update(0.4);

            await ƒS.Speech.tell(charaktere.bronte, " Oh… oh weh…");

            await ƒS.Character.hide(charaktere.bronte);
            await ƒS.update(4);

            await ƒS.Character.show(charaktere.maire, charaktere.maire.pose.fear, ƒS.positionPercent(20, charaktere.maire.positionStandard.y));
            await ƒS.Character.show(charaktere.isaac, charaktere.isaac.pose.cry, ƒS.positionPercent(charaktere.isaac.positionStandard.x, charaktere.isaac.positionStandard.y))
            await ƒS.update(1);

            await ƒS.Speech.tell(charaktere.maire, " NEIN! ");

            await ƒS.Character.hide(charaktere.maire);
            await ƒS.Character.show(charaktere.maire, charaktere.maire.pose.shooked, ƒS.positionPercent(20, charaktere.maire.positionStandard.y));
            await ƒS.update(0.4);

            await ƒS.Speech.tell(charaktere.maire, " Bronte bitte… nein! Bitte schau mich an! ");

            await ƒS.Character.hide(charaktere.maire);
            await ƒS.Character.hide(charaktere.isaac);
            await ƒS.Character.show(charaktere.isaac, charaktere.isaac.pose.sad, ƒS.positionPercent(charaktere.isaac.positionStandard.x, charaktere.isaac.positionStandard.y))
            await ƒS.Character.show(charaktere.alaistar, charaktere.alaistar.pose.confussed, ƒS.positionPercent(15, charaktere.alaistar.positionMiddle.y));
            await ƒS.update(0.4);

            await ƒS.Speech.tell(charaktere.alaistar, " Nein… ich… ich wollte nicht sie treffen ich…  ");

            await ƒS.Character.hide(charaktere.alaistar);
            await ƒS.update(1);

            await ƒS.Speech.tell(charaktere.isaac, " Alaistar! ");

            await ƒS.Character.hide(charaktere.isaac);
            await ƒS.update(1);


            await ƒS.Character.show(charaktere.maire, charaktere.maire.pose.shooked, ƒS.positionPercent(20, charaktere.maire.positionStandard.y));
            await ƒS.Character.show(charaktere.odette, charaktere.odette.pose.scream, ƒS.positionPercent(85, charaktere.odette.positionStandard.y))
            await ƒS.update(0.4);

            await ƒS.Speech.tell(charaktere.odette, " Oh Götter. Miss Bronte es tut mir so Leid… ich. ");

            ƒS.Sound.fade(sound.final, 0, 4);

            ƒS.Sound.play(sound.finalSad, 0.8, true);

            await ƒS.Character.hide(charaktere.odette);
            await ƒS.Character.show(charaktere.odette, charaktere.odette.pose.scream, ƒS.positionPercent(85, charaktere.odette.positionStandard.y))
            await ƒS.update(0.4);

            await ƒS.Speech.tell(charaktere.bronte, " Ist… okay… ");

            await ƒS.Character.hide(charaktere.maire);
            await ƒS.Character.show(charaktere.maire, charaktere.maire.pose.cry, ƒS.positionPercent(20, charaktere.maire.positionStandard.y));
            await ƒS.update(0.4);

            await ƒS.Speech.tell(charaktere.maire, " Bitte nicht. Wir brauchen einen Arzt! Sofort! ");

            await ƒS.Character.hide(charaktere.odette);
            await ƒS.Character.show(charaktere.odette, charaktere.odette.pose.sad, ƒS.positionPercent(85, charaktere.odette.positionStandard.y))
            await ƒS.update(0.4);

            await ƒS.Speech.tell(charaktere.odette, " Ich… Ich versuche jemand zu holen, aber… Hier ist so viel Blut. ");

            await ƒS.Character.hide(charaktere.maire);
            await ƒS.Character.show(charaktere.maire, charaktere.maire.pose.sad, ƒS.positionPercent(20, charaktere.maire.positionStandard.y));
            await ƒS.update(0.4);

            await ƒS.Speech.tell(charaktere.maire, " Nein… beeile dich! Geh schon!");

            await ƒS.Character.hide(charaktere.maire);
            await ƒS.Character.show(charaktere.maire, charaktere.maire.pose.fear, ƒS.positionPercent(20, charaktere.maire.positionStandard.y));
            await ƒS.update(0.4);

            document.getElementById('speechContent').classList.add('textEffectBig');
            await ƒS.Speech.tell(charaktere.maire, "GEH!");


            await ƒS.Character.hide(charaktere.odette);
            await ƒS.Character.show(charaktere.odette, charaktere.odette.pose.scream, ƒS.positionPercent(85, charaktere.odette.positionStandard.y))

            await ƒS.Character.hide(charaktere.maire);
            await ƒS.Character.show(charaktere.maire, charaktere.maire.pose.shooked, ƒS.positionPercent(20, charaktere.maire.positionStandard.y));
            await ƒS.update(0.4);

            await ƒS.Character.hide(charaktere.odette);
            await ƒS.update(2);

            document.getElementById('speechContent').classList.remove('textEffectBig');

            await ƒS.Speech.tell(charaktere.bronte, " Maire… *hust*… Ich… liebe… dich… ");

            await ƒS.Character.hide(charaktere.maire);
            await ƒS.Character.show(charaktere.maire, charaktere.maire.pose.cry, ƒS.positionPercent(20, charaktere.maire.positionStandard.y));
            await ƒS.update(0.4);

            await ƒS.Speech.tell(charaktere.maire, " Ich weiß. Ich weiß doch Bronte. Ich liebe dich auch. Bitte halte durch!");

            ƒS.Sound.fade(sound.finalSad, 0, 4);

            await ƒS.Character.hide(charaktere.maire);
            await ƒS.Location.show(location.black);
            await ƒS.update(3);

            return "EndingTwoBronteDead";

        } else if (userchooseFinalChoice == chooseFinalChoice.attack && dataForSave.tookGun) {

            await ƒS.Character.show(charaktere.alaistar, charaktere.alaistar.pose.confussed, ƒS.positionPercent(charaktere.alaistar.positionMiddle.x, charaktere.alaistar.positionMiddle.y));
            await ƒS.Character.show(charaktere.bronte, charaktere.bronte.pose.angry, ƒS.positionPercent(charaktere.bronte.positionStandard.x, charaktere.bronte.positionStandard.y))
            await ƒS.update(0.4);

            await ƒS.Speech.tell(charaktere.bronte, " ARG! ");

            await ƒS.Character.hide(charaktere.alaistar);
            await ƒS.Character.show(charaktere.alaistar, charaktere.alaistar.pose.evil, ƒS.positionPercent(charaktere.alaistar.positionMiddle.x, charaktere.alaistar.positionMiddle.y));
            await ƒS.update(0.4);

            await ƒS.Speech.tell(charaktere.alaistar, " Hmpf! NEIN! ARG… FASS MICH NICHT AN. ");

            await ƒS.Speech.tell(charaktere.bronte, " HIYEA! ");

            await ƒS.Character.hide(charaktere.alaistar);
            await ƒS.Character.animate(charaktere.alaistar, charaktere.alaistar.pose.confussed, fromMiddleDown(charaktere.alaistar.positionStandard.x, charaktere.alaistar.positionStandard.y, 150));

            await ƒS.Character.hide(charaktere.bronte);
            await ƒS.update(0.4);

            await ƒS.Character.show(charaktere.maire, charaktere.maire.pose.fear, ƒS.positionPercent(20, charaktere.maire.positionStandard.y));
            await ƒS.Character.show(charaktere.isaac, charaktere.isaac.pose.cry, ƒS.positionPercent(charaktere.isaac.positionStandard.x, charaktere.isaac.positionStandard.y))
            await ƒS.update(1);

            await ƒS.Speech.tell(charaktere.maire, " Bronte was ist… Oh ");

            ƒS.Sound.fade(sound.final, 0, 4);

            ƒS.Sound.play(sound.finalGood, 0.8, true);

            await ƒS.Speech.tell(charaktere.maire, " Alaistar er liegt auf den Boden. Ist er bewusstlos? ");

            await ƒS.Character.hide(charaktere.maire);
            await ƒS.Character.hide(charaktere.isaac);

            await ƒS.Character.show(charaktere.bronte, charaktere.bronte.pose.angry, ƒS.positionPercent(charaktere.bronte.positionMiddle.x, charaktere.bronte.positionMiddle.y))
            await ƒS.update(0.4);

            await ƒS.Speech.tell(charaktere.bronte, " Er hätte es besser wissen sollen. ");

            await ƒS.Character.hide(charaktere.bronte);
            await ƒS.Character.show(charaktere.odette, charaktere.odette.pose.scream, ƒS.positionPercent(75, charaktere.odette.positionStandard.y));
            await ƒS.Character.show(charaktere.isaac, charaktere.isaac.pose.cry, ƒS.positionPercent(charaktere.isaac.positionLeftMiddle.x, charaktere.isaac.positionLeftMiddle.y))
            await ƒS.update(0.4);

            await ƒS.Speech.tell(charaktere.isaac, " Ich war- ");
            await ƒS.Speech.tell(charaktere.isaac, " !!! ");

            await ƒS.Character.hide(charaktere.odette);
            await ƒS.Character.hide(charaktere.isaac);
            await ƒS.Character.show(charaktere.odette, charaktere.odette.pose.gleefull, ƒS.positionPercent(75, charaktere.odette.positionStandard.y));
            await ƒS.Character.show(charaktere.isaac, charaktere.isaac.pose.crying, ƒS.positionPercent(charaktere.isaac.positionLeftMiddle.x, charaktere.isaac.positionLeftMiddle.y))
            await ƒS.update(0.4);

            await ƒS.Speech.tell(charaktere.isaac, " Odette? ");

            await ƒS.Character.hide(charaktere.odette);
            await ƒS.Character.hide(charaktere.isaac);
            await ƒS.Character.show(charaktere.odette, charaktere.odette.pose.happy, ƒS.positionPercent(75, charaktere.odette.positionStandard.y));
            await ƒS.Character.show(charaktere.isaac, charaktere.isaac.pose.happy, ƒS.positionPercent(charaktere.isaac.positionLeftMiddle.x, charaktere.isaac.positionLeftMiddle.y))
            await ƒS.update(0.4);

            await ƒS.Speech.tell(charaktere.odette, " Isaac… ich… oh Götter. ");

            await ƒS.Character.hide(charaktere.odette);
            await ƒS.Character.hide(charaktere.isaac);
            await ƒS.update(0.4);

            await ƒS.Character.hide(charaktere.maire);
            await ƒS.Character.show(charaktere.maire, charaktere.maire.pose.fear, ƒS.positionPercent(charaktere.maire.positionStandard.x, charaktere.maire.positionStandard.y));
            await ƒS.Character.hide(charaktere.bronte);
            await ƒS.Character.show(charaktere.bronte, charaktere.bronte.pose.happy, ƒS.positionPercent(charaktere.bronte.positionStandard.x, charaktere.bronte.positionStandard.y))
            await ƒS.update(0.4);

            await ƒS.Speech.tell(charaktere.maire, " Ich verstehe nicht… Wie… ");

            await ƒS.Character.hide(charaktere.maire);
            await ƒS.Character.show(charaktere.maire, charaktere.maire.pose.neutral, ƒS.positionPercent(charaktere.maire.positionStandard.x, charaktere.maire.positionStandard.y));
            await ƒS.Character.hide(charaktere.bronte);
            await ƒS.Character.show(charaktere.bronte, charaktere.bronte.pose.laugh, ƒS.positionPercent(charaktere.bronte.positionStandard.x, charaktere.bronte.positionStandard.y))
            await ƒS.update(0.4);

            await ƒS.Speech.tell(charaktere.bronte, " Ich erkläre dir gleich alles. Lassen wir den beiden etwas Zeit für sich. Und wir sollten ohnehin die Polizei rufen. ");

            if (!dataForSave.gotTestament) {

                await ƒS.Character.hide(charaktere.bronte);
                await ƒS.Character.show(charaktere.bronte, charaktere.bronte.pose.think, ƒS.positionPercent(charaktere.bronte.positionStandard.x, charaktere.bronte.positionStandard.y))
                await ƒS.update(0.4);

                await ƒS.Speech.tell(charaktere.bronte, "Oh und ich denke ich sollte mein Dietrichset hole, wir müssen einen Safe knacken. ");
                await ƒS.Speech.tell(charaktere.bronte, "Und wenn ich mich nicht ganz irre wird diese Wohnung dann an die jüngste Tochter gehen.");
            } else {

                await ƒS.Character.hide(charaktere.bronte);
                await ƒS.Character.show(charaktere.bronte, charaktere.bronte.pose.think, ƒS.positionPercent(charaktere.bronte.positionStandard.x, charaktere.bronte.positionStandard.y))
                await ƒS.update(0.4);

                await ƒS.Speech.tell(charaktere.bronte, " Ich denke wir können das Haustelefon nutzen. ");
                await ƒS.Speech.tell(charaktere.bronte, " Die neue Inhaberhin wird wohl nichts dagegen habe. Schau- ");

                await ƒS.Character.hide(charaktere.bronte);
                await ƒS.Character.show(charaktere.bronte, charaktere.bronte.pose.laugh, ƒS.positionPercent(charaktere.bronte.positionStandard.x, charaktere.bronte.positionStandard.y))
                await ƒS.update(0.4);

                await ƒS.Speech.tell(charaktere.bronte, " Ich habe es hier schwarz auf weiß. Das echte Testamant von Lady Blackburn. ");
                await ƒS.Speech.tell(charaktere.bronte, " Sie teilt ihr Geld mit all ihren Kindern, nicht nur Alaistar Blackburn. ");

                await ƒS.Character.hide(charaktere.bronte);
                await ƒS.Character.show(charaktere.bronte, charaktere.bronte.pose.angry, ƒS.positionPercent(charaktere.bronte.positionStandard.x, charaktere.bronte.positionStandard.y))
                await ƒS.update(0.4);

                await ƒS.Speech.tell(charaktere.bronte, "Dass schien ihm gar nicht zu gefallen.");
            }

            await ƒS.Character.hide(charaktere.maire);
            await ƒS.Character.show(charaktere.maire, charaktere.maire.pose.happy, ƒS.positionPercent(charaktere.maire.positionStandard.x, charaktere.maire.positionStandard.y));
            await ƒS.Character.hide(charaktere.bronte);
            await ƒS.Character.show(charaktere.bronte, charaktere.bronte.pose.happy, ƒS.positionPercent(charaktere.bronte.positionStandard.x, charaktere.bronte.positionStandard.y))
            await ƒS.update(0.4);

            await ƒS.Speech.tell(charaktere.maire, " Ich bin nur froh, dass es dir gut geht. Ich hatte kurz Angst- ");
            await ƒS.Speech.tell(charaktere.bronte, " Mir geht es gut und schau! ");

            await ƒS.Character.hide(charaktere.maire);
            await ƒS.Character.show(charaktere.maire, charaktere.maire.pose.fear, ƒS.positionPercent(charaktere.maire.positionStandard.x, charaktere.maire.positionStandard.y));
            await ƒS.Character.hide(charaktere.bronte);
            await ƒS.Character.show(charaktere.bronte, charaktere.bronte.pose.laugh, ƒS.positionPercent(charaktere.bronte.positionStandard.x, charaktere.bronte.positionStandard.y))
            await ƒS.update(0.4);

            ƒS.Sound.play(sound.catMeow, 1);

            await ƒS.Speech.tell("Artemis", " Miau ");

            await ƒS.Character.hide(charaktere.maire);
            await ƒS.Character.show(charaktere.maire, charaktere.maire.pose.happy, ƒS.positionPercent(charaktere.maire.positionStandard.x, charaktere.maire.positionStandard.y));
            await ƒS.update(0.4);

            await ƒS.Speech.tell(charaktere.bronte, " Gerade rechtzeitig zurückgekommen.");

            ƒS.Sound.fade(sound.finalGood, 0, 4);

            if (dataForSave.pointAngryMaire <= 1) {

                await ƒS.Character.hide(charaktere.maire);
                await ƒS.Character.hide(charaktere.bronte);
                await ƒS.update(4);
                return "ExtraSceneBronteMaire";
            }

            await ƒS.Character.hide(charaktere.maire);
            await ƒS.Character.hide(charaktere.bronte);
            await ƒS.update(4);

            await ƒS.Location.show(location.black);
            await ƒS.update(4);

            return "EndingOneAllSurvive";

        } else if (userchooseFinalChoice == chooseFinalChoice.attack) {

            await ƒS.Character.show(charaktere.alaistar, charaktere.alaistar.pose.evil, ƒS.positionPercent(charaktere.alaistar.positionMiddle.x, charaktere.alaistar.positionMiddle.y));
            await ƒS.Character.show(charaktere.bronte, charaktere.bronte.pose.sad, ƒS.positionPercent(charaktere.bronte.positionStandard.x, charaktere.bronte.positionStandard.y))
            await ƒS.update(0.4);

            await ƒS.Speech.tell(charaktere.bronte, "Nein!");

            await ƒS.Character.hide(charaktere.alaistar);
            await ƒS.Character.show(charaktere.alaistar, charaktere.alaistar.pose.angry, ƒS.positionPercent(charaktere.alaistar.positionMiddle.x, charaktere.alaistar.positionMiddle.y));
            await ƒS.update(0.4);

            await ƒS.Speech.tell(charaktere.alaistar, " BLEIB WEG!  ");

            ƒS.Sound.play(sound.gunShoot, 1, false);

            await ƒS.Character.hide(charaktere.alaistar);
            await ƒS.Character.show(charaktere.alaistar, charaktere.alaistar.pose.emotionalDrained, ƒS.positionPercent(charaktere.alaistar.positionMiddle.x, charaktere.alaistar.positionMiddle.y));
            await ƒS.update(0.4);

            await ƒS.Character.hide(charaktere.bronte);
            await ƒS.Character.show(charaktere.bronte, charaktere.bronte.pose.shout, ƒS.positionPercent(charaktere.bronte.positionStandard.x, charaktere.bronte.positionStandard.y))
            await ƒS.update(0.4);

            await ƒS.Speech.tell(charaktere.bronte, " AH! ");

            await ƒS.Character.hide(charaktere.bronte);
            await ƒS.update(4);

            await ƒS.Character.hide(charaktere.alaistar);
            await ƒS.Character.show(charaktere.maire, charaktere.maire.pose.shooked, ƒS.positionPercent(20, charaktere.maire.positionStandard.y));
            await ƒS.Character.show(charaktere.isaac, charaktere.isaac.pose.cry, ƒS.positionPercent(charaktere.isaac.positionStandard.x, charaktere.isaac.positionStandard.y))
            await ƒS.update(1);

            await ƒS.Speech.tell(charaktere.maire, " Bronte?! NEIN! ");

            await ƒS.Character.hide(charaktere.maire);
            await ƒS.Character.hide(charaktere.isaac);
            await ƒS.Character.show(charaktere.isaac, charaktere.isaac.pose.sad, ƒS.positionPercent(charaktere.isaac.positionStandard.x, charaktere.isaac.positionStandard.y))
            await ƒS.Character.show(charaktere.alaistar, charaktere.alaistar.pose.confussed, ƒS.positionPercent(15, charaktere.alaistar.positionMiddle.y));
            await ƒS.update(0.4);

            await ƒS.Speech.tell(charaktere.alaistar, " Wer.. Arg! Nein… sie hätte weg bleiben sollen! ");

            await ƒS.Character.hide(charaktere.alaistar);
            await ƒS.update(1);

            await ƒS.Speech.tell(charaktere.isaac, " Was ist… Oh Götter. ");
            await ƒS.Speech.tell(charaktere.isaac, " Alaistar! Bleib!");

            await ƒS.Character.hide(charaktere.isaac);
            await ƒS.update(1);

            await ƒS.Character.show(charaktere.maire, charaktere.maire.pose.shooked, ƒS.positionPercent(20, charaktere.maire.positionStandard.y));
            await ƒS.Character.show(charaktere.odette, charaktere.odette.pose.scream, ƒS.positionPercent(85, charaktere.odette.positionStandard.y))
            await ƒS.update(0.4);

            await ƒS.Speech.tell(charaktere.odette, " Oh Götter. Miss Bronte es tut mir so Leid… ich. ");

            ƒS.Sound.fade(sound.final, 0, 4);

            ƒS.Sound.play(sound.finalSad, 0.8, true);

            await ƒS.Character.hide(charaktere.odette);
            await ƒS.Character.show(charaktere.odette, charaktere.odette.pose.scream, ƒS.positionPercent(85, charaktere.odette.positionStandard.y))
            await ƒS.update(0.4);

            await ƒS.Speech.tell(charaktere.bronte, " Ist… okay… ");

            await ƒS.Character.hide(charaktere.maire);
            await ƒS.Character.show(charaktere.maire, charaktere.maire.pose.cry, ƒS.positionPercent(20, charaktere.maire.positionStandard.y));
            await ƒS.update(0.4);

            await ƒS.Speech.tell(charaktere.maire, " Bitte nicht. Wir brauchen einen Arzt! Sofort! ");

            await ƒS.Character.hide(charaktere.odette);
            await ƒS.Character.show(charaktere.odette, charaktere.odette.pose.sad, ƒS.positionPercent(85, charaktere.odette.positionStandard.y))
            await ƒS.update(0.4);

            await ƒS.Speech.tell(charaktere.odette, " Ich… Ich versuche jemand zu holen, aber… Hier ist so viel Blut. ");

            await ƒS.Character.hide(charaktere.maire);
            await ƒS.Character.show(charaktere.maire, charaktere.maire.pose.sad, ƒS.positionPercent(20, charaktere.maire.positionStandard.y));
            await ƒS.update(0.4);

            await ƒS.Speech.tell(charaktere.maire, " Nein… beeile dich! Geh schon!");

            await ƒS.Character.hide(charaktere.maire);
            await ƒS.Character.show(charaktere.maire, charaktere.maire.pose.fear, ƒS.positionPercent(20, charaktere.maire.positionStandard.y));
            await ƒS.update(0.4);

            document.getElementById('speechContent').classList.add('textEffectBig');
            await ƒS.Speech.tell(charaktere.maire, "GEH!");


            await ƒS.Character.hide(charaktere.odette);
            await ƒS.Character.show(charaktere.odette, charaktere.odette.pose.scream, ƒS.positionPercent(85, charaktere.odette.positionStandard.y))

            await ƒS.Character.hide(charaktere.maire);
            await ƒS.Character.show(charaktere.maire, charaktere.maire.pose.shooked, ƒS.positionPercent(20, charaktere.maire.positionStandard.y));
            await ƒS.update(0.4);

            await ƒS.Character.hide(charaktere.odette);
            await ƒS.update(2);

            document.getElementById('speechContent').classList.remove('textEffectBig');

            await ƒS.Speech.tell(charaktere.bronte, " Maire… *hust*… Ich… liebe… dich… ");

            await ƒS.Character.hide(charaktere.maire);
            await ƒS.Character.show(charaktere.maire, charaktere.maire.pose.cry, ƒS.positionPercent(20, charaktere.maire.positionStandard.y));
            await ƒS.update(0.4);

            await ƒS.Speech.tell(charaktere.maire, " Ich weiß. Ich weiß doch Bronte. Ich liebe dich auch. Bitte halte durch!");

            ƒS.Sound.fade(sound.finalSad, 0, 4);

            await ƒS.Character.hide(charaktere.maire);
            await ƒS.Location.show(location.black);
            await ƒS.update(3);

            return "EndingTwoBronteDead";

        } else if (userchooseFinalChoice == chooseFinalChoice.nothing && dataForSave.tookGun) {

            await ƒS.Character.show(charaktere.alaistar, charaktere.alaistar.pose.evil, ƒS.positionPercent(charaktere.alaistar.positionMiddle.x, charaktere.alaistar.positionMiddle.y));
            await ƒS.Character.show(charaktere.bronte, charaktere.bronte.pose.shout, ƒS.positionPercent(charaktere.bronte.positionStandard.x, charaktere.bronte.positionStandard.y));
            await ƒS.Character.show(charaktere.odette, charaktere.odette.pose.scream, ƒS.positionPercent(charaktere.odette.positionStandard.x, charaktere.odette.positionStandard.y))
            await ƒS.update(0.4);

            await ƒS.Speech.tell(charaktere.alaistar, " Auf Wiedersehen ");
            await ƒS.Speech.tell(charaktere.odette, " AH! ");

            await ƒS.Character.hide(charaktere.alaistar); 
            await ƒS.Character.show(charaktere.alaistar, charaktere.alaistar.pose.confussed, ƒS.positionPercent(charaktere.alaistar.positionMiddle.x, charaktere.alaistar.positionMiddle.y));
            await ƒS.update(0.4);

            await ƒS.Speech.tell(charaktere.alaistar, " Was… wo… ");

            await ƒS.Character.hide(charaktere.bronte);
            await ƒS.Character.show(charaktere.bronte, charaktere.bronte.pose.happy, ƒS.positionPercent(charaktere.bronte.positionStandard.x, charaktere.bronte.positionStandard.y))
            await ƒS.update(0.4);

            await ƒS.Speech.tell(charaktere.bronte, " Suchen sie dies? Ein sehr schöner Revolver. Auch wenn ich die Kugeln aus Sicherheit entfern habe. ");

            await ƒS.Character.hide(charaktere.alaistar);
            await ƒS.Character.show(charaktere.alaistar, charaktere.alaistar.pose.angry, ƒS.positionPercent(charaktere.alaistar.positionMiddle.x, charaktere.alaistar.positionMiddle.y));
            await ƒS.update(0.4);

            await ƒS.Speech.tell(charaktere.alaistar, " Nein! ");

            ƒS.Sound.fade(sound.final, 0, 2);
            ƒS.Sound.play(sound.finalGood, 1); 

            await ƒS.Character.hide(charaktere.odette);
            await ƒS.Character.hide(charaktere.bronte);
            await ƒS.Character.hide(charaktere.alaistar);
            await ƒS.update(0.4);

            await ƒS.Character.show(charaktere.maire, charaktere.maire.pose.fear, ƒS.positionPercent(20, charaktere.maire.positionStandard.y));
            await ƒS.Character.show(charaktere.isaac, charaktere.isaac.pose.neutral, ƒS.positionPercent(charaktere.isaac.positionStandard.x, charaktere.isaac.positionStandard.y))
            await ƒS.update(1);

            await ƒS.Speech.tell(charaktere.maire, " Bronte!? Was ist los?");

            await ƒS.Character.hide(charaktere.isaac);
            await ƒS.Character.show(charaktere.isaac, charaktere.isaac.pose.cry, ƒS.positionPercent(charaktere.isaac.positionStandard.x, charaktere.isaac.positionStandard.y))
            await ƒS.update(0.4);

            await ƒS.Speech.tell(charaktere.isaac, " !!! ");

            await ƒS.Character.hide(charaktere.isaac);
            await ƒS.Character.show(charaktere.isaac, charaktere.isaac.pose.crying, ƒS.positionPercent(charaktere.isaac.positionStandard.x, charaktere.isaac.positionStandard.y))
            await ƒS.update(0.4);

            await ƒS.Speech.tell(charaktere.isaac, " Wie… Oh Götter. ");

            await ƒS.Character.hide(charaktere.isaac);
            await ƒS.Character.hide(charaktere.maire);
            await ƒS.Character.show(charaktere.odette, charaktere.odette.pose.gleefull, ƒS.positionPercent(charaktere.odette.positionMiddle.x, charaktere.odette.positionStandard.y))
            await ƒS.update(0.4);

            await ƒS.Speech.tell(charaktere.odette, " Isaac!");

            await ƒS.Character.hide(charaktere.odette);
            await ƒS.update(1);

            await ƒS.Character.show(charaktere.bronte, charaktere.bronte.pose.happy, ƒS.positionPercent(charaktere.bronte.positionStandard.x, charaktere.bronte.positionStandard.y))
            await ƒS.Character.show(charaktere.maire, charaktere.maire.pose.neutral, ƒS.positionPercent(charaktere.maire.positionStandard.x, charaktere.maire.positionStandard.y));
            await ƒS.update(0.4);

            await ƒS.Speech.tell(charaktere.bronte, " Maire, wenn du so lieb wärst die Polizei zu rufen. Ich denke sie werden eine schöne neue Wohnung für Mr. Blackburn besorgen. ");
            if (!dataForSave.gotTestament) {

                await ƒS.Character.hide(charaktere.bronte);
                await ƒS.Character.show(charaktere.bronte, charaktere.bronte.pose.laugh, ƒS.positionPercent(charaktere.bronte.positionStandard.x, charaktere.bronte.positionStandard.y))
                await ƒS.update(0.4);

                await ƒS.Speech.tell(charaktere.bronte, "Oh und ich denke wenn ich mein Dietrichset hole, wird auch der Safe nicht allzu lange verschlossen bleiben. ");

                await ƒS.Character.hide(charaktere.bronte);
                await ƒS.Character.show(charaktere.bronte, charaktere.bronte.pose.think, ƒS.positionPercent(charaktere.bronte.positionStandard.x, charaktere.bronte.positionStandard.y))
                await ƒS.update(0.4);

                await ƒS.Speech.tell(charaktere.bronte, "Und wenn ich mich nicht ganz irre wird diese Wohnung dann an die jüngste Tochter gehen.");
            } else {

                await ƒS.Character.hide(charaktere.bronte);
                await ƒS.Character.show(charaktere.bronte, charaktere.bronte.pose.happy, ƒS.positionPercent(charaktere.bronte.positionStandard.x, charaktere.bronte.positionStandard.y))
                await ƒS.update(0.4);

                await ƒS.Speech.tell(charaktere.bronte, " Immerhin wird diese Wohnung nun wohl an die jüngste Tochter gehen. ");
                await ƒS.Speech.tell(charaktere.bronte, " Ich habe es hier schwarz auf weiß. Das echte Testamant von Lady Blackburn. ");
                await ƒS.Speech.tell(charaktere.bronte, "Sie teilt ihr Geld mit all ihren Kindern, nicht nur Alaistar Blackburn. ");
            }

            await ƒS.Character.hide(charaktere.maire);
            await ƒS.Character.show(charaktere.maire, charaktere.maire.pose.embarrassed, ƒS.positionPercent(charaktere.maire.positionStandard.x, charaktere.maire.positionStandard.y));
            await ƒS.update(0.4);

            await ƒS.Speech.tell(charaktere.maire, " Ich… oh...klar, die Polizei… ");

            await ƒS.Character.hide(charaktere.maire);
            await ƒS.Character.show(charaktere.maire, charaktere.maire.pose.happy, ƒS.positionPercent(charaktere.maire.positionStandard.x, charaktere.maire.positionStandard.y));
            await ƒS.update(0.4);

            await ƒS.Speech.tell(charaktere.maire, " Was für ein Abend. ");

            await ƒS.Character.hide(charaktere.maire);
            await ƒS.Character.show(charaktere.maire, charaktere.maire.pose.laugh, ƒS.positionPercent(charaktere.maire.positionStandard.x, charaktere.maire.positionStandard.y));
            await ƒS.update(0.4);

            await ƒS.Speech.tell(charaktere.maire, " Oh! Haha ");

            await ƒS.Character.hide(charaktere.bronte);
            await ƒS.Character.show(charaktere.bronte, charaktere.bronte.pose.think, ƒS.positionPercent(charaktere.bronte.positionStandard.x, charaktere.bronte.positionStandard.y))
            await ƒS.update(0.4);

            await ƒS.Speech.tell(charaktere.bronte, " Maire? ");

            await ƒS.Character.hide(charaktere.maire);
            await ƒS.Character.show(charaktere.maire, charaktere.maire.pose.happy, ƒS.positionPercent(charaktere.maire.positionStandard.x, charaktere.maire.positionStandard.y));
            await ƒS.update(0.4);

            await ƒS.Speech.tell(charaktere.maire, " Schau wenn ich gefunden habe! ");

            await ƒS.Character.hide(charaktere.bronte);
            await ƒS.Character.show(charaktere.bronte, charaktere.bronte.pose.laugh, ƒS.positionPercent(charaktere.bronte.positionStandard.x, charaktere.bronte.positionStandard.y))
            await ƒS.update(0.4);

            ƒS.Sound.play(sound.catMeow, 1);

            await ƒS.Speech.tell("Artemis", " Miau. ");
            await ƒS.Speech.tell(charaktere.bronte, " Damit hätte sich wohl auch das letzte Mysterium gelöst.");

            ƒS.Sound.fade(sound.finalGood, 0, 1, true);

            await ƒS.Character.hide(charaktere.maire);
            await ƒS.Character.hide(charaktere.bronte);
            await ƒS.Location.show(location.black);
            await ƒS.update(3);

            if (dataForSave.pointAngryMaire <= 1) {
                return "ExtraSceneBronteMaire";
            }
            return "EndingOneAllSurvive";

        } else if (userchooseFinalChoice == chooseFinalChoice.nothing) {

            // await ƒS.Character.show(charaktere.alaistar, charaktere.alaistar.pose.evil, ƒS.positionPercent(charaktere.alaistar.positionMiddle.x, charaktere.alaistar.positionMiddle.y));
            // await ƒS.Character.show(charaktere.bronte, charaktere.bronte.pose.shout, ƒS.positionPercent(charaktere.bronte.positionStandard.x, charaktere.bronte.positionStandard.y));
            // await ƒS.Character.show(charaktere.odette, charaktere.odette.pose.scream, ƒS.positionPercent(charaktere.odette.positionStandard.x, charaktere.odette.positionStandard.y))
            // await ƒS.update(0.4);

            // ƒS.Sound.play(sound.gunShoot, 1, false);

            // await ƒS.Speech.tell(charaktere.odette, " AH!  ");
            // await ƒS.Speech.tell(charaktere.odette, " a… oh… ");

            // await ƒS.Character.hide(charaktere.odette);
            // await ƒS.update(4);

            // await ƒS.Character.hide(charaktere.bronte);
            // await ƒS.Character.show(charaktere.bronte, charaktere.bronte.pose.sad, ƒS.positionPercent(charaktere.bronte.positionStandard.x, charaktere.bronte.positionStandard.y));
            // await ƒS.update(0.4);

            // await ƒS.Speech.tell(charaktere.bronte, " NEIN! ");

            // await ƒS.Character.hide(charaktere.bronte);
            // await ƒS.Character.hide(charaktere.alaistar);
            // await ƒS.update(0.4);

            // await ƒS.Character.show(charaktere.maire, charaktere.maire.pose.fear, ƒS.positionPercent(20, charaktere.maire.positionStandard.y));
            // await ƒS.Character.show(charaktere.isaac, charaktere.isaac.pose.neutral, ƒS.positionPercent(charaktere.isaac.positionStandard.x, charaktere.isaac.positionStandard.y))
            // await ƒS.update(1);

            // await ƒS.Character.hide(charaktere.maire);
            // await ƒS.Character.show(charaktere.maire, charaktere.maire.pose.shooked, ƒS.positionPercent(20, charaktere.maire.positionStandard.y));
            // await ƒS.update(0.4);

            // await ƒS.Speech.tell(charaktere.maire, " Bronte! Was wo- Wer? ");

            // await ƒS.Character.hide(charaktere.isaac);
            // await ƒS.Character.show(charaktere.isaac, charaktere.isaac.pose.cry, ƒS.positionPercent(charaktere.isaac.positionStandard.x, charaktere.isaac.positionStandard.y))
            // await ƒS.update(0.4);

            // await ƒS.Speech.tell(charaktere.isaac, " !!! ");
            // await ƒS.Speech.tell(charaktere.isaac, " NEIN! ");
            
            // await ƒS.Character.hide(charaktere.isaac);
            // await ƒS.Character.show(charaktere.isaac, charaktere.isaac.pose.crying, ƒS.positionPercent(charaktere.isaac.positionStandard.x, charaktere.isaac.positionStandard.y))
            // await ƒS.update(0.4);

            // await ƒS.Speech.tell(charaktere.isaac, " ODETTE! Wie nein… ");
            // await ƒS.Speech.tell(charaktere.isaac, " Liebste… ");
            // await ƒS.Speech.tell(charaktere.odette, " Isaac… Es… ");
            // await ƒS.Speech.tell(charaktere.odette, " Tut… Leid… ");

            // await ƒS.Character.hide(charaktere.isaac);
            // await ƒS.Character.show(charaktere.isaac, charaktere.isaac.pose.cry, ƒS.positionPercent(charaktere.isaac.positionStandard.x, charaktere.isaac.positionStandard.y))
            // await ƒS.update(0.4);

            // await ƒS.Speech.tell(charaktere.isaac, " Nein sprich nicht… ich… ");
            // await ƒS.Speech.tell(charaktere.isaac, " Nein… bitte bleib ");

            // await ƒS.Character.hide(charaktere.isaac);
            // await ƒS.Character.show(charaktere.isaac, charaktere.isaac.pose.crying, ƒS.positionPercent(charaktere.isaac.positionStandard.x, charaktere.isaac.positionStandard.y))
            // await ƒS.update(0.4);

            // await ƒS.Speech.tell(charaktere.isaac, " Verlass mich nicht erneut! ");
            // await ƒS.Speech.tell(charaktere.isaac, " Nein… bitte…. Bitte… ");

            // await ƒS.Character.hide(charaktere.maire);
            // await ƒS.Character.show(charaktere.maire, charaktere.maire.pose.cry, ƒS.positionPercent(20, charaktere.maire.positionStandard.y));
            // await ƒS.update(0.4);

            // await ƒS.Speech.tell(charaktere.maire, " Wir brauchen einen Arzt! ");

            // await ƒS.Character.hide(charaktere.maire);
            // await ƒS.Character.hide(charaktere.isaac);
            // await ƒS.update(0.4);

            // await ƒS.Character.show(charaktere.bronte, charaktere.bronte.pose.sad, ƒS.positionPercent(70, charaktere.bronte.positionStandard.y));
            // await ƒS.update(0.4);

            // await ƒS.Speech.tell(charaktere.bronte, " Ja… ich… ");

            // await ƒS.Character.show(charaktere.alaistar, charaktere.alaistar.pose.evil, ƒS.positionPercent(15, charaktere.alaistar.positionMiddle.y));
            // await ƒS.update(2);

            // await ƒS.Speech.tell(charaktere.alaistar, " Wir bleiben jetzt alle ganz ruhig. ");

            // await ƒS.Character.show(charaktere.isaac, charaktere.isaac.pose.crying, ƒS.positionPercent(charaktere.isaac.positionStandard.x, charaktere.isaac.positionStandard.y))
            // await ƒS.Character.show(charaktere.maire, charaktere.maire.pose.smallHorror, ƒS.positionPercent(85, 105));
            // await ƒS.update(0.4);

            // await ƒS.Speech.tell(charaktere.maire, " Oh Götter… er hat eine Waffe! ");

            if (dataForSave.gotTestament) {
                await ƒS.Speech.tell(charaktere.alaistar, " Miss Bronte geben sie mir das Testament. Jetzt! ");

                let userchooseFinalChoice = await ƒS.Menu.getInput(chooseIfGiveTestament, "basicChoice");

                switch (userchooseFinalChoice) {
                    case chooseIfGiveTestament.yes:

                        await ƒS.Character.hide(charaktere.bronte);
                        await ƒS.Character.show(charaktere.bronte, charaktere.bronte.pose.shout, ƒS.positionPercent(70, charaktere.bronte.positionStandard.y));
                        await ƒS.update(0.4);

                        await ƒS.Speech.tell(charaktere.bronte, " Okay… Wir gehen. Aber verletzen Sie niemanden. ");
                        await ƒS.Speech.tell(charaktere.alaistar, " Nicht wenn sie alle Schweigen. ");
                        await ƒS.Speech.tell(charaktere.maire, " Ich… ich verstehe nicht… ");

                        await ƒS.Character.hide(charaktere.isaac);
                        await ƒS.Character.show(charaktere.isaac, charaktere.isaac.pose.cry, ƒS.positionPercent(charaktere.isaac.positionStandard.x, charaktere.isaac.positionStandard.y))
                        await ƒS.update(0.4);

                        await ƒS.Speech.tell(charaktere.isaac, " Odette… ich kann sie nicht… nicht hierlassen! ");
                        
                        await ƒS.Character.hide(charaktere.bronte);
                        await ƒS.Character.show(charaktere.bronte, charaktere.bronte.pose.sad, ƒS.positionPercent(70, charaktere.bronte.positionStandard.y));
                        await ƒS.update(0.4);

                        await ƒS.Speech.tell(charaktere.bronte, " Bitte Maire, Isaac. Wir sollten gehen.");

                        await ƒS.Character.hide(charaktere.bronte);
                        await ƒS.Character.hide(charaktere.isaac);
                        await ƒS.Character.hide(charaktere.maire);
                        await ƒS.update(1);

                        await ƒS.Character.hide(charaktere.alaistar);

                        await ƒS.Sound.fade(sound.final, 0, 1);
                        return "EndingThreeOdetteDead";

                    case chooseIfGiveTestament.no:

                        ƒS.Sound.fade(sound.final, 0, 2);
                        await ƒS.Progress.delay(0.8);
                        ƒS.Sound.play(sound.finalSad, 0.8);

                        await ƒS.Character.hide(charaktere.bronte);
                        await ƒS.Character.show(charaktere.bronte, charaktere.bronte.pose.angry, ƒS.positionPercent(70, charaktere.bronte.positionStandard.y));
                        await ƒS.update(0.4);

                        await ƒS.Speech.tell(charaktere.bronte, "Nein!");
                        await ƒS.Speech.tell(charaktere.alaistar, "Miss Bronte! Tun Sie keine Dummheiten.");

                        await ƒS.Character.hide(charaktere.bronte);
                        await ƒS.Character.show(charaktere.bronte, charaktere.bronte.pose.shout, ƒS.positionPercent(70, charaktere.bronte.positionStandard.y));
                        await ƒS.update(0.4);

                        await ƒS.Speech.tell(charaktere.bronte, " Ich werde Sie hiermit nicht durchkommen lassen! Ich-");

                        await ƒS.Character.hide(charaktere.bronte);
                        await ƒS.Character.hide(charaktere.maire);
                        await ƒS.Character.hide(charaktere.isaac);
                        await ƒS.Character.hide(charaktere.alaistar);
                        await ƒS.Location.show(location.black);
                        await ƒS.update(1);
        
                        await ƒS.Sound.play(sound.gunShoot, 1);
                        await ƒS.Progress.delay(0.5);
                        await ƒS.Sound.play(sound.gunShoot, 1);
                        await ƒS.Progress.delay(0.5);
                        await ƒS.Sound.play(sound.gunShoot, 1);
        
                        
                        ƒS.Sound.fade(sound.finalSad, 1, 2);
        
                        await ƒS.Progress.delay(7);
        
                        return "EndScreen";
                }
            } else {

                ƒS.Sound.fade(sound.final, 0, 2);
                await ƒS.Progress.delay(0.8);
                ƒS.Sound.play(sound.finalSad, 0.8);

                await ƒS.Speech.tell(charaktere.alaistar, " Es tut mir sehr Leid, aber ich muss meine Familie schützen. ");

                await ƒS.Speech.tell(charaktere.bronte, " Mr. Blackburn, tun sie nichts-");

                await ƒS.Speech.hide();

                await ƒS.Character.hide(charaktere.bronte);
                await ƒS.Character.hide(charaktere.maire);
                await ƒS.Character.hide(charaktere.isaac);
                await ƒS.Character.hide(charaktere.alaistar);
                await ƒS.Location.show(location.black);
                await ƒS.update(1);

                await ƒS.Sound.play(sound.gunShoot, 1);
                await ƒS.Progress.delay(0.5);
                await ƒS.Sound.play(sound.gunShoot, 1);
                await ƒS.Progress.delay(0.5);
                await ƒS.Sound.play(sound.gunShoot, 1);

                
                ƒS.Sound.fade(sound.finalSad, 1, 2);

                await ƒS.Progress.delay(7);

                return "EndScreen";

            }
        }
    }
}