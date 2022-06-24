namespace Template {
    export async function EndScreen(): ƒS.SceneReturn {

        // Bilder einblenden und Canvas entfernen
        document.getElementById('endScreen').classList.add('endScreenVisible');
        document.getElementById('endScreen').classList.remove('endScreenInvisible');
        document.getElementById('flexRestartButton').setAttribute("style", "display: flex"); 
        document.getElementById('achivementTitle').setAttribute("style", "display: block"); 
        

        let speech: HTMLCollection = document.getElementsByTagName('speech');
        let canvas: HTMLCollection = document.getElementsByTagName('scene');
        canvas[0].setAttribute("style", "height: 0px");
        speech[0].setAttribute("style", "vicibility: hidden;");

        //todo: färbe ein welche ausgelöst wurden maybe local Storage 

        await ƒS.Sound.fade(sound.themeinfrontManor, 0.1, 1, true); 
    }
}
