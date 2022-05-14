namespace Template {
    export async function SceneThreeSaalon(): ƒS.SceneReturn {

        await ƒS.Sound.play(sound.themeSaloon, 0.1, true);

        let chooseWeirdPerson = {
            //todo: Pointsystem
            stella: "Stella",
            grace: "Grace",
            lordBlackburn: "Lord Blackburn"
        }

        let chooseHaggis = {
            //todo: Pointsystem
            lie: "Lüge",
            truth: "Erzähle Wahrheit"
        }

        await ƒS.Location.show(location.saalon);
        await ƒS.update(transistions.inToOut.duration, transistions.inToOut.alpha, transistions.inToOut.edge);

        await ƒS.Character.show(charaktere.bronte, charaktere.bronte.pose.happy, ƒS.positionPercent(charaktere.bronte.positionStandard.x , charaktere.bronte.positionStandard.y));

        await ƒS.Character.show(charaktere.maire, charaktere.maire.pose.neutral, ƒS.positionPercent(charaktere.maire.positionStandard.x , charaktere.maire.positionStandard.y));
        await ƒS.update(1);

        await ƒS.Character.show(charaktere.grace, charaktere.grace.pose.laugh, ƒS.positionPercent(charaktere.grace.positionStandard.x , charaktere.grace.positionStandard.y));
        await ƒS.update(0.8);

        await ƒS.Speech.tell(charaktere.grace, " Oh! Miss Bronte! Welch eine Freude. Und oh… welch ein ungewöhnliches Outfit sie tragen. Sind das Hosen? Wie… modern. ");

        await ƒS.Character.hide(charaktere.grace); 
        await ƒS.Character.show(charaktere.grace, charaktere.grace.pose.happy, ƒS.positionPercent(charaktere.grace.positionStandard.x , charaktere.grace.positionStandard.y));
        await ƒS.update(0.4);

        await ƒS.Speech.tell(charaktere.bronte, " Vielen Dank. Sie sehen auch fantastisch aus Lady Blackburn. Darf ich Ihnen meine Begleitung vorstellen, dass hier ist Miss MacGinnis. ");

        await ƒS.Character.hide(charaktere.maire); 
        await ƒS.Character.show(charaktere.maire, charaktere.maire.pose.happy, ƒS.positionPercent(charaktere.maire.positionStandard.x , charaktere.maire.positionStandard.y));
        await ƒS.update(0.4);

        await ƒS.Speech.tell(charaktere.maire, " Oh, nennen sie mich Maire. ");

        await ƒS.Character.hide(charaktere.grace); 
        await ƒS.Character.show(charaktere.grace, charaktere.grace.pose.laugh, ƒS.positionPercent(charaktere.grace.positionStandard.x , charaktere.grace.positionStandard.y));
        await ƒS.update(0.4);

        await ƒS.Speech.tell(charaktere.grace, "Vornamen… wie… modern! Dann nennen sie mich doch gerne Grace. Die Etikette können Sie sich für meinen Bruder aufheben. Oh, da kommt er auch schon. ");

        await ƒS.Character.hide(charaktere.bronte); 
        await ƒS.Character.show(charaktere.bronte, charaktere.bronte.pose.happy, ƒS.positionPercent(10, 110));

        await ƒS.Character.hide(charaktere.maire); 
        await ƒS.Character.show(charaktere.maire, charaktere.maire.pose.happy, ƒS.positionPercent(90, 110));
        await ƒS.update(0.2);

        await ƒS.Character.hide(charaktere.grace); 
        await ƒS.Character.show(charaktere.grace, charaktere.grace.pose.happy, ƒS.positionPercent(charaktere.grace.positionLeftMiddle.x , charaktere.grace.positionLeftMiddle.y));
        
        await ƒS.Character.hide(charaktere.alaistar); 
        await ƒS.Character.show(charaktere.alaistar, charaktere.alaistar.pose.happy, ƒS.positionPercent(charaktere.alaistar.positionRightMiddle.x , charaktere.alaistar.positionRightMiddle.y));
        await ƒS.update(0.4);

        await ƒS.Speech.tell(charaktere.alaistar, "Guten Abend. Freut mich sie kennenzulernen. ");

        await ƒS.Character.hide(charaktere.alaistar); 
        await ƒS.Character.show(charaktere.alaistar, charaktere.alaistar.pose.neutral, ƒS.positionPercent(charaktere.alaistar.positionRightMiddle.x , charaktere.alaistar.positionRightMiddle.y));
        await ƒS.update(0.4);

        await ƒS.Speech.tell(charaktere.bronte, "Lord Blackburn, die Freude ist ganz unsererseits, vielen Dank für die Einladung zum Abendessen. ");
        await ƒS.Speech.tell(charaktere.alaistar, "Meine Schwester hat so von Ihnen geschwärmt, da wollte auch ich Sie kennenlernen. Ein Detektiv ist immer ein interessanter Gast. Auch wenn Ihre Fälle sich sicherlich eher mit verlorenen Schmuckstücken und verlegten Kleidern beschäftigten. ");
        
        await ƒS.Character.hide(charaktere.alaistar); 
        await ƒS.Character.show(charaktere.alaistar, charaktere.alaistar.pose.happy, ƒS.positionPercent(charaktere.alaistar.positionRightMiddle.x , charaktere.alaistar.positionRightMiddle.y));
        await ƒS.update(0.4);
        
        await ƒS.Speech.tell(charaktere.alaistar, " HoHo. Frauen Probleme.");

        await ƒS.Character.hide(charaktere.alaistar); 
        await ƒS.Character.show(charaktere.alaistar, charaktere.alaistar.pose.neutral, ƒS.positionPercent(charaktere.alaistar.positionRightMiddle.x , charaktere.alaistar.positionRightMiddle.y));
        await ƒS.update(0.4);

        await ƒS.Character.hide(charaktere.bronte); 
        await ƒS.Character.show(charaktere.bronte, charaktere.bronte.pose.sad, ƒS.positionPercent(10, 110));
        await ƒS.update(0.4);

        await ƒS.Speech.tell(charaktere.bronte, "Tatsächlich befassen sich meine Fälle mit allen Problemen, die in London auftauchen. Erst neulich habe ich die Napoleon Büchse- ");

        await ƒS.Character.hide(charaktere.bronte); 
        await ƒS.Character.show(charaktere.bronte, charaktere.bronte.pose.think, ƒS.positionPercent(10, 110));
        await ƒS.update(0.4);

        await ƒS.Speech.tell(charaktere.grace, "Oh Stella! Komm schnell rüber meine Liebe. Dann sind wir ja fast alle komplett. Komm schnell kleines und stell dich vor. Miss Bronte, dies ist meine Cousine, Stella Blackburn. ");

        await ƒS.Character.hide(charaktere.grace); 
        await ƒS.Character.show(charaktere.grace, charaktere.grace.pose.happy, ƒS.positionPercent(charaktere.grace.positionLeftMiddle.x , charaktere.grace.positionLeftMiddle.y));
        await ƒS.update(0.4);

        await ƒS.Character.hide(charaktere.stella); 
        await ƒS.Character.hide(charaktere.alaistar);
        await ƒS.Character.show(charaktere.stella, charaktere.stella.pose.sad, ƒS.positionPercent(charaktere.stella.positionRightMiddle.x , charaktere.stella.positionRightMiddle.y));
        await ƒS.update(0.8);

        await ƒS.Speech.tell(charaktere.stella, "Guten Abend. ");

        await ƒS.Character.hide(charaktere.bronte); 
        await ƒS.Character.show(charaktere.bronte, charaktere.bronte.pose.happy, ƒS.positionPercent(10, 110));
        await ƒS.update(0.4);

        await ƒS.Speech.tell(charaktere.bronte, "Freut mich Sie kennenzulernen. ");

        await ƒS.Character.hide(charaktere.grace); 
        await ƒS.Character.show(charaktere.grace, charaktere.grace.pose.laugh, ƒS.positionPercent(charaktere.grace.positionLeftMiddle.x , charaktere.grace.positionLeftMiddle.y));
        await ƒS.update(0.4);

        await ƒS.Speech.tell(charaktere.grace, "Stella ist ein fabelhaftes Mädchen. Sie verbringt den Sommer bei mir, um sich ein wenig an die Londoner Luft zu gewöhnen.");

        await ƒS.Character.hide(charaktere.grace); 
        await ƒS.Character.show(charaktere.grace, charaktere.grace.pose.happy, ƒS.positionPercent(charaktere.grace.positionLeftMiddle.x , charaktere.grace.positionLeftMiddle.y));
        await ƒS.update(0.4);

        await ƒS.Speech.tell(charaktere.grace, "Aber schauen sie sich mal diese wunderschönen Haare an. Ich denke wir werden nächste Season einen tollen Partner für sie finden. ");

        await ƒS.Character.hide(charaktere.bronte); 
        await ƒS.Character.show(charaktere.bronte, charaktere.bronte.pose.laugh, ƒS.positionPercent(10, 110));
        await ƒS.update(0.4);

        await ƒS.Speech.tell(charaktere.bronte, "Oh ja, sie müssen mir später unbedingt erklären, wie sie so großartige Locken herzaubern. ");
        await ƒS.Speech.tell(charaktere.stella, "Sicherlich. ");

        await ƒS.Character.hide(charaktere.bronte); 
        await ƒS.Character.show(charaktere.bronte, charaktere.bronte.pose.happy, ƒS.positionPercent(10, 110));
        await ƒS.update(0.4);

        await ƒS.Character.hide(charaktere.bronte); 
        await ƒS.Character.hide(charaktere.maire); 
        await ƒS.Character.hide(charaktere.stella); 
        await ƒS.Character.hide(charaktere.grace); 
        await ƒS.update(0.4);

        
        await ƒS.Character.show(charaktere.remington, charaktere.remington.pose.neutral, ƒS.positionPercent(charaktere.remington.positionStandard.x, charaktere.remington.positionStandard.y));
        await ƒS.update(0.8);


        await ƒS.Speech.tell(charaktere.remington, "Ehm… My Lord, my Lady, auch Mister Rothchester ist nun endlich eingetroffen. ");

        await ƒS.Character.hide(charaktere.remington); 
        await ƒS.update(0.4);

        
        await ƒS.Character.show(charaktere.alaistar, charaktere.alaistar.pose.angry, ƒS.positionPercent(50 , charaktere.alaistar.positionRightMiddle.y));
        await ƒS.update(0.4);

        await ƒS.Speech.tell(charaktere.alaistar, " Wurde ja auch Zeit… Dieser Mann hat einfach keine Manieren. Bitte setzt euch alle schon Mal, ich werde Ihn kurz begrüßen und zur Eile mahnen. ");

        await ƒS.Character.hide(charaktere.alaistar); 
        await ƒS.update(0.8);

        await ƒS.Character.show(charaktere.maire, charaktere.maire.pose.neutral, ƒS.positionPercent(charaktere.maire.positionStandard.x , charaktere.maire.positionStandard.y));
        await ƒS.update(0.4);

        await ƒS.Speech.tell(charaktere.maire, " Was für… Charaktere. Ich hätte mich wirklich besser anziehen sollen. Aber selbst mein bestes Kleid würde neben Lady Stella wie ein Putzlappen wirken. Aber… findest du nicht auch, dass einer der drei merkwürdig ist?");


        let weirdPersonDecision = await ƒS.Menu.getInput(chooseWeirdPerson, "basicChoice");
        switch (weirdPersonDecision) {
            case chooseWeirdPerson.stella:

                await ƒS.Character.show(charaktere.bronte, charaktere.bronte.pose.think, ƒS.positionPercent(charaktere.bronte.positionStandard.x , charaktere.bronte.positionStandard.y));
                await ƒS.update(0.4);

                await ƒS.Speech.tell(charaktere.bronte, " Allerding, Stella sieht wirklich etwas blass aus. Ob sie wohl krank ist? ");

                await ƒS.Character.hide(charaktere.maire);
                await ƒS.Character.show(charaktere.maire, charaktere.maire.pose.fear, ƒS.positionPercent(charaktere.maire.positionStandard.x , charaktere.maire.positionStandard.y));
                await ƒS.update(0.4);

                await ƒS.Speech.tell(charaktere.maire, " Hoffentlich stecke ich mich nicht an!");
                break;

                //todo: detectiv punkte
            case chooseWeirdPerson.grace:
                await ƒS.Character.show(charaktere.bronte, charaktere.bronte.pose.think, ƒS.positionPercent(charaktere.bronte.positionStandard.x , charaktere.bronte.positionStandard.y));
                await ƒS.update(0.4);

                await ƒS.Speech.tell(charaktere.bronte, " Allerding, Grace ist eine sehr eigene Persönlichkeit. Und nicht sonderlich gut darin ihre Ansichten zu verstecke. ");

                await ƒS.Speech.tell(charaktere.maire, "Ich dachte ehrlich gesagt eher an Stella. Sie sieht etwas blass aus. ");
                break;

            case chooseWeirdPerson.lordBlackburn:
                await ƒS.Character.show(charaktere.bronte, charaktere.bronte.pose.think, ƒS.positionPercent(charaktere.bronte.positionStandard.x , charaktere.bronte.positionStandard.y));
                await ƒS.update(0.4);

                await ƒS.Speech.tell(charaktere.bronte, " Allerdings, Lord Blackburns Einstellungen zu Frauen sind wohl bereits einige Jahrtausende alt… Wenn auch nicht ungewöhnlich für einen Mann seiner Stellung, leider.");

                await ƒS.Speech.tell(charaktere.maire, "Ich dachte ehrlich gesagt eher an Stella. Sie sieht etwas blass aus. ");
                break;
        }

        await ƒS.Character.hide(charaktere.bronte);
        await ƒS.Character.show(charaktere.bronte, charaktere.bronte.pose.think, ƒS.positionPercent(charaktere.bronte.positionStandard.x , charaktere.bronte.positionStandard.y));

        await ƒS.Character.hide(charaktere.maire);
        await ƒS.Character.show(charaktere.maire, charaktere.maire.pose.neutral, ƒS.positionPercent(charaktere.maire.positionStandard.x , charaktere.maire.positionStandard.y));
        await ƒS.update(0.4);

        await ƒS.Speech.tell(charaktere.bronte, "Da scheint der letzte Gast zu kommen. ");

        await ƒS.Character.hide(charaktere.maire);
        await ƒS.Character.hide(charaktere.bronte);
        await ƒS.update(0.4);

        await ƒS.Character.show(charaktere.isaac, charaktere.isaac.pose.neutral, ƒS.positionPercent(85 , charaktere.isaac.positionStandard.y));
        await ƒS.update(0.4);

        await ƒS.Speech.tell(charaktere.isaac, "Guten Abend. Ich entschuldige meine Verspätung. ");

        await ƒS.Character.show(charaktere.grace, charaktere.grace.pose.laugh, ƒS.positionPercent(20 , charaktere.grace.positionStandard.y));
        await ƒS.update(0.4);

        await ƒS.Speech.tell(charaktere.grace, "Nun… Als Gerichtsvertreter wird man wohl nicht pünktlich entlassen. Aber so ist die Mittelschicht wohl. ");

        await ƒS.Character.hide(charaktere.grace);
        await ƒS.Character.hide(charaktere.isaac);
        await ƒS.Character.show(charaktere.isaac, charaktere.isaac.pose.sad, ƒS.positionPercent(charaktere.isaac.positionStandard.x , charaktere.isaac.positionStandard.y));
        await ƒS.update(0.8);

        await ƒS.Character.show(charaktere.bronte, charaktere.bronte.pose.happy, ƒS.positionPercent(charaktere.bronte.positionStandard.x , charaktere.bronte.positionStandard.y));
        await ƒS.Character.show(charaktere.maire, charaktere.maire.pose.neutral, ƒS.positionPercent(charaktere.maire.positionStandard.x , charaktere.maire.positionStandard.y));
        await ƒS.update(0.8);

        await ƒS.Speech.tell(charaktere.isaac, "Ja… nun… Ah! Miss Bronte, richtig? Und sie müssen ihre Assistentin sein. Mac- Mac-? ");
        
        await ƒS.Character.hide(charaktere.maire);
        await ƒS.Character.show(charaktere.maire, charaktere.maire.pose.happy, ƒS.positionPercent(charaktere.maire.positionStandard.x , charaktere.maire.positionStandard.y));
        await ƒS.update(0.4);

        await ƒS.Speech.tell(charaktere.maire, "Maire reicht aus. ");

        await ƒS.Character.hide(charaktere.isaac);
        await ƒS.Character.show(charaktere.isaac, charaktere.isaac.pose.happy, ƒS.positionPercent(charaktere.isaac.positionStandard.x , charaktere.isaac.positionStandard.y));
        await ƒS.update(0.4);

        await ƒS.Speech.tell(charaktere.isaac, "Sehr erfreut. Ich bin Issac. Ich habe in Gericht ein paar Mal ihre Arbeit betrachten können. Sie scheinen sehr sorgfältig zu arbeiten! ");
        
        await ƒS.Speech.tell(charaktere.bronte, "Oh vielen dank. ");

        await ƒS.Speech.tell(charaktere.isaac, "Ah, ich sehe das Essen kommt, wir sollten uns setzte.");
        
        await ƒS.Character.hide(charaktere.isaac);
        await ƒS.update(0.8);

        await ƒS.Character.hide(charaktere.maire);
        await ƒS.Character.show(charaktere.maire, charaktere.maire.pose.embarrassed, ƒS.positionPercent(charaktere.maire.positionStandard.x , charaktere.maire.positionStandard.y));
        await ƒS.update(0.4);

        await ƒS.Speech.tell(charaktere.maire, "Bronte, bitte sag mir das ist keines dieser merkwürdigen britischen Gerichte?! ");

        await ƒS.Character.hide(charaktere.bronte);
        await ƒS.Character.show(charaktere.bronte, charaktere.bronte.pose.think, ƒS.positionPercent(charaktere.bronte.positionStandard.x , charaktere.bronte.positionStandard.y));
        await ƒS.update(0.4);

        await ƒS.Speech.tell(charaktere.bronte, "Es ist tatsächlich Schottisch…");

        let haggisDecision = await ƒS.Menu.getInput(chooseHaggis, "basicChoice");
        //todo: point system 
        switch (haggisDecision) {
            case chooseHaggis.lie:

                await ƒS.Character.hide(charaktere.bronte);
                await ƒS.Character.show(charaktere.bronte, charaktere.bronte.pose.happy, ƒS.positionPercent(charaktere.bronte.positionStandard.x , charaktere.bronte.positionStandard.y));
                await ƒS.update(0.4);

                await ƒS.Speech.tell(charaktere.bronte, " Aber mach dir keine Sorge. Es ist ein sehr leckeres Gericht was aus etwas Lammfleisch besteht. ");

                await ƒS.Character.hide(charaktere.maire);
                await ƒS.Character.show(charaktere.maire, charaktere.maire.pose.happy, ƒS.positionPercent(charaktere.maire.positionStandard.x , charaktere.maire.positionStandard.y));
                await ƒS.update(0.4);

                await ƒS.Speech.tell(charaktere.maire, " Phu… da bin ich erleichtert. Hatte mit dem schlimmsten gerechnet. Dann guten Appetit!");

                await ƒS.Character.hide(charaktere.bronte);
                await ƒS.Character.hide(charaktere.maire);
                await ƒS.update(0.8);
                //todo: sound food

                await ƒS.Location.show(location.black);
                await ƒS.update(transistions.inToOut.duration, transistions.inToOut.alpha, transistions.inToOut.edge);

                await ƒS.update(0.8);

                await ƒS.Location.show(location.saalon);
                await ƒS.update(transistions.inToOut.duration, transistions.inToOut.alpha, transistions.inToOut.edge);

                await ƒS.Character.show(charaktere.bronte, charaktere.bronte.pose.happy, ƒS.positionPercent(charaktere.bronte.positionStandard.x , charaktere.bronte.positionStandard.y));
                await ƒS.Character.show(charaktere.maire, charaktere.maire.pose.happy, ƒS.positionPercent(charaktere.maire.positionStandard.x , charaktere.maire.positionStandard.y));
                await ƒS.update(0.8);

                await ƒS.Speech.tell(charaktere.bronte, "Danke für das leckere Essen.");
                await ƒS.Speech.tell(charaktere.maire, "Ja vielen Dank!");

                await ƒS.Character.show(charaktere.grace, charaktere.grace.pose.laugh, ƒS.positionPercent(charaktere.grace.positionStandard.x , charaktere.grace.positionStandard.y));
                await ƒS.update(0.4);

                await ƒS.Speech.tell(charaktere.grace, " Freut mich, dass es ihnen wohlbekommen ist. Mein Vater ist gebürtiger Schotte und so sind wir alle große Bewunderer der Schottischen Küche. ");
                
                await ƒS.Speech.tell(charaktere.grace, "Jetzt wo um unseren körperlichen Leib gesorgt ist, lasst uns den restlichen Abend genießen. Oh Miss Bronte ich habe noch eine kleine Überraschung für sie! Warten sie kurz. ");
                
                await ƒS.Character.hide(charaktere.grace);
                await ƒS.update(0.8);

                await ƒS.Character.show(charaktere.isaac, charaktere.isaac.pose.happy, ƒS.positionPercent(charaktere.isaac.positionStandard.x , charaktere.isaac.positionStandard.y));
                await ƒS.update(0.8);

                await ƒS.Speech.tell(charaktere.isaac, " Meine Schwägerin ist wohl sehr angetan von ihren Geschichten. Sie konnte beim Essen ja gar nicht von Ihnen ablassen. Ich hoffe sie konnten das Essen trotzdem genießen. ");
                
                
                await ƒS.Speech.tell(charaktere.bronte, " Oh ja keine Sorge und ich bin wohl auch zu Eitel um mir so eine Gelegenheit des Erzählens entgehen zu lassen. ");

                await ƒS.Character.hide(charaktere.bronte);
                await ƒS.Character.show(charaktere.bronte, charaktere.bronte.pose.think, ƒS.positionPercent(charaktere.bronte.positionStandard.x , charaktere.bronte.positionStandard.y));
                await ƒS.update(0.4);

                await ƒS.Speech.tell(charaktere.bronte, "Wobei ich noch einmal betonnen muss, dass gerade Maire mir immer eine große Hilfe ist. Sie führt immerhin die Bücher.");
                
                await ƒS.Character.hide(charaktere.bronte);
                await ƒS.Character.show(charaktere.bronte, charaktere.bronte.pose.happy, ƒS.positionPercent(charaktere.bronte.positionStandard.x , charaktere.bronte.positionStandard.y));
                await ƒS.Character.hide(charaktere.maire);
                await ƒS.Character.show(charaktere.maire, charaktere.maire.pose.embarrassed, ƒS.positionPercent(charaktere.maire.positionStandard.x , charaktere.maire.positionStandard.y));
                await ƒS.update(0.4);

                await ƒS.Speech.tell(charaktere.maire, " Oh… äh… Bronte dass ist ja keine große Sache. ");

                await ƒS.Character.hide(charaktere.maire);
                await ƒS.Character.show(charaktere.maire, charaktere.maire.pose.happy, ƒS.positionPercent(charaktere.maire.positionStandard.x , charaktere.maire.positionStandard.y));
                await ƒS.update(0.4);

                await ƒS.Speech.tell(charaktere.isaac, " Wirklich sehr beeindruckend Maire.");

                break;

            case chooseHaggis.truth:

                await ƒS.Speech.tell(charaktere.bronte, " Der Paunch – Magen eines Schafes – wird mit Herz, Niere, Leber und anderen Innereien gefüllt. Und das ergibt dann eine Art Wurst. Sehr lecker eigentlich, wenn auch ungewöhnlich. ");
                
                await ƒS.Character.hide(charaktere.maire);
                await ƒS.Character.show(charaktere.maire, charaktere.maire.pose.fear, ƒS.positionPercent(charaktere.maire.positionStandard.x , charaktere.maire.positionStandard.y));
                await ƒS.update(0.4);

                await ƒS.Speech.tell(charaktere.maire, " Ich glaube mir wird schlecht…");
                
                //todo: sound food wie oben

                await ƒS.Character.hide(charaktere.bronte);
                await ƒS.Character.hide(charaktere.maire);
                await ƒS.update(0.8);

                await ƒS.Location.show(location.black);
                await ƒS.update(transistions.inToOut.duration, transistions.inToOut.alpha, transistions.inToOut.edge);

                await ƒS.update(0.8);

                await ƒS.Location.show(location.saalon);
                await ƒS.update(transistions.inToOut.duration, transistions.inToOut.alpha, transistions.inToOut.edge);

                await ƒS.Character.show(charaktere.bronte, charaktere.bronte.pose.happy, ƒS.positionPercent(charaktere.bronte.positionStandard.x , charaktere.bronte.positionStandard.y));
                await ƒS.Character.show(charaktere.grace, charaktere.grace.pose.laugh, ƒS.positionPercent(charaktere.grace.positionStandard.x , charaktere.grace.positionStandard.y));
                await ƒS.update(0.8);

                await ƒS.Speech.tell(charaktere.bronte, "Danke für das leckere Essen.");

                await ƒS.Character.hide(charaktere.grace);
                await ƒS.Character.show(charaktere.grace, charaktere.grace.pose.think, ƒS.positionPercent(charaktere.grace.positionStandard.x , charaktere.grace.positionStandard.y));
                await ƒS.update(0.4);

                await ƒS.Speech.tell(charaktere.grace, " Und Sie denken Ihrer Assistentin geht es wirklich gut? ");

                await ƒS.Speech.tell(charaktere.bronte, " Oh ja, Sie pudert sich bestimmt nur schnell die Nase.");

                await ƒS.Character.hide(charaktere.grace);
                await ƒS.Character.show(charaktere.grace, charaktere.grace.pose.happy, ƒS.positionPercent(charaktere.grace.positionStandard.x , charaktere.grace.positionStandard.y));
                await ƒS.update(0.4);

                await ƒS.Speech.tell(charaktere.grace, " Freut mich, dass es ihnen wohlbekommen ist. Mein Vater ist gebürtiger Schotte und so sind wir alle große Bewunderer der Schottischen Küche. ");
                await ƒS.Speech.tell(charaktere.grace, "Jetzt wo um unseren körperlichen Leib gesorgt ist, lasst uns den restlichen Abend genießen. Oh Miss Bronte ich habe noch eine kleine Überraschung für sie! Warten sie kurz. ");
                
                await ƒS.Character.hide(charaktere.grace);
                await ƒS.update(0.8);

                await ƒS.Character.show(charaktere.isaac, charaktere.isaac.pose.happy, ƒS.positionPercent(charaktere.isaac.positionStandard.x , charaktere.isaac.positionStandard.y));
                await ƒS.update(0.8);

                await ƒS.Speech.tell(charaktere.isaac, " Meine Schwägerin ist wohl sehr angetan von ihren Geschichten. Sie konnte beim Essen ja gar nicht von Ihnen ablassen. Ich hoffe sie konnten das Essen trotzdem genießen. ");
                await ƒS.Speech.tell(charaktere.bronte, " Oh ja keine Sorge und ich bin wohl auch zu Eitel um mir so eine Gelegenheit des Erzählens entgehen zu lassen. ");

                await ƒS.Character.hide(charaktere.bronte);
                await ƒS.Character.show(charaktere.bronte, charaktere.bronte.pose.think, ƒS.positionPercent(charaktere.bronte.positionStandard.x , charaktere.bronte.positionStandard.y));
                await ƒS.update(0.4);

                await ƒS.Speech.tell(charaktere.bronte, "Wobei ich noch einmal betonnen muss, dass gerade Maire mir immer eine große Hilfe ist. Sie führt immerhin die Bücher.");

                await ƒS.Character.hide(charaktere.isaac);
                await ƒS.Character.show(charaktere.isaac, charaktere.isaac.pose.neutral, ƒS.positionPercent(charaktere.isaac.positionStandard.x , charaktere.isaac.positionStandard.y));
                await ƒS.update(0.4);

                await ƒS.Speech.tell(charaktere.isaac, " Oh wo wir gerade über sie sprechen… ");

                await ƒS.Character.show(charaktere.maire, charaktere.maire.pose.neutral, ƒS.positionPercent(charaktere.maire.positionStandard.x , charaktere.maire.positionStandard.y));
                await ƒS.update(0.8);

                await ƒS.Speech.tell(charaktere.maire, " Bronte… Du kennst doch meinen Magen… das nächste Mal lüge mich einfach an. Ich habe mich ja komplett zum Deppen gemacht. Jetzt denken alle Irren hätten keine Manieren. ");
                await ƒS.Speech.tell(charaktere.bronte, " Dass tut mir sehr Leid… Aber ich denke niemand ist es wirklich aufgefallen. (Sie scheint es mir echt böse zu nehmen, ich sollte in nächster Zeit netter zu ihr sein).");

                break;
        }
    }
}