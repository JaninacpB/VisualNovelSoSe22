namespace Template {
    export async function SceneSevenCabin(): ƒS.SceneReturn {

        await ƒS.Location.show(location.cabin);
		await ƒS.update(transistions.inToOut.duration, transistions.inToOut.alpha, transistions.inToOut.edge);

        //todo: Music? 
		await ƒS.Sound.fade(sound.themeinfrontManorNight, 0.1, 0.2, true);

    }
}