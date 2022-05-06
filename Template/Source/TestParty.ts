namespace Template {
    export async function TestParty(): ƒS.SceneReturn { 

    await ƒS.Sound.fade(sound.party, 0.1, 0.5, true); 
    await ƒS.Sound.play("./../../Assets/TestParty/Close Door 01.wav", 0.7);

    await ƒS.Sound.fade(sound.party, 1, 1, true); 
    await ƒS.Sound.fade("./../../Assets/TestParty/Crowd Talking.mp3", 0.4, 1, true);

    await ƒS.Location.show(location.party);
    await ƒS.update(transistions.wallpaper.duration, transistions.wallpaper.alpha, transistions.wallpaper.edge);
    
    
    await ƒS.Speech.tell(charaktere.anna, "Hi, ich heiße Anna");
    await ƒS.Character.show(charaktere.anna, charaktere.anna.pose.neutral, ƒS.positions.bottomright);
    await ƒS.update(1);

    await ƒS.Character.show(charaktere.bob, charaktere.bob.pose.neutral, ƒS.positions.bottomcenter);
    await ƒS.update(1);

    await ƒS.Sound.fade("./../../Assets/TestParty/Laugh Male.wav", 0.4, 1);
    await ƒS.Speech.tell(charaktere.bob, "Hi, wie geht es dir?");

   // await ƒS.Character.show(charaktere.bob, charaktere.bob.pose.neutral, ƒS.positionPercent(charaktere.bob.positionStandard.x , charaktere.bob.positionStandard.y))
   

    }
}