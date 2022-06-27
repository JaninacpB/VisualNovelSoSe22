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

		await ƒS.Character.hide(charaktere.maire);
		await ƒS.Character.hide(charaktere.bronte);
		await ƒS.Character.show(charaktere.maire, charaktere.maire.pose.fear, ƒS.positionPercent(charaktere.maire.positionStandard.x, charaktere.maire.positionStandard.y));
		await ƒS.Character.show(charaktere.bronte, charaktere.bronte.pose.sad, ƒS.positionPercent(charaktere.bronte.positionStandard.x, charaktere.bronte.positionStandard.y));
		await ƒS.update(0.4);

		await ƒS.Speech.tell(charaktere.maire, "Alles okay? Oh man sieht ja die Hand vor Augen nicht. Was machen wir jetzt");

		let userChooseWhatToDoGardenDark = await ƒS.Menu.getInput(chooseWhatToDoGardenDark, "basicChoice");
		switch (userChooseWhatToDoGardenDark) {
			case chooseWhatToDoGardenDark.search:
				//auswahl Untersuchen

				await ƒS.Character.hide(charaktere.maire);
				await ƒS.Character.hide(charaktere.bronte);
				await ƒS.Character.show(charaktere.maire, charaktere.maire.pose.neutral, ƒS.positionPercent(charaktere.maire.positionStandard.x, charaktere.maire.positionStandard.y));
				await ƒS.Character.show(charaktere.bronte, charaktere.bronte.pose.think, ƒS.positionPercent(charaktere.bronte.positionStandard.x, charaktere.bronte.positionStandard.y));
				await ƒS.update(0.4);

				await ƒS.Speech.tell(charaktere.bronte, " Mhm… vielleicht… ich habe so ein Gefühl hier könnte etwas sein das Hilft. ");
				await ƒS.Speech.tell(charaktere.maire, " Pass bloß auf! Bei dieser Dunkelheit ist es leicht sich zu verletzten. ");

				await ƒS.Character.hide(charaktere.bronte);
				await ƒS.Character.show(charaktere.bronte, charaktere.bronte.pose.sad, ƒS.positionPercent(charaktere.bronte.positionStandard.x, charaktere.bronte.positionStandard.y));
				await ƒS.update(0.4);

				await ƒS.Speech.tell(charaktere.bronte, " Ich bin schon vorsichtig… Autsch! Mhm… vielleicht hast du Recht.");

				// Unter Auswahl: endet immer mit: zurückgehen
				let userChooseWhatToDoGardenAfterInvestigation = await ƒS.Menu.getInput(chooseWhatToDoGardenAfterInvestigation, "basicChoice");
				switch (userChooseWhatToDoGardenAfterInvestigation) {
					case chooseWhatToDoGardenAfterInvestigation.searchMore:

						await ƒS.Character.hide(charaktere.bronte);
						await ƒS.Character.show(charaktere.bronte, charaktere.bronte.pose.happy, ƒS.positionPercent(charaktere.bronte.positionStandard.x, charaktere.bronte.positionStandard.y));
						await ƒS.update(0.4);

						await ƒS.Speech.tell(charaktere.bronte, " Oh! Hier!");

						await ƒS.Character.hide(charaktere.maire);
						await ƒS.Character.hide(charaktere.bronte);
						await ƒS.Character.show(charaktere.maire, charaktere.maire.pose.fear, ƒS.positionPercent(charaktere.maire.positionStandard.x, charaktere.maire.positionStandard.y));
						await ƒS.Character.show(charaktere.bronte, charaktere.bronte.pose.happy, ƒS.positionPercent(charaktere.bronte.positionStandard.x, charaktere.bronte.positionStandard.y));
						await ƒS.update(0.4);

						//todo: Laterne Licht
						await ƒS.Location.show(location.gardenLight);
						await ƒS.Speech.tell(charaktere.maire, "Oh wow!");

						await ƒS.Character.hide(charaktere.maire);
						await ƒS.Character.show(charaktere.maire, charaktere.maire.pose.happy, ƒS.positionPercent(charaktere.maire.positionStandard.x, charaktere.maire.positionStandard.y));
						await ƒS.update(0.4);

						await ƒS.Speech.tell(charaktere.bronte, "Ein kleines Wunder der Technik. Und sehr praktisch dazu.");
						break;

					case chooseWhatToDoGardenAfterInvestigation.goBack:

						await goBack();
						break;
				}
				break;

			case chooseWhatToDoGardenDark.goFurther:
				//Weitergehen 

				dataForSave.maireFellInPond = true;

				await ƒS.Character.hide(charaktere.maire);
				await ƒS.Character.hide(charaktere.bronte);
				await ƒS.Character.show(charaktere.maire, charaktere.maire.pose.neutral, ƒS.positionPercent(charaktere.maire.positionStandard.x, charaktere.maire.positionStandard.y));
				await ƒS.Character.show(charaktere.bronte, charaktere.bronte.pose.happy, ƒS.positionPercent(charaktere.bronte.positionStandard.x, charaktere.bronte.positionStandard.y));
				await ƒS.update(0.4);

				await ƒS.Speech.tell(charaktere.bronte, " So ein bisschen Dunkelheit wird uns doch nicht aufhalten. ");

				await ƒS.Character.hide(charaktere.maire);
				await ƒS.Character.show(charaktere.maire, charaktere.maire.pose.fear, ƒS.positionPercent(charaktere.maire.positionStandard.x, charaktere.maire.positionStandard.y));
				await ƒS.update(0.4);

				await ƒS.Speech.tell(charaktere.maire, " Wenn du meinst Bronte...  Pass nur auf hier ist");
				// <platsch>wasserbecken…

				await ƒS.Character.hide(charaktere.maire);
				await ƒS.Character.hide(charaktere.bronte);
				await ƒS.Character.show(charaktere.maire, charaktere.maire.pose.sad, ƒS.positionPercent(charaktere.maire.positionStandard.x, charaktere.maire.positionStandard.y));
				await ƒS.Character.show(charaktere.bronte, charaktere.bronte.pose.shout, ƒS.positionPercent(charaktere.bronte.positionStandard.x, charaktere.bronte.positionStandard.y));
				await ƒS.update(0.4);

				await ƒS.Speech.tell(charaktere.maire, " AH! Ich ertrinke… Bronte ich… Ich… ich kann stehen… Aber meine ganzen Kleider… Tolle Idee von dir…");

				await ƒS.Character.hide(charaktere.bronte);
				await ƒS.Character.show(charaktere.bronte, charaktere.bronte.pose.sad, ƒS.positionPercent(charaktere.bronte.positionStandard.x, charaktere.bronte.positionStandard.y));
				await ƒS.update(0.4);

				await ƒS.Speech.tell(charaktere.bronte, " Oh weh, dass tut mir Leid, ich wollte dich gerade warnen. Lass uns schnell zurück ins Warme gehen.");
				await goBack();
				break;

			case chooseWhatToDoGardenDark.goBack:

				// Zurückgehen (Methode)
				await goBack();
				break;
		}

		// alle zusammen

		await ƒS.Character.hide(charaktere.maire);
		await ƒS.Character.hide(charaktere.bronte);
		await ƒS.Character.show(charaktere.maire, charaktere.maire.pose.happy, ƒS.positionPercent(charaktere.maire.positionStandard.x, charaktere.maire.positionStandard.y));
		await ƒS.Character.show(charaktere.bronte, charaktere.bronte.pose.happy, ƒS.positionPercent(charaktere.bronte.positionStandard.x, charaktere.bronte.positionStandard.y));
		await ƒS.update(0.4);

		await ƒS.Speech.tell(charaktere.bronte, " Schau mit etwas Licht ist es gleich viel besser. ");
		await ƒS.Speech.tell(charaktere.maire, " Und wie. Siehst du die Spuren? ");

		await ƒS.Character.hide(charaktere.bronte);
		await ƒS.Character.show(charaktere.bronte, charaktere.bronte.pose.think, ƒS.positionPercent(charaktere.bronte.positionStandard.x, charaktere.bronte.positionStandard.y));
		await ƒS.update(0.4);

		await ƒS.Speech.tell(charaktere.bronte, " Mhm einen Moment… Wo würde ich hingehen wenn ich eine Katze wäre?");

		// solange bis Hütte ausgewählt dann nächste Scene
		while (true) {
			let userchooseWhereWouldCatGo = await ƒS.Menu.getInput(chooseWhereWouldCatGo, "basicChoice");
			switch (userchooseWhereWouldCatGo) {

				case chooseWhereWouldCatGo.lamp:

					await ƒS.Character.hide(charaktere.maire);
					await ƒS.Character.hide(charaktere.bronte);
					await ƒS.Character.show(charaktere.maire, charaktere.maire.pose.neutral, ƒS.positionPercent(charaktere.maire.positionStandard.x, charaktere.maire.positionStandard.y));
					await ƒS.Character.show(charaktere.bronte, charaktere.bronte.pose.happy, ƒS.positionPercent(charaktere.bronte.positionStandard.x, charaktere.bronte.positionStandard.y));
					await ƒS.update(0.4);

					await ƒS.Speech.tell(charaktere.bronte, " Welch beeindruckende Technologie. Schau der Strom kommt über Kabel in der Erde bis hier und schon haben wir Licht! ");
					await ƒS.Speech.tell(charaktere.maire, " Spannend… aber sollten wir nicht was anderes machen? ");
					await ƒS.Speech.tell(charaktere.bronte, " Oh… ja vermutlich…");

					chooseWhereWouldCatGo.lamp = "";
					break;

				case chooseWhereWouldCatGo.waterpond:

					await ƒS.Character.hide(charaktere.bronte);
					await ƒS.Character.show(charaktere.bronte, charaktere.bronte.pose.sad, ƒS.positionPercent(charaktere.bronte.positionStandard.x, charaktere.bronte.positionStandard.y));
					await ƒS.update(0.4);

					await ƒS.Speech.tell(charaktere.bronte, " Vielleicht ist sie ins Wasser gefallen? ");
					await ƒS.Speech.tell(charaktere.maire, " Ich glaube Katzen halten sich eher fern von Wasser. ");

					await ƒS.Character.hide(charaktere.bronte);
					await ƒS.Character.show(charaktere.bronte, charaktere.bronte.pose.think, ƒS.positionPercent(charaktere.bronte.positionStandard.x, charaktere.bronte.positionStandard.y));
					await ƒS.update(0.4);

					await ƒS.Speech.tell(charaktere.bronte, " Mhm… da hast du wohl recht. Ich kann auch nichts erkennen.");

					chooseWhereWouldCatGo.waterpond = "";
					break;

				case chooseWhereWouldCatGo.cabin:
					await ƒS.Character.hide(charaktere.maire);
					await ƒS.Character.hide(charaktere.bronte);
					await ƒS.update(0.8);

					return 'SceneSevenCabin';
			}
		}


		// Wir zwei mal ausgeführt daher function
		async function goBack(): Promise<void> {

			await ƒS.Character.hide(charaktere.maire);
			await ƒS.Character.hide(charaktere.bronte);
			await ƒS.update(0.8);

			await ƒS.Location.show(location.saalon);
			await ƒS.update(transistions.inToOut.duration, transistions.inToOut.alpha, transistions.inToOut.edge);

			await ƒS.Character.hide(charaktere.maire);
			await ƒS.Character.hide(charaktere.bronte);
			await ƒS.Character.show(charaktere.maire, charaktere.maire.pose.neutral, ƒS.positionPercent(charaktere.maire.positionStandard.x, charaktere.maire.positionStandard.y));
			await ƒS.Character.show(charaktere.bronte, charaktere.bronte.pose.think, ƒS.positionPercent(charaktere.bronte.positionStandard.x, charaktere.bronte.positionStandard.y));
			await ƒS.update(0.8);

			await ƒS.Character.show(charaktere.grace, charaktere.grace.pose.laugh, ƒS.positionPercent(charaktere.grace.positionStandard.x, charaktere.grace.positionStandard.y));
			await ƒS.update(0.4);

			await ƒS.Speech.tell(charaktere.grace, " Oh da kommen Sie! ");

			if (dataForSave.maireFellInPond) {

				await ƒS.Character.hide(charaktere.grace);
				await ƒS.Character.show(charaktere.grace, charaktere.grace.pose.sad, ƒS.positionPercent(charaktere.grace.positionStandard.x, charaktere.grace.positionStandard.y));
				await ƒS.update(0.4);

				await ƒS.Speech.tell(charaktere.grace, "Oh Gott, was ist denn mit Ihnen passiert?");

				await ƒS.Character.hide(charaktere.maire);
				await ƒS.Character.hide(charaktere.bronte);
				await ƒS.Character.show(charaktere.maire, charaktere.maire.pose.embarrassed, ƒS.positionPercent(charaktere.maire.positionStandard.x, charaktere.maire.positionStandard.y));
				await ƒS.Character.show(charaktere.bronte, charaktere.bronte.pose.sad, ƒS.positionPercent(charaktere.bronte.positionStandard.x, charaktere.bronte.positionStandard.y));
				await ƒS.update(0.4);

				await ƒS.Speech.tell(charaktere.bronte, "Wir haben leider buchstäblich im Dunklen getappt. Am besten wir erzählen alles am Kamin. ");
				await ƒS.Character.hide(charaktere.grace);
				await ƒS.Character.hide(charaktere.maire);
				await ƒS.Character.hide(charaktere.bronte);
				await ƒS.update(0.8);

				// fade to black
				await ƒS.Location.show(location.black);
				await ƒS.update(transistions.inToOut.duration, transistions.inToOut.alpha, transistions.inToOut.edge);
				//todo: sound
				await ƒS.Location.show(location.saalon);
				await ƒS.update(transistions.inToOut.duration, transistions.inToOut.alpha, transistions.inToOut.edge);

				await ƒS.Character.show(charaktere.maire, charaktere.maire.pose.neutral, ƒS.positionPercent(charaktere.maire.positionStandard.x, charaktere.maire.positionStandard.y));
				await ƒS.Character.show(charaktere.grace, charaktere.grace.pose.think, ƒS.positionPercent(charaktere.grace.positionStandard.x, charaktere.grace.positionStandard.y));
				await ƒS.Character.show(charaktere.bronte, charaktere.bronte.pose.sad, ƒS.positionPercent(charaktere.bronte.positionStandard.x, charaktere.bronte.positionStandard.y));
				await ƒS.update(0.8);

				await ƒS.Character.hide(charaktere.grace);
				await ƒS.Character.show(charaktere.grace, charaktere.grace.pose.angry, ƒS.positionPercent(charaktere.grace.positionStandard.x, charaktere.grace.positionStandard.y));
				await ƒS.update(0.4);
				//todo: Minus Punkte Grace		
				await ƒS.Speech.tell(charaktere.grace, "Aber… Oh sind das etwa Blüten meiner Seerosen! Oh weh. Die sind preisgekrönt! Das wird Monate dauern, die wieder so hinzubekommen. Passen sie doch besser auf! ");
			
			} else {
				await ƒS.Speech.tell(charaktere.grace, "Haben Sie sie gefunden?");

				await ƒS.Character.hide(charaktere.grace);
				await ƒS.Character.hide(charaktere.maire);
				await ƒS.Character.hide(charaktere.bronte);
				await ƒS.Character.show(charaktere.maire, charaktere.maire.pose.sad, ƒS.positionPercent(charaktere.maire.positionStandard.x, charaktere.maire.positionStandard.y));
				await ƒS.Character.show(charaktere.bronte, charaktere.bronte.pose.sad, ƒS.positionPercent(charaktere.bronte.positionStandard.x, charaktere.bronte.positionStandard.y));
				await ƒS.Character.show(charaktere.grace, charaktere.grace.pose.sad, ƒS.positionPercent(charaktere.grace.positionStandard.x, charaktere.grace.positionStandard.y));
				await ƒS.update(0.4);

				await ƒS.Speech.tell(charaktere.bronte, "Wir haben Artemis leider noch nicht gefunden, jedoch ihre Spuren. Wir bräuchten nur ein bisschen Licht im Garten.");

				await ƒS.Character.hide(charaktere.grace);
				await ƒS.Character.show(charaktere.grace, charaktere.grace.pose.think, ƒS.positionPercent(charaktere.grace.positionStandard.x, charaktere.grace.positionStandard.y));
				await ƒS.update(0.4);

				await ƒS.Speech.tell(charaktere.grace, " Licht? Oh, gehen die Laternen schon wieder nicht. Ich verstehe nichts von dieser Technik, aber wirklich zu verlässlich scheint sie mir ja nicht.");
				await ƒS.Speech.tell(charaktere.grace, " Sie sind die letzten Tage mehrmals einfach ausgegangen.");
				await ƒS.Speech.tell(charaktere.grace, " Dabei haben die Techniker mir hoch und heilig versprochen es wäre zuverlässig und nicht gefährlich!");



				await ƒS.Character.hide(charaktere.grace);
				await ƒS.Character.show(charaktere.grace, charaktere.grace.pose.happy, ƒS.positionPercent(charaktere.grace.positionStandard.x, charaktere.grace.positionStandard.y));
				await ƒS.update(0.4);

				await ƒS.Speech.tell(charaktere.grace, " Aber ich lasse gleich Remington danach sehen. ");
				await ƒS.Speech.tell(charaktere.grace, " Ich habe die Anweisungen zum Neustarten aufschreiben lassen. Besser alles wichtige auf Papier festhalten sag ich immer!  ");
			}

			await ƒS.Speech.tell(charaktere.bronte, " Okay, ich denke wir können unsere Investigation fortsetzen. Lass uns gehen!");

			await ƒS.Character.hide(charaktere.maire);
			await ƒS.Character.hide(charaktere.grace);
			await ƒS.Character.hide(charaktere.bronte);
			await ƒS.update(0.8);

			await ƒS.Location.show(location.gardenLight);
			await ƒS.update(transistions.inToOut.duration, transistions.inToOut.alpha, transistions.inToOut.edge);
		
			await ƒS.Sound.fade(sound.themeinfrontManorNight, 0, 0.5, true);
		
		}
	}
}