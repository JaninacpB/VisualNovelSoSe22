namespace Template {
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

        await ƒS.Speech.tell(charaktere.maire, " Uff… meinst du, die haben verdacht geschöpft? ");
        await ƒS.Speech.tell(charaktere.bronte, " Ich denke nicht. Aber du solltest die Codewörter vielleicht noch einmal wiederholen. ");
        await ƒS.Speech.tell(charaktere.maire, " Ja, tut mir leid. Ich stand etwas auf dem Schlauch. Aber jetzt wo wir unsere Ruhe haben was ist der Plan? ");
        await ƒS.Speech.tell(charaktere.bronte, " Wir sollten uns etwas umschauen. Die ganze Sache gefällt mir nicht. ");
        await ƒS.Speech.tell(charaktere.maire, " Ja warte, lass uns kurz alles zusammentragen. Was genau ist heute Abend passiert? Konzentrieren wir uns dabei auf das was wirklich wichtig war! ");
        await ƒS.Speech.tell(charaktere.bronte, " Okay. Als wir beim Anwesen angekommen sind, ist…");


        let userChooseWhatHapppendFirst = await ƒS.Menu.getInput(chooseWhatHapppendFirst, "BasicChoice");
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

        let userChooseWhatButlerTold = await ƒS.Menu.getInput(chooseWhatButlerTold, "BasicChoice");
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

        let userchooseWhoWrongInSaalon = await ƒS.Menu.getInput(chooseWhoWrongInSaalon, "BasicChoice");
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

        let userChooseWhatHappendCat = await ƒS.Menu.getInput(chooseWhatHappendCat, "BasicChoice");
        switch (userChooseWhatHappendCat) {
            case chooseWhatHappendCat.catTrapped:
                pointsRecap += 1;
                break;

            case chooseWhatHappendCat.secretShed:
                break;
        }

        await ƒS.Speech.tell(charaktere.bronte, "Doch das seltsamste Verhalten danach war von...");

        let userChooseWhoActedWeird = await ƒS.Menu.getInput(chooseWhoActedWeird, "BasicChoice");
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
            await ƒS.Speech.tell(charaktere.maire, "  Sehr gut! Vielleicht müssen wir noch an manchen Einzelheiten Pfeilen aber, ungefähr so war es. ");
        } else {
            await ƒS.Speech.tell(charaktere.maire, "Mhm… also meine Notizen sind etwas anders. Wir haben Artemis gesehen, dann hat der Butler uns erzählt Alaistar sei der Erbe. ");
            await ƒS.Speech.tell(charaktere.maire, "Isaac kommt zu besuch obwohl die Familie ihn nicht mag. Jemand hat die Katze im Garten einschlossen und Stella hat geschrien.");
            await ƒS.Speech.tell(charaktere.bronte, "Was würde ich nur ohne deine Hilfe tun. Danke Maire.");

        }

        await ƒS.Speech.tell(charaktere.maire, " Ja… komisch diese ganzen Sachen. ");
        await ƒS.Speech.tell(charaktere.bronte, " Und wie… ich denke uns fehlen noch ein paar Informationen, um wirklich alles zusammenzusetzen. ");
        await ƒS.Speech.tell(charaktere.maire, " Ja. Woher kommt der Ring? Was ist mit Stella los? Und ich für meinen Teil traue dem Butler immer noch nicht. ");
        await ƒS.Speech.tell(charaktere.bronte, " Alles gute Punkte. Auf meiner Liste steht auch immer noch Isaac. ");
        await ƒS.Speech.tell(charaktere.maire, " Oh warum das? ");
        await ƒS.Speech.tell(charaktere.bronte, " Mich wundert es, dass er immer noch die Familie besucht, die ihn doch nicht äußerst anständig behandelt. ");
        await ƒS.Speech.tell(charaktere.maire, " Das ist ein sehr guter Punkt, der mir bisher gar nicht eingefallen war. Die Frage ist nur wo wir diese ganzen Antworten herbekommen? ");
        await ƒS.Speech.tell(charaktere.bronte, " Ich denke wir sollten das Manor etwas genauer unter die Luppe nehmen. Vor allem das Arbeitszimmer. ");
        await ƒS.Speech.tell(charaktere.maire, " Das Arbeitszimmer? Interessierst du dich etwas für die Steuern der Familie? ");
        await ƒS.Speech.tell(charaktere.bronte, " Nein, aber ich habe so eine Vermutung, dort könnten interessante Unterlagen sein. Und es ist immerhin der Ursprungspunkt des Verbrechens! ");
        await ƒS.Speech.tell(charaktere.maire, " Hä? ");
        await ƒS.Speech.tell(charaktere.bronte, " Naja dort ist Artemis verschwunden. ");
        await ƒS.Speech.tell(charaktere.maire, " Oh stimmt! Grace meinte das Artemis dort eigentlich immer ist, außer sie wird in den Garten gelassen von den Angestellten. ");
        await ƒS.Speech.tell(charaktere.bronte, " Ja, ich denke dort können wir vielleicht Hinweise darüber finden, was genau hier vorgeht. Also lass uns loslegen! ");
        await ƒS.Speech.tell(charaktere.maire, " Warte… ich habe noch eine andere Idee. Sie ist nur etwas… radikal. ");
        await ƒS.Speech.tell(charaktere.bronte, " Was genau? ");
        await ƒS.Speech.tell(charaktere.maire, " Naja, ich dachte, weil alle so verschlossen sind und wir eh schon am naja rumschnüffeln sind, könnten wir vielleicht gleich ihre Sachen untersuchen? ");
        await ƒS.Speech.tell(charaktere.bronte, " Ihre Sachen? ");
        await ƒS.Speech.tell(charaktere.maire, " Ja, der Butler hat die Mäntel doch vorhin aufgehängt. Dort vorne hängen sie. Wenn gerade keiner da ist, könnten wir sie vielleicht durchsuchen…");



        await ƒS.Speech.tell(charaktere.bronte, "Doch das seltsamste Verhalten danach war von...");

        let userChooseSearchCloaks = await ƒS.Menu.getInput(chooseSearchCloaks, "BasicChoice");
        switch (userChooseSearchCloaks) {
            case chooseSearchCloaks.yes:

                await ƒS.Speech.tell(charaktere.bronte, " Ich denke, dass ist eine gute Idee. Wir sollten nur schnell sein, nicht dass uns jemand erwischt. ");
                await ƒS.Speech.tell(charaktere.maire, " Okay, dann schnell. Mhm… Also wir haben hier 4 Jacken. Welche sollen wir zuerst anschauen?");

                while (stillInLoop) {

                    let userChooseWhichCloak = await ƒS.Menu.getInput(chooseWhichCloak, "BasicChoice");
                    switch (userChooseWhichCloak) {
                        case chooseWhichCloak.grace:
                            await ƒS.Speech.tell(charaktere.bronte, " Ein schwerer Damenmantel aus einem teuren Pelz.  ");
                            await ƒS.Speech.tell(charaktere.bronte, " Mhm… Hier in der Tasche ist eine Tanzkarte von einem Ball. Eine Puderdose aber sonst nicht wirklich viel.   ");
                            counterHowManyCloaks += 1;
                            lastCloakIsaac = false;
                            chooseWhichCloak.grace = "";
                            await checkIfLoopShouldContinue(); 
                            break;

                        case chooseWhichCloak.alaistar:
                            await ƒS.Speech.tell(charaktere.bronte, " Einen schwerer schwarzer Mantel mit rotem Samt drin. ");
                            await ƒS.Speech.tell(charaktere.bronte, " Eine Brille, ein Tabakdose und oh… Oh weh. ");
                            await ƒS.Speech.tell(charaktere.maire, " Was ist? ");
                            await ƒS.Speech.tell(charaktere.bronte, " Hier ist eine Waffe. ");
                            await ƒS.Speech.tell(charaktere.maire, " !!! Was ");
                            await ƒS.Speech.tell(charaktere.bronte, " Ja eine kleine Pistole.  4 Schuss. Keine Jagdwaffe oder so. Ein echter Revolver. ");
                            await ƒS.Speech.tell(charaktere.maire, " Wer würde so ein Revolver einfach in seinem Mantel dabeihaben?");

                            let userChooseWhoGun = await ƒS.Menu.getInput(chooseWhoGun, "BasicChoice");
                            switch (userChooseWhoGun) {
                                case chooseWhoGun.grace:

                                case chooseWhoGun.isaac:

                                case chooseWhoGun.stella:

                                    await ƒS.Speech.tell(charaktere.maire, " Mhm… ich weiß ja nicht. Der Mantel scheint eher zu Mr. Blackburn zu gehören. Er ist der einzige mit einer Brille. ");

                                    break;

                                case chooseWhoGun.alaistar:
                                    //todo: detectiv point
                                    await ƒS.Speech.tell(charaktere.bronte, "Dunkler teurer Mantel mit einer Brille. Dieser Mantel gehört zu Mr. Blackburn. Aber ich weiß nicht warum er eine Waffe braucht. ");

                                    break;
                            }

                            await ƒS.Speech.tell(charaktere.maire, "Wir können denn nicht hierlassen, oder? Sollen wir ihn mitnehmen?");

                            let userTakeGun = await ƒS.Menu.getInput(takeGun, "BasicChoice");
                            switch (userTakeGun) {
                                case takeGun.yes:
                                    await ƒS.Speech.tell(charaktere.bronte, " Ja. Ich habe ein schlechtes Gefühl… Lass ihn mitnehmen. ");

                                    break;

                                case takeGun.no:

                                    await ƒS.Speech.tell(charaktere.bronte, "Mhm… ich weiß nicht. Es wäre Diebstahl.  ");
                                    await ƒS.Speech.tell(charaktere.maire, " Ja stimmt schon… Trotzdem. Ich habe ein schlechtes Gefühl bei der Sache. ");
                                    break;
                            }

                            counterHowManyCloaks += 1;
                            lastCloakIsaac = false;
                            chooseWhichCloak.alaistar = "";
                            await checkIfLoopShouldContinue(); 
                            break;

                        case chooseWhichCloak.stella:
                            await ƒS.Speech.tell(charaktere.bronte, " Eine leichte Sommerjacke in einem zarten Blau. ");
                            await ƒS.Speech.tell(charaktere.bronte, " Eine Puderdose und ein kleiner Spiegel. Oh und ein paar Bonbons. Himbeere.   ");
                            counterHowManyCloaks += 1;
                            lastCloakIsaac = false;
                            chooseWhichCloak.stella = "";

                            await checkIfLoopShouldContinue(); 
                            break;

                        case chooseWhichCloak.isaac:
                            await ƒS.Speech.tell(charaktere.bronte, " Ein Bild… Oh… Ein Datum von vor zwei Jahren. Eine junge Frau… Dass muss Odette sein. ");
                            await ƒS.Speech.tell(charaktere.maire, " Sie sieht so glücklich aus… Dass muss Isaacs Mantel sein. ");
                            await ƒS.Speech.tell(charaktere.bronte, " Ja… Hier ist noch ein Taschentuch und etwas Kleingeld, sonst nichts… Mhm… ");
                            await ƒS.Speech.tell(charaktere.maire, " Nichts Auffälliges hier. Er scheint Odette wirklich sehr zu vermissen… Der Arme.");

                            lastCloakIsaac = true;
                            counterHowManyCloaks += 1;
                            chooseWhichCloak.isaac = "";
                            await checkIfLoopShouldContinue(); 
                            break;

                        case chooseWhichCloak.stop:
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

            await ƒS.Speech.tell(charaktere.isaac, " !!! Was machen sie da? Dass ist mein Mantel! ");
            await ƒS.Speech.tell(charaktere.maire, " Oh… äh… Dass tut uns Leid. Ich… dachte es wäre meiner. ");
            await ƒS.Speech.tell(charaktere.isaac, " Sie tragen ihren Mantel! ");
            await ƒS.Speech.tell(charaktere.maire, " Oh… haha… stimmt… wie doof von mir… ");
            await ƒS.Speech.tell(charaktere.isaac, " Mhm…");

            // todo: -1 Grace und eventuell end Szene mit Grace 

        } else {

            await ƒS.Speech.tell(charaktere.isaac, " Entschuldigen sie? ");
            await ƒS.Speech.tell(charaktere.maire, " !!! ");
            await ƒS.Speech.tell(charaktere.bronte, " Oh, verzeihen sie. Wir wollen nur- ");
            await ƒS.Speech.tell(charaktere.isaac, " Etwas herumstöbern. Keine Sorge, ich werde nichts erzählen. ");
            await ƒS.Speech.tell(charaktere.maire, " Puh, da haben wir noch einmal Glück gehabt.");

        }

        await ƒS.Speech.tell(charaktere.isaac, " Ich weiß nicht wie es euch geht, aber im Salon halte ich es nicht mehr länger aus. Ich glaube ich rauche ein wenig draußen. Ich lade euch gerne auf eine ein, wenn ihr wollt. ");
        await ƒS.Speech.tell(charaktere.bronte, " Oh, nein danke, wir- ");
        await ƒS.Speech.tell(charaktere.maire, " Dass klingt fabelhaft! Bronte muss sich noch die Nase pudern, aber ich komme gerne mit. ");
        await ƒS.Speech.tell(charaktere.bronte, " Oh… bist du dir sicher? ");
        await ƒS.Speech.tell(charaktere.maire, " Ja klar. ");
        await ƒS.Speech.tell(charaktere.bronte, " Okay… dann bis gleich... ");
        await ƒS.Speech.tell(charaktere.maire, " Warte! ");
        await ƒS.Speech.tell(charaktere.bronte, " Was ist los? ");
        await ƒS.Speech.tell(charaktere.maire, " Draußen vor der Tür steht jemand, ich kann ein leichte Flamme durchs Fenster sehen. ");
        await ƒS.Speech.tell(charaktere.bronte, " Sehr aufmerksam von dir! Mhm… Ich denke es ist Isaac. ");
        await ƒS.Speech.tell(charaktere.maire, " Eine Gelegenheit mit ihm allein zu sprechen. Die sollten wir uns nicht entgehen lassen. ");
        await ƒS.Speech.tell(charaktere.bronte, " Da hast du recht… Aber wir haben auch nicht viel Zeit zum Untersuchen des Gebäudes. ");
        await ƒS.Speech.tell(charaktere.maire, " Mhm… Dann lass uns aufteilen! ");
        await ƒS.Speech.tell(charaktere.bronte, " Oh… Dass ist… Eine gute Idee! Sprich mit Isaac und ich gehe ins Arbeitszimmer. Wir treffen uns in ein paar Minuten! ");


        return "SceneTenMaireAndIsaac"; 

        async function checkIfLoopShouldContinue(): Promise<void> {

            console.log(counterHowManyCloaks);

            if (counterHowManyCloaks == 1) {
                await ƒS.Speech.tell(charaktere.maire, " Oh ich glaube ich höre Schritte… Was tun wir?");

            } else if (counterHowManyCloaks == 2) {
                stillInLoop = false; 
            }
        }

    }
}