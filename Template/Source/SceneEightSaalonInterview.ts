namespace Template {
    export async function SceneEightSaalonInterview(): ƒS.SceneReturn {


        await ƒS.Speech.tell(charaktere.alaistar, " Da kommen sie ja schon… ");
        await ƒS.Speech.tell(charaktere.bronte, " Was ist passiert? ");
        await ƒS.Speech.tell(charaktere.grace, " Ja uns geht es gut. Die gute Stella hat sich nur erschreckt. ");
        await ƒS.Speech.tell(charaktere.stella, " … ");
        await ƒS.Speech.tell(charaktere.alaistar, " Sie hat wohl draußen einen Baum gesehen, der sie erschreckt hat oder so. Ein wenig hysterisch die Gute. ");
        await ƒS.Speech.tell(charaktere.stella, " … ");
        await ƒS.Speech.tell(charaktere.alaistar, " Wie sind ihre „Ermittlungen“ vorangekommen. ");
        await ƒS.Speech.tell(charaktere.bronte, " Gut. Wir haben ein Hinweis auf den Verbleib der Katze gefunden. Sie ist");

        //Auswahl1 todo: detectives points

        //Dunkel ins Wasser 
        await ƒS.Speech.tell(charaktere.bronte, " Aufgrund der Dunkelheit vor dem Manor ins Wasser gefallen.");

        await wrongAssumptionBronteFirstChoice();

        //in die hütte eingebrochen    
        await ƒS.Speech.tell(charaktere.bronte, "   In die Gartenhütte eingebrochen!");
        await wrongAssumptionBronteFirstChoice();

        //in die hütte einsperrt 

        await ƒS.Speech.tell(charaktere.bronte, " Es sieht ganz so aus als hätte jemand die in die Hütte eingesperrt. Wir haben die Säule weggeschoben, aber in der Hütte war nur noch das Halsband. ");
        await ƒS.Speech.tell(charaktere.grace, " Ooooh... kann ich es wiederhaben?");


        //Auswahl2 Halsband geben ja nein 
        // Ja todo: Halsband abgeben 
        await ƒS.Speech.tell(charaktere.bronte, "Natürlich. Hier");

        //Nein todo: - Grace
        await ƒS.Speech.tell(charaktere.bronte, "Nein, es ist weiterhin Teil der Untersuchung");

        //Auswahl2 Ende Halsband 

        //AUSWAHL1 ENDE 


        await ƒS.Speech.tell(charaktere.isaac, " Aber wenn sie das Halsband gefunden haben, wo ist dann die Katze? ");
        await ƒS.Speech.tell(charaktere.bronte, " Ganz einfach:");


        //Auswahl: wo ist Katze 

        // entführt
        await ƒS.Speech.tell(charaktere.bronte, " Sie wurde entführt! ");
        await ƒS.Speech.tell(charaktere.alaistar, " Meinten sie nicht gerade, sie wäre eingesperrt worden? Klingt nicht nach einer Entführung für mich. ");
        await ƒS.Speech.tell(charaktere.bronte, " Oh äh… ich meinte.");

        //Durch Dach entkommen 
        await ƒS.Speech.tell(charaktere.bronte, "Sie ist durch das Dach entkommen! Und dabei hat sie ihr Halsband verloren.");

        //Ende Auswahl

        // <if -2 Dedektive Points>
        // Grace: Mhm… Ihren anderen Fall haben sie eleganter gelöst… Sie scheinen heute etwas verwirrt zu sein. 

        // <ig -2/3? Punkte mit Maire>
        // Maire: Sie hat einen Punkt… 


        //todo: if point detective 

        await ƒS.Speech.tell(charaktere.grace, " Aber ich denke sie haben Recht. Artemis wird bestimmt bald wieder auftauchen. Wir müssen einfach etwas vorsichtiger mit ihr sein. Danke für ihre Investigation. ");
        await ƒS.Speech.tell(charaktere.bronte, " … Äh? Ich werde natürlich erst aufhören, wenn Artemis wieder sicher da ist. ");
        await ƒS.Speech.tell(charaktere.grace, " Oh, ich denke das ist nicht notwendig… ");
        await ƒS.Speech.tell(charaktere.bronte, " Aber… Sind sie sicher? ");
        await ƒS.Speech.tell(charaktere.grace, " Ja natürlich. Ich meine sie ist nur eine Katze. Sie wird schon wissen was sie tut. Lassen sie uns den Abend dadurch nicht vermasseln. ");
        await ƒS.Speech.tell(charaktere.bronte, " Wenn das ihr Wunsch ist. ");
        await ƒS.Speech.tell(charaktere.maire, " (… nur eine Katze? Sie hatte vorhin fast einen Nervenzusammenbruch.) ");
        await ƒS.Speech.tell(charaktere.grace, " Perfekt. Ich lasse mal den Nachtisch holen! ");
        await ƒS.Speech.tell(charaktere.maire, " Das war… ");
        await ƒS.Speech.tell(charaktere.bronte, " Merkwürdig. ");
        await ƒS.Speech.tell(charaktere.maire, " Und wie. ");
        await ƒS.Speech.tell(charaktere.bronte, " Irgendwas stimmt hier doch nicht… Die Katze wurde eingesperrt aber Lady Grace scheint gar nicht daran interessiert zu sein. Oder um das Wohlbehagen von Artemis, obwohl sie vorhin so besorgt um sie war. ");
        await ƒS.Speech.tell(charaktere.maire, " Mhm… und sie will nicht, dass wir weiter investigieren. Was machen wir jetzt?");




        

        //Auswahl Was machen wir jetzt?

        //Wenn Dialog in zwei Auswahlen sich wiederholt

        async function wrongAssumptionBronteFirstChoice(): Promise<void> {
            await ƒS.Speech.tell(charaktere.alaistar, " … Das ist ein Witz, richtig? ");
            await ƒS.Speech.tell(charaktere.maire, " Oh ja… Bronte erzähl was wirklich passiert ist du Scherzkeks.");
        }
    }
}