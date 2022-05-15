namespace Template {
	export async function SceneSixGarden(): ƒS.SceneReturn {

		await ƒS.Speech.tell(charaktere.bronte, " sie fuhren bis... Oh... Autsch! ");
		await ƒS.Speech.tell(charaktere.maire, " alles okay? Oh man sieht ja die Hand vor Augen nicht. Was machen wir jetzt");


		//auswahl Untersuchen
		await ƒS.Speech.tell(charaktere.bronte, " Mhm… vielleicht… ich habe so ein Gefühl hier könnte etwas sein das Hilft. ");
		await ƒS.Speech.tell(charaktere.maire, " Pass bloß auf! Bei dieser Dunkelheit ist es leicht sich zu verletzten. ");
		await ƒS.Speech.tell(charaktere.bronte, " Ich bin schon vorsichtig… Autsch! Mhm… vielleicht hast du Recht.");

		// Unter Auswahl: zurückgehen

		//weiter untersuchen

		await ƒS.Speech.tell(charaktere.bronte, " Oh! Hier! ");
		//todo: Laterne
		await ƒS.Speech.tell(charaktere.maire, " Oh wow! ");
		await ƒS.Speech.tell(charaktere.bronte, " Ein kleines Wunder der Technik. Und sehr praktisch dazu. ");
		await ƒS.Speech.tell(charaktere.maire, " Aber weitgeholfen hat uns das noch nicht…");


		//Ende unter auswahl

		//Weitergehen 
		await ƒS.Speech.tell(charaktere.bronte, " So ein bisschen Dunkelheit wird uns doch nicht aufhalten. ");
		await ƒS.Speech.tell(charaktere.maire, " Wenn du meinst Bronte...  Pass nur auf hier ist");
		// <platsch>wasserbecken…
		await ƒS.Speech.tell(charaktere.maire, " AH! Ich ertrinke… Bronte ich… Ich… ich kann stehen… Aber meine ganzen Kleider… Tolle Idee von dir…");
		await ƒS.Speech.tell(charaktere.bronte, " Oh weh, dass tut mir Leid, ich wollte dich gerade warnen. Lass uns schnell zurück ins warme gehen.");

		// Zurückgehen (Methode)
		//charaktere.saalon
		await ƒS.Speech.tell(charaktere.grace, " Oh da kommen Sie! <wenn nicht nass> Haben Sie sie gefunden? <wenn nass> Oh Gott, was ist denn mit Ihnen passiert? ");
		await ƒS.Speech.tell(charaktere.bronte, " <nass> Wir haben leider buchstäblich im Dunklen getappt. Am besten wir erzählen alles am Kamin. <nicht nass>Wir haben Artemis leider noch nicht gefunden, jedoch ihre Spuren. Wir bräuchten nur ein bisschen Licht im Garten. ");
		await ƒS.Speech.tell(charaktere.grace, " Licht? Oh, gehen die Laternen schon wieder nicht. Ich verstehe nichts von dieser Technik, aber wirklich zu verlässlich scheint sie mir ja nicht. Aber ich lasse gleich Remington danach sehen. <nass> Aber… Oh sind das etwa Blüten meiner Seerosen! Oh weh. Die sind preisgekrönt! Das wird Monate dauern, die wieder so hinzubekommen. Passen sie doch besser auf! ");
		await ƒS.Speech.tell(charaktere.maire, " T’schuldigung…");

		// alle zusammen
		await ƒS.Speech.tell(charaktere.bronte, " Schau mit etwas Licht ist es gleich viel besser. ");
		await ƒS.Speech.tell(charaktere.maire, " Und wie. Siehst du die Spuren? ");
		await ƒS.Speech.tell(charaktere.bronte, " Mhm einen Moment… Wo würde ich hingehen wenn ich eine Katze wäre?");

		// Auswahl 
		// lampe
		await ƒS.Speech.tell(charaktere.bronte, " Welch beeindruckende Technologie. Schau der Strom kommt über Kabel in der Erde bis hier und schon haben wir Licht! ");
		await ƒS.Speech.tell(charaktere.maire, " Spannend… aber sollten wir nicht was anderes machen? ");
		await ƒS.Speech.tell(charaktere.bronte, " Oh… ja vermutlich…");
		// neustarten 

		//Wasserbecken 
		await ƒS.Speech.tell(charaktere.bronte, " Vielleicht ist sie ins Wasser gefallen? ");
		await ƒS.Speech.tell(charaktere.maire, " Ich glaube Katzen halten sich eher fern von Wasser. ");
		await ƒS.Speech.tell(charaktere.bronte, " Mhm… da hast du wohl recht. Ich kann auch nichts erkennen.");

		// Hütte --> 
	}
}