namespace Template {
    export async function EndScreen(): ƒS.SceneReturn {

        document.getElementById('endScreen').classList.add('endScreenVisible');
        document.getElementById('endScreen').classList.remove('endScreenInvisible');

        await ƒS.Sound.fade(sound.themeinfrontManor, 0.1, 1, true); 
    }
}
