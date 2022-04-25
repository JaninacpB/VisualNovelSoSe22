namespace Template {
    export async function SceneTwoEntrance(): ƒS.SceneReturn {
        await ƒS.Sound.play(sound.themeEntrance, 0.1, true); 

        await ƒS.Location.show(location.entrance);
        await ƒS.update(transistions.inToOut.duration, transistions.inToOut.alpha, transistions.inToOut.edge);
    
        await ƒS.Character.show(charaktere.maire, charaktere.maire.pose.neutral, ƒS.positionPercent(75,100))
        await ƒS.update(1);

        await ƒS.Speech.tell(charaktere.maire, " Wow… was für eine schöne Eingangshalle ");
        await ƒS.Speech.tell(charaktere.remington, " Das Manor ist im Besitz der Familie Blackburn seit 1705. Nach 100 Jahren erlag es jedoch dem Ratcliff Feuer und musste zum großen Teil neu errichtet werden. In den fünfziger Jahren bekam es dann noch einmal eine Renovierung von dem ehrenwerten Lord Blackburn Sr. – Gott habe ihn selig – und ist nun unter der Obhut und Lord Blackburn, welcher seine ehrenwerte Schwester Lady Blackburn hier wohnen lässt. Entschuldigung, langweile ich sie? ");
        await ƒS.Speech.tell(charaktere.maire, " Zzz Oh! Äh nein… natürlich nicht. Faszinierend… ");
        await ƒS.Speech.tell(charaktere.bronte, " Und wie. Wir haben Glück das die Familie in einen so guten Zustand hält. Es ist wirklich prächtig. ");
        await ƒS.Speech.tell(charaktere.remington, " Da stimme ich ihnen zu. Darf ich Ihnen Ihren Mantel abnehmen, Miss? ");
        await ƒS.Speech.tell(charaktere.maire, " Oh… vielen Dank, aber ich denke ich behalte ihn lieber an. Ich äh… erkälte mich so schnell… ");
        await ƒS.Speech.tell(charaktere.remington, " Wie Sie wünschen. Geben sie mir einen Moment. Ich werde Sie den Anwesenden Ankündigen. Nutzen Sie die Zeit gerne um sich… herzurichten. ");
        await ƒS.Speech.tell(charaktere.maire, " Oh weh… ich glaube er kann uns nicht leiden. Dabei haben wir gar nichts gemacht Er denkt wohl wir schnüffeln hier herum Wir hätten nicht im Garten rumschnüffeln sollen. ");
        await ƒS.Speech.tell(charaktere.bronte, " Ach was. Er ist halt ein wenig reserviert. Viele Butler sind so. Aber Maire, warum klammerst du dich so an denen Mantel? Geht es dir nicht gut? ");
        await ƒS.Speech.tell(charaktere.maire, " Oh nein… alles ist gut… Ich habe nur vorhin auf mein Kleid gekleckert. Ich wusste ja nicht, dass wir mit einer echten Lady essen. ");
        await ƒS.Speech.tell(charaktere.bronte, " hihi… nun gut, dass erklärt es natürlich. Ah, der Butler winkt uns herein.");

        return "SceneThreeSaalon";
    }
}
