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

        await ƒS.Sound.fade(sound.study, 0, 1);

        await ƒS.Sound.fade(sound.final, 0.7, 1, true);

        await ƒS.Speech.tell(charaktere.alaistar, " Schwester. ");
        await ƒS.Speech.tell(charaktere.odette, " !!! ");
        await ƒS.Speech.tell(charaktere.alaistar, " Miss Bronte, Grace würde gerne etwas mit Ihnen besprechen. ");

        await ƒS.Character.hide(charaktere.bronte);
        await ƒS.Character.show(charaktere.bronte, charaktere.bronte.pose.sad, ƒS.positionPercent(charaktere.bronte.positionStandard.x, charaktere.bronte.positionStandard.y))
        await ƒS.update(0.4);  

        await ƒS.Speech.tell(charaktere.bronte, " Ich denke ich bleiben lieber hier. Es muss eine ganzschöne Überraschung sein ihre Schwester zu sehen. ");
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

        let userchooseFinalChoice = await ƒS.Menu.getInput(chooseFinalChoice, "BasicChoice");

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

            await ƒS.Sound.fade(sound.gunShoot, 0.8, 1, false);

            await ƒS.Speech.tell(charaktere.maire, "Ein Schuss!  "); 

        } else {

            await ƒS.Sound.fade(sound.stellaScream, 0.8, 1, false);

            await ƒS.Speech.tell(charaktere.maire, "Ein Schrei!  ");
        }

        await ƒS.Character.hide(charaktere.isaac);
        await ƒS.Character.hide(charaktere.maire);
        await ƒS.Location.show(location.studyroom); 
        await ƒS.update(0.2); 

        if (userchooseFinalChoice == chooseFinalChoice.infrontOfOdette && dataForSave.tookGun) {

            await ƒS.Speech.tell(charaktere.bronte, " Nein! ");
            await ƒS.Speech.tell(charaktere.alaistar, " Wo… nein… arg! ");
            await ƒS.Speech.tell(charaktere.bronte, " Suchen sie dies? Ein sehr schöner Revolver. Auch wenn ich die Kugeln aus Sicherheit entfern habe. ");
            await ƒS.Speech.tell(charaktere.alaistar, " Nein! ");
            await ƒS.Speech.tell(charaktere.maire, " Bronte! Was… ");
            await ƒS.Speech.tell(charaktere.isaac, " !!! ");
            await ƒS.Speech.tell(charaktere.isaac, " Wie… Oh Götter. ");
            await ƒS.Speech.tell(charaktere.isaac, " Odette… Ich… Wie… ");
            await ƒS.Speech.tell(charaktere.bronte, " Maire, wenn du so lieb wärst die Polizei zu rufen. Ich denke sie werden eine schöne neue Wohnung für Mr. Blackburn besorgen. ");
            if (!dataForSave.gotTestament) {
                await ƒS.Speech.tell(charaktere.bronte, "Oh und ich denke wenn ich mein Dietrichset hole, wird auch der Safe nicht allzu lange verschlossen bleiben. ");
                await ƒS.Speech.tell(charaktere.bronte, "Und wenn ich mich nicht ganz irre wird diese Wohnung dann an die jüngste Tochter gehen.");
            } else {
                await ƒS.Speech.tell(charaktere.bronte, " Immerhin wird diese Wohnung nun wohl an die jüngste Tochter gehen. ");
                await ƒS.Speech.tell(charaktere.bronte, " Ich habe es hier schwazr auf weiß. Das echte Testamant von Lady Blackburn. ");
                await ƒS.Speech.tell(charaktere.bronte, "Sie teilt ihr Geld mit all ihren Kindern, nicht nur Alaistar Blackburn. ");
            }

            await ƒS.Speech.tell(charaktere.maire, " Ich… oh...klar, die Polizei… ");
            await ƒS.Speech.tell(charaktere.maire, " Was für ein Abend. ");
            await ƒS.Speech.tell(charaktere.maire, " Oh! Haha ");
            await ƒS.Speech.tell(charaktere.bronte, " Maire? ");
            await ƒS.Speech.tell(charaktere.maire, " Schau wenn ich gefunden habe! ");
            await ƒS.Speech.tell("Artemis", " Miau. ");
            await ƒS.Speech.tell(charaktere.bronte, " Damit hätte sich wohl auch das letzte Mysterium gelöst.");

            if (dataForSave.pointAngryMaire <= 1) {
                //todo: Bonus Szene charaktere Ausblenden
                return "ExtraSceneBronteMaire";
            }

            return "EndingOneAllSurvive";

            //todo final ÜBERALL!!

        } else if (userchooseFinalChoice == chooseFinalChoice.infrontOfOdette) {

            await ƒS.Speech.tell(charaktere.maire, " NEIN! ");

            await ƒS.Character.show(charaktere.bronte, charaktere.bronte.pose.shout, ƒS.positionPercent(charaktere.bronte.positionStandard.x, charaktere.bronte.positionStandard.y))
            await ƒS.update(0.4);  

            await ƒS.Speech.tell(charaktere.bronte, " Oh… oh weh…");

            await ƒS.Character.hide(charaktere.bronte);
            await ƒS.update(4);  

            //todo: fällt
            await ƒS.Speech.tell(charaktere.maire, " Bronte bitte… nein! Bitte schau mich an! ");
            await ƒS.Speech.tell(charaktere.alaistar, " Nein… ich… ich wollte nicht sie treffen ich…  ");
            await ƒS.Speech.tell(charaktere.isaac, " Alaistar! ");
            // ~rennt hinter her~ 
            await ƒS.Speech.tell(charaktere.odette, " Oh Götter. Miss Bronte es tut mir so Leid… ich. ");
            await ƒS.Speech.tell(charaktere.bronte, " Ist… okay… ");
            await ƒS.Speech.tell(charaktere.maire, " Bitte nicht. Wir brauchen einen Arzt! Sofort! ");
            await ƒS.Speech.tell(charaktere.odette, " Ich… Ich versuche jemand zu holen, aber… Hier ist so viel Blut. ");
            await ƒS.Speech.tell(charaktere.maire, " nein… beeile dich! Geh schon!");

            document.getElementById('speechContent').classList.add('textEffectBig');
            await ƒS.Speech.tell(charaktere.maire, "GEH!");
            document.getElementById('speechContent').classList.remove('textEffectBig');

            await ƒS.Speech.tell(charaktere.bronte, " Maire… *hust*… Ich… liebe… dich… ");
            await ƒS.Speech.tell(charaktere.maire, " Ich weiß. Ich weiß doch Bronte. Ich liebe dich auch. Bitte halte durch!");

            await ƒS.Sound.fade(sound.final, 0, 3);

            return "EndingTwoBronteDead";

        } else if (userchooseFinalChoice == chooseFinalChoice.attack && dataForSave.tookGun) {
            await ƒS.Speech.tell(charaktere.bronte, " ARG! ");
            await ƒS.Speech.tell(charaktere.alaistar, " Hmpf! NEIN! ARG… FASS MICH NICHT AN. ");
            await ƒS.Speech.tell(charaktere.bronte, " HIYEA! ");
            await ƒS.Speech.tell(charaktere.maire, " Bronte was ist… Oh ");
            await ƒS.Speech.tell(charaktere.maire, " Alaistar er liegt auf den Boden. Ist er bewusstlos? ");
            await ƒS.Speech.tell(charaktere.bronte, " Er hätte es besser wissen sollen. ");
            await ƒS.Speech.tell(charaktere.isaac, " Ich war- ");
            await ƒS.Speech.tell(charaktere.isaac, " !!! ");
            await ƒS.Speech.tell(charaktere.isaac, " Odette? ");
            await ƒS.Speech.tell(charaktere.odette, " Isaac… ich… oh Götter. ");
            await ƒS.Speech.tell(charaktere.maire, " Ich verstehe nicht… Wie… ");
            await ƒS.Speech.tell(charaktere.bronte, " Ich erkläre dir gleich alles. Lassen wir den beiden etwas Zeit für sich. Und wir sollten ohnehin die Polizei rufen. ");

            await ƒS.Sound.fade(sound.final, 0, 3);

            // todo: new Musik

            if (!dataForSave.gotTestament) {
                await ƒS.Speech.tell(charaktere.bronte, "Oh und ich denke ich sollte mein Dietrichset hole, wir müssen einen Safe knacken. ");
                await ƒS.Speech.tell(charaktere.bronte, "Und wenn ich mich nicht ganz irre wird diese Wohnung dann an die jüngste Tochter gehen.");
            } else {
                await ƒS.Speech.tell(charaktere.bronte, " Ich denke wir können das Haustelefon nutzen. ");
                await ƒS.Speech.tell(charaktere.bronte, " Die neue Inhaberhin wird wohl nichts dagegen habe. Schau- ");
                await ƒS.Speech.tell(charaktere.bronte, " Ich habe es hier schwarz auf weiß. Das echte Testamant von Lady Blackburn. ");
                await ƒS.Speech.tell(charaktere.bronte, " Sie teilt ihr Geld mit all ihren Kindern, nicht nur Alaistar Blackburn. ");
                await ƒS.Speech.tell(charaktere.bronte, "Dass schien ihm gar nicht zu gefallen.");
            }

            await ƒS.Speech.tell(charaktere.maire, " Ich bin nur froh, dass es dir gut geht. Ich hatte kurz Angst- ");
            await ƒS.Speech.tell(charaktere.bronte, " Mir geht es gut und schau. ");
            await ƒS.Speech.tell("Artemis", " Miau ");
            await ƒS.Speech.tell(charaktere.bronte, " Gerade rechtzeitig zurückgekommen.");

            return "EndingOneAllSurvive";

        } else if (userchooseFinalChoice == chooseFinalChoice.attack) {
            await ƒS.Speech.tell(charaktere.bronte, " Nein! ");
            await ƒS.Speech.tell(charaktere.alaistar, " BLEIB WEG!  ");

            await ƒS.Sound.fade(sound.gunShoot, 0.8, 1, false);

            await ƒS.Speech.tell(charaktere.bronte, " AH! ");
            await ƒS.Speech.tell(charaktere.maire, " Bronte?! NEIN! ");
            await ƒS.Speech.tell(charaktere.alaistar, " Wer.. Arg! Nein… sie hätte weg bleiben sollen! ");
            await ƒS.Speech.tell(charaktere.isaac, " Was ist… Oh Götter. ");
            // ~Alaistar rennt weg~
            await ƒS.Speech.tell(charaktere.isaac, " Alaistar! Bleib!");
            await ƒS.Speech.tell(charaktere.odette, " Oh Götter. Miss Bronte es tut mir so Leid… ich. ");
            await ƒS.Speech.tell(charaktere.bronte, " Ist… okay… ");
            if (dataForSave.gotTestament) {
                await ƒS.Speech.tell(charaktere.bronte, " Hier... das Testament... es war es wert. ");
            }
            await ƒS.Speech.tell(charaktere.maire, " Bitte nicht. Wir brauchen einen Arzt! Sofort! ");
            await ƒS.Speech.tell(charaktere.odette, " Ich… Ich versuche jemand zu holen, aber… Hier ist so viel Blut. ");
            await ƒS.Speech.tell(charaktere.maire, " Nein… beeile dich! Geh schon!");

            document.getElementById('speechContent').classList.add('textEffectBig');
            await ƒS.Speech.tell(charaktere.maire, "GEH!");
            document.getElementById('speechContent').classList.remove('textEffectBig');


            await ƒS.Speech.tell(charaktere.bronte, " Maire… *hust*… Ich… liebe… dich… ");
            await ƒS.Speech.tell(charaktere.maire, " Ich weiß. Ich weiß doch Bronte. Ich liebe dich auch. Bitte halte durch!");

            await ƒS.Sound.fade(sound.final, 0, 3);

            return "EndingTwoBronteDead";

        } else if (userchooseFinalChoice == chooseFinalChoice.nothing && dataForSave.tookGun) {

            await ƒS.Speech.tell(charaktere.alaistar, " Auf Wiedersehen ");
            await ƒS.Speech.tell(charaktere.odette, " AH! ");
            await ƒS.Speech.tell(charaktere.alaistar, " Was… wo… ");
            await ƒS.Speech.tell(charaktere.bronte, " Suchen Sie die hier? Ein schöner Revolver. Ich war aber so frei die Kugeln zu entfernen. ");
            await ƒS.Speech.tell(charaktere.maire, " Bronte?! Was ist los. ");
            await ƒS.Speech.tell(charaktere.bronte, " Ah Maire und Isaac. ");
            await ƒS.Speech.tell(charaktere.isaac, " Oh- Was- ");
            await ƒS.Speech.tell(charaktere.isaac, " !!! ");
            await ƒS.Speech.tell(charaktere.isaac, " Odette! ");
            await ƒS.Speech.tell(charaktere.odette, " Issac! Oh Götter! ");
            await ƒS.Speech.tell(charaktere.maire, " Die tote Frau… ich… verstehe nicht. ");
            await ƒS.Speech.tell(charaktere.bronte, " Ich erkläre dir alles später. Lass uns erst einmal Mr. Blackburn hier -sagen wir an de Schreibtisch binden – und dann die Polizei rufen. ");

            await ƒS.Sound.fade(sound.final, 0, 3);
            //todo: new musik

            if (dataForSave.gotTestament) {
                await ƒS.Speech.tell(charaktere.bronte, " Die Polizei wird bestimmt ziemlich interessant sein an dem echten Testament der Familie Blackburn. ");
            } else {
                await ƒS.Speech.tell(charaktere.bronte, " Und es wird bestimmt nur eine Frage der Zeit sein bis das versteckte Testament gefunden wird. ");
            }

            await ƒS.Speech.tell(charaktere.maire, " Oh… äh… natürlich. Maire Oh schau! Hier hinter dem Schreibtisch! ");
            await ƒS.Speech.tell(charaktere.bronte, " Oh. Haha ");
            await ƒS.Speech.tell("Artemis", " Miau. ");
            await ƒS.Speech.tell(charaktere.maire, " Welch ereignisreicher Abend…");

            return "EndingOneAllSurvive";

        } else if (userchooseFinalChoice == chooseFinalChoice.nothing) {
            await ƒS.Speech.tell(charaktere.odette, " AH!  ");

            await ƒS.Sound.fade(sound.gunShoot, 0.8, 1, false);

            await ƒS.Speech.tell(charaktere.odette, " a… oh… ");
            await ƒS.Speech.tell(charaktere.bronte, " NEIN! ");
            await ƒS.Speech.tell(charaktere.maire, " Bronte! Was wo- Wer? ");
            await ƒS.Speech.tell(charaktere.isaac, " !!! ");
            await ƒS.Speech.tell(charaktere.isaac, " NEIN! ");
            await ƒS.Speech.tell(charaktere.isaac, " ODETTE! Wie nein… ");
            await ƒS.Speech.tell(charaktere.isaac, " Liebste… ");
            await ƒS.Speech.tell(charaktere.odette, " Isaac… Es… ");
            await ƒS.Speech.tell(charaktere.odette, " Tut… Leid… ");
            await ƒS.Speech.tell(charaktere.isaac, " Nein sprich nicht… ich… ");
            await ƒS.Speech.tell(charaktere.isaac, " Nein… bitte bleib ");
            await ƒS.Speech.tell(charaktere.isaac, " Verlass mich nicht erneut! ");
            await ƒS.Speech.tell(charaktere.isaac, " Nein… bitte…. Bitte… ");
            await ƒS.Speech.tell(charaktere.maire, " Wir brauchen einen Arzt! ");
            await ƒS.Speech.tell(charaktere.bronte, " Ja… ich… ");
            await ƒS.Speech.tell(charaktere.alaistar, " Wir bleiben jetzt alle ganz ruhig. ");
            await ƒS.Speech.tell(charaktere.maire, " Oh Götter… er hat eine Waffe! ");

            if (dataForSave.gotTestament) {
                await ƒS.Speech.tell(charaktere.alaistar, " Miss Bronte geben sie mir das Testament. Jetzt! ");

                let userchooseFinalChoice = await ƒS.Menu.getInput(chooseIfGiveTestament, "BasicChoice");

                switch (userchooseFinalChoice) {
                    case chooseIfGiveTestament.yes:

                        await ƒS.Speech.tell(charaktere.bronte, " Okay… Wir gehen. Aber verletzen Sie niemanden. ");
                        await ƒS.Speech.tell(charaktere.alaistar, " Nicht wenn sie alle Schweigen. ");
                        await ƒS.Speech.tell(charaktere.maire, " Ich… ich verstehe nicht… ");
                        await ƒS.Speech.tell(charaktere.isaac, " Odette… ich kann sie nicht… nicht hierlassen! ");
                        await ƒS.Speech.tell(charaktere.bronte, " Bitte Maire, Isaac. Wir sollten gehen.");

                        //todo: Ende
                        await ƒS.Sound.fade(sound.final, 0, 1); 
                        return "EndingThreeOdetteDead";

                        break;
                    case chooseIfGiveTestament.no:
                        await ƒS.Speech.tell(charaktere.bronte, " Nein! ");
                        await ƒS.Speech.tell(charaktere.alaistar, " Miss Bronte! Tun Sie keine Dummheiten. ");
                        await ƒS.Speech.tell(charaktere.bronte, " Ich werde Sie hiermit nicht durchkommen lassen! Ich-");

                        await ƒS.Sound.fade(sound.gunShoot, 0.8, 1, false);
                        await ƒS.Progress.delay(0.3);
                        await ƒS.Sound.fade(sound.gunShoot, 0.8, 1, false);
                        await ƒS.Progress.delay(0.3);
                        await ƒS.Sound.fade(sound.gunShoot, 0.8, 1, false);

                        return "EndScreen";
                }
            } else {

                await ƒS.Speech.tell(charaktere.alaistar, " Es tut mir sehr Leid, aber ich muss meine Familie schützen. ");
                await ƒS.Speech.tell(charaktere.bronte, " Mr. Blackburn, tun sie nichts-");

                await ƒS.Sound.fade(sound.gunShoot, 0.8, 1, false);
                await ƒS.Progress.delay(0.3);
                await ƒS.Sound.fade(sound.gunShoot, 0.8, 1, false);
                await ƒS.Progress.delay(0.3);
                await ƒS.Sound.fade(sound.gunShoot, 0.8, 1, false);
                return "Endscreen";

            }
        }
    }
}