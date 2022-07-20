namespace Artemis {
    export async function SceneNineEntryhall(): ƒS.SceneReturn {

        let chooseWhatHapppendFirst = {

            sawCat: "Katze gesehen",
            remington: "Remington gesehen",
            house: "Haus bewundert"

        };

        let chooseWhatButlerTold = {

            houseOld: "Haus ist alt",
            graceInheritance: "Grace erbte",
            alaistarInheritance: "Alaistar erbte"

        };

        let chooseWhoWrongInSaalon = {
            stella: "Stella",
            isaac: "Isaac",
            alaistarGarce: "Alaistar & Grace"
        };

        let chooseWhatHappendCat = {
            secretShed: "Geheimer Schuppen",
            catTrapped: "Katze eingesperrt"
        };

        let chooseWhoActedWeird = {
            isaac: "Isaac",
            grace: "Grace",
            stella: "Stella"
        };

        let pointsRecap = 0;

        let chooseSearchCloaks = {
            yes: "Ja",
            no: "Nein"
        }

        let chooseWhichCloak = {
            isaac: "Geflickte Jacke",
            grace: "Damenpelz",
            alaistar: "Schwarzer Mantel mit rotem Samt",
            stella: "Leichte Damenjacke",
            stop: "Aufhören"
        }

        let chooseWhoGun = {
            isaac: "Isaac",
            grace: "Grace",
            stella: "Stella",
            alaistar: "Alaistar"
        }

        let takeGun = {
            yes: "Ja",
            no: "Nein"
        }

        let lastCloakIsaac = false;
        let counterHowManyCloaks = 0;
        let stillInLoop = true;

        ƒS.Sound.play(sound.themeEntryhall, 0.4, true);

        await ƒS.Location.show(location.entrance);
        await ƒS.update(transistions.standard.duration, transistions.standard.alpha, transistions.standard.edge);
        await ƒS.update();

        await ƒS.Character.show(charaktere.maire, charaktere.maire.pose.neutral, ƒS.positionPercent(charaktere.maire.positionStandard.x, charaktere.maire.positionStandard.y));
        await ƒS.Character.show(charaktere.bronte, charaktere.bronte.pose.happy, ƒS.positionPercent(charaktere.bronte.positionStandard.x, charaktere.bronte.positionStandard.y))
        await ƒS.update(0.8);

        await ƒS.Speech.tell(charaktere.maire, " Uff… meinst du, die haben verdacht geschöpft? ");

        await ƒS.Character.hide(charaktere.bronte);
        await ƒS.Character.show(charaktere.bronte, charaktere.bronte.pose.laugh, ƒS.positionPercent(charaktere.bronte.positionStandard.x, charaktere.bronte.positionStandard.y));
        await ƒS.update(0.4);

        await ƒS.Speech.tell(charaktere.bronte, " Ich denke nicht. Aber du solltest die Codewörter vielleicht noch einmal wiederholen. ");

        await ƒS.Character.hide(charaktere.bronte);
        await ƒS.Character.show(charaktere.bronte, charaktere.bronte.pose.happy, ƒS.positionPercent(charaktere.bronte.positionStandard.x, charaktere.bronte.positionStandard.y));
        await ƒS.Character.hide(charaktere.maire);
        await ƒS.Character.show(charaktere.maire, charaktere.maire.pose.embarrassed, ƒS.positionPercent(charaktere.maire.positionStandard.x, charaktere.maire.positionStandard.y))
        await ƒS.update(0.4);

        await ƒS.Speech.tell(charaktere.maire, " Ja, tut mir leid. Ich stand etwas auf dem Schlauch. Aber jetzt wo wir unsere Ruhe haben was ist der Plan? ");

        await ƒS.Character.hide(charaktere.maire);
        await ƒS.Character.show(charaktere.maire, charaktere.maire.pose.neutral, ƒS.positionPercent(charaktere.maire.positionStandard.x, charaktere.maire.positionStandard.y))
        await ƒS.update(0.4);

        await ƒS.Speech.tell(charaktere.bronte, " Wir sollten uns etwas umschauen. Die ganze Sache gefällt mir nicht. ");

        await ƒS.Character.hide(charaktere.maire);
        await ƒS.Character.show(charaktere.maire, charaktere.maire.pose.happy, ƒS.positionPercent(charaktere.maire.positionStandard.x, charaktere.maire.positionStandard.y))
        await ƒS.update(0.4);

        await ƒS.Speech.tell(charaktere.maire, " Ja warte, lass uns kurz alles zusammentragen. Was genau ist heute Abend passiert? Konzentrieren wir uns dabei auf das was wirklich wichtig war! ");

        await ƒS.Character.hide(charaktere.bronte);
        await ƒS.Character.show(charaktere.bronte, charaktere.bronte.pose.think, ƒS.positionPercent(charaktere.bronte.positionStandard.x, charaktere.bronte.positionStandard.y));
        await ƒS.update(0.4);

        await ƒS.Speech.tell(charaktere.bronte, " Okay. Als wir beim Anwesen angekommen sind, ist…");


        let userChooseWhatHapppendFirst = await ƒS.Menu.getInput(chooseWhatHapppendFirst, "basicChoice");
        switch (userChooseWhatHapppendFirst) {
            case chooseWhatHapppendFirst.house:
                break;

            case chooseWhatHapppendFirst.remington:
                break;

            case chooseWhatHapppendFirst.sawCat:
                pointsRecap += 1;
                break;
        }

        await ƒS.Speech.tell(charaktere.bronte, "Danach, hat der Butler uns erzählt das...");

        let userChooseWhatButlerTold = await ƒS.Menu.getInput(chooseWhatButlerTold, "basicChoice");
        switch (userChooseWhatButlerTold) {
            case chooseWhatButlerTold.alaistarInheritance:
                pointsRecap += 1;
                break;

            case chooseWhatButlerTold.graceInheritance:
                break;

            case chooseWhatButlerTold.houseOld:
                break;
        }

        await ƒS.Speech.tell(charaktere.bronte, "Im Saalon wirkte eine Person fehl am Platz...");

        let userchooseWhoWrongInSaalon = await ƒS.Menu.getInput(chooseWhoWrongInSaalon, "basicChoice");
        switch (userchooseWhoWrongInSaalon) {
            case chooseWhoWrongInSaalon.alaistarGarce:
                break;

            case chooseWhoWrongInSaalon.isaac:
                pointsRecap += 1;
                break;

            case chooseWhoWrongInSaalon.stella:
                break;
        }

        await ƒS.Speech.tell(charaktere.bronte, "Die Katze ist verschwunden und wir haben herausgefunden, dass ...");

        let userChooseWhatHappendCat = await ƒS.Menu.getInput(chooseWhatHappendCat, "basicChoice");
        switch (userChooseWhatHappendCat) {
            case chooseWhatHappendCat.catTrapped:
                pointsRecap += 1;
                break;

            case chooseWhatHappendCat.secretShed:
                break;
        }

        await ƒS.Speech.tell(charaktere.bronte, "Doch das seltsamste Verhalten danach war von...");

        let userChooseWhoActedWeird = await ƒS.Menu.getInput(chooseWhoActedWeird, "basicChoice");
        switch (userChooseWhoActedWeird) {
            case chooseWhoActedWeird.grace:
                break;

            case chooseWhoActedWeird.isaac:
                break;

            case chooseWhoActedWeird.stella:
                pointsRecap += 1;
                break;
        }

        if (pointsRecap >= 3) {
            dataForSave.pointDetectiv += 1;
            await ƒS.Character.hide(charaktere.maire);
            await ƒS.Character.show(charaktere.maire, charaktere.maire.pose.laugh, ƒS.positionPercent(charaktere.maire.positionStandard.x, charaktere.maire.positionStandard.y))
            await ƒS.update(0.4);

            await ƒS.Speech.tell(charaktere.maire, "  Sehr gut! Vielleicht müssen wir noch an manchen Einzelheiten Pfeilen aber, ungefähr so war es. ");

            await ƒS.Character.hide(charaktere.maire);
            await ƒS.Character.show(charaktere.maire, charaktere.maire.pose.neutral, ƒS.positionPercent(charaktere.maire.positionStandard.x, charaktere.maire.positionStandard.y))
            await ƒS.update(0.4);

        } else {

            await ƒS.Character.hide(charaktere.maire);
            await ƒS.Character.show(charaktere.maire, charaktere.maire.pose.sad, ƒS.positionPercent(charaktere.maire.positionStandard.x, charaktere.maire.positionStandard.y))
            await ƒS.update(0.4);

            await ƒS.Speech.tell(charaktere.maire, "Mhm… also meine Notizen sind etwas anders. Wir haben Artemis gesehen, dann hat der Butler uns erzählt Alaistar sei der Erbe. ");
            await ƒS.Speech.tell(charaktere.maire, "Isaac kommt zu besuch obwohl die Familie ihn nicht mag. Jemand hat die Katze im Garten einschlossen und Stella hat geschrien.");

            await ƒS.Character.hide(charaktere.bronte);
            await ƒS.Character.show(charaktere.bronte, charaktere.bronte.pose.laugh, ƒS.positionPercent(charaktere.bronte.positionStandard.x, charaktere.bronte.positionStandard.y));
            await ƒS.Character.hide(charaktere.maire);
            await ƒS.Character.show(charaktere.maire, charaktere.maire.pose.happy, ƒS.positionPercent(charaktere.maire.positionStandard.x, charaktere.maire.positionStandard.y))
            await ƒS.update(0.4);

            await ƒS.Speech.tell(charaktere.bronte, "Was würde ich nur ohne deine Hilfe tun. Danke Maire.");

            await ƒS.Character.hide(charaktere.maire);
            await ƒS.Character.show(charaktere.maire, charaktere.maire.pose.neutral, ƒS.positionPercent(charaktere.maire.positionStandard.x, charaktere.maire.positionStandard.y))
            await ƒS.update(0.4);

        }

        await ƒS.Speech.tell(charaktere.maire, " Ja… komisch diese ganzen Sachen. ");

        await ƒS.Character.hide(charaktere.bronte);
        await ƒS.Character.show(charaktere.bronte, charaktere.bronte.pose.sad, ƒS.positionPercent(charaktere.bronte.positionStandard.x, charaktere.bronte.positionStandard.y));
        await ƒS.update(0.4);

        await ƒS.Speech.tell(charaktere.bronte, " Und wie… ich denke uns fehlen noch ein paar Informationen, um wirklich alles zusammenzusetzen. ");

        await ƒS.Character.hide(charaktere.maire);
        await ƒS.Character.show(charaktere.maire, charaktere.maire.pose.sad, ƒS.positionPercent(charaktere.maire.positionStandard.x, charaktere.maire.positionStandard.y))
        await ƒS.update(0.4);

        await ƒS.Speech.tell(charaktere.maire, " Ja. Woher kommt der Ring? Was ist mit Stella los? Und ich für meinen Teil traue dem Butler immer noch nicht. ");

        await ƒS.Character.hide(charaktere.maire);
        await ƒS.Character.show(charaktere.maire, charaktere.maire.pose.neutral, ƒS.positionPercent(charaktere.maire.positionStandard.x, charaktere.maire.positionStandard.y))
        await ƒS.update(0.4);

        await ƒS.Speech.tell(charaktere.bronte, " Alles gute Punkte. Auf meiner Liste steht auch immer noch Isaac. ");

        await ƒS.Character.hide(charaktere.maire);
        await ƒS.Character.show(charaktere.maire, charaktere.maire.pose.fear, ƒS.positionPercent(charaktere.maire.positionStandard.x, charaktere.maire.positionStandard.y))
        await ƒS.update(0.4);

        await ƒS.Speech.tell(charaktere.maire, " Oh warum das? ");

        await ƒS.Character.hide(charaktere.maire);
        await ƒS.Character.show(charaktere.maire, charaktere.maire.pose.neutral, ƒS.positionPercent(charaktere.maire.positionStandard.x, charaktere.maire.positionStandard.y))
        await ƒS.Character.hide(charaktere.bronte);
        await ƒS.Character.show(charaktere.bronte, charaktere.bronte.pose.think, ƒS.positionPercent(charaktere.bronte.positionStandard.x, charaktere.bronte.positionStandard.y));
        await ƒS.update(0.4);

        await ƒS.Speech.tell(charaktere.bronte, " Mich wundert es, dass er immer noch die Familie besucht, die ihn doch nicht äußerst anständig behandelt. ");
        await ƒS.Speech.tell(charaktere.maire, " Das ist ein sehr guter Punkt, der mir bisher gar nicht eingefallen war. Die Frage ist nur wo wir diese ganzen Antworten herbekommen? ");

        await ƒS.Character.hide(charaktere.bronte);
        await ƒS.Character.show(charaktere.bronte, charaktere.bronte.pose.sad, ƒS.positionPercent(charaktere.bronte.positionStandard.x, charaktere.bronte.positionStandard.y));
        await ƒS.update(0.4);

        await ƒS.Speech.tell(charaktere.bronte, " Ich denke wir sollten das Manor etwas genauer unter die Luppe nehmen. Vor allem das Arbeitszimmer. ");

        await ƒS.Character.hide(charaktere.maire);
        await ƒS.Character.show(charaktere.maire, charaktere.maire.pose.fear, ƒS.positionPercent(charaktere.maire.positionStandard.x, charaktere.maire.positionStandard.y))
        await ƒS.update(0.4);

        await ƒS.Speech.tell(charaktere.maire, " Das Arbeitszimmer? Interessierst du dich etwas für die Steuern der Familie? ");

        await ƒS.Character.hide(charaktere.maire);
        await ƒS.Character.show(charaktere.maire, charaktere.maire.pose.neutral, ƒS.positionPercent(charaktere.maire.positionStandard.x, charaktere.maire.positionStandard.y))
        await ƒS.update(0.4);

        await ƒS.Speech.tell(charaktere.bronte, " Nein, aber ich habe so eine Vermutung, dort könnten interessante Unterlagen sein. Und es ist immerhin der Ursprungspunkt des Verbrechens! ");
        await ƒS.Speech.tell(charaktere.maire, " Hä? ");
        await ƒS.Speech.tell(charaktere.bronte, " Naja dort ist Artemis verschwunden. ");

        await ƒS.Character.hide(charaktere.maire);
        await ƒS.Character.show(charaktere.maire, charaktere.maire.pose.happy, ƒS.positionPercent(charaktere.maire.positionStandard.x, charaktere.maire.positionStandard.y))
        await ƒS.update(0.4);

        await ƒS.Speech.tell(charaktere.maire, " Oh stimmt! Grace meinte das Artemis dort eigentlich immer ist, außer sie wird in den Garten gelassen von den Angestellten. ");

        await ƒS.Character.hide(charaktere.maire);
        await ƒS.Character.show(charaktere.maire, charaktere.maire.pose.neutral, ƒS.positionPercent(charaktere.maire.positionStandard.x, charaktere.maire.positionStandard.y))
        await ƒS.Character.hide(charaktere.bronte);
        await ƒS.Character.show(charaktere.bronte, charaktere.bronte.pose.happy, ƒS.positionPercent(charaktere.bronte.positionStandard.x, charaktere.bronte.positionStandard.y));
        await ƒS.update(0.4);

        await ƒS.Speech.tell(charaktere.bronte, " Ja, ich denke dort können wir vielleicht Hinweise darüber finden, was genau hier vorgeht. Also lass uns loslegen! ");

        await ƒS.Character.hide(charaktere.bronte);
        await ƒS.Character.show(charaktere.bronte, charaktere.bronte.pose.shout, ƒS.positionPercent(charaktere.bronte.positionStandard.x, charaktere.bronte.positionStandard.y));
        await ƒS.Character.hide(charaktere.maire);
        await ƒS.Character.show(charaktere.maire, charaktere.maire.pose.fear, ƒS.positionPercent(charaktere.maire.positionStandard.x, charaktere.maire.positionStandard.y))
        await ƒS.update(0.4);

        await ƒS.Speech.tell(charaktere.maire, " Warte… ich habe noch eine andere Idee. Sie ist nur etwas… radikal. ");

        await ƒS.Character.hide(charaktere.maire);
        await ƒS.Character.show(charaktere.maire, charaktere.maire.pose.neutral, ƒS.positionPercent(charaktere.maire.positionStandard.x, charaktere.maire.positionStandard.y))
        await ƒS.Character.hide(charaktere.bronte);
        await ƒS.Character.show(charaktere.bronte, charaktere.bronte.pose.think, ƒS.positionPercent(charaktere.bronte.positionStandard.x, charaktere.bronte.positionStandard.y));
        await ƒS.update(0.4);

        await ƒS.Speech.tell(charaktere.bronte, " Was genau? ");

        await ƒS.Character.hide(charaktere.maire);
        await ƒS.Character.show(charaktere.maire, charaktere.maire.pose.sad, ƒS.positionPercent(charaktere.maire.positionStandard.x, charaktere.maire.positionStandard.y))
        await ƒS.update(0.4);

        await ƒS.Speech.tell(charaktere.maire, " Naja, ich dachte, weil alle so verschlossen sind und wir eh schon am naja rumschnüffeln sind, könnten wir vielleicht gleich ihre Sachen untersuchen? ");

        await ƒS.Character.hide(charaktere.bronte);
        await ƒS.Character.show(charaktere.bronte, charaktere.bronte.pose.shout, ƒS.positionPercent(charaktere.bronte.positionStandard.x, charaktere.bronte.positionStandard.y));
        await ƒS.update(0.4);

        await ƒS.Speech.tell(charaktere.bronte, " Ihre Sachen? ");

        await ƒS.Character.hide(charaktere.maire);
        await ƒS.Character.show(charaktere.maire, charaktere.maire.pose.neutral, ƒS.positionPercent(charaktere.maire.positionStandard.x, charaktere.maire.positionStandard.y))
        await ƒS.Character.hide(charaktere.bronte);
        await ƒS.Character.show(charaktere.bronte, charaktere.bronte.pose.think, ƒS.positionPercent(charaktere.bronte.positionStandard.x, charaktere.bronte.positionStandard.y));
        await ƒS.update(0.4);

        await ƒS.Speech.tell(charaktere.maire, " Ja, der Butler hat die Mäntel doch vorhin aufgehängt. Dort vorne hängen sie. Wenn gerade keiner da ist, könnten wir sie vielleicht durchsuchen…");

        let userChooseSearchCloaks = await ƒS.Menu.getInput(chooseSearchCloaks, "basicChoice");
        switch (userChooseSearchCloaks) {
            case chooseSearchCloaks.yes:

                dataForSave.lookedAtCoats = true;

                await ƒS.Speech.tell(charaktere.bronte, " Ich denke, dass ist eine gute Idee. Wir sollten nur schnell sein, nicht dass uns jemand erwischt. ");

                await ƒS.Character.hide(charaktere.maire);
                await ƒS.Character.show(charaktere.maire, charaktere.maire.pose.sad, ƒS.positionPercent(charaktere.maire.positionStandard.x, charaktere.maire.positionStandard.y))
                await ƒS.update(0.4);

                await ƒS.Speech.tell(charaktere.maire, " Okay, dann schnell. Mhm… Also wir haben hier 4 Jacken. Welche sollen wir zuerst anschauen?");

                while (stillInLoop) {

                    let userChooseWhichCloak = await ƒS.Menu.getInput(chooseWhichCloak, "basicChoice");
                    switch (userChooseWhichCloak) {
                        case chooseWhichCloak.grace:
                            await ƒS.Speech.tell(charaktere.bronte, " Ein schwerer Damenmantel aus einem teuren Pelz.  ");

                            await ƒS.Character.hide(charaktere.bronte);
                            await ƒS.Character.show(charaktere.bronte, charaktere.bronte.pose.sad, ƒS.positionPercent(charaktere.bronte.positionStandard.x, charaktere.bronte.positionStandard.y));
                            await ƒS.update(0.4);

                            await ƒS.Speech.tell(charaktere.bronte, " Mhm… Hier in der Tasche ist eine Tanzkarte von einem Ball. Eine Puderdose aber sonst nicht wirklich viel.   ");

                            await ƒS.Character.hide(charaktere.bronte);
                            await ƒS.Character.show(charaktere.bronte, charaktere.bronte.pose.think, ƒS.positionPercent(charaktere.bronte.positionStandard.x, charaktere.bronte.positionStandard.y));
                            await ƒS.update(0.4);

                            counterHowManyCloaks += 1;
                            lastCloakIsaac = false;
                            chooseWhichCloak.grace = "";
                            await checkIfLoopShouldContinue();
                            break;

                        case chooseWhichCloak.alaistar:
                            await ƒS.Speech.tell(charaktere.bronte, " Einen schwerer schwarzer Mantel mit rotem Samt drin. ");

                            await ƒS.Character.hide(charaktere.bronte);
                            await ƒS.Character.show(charaktere.bronte, charaktere.bronte.pose.shout, ƒS.positionPercent(charaktere.bronte.positionStandard.x, charaktere.bronte.positionStandard.y));
                            await ƒS.update(0.4);

                            await ƒS.Speech.tell(charaktere.bronte, " Eine Brille, ein Tabakdose und oh… Oh weh. ");

                            await ƒS.Character.hide(charaktere.maire);
                            await ƒS.Character.show(charaktere.maire, charaktere.maire.pose.neutral, ƒS.positionPercent(charaktere.maire.positionStandard.x, charaktere.maire.positionStandard.y))
                            await ƒS.update(0.4);

                            await ƒS.Speech.tell(charaktere.maire, " Was ist? ");

                            await ƒS.Character.hide(charaktere.maire);
                            await ƒS.Character.show(charaktere.maire, charaktere.maire.pose.fear, ƒS.positionPercent(charaktere.maire.positionStandard.x, charaktere.maire.positionStandard.y))
                            await ƒS.Character.hide(charaktere.bronte);
                            await ƒS.Character.show(charaktere.bronte, charaktere.bronte.pose.think, ƒS.positionPercent(charaktere.bronte.positionStandard.x, charaktere.bronte.positionStandard.y));
                            await ƒS.update(0.4);

                            await ƒS.Speech.tell(charaktere.bronte, " Hier ist eine Waffe. ");

                            await ƒS.Character.hide(charaktere.bronte);
                            await ƒS.Character.show(charaktere.bronte, charaktere.bronte.pose.sad, ƒS.positionPercent(charaktere.bronte.positionStandard.x, charaktere.bronte.positionStandard.y));
                            await ƒS.update(0.4);

                            await ƒS.Speech.tell(charaktere.maire, " !!! Was ");

                            await ƒS.Character.hide(charaktere.maire);
                            await ƒS.Character.show(charaktere.maire, charaktere.maire.pose.sad, ƒS.positionPercent(charaktere.maire.positionStandard.x, charaktere.maire.positionStandard.y))
                            await ƒS.update(0.4);

                            await ƒS.Speech.tell(charaktere.bronte, " Ja eine kleine Pistole.  4 Schuss. Keine Jagdwaffe oder so. Ein echter Revolver. ");

                            await ƒS.Character.hide(charaktere.maire);
                            await ƒS.Character.show(charaktere.maire, charaktere.maire.pose.neutral, ƒS.positionPercent(charaktere.maire.positionStandard.x, charaktere.maire.positionStandard.y))
                            await ƒS.update(0.4);

                            await ƒS.Speech.tell(charaktere.maire, " Wer würde so ein Revolver einfach in seinem Mantel dabeihaben?");

                            let userChooseWhoGun = await ƒS.Menu.getInput(chooseWhoGun, "basicChoice");
                            switch (userChooseWhoGun) {
                                case chooseWhoGun.grace:

                                case chooseWhoGun.isaac:

                                case chooseWhoGun.stella:

                                    await ƒS.Character.hide(charaktere.maire);
                                    await ƒS.Character.show(charaktere.maire, charaktere.maire.pose.sad, ƒS.positionPercent(charaktere.maire.positionStandard.x, charaktere.maire.positionStandard.y))
                                    await ƒS.update(0.4);

                                    await ƒS.Speech.tell(charaktere.maire, " Mhm… ich weiß ja nicht. Der Mantel scheint eher zu Mr. Blackburn zu gehören. Er ist der einzige mit einer Brille. ");

                                    break;

                                case chooseWhoGun.alaistar:

                                    dataForSave.pointDetectiv += 1; 
                                    await ƒS.Speech.tell(charaktere.bronte, "Dunkler teurer Mantel mit einer Brille. Dieser Mantel gehört zu Mr. Blackburn. Aber ich weiß nicht warum er eine Waffe braucht. ");

                                    break;
                            }

                            await ƒS.Speech.tell(charaktere.maire, "Wir können denn nicht hierlassen, oder? Sollen wir ihn mitnehmen?");

                            let userTakeGun = await ƒS.Menu.getInput(takeGun, "basicChoice");
                            switch (userTakeGun) {
                                case takeGun.yes:

                                    await ƒS.Inventory.add(inventory.pistol);
                                    await ƒS.Inventory.open();
                                    
                                    dataForSave.tookGun = true; 

                                    await ƒS.Speech.tell(charaktere.bronte, " Ja. Ich habe ein schlechtes Gefühl… Lass ihn mitnehmen. ");

                                    break;

                                case takeGun.no:

                                    await ƒS.Character.hide(charaktere.bronte);
                                    await ƒS.Character.show(charaktere.bronte, charaktere.bronte.pose.think, ƒS.positionPercent(charaktere.bronte.positionStandard.x, charaktere.bronte.positionStandard.y));
                                    await ƒS.update(0.4);

                                    await ƒS.Speech.tell(charaktere.bronte, "Mhm… ich weiß nicht. Es wäre Diebstahl.  ");

                                    await ƒS.Character.hide(charaktere.maire);
                                    await ƒS.Character.show(charaktere.maire, charaktere.maire.pose.neutral, ƒS.positionPercent(charaktere.maire.positionStandard.x, charaktere.maire.positionStandard.y))
                                    await ƒS.update(0.4);

                                    await ƒS.Speech.tell(charaktere.maire, " Ja stimmt schon… Trotzdem. Ich habe ein schlechtes Gefühl bei der Sache. ");

                                    await ƒS.Character.hide(charaktere.bronte);
                                    await ƒS.Character.show(charaktere.bronte, charaktere.bronte.pose.sad, ƒS.positionPercent(charaktere.bronte.positionStandard.x, charaktere.bronte.positionStandard.y));
                                    await ƒS.update(0.4);

                                    break;
                            }

                            counterHowManyCloaks += 1;
                            lastCloakIsaac = false;
                            chooseWhichCloak.alaistar = "";
                            await checkIfLoopShouldContinue();
                            break;

                        case chooseWhichCloak.stella:
                            await ƒS.Speech.tell(charaktere.bronte, " Eine leichte Sommerjacke in einem zarten Blau. ");

                            await ƒS.Character.hide(charaktere.bronte);
                            await ƒS.Character.show(charaktere.bronte, charaktere.bronte.pose.laugh, ƒS.positionPercent(charaktere.bronte.positionStandard.x, charaktere.bronte.positionStandard.y));
                            await ƒS.update(0.4);

                            await ƒS.Speech.tell(charaktere.bronte, " Eine Puderdose und ein kleiner Spiegel. Oh und ein paar Bonbons. Himbeere.   ");

                            await ƒS.Character.hide(charaktere.bronte);
                            await ƒS.Character.show(charaktere.bronte, charaktere.bronte.pose.think, ƒS.positionPercent(charaktere.bronte.positionStandard.x, charaktere.bronte.positionStandard.y));
                            await ƒS.update(0.4);

                            counterHowManyCloaks += 1;
                            lastCloakIsaac = false;
                            chooseWhichCloak.stella = "";

                            await checkIfLoopShouldContinue();
                            break;

                        case chooseWhichCloak.isaac:

                            await ƒS.Character.hide(charaktere.bronte);
                            await ƒS.Character.show(charaktere.bronte, charaktere.bronte.pose.sad, ƒS.positionPercent(charaktere.bronte.positionStandard.x, charaktere.bronte.positionStandard.y));
                            await ƒS.update(0.4);

                            await ƒS.Speech.tell(charaktere.bronte, " Ein Bild… Oh… Ein Datum von vor zwei Jahren. Eine junge Frau… Dass muss Odette sein. ");

                            await ƒS.Character.hide(charaktere.maire);
                            await ƒS.Character.show(charaktere.maire, charaktere.maire.pose.happy, ƒS.positionPercent(charaktere.maire.positionStandard.x, charaktere.maire.positionStandard.y))
                            await ƒS.update(0.4);

                            await ƒS.Speech.tell(charaktere.maire, " Sie sieht so glücklich aus… Dass muss Isaacs Mantel sein. ");

                            await ƒS.Character.hide(charaktere.maire);
                            await ƒS.Character.show(charaktere.maire, charaktere.maire.pose.sad, ƒS.positionPercent(charaktere.maire.positionStandard.x, charaktere.maire.positionStandard.y))
                            await ƒS.update(0.4);

                            await ƒS.Speech.tell(charaktere.bronte, " Ja… Hier ist noch ein Taschentuch und etwas Kleingeld, sonst nichts… Mhm… ");
                            await ƒS.Speech.tell(charaktere.maire, " Nichts Auffälliges hier. Er scheint Odette wirklich sehr zu vermissen… Der Arme.");

                            lastCloakIsaac = true;
                            counterHowManyCloaks += 1;
                            chooseWhichCloak.isaac = "";
                            await checkIfLoopShouldContinue();
                            break;

                        case chooseWhichCloak.stop:

                            await ƒS.Character.hide(charaktere.bronte);
                            await ƒS.Character.show(charaktere.bronte, charaktere.bronte.pose.sad, ƒS.positionPercent(charaktere.bronte.positionStandard.x, charaktere.bronte.positionStandard.y));
                            await ƒS.update(0.4);

                            await ƒS.Speech.tell(charaktere.bronte, " Dass ist zu riskant. Lass uns gehen. ");
                            await ƒS.Speech.tell(charaktere.maire, " Okay.");
                            stillInLoop = false;
                            break;
                    }

                }

                break;

            case chooseSearchCloaks.no:
                await ƒS.Speech.tell(charaktere.bronte, " Maire, das ist keine gute Idee. Vor allem wenn Mr. Blackburn oder Grace uns dabei erwischt. Wir müssen vorsichtiger sein. ");
                await ƒS.Speech.tell(charaktere.maire, " Mhm… wenn du meist. Ich habe nur das Gefühl… ach… egal. Oh, da kommt Isaac. Was will der hier?");

                break;
        }

        if (lastCloakIsaac && counterHowManyCloaks == 2) {

            await ƒS.Character.show(charaktere.isaac, charaktere.isaac.pose.sad, ƒS.positionPercent(charaktere.isaac.positionStandard.x, charaktere.isaac.positionStandard.y));
            await ƒS.update(0.8);

            await ƒS.Character.hide(charaktere.maire);
            await ƒS.Character.show(charaktere.maire, charaktere.maire.pose.embarrassed, ƒS.positionPercent(charaktere.maire.positionStandard.x, charaktere.maire.positionStandard.y))
            await ƒS.Character.hide(charaktere.bronte);
            await ƒS.Character.show(charaktere.bronte, charaktere.bronte.pose.shout, ƒS.positionPercent(charaktere.bronte.positionStandard.x, charaktere.bronte.positionStandard.y));
            await ƒS.Character.hide(charaktere.isaac);
            await ƒS.Character.show(charaktere.isaac, charaktere.isaac.pose.cry, ƒS.positionPercent(charaktere.isaac.positionStandard.x, charaktere.isaac.positionStandard.y));
            await ƒS.update(0.4);

            await ƒS.Speech.tell(charaktere.isaac, " !!! Was machen sie da? Dass ist mein Mantel! ");

            await ƒS.Character.hide(charaktere.maire);
            await ƒS.Character.show(charaktere.maire, charaktere.maire.pose.fear, ƒS.positionPercent(charaktere.maire.positionStandard.x, charaktere.maire.positionStandard.y))
            await ƒS.Character.hide(charaktere.bronte);
            await ƒS.Character.show(charaktere.bronte, charaktere.bronte.pose.sad, ƒS.positionPercent(charaktere.bronte.positionStandard.x, charaktere.bronte.positionStandard.y));
            await ƒS.Character.hide(charaktere.isaac);
            await ƒS.Character.show(charaktere.isaac, charaktere.isaac.pose.neutral, ƒS.positionPercent(charaktere.isaac.positionStandard.x, charaktere.isaac.positionStandard.y));
            await ƒS.update(0.4);

            await ƒS.Speech.tell(charaktere.maire, " Oh… äh… Dass tut uns Leid. Ich… dachte es wäre meiner. ");

            await ƒS.Character.hide(charaktere.maire);
            await ƒS.Character.show(charaktere.maire, charaktere.maire.pose.embarrassed, ƒS.positionPercent(charaktere.maire.positionStandard.x, charaktere.maire.positionStandard.y))
            await ƒS.update(0.4);

            await ƒS.Speech.tell(charaktere.isaac, " Sie tragen ihren Mantel! ");

            await ƒS.Character.hide(charaktere.maire);
            await ƒS.Character.show(charaktere.maire, charaktere.maire.pose.neutral, ƒS.positionPercent(charaktere.maire.positionStandard.x, charaktere.maire.positionStandard.y))
            await ƒS.update(0.4);

            await ƒS.Speech.tell(charaktere.maire, " Oh… haha… stimmt… wie doof von mir… ");

            await ƒS.Character.hide(charaktere.isaac);
            await ƒS.Character.show(charaktere.isaac, charaktere.isaac.pose.sad, ƒS.positionPercent(charaktere.isaac.positionStandard.x, charaktere.isaac.positionStandard.y));
            await ƒS.update(0.4);

            await ƒS.Speech.tell(charaktere.isaac, " Mhm…");

            dataForSave.pointAngryGrace -= 1; 
            if (dataForSave.pointAngryGrace >= 4) {
                await issacBadEnding(); 
                return "EndingBadGraceAngry"; 
            }

        } else {

            await ƒS.Character.hide(charaktere.isaac);
            await ƒS.Character.show(charaktere.isaac, charaktere.isaac.pose.neutral, ƒS.positionPercent(charaktere.isaac.positionStandard.x, charaktere.isaac.positionStandard.y));
            await ƒS.update(0.8);

            await ƒS.Character.hide(charaktere.bronte);
            await ƒS.Character.show(charaktere.bronte, charaktere.bronte.pose.shout, ƒS.positionPercent(charaktere.bronte.positionStandard.x, charaktere.bronte.positionStandard.y));
            await ƒS.Character.hide(charaktere.maire);
            await ƒS.Character.show(charaktere.maire, charaktere.maire.pose.fear, ƒS.positionPercent(charaktere.maire.positionStandard.x, charaktere.maire.positionStandard.y))
            await ƒS.Character.hide(charaktere.isaac);
            await ƒS.Character.show(charaktere.isaac, charaktere.isaac.pose.cry, ƒS.positionPercent(charaktere.isaac.positionStandard.x, charaktere.isaac.positionStandard.y));
            await ƒS.update(0.4);

            await ƒS.Speech.tell(charaktere.isaac, " Entschuldigen sie? ");

            await ƒS.Character.hide(charaktere.maire);
            await ƒS.Character.show(charaktere.maire, charaktere.maire.pose.embarrassed, ƒS.positionPercent(charaktere.maire.positionStandard.x, charaktere.maire.positionStandard.y))
            await ƒS.Character.hide(charaktere.isaac);
            await ƒS.Character.show(charaktere.isaac, charaktere.isaac.pose.neutral, ƒS.positionPercent(charaktere.isaac.positionStandard.x, charaktere.isaac.positionStandard.y));
            await ƒS.update(0.4);

            await ƒS.Speech.tell(charaktere.maire, " !!! ");

            await ƒS.Character.hide(charaktere.bronte);
            await ƒS.Character.show(charaktere.bronte, charaktere.bronte.pose.sad, ƒS.positionPercent(charaktere.bronte.positionStandard.x, charaktere.bronte.positionStandard.y));
            await ƒS.update(0.4);

            await ƒS.Speech.tell(charaktere.bronte, " Oh, verzeihen sie. Wir wollen nur- ");

            await ƒS.Character.hide(charaktere.maire);
            await ƒS.Character.show(charaktere.maire, charaktere.maire.pose.neutral, ƒS.positionPercent(charaktere.maire.positionStandard.x, charaktere.maire.positionStandard.y))
            await ƒS.Character.hide(charaktere.isaac);
            await ƒS.Character.show(charaktere.isaac, charaktere.isaac.pose.happy, ƒS.positionPercent(charaktere.isaac.positionStandard.x, charaktere.isaac.positionStandard.y));
            await ƒS.update(0.4);

            await ƒS.Speech.tell(charaktere.isaac, " Etwas herumstöbern. Keine Sorge, ich werde nichts erzählen. ");

            await ƒS.Character.hide(charaktere.bronte);
            await ƒS.Character.show(charaktere.bronte, charaktere.bronte.pose.happy, ƒS.positionPercent(charaktere.bronte.positionStandard.x, charaktere.bronte.positionStandard.y));
            await ƒS.update(0.4);

            await ƒS.Speech.tell(charaktere.maire, " Puh, da haben wir noch einmal Glück gehabt.");

        }

        await ƒS.Character.hide(charaktere.isaac);
        await ƒS.Character.show(charaktere.isaac, charaktere.isaac.pose.neutral, ƒS.positionPercent(charaktere.isaac.positionStandard.x, charaktere.isaac.positionStandard.y));
        await ƒS.update(0.4);

        await ƒS.Speech.tell(charaktere.isaac, " Ich weiß nicht wie es euch geht, aber im Salon halte ich es nicht mehr länger aus. Ich glaube ich rauche ein wenig draußen. Ich lade euch gerne auf eine ein, wenn ihr wollt. ");

        await ƒS.Character.hide(charaktere.bronte);
        await ƒS.Character.show(charaktere.bronte, charaktere.bronte.pose.sad, ƒS.positionPercent(charaktere.bronte.positionStandard.x, charaktere.bronte.positionStandard.y));
        await ƒS.update(0.4);

        await ƒS.Speech.tell(charaktere.bronte, " Oh, nein danke, wir- ");

        await ƒS.Character.hide(charaktere.bronte);
        await ƒS.Character.show(charaktere.bronte, charaktere.bronte.pose.shout, ƒS.positionPercent(charaktere.bronte.positionStandard.x, charaktere.bronte.positionStandard.y));
        await ƒS.Character.hide(charaktere.maire);
        await ƒS.Character.show(charaktere.maire, charaktere.maire.pose.laugh, ƒS.positionPercent(charaktere.maire.positionStandard.x, charaktere.maire.positionStandard.y))
        await ƒS.update(0.4);

        await ƒS.Speech.tell(charaktere.maire, " Dass klingt fabelhaft! Bronte muss sich noch die Nase pudern, aber ich komme gerne mit. ");

        await ƒS.Character.hide(charaktere.bronte);
        await ƒS.Character.show(charaktere.bronte, charaktere.bronte.pose.think, ƒS.positionPercent(charaktere.bronte.positionStandard.x, charaktere.bronte.positionStandard.y));
        await ƒS.update(0.4);

        await ƒS.Speech.tell(charaktere.bronte, " Oh… bist du dir sicher? ");

        await ƒS.Character.hide(charaktere.maire);
        await ƒS.Character.show(charaktere.maire, charaktere.maire.pose.happy, ƒS.positionPercent(charaktere.maire.positionStandard.x, charaktere.maire.positionStandard.y))
        await ƒS.update(0.4);

        await ƒS.Speech.tell(charaktere.maire, " Ja klar. ");

        await ƒS.Character.hide(charaktere.bronte);
        await ƒS.Character.show(charaktere.bronte, charaktere.bronte.pose.sad, ƒS.positionPercent(charaktere.bronte.positionStandard.x, charaktere.bronte.positionStandard.y));
        await ƒS.update(0.4);

        await ƒS.Speech.tell(charaktere.bronte, " Okay… dann bis gleich... ");

        await ƒS.Character.hide(charaktere.maire);
        await ƒS.Character.hide(charaktere.isaac);
        await ƒS.update(0.8);

        await ƒS.Character.hide(charaktere.bronte);
        await ƒS.update(1);

        dataForSave.searchedCloakFinished = true; 

        ƒS.Sound.fade(sound.themeEntryhall, 0, 2); 

        return "SceneTenMaireAndIsaac";

        async function checkIfLoopShouldContinue(): Promise<void> {

            console.log(counterHowManyCloaks);

            if (counterHowManyCloaks == 1) {
                await ƒS.Speech.tell(charaktere.maire, " Oh ich glaube ich höre Schritte… Was tun wir?");

            } else if (counterHowManyCloaks == 2) {
                stillInLoop = false;
            }
        }

        async function issacBadEnding(): Promise<void> {

            await ƒS.Speech.tell(charaktere.isaac, "Ich finde es nicht richtig, dass hier einfach in den privaten Sachen der Anwesenden rumwühlt.");

            await ƒS.Character.show(charaktere.isaac, charaktere.isaac.pose.neutral, ƒS.positionPercent(charaktere.isaac.positionStandard.x, charaktere.isaac.positionStandard.y));
            await ƒS.Character.hide(charaktere.isaac);
            await ƒS.update(0.4);

            await ƒS.Speech.tell(charaktere.isaac, "Selbst gegenüber Grace und Alaistar ist das nicht fair.");
            await ƒS.Speech.tell(charaktere.isaac, "Grace!");

            await ƒS.Character.hide(charaktere.bronte);
            await ƒS.Character.hide(charaktere.maire);
            await ƒS.update(0.8);
        
            await ƒS.Character.show(charaktere.grace, charaktere.grace.pose.think, ƒS.positionPercent(20, charaktere.grace.positionLeftMiddle.y));
            await ƒS.update(0.8);
        
            await ƒS.Speech.tell(charaktere.grace, " Ja, Isaac? ");
            await ƒS.Speech.tell(charaktere.isaac, "Miss Bronte hat angefangen in unseren persönlichen Sachen herum zu wühlen. ");
        
            await ƒS.Character.hide(charaktere.grace);
            await ƒS.Character.show(charaktere.grace, charaktere.grace.pose.angry, ƒS.positionPercent(20, charaktere.grace.positionLeftMiddle.y));
            await ƒS.update(0.8);
        
            await ƒS.Speech.tell(charaktere.grace, " Ich bin sehr enttäuscht von Ihnen Miss Bronte! Ich hatte bessere Manieren von Ihnen erwartet. ");
            await ƒS.Speech.tell(charaktere.bronte, " Oh, dass- ");
            await ƒS.Speech.tell(charaktere.grace, " Nein, bitte gehen sie alle. Ich habe Kopfschmerzen.");
        
            await ƒS.Character.hide(charaktere.grace);
            await ƒS.Character.hide(charaktere.isaac);
            await ƒS.update(0.8);
        
            ƒS.Sound.fade(sound.saloonAfterScrem, 0, 1, true);
        
            await ƒS.Location.show(location.black);
            await ƒS.update(5);
        
        }

    }
}