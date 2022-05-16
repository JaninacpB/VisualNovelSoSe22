namespace Template {
	export async function SceneSixGarden(): ƒS.SceneReturn {

		let chooseWhatToDoGardenDark = {
			search: "Untersuchen",
			goFurther: "Weitergehen",
			goBack: "Zurückgehen",

		}

		let chooseWhatToDoGardenAfterInvestigation = {
			goBack: "Zurückgehen",
			searchMore: "Weiter untersuchen"
		}

		let chooseWhereWouldCatGo = {
			lamp: "Lampe",
			waterpond: "Wasserbecken",
			cabin: "Hütte"
		}

		await ƒS.Location.show(location.gardenDark);
		await ƒS.update(transistions.inToOut.duration, transistions.inToOut.alpha, transistions.inToOut.edge);

		await ƒS.Sound.fade(sound.themeinfrontManorNight, 0.1, 0.2, true);

		await ƒS.Character.show(charaktere.maire, charaktere.maire.pose.neutral, ƒS.positionPercent(charaktere.maire.positionStandard.x, charaktere.maire.positionStandard.y));
		await ƒS.Character.show(charaktere.bronte, charaktere.bronte.pose.happy, ƒS.positionPercent(charaktere.bronte.positionStandard.x, charaktere.bronte.positionStandard.y));
		await ƒS.update(0.8);


		await ƒS.Speech.tell(charaktere.bronte, "Sie führen bis... Oh... Autsch! ");
		await ƒS.Speech.tell(charaktere.maire, "Alles okay? Oh man sieht ja die Hand vor Augen nicht. Was machen wir jetzt");

		let userChooseWhatToDoGardenDark = await ƒS.Menu.getInput(chooseWhatToDoGardenDark, "basicChoice");
		switch (userChooseWhatToDoGardenDark) {
			case chooseWhatToDoGardenDark.search:
				//auswahl Untersuchen
				await ƒS.Speech.tell(charaktere.bronte, " Mhm… vielleicht… ich habe so ein Gefühl hier könnte etwas sein das Hilft. ");
				await ƒS.Speech.tell(charaktere.maire, " Pass bloß auf! Bei dieser Dunkelheit ist es leicht sich zu verletzten. ");
				await ƒS.Speech.tell(charaktere.bronte, " Ich bin schon vorsichtig… Autsch! Mhm… vielleicht hast du Recht.");


				// Unter Auswahl: zurückgehen
				let userChooseWhatToDoGardenAfterInvestigation = await ƒS.Menu.getInput(chooseWhatToDoGardenAfterInvestigation, "basicChoice");
				switch (userChooseWhatToDoGardenAfterInvestigation) {
					case chooseWhatToDoGardenAfterInvestigation.searchMore:

						await ƒS.Speech.tell(charaktere.bronte, " Oh! Hier!");
						//todo: Laterne
						await ƒS.Speech.tell(charaktere.maire, " Oh wow! ");
						await ƒS.Speech.tell(charaktere.bronte, " Ein kleines Wunder der Technik. Und sehr praktisch dazu. ");
						await ƒS.Speech.tell(charaktere.maire, " Aber weitgeholfen hat uns das noch nicht…");


						break;
					case chooseWhatToDoGardenAfterInvestigation.goBack:

						goBack();

						break;

				}

				break;

			case chooseWhatToDoGardenDark.goFurther:
				//Weitergehen 
				await ƒS.Speech.tell(charaktere.bronte, " So ein bisschen Dunkelheit wird uns doch nicht aufhalten. ");
				await ƒS.Speech.tell(charaktere.maire, " Wenn du meinst Bronte...  Pass nur auf hier ist");
				// <platsch>wasserbecken…
				await ƒS.Speech.tell(charaktere.maire, " AH! Ich ertrinke… Bronte ich… Ich… ich kann stehen… Aber meine ganzen Kleider… Tolle Idee von dir…");
				await ƒS.Speech.tell(charaktere.bronte, " Oh weh, dass tut mir Leid, ich wollte dich gerade warnen. Lass uns schnell zurück ins warme gehen.");
				break;

			case chooseWhatToDoGardenDark.goBack:

				// Zurückgehen (Methode)

				goBack();

				break;
		}

		// alle zusammen
		await ƒS.Speech.tell(charaktere.bronte, " Schau mit etwas Licht ist es gleich viel besser. ");
		await ƒS.Speech.tell(charaktere.maire, " Und wie. Siehst du die Spuren? ");
		await ƒS.Speech.tell(charaktere.bronte, " Mhm einen Moment… Wo würde ich hingehen wenn ich eine Katze wäre?");

		// Auswahl 

		let userchooseWhereWouldCatGo = await ƒS.Menu.getInput(chooseWhereWouldCatGo, "basicChoice");
		switch (userchooseWhereWouldCatGo) {

			case chooseWhereWouldCatGo.lamp:

				// lampe
				await ƒS.Speech.tell(charaktere.bronte, " Welch beeindruckende Technologie. Schau der Strom kommt über Kabel in der Erde bis hier und schon haben wir Licht! ");
				await ƒS.Speech.tell(charaktere.maire, " Spannend… aber sollten wir nicht was anderes machen? ");
				await ƒS.Speech.tell(charaktere.bronte, " Oh… ja vermutlich…");
				// todo: neustarten 

				break;

			case chooseWhereWouldCatGo.waterpond:
				//Wasserbecken 
				await ƒS.Speech.tell(charaktere.bronte, " Vielleicht ist sie ins Wasser gefallen? ");
				await ƒS.Speech.tell(charaktere.maire, " Ich glaube Katzen halten sich eher fern von Wasser. ");
				await ƒS.Speech.tell(charaktere.bronte, " Mhm… da hast du wohl recht. Ich kann auch nichts erkennen.");

				break;

			case chooseWhereWouldCatGo.cabin:

				// todo: return

				break;

		}



	}
}
