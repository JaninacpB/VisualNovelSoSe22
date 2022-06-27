namespace Artemis {
    export async function SceneTenMaireAndIsaac(): ƒS.SceneReturn {

        await ƒS.Location.show(location.infrontOfManorNight);
        await ƒS.update(transistions.wallpaper.duration, transistions.wallpaper.alpha, transistions.wallpaper.edge);
        await ƒS.update();

        await ƒS.Character.show(charaktere.maire, charaktere.maire.pose.happy, ƒS.positionPercent(charaktere.maire.positionStandard.x, charaktere.maire.positionStandard.y));
        await ƒS.Character.show(charaktere.isaac, charaktere.isaac.pose.neutral, ƒS.positionPercent(charaktere.isaac.positionStandard.x, charaktere.isaac.positionStandard.y))
        await ƒS.update(0.8);

        await ƒS.Speech.tell(charaktere.isaac, " Hier, nimm gerne eine. ");

        await ƒS.Character.hide(charaktere.maire);
        await ƒS.Character.show(charaktere.maire, charaktere.maire.pose.embarrassed, ƒS.positionPercent(charaktere.maire.positionStandard.x, charaktere.maire.positionStandard.y));
        await ƒS.update(0.4);

        await ƒS.Speech.tell(charaktere.maire, " Danke. *Husten* Oh… hust… wow… hust… klasse Geschmack. ");

        await ƒS.Character.hide(charaktere.maire);
        await ƒS.Character.hide(charaktere.isaac);
        await ƒS.Character.show(charaktere.maire, charaktere.maire.pose.neutral, ƒS.positionPercent(charaktere.maire.positionStandard.x, charaktere.maire.positionStandard.y));
        await ƒS.Character.show(charaktere.isaac, charaktere.isaac.pose.happy, ƒS.positionPercent(charaktere.isaac.positionStandard.x, charaktere.isaac.positionStandard.y))
        await ƒS.update(0.4);

        await ƒS.Speech.tell(charaktere.isaac, " Kein Raucher? ");
        await ƒS.Speech.tell(charaktere.maire, " Eher selten. Früher waren sie zu teuer und auch heute gebe ich mein Gehalt lieber für etwas anderes aus. ");
        await ƒS.Speech.tell(charaktere.isaac, " Bezahlt Bronte nicht gut? ");

        await ƒS.Character.hide(charaktere.maire);
        await ƒS.Character.show(charaktere.maire, charaktere.maire.pose.laugh, ƒS.positionPercent(charaktere.maire.positionStandard.x, charaktere.maire.positionStandard.y));
        await ƒS.update(0.4);

        await ƒS.Speech.tell(charaktere.maire, " Oh doch, sie und ich teilen uns die Einkünfte, aber ich bin immer noch etwas sparsam. Alte Gewohnheiten wird man schlecht los. ");

        await ƒS.Character.hide(charaktere.maire);
        await ƒS.Character.show(charaktere.maire, charaktere.maire.pose.neutral, ƒS.positionPercent(charaktere.maire.positionStandard.x, charaktere.maire.positionStandard.y));
        await ƒS.Character.hide(charaktere.isaac);
        await ƒS.Character.show(charaktere.isaac, charaktere.isaac.pose.cry, ƒS.positionPercent(charaktere.isaac.positionStandard.x, charaktere.isaac.positionStandard.y))
        await ƒS.update(0.4);

        await ƒS.Speech.tell(charaktere.isaac, " Ja… dass stimmt wohl. ");

        await ƒS.Character.hide(charaktere.maire);
        await ƒS.Character.show(charaktere.maire, charaktere.maire.pose.sad, ƒS.positionPercent(charaktere.maire.positionStandard.x, charaktere.maire.positionStandard.y));
        await ƒS.Character.hide(charaktere.isaac);
        await ƒS.Character.show(charaktere.isaac, charaktere.isaac.pose.neutral, ƒS.positionPercent(charaktere.isaac.positionStandard.x, charaktere.isaac.positionStandard.y))
        await ƒS.update(0.4);

        await ƒS.Speech.tell(charaktere.maire, " Darf ich etwas fragen? ");

        await ƒS.Character.hide(charaktere.isaac);
        await ƒS.Character.show(charaktere.isaac, charaktere.isaac.pose.happy, ƒS.positionPercent(charaktere.isaac.positionStandard.x, charaktere.isaac.positionStandard.y))
        await ƒS.update(0.4);

        await ƒS.Speech.tell(charaktere.isaac, " Natürlich. ");
        await ƒS.Speech.tell(charaktere.maire, " Warum besuchst du deinen Schwager und deine Schwägerin immer noch? Ihr scheint euch beide nicht sonderlich gut zu leiden… ");

        await ƒS.Character.hide(charaktere.isaac);
        await ƒS.Character.show(charaktere.isaac, charaktere.isaac.pose.sad, ƒS.positionPercent(charaktere.isaac.positionStandard.x, charaktere.isaac.positionStandard.y))
        await ƒS.update(0.4);

        await ƒS.Speech.tell(charaktere.isaac, " Ja… dass fragte ich mich auch manchmal. Es ist nur… Hier hat sie früher gewohnt. ");

        await ƒS.Character.hide(charaktere.maire);
        await ƒS.Character.show(charaktere.maire, charaktere.maire.pose.fear, ƒS.positionPercent(charaktere.maire.positionStandard.x, charaktere.maire.positionStandard.y));
        await ƒS.update(0.4);

        await ƒS.Speech.tell(charaktere.maire, " Sie? Oh Odette, ihre Frau? ");

        await ƒS.Character.hide(charaktere.maire);
        await ƒS.Character.show(charaktere.maire, charaktere.maire.pose.sad, ƒS.positionPercent(charaktere.maire.positionStandard.x, charaktere.maire.positionStandard.y));
        await ƒS.Character.hide(charaktere.isaac);
        await ƒS.Character.show(charaktere.isaac, charaktere.isaac.pose.neutral, ƒS.positionPercent(charaktere.isaac.positionStandard.x, charaktere.isaac.positionStandard.y))
        await ƒS.update(0.4);

        await ƒS.Speech.tell(charaktere.isaac, " Genau… Hier hat sie gewohnt als wir uns kennengelernt haben. Wir haben im Ballsaal getanzt, im Garten herumgetollt wie Kindern und in der Bücherei uns Geschichten ausgedacht. Sie war… so voller Leben hier. ");
        await ƒS.Speech.tell(charaktere.maire, " Sie haben viel Zeit hier verbracht? ");

        await ƒS.Character.hide(charaktere.isaac);
        await ƒS.Character.show(charaktere.isaac, charaktere.isaac.pose.sad, ƒS.positionPercent(charaktere.isaac.positionStandard.x, charaktere.isaac.positionStandard.y))
        await ƒS.update(0.4);

        await ƒS.Speech.tell(charaktere.isaac, " Ja. Also nachdem ihr Vater verstorben war. Der ehemalige Lord Blackburn war kein Fan von mir. Sein Sohn – Alaistar – ist wie er. Traditionell und auf Klasse bedacht. Hält jeden der Arbeiten muss, um zu überleben, für weniger wert als sich selbst. ");
      
        await ƒS.Character.hide(charaktere.maire);
        await ƒS.Character.show(charaktere.maire, charaktere.maire.pose.neutral, ƒS.positionPercent(charaktere.maire.positionStandard.x, charaktere.maire.positionStandard.y));
        await ƒS.update(0.4);
      
        await ƒS.Speech.tell(charaktere.maire, " Ja, er ist nicht sonderlich nett. Geradewegs herablassend. ");

        await ƒS.Character.hide(charaktere.isaac);
        await ƒS.Character.show(charaktere.isaac, charaktere.isaac.pose.cry, ƒS.positionPercent(charaktere.isaac.positionStandard.x, charaktere.isaac.positionStandard.y))
        await ƒS.update(0.4);

        await ƒS.Speech.tell(charaktere.isaac, " Ja. Odette und er hatten einen fürchterlichen Streit, als sie beschloss mich zu heiraten. Seine Mutter konnte ihn beruhigen, aber es war trotzdem fürchterlich. ");
        await ƒS.Speech.tell(charaktere.isaac, "  Ich bot an für immer zu verschwinden und sie in Ruhe zu lassen, aber Odette wollte es nicht. Sie liebte mich… ");
        
        await ƒS.Character.hide(charaktere.isaac);
        await ƒS.Character.show(charaktere.isaac, charaktere.isaac.pose.neutral, ƒS.positionPercent(charaktere.isaac.positionStandard.x, charaktere.isaac.positionStandard.y))
        await ƒS.update(0.4);
        
        await ƒS.Speech.tell(charaktere.maire, " Odettes Mutter war auf ihrer Seite? ");
        await ƒS.Speech.tell(charaktere.isaac, " Ja. Sie war eine gutherzige Frau. Sanft und lieb wie meine Odette. Sie ließ uns hier wohnen, als sie das Haus nicht mehr brauchte und versprach uns es zu vererben. ");
        
        await ƒS.Character.hide(charaktere.maire);
        await ƒS.Character.show(charaktere.maire, charaktere.maire.pose.fear, ƒS.positionPercent(charaktere.maire.positionStandard.x, charaktere.maire.positionStandard.y));
        await ƒS.update(0.4);
        
        await ƒS.Speech.tell(charaktere.maire, " Oh… aber so kam es nicht? ");

        await ƒS.Character.hide(charaktere.maire);
        await ƒS.Character.show(charaktere.maire, charaktere.maire.pose.sad, ƒS.positionPercent(charaktere.maire.positionStandard.x, charaktere.maire.positionStandard.y));
        await ƒS.Character.hide(charaktere.isaac);
        await ƒS.Character.show(charaktere.isaac, charaktere.isaac.pose.cry, ƒS.positionPercent(charaktere.isaac.positionStandard.x, charaktere.isaac.positionStandard.y))
        await ƒS.update(0.4);

        await ƒS.Speech.tell(charaktere.isaac, " Nein, es scheint ihr tot kam schneller als was sie gedacht hätte du es war keine Zeit das Testament zu ändern. Aber das Geld ist mir auch egal. Wenn nur Odette mir geblieben wäre… ");
       
        await ƒS.Character.hide(charaktere.isaac);
        await ƒS.Character.show(charaktere.isaac, charaktere.isaac.pose.sad, ƒS.positionPercent(charaktere.isaac.positionStandard.x, charaktere.isaac.positionStandard.y))
        await ƒS.update(0.4);
       
        await ƒS.Speech.tell(charaktere.maire, " Dass mit ihrer Frau tut mir so leid. Bronte habe ich damals auch angeboten von meiner Stelle zurückzutreten, aber sie wollte es auch nicht. ");

        await ƒS.Character.hide(charaktere.maire);
        await ƒS.Character.show(charaktere.maire, charaktere.maire.pose.neutral, ƒS.positionPercent(charaktere.maire.positionStandard.x, charaktere.maire.positionStandard.y));
        await ƒS.update(0.4);

        await ƒS.Character.hide(charaktere.isaac);
        await ƒS.Character.show(charaktere.isaac, charaktere.isaac.pose.neutral, ƒS.positionPercent(charaktere.isaac.positionStandard.x, charaktere.isaac.positionStandard.y))
        await ƒS.update(0.4);

        await ƒS.Speech.tell(charaktere.isaac, " Ja… Liebe kann manchmal sehr schwer auf den Leuten liegen, die sie tragen. Und manchmal überrascht sie einen auch. Oder man trifft etwas, dass man an sie erinnert… ");
        await ƒS.Speech.tell(charaktere.maire, " Es muss sehr wehgetan haben, als wir Ihnen den Ring gezeigt haben. Ich hoffe Sie können uns verzeihen. ");
        await ƒS.Speech.tell(charaktere.isaac, " Alles gut… Ich frag mich immer noch nur… Woher kam der Ring? ");

        await ƒS.Character.hide(charaktere.maire);
        await ƒS.Character.show(charaktere.maire, charaktere.maire.pose.sad, ƒS.positionPercent(charaktere.maire.positionStandard.x, charaktere.maire.positionStandard.y));
        await ƒS.update(0.4);

        await ƒS.Speech.tell(charaktere.maire, " Tut mir leid, darauf habe ich auch immer noch keine wirkliche Antwort. ");
        await ƒS.Speech.tell(charaktere.isaac, "  Darf ich Sie jetzt etwas fragen? ");

        await ƒS.Character.hide(charaktere.maire);
        await ƒS.Character.show(charaktere.maire, charaktere.maire.pose.neutral, ƒS.positionPercent(charaktere.maire.positionStandard.x, charaktere.maire.positionStandard.y));
        await ƒS.update(0.4);

        await ƒS.Speech.tell(charaktere.maire, " Oh… äh… natürlich. ");

        await ƒS.Character.hide(charaktere.isaac);
        await ƒS.Character.show(charaktere.isaac, charaktere.isaac.pose.happy, ƒS.positionPercent(charaktere.isaac.positionStandard.x, charaktere.isaac.positionStandard.y))
        await ƒS.update(0.4);

        await ƒS.Speech.tell(charaktere.isaac, "  Wo genau schnüffelt Bronte gerade herum? ");

        await ƒS.Character.hide(charaktere.maire);
        await ƒS.Character.show(charaktere.maire, charaktere.maire.pose.embarrassed, ƒS.positionPercent(charaktere.maire.positionStandard.x, charaktere.maire.positionStandard.y));
        await ƒS.update(0.4);

        await ƒS.Speech.tell(charaktere.maire, " Äh… also-");

        await ƒS.Character.hide(charaktere.maire);
        await ƒS.Character.hide(charaktere.isaac);
        await ƒS.update(0.4);

        dataForSave.maireAndIsaacFinished = true;

        return "SceneElevenStudy"; 

    }
}