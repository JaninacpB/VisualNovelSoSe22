declare namespace Template {
    function EndScreen(): ƒS.SceneReturn;
}
declare namespace Template {
    export import ƒ = FudgeCore;
    export import ƒS = FudgeStory;
    let transistions: {
        inToOut: {
            duration: number;
            alpha: string;
            edge: number;
        };
        wallpaper: {
            duration: number;
            alpha: string;
            edge: number;
        };
    };
    let sound: {
        party: string;
        themeinfrontManor: string;
        themeEntrance: string;
        themeSaloon: string;
        dramaInSaloon: string;
        catMeow: string;
    };
    let location: {
        party: {
            name: string;
            background: string;
        };
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
        saalon: {
            name: string;
            background: string;
        };
        gardenDark: {
            name: string;
            background: string;
        };
        gardenLight: {
            name: string;
            background: string;
        };
        cabin: {
            name: string;
            background: string;
        };
        studyroom: {
            name: string;
            background: string;
        };
    };
    let charaktere: {
        anna: {
            name: string;
            origin: ƒ.ORIGIN2D;
            pose: {
                neutral: string;
            };
            positionStandard: {
                x: number;
                y: number;
            };
        };
        bob: {
            name: string;
            origin: ƒ.ORIGIN2D;
            pose: {
                neutral: string;
            };
            positionStandard: {
                x: number;
                y: number;
            };
        };
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
            positionStandard: {
                x: number;
                y: number;
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
            positionStandard: {
                x: number;
                y: number;
            };
        };
        alaistar: {
            name: string;
            origin: ƒ.ORIGIN2D;
            pose: {
                angry: string;
                happy: string;
                neutral: string;
            };
        };
        grace: {
            name: string;
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
            name: string;
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
            name: string;
            origin: ƒ.ORIGIN2D;
            pose: {
                happy: string;
                angry: string;
            };
        };
        remington: {
            name: string;
            origin: ƒ.ORIGIN2D;
            pose: {
                angry: string;
                neutral: string;
            };
            positionStandard: {
                x: number;
                y: number;
            };
        };
        stella: {
            name: string;
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
    function showCredits(): void;
}
declare namespace Template {
    function SceneFourSaalonDrama(): ƒS.SceneReturn;
}
declare namespace Template {
    function SceneOneInfront(): ƒS.SceneReturn;
}
declare namespace Template {
    function SceneThreeSaalon(): ƒS.SceneReturn;
}
declare namespace Template {
    function SceneTwoEntrance(): ƒS.SceneReturn;
}
declare namespace Template {
    function TestParty(): ƒS.SceneReturn;
}
