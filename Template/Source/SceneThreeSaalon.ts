namespace Template {
    export async function SceneThreeSaalon(): ƒS.SceneReturn {
        //await ƒS.Sound.play(sound.themeEntrance, 0.1, true); 

        await ƒS.Location.show(location.saalon);
        await ƒS.update(transistions.inToOut.duration, transistions.inToOut.alpha, transistions.inToOut.edge);
    
        await ƒS.Character.show(charaktere.maire, charaktere.maire.pose.neutral, ƒS.positionPercent(75,100))
        await ƒS.update(1);

        await ƒS.Speech.tell(charaktere.grace, " Oh! Miss Bronte! Welch eine Freude. Und oh… welch ein ungewöhnliches Outfit sie tragen. Sind das Hosen? Wie… modern. ");
        await ƒS.Speech.tell(charaktere.bronte, " Vielen Dank. Sie sehen auch fantastisch aus Lady Blackburn. Darf ich Ihnen meine Begleitung vorstellen, dass hier ist Miss MacGinnis. ");
        await ƒS.Speech.tell(charaktere.maire, " Oh, nennen sie mich Maire. ");
        await ƒS.Speech.tell(charaktere.grace, " Vornamen… wie… modern! Dann nennen sie mich doch gerne Grace. Die Etikette können Sie sich für meinen Bruder aufheben. Oh, da kommt er auch schon. ");
        await ƒS.Speech.tell(charaktere.alaistar, " Guten Abend. Freut mich sie kennenzulernen. ");
        await ƒS.Speech.tell(charaktere.bronte, " Lord Blackburn, die Freude ist ganz unsererseits, vielen Dank für die Einladung zum Abendessen. ");
        await ƒS.Speech.tell(charaktere.alaistar, " Meine Schwester hat so von Ihnen geschwärmt, da wollte auch ich Sie kennenlernen. Ein Detektiv ist immer ein interessanter Gast. Auch wenn Ihre Fälle sich sicherlich eher mit verlorenen Schmuckstücken und verlegten Kleidern beschäftigten. HoHo. Frauen Probleme. ");
        await ƒS.Speech.tell(charaktere.bronte, " Tatsächlich befassen sich meine Fälle mit allen Problemen, die in London auftauchen. Erst neulich habe ich die Napoleon Büchse- ");
        await ƒS.Speech.tell(charaktere.grace, " Oh Stella! Komm schnell rüber meine Liebe. Dann sind wir ja fast alle komplett. Komm schnell kleines und stell dich vor. Miss Bronte, dies ist meine Cousine, Stella Blackburn. ");
        await ƒS.Speech.tell(charaktere.stella, " Guten Abend. ");
        await ƒS.Speech.tell(charaktere.bronte, " Freud mich Sie kennenzulernen. ");
        await ƒS.Speech.tell(charaktere.grace, " Stella ist ein fabelhaftes Mädchen. Sie verbringt den Sommer bei mir, um sich ein wenig an die Londoner Luft zu gewöhnen. Aber schauen sie sich mal diese wunderschönen Haare an. Ich denke wir werden nächste Season einen tollen Partner für sie finden. ");
        await ƒS.Speech.tell(charaktere.bronte, " Oh ja, sie müssen mir später unbedingt erklären, wie sie so großartige Locken herzaubern. ");
        await ƒS.Speech.tell(charaktere.stella, " Sicherlich. ");
        await ƒS.Speech.tell(charaktere.remington, " Ehm… My Lord, my Lady, auch Mister Rothchester ist nun endlich eingetroffen. ");
        await ƒS.Speech.tell(charaktere.alaistar, " Wurde ja auch Zeit… Dieser Mann hat einfach keine Manieren. Bitte setzt euch alle schon Mal, ich werde Ihn kurz begrüßen und zur Eile mahnen. ");
        await ƒS.Speech.tell(charaktere.maire, " Was für… Charaktere. Ich hätte mich wirklich besser anziehen sollen. Aber selbst mein bestes Kleid würde neben Lady Stella wie ein Putzlappen wirken. Aber… findest du nicht auch, dass einer der drei merkwürdig ist?");
    
        //WAHL Merkwürige Person komplett todo

        await ƒS.Speech.tell(charaktere.bronte, " Da scheint der letzte Gast zu kommen. ");
        await ƒS.Speech.tell(charaktere.isaac, " Guten Abend. Ich entschuldige meine Verspätung. ");
        await ƒS.Speech.tell(charaktere.grace, " Nun… Als Gerichtsvertreter wird man wohl nicht pünktlich entlassen. Aber so ist die Mittelschicht wohl. ");
        await ƒS.Speech.tell(charaktere.isaac, " Ja… nun… Ah! Miss Bronte, richtig? Und sie müssen ihre Assistentin sein. Mac- Mac-? ");
        await ƒS.Speech.tell(charaktere.maire, " Maire reicht aus. ");
        await ƒS.Speech.tell(charaktere.isaac, " Sehr erfreut. Ich bin Issac. Ich habe in Gericht ein paar Mal ihre Arbeit betrachten können. Sie scheinen sehr sorgfältig zu arbeiten! ");
        await ƒS.Speech.tell(charaktere.bronte, " Oh vielen dank. ");
        await ƒS.Speech.tell(charaktere.grace, " Oh, das Essen! Mrs. May-Porter hat wieder ihr Bestes gegeben. Es gibt Haggis! ");
        await ƒS.Speech.tell(charaktere.maire, " Bronte, bitte sag mir das ist keines dieser merkwürdigen britischen Gerichte?! ");
        await ƒS.Speech.tell(charaktere.bronte, " Es ist tatsächlich Schottisch…");

        //WAHL Haggis komplett todo: 

    }
}