namespace Template {
    export async function SceneFiveOutside(): ƒS.SceneReturn { 

        //todo: wenn Maire da 
        await ƒS.Speech.tell(charaktere.maire, " Endlich frische Luft! Schafsmagen… Mich schüttelt es immer noch ");
        await ƒS.Speech.tell(charaktere.bronte, " Arme Maire, das Essen hat sie wirklich mitgenommen");

        //beide 

        await ƒS.Speech.tell(charaktere.bronte, " Also vorhin ist sie in Richtung des Gebüsches gelaufe");

        //todo: <Ring ja>  Und ziemlich schnell, immerhin haben wir sie danach nicht mehr gesehen. 

        await ƒS.Speech.tell(charaktere.maire, " Mhm, hast du noch den Ring? ");
        await ƒS.Speech.tell(charaktere.bronte, " Klar hier…");

        // Also mal schauen, was dort ist. Mhm… oh! Was ist das? Ein Siegelring? Was macht der dann hier? 

        await ƒS.Speech.tell(charaktere.bronte, " Er sieht durchaus edel aus. Ein wenig dreckig nur. Mit den Buchstaben O.R. oder eventuell auch R.O. schwierig zu sagen welche Reihenfolge es sein soll. ");
        await ƒS.Speech.tell(charaktere.maire, " O und R…. oh! Wir kennen jemanden zu dem es passt!");

        //todo Wahl 

        //wahl 1 falsch 
        await ƒS.Speech.tell(charaktere.bronte, " Ah! Äh… nein das passt ja gar nicht… ");
        await ƒS.Speech.tell(charaktere.maire, " Aber der Butler passt! Es hat sich mit Remington vorgestellt!");

        //true
        await ƒS.Speech.tell(charaktere.bronte, " Gute Schlussfolgerung… Der Butler heißt Remington. Aber ob der Vorname passt?");


        // ende auswahl
        await ƒS.Speech.tell(charaktere.maire, " Oh er hat vorhin sich auch so merkwürdig benommen Wie er vor der Tür gelauert hat! Wie er uns hier draußen aufgelauert hat! Der ist bestimmt der Übeltäter. ");
        await ƒS.Speech.tell(charaktere.bronte, " Gute Theorie, aber noch ist ja nicht bewiesen, dass die Katze nicht einfach weggelaufen ist. Das würde ich zumindest auch tun wenn ich immer in einem Zimmer eingesperrt wäre. ");
        await ƒS.Speech.tell(charaktere.maire, " Mhm… Ein Fall wäre spannender. Aber so oder so hier ist die Katze nicht. Was machen wir jetzt?");

        //wahl 
        // 1

        await ƒS.Speech.tell(charaktere.bronte, " Weißt du was… lass einfach aufhören. Ich glaube das ist zu schwierig für uns. ");
        await ƒS.Speech.tell(charaktere.maire, " Was! Aber du bist Bronte! Die Meister Detektivin! ");
        await ƒS.Speech.tell(charaktere.bronte, " Ja ich weiß, war doch nur ein Witz ");
        await ƒS.Speech.tell(charaktere.maire, " Mhm… witzig. ");
        await ƒS.Speech.tell(charaktere.bronte, " (Den Witz fand sie wohl nicht gut… sie sieht tatsächlich ziemlich genervt aus… ich sollte netter zu ihr sein.)");

        //beide
        await ƒS.Speech.tell(charaktere.bronte, " Vielleicht sind hier ja Spuren. Mhm.. Ja… Mhm… Autsch! Blöde Dornen! Oh hier! Tatsache sie führen in den Garten. ");
        await ƒS.Speech.tell(charaktere.maire, " Hinterher!");


    // beide 
    }
}