declare namespace Template {
    export import ƒ = FudgeCore;
    export import ƒS = FudgeStory;
    let sound: {
        themeMitGutenNamen: string;
        guterNameSoundEffekt: string;
    };
    let location: {
        vollGuterName: {
            name: string;
            background: string;
        };
        vollGuterNameZweiter: {
            name: string;
            background: string;
        };
    };
    let charaktere: {
        bronte: {
            name: string;
            origin: ƒ.ORIGIN2D;
            pose: {
                neutral: string;
            };
        };
    };
    let dataForSave: {
        Achievment: {
            saveTheCat: boolean;
        };
    };
}
declare namespace Template {
    function Scene(): ƒS.SceneReturn;
}
