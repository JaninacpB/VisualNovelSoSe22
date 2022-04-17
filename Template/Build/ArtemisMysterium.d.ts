declare namespace Template {
    export import ƒ = FudgeCore;
    export import ƒS = FudgeStory;
    let transistions: {
        puzzle: {
            duration: number;
            alpha: string;
            edge: number;
        };
    };
    let sound: {
        themeMitGutenNamen: string;
        guterNameSoundEffekt: string;
    };
    let location: {
        infrontOfManorDay: {
            name: string;
            background: string;
        };
        infrontOfManorNight: {
            name: string;
            background: string;
        };
        entrance: {
            name: string;
            background: string;
        };
        saloon: {
            name: string;
            background: string;
        };
    };
    let charaktere: {
        bronte: {
            name: string;
            origin: ƒ.ORIGIN2D;
            pose: {
                happy: string;
                angry: string;
                laugh: string;
                sad: string;
                shout: string;
                think: string;
            };
        };
        maire: {
            name: string;
            origin: ƒ.ORIGIN2D;
            pose: {
                neutral: string;
                embarrassed: string;
                fear: string;
                happy: string;
                sad: string;
                laugh: string;
            };
        };
        alaistar: {
            origin: ƒ.ORIGIN2D;
            pose: {
                angry: string;
                happy: string;
                neutral: string;
            };
        };
        grace: {
            origin: ƒ.ORIGIN2D;
            pose: {
                angry: string;
                happy: string;
                laugh: string;
                sad: string;
                think: string;
            };
        };
        isaac: {
            origin: ƒ.ORIGIN2D;
            pose: {
                cry: string;
                crying: string;
                happy: string;
                neutral: string;
                sad: string;
            };
        };
        odette: {
            origin: ƒ.ORIGIN2D;
            pose: {
                happy: string;
                angry: string;
            };
        };
        remington: {
            origin: ƒ.ORIGIN2D;
            pose: {
                angry: string;
                neutral: string;
            };
        };
        stella: {
            origin: ƒ.ORIGIN2D;
            pose: {
                frighten: string;
                happy: string;
                laugh: string;
                sad: string;
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
