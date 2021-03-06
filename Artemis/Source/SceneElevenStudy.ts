namespace Artemis {
    export async function SceneElevenStudy(): ƒS.SceneReturn {

        let chooseHide = {
            hide: "Verstecken",
            greet: "Begrüßen",
            gun: ""
        }

        if (dataForSave.tookGun) {
            chooseHide.gun = "Waffe ziehen"
        }

        let chooseContinueHide = {
            continue: "Weiterverstecken",
            show: "Herauskommen"
        }

        let countDialogAlreadyDid = 0;

        let chooseKnow = {
            cat: "Wo ist Artemis?",
            ghosting: "Warum 'herumgegeister'",
            whyhere: "Warum hier?",
            whyNotDead: "Warum nicht tot?"
        }

        let chooseWhoHideTestament = {
            isaac: "Isaac",
            grace: "Grace",
            stella: "Stella",
            alaistar: "Alaistar"
        }

        let chooseSomethingThatHelps = {
            yes: "Ja",
            no: "Nein"
        }

        let chooseFromInventory = {
            ring: "Ring",
            gun: "",
            collar: ""
        }

        if (ƒS.Inventory.getAmount(inventory.collar)) {
            chooseFromInventory.collar = "Halsband";
        }
        if (ƒS.Inventory.getAmount(inventory.pistol)) {
            chooseFromInventory.gun = "Pistole";
        }

        await ƒS.Sound.fade(sound.study, 0.1, 0.2, true);

        await ƒS.Location.show(location.studyroom);
        await ƒS.update(transistions.standard.duration, transistions.standard.alpha, transistions.standard.edge);
        await ƒS.update();

        await ƒS.Character.show(charaktere.bronte, charaktere.bronte.pose.shout, ƒS.positionPercent(charaktere.bronte.positionStandard.x, charaktere.bronte.positionStandard.y))
        await ƒS.update(1);    

        await ƒS.Speech.tell(charaktere.bronte, " Okay. Wow… diese Einrichtung ist eine… Entscheidung. ");

        await ƒS.Character.hide(charaktere.bronte);
        await ƒS.Character.show(charaktere.bronte, charaktere.bronte.pose.think, ƒS.positionPercent(charaktere.bronte.positionStandard.x, charaktere.bronte.positionStandard.y))
        await ƒS.update(0.4);    

        await ƒS.Speech.tell(charaktere.bronte, " Nicht sonderlich viel hier. ");
        await ƒS.Speech.tell(charaktere.bronte, " Ein Bücherregal an der Wand. Ein Sessel, ein Tisch und ein Fenster. Wo soll ich nur anfangen. ");

        await ƒS.Location.show(location.studyroomWindow);

        await ƒS.Character.hide(charaktere.bronte);
        await ƒS.Character.show(charaktere.bronte, charaktere.bronte.pose.shout, ƒS.positionPercent(charaktere.bronte.positionStandard.x, charaktere.bronte.positionStandard.y))
        await ƒS.update(0.4);  

        await ƒS.Speech.tell(charaktere.bronte, " Oh. Was ist das? Das Fenster ist aufgegangen. ");
        await ƒS.Speech.tell(charaktere.bronte, " !!! ");
        await ƒS.Speech.tell(charaktere.bronte, " Jemand kommt durch Fenster?! Was soll ich tun?");

        let userchooseHide = await ƒS.Menu.getInput(chooseHide, "basicChoice");
        switch (userchooseHide) {
            case chooseHide.greet:

                await ƒS.Character.hide(charaktere.bronte);
                await ƒS.Character.show(charaktere.bronte, charaktere.bronte.pose.think, ƒS.positionPercent(charaktere.bronte.positionStandard.x, charaktere.bronte.positionStandard.y))
                await ƒS.update(0.4);  

                await ƒS.Character.show(charaktere.odette, charaktere.odette.pose.shadow, ƒS.positionPercent(charaktere.odette.positionStandard.x, charaktere.odette.positionStandard.y))
                await ƒS.update(1);  

                await ƒS.Speech.tell(charaktere.bronte, " Hallo? ");
                await ƒS.Speech.tell(charaktere.shadow, " !!! ");

                await ƒS.Character.hide(charaktere.bronte);
                await ƒS.Character.show(charaktere.bronte, charaktere.bronte.pose.shout, ƒS.positionPercent(charaktere.bronte.positionStandard.x, charaktere.bronte.positionStandard.y))
                await ƒS.update(0.4);  

                await ƒS.Speech.tell(charaktere.shadow, " Wer… wer ist da?");

                break;

            case chooseHide.gun:

                await ƒS.Character.hide(charaktere.bronte);
                await ƒS.Character.show(charaktere.bronte, charaktere.bronte.pose.angry, ƒS.positionPercent(charaktere.bronte.positionStandard.x, charaktere.bronte.positionStandard.y))
                await ƒS.update(0.4);  

                await ƒS.Character.show(charaktere.odette, charaktere.odette.pose.shadow, ƒS.positionPercent(charaktere.odette.positionStandard.x, charaktere.odette.positionStandard.y))
                await ƒS.update(1);  

                await ƒS.Speech.tell(charaktere.bronte, " Ich bin bewaffnet. Keine Falsche Bewegung. ");
                await ƒS.Speech.tell(charaktere.shadow, " !!! ");
                await ƒS.Speech.tell(charaktere.shadow, " Bitte schieß nicht. Ich bin nicht bewaffnet. ");

                await ƒS.Character.hide(charaktere.bronte);
                await ƒS.Character.show(charaktere.bronte, charaktere.bronte.pose.think, ƒS.positionPercent(charaktere.bronte.positionStandard.x, charaktere.bronte.positionStandard.y))
                await ƒS.update(0.4);  

                await ƒS.Speech.tell(charaktere.bronte, " Okay… aber komm aus den Schatten heraus, dann lasse ich die Waffe sinken. ");
                await ƒS.Speech.tell(charaktere.shadow, " Okay. Hier. Bitte steck den Revolver weg. Ich tu nichts. ");
               
                await ƒS.Speech.tell(charaktere.bronte, " Okay… ");
                await ƒS.Speech.tell(charaktere.shadow, " Wer… wer bist du?");

                break;

            case chooseHide.hide:

                await ƒS.Character.hide(charaktere.bronte);
                await ƒS.update(1);  

                await ƒS.Character.show(charaktere.odette, charaktere.odette.pose.shadow, ƒS.positionPercent(charaktere.odette.positionStandard.x, charaktere.odette.positionStandard.y))
                await ƒS.update(1);  

                await ƒS.Speech.tell(charaktere.shadow, " Mhm… Ich verstehe das nicht. Er muss es geändert haben. ");
                await ƒS.Speech.tell(charaktere.bronte, " (Die Gestalt ist am Bücherregal. Sie packt Bücher zu Seite und… Oh ist das etwas ein-)  ");
                // todo: Lautes Geräusch

                await ƒS.Speech.tell(charaktere.bronte, " !!! ");
                await ƒS.Speech.tell(charaktere.shadow, " … ");
                await ƒS.Speech.tell(charaktere.shadow, " Hallo? ");
                await ƒS.Speech.tell(charaktere.shadow, " Stella?");

                let userchooseContinueHide = await ƒS.Menu.getInput(chooseContinueHide, "basicChoice");
                switch (userchooseContinueHide) {
                    case chooseContinueHide.continue:

                        await ƒS.Speech.tell(charaktere.bronte, " … ");
                        await ƒS.Speech.tell(charaktere.shadow, " … ");
                        await ƒS.Speech.tell(charaktere.bronte, " … ");
                        

                        await ƒS.Character.hide(charaktere.bronte);
                        await ƒS.Character.show(charaktere.bronte, charaktere.bronte.pose.shout, ƒS.positionPercent(charaktere.bronte.positionStandard.x, charaktere.bronte.positionStandard.y))
                        await ƒS.update(1);  

                        await ƒS.Speech.tell(charaktere.shadow, "  Wer bist du?");

                        break;

                    case chooseContinueHide.show:

                        await ƒS.Character.hide(charaktere.bronte);
                        await ƒS.Character.show(charaktere.bronte, charaktere.bronte.pose.think, ƒS.positionPercent(charaktere.bronte.positionStandard.x, charaktere.bronte.positionStandard.y))
                        await ƒS.update(0.4);  

                        await ƒS.Speech.tell(charaktere.bronte, " Nein. Aber es wundert mich doch, dass Stella in all dies verwickelt ist. ");
                        await ƒS.Speech.tell(charaktere.shadow, " !!! ");
                        await ƒS.Speech.tell(charaktere.shadow, " Wer… Wer bist du?");

                        break;
                }

                break;
        }

        await ƒS.Character.hide(charaktere.bronte);
        await ƒS.Character.show(charaktere.bronte, charaktere.bronte.pose.happy, ƒS.positionPercent(charaktere.bronte.positionStandard.x, charaktere.bronte.positionStandard.y))
        await ƒS.update(0.4);  

        await ƒS.Speech.tell(charaktere.bronte, " Ich bin Bronte. Ein Gast des Hauses Blackburn und wie es scheint auch Geisterjägerin. Wenn ich mich nicht irre dann sind Sie- ");
        
        await ƒS.Character.hide(charaktere.odette);
        await ƒS.Character.show(charaktere.odette, charaktere.odette.pose.angry, ƒS.positionPercent(charaktere.odette.positionStandard.x, charaktere.odette.positionStandard.y))
        await ƒS.update(1);  
        
        await ƒS.Speech.tell(charaktere.bronte, " Odette Blackburn. ");

        await ƒS.Character.hide(charaktere.bronte);
        await ƒS.Character.show(charaktere.bronte, charaktere.bronte.pose.think, ƒS.positionPercent(charaktere.bronte.positionStandard.x, charaktere.bronte.positionStandard.y))
        await ƒS.update(0.4);  

        await ƒS.Speech.tell(charaktere.bronte, " Verstorben vor einer ganzen Weile wenn ich mich richtig erinnere. ");

        await ƒS.Character.hide(charaktere.odette);
        await ƒS.Character.show(charaktere.odette, charaktere.odette.pose.scream, ƒS.positionPercent(charaktere.odette.positionStandard.x, charaktere.odette.positionStandard.y))
        await ƒS.update(0.4);  

        await ƒS.Speech.tell(charaktere.odette, " !!! ");

        await ƒS.Character.hide(charaktere.bronte);
        await ƒS.Character.show(charaktere.bronte, charaktere.bronte.pose.angry, ƒS.positionPercent(charaktere.bronte.positionStandard.x, charaktere.bronte.positionStandard.y))
        await ƒS.update(0.4);  

        await ƒS.Speech.tell(charaktere.bronte, " Und sie haben der guten Stella einen ganz schön bösen Streich gespielt, oder ist sie etwa Teil dieses Spieles? Sie muss noch sehr jung gewesen sein, als Sie angeblich in der Themse verschwunden sind. ");

        await ƒS.Character.hide(charaktere.odette);
        await ƒS.Character.show(charaktere.odette, charaktere.odette.pose.sad, ƒS.positionPercent(charaktere.odette.positionStandard.x, charaktere.odette.positionStandard.y))
        await ƒS.update(0.4);  

        await ƒS.Speech.tell(charaktere.odette, " Ich… oh… Nein, Stella hat nichts mit all dem zu tun. ");

        await ƒS.Character.hide(charaktere.bronte);
        await ƒS.Character.show(charaktere.bronte, charaktere.bronte.pose.think, ƒS.positionPercent(charaktere.bronte.positionStandard.x, charaktere.bronte.positionStandard.y))
        await ƒS.update(0.4);  

        await ƒS.Speech.tell(charaktere.bronte, " Und Isaac? Warum schleichen sie um das Haus, wenn ihr Ehemann doch auch so Einlass in das Haus bekommt. ");

        await ƒS.Character.hide(charaktere.bronte);
        await ƒS.Character.show(charaktere.bronte, charaktere.bronte.pose.sad, ƒS.positionPercent(charaktere.bronte.positionStandard.x, charaktere.bronte.positionStandard.y))
        await ƒS.Character.hide(charaktere.odette);
        await ƒS.Character.show(charaktere.odette, charaktere.odette.pose.think, ƒS.positionPercent(charaktere.odette.positionStandard.x, charaktere.odette.positionStandard.y))
        await ƒS.update(0.4);  

        await ƒS.Speech.tell(charaktere.odette, " Isaac… Er… Oh… Bitte Sie müssen mir helfen. Sie sind eine Detektivin oder nicht? Ich habe ihr Bild vor einiger Zeit in der Zeitung gesehen. ");

        await ƒS.Character.hide(charaktere.bronte);
        await ƒS.Character.show(charaktere.bronte, charaktere.bronte.pose.think, ƒS.positionPercent(charaktere.bronte.positionStandard.x, charaktere.bronte.positionStandard.y))
        await ƒS.update(0.4);  

        await ƒS.Speech.tell(charaktere.bronte, " Dieser Fall wird immer seltsamer… ");
        await ƒS.Speech.tell(charaktere.bronte, " Ich muss gestehen, dass ich den Fall immer noch nicht komplett begreife. Wenn Sie mir helfen können, Klarheit zu schaffen, dann verspreche ich zumindest darüber nachzudenken Ihnen zu helfen. ");
        
        await ƒS.Character.hide(charaktere.odette);
        await ƒS.Character.show(charaktere.odette, charaktere.odette.pose.angry, ƒS.positionPercent(charaktere.odette.positionStandard.x, charaktere.odette.positionStandard.y))
        await ƒS.update(0.4);  
        
        await ƒS.Speech.tell(charaktere.odette, " Dass muss mir wohl erst einmal genügen. ");

        await ƒS.Character.hide(charaktere.odette);
        await ƒS.Character.show(charaktere.odette, charaktere.odette.pose.think, ƒS.positionPercent(charaktere.odette.positionStandard.x, charaktere.odette.positionStandard.y))
        await ƒS.update(0.4);  

        await ƒS.Speech.tell(charaktere.odette, " Was wollen sie wissen?");


        while (countDialogAlreadyDid != 4) {

            let userchooseKnow = await ƒS.Menu.getInput(chooseKnow, "basicChoice");
            switch (userchooseKnow) {
                case chooseKnow.cat:

                    await ƒS.Character.hide(charaktere.bronte);
                    await ƒS.Character.show(charaktere.bronte, charaktere.bronte.pose.sad, ƒS.positionPercent(charaktere.bronte.positionStandard.x, charaktere.bronte.positionStandard.y))
                    await ƒS.update(0.4);  

                    await ƒS.Speech.tell(charaktere.bronte, " Nun wo ist Artemis? Ich nehme an sie haben die Katze in den Schuppen gesperrt? ");

                    await ƒS.Character.hide(charaktere.odette);
                    await ƒS.Character.show(charaktere.odette, charaktere.odette.pose.sad, ƒS.positionPercent(charaktere.odette.positionStandard.x, charaktere.odette.positionStandard.y))
                    await ƒS.update(0.4);  

                    await ƒS.Speech.tell(charaktere.odette, " Oh ja, das war leider ich. Die gute Seele hat mich wiedererkannt. Kam auf mich zustürzt und hat nicht aufgehört zu Miauen. Da habe ich sie in den Schuppen gesperrt. ");
                   
                    await ƒS.Character.hide(charaktere.bronte);
                    await ƒS.Character.show(charaktere.bronte, charaktere.bronte.pose.think, ƒS.positionPercent(charaktere.bronte.positionStandard.x, charaktere.bronte.positionStandard.y))
                    await ƒS.update(0.4);  
                   
                    await ƒS.Speech.tell(charaktere.bronte, " Aber wie kam Artemis aus dem Arbeitszimmer? ");

                    await ƒS.Character.hide(charaktere.odette);
                    await ƒS.Character.show(charaktere.odette, charaktere.odette.pose.think, ƒS.positionPercent(charaktere.odette.positionStandard.x, charaktere.odette.positionStandard.y))
                    await ƒS.update(0.4);  

                    await ƒS.Speech.tell(charaktere.odette, " Oh, ich habe versucht über das Fenster hereinzukommen, wurde aber von Remington gestört, der sauber gemacht hat. ");
                    await ƒS.Speech.tell(charaktere.odette, " Ich habe die Flucht ergriffen bevor er mich sah, aber dabei das Fenster vergessen und Artemis ist mir gefolgt. ");
                    
                    await ƒS.Character.hide(charaktere.odette);
                    await ƒS.Character.show(charaktere.odette, charaktere.odette.pose.sad, ƒS.positionPercent(charaktere.odette.positionStandard.x, charaktere.odette.positionStandard.y))
                    await ƒS.update(0.4);  

                    await ƒS.Speech.tell(charaktere.odette, " Ich habe sie im Schuppen eingesperrt. ");

                    await ƒS.Character.hide(charaktere.bronte);
                    await ƒS.Character.show(charaktere.bronte, charaktere.bronte.pose.happy, ƒS.positionPercent(charaktere.bronte.positionStandard.x, charaktere.bronte.positionStandard.y))
                    await ƒS.update(0.4);  

                    await ƒS.Speech.tell(charaktere.bronte, " Das war nicht sonderlich erfolgreich. Sie ist durch das Dach entkommen und hat dabei ihr Halsband verloren. ");
                    await ƒS.Speech.tell(charaktere.odette, " Oh die Arme, ich wollte ihr aber wirklich keinen Schrecken machen. ");

                    await ƒS.Character.hide(charaktere.bronte);
                    await ƒS.Character.show(charaktere.bronte, charaktere.bronte.pose.laugh, ƒS.positionPercent(charaktere.bronte.positionStandard.x, charaktere.bronte.positionStandard.y))
                    await ƒS.update(0.4);  

                    await ƒS.Speech.tell(charaktere.bronte, " Dass erklärt das Mysterium der eigesperrten Katze.");


                    chooseKnow.cat = "";
                    countDialogAlreadyDid += 1;
                    break;

                case chooseKnow.ghosting:

                    await ƒS.Character.hide(charaktere.bronte);
                    await ƒS.Character.show(charaktere.bronte, charaktere.bronte.pose.think, ƒS.positionPercent(charaktere.bronte.positionStandard.x, charaktere.bronte.positionStandard.y))
                    await ƒS.update(0.4);  

                    await ƒS.Speech.tell(charaktere.bronte, " Warum jagen sie Stella solch einen Schrecken ein? ");

                    await ƒS.Character.hide(charaktere.odette);
                    await ƒS.Character.show(charaktere.odette, charaktere.odette.pose.sad, ƒS.positionPercent(charaktere.odette.positionStandard.x, charaktere.odette.positionStandard.y))
                    await ƒS.update(0.4);  

                    await ƒS.Speech.tell(charaktere.odette, " Oh, das war keine Absicht. Ich wusste nicht, dass Besuch im Haus ist und war deshalb unvorsichtig. Nachts bin ich einmal in ihr Zimmer eingebrochen und sie hat mich gesehen. ");
                   
                    await ƒS.Character.hide(charaktere.odette);
                    await ƒS.Character.show(charaktere.odette, charaktere.odette.pose.angry, ƒS.positionPercent(charaktere.odette.positionStandard.x, charaktere.odette.positionStandard.y))
                    await ƒS.update(0.4);  
                   
                    await ƒS.Speech.tell(charaktere.odette, " Oder zumindest eine Gestalt. Die Arme hat sich ziemlich erschreckt und wohl noch nicht ganz davon erholt. ");
                    await ƒS.Speech.tell(charaktere.bronte, " Und heute Abend? ");

                    await ƒS.Character.hide(charaktere.odette);
                    await ƒS.Character.show(charaktere.odette, charaktere.odette.pose.think, ƒS.positionPercent(charaktere.odette.positionStandard.x, charaktere.odette.positionStandard.y))
                    await ƒS.update(0.4);  

                    await ƒS.Speech.tell(charaktere.odette, " Auch das war nicht geplant. Die Laternen gingen an, obwohl ich sie manipuliert hatte und auf meinem Weg durch den Garten sah sie mich durchs Fenster. ");
                    await ƒS.Speech.tell(charaktere.odette, " Zum Glück konnte nur sie mich sehen. ");

                    await ƒS.Character.hide(charaktere.bronte);
                    await ƒS.Character.show(charaktere.bronte, charaktere.bronte.pose.sad, ƒS.positionPercent(charaktere.bronte.positionStandard.x, charaktere.bronte.positionStandard.y))
                    await ƒS.update(0.4);  

                    await ƒS.Speech.tell(charaktere.bronte, " Dass erklärt was mit Stella los ist und warum sie sich so unwohl hier zu fühlen scheint.");

                    chooseKnow.ghosting = "";
                    countDialogAlreadyDid += 1;
                    break;

                case chooseKnow.whyNotDead:

                    await ƒS.Character.hide(charaktere.bronte);
                    await ƒS.Character.show(charaktere.bronte, charaktere.bronte.pose.think, ƒS.positionPercent(charaktere.bronte.positionStandard.x, charaktere.bronte.positionStandard.y))
                    await ƒS.update(0.4);  

                    await ƒS.Speech.tell(charaktere.bronte, " Nun… Wieso leben Sie noch? ");

                    await ƒS.Character.hide(charaktere.odette);
                    await ƒS.Character.show(charaktere.odette, charaktere.odette.pose.think, ƒS.positionPercent(charaktere.odette.positionStandard.x, charaktere.odette.positionStandard.y))
                    await ƒS.update(0.4);  

                    await ƒS.Speech.tell(charaktere.odette, " Ja… dass ist eine lange Geschichte. Ich habe nicht viel Zeit daher halte ich mich kurz. ");

                    await ƒS.Character.hide(charaktere.odette);
                    await ƒS.Character.show(charaktere.odette, charaktere.odette.pose.sad, ƒS.positionPercent(charaktere.odette.positionStandard.x, charaktere.odette.positionStandard.y))
                    await ƒS.update(0.4);  

                    await ƒS.Speech.tell(charaktere.odette, " Mein Bruder riet mir vor einigen Jahren meine Nase nicht zu tief in fremde Angelegenheiten zu stecken und machte mir klar, dass er bereit wäre drastische Maßnahmen durchzuführen. ");

                    await ƒS.Character.hide(charaktere.odette);
                    await ƒS.Character.show(charaktere.odette, charaktere.odette.pose.angry, ƒS.positionPercent(charaktere.odette.positionStandard.x, charaktere.odette.positionStandard.y))
                    await ƒS.update(0.4);  

                    await ƒS.Speech.tell(charaktere.odette, " Er hatte Angst um sein Erbe und Geld war ihm schon immer wichtiger als alles andere. Aber er hatte noch immer die Kontakte und Mittel wirklich schreckliche Sachen zu tun. ");
                    
                    await ƒS.Character.hide(charaktere.odette);
                    await ƒS.Character.show(charaktere.odette, charaktere.odette.pose.think, ƒS.positionPercent(charaktere.odette.positionStandard.x, charaktere.odette.positionStandard.y))
                    await ƒS.update(0.4);  
                    
                    await ƒS.Speech.tell(charaktere.odette, " Also kam ich ihm zuvor. Ließ es aussehen als hätte die Themse mich fortgerissen. Es war töricht und doch würde ich es jederzeit wieder tun. ");

                    await ƒS.Character.hide(charaktere.bronte);
                    await ƒS.Character.show(charaktere.bronte, charaktere.bronte.pose.shout, ƒS.positionPercent(charaktere.bronte.positionStandard.x, charaktere.bronte.positionStandard.y))
                    await ƒS.update(0.4);  

                    await ƒS.Speech.tell(charaktere.odette, " Ich musste Isaac einfach vor meiner Familie schützen. Egal um welchen Preis. ");

                    await ƒS.Character.hide(charaktere.bronte);
                    await ƒS.Character.show(charaktere.bronte, charaktere.bronte.pose.think, ƒS.positionPercent(charaktere.bronte.positionStandard.x, charaktere.bronte.positionStandard.y))
                    await ƒS.update(0.4);  

                    await ƒS.Speech.tell(charaktere.bronte, " Er wusste nichts davon? ");

                    await ƒS.Character.hide(charaktere.odette);
                    await ƒS.Character.show(charaktere.odette, charaktere.odette.pose.sad, ƒS.positionPercent(charaktere.odette.positionStandard.x, charaktere.odette.positionStandard.y))
                    await ƒS.update(0.4);  

                    await ƒS.Speech.tell(charaktere.odette, " Nein. Mein Bruder ließ ihn beschatten und ich konnte es nicht riskieren bei ihm gesehen zu werden. ");
                    await ƒS.Speech.tell(charaktere.odette, " Er hätte mich gesucht, sofern ich ein Lebenszeichen geschickt hätte. Und so blieb ich versteckt. ");

                    await ƒS.Character.hide(charaktere.bronte);
                    await ƒS.Character.show(charaktere.bronte, charaktere.bronte.pose.sad, ƒS.positionPercent(charaktere.bronte.positionStandard.x, charaktere.bronte.positionStandard.y))
                    await ƒS.update(0.4);  

                    await ƒS.Speech.tell(charaktere.bronte, " Und warteten auf ihre Rückkehr? ");

                    await ƒS.Character.hide(charaktere.odette);
                    await ƒS.Character.show(charaktere.odette, charaktere.odette.pose.scream, ƒS.positionPercent(charaktere.odette.positionStandard.x, charaktere.odette.positionStandard.y))
                    await ƒS.update(0.4);  

                    await ƒS.Speech.tell(charaktere.odette, " Oh nein… ich hatte mich damit abgefunden ein einfaches Leben zu führen. Keine Gefahr für niemanden zu sein. Aber dann- ");

                    await ƒS.Character.hide(charaktere.odette);
                    await ƒS.Character.show(charaktere.odette, charaktere.odette.pose.angry, ƒS.positionPercent(charaktere.odette.positionStandard.x, charaktere.odette.positionStandard.y))
                    await ƒS.update(0.4);  

                    await ƒS.Speech.tell(charaktere.odette, "  Verstarb Doktor Johansson. Der Notar, welcher auch das Testament meines Vaters angefertigt hatte. Und das meiner Mutter. ");
                    await ƒS.Speech.tell(charaktere.bronte, " Und was genau hat sein tot mit all diesem zu tun? ");

                    await ƒS.Character.hide(charaktere.bronte);
                    await ƒS.Character.show(charaktere.bronte, charaktere.bronte.pose.shout, ƒS.positionPercent(charaktere.bronte.positionStandard.x, charaktere.bronte.positionStandard.y))
                    await ƒS.update(0.4);  

                    await ƒS.Speech.tell(charaktere.odette, " Es war die Tatsache, dass meine Mutter ihr Testament bei ihm angefertigt hatte. Sie müssen wissen, bisher wirkt das Testament meines Vaters, da niemand annahm meine Mutter hätte eins angefertigt. ");
                    await ƒS.Speech.tell(charaktere.bronte, " !!! ");

                    await ƒS.Character.hide(charaktere.bronte);
                    await ƒS.Character.show(charaktere.bronte, charaktere.bronte.pose.happy, ƒS.positionPercent(charaktere.bronte.positionStandard.x, charaktere.bronte.positionStandard.y))
                    await ƒS.update(0.4);  

                    await ƒS.Speech.tell(charaktere.bronte, " Ein weiteres  Testament? Oh, jetzt macht es natürlich etwas mehr Sinn. Es gab natürlich jemand, der Interesse hatte ein weiteres Testament verschwinden zu lassen.");


                    let userchooseWhoHideTestament = await ƒS.Menu.getInput(chooseWhoHideTestament, "basicChoice");

                    switch (userchooseWhoHideTestament) {

                        case chooseWhoHideTestament.alaistar:

                            dataForSave.pointDetectiv += 1;

                            await ƒS.Character.hide(charaktere.bronte);
                            await ƒS.Character.show(charaktere.bronte, charaktere.bronte.pose.think, ƒS.positionPercent(charaktere.bronte.positionStandard.x, charaktere.bronte.positionStandard.y))
                            await ƒS.update(0.4);  

                            await ƒS.Speech.tell(charaktere.bronte, " Natürlich der Alleinerbe Alaistar Balckburn hatte am meisten durch ein weiteres Testament zu verlieren.");
                            break;

                        case chooseWhoHideTestament.grace:
                        case chooseWhoHideTestament.isaac:
                        case chooseWhoHideTestament.stella:

                            await ƒS.Character.hide(charaktere.bronte);
                            await ƒS.Character.show(charaktere.bronte, charaktere.bronte.pose.sad, ƒS.positionPercent(charaktere.bronte.positionStandard.x, charaktere.bronte.positionStandard.y))
                            await ƒS.update(0.4);  

                            await ƒS.Speech.tell(charaktere.bronte, " Nein, dass passt nicht. ");

                            await ƒS.Character.hide(charaktere.odette);
                            await ƒS.Character.show(charaktere.odette, charaktere.odette.pose.sad, ƒS.positionPercent(charaktere.odette.positionStandard.x, charaktere.odette.positionStandard.y))
                            await ƒS.update(0.4);  

                            await ƒS.Speech.tell(charaktere.odette, " Mein Bruder Alistair. Er war es.");
                            break;
                    }

                    await ƒS.Speech.tell(charaktere.odette, " Alaistar fürchtete wohl um sein Erbe und zurecht. ");

                    await ƒS.Character.hide(charaktere.bronte);
                    await ƒS.Character.show(charaktere.bronte, charaktere.bronte.pose.think, ƒS.positionPercent(charaktere.bronte.positionStandard.x, charaktere.bronte.positionStandard.y))
                    await ƒS.update(0.4);  

                    await ƒS.Speech.tell(charaktere.bronte, " Ihre Mutter hat ihm nicht das Vermögen vermacht? ");

                    await ƒS.Character.hide(charaktere.odette);
                    await ƒS.Character.show(charaktere.odette, charaktere.odette.pose.think, ƒS.positionPercent(charaktere.odette.positionStandard.x, charaktere.odette.positionStandard.y))
                    await ƒS.update(0.4);  

                    await ƒS.Speech.tell(charaktere.odette, " Nein. Zumindest nicht alles. Er kommt ein Drittel von dem Vermögen meines Vaters und nur ein wenig von dem Vermögen was meine Mutter in Heirat eingebracht hat. ");
                    await ƒS.Speech.tell(charaktere.bronte, " Und das war eine Menge? ");

                    await ƒS.Character.hide(charaktere.odette);
                    await ƒS.Character.show(charaktere.odette, charaktere.odette.pose.sad, ƒS.positionPercent(charaktere.odette.positionStandard.x, charaktere.odette.positionStandard.y))
                    await ƒS.update(0.4);  

                    await ƒS.Speech.tell(charaktere.odette, " Eine ganze Menge. Mein Vater hatte viele Schulden bevor der Hochzeit. Sie rettete ihn finanziell. ");

                    await ƒS.Character.hide(charaktere.bronte);
                    await ƒS.Character.show(charaktere.bronte, charaktere.bronte.pose.angry, ƒS.positionPercent(charaktere.bronte.positionStandard.x, charaktere.bronte.positionStandard.y))
                    await ƒS.update(0.4);  

                    await ƒS.Speech.tell(charaktere.bronte, " Und wenn ich es recht verstehe, dann vermachte ihre Mutter ihnen den Rest? Ihr Bruder bekam Wind davon und bedrohte Sie? ");

                    await ƒS.Character.hide(charaktere.odette);
                    await ƒS.Character.show(charaktere.odette, charaktere.odette.pose.angry, ƒS.positionPercent(charaktere.odette.positionStandard.x, charaktere.odette.positionStandard.y))
                    await ƒS.update(0.4);  

                    await ƒS.Speech.tell(charaktere.odette, " Ja. Er bekam das Original in die Finger und versteckte es. ");

                    await ƒS.Character.hide(charaktere.bronte);
                    await ƒS.Character.show(charaktere.bronte, charaktere.bronte.pose.think, ƒS.positionPercent(charaktere.bronte.positionStandard.x, charaktere.bronte.positionStandard.y))
                    await ƒS.update(0.4);  

                    await ƒS.Speech.tell(charaktere.bronte, " Er zerstörte es nicht? ");

                    await ƒS.Character.hide(charaktere.odette);
                    await ƒS.Character.show(charaktere.odette, charaktere.odette.pose.think, ƒS.positionPercent(charaktere.odette.positionStandard.x, charaktere.odette.positionStandard.y))
                    await ƒS.update(0.4);  

                    await ƒS.Speech.tell(charaktere.odette, " Dass nahm ich zuerst auch an. Für die letzten Jahre glaubte ich das Testament sei zerstört, aber dann erreichte mich der Brief von Doktor Johanson. ");

                    await ƒS.Character.hide(charaktere.bronte);
                    await ƒS.Character.show(charaktere.bronte, charaktere.bronte.pose.shout, ƒS.positionPercent(charaktere.bronte.positionStandard.x, charaktere.bronte.positionStandard.y))
                    await ƒS.update(0.4);  

                    await ƒS.Speech.tell(charaktere.bronte, " Der tote Notar hatte nicht etwa eine Kopie? ");

                    await ƒS.Character.hide(charaktere.bronte);
                    await ƒS.Character.show(charaktere.bronte, charaktere.bronte.pose.sad, ƒS.positionPercent(charaktere.bronte.positionStandard.x, charaktere.bronte.positionStandard.y))
                    await ƒS.Character.hide(charaktere.odette);
                    await ƒS.Character.show(charaktere.odette, charaktere.odette.pose.sad, ƒS.positionPercent(charaktere.odette.positionStandard.x, charaktere.odette.positionStandard.y))
                    await ƒS.update(0.4);   

                    await ƒS.Speech.tell(charaktere.odette, " Nein und mein Bruder schüchterte ihn zu Lebzeiten zu sehr ein, als dass er etwas versucht hätte zu unternehmen. Aber als er verstarb ließ er in Auftrag geben mir einen Brief zu senden. ");

                    await ƒS.Character.hide(charaktere.odette);
                    await ƒS.Character.show(charaktere.odette, charaktere.odette.pose.sad, ƒS.positionPercent(charaktere.odette.positionStandard.x, charaktere.odette.positionStandard.y))
                    await ƒS.update(0.4);  

                    await ƒS.Speech.tell(charaktere.odette, " Er schrieb, dass meine Mutter das Testament auf einem wichtigen Dokument geschrieben hätte. Alaistar konnte nicht riskieren diese Urkunde zu verlieren, daher muss es das Testament noch geben! ");
                    await ƒS.Speech.tell(charaktere.bronte, " Ich verstehe… ");

                    await ƒS.Character.hide(charaktere.bronte);
                    await ƒS.Character.show(charaktere.bronte, charaktere.bronte.pose.think, ƒS.positionPercent(charaktere.bronte.positionStandard.x, charaktere.bronte.positionStandard.y))
                    await ƒS.update(0.4);  

                    await ƒS.Speech.tell(charaktere.bronte, " Du willst es finden und so dein rechtmäßiges Erbe bekommen? ");

                    await ƒS.Character.hide(charaktere.odette);
                    await ƒS.Character.show(charaktere.odette, charaktere.odette.pose.angry, ƒS.positionPercent(charaktere.odette.positionStandard.x, charaktere.odette.positionStandard.y))
                    await ƒS.update(0.4);  

                    await ƒS.Speech.tell(charaktere.odette, " Ich will vor allem frei von der Tyrannei meines Bruders sein. Ich kenne seine Freunde, die Leute, die eher seine Angestellten sind. ");

                    await ƒS.Character.hide(charaktere.bronte);
                    await ƒS.Character.show(charaktere.bronte, charaktere.bronte.pose.sad, ƒS.positionPercent(charaktere.bronte.positionStandard.x, charaktere.bronte.positionStandard.y))
                    await ƒS.update(0.4);  

                    await ƒS.Speech.tell(charaktere.odette, " Wenn er kein Geld mehr hat, wird er sie alle verlieren.");


                    chooseKnow.whyNotDead = "";
                    countDialogAlreadyDid += 1;
                    break;

                case chooseKnow.whyhere:

                    await ƒS.Character.hide(charaktere.bronte);
                    await ƒS.Character.show(charaktere.bronte, charaktere.bronte.pose.think, ƒS.positionPercent(charaktere.bronte.positionStandard.x, charaktere.bronte.positionStandard.y))
                    await ƒS.update(0.4);  

                    await ƒS.Speech.tell(charaktere.bronte, " Was willst du hier? Also im Haus und im Arbeitszimmer. ");

                    await ƒS.Character.hide(charaktere.bronte);
                    await ƒS.Character.show(charaktere.bronte, charaktere.bronte.pose.sad, ƒS.positionPercent(charaktere.bronte.positionStandard.x, charaktere.bronte.positionStandard.y))
                    await ƒS.Character.hide(charaktere.odette);
                    await ƒS.Character.show(charaktere.odette, charaktere.odette.pose.think, ƒS.positionPercent(charaktere.odette.positionStandard.x, charaktere.odette.positionStandard.y))
                    await ƒS.update(0.4);   

                    await ƒS.Speech.tell(charaktere.odette, " Ich suche ein Dokument, was mir hilft aus diesem Schlamassel heraus zu kommen. ");

                    await ƒS.Character.hide(charaktere.bronte);
                    await ƒS.Character.show(charaktere.bronte, charaktere.bronte.pose.think, ƒS.positionPercent(charaktere.bronte.positionStandard.x, charaktere.bronte.positionStandard.y))
                    await ƒS.update(0.4);  

                    await ƒS.Speech.tell(charaktere.bronte, " Und das ist hier im Arbeitszimmer? ");
                    await ƒS.Speech.tell(charaktere.odette, " Ich nehme es an.");


                    chooseKnow.whyhere = "";
                    countDialogAlreadyDid += 1;
                    break;
            }

            if (countDialogAlreadyDid < 4) {
                await ƒS.Speech.tell(charaktere.bronte, "Aber was ist mit…");

            }

        }

        await ƒS.Character.hide(charaktere.bronte);
        await ƒS.Character.show(charaktere.bronte, charaktere.bronte.pose.happy, ƒS.positionPercent(charaktere.bronte.positionStandard.x, charaktere.bronte.positionStandard.y))
        await ƒS.update(0.4);  

        await ƒS.Speech.tell(charaktere.bronte, " Okay, ich helfe dir. ");

        await ƒS.Character.hide(charaktere.odette);
        await ƒS.Character.show(charaktere.odette, charaktere.odette.pose.gleefull, ƒS.positionPercent(charaktere.odette.positionStandard.x, charaktere.odette.positionStandard.y))
        await ƒS.update(0.4);  

        await ƒS.Speech.tell(charaktere.odette, " Wirklich! Vielen Dank. ");

        await ƒS.Character.hide(charaktere.bronte);
        await ƒS.Character.show(charaktere.bronte, charaktere.bronte.pose.think, ƒS.positionPercent(charaktere.bronte.positionStandard.x, charaktere.bronte.positionStandard.y))
        await ƒS.Character.hide(charaktere.odette);
        await ƒS.Character.show(charaktere.odette, charaktere.odette.pose.angry, ƒS.positionPercent(charaktere.odette.positionStandard.x, charaktere.odette.positionStandard.y))
        await ƒS.update(0.4);  

        await ƒS.Speech.tell(charaktere.bronte, " Ich weiß nicht, ob du die Wahrheit sagst, aber das lässt sich überprüfen, wenn wir das Testament finden. ");
        await ƒS.Speech.tell(charaktere.bronte, " Wo genau vermutet du es? Ich nehme an Mr. Blackburn hat ein Tresor für solch sensible Details? ");

        await ƒS.Character.hide(charaktere.bronte);
        await ƒS.Character.show(charaktere.bronte, charaktere.bronte.pose.sad, ƒS.positionPercent(charaktere.bronte.positionStandard.x, charaktere.bronte.positionStandard.y))
        await ƒS.Character.hide(charaktere.odette);
        await ƒS.Character.show(charaktere.odette, charaktere.odette.pose.think, ƒS.positionPercent(charaktere.odette.positionStandard.x, charaktere.odette.positionStandard.y))
        await ƒS.update(0.4);  

        await ƒS.Speech.tell(charaktere.odette, " Ja, meine Mutter lagerte hier immer die teuersten Schmuckstücke. Grace und ich beide haben daher auch immer Zugriff gehabt. Wenn ich mich richtig erinnere, müsste er hier hinter dem Bücherregal sein. ");
        await ƒS.Speech.tell(charaktere.bronte, " Okay, na dann. ");
        await ƒS.Speech.tell(charaktere.bronte, " Einfach ein paar Bücher zur Seite legen. ");
        await ƒS.Speech.tell(charaktere.bronte, " Mhm und.. ");

        await ƒS.Character.hide(charaktere.bronte);
        await ƒS.Character.show(charaktere.bronte, charaktere.bronte.pose.shout, ƒS.positionPercent(charaktere.bronte.positionStandard.x, charaktere.bronte.positionStandard.y))
        await ƒS.Character.hide(charaktere.odette);
        await ƒS.Character.show(charaktere.odette, charaktere.odette.pose.scream, ƒS.positionPercent(charaktere.odette.positionStandard.x, charaktere.odette.positionStandard.y))
        await ƒS.update(0.4);    

        await ƒS.Speech.tell(charaktere.bronte, " Oh! ");

        await ƒS.Character.hide(charaktere.bronte);
        await ƒS.Character.show(charaktere.bronte, charaktere.bronte.pose.think, ƒS.positionPercent(charaktere.bronte.positionStandard.x, charaktere.bronte.positionStandard.y))
        await ƒS.Character.hide(charaktere.odette);
        await ƒS.Character.show(charaktere.odette, charaktere.odette.pose.angry, ƒS.positionPercent(charaktere.odette.positionStandard.x, charaktere.odette.positionStandard.y))
        await ƒS.update(0.4);  

        await ƒS.Speech.tell(charaktere.bronte, " Hier ist ein Tresor! Mhm eine Zahlenkombination. ");
        await ƒS.Speech.tell(charaktere.odette, " Mhm… Es ist nicht mehr der Geburtstag meiner Mutter. Alaistar hat wohl geändert. Mist! ");
        await ƒS.Speech.tell(charaktere.bronte, " Ich frage mich… Ob ich vielleicht ein Item dabeihabe, was uns helfen könnte");

        let userchooseSomethingThatHelps = await ƒS.Menu.getInput(chooseSomethingThatHelps, "basicChoice");

        switch (userchooseSomethingThatHelps) {

            case chooseSomethingThatHelps.yes:


                let userchooseFromInventory = await ƒS.Menu.getInput(chooseFromInventory, "basicChoice");

                switch (userchooseFromInventory) {

                    case chooseFromInventory.collar:

                        dataForSave.pointDetectiv += 1;
                        dataForSave.gotTestament = true; 

                        await ƒS.Character.hide(charaktere.bronte);
                        await ƒS.Character.show(charaktere.bronte, charaktere.bronte.pose.laugh, ƒS.positionPercent(charaktere.bronte.positionStandard.x, charaktere.bronte.positionStandard.y))
                        await ƒS.update(0.4);  

                        await ƒS.Speech.tell(charaktere.bronte, " Oh! Hier! Ich wusste dass dort noch mehr im Halsband ist. Wenn ich es umdrehe ist hier eine Nummer! ");

                        await ƒS.Character.hide(charaktere.bronte);
                        await ƒS.Character.show(charaktere.bronte, charaktere.bronte.pose.happy, ƒS.positionPercent(charaktere.bronte.positionStandard.x, charaktere.bronte.positionStandard.y))
                        await ƒS.Character.hide(charaktere.odette);
                        await ƒS.Character.show(charaktere.odette, charaktere.odette.pose.happy, ƒS.positionPercent(charaktere.odette.positionStandard.x, charaktere.odette.positionStandard.y))
                        await ƒS.update(0.4);  

                        await ƒS.Speech.tell(charaktere.odette, " Tatsächlich auf der Rückseite des Namensanhänger. ");

                        await ƒS.Character.hide(charaktere.odette);
                        await ƒS.Character.show(charaktere.odette, charaktere.odette.pose.think, ƒS.positionPercent(charaktere.odette.positionStandard.x, charaktere.odette.positionStandard.y))
                        await ƒS.update(0.4);  

                        await ƒS.Speech.tell(charaktere.odette, " In der Handschrift meiner vergesslichen Schwester. ");

                        await ƒS.Character.hide(charaktere.bronte);
                        await ƒS.Character.show(charaktere.bronte, charaktere.bronte.pose.think, ƒS.positionPercent(charaktere.bronte.positionStandard.x, charaktere.bronte.positionStandard.y))
                        await ƒS.update(0.4);  

                        await ƒS.Speech.tell(charaktere.bronte, " Das erklärt warum sie so aufgebracht war über das Verschwinden der Katze. Es ging ihr um den Code. Wie lautet er? ");
                        await ƒS.Speech.tell(charaktere.odette, " 279.");

                        await ƒS.Character.hide(charaktere.bronte);
                        await ƒS.Character.show(charaktere.bronte, charaktere.bronte.pose.shout, ƒS.positionPercent(charaktere.bronte.positionStandard.x, charaktere.bronte.positionStandard.y))
                        await ƒS.Character.hide(charaktere.odette);
                        await ƒS.Character.show(charaktere.odette, charaktere.odette.pose.scream, ƒS.positionPercent(charaktere.odette.positionStandard.x, charaktere.odette.positionStandard.y))
                        await ƒS.update(0.4);  

                        await ƒS.Speech.tell(charaktere.odette, " !!! ");

                        await ƒS.Character.hide(charaktere.odette);
                        await ƒS.Character.show(charaktere.odette, charaktere.odette.pose.gleefull, ƒS.positionPercent(charaktere.odette.positionStandard.x, charaktere.odette.positionStandard.y))
                        await ƒS.update(0.4);  

                        await ƒS.Speech.tell(charaktere.odette, " Der Tresor, er ist offen! ");

                        await ƒS.Character.hide(charaktere.bronte);
                        await ƒS.Character.show(charaktere.bronte, charaktere.bronte.pose.think, ƒS.positionPercent(charaktere.bronte.positionStandard.x, charaktere.bronte.positionStandard.y))
                        await ƒS.Character.hide(charaktere.odette);
                        await ƒS.Character.show(charaktere.odette, charaktere.odette.pose.think, ƒS.positionPercent(charaktere.odette.positionStandard.x, charaktere.odette.positionStandard.y))
                        await ƒS.update(0.4);   

                        await ƒS.Speech.tell(charaktere.bronte, " Schmuck, ein paar Scheine und hier! Die Besitzurkunde des Hauses. ");

                        await ƒS.Inventory.add(inventory.testament);
                        await ƒS.Inventory.open(); 

                        await ƒS.Character.hide(charaktere.bronte);
                        await ƒS.Character.show(charaktere.bronte, charaktere.bronte.pose.happy, ƒS.positionPercent(charaktere.bronte.positionStandard.x, charaktere.bronte.positionStandard.y))
                        await ƒS.Character.hide(charaktere.odette);
                        await ƒS.Character.show(charaktere.odette, charaktere.odette.pose.happy, ƒS.positionPercent(charaktere.odette.positionStandard.x, charaktere.odette.positionStandard.y))
                        await ƒS.update(0.4);  

                        await ƒS.Speech.tell(charaktere.bronte, " Deine Mutter war ziemlich clever. ");

                        await ƒS.Character.hide(charaktere.bronte);
                        await ƒS.Character.show(charaktere.bronte, charaktere.bronte.pose.laugh, ƒS.positionPercent(charaktere.bronte.positionStandard.x, charaktere.bronte.positionStandard.y))
                        await ƒS.update(0.4);  

                        await ƒS.Speech.tell(charaktere.bronte, " Ich denke wir kennen beide einen Anwalt der-");

                        await ƒS.Character.hide(charaktere.bronte);
                        await ƒS.Character.show(charaktere.bronte, charaktere.bronte.pose.shout, ƒS.positionPercent(charaktere.bronte.positionStandard.x, charaktere.bronte.positionStandard.y))
                        await ƒS.Character.hide(charaktere.odette);
                        await ƒS.Character.show(charaktere.odette, charaktere.odette.pose.scream, ƒS.positionPercent(charaktere.odette.positionStandard.x, charaktere.odette.positionStandard.y))
                        await ƒS.update(0.4);  

                        break;

                    case chooseFromInventory.gun:

                    case chooseFromInventory.ring:

                        await ƒS.Character.hide(charaktere.bronte);
                        await ƒS.Character.show(charaktere.bronte, charaktere.bronte.pose.sad, ƒS.positionPercent(charaktere.bronte.positionStandard.x, charaktere.bronte.positionStandard.y))
                        await ƒS.update(0.4);  

                        await ƒS.Speech.tell(charaktere.bronte, " Mhm ne, dass macht ja keinen Sinn. Aber vielleicht-");

                        await ƒS.Character.hide(charaktere.bronte);
                        await ƒS.Character.show(charaktere.bronte, charaktere.bronte.pose.shout, ƒS.positionPercent(charaktere.bronte.positionStandard.x, charaktere.bronte.positionStandard.y))
                        await ƒS.Character.hide(charaktere.odette);
                        await ƒS.Character.show(charaktere.odette, charaktere.odette.pose.scream, ƒS.positionPercent(charaktere.odette.positionStandard.x, charaktere.odette.positionStandard.y))
                        await ƒS.update(0.4);  

                        break;
                }

                break;

            case chooseSomethingThatHelps.no:

                await ƒS.Character.hide(charaktere.bronte);
                await ƒS.Character.show(charaktere.bronte, charaktere.bronte.pose.sad, ƒS.positionPercent(charaktere.bronte.positionStandard.x, charaktere.bronte.positionStandard.y))
                await ƒS.update(0.4);  

                await ƒS.Speech.tell(charaktere.bronte, " Tut mir leid, ich glaube ich habe nichts dabei was uns helfen könnte. ");
                await ƒS.Speech.tell(charaktere.odette, " Oh schade, aber-");

                await ƒS.Character.hide(charaktere.bronte);
                await ƒS.Character.show(charaktere.bronte, charaktere.bronte.pose.shout, ƒS.positionPercent(charaktere.bronte.positionStandard.x, charaktere.bronte.positionStandard.y))
                await ƒS.Character.hide(charaktere.odette);
                await ƒS.Character.show(charaktere.odette, charaktere.odette.pose.scream, ƒS.positionPercent(charaktere.odette.positionStandard.x, charaktere.odette.positionStandard.y))
                await ƒS.update(0.4);   

                break;

        }
        return "SceneTwelveFinal";

    }
}