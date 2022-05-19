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

        //Auswahl

        //Dunkel ins Wasser 
        await ƒS.Speech.tell(charaktere.bronte, " Aufgrund der Dunkelheit vor dem Manor ins Wasser gefallen.");

        await wrongAssumptionBronteFirstChoice();

        //in die hütte eingebrochen    
         await ƒS.Speech.tell(charaktere.bronte, "   In die Gartenhütte eingebrochen!");
         await wrongAssumptionBronteFirstChoice();

        //in die hütte einsperrt 

        //Auswahl Halsband geben ja nein 

        //Auswahl Ende Halsband 

        //AUSWAHL ENDE 


        //Wenn Dialog in zwei Auswahlen sich wiederholt

        async function wrongAssumptionBronteFirstChoice(): Promise<void> {
            await ƒS.Speech.tell(charaktere.alaistar, " … Das ist ein Witz, richtig? ");
            await ƒS.Speech.tell(charaktere.maire, " Oh ja… Bronte erzähl was wirklich passiert ist du Scherzkeks.");
        }
    }
}