namespace Artemis {
    export async function EndScreen(): ƒS.SceneReturn {

        if(dataForSave.pointAngryGrace == 4){
            localStorage.setItem('angryGrace', JSON.stringify(true));

        }

        if(dataForSave.pointAngryMaire == 4){
            localStorage.setItem('angryMaire', JSON.stringify(true));
        }

        for (let i = 0; i < achievments.length; i++) {
            if (checkIftrue(achievments[i])) {
                getLocalStorrage(achievments[i]);
            }
        }

        // Bilder einblenden und Canvas entfernen
        document.getElementById('endScreen').classList.add('endScreenVisible');
        document.getElementById('endScreen').classList.remove('endScreenInvisible');
        document.getElementById('flexRestartButton').setAttribute("style", "display: flex");
        document.getElementById('achivementTitle').setAttribute("style", "display: block");

        document.getElementById('detectivPoints').innerHTML = dataForSave.pointDetectiv + "";


        let speech: HTMLCollection = document.getElementsByTagName('speech');
        let canvas: HTMLCollection = document.getElementsByTagName('scene');
        canvas[0].setAttribute("style", "height: 0px");
        speech[0].setAttribute("style", "vicibility: hidden;");
    }

    function getLocalStorrage(achievment: string): void {
        document.getElementById(achievment).setAttribute("style", " filter: none;");
    }

    function checkIftrue(achievment: string): boolean {
        return JSON.parse(localStorage.getItem(achievment));
    }
}