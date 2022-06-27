namespace Template {
    export async function SceneEightBInterviews(): ƒS.SceneReturn {

        let chooseWhoToInterview = {
            stella: "Stella",
            alaistar: "Alaistar",
            searchRoom: "Raum anschauen",
            isaac: ""
        }

        let stellaTalk = {
            scream: "Schrei",
            family: "Familie",
            personInfrontOfHouse: "Gestalt vor Haus",
            somebodyelse: "Weggehen"
        }

        let alaistarTalk = {
            isaac: "Isaac",
            artemis: "Artemis",
            somebodyelse: "Weggehen"
        }

        let roomOptions = {
            painting: "Gemälde untersuchen",
            food: "Essen untersuchen",
            window: "Fenster untersuchen",
            somethingelse: "Weggehen"
        }

        let isaacTalk = {
            wife: "Ehefrau",
            family: "Familie",
            ring: "",
            somebodyelse: "Weggehen"
        }

        let stillInLoop = true;

        while (stillInLoop) {

            let userchooseWhoToInterview = await ƒS.Menu.getInput(chooseWhoToInterview, "BasicChoice");

            switch (userchooseWhoToInterview) {
                case chooseWhoToInterview.stella:

                    await ƒS.Character.show(charaktere.stella, charaktere.stella.pose.sad, ƒS.positionPercent(charaktere.stella.positionMiddle.x, charaktere.stella.positionMiddle.y));
                    await ƒS.update(0.4);

                    await ƒS.Speech.tell(charaktere.stella, " Oh… wie kann ich helfen? ");


                    let stellaLoop = true;

                    while (stellaLoop) {
                        let userChooseStellaTalk = await ƒS.Menu.getInput(stellaTalk, "BasicChoice");

                        await ƒS.Character.hide(charaktere.stella)
                        await ƒS.Character.show(charaktere.stella, charaktere.stella.pose.sad, ƒS.positionPercent(charaktere.stella.positionMiddle.x, charaktere.stella.positionMiddle.y));
                        await ƒS.update(0.4);


                        switch (userChooseStellaTalk) {
                            case stellaTalk.family:

                                await ƒS.Character.hide(charaktere.bronte);
                                await ƒS.Character.show(charaktere.bronte, charaktere.bronte.pose.think, ƒS.positionPercent(charaktere.bronte.positionStandard.x, charaktere.bronte.positionStandard.y));
                                await ƒS.update(0.4);

                                await ƒS.Speech.tell(charaktere.bronte, " Isaac ist dann dein Onkel? ");

                                await ƒS.Character.hide(charaktere.stella)
                                await ƒS.Character.show(charaktere.stella, charaktere.stella.pose.frighten, ƒS.positionPercent(charaktere.stella.positionMiddle.x, charaktere.stella.positionMiddle.y));
                                await ƒS.update(0.4);

                                await ƒS.Speech.tell(charaktere.stella, " Oh nein! Ich bin die Tochter von Leopold Dufour. Mein Onkel ist Graces Ehemann, welcher leider vor einigen Jahren verstorben ist. ");

                                await ƒS.Character.hide(charaktere.stella)
                                await ƒS.Character.show(charaktere.stella, charaktere.stella.pose.sad, ƒS.positionPercent(charaktere.stella.positionMiddle.x, charaktere.stella.positionMiddle.y));
                                await ƒS.update(0.4);

                                await ƒS.Speech.tell(charaktere.stella, " Sie hat nur nach seinem tot wieder ihren Mädchennamen angenommen. Und da sie keine Kinder bekommen haben, hat sie mich unter ihre Fittiche genommen. ");

                                await ƒS.Character.hide(charaktere.bronte);
                                await ƒS.Character.show(charaktere.bronte, charaktere.bronte.pose.happy, ƒS.positionPercent(charaktere.bronte.positionStandard.x, charaktere.bronte.positionStandard.y));
                                await ƒS.update(0.4);

                                await ƒS.Speech.tell(charaktere.bronte, " Oh ich verstehe. Und wie sieht es bei Lord Blackburn mit der Familie aus? ");
                                await ƒS.Speech.tell(charaktere.stella, " Seine Frau ist in Wales im Landhaus der Familie und seine Söhne reisen zurzeit um die Welt soweit ich weiß.");
                                await ƒS.Speech.tell(charaktere.stella, " Er selber ist häufiger in London für geschäftliches und ist dann immer bei seiner Schwester, der er ja dafür extra das ehemalige Familienhaus gegeben hat. ");
                                await ƒS.Speech.tell(charaktere.bronte, " Ich sehe, die Familie kümmert sich umeinander.");

                                await ƒS.Character.hide(charaktere.bronte);
                                await ƒS.Character.show(charaktere.bronte, charaktere.bronte.pose.think, ƒS.positionPercent(charaktere.bronte.positionStandard.x, charaktere.bronte.positionStandard.y));
                                await ƒS.update(0.4);

                                stellaTalk.family = "";
                                break;

                            case stellaTalk.personInfrontOfHouse:

                                await ƒS.Character.hide(charaktere.bronte);
                                await ƒS.Character.show(charaktere.bronte, charaktere.bronte.pose.think, ƒS.positionPercent(charaktere.bronte.positionStandard.x, charaktere.bronte.positionStandard.y));
                                await ƒS.update(0.4);

                                await ƒS.Speech.tell(charaktere.bronte, " Vorhin schienen Sie sich ja wirklich sehr erschreckt zu haben. Können sie mehr darüber erzählen was genau sie ");
                                await ƒS.Speech.tell(charaktere.bronte, " Du hast die letzten Tage eine Gestalt vor dem Haus gesehen? ");

                                await ƒS.Character.hide(charaktere.stella)
                                await ƒS.Character.show(charaktere.stella, charaktere.stella.pose.frighten, ƒS.positionPercent(charaktere.stella.positionMiddle.x, charaktere.stella.positionMiddle.y));
                                await ƒS.update(0.4);

                                await ƒS.Speech.tell(charaktere.stella, " Oh… ich… vermutlich nicht… ");

                                await ƒS.Character.hide(charaktere.stella)
                                await ƒS.Character.show(charaktere.stella, charaktere.stella.pose.sad, ƒS.positionPercent(charaktere.stella.positionMiddle.x, charaktere.stella.positionMiddle.y));
                                await ƒS.update(0.4);

                                await ƒS.Character.hide(charaktere.maire);
                                await ƒS.Character.show(charaktere.maire, charaktere.maire.pose.sad, ƒS.positionPercent(charaktere.maire.positionStandard.x, charaktere.maire.positionStandard.y));

                                await ƒS.Speech.tell(charaktere.maire, "(Bronte so kommen wir bei ihr nicht weiter.)");

                                await ƒS.Character.hide(charaktere.maire);
                                await ƒS.Character.show(charaktere.maire, charaktere.maire.pose.neutral, ƒS.positionPercent(charaktere.maire.positionStandard.x, charaktere.maire.positionStandard.y));
                                await ƒS.update(0.4);

                                stellaTalk.personInfrontOfHouse = "";
                                break;

                            case stellaTalk.scream:

                                await ƒS.Character.hide(charaktere.bronte);
                                await ƒS.Character.show(charaktere.bronte, charaktere.bronte.pose.sad, ƒS.positionPercent(charaktere.bronte.positionStandard.x, charaktere.bronte.positionStandard.y));
                                await ƒS.update(0.4);

                                await ƒS.Speech.tell(charaktere.bronte, " Vorhin schienen Sie sich ja wirklich sehr erschreckt zu haben. Können sie mehr darüber erzählen was genau sie so erschreckt hat? ");
                                await ƒS.Speech.tell(charaktere.stella, " Oh… Ich weiß nicht. ");

                                await ƒS.Character.hide(charaktere.maire);
                                await ƒS.Character.show(charaktere.maire, charaktere.maire.pose.sad, ƒS.positionPercent(charaktere.maire.positionStandard.x, charaktere.maire.positionStandard.y));
                                await ƒS.update(0.4);

                                await ƒS.Speech.tell(charaktere.maire, " (Bronte wir müssen sie irgendwie überzeugen uns alles zu erzählen.) ");

                                await ƒS.Character.hide(charaktere.maire);
                                await ƒS.Character.show(charaktere.maire, charaktere.maire.pose.neutral, ƒS.positionPercent(charaktere.maire.positionStandard.x, charaktere.maire.positionStandard.y));
                                await ƒS.Character.hide(charaktere.bronte);
                                await ƒS.Character.show(charaktere.bronte, charaktere.bronte.pose.think, ƒS.positionPercent(charaktere.bronte.positionStandard.x, charaktere.bronte.positionStandard.y));
                                await ƒS.update(0.4);

                                await ƒS.Speech.tell(charaktere.bronte, " Mhm… ja aber wie?");

                                stellaTalk.scream = "";
                                break;

                            case stellaTalk.somebodyelse:

                                await ƒS.Speech.tell(charaktere.bronte, " Ich denke jemand anderes wäre gerade hilfreicher. ");

                                await ƒS.Character.hide(charaktere.stella)
                                await ƒS.update(0.4);

                                stellaLoop = false;
                                break;
                        }
                    }

                    if (stellaTalk.family.length == 0 && stellaTalk.personInfrontOfHouse.length == 0 && stellaTalk.scream.length == 0) {
                        chooseWhoToInterview.stella = "";
                    }

                    break;

                case chooseWhoToInterview.alaistar:
                    let alaistarLoop = true;

                    await ƒS.Character.show(charaktere.alaistar, charaktere.alaistar.pose.neutral, ƒS.positionPercent(charaktere.alaistar.positionMiddle.x, charaktere.alaistar.positionMiddle.y));
                    await ƒS.update(0.4);

                    await ƒS.Speech.tell(charaktere.alaistar, " Ja, was ist los?");

                    while (alaistarLoop) {
                        let userChooseAlaistarTalk = await ƒS.Menu.getInput(alaistarTalk, "BasicChoice");

                        switch (userChooseAlaistarTalk) {
                            case alaistarTalk.artemis:

                                await ƒS.Speech.tell(charaktere.bronte, " Wie ist eigentlich ihre Beziehung zu Artemis?  ");
                                await ƒS.Speech.tell(charaktere.alaistar, " Wer?  ");
                                await ƒS.Speech.tell(charaktere.alaistar, " Ach die Katze… Naja sie ist halt eine Katze. Nicht sonderlich interessant.  ");
                                await ƒS.Speech.tell(charaktere.bronte, " Ihre Schwester scheint sie sehr lieb zu haben.  ");

                                await ƒS.Character.hide(charaktere.alaistar);
                                await ƒS.Character.show(charaktere.alaistar, charaktere.alaistar.pose.happy, ƒS.positionPercent(charaktere.alaistar.positionMiddle.x, charaktere.alaistar.positionMiddle.y));
                                await ƒS.update(0.4);

                                await ƒS.Speech.tell(charaktere.alaistar, " Ach die war nur ein wenig hysterisch vorhin. War meine Mutter schon immer.  ");

                                await ƒS.Character.hide(charaktere.alaistar);
                                await ƒS.Character.show(charaktere.alaistar, charaktere.alaistar.pose.neutral, ƒS.positionPercent(charaktere.alaistar.positionMiddle.x, charaktere.alaistar.positionMiddle.y));
                                await ƒS.update(0.4);

                                await ƒS.Speech.tell(charaktere.alaistar, " Aber Grace hat sich ja mittlerweile beruhig.  ");
                                await ƒS.Speech.tell(charaktere.bronte, " Und überraschend schnell…");

                                alaistarTalk.artemis = "";
                                break;


                            case alaistarTalk.isaac:

                                await ƒS.Speech.tell(charaktere.bronte, " Ich möchte ihnen nicht zu nahetreten, aber ihre Beziehung zu ihrem Schwager scheint nicht sonderlich gut zu sein. ");


                                await ƒS.Character.hide(charaktere.alaistar);
                                await ƒS.Character.show(charaktere.alaistar, charaktere.alaistar.pose.angry, ƒS.positionPercent(charaktere.alaistar.positionMiddle.x, charaktere.alaistar.positionMiddle.y));
                                await ƒS.update(0.4);

                                await ƒS.Speech.tell(charaktere.alaistar, " Nun, dass kann ich wohl schwer leugnen. ");
                                await ƒS.Speech.tell(charaktere.bronte, " Hat dies einen bestimmten Ursprung oder ist dies einfach… unterschiedlichen Charakteren geschuldet? ");


                                await ƒS.Character.hide(charaktere.alaistar);
                                await ƒS.Character.show(charaktere.alaistar, charaktere.alaistar.pose.neutral, ƒS.positionPercent(charaktere.alaistar.positionMiddle.x, charaktere.alaistar.positionMiddle.y));
                                await ƒS.update(0.4);

                                await ƒS.Speech.tell(charaktere.alaistar, "Um es diplomatisch auszudrücken, er passt einfach nicht in die Familie. Es ist sowohl für mich als auch für ihn eine Schande der gleichen Familie anzugehören. ");

                                await ƒS.Character.hide(charaktere.alaistar);
                                await ƒS.Character.show(charaktere.alaistar, charaktere.alaistar.pose.angry, ƒS.positionPercent(charaktere.alaistar.positionMiddle.x, charaktere.alaistar.positionMiddle.y));
                                await ƒS.update(0.4);

                                await ƒS.Speech.tell(charaktere.alaistar, "Um Himmelswillen, er muss arbeiten um Geld zu verdienen. Wie sieht dass denn bitte aus!? ");

                                await ƒS.Character.hide(charaktere.maire);
                                await ƒS.Character.show(charaktere.maire, charaktere.maire.pose.sad, ƒS.positionPercent(charaktere.maire.positionStandard.x, charaktere.maire.positionStandard.y));
                                await ƒS.Character.hide(charaktere.alaistar);
                                await ƒS.Character.show(charaktere.alaistar, charaktere.alaistar.pose.neutral, ƒS.positionPercent(charaktere.alaistar.positionMiddle.x, charaktere.alaistar.positionMiddle.y));
                                await ƒS.update(0.4);

                                await ƒS.Speech.tell(charaktere.maire, " (…) ");

                                await ƒS.Speech.tell(charaktere.alaistar, " Entschuldigen Sie. Gibt es nicht vielleicht ein anderes Thema über dass wir sprechen können? ");

                                await ƒS.Character.hide(charaktere.maire);
                                await ƒS.Character.show(charaktere.maire, charaktere.maire.pose.neutral, ƒS.positionPercent(charaktere.maire.positionStandard.x, charaktere.maire.positionStandard.y));
                                await ƒS.update(0.4);

                                await ƒS.Speech.tell(charaktere.maire, " (Er sieht ziemlich sauer aus, ich glaube das Thema ist nicht gut bei ihm angekommen) ");

                                dataForSave.pointAngryGrace += 1;
                                if (dataForSave.pointAngryGrace >= 3) {
                                    graceBadEnding();
                                }

                                alaistarTalk.isaac = "";
                                break;

                            case alaistarTalk.somebodyelse:

                                await ƒS.Speech.tell(charaktere.bronte, " Wir sollten etwas anderes machen... ");


                                await ƒS.Character.hide(charaktere.alaistar);
                                await ƒS.update(0.4);

                                alaistarLoop = false;
                                break;
                        }
                    }

                    if (alaistarTalk.artemis.length == 0 && alaistarTalk.isaac.length == 0) {
                        chooseWhoToInterview.alaistar = "";
                    }

                    break;

                case chooseWhoToInterview.searchRoom:
                    let roomLoop = true;
                    await ƒS.Speech.tell(charaktere.bronte, "Lass uns den Raum genauer ansehen!");

                    while (roomLoop) {

                        let userChooseRoomOption = await ƒS.Menu.getInput(roomOptions, "BasicChoice");

                        switch (userChooseRoomOption) {
                            case roomOptions.food:

                                if (dataForSave.mairePuked) {
                                    await ƒS.Character.hide(charaktere.maire);
                                    await ƒS.Character.show(charaktere.maire, charaktere.maire.pose.embarrassed, ƒS.positionPercent(charaktere.maire.positionStandard.x, charaktere.maire.positionStandard.y));
                                    await ƒS.update(0.4);

                                    await ƒS.Speech.tell(charaktere.maire, " Ihh! Bronte bleib davon weg. Ich kann mir, dass nicht ansehen. ");
                                } else {
                                    await ƒS.Character.hide(charaktere.maire);
                                    await ƒS.Character.show(charaktere.maire, charaktere.maire.pose.happy, ƒS.positionPercent(charaktere.maire.positionStandard.x, charaktere.maire.positionStandard.y));
                                    await ƒS.update(0.4);

                                    await ƒS.Speech.tell(charaktere.maire, " Das müssen wir unbedingt bald mal wieder Essen. ");

                                    await ƒS.Character.hide(charaktere.bronte);
                                    await ƒS.Character.show(charaktere.bronte, charaktere.bronte.pose.happy, ƒS.positionPercent(charaktere.bronte.positionStandard.x, charaktere.bronte.positionStandard.y));
                                    await ƒS.update(0.4);

                                    await ƒS.Speech.tell(charaktere.bronte, " Klar. Ungewöhnlich scheint hier aber nichts zu sein.");

                                    await ƒS.Character.hide(charaktere.maire);
                                    await ƒS.Character.show(charaktere.maire, charaktere.maire.pose.neutral, ƒS.positionPercent(charaktere.maire.positionStandard.x, charaktere.maire.positionStandard.y));
                                    await ƒS.update(0.4);
                                }

                                roomOptions.food = "";
                                break;

                            case roomOptions.painting:

                                await ƒS.Character.hide(charaktere.bronte);
                                await ƒS.Character.show(charaktere.bronte, charaktere.bronte.pose.think, ƒS.positionPercent(charaktere.bronte.positionStandard.x, charaktere.bronte.positionStandard.y));
                                await ƒS.update(0.4);

                                await ƒS.Speech.tell(charaktere.bronte, " Fällt dir etwas bei dem großen Bild auf? ");

                                await ƒS.Character.hide(charaktere.maire);
                                await ƒS.Character.show(charaktere.maire, charaktere.maire.pose.sad, ƒS.positionPercent(charaktere.maire.positionStandard.x, charaktere.maire.positionStandard.y));
                                await ƒS.update(0.4);

                                await ƒS.Speech.tell(charaktere.maire, " Mhm… Es ist ziemlich hässlich. Wie alle Bilder hier. Ehrlich gesagt ist das ganze Anwesen ein wenig… schief und krumm. ");

                                await ƒS.Character.hide(charaktere.bronte);
                                await ƒS.Character.show(charaktere.bronte, charaktere.bronte.pose.happy, ƒS.positionPercent(charaktere.bronte.positionStandard.x, charaktere.bronte.positionStandard.y));
                                await ƒS.update(0.4);

                                await ƒS.Speech.tell(charaktere.bronte, " Da muss ich dir recht geben… aber das meine ich nicht. Schau dir die Personen an. ");

                                await ƒS.Character.hide(charaktere.maire);
                                await ƒS.Character.show(charaktere.maire, charaktere.maire.pose.neutral, ƒS.positionPercent(charaktere.maire.positionStandard.x, charaktere.maire.positionStandard.y));
                                await ƒS.update(0.4);

                                await ƒS.Speech.tell(charaktere.maire, " Ein alter Mann… wohl der Senor. Und ein junger Mann an seiner Seite, dass muss schon älter sein scheint ja Alaistar Blackburn zu sein. Und diese junge Frau war dann wohl Grace als sie jünger war. ");

                                await ƒS.Character.hide(charaktere.maire);
                                await ƒS.Character.show(charaktere.maire, charaktere.maire.pose.sad, ƒS.positionPercent(charaktere.maire.positionStandard.x, charaktere.maire.positionStandard.y));
                                await ƒS.update(0.4);

                                await ƒS.Speech.tell(charaktere.maire, "  Ah und dann ein kleines Mädchen… mhm Stella ist das wohl nicht, aber wer sonst?");

                                await ƒS.Character.hide(charaktere.bronte);
                                await ƒS.Character.show(charaktere.bronte, charaktere.bronte.pose.think, ƒS.positionPercent(charaktere.bronte.positionStandard.x, charaktere.bronte.positionStandard.y));
                                await ƒS.update(0.4);

                                await ƒS.Speech.tell(charaktere.bronte, " Ein drittes Kind. Vom Abstand der Jahre vermutlich die Ehefrau von Isaac. Hast du dich nicht gewundert warum die Familie ihn so… schlecht behandelt? ");

                                await ƒS.Character.hide(charaktere.maire);
                                await ƒS.Character.show(charaktere.maire, charaktere.maire.pose.fear, ƒS.positionPercent(charaktere.maire.positionStandard.x, charaktere.maire.positionStandard.y));
                                await ƒS.update(0.4);

                                await ƒS.Speech.tell(charaktere.maire, " Er ist gar kein Blackburn sondern nur angeheiratet? Aber wo ist seine Frau? Die fehlende Schwester spannend… ");

                                await ƒS.Character.hide(charaktere.maire);
                                await ƒS.Character.show(charaktere.maire, charaktere.maire.pose.neutral, ƒS.positionPercent(charaktere.maire.positionStandard.x, charaktere.maire.positionStandard.y));
                                await ƒS.update(0.4);

                                await ƒS.Speech.tell(charaktere.bronte, " Wir sollten auch mit Isaac reden.");

                                await ƒS.Character.hide(charaktere.bronte);
                                await ƒS.Character.show(charaktere.bronte, charaktere.bronte.pose.sad, ƒS.positionPercent(charaktere.bronte.positionStandard.x, charaktere.bronte.positionStandard.y));
                                await ƒS.update(0.4);


                                roomOptions.painting = "";
                                chooseWhoToInterview.isaac = "Isaac";
                                break;

                            case roomOptions.window:

                                await ƒS.Speech.tell(charaktere.maire, " Von hier muss Stella die Person gesehen haben. ");

                                await ƒS.Character.hide(charaktere.maire);
                                await ƒS.Character.show(charaktere.maire, charaktere.maire.pose.sad, ƒS.positionPercent(charaktere.maire.positionStandard.x, charaktere.maire.positionStandard.y));
                                await ƒS.Character.hide(charaktere.bronte);
                                await ƒS.Character.show(charaktere.bronte, charaktere.bronte.pose.think, ƒS.positionPercent(charaktere.bronte.positionStandard.x, charaktere.bronte.positionStandard.y));
                                await ƒS.update(0.4);

                                await ƒS.Speech.tell(charaktere.bronte, " Ja. Mit dem Licht an kann man eigentlich viel vom Garten sehen. Den Teich, die Hecken und ein kleiner Bereich mit Stühlen und einen Pavillon. Ein wirklich schöner Garten. ");

                                await ƒS.Character.hide(charaktere.maire);
                                await ƒS.Character.show(charaktere.maire, charaktere.maire.pose.neutral, ƒS.positionPercent(charaktere.maire.positionStandard.x, charaktere.maire.positionStandard.y));
                                await ƒS.update(0.4);

                                await ƒS.Speech.tell(charaktere.maire, " Mhm ja… Was Stella wohl gesehen hat? ");

                                await ƒS.Character.hide(charaktere.bronte);
                                await ƒS.Character.show(charaktere.bronte, charaktere.bronte.pose.sad, ƒS.positionPercent(charaktere.bronte.positionStandard.x, charaktere.bronte.positionStandard.y));
                                await ƒS.update(0.4);

                                await ƒS.Speech.tell(charaktere.bronte, " Gute Frage…");

                                roomOptions.window = "";
                                break;

                            case roomOptions.somethingelse:

                                await ƒS.Speech.tell(charaktere.bronte, "Lass etwas anderes machen...");

                                roomLoop = false;
                                break;
                        }
                    }

                    if (roomOptions.food.length == 0 && roomOptions.painting.length == 0 && roomOptions.window.length == 0) {
                        chooseWhoToInterview.searchRoom = "";
                    }

                    break;

                case chooseWhoToInterview.isaac:

                    let issacLoop = true;

                    await ƒS.Character.show(charaktere.isaac, charaktere.isaac.pose.neutral, ƒS.positionPercent(charaktere.isaac.positionStandard.x, charaktere.isaac.positionStandard.y));
                    await ƒS.update(0.4);

                    while (issacLoop) {
                        let userIsaacTalk = await ƒS.Menu.getInput(isaacTalk, "BasicChoice");

                        switch (userIsaacTalk) {
                            case isaacTalk.family:

                                await ƒS.Character.hide(charaktere.bronte);
                                await ƒS.Character.show(charaktere.bronte, charaktere.bronte.pose.think, ƒS.positionPercent(charaktere.bronte.positionStandard.x, charaktere.bronte.positionStandard.y));
                                await ƒS.update(0.4);

                                await ƒS.Speech.tell(charaktere.bronte, " Die Beziehung zu ihrer Familie ist nicht sonderlich eng, oder? ");


                                await ƒS.Character.hide(charaktere.isaac);
                                await ƒS.Character.show(charaktere.isaac, charaktere.isaac.pose.happy, ƒS.positionPercent(charaktere.isaac.positionStandard.x, charaktere.isaac.positionStandard.y));
                                await ƒS.update(0.4);

                                await ƒS.Speech.tell(charaktere.isaac, " Eng? Ja so kann man es wohl nennen. Ich war noch nie sonderlich beliebt bei den Blackburns. Immerhin besitzen meine Eltern kein Land. ");

                                await ƒS.Character.hide(charaktere.isaac);
                                await ƒS.Character.show(charaktere.isaac, charaktere.isaac.pose.sad, ƒS.positionPercent(charaktere.isaac.positionStandard.x, charaktere.isaac.positionStandard.y));

                                await ƒS.Character.hide(charaktere.maire);
                                await ƒS.Character.show(charaktere.maire, charaktere.maire.pose.happy, ƒS.positionPercent(charaktere.maire.positionStandard.x, charaktere.maire.positionStandard.y));
                                await ƒS.update(0.4);

                                await ƒS.Speech.tell(charaktere.maire, " Aber sie sind doch ein Anwalt! Dass ist doch ein sehr ehrbarer Beruf?! ");

                                await ƒS.Character.hide(charaktere.isaac);
                                await ƒS.Character.show(charaktere.isaac, charaktere.isaac.pose.neutral, ƒS.positionPercent(charaktere.isaac.positionStandard.x, charaktere.isaac.positionStandard.y));
                                await ƒS.update(0.4);

                                await ƒS.Speech.tell(charaktere.isaac, " Haha… ja dass mag für sie so sein, aber bei den Blackburns ist das nicht genug. ");

                                await ƒS.Character.hide(charaktere.maire);
                                await ƒS.Character.show(charaktere.maire, charaktere.maire.pose.sad, ƒS.positionPercent(charaktere.maire.positionStandard.x, charaktere.maire.positionStandard.y));
                                await ƒS.Character.hide(charaktere.bronte);
                                await ƒS.Character.show(charaktere.bronte, charaktere.bronte.pose.sad, ƒS.positionPercent(charaktere.bronte.positionStandard.x, charaktere.bronte.positionStandard.y));
                                await ƒS.update(0.4);

                                await ƒS.Speech.tell(charaktere.bronte, " Ich verstehe, die Familie ist sehr konservativ und traditionell. ");

                                await ƒS.Character.hide(charaktere.isaac);
                                await ƒS.Character.show(charaktere.isaac, charaktere.isaac.pose.sad, ƒS.positionPercent(charaktere.isaac.positionStandard.x, charaktere.isaac.positionStandard.y));
                                await ƒS.update(0.4);

                                await ƒS.Speech.tell(charaktere.isaac, " So kann man es wohl ausdrücken…");

                                await ƒS.Character.hide(charaktere.isaac);
                                await ƒS.Character.show(charaktere.isaac, charaktere.isaac.pose.neutral, ƒS.positionPercent(charaktere.isaac.positionStandard.x, charaktere.isaac.positionStandard.y));
                                await ƒS.Character.hide(charaktere.maire);
                                await ƒS.Character.show(charaktere.maire, charaktere.maire.pose.neutral, ƒS.positionPercent(charaktere.maire.positionStandard.x, charaktere.maire.positionStandard.y));
                                await ƒS.update(0.4);

                                isaacTalk.family = "";
                                break;

                            case isaacTalk.wife:

                                await ƒS.Character.hide(charaktere.bronte);
                                await ƒS.Character.show(charaktere.bronte, charaktere.bronte.pose.happy, ƒS.positionPercent(charaktere.bronte.positionStandard.x, charaktere.bronte.positionStandard.y));
                                await ƒS.update(0.4);

                                await ƒS.Speech.tell(charaktere.bronte, " Isaac, dürfte ich sie etwas persönliches Fragen? ");

                                await ƒS.Character.hide(charaktere.isaac);
                                await ƒS.Character.show(charaktere.isaac, charaktere.isaac.pose.happy, ƒS.positionPercent(charaktere.isaac.positionStandard.x, charaktere.isaac.positionStandard.y));
                                await ƒS.update(0.4);

                                await ƒS.Speech.tell(charaktere.isaac, " Welch spannende Frage. Solange sie mich nicht beleidigen, sollte das in Ordnung gehen. ");

                                await ƒS.Character.hide(charaktere.bronte);
                                await ƒS.Character.show(charaktere.bronte, charaktere.bronte.pose.think, ƒS.positionPercent(charaktere.bronte.positionStandard.x, charaktere.bronte.positionStandard.y));
                                await ƒS.update(0.4);

                                await ƒS.Speech.tell(charaktere.bronte, " Wir haben das Bild hier betrachtet und uns ist aufgefallen, dass die jüngste Tochter der Blackburns heute gar nicht anwesend ist. Wir nehmen an das ist ihre Frau? ");

                                await ƒS.Character.hide(charaktere.isaac);
                                await ƒS.Character.show(charaktere.isaac, charaktere.isaac.pose.cry, ƒS.positionPercent(charaktere.isaac.positionStandard.x, charaktere.isaac.positionStandard.y));
                                await ƒS.update(0.4);

                                await ƒS.Speech.tell(charaktere.isaac, " Oh… ja… das war sie. ");

                                await ƒS.Character.hide(charaktere.bronte);
                                await ƒS.Character.show(charaktere.bronte, charaktere.bronte.pose.shout, ƒS.positionPercent(charaktere.bronte.positionStandard.x, charaktere.bronte.positionStandard.y));
                                await ƒS.update(0.4);

                                await ƒS.Speech.tell(charaktere.bronte, " Oh, dass tut mir sehr leid. ");

                                await ƒS.Character.hide(charaktere.bronte);
                                await ƒS.Character.show(charaktere.bronte, charaktere.bronte.pose.sad, ƒS.positionPercent(charaktere.bronte.positionStandard.x, charaktere.bronte.positionStandard.y));
                                await ƒS.Character.hide(charaktere.isaac);
                                await ƒS.Character.show(charaktere.isaac, charaktere.isaac.pose.sad, ƒS.positionPercent(charaktere.isaac.positionStandard.x, charaktere.isaac.positionStandard.y));
                                await ƒS.update(0.4);

                                await ƒS.Speech.tell(charaktere.isaac, " Danke für Ihre Anteilnahme… Odette war eine sehr liebenswürdige Person. Ich vermisse sie sehr. ");

                                await ƒS.Character.hide(charaktere.bronte);
                                await ƒS.Character.show(charaktere.bronte, charaktere.bronte.pose.shout, ƒS.positionPercent(charaktere.bronte.positionStandard.x, charaktere.bronte.positionStandard.y));
                                await ƒS.update(0.4);

                                await ƒS.Character.hide(charaktere.maire);
                                await ƒS.Character.show(charaktere.maire, charaktere.maire.pose.sad, ƒS.positionPercent(charaktere.maire.positionStandard.x, charaktere.maire.positionStandard.y));
                                await ƒS.update(0.4);

                                await ƒS.Speech.tell(charaktere.maire, " Wie ist sie verstorben? ");

                                await ƒS.Character.hide(charaktere.bronte);
                                await ƒS.Character.show(charaktere.bronte, charaktere.bronte.pose.sad, ƒS.positionPercent(charaktere.bronte.positionStandard.x, charaktere.bronte.positionStandard.y));
                                await ƒS.update(0.4);

                                await ƒS.Speech.tell(charaktere.bronte, " Maire… dass ist wirklich sehr persönlich. Entschuldung Isaac. ");

                                await ƒS.Character.hide(charaktere.maire);
                                await ƒS.Character.show(charaktere.maire, charaktere.maire.pose.embarrassed, ƒS.positionPercent(charaktere.maire.positionStandard.x, charaktere.maire.positionStandard.y));
                                await ƒS.Character.hide(charaktere.isaac);
                                await ƒS.Character.show(charaktere.isaac, charaktere.isaac.pose.cry, ƒS.positionPercent(charaktere.isaac.positionStandard.x, charaktere.isaac.positionStandard.y));
                                await ƒS.update(0.4);

                                await ƒS.Speech.tell(charaktere.isaac, " Nein, alles in Ordnung. Sie hat sich vor zwei Jahren in die Themse gestürzt. ");

                                await ƒS.Character.hide(charaktere.bronte);
                                await ƒS.Character.show(charaktere.bronte, charaktere.bronte.pose.shout, ƒS.positionPercent(charaktere.bronte.positionStandard.x, charaktere.bronte.positionStandard.y));
                                await ƒS.Character.hide(charaktere.maire);
                                await ƒS.Character.show(charaktere.maire, charaktere.maire.pose.sad, ƒS.positionPercent(charaktere.maire.positionStandard.x, charaktere.maire.positionStandard.y));
                                await ƒS.update(0.4);

                                await ƒS.Speech.tell(charaktere.bronte, " Oh! Wie überaus tragisch. Dass tut mir sehr leid. ");

                                await ƒS.Character.hide(charaktere.isaac);
                                await ƒS.Character.show(charaktere.isaac, charaktere.isaac.pose.sad, ƒS.positionPercent(charaktere.isaac.positionStandard.x, charaktere.isaac.positionStandard.y));
                                await ƒS.Character.hide(charaktere.bronte);
                                await ƒS.Character.show(charaktere.bronte, charaktere.bronte.pose.sad, ƒS.positionPercent(charaktere.bronte.positionStandard.x, charaktere.bronte.positionStandard.y));
                                await ƒS.update(0.4);

                                await ƒS.Speech.tell(charaktere.isaac, " Ja… ");
                                await ƒS.Speech.tell(charaktere.maire, " Moment Mal… O.R. Bronte!");

                                await ƒS.Character.hide(charaktere.maire);
                                await ƒS.Character.show(charaktere.maire, charaktere.maire.pose.neutral, ƒS.positionPercent(charaktere.maire.positionStandard.x, charaktere.maire.positionStandard.y));
                                await ƒS.update(0.4);

                                isaacTalk.wife = "";
                                isaacTalk.ring = "Ring geben";
                                break;

                            case isaacTalk.ring:

                                await ƒS.Speech.tell(charaktere.bronte, " Könnten sie sich etwas ansehen? ");

                                await ƒS.Character.hide(charaktere.bronte);
                                await ƒS.Character.show(charaktere.bronte, charaktere.bronte.pose.think, ƒS.positionPercent(charaktere.bronte.positionStandard.x, charaktere.bronte.positionStandard.y));
                                await ƒS.update(0.4);

                                await ƒS.Speech.tell(charaktere.isaac, " Oh natürlich.  ");

                                await ƒS.Character.hide(charaktere.isaac);
                                await ƒS.Character.show(charaktere.isaac, charaktere.isaac.pose.cry, ƒS.positionPercent(charaktere.isaac.positionStandard.x, charaktere.isaac.positionStandard.y));
                                await ƒS.update(0.4);

                                await ƒS.Speech.tell(charaktere.isaac, " !!!  ");
                                await ƒS.Speech.tell(charaktere.isaac, "Wo haben sie den her! ");

                                await ƒS.Character.hide(charaktere.isaac);
                                await ƒS.Character.show(charaktere.isaac, charaktere.isaac.pose.sad, ƒS.positionPercent(charaktere.isaac.positionStandard.x, charaktere.isaac.positionStandard.y));
                                await ƒS.Character.hide(charaktere.bronte);
                                await ƒS.Character.show(charaktere.bronte, charaktere.bronte.pose.shout, ƒS.positionPercent(charaktere.bronte.positionStandard.x, charaktere.bronte.positionStandard.y));
                                await ƒS.update(0.4);

                                await ƒS.Speech.tell(charaktere.bronte, " Kennen sie den? ");

                                await ƒS.Character.hide(charaktere.isaac);
                                await ƒS.Character.show(charaktere.isaac, charaktere.isaac.pose.neutral, ƒS.positionPercent(charaktere.isaac.positionStandard.x, charaktere.isaac.positionStandard.y));
                                await ƒS.update(0.4);

                                await ƒS.Speech.tell(charaktere.isaac, " Natürlich. Ich habe ihn gekauft. ");

                                await ƒS.Character.hide(charaktere.bronte);
                                await ƒS.Character.show(charaktere.bronte, charaktere.bronte.pose.sad, ƒS.positionPercent(charaktere.bronte.positionStandard.x, charaktere.bronte.positionStandard.y));
                                await ƒS.update(0.4);

                                await ƒS.Speech.tell(charaktere.bronte, " Oh… aber… oh… Ihre Frau Odette gehörte er oder? ");

                                await ƒS.Character.hide(charaktere.maire);
                                await ƒS.Character.show(charaktere.maire, charaktere.maire.pose.fear, ƒS.positionPercent(charaktere.maire.positionStandard.x, charaktere.maire.positionStandard.y));
                                await ƒS.update(0.4);

                                await ƒS.Speech.tell(charaktere.maire, " Seiner toten Frau! ");

                                await ƒS.Character.hide(charaktere.maire);
                                await ƒS.Character.show(charaktere.maire, charaktere.maire.pose.sad, ƒS.positionPercent(charaktere.maire.positionStandard.x, charaktere.maire.positionStandard.y));
                                await ƒS.Character.hide(charaktere.isaac);
                                await ƒS.Character.show(charaktere.isaac, charaktere.isaac.pose.sad, ƒS.positionPercent(charaktere.isaac.positionStandard.x, charaktere.isaac.positionStandard.y));
                                await ƒS.update(0.4);

                                await ƒS.Speech.tell(charaktere.isaac, " Ja… ich fürchte das ist so. Wo haben sie ihn her? ");

                                await ƒS.Character.hide(charaktere.bronte);
                                await ƒS.Character.show(charaktere.bronte, charaktere.bronte.pose.think, ƒS.positionPercent(charaktere.bronte.positionStandard.x, charaktere.bronte.positionStandard.y));
                                await ƒS.update(0.4);

                                await ƒS.Speech.tell(charaktere.bronte, " Wir haben ihn draußen in den Büschen gefunden, als uns die Katze heute erschrocken hat. ");

                                await ƒS.Character.hide(charaktere.isaac);
                                await ƒS.Character.show(charaktere.isaac, charaktere.isaac.pose.cry, ƒS.positionPercent(charaktere.isaac.positionStandard.x, charaktere.isaac.positionStandard.y));
                                await ƒS.update(0.4);

                                await ƒS.Speech.tell(charaktere.isaac, " !! ");

                                await ƒS.Character.hide(charaktere.maire);
                                await ƒS.Character.show(charaktere.maire, charaktere.maire.pose.fear, ƒS.positionPercent(charaktere.maire.positionStandard.x, charaktere.maire.positionStandard.y));
                                await ƒS.update(0.4);

                                await ƒS.Speech.tell(charaktere.maire, " Geht es ihnen gut? Sie sehen… alarmiert aus. ");
                                await ƒS.Speech.tell(charaktere.isaac, " Wenn sie mich entschuldigen würden… Ich denke ich brauche etwas frische Luft. ");

                                await ƒS.Character.hide(charaktere.maire);
                                await ƒS.Character.show(charaktere.maire, charaktere.maire.pose.sad, ƒS.positionPercent(charaktere.maire.positionStandard.x, charaktere.maire.positionStandard.y));
                                await ƒS.Character.hide(charaktere.bronte);
                                await ƒS.Character.show(charaktere.bronte, charaktere.bronte.pose.sad, ƒS.positionPercent(charaktere.bronte.positionStandard.x, charaktere.bronte.positionStandard.y));
                                await ƒS.update(0.4);

                                await ƒS.Speech.tell(charaktere.bronte, " Natürlich. ");

                                await ƒS.Character.hide(charaktere.isaac);
                                await ƒS.update(0.8);

                                await ƒS.Speech.tell(charaktere.maire, " Schau Bronte wer da wiederkommt! ");
                                await ƒS.Speech.tell(charaktere.bronte, " Und die anderen sind gerade in Gespräche vertieft. Das sollte ein guter Zeitpunkt sein mehr über die Familie zu erfahren.");

                                await ƒS.Character.hide(charaktere.maire);
                                await ƒS.Character.show(charaktere.maire, charaktere.maire.pose.neutral, ƒS.positionPercent(charaktere.maire.positionStandard.x, charaktere.maire.positionStandard.y));
                                await ƒS.update(0.4);

                                //Loop endet Szene Endet 
                                issacLoop = false;
                                stillInLoop = false;
                                break;

                            case isaacTalk.somebodyelse:

                                ƒS.Character.hide(charaktere.isaac);

                                issacLoop = false;
                                break;
                        }
                    }
                    break;
            }
        }

        
        await ƒS.Character.show(charaktere.remington, charaktere.remington.pose.neutral, ƒS.positionPercent(charaktere.remington.positionStandard.x, charaktere.remington.positionStandard.y));
        await ƒS.update(0.8);

        await ƒS.Character.hide(charaktere.bronte);
        await ƒS.Character.show(charaktere.bronte, charaktere.bronte.pose.happy, ƒS.positionPercent(charaktere.bronte.positionStandard.x, charaktere.bronte.positionStandard.y));
        await ƒS.update(0.4);

        await ƒS.Speech.tell(charaktere.bronte, " Mr Remington? Hätten sie einen Moment Zeit? ");
        await ƒS.Speech.tell(charaktere.remington, " Wenn es nur kurz ist. Ich serviere gleich den Nachtisch. ");
        await ƒS.Speech.tell(charaktere.bronte, " Es geht ganz schnell… Ich habe gerade nur dieses schöne Bild bewundert und mir ist das junge Mädchen drauf aufgefallen. Es ist Odette oder? Die jüngste der Blackburn Geschwister. ");
        
        await ƒS.Speech.tell(charaktere.remington, " Ja… So ist es. ");

        await ƒS.Character.hide(charaktere.bronte);
        await ƒS.Character.show(charaktere.bronte, charaktere.bronte.pose.think, ƒS.positionPercent(charaktere.bronte.positionStandard.x, charaktere.bronte.positionStandard.y));
        await ƒS.update(0.4);

        await ƒS.Speech.tell(charaktere.bronte, " Da sie bereits unter dem vorigen Lord gedient haben, nehme ich an sie kannten seine Tochter ebenfalls? ");
        await ƒS.Speech.tell(charaktere.remington, " Natürlich. Sie war der Sonnenschein der Familie. Als Kind nicht der jungen Stella unähnlich. ");

        await ƒS.Speech.tell(charaktere.bronte, " Und doch hat sie sich -ich nehme an entgegen dem Wunsch der Familie- dazu entschieden Isaac zu heiraten. ");

        await ƒS.Character.hide(charaktere.remington);
        await ƒS.Character.show(charaktere.remington, charaktere.remington.pose.angry, ƒS.positionPercent(charaktere.remington.positionStandard.x, charaktere.remington.positionStandard.y));
        await ƒS.Character.hide(charaktere.bronte);
        await ƒS.Character.show(charaktere.bronte, charaktere.bronte.pose.shout, ƒS.positionPercent(charaktere.bronte.positionStandard.x, charaktere.bronte.positionStandard.y));
        await ƒS.update(0.4);

        await ƒS.Speech.tell(charaktere.remington, " Ja… Das Arme Ding wurde von diesem… Schuft verführt und in ein unglückliches und viel zu kurzes Leben gestürzt. Es brach ihren Eltern das Herz. Und nach all dem Leid was er der Familie angetan hat, wäre er fast dafür belohnt wurden! ");
        
        await ƒS.Character.hide(charaktere.bronte);
        await ƒS.Character.show(charaktere.bronte, charaktere.bronte.pose.think, ƒS.positionPercent(charaktere.bronte.positionStandard.x, charaktere.bronte.positionStandard.y));
        await ƒS.update(0.4);
        
        await ƒS.Speech.tell(charaktere.bronte, " Belohnt wurde? Entschuldigung, wie meinen sie das? ");
        await ƒS.Speech.tell(charaktere.remington, "Nun das Testament von der ehemaligen Lady Blackburn – der Mutter der Geschwister- sah eigentlich vor das alle ihre Kinder ein Teil des Vermögens bekommen sollten. Aber sie änderte es kurz vor ihrem Tod.");
        await ƒS.Speech.tell(charaktere.remington, "Zum Glück. Wenig später verstarb Odette und stellen sie sich nur vor Isaac hätte auch nur einen Pfennig davon gesehen!");
        await ƒS.Speech.tell(charaktere.bronte, " Ja… welch ein Glück. ");

        await ƒS.Character.hide(charaktere.remington);
        await ƒS.Character.show(charaktere.remington, charaktere.remington.pose.neutral, ƒS.positionPercent(charaktere.remington.positionStandard.x, charaktere.remington.positionStandard.y));
        await ƒS.update(0.4);

        await ƒS.Speech.tell(charaktere.remington, " Verzeihen sie mir ich muss das Essen auftischen. ");

        await ƒS.Character.hide(charaktere.bronte);
        await ƒS.Character.show(charaktere.bronte, charaktere.bronte.pose.happy, ƒS.positionPercent(charaktere.bronte.positionStandard.x, charaktere.bronte.positionStandard.y));
        await ƒS.update(0.4);

        await ƒS.Speech.tell(charaktere.bronte, " Natürlich… Ähm ich glaube ich muss mir noch kurz die Haare richten. Maire würdest du mir helfen. ");

        await ƒS.Character.hide(charaktere.remington);
        await ƒS.update(0.8);

        await ƒS.Character.hide(charaktere.maire);
        await ƒS.Character.show(charaktere.maire, charaktere.maire.pose.embarrassed, ƒS.positionPercent(charaktere.maire.positionStandard.x, charaktere.maire.positionStandard.y));
        await ƒS.update(0.4);

        await ƒS.Speech.tell(charaktere.maire, " Bei deinen Haaren aber die sind doch- !!! Oh, natürlich! Wir sind gleich wieder da!");

        await ƒS.Character.hide(charaktere.maire);
        await ƒS.Character.hide(charaktere.bronte);
        await ƒS.update(0.8);

        dataForSave.interviewFinished = true;

        await ƒS.Sound.fade(sound.saloonAfterScrem, 0, 0.5, true);

        return "SceneNineEntryhall";

        //todo: Ende 
        async function graceBadEnding(): Promise<void> {

            await ƒS.Speech.tell(charaktere.grace, " Der Pudding ist da! Oh was verzieht ihr dann alle für Gesichter? ");
            await ƒS.Speech.tell(charaktere.alaistar, " Ich glaube unsere Detektiv Gäste haben leider etwas die Stimmung runtergezogen mit ihren lästigen Fragen. ");
            await ƒS.Speech.tell(charaktere.grace, " Ich bin sehr enttäuscht von Ihnen Miss Bronte! Ich hatte bessere Manieren von Ihnen erwartet. ");
            await ƒS.Speech.tell(charaktere.bronte, " Oh, dass- ");
            await ƒS.Speech.tell(charaktere.grace, " Nein, bitte gehen sie alle. Ich habe Kopfschmerzen.");

            //todo: Ende 

        }
    }
}