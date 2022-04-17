namespace Template {
    export async function SceneTwoEntrance(): ƒS.SceneReturn {
        await ƒS.Sound.play(sound.themeEntrance, 0.1, true); 

        await ƒS.Location.show(location.entrance);
        await ƒS.update(transistions.puzzle.duration, transistions.puzzle.alpha, transistions.puzzle.edge);
        
        await ƒS.Speech.tell(charaktere.maire, "Oh, was für ein prächtiges Anwesen. Und wir sind hier wirklich richtig?");
    
        await ƒS.Character.show(charaktere.maire, charaktere.maire.pose.neutral, ƒS.positionPercent(75,100))
        await ƒS.update(1);
    }
}
