declare namespace Template {
    function EndScreen(): ƒS.SceneReturn;
}
declare namespace Template {
    function EndingBadGraceAngry(): ƒS.SceneReturn;
}
declare namespace Template {
    function EndingFiveAllSurvive(): ƒS.SceneReturn;
}
declare namespace Template {
    function EndingFourBronteDead(): ƒS.SceneReturn;
}
declare namespace Template {
    function EndingOneAllSurvive(): ƒS.SceneReturn;
}
declare namespace Template {
    function EndingSixOdetteDead(): ƒS.SceneReturn;
}
declare namespace Template {
    function EndingThreeAllSurvive(): ƒS.SceneReturn;
}
declare namespace Template {
    function EndingTwoBronteDead(): ƒS.SceneReturn;
}
declare namespace Template {
    function ExtraSceneBronteMaire(): ƒS.SceneReturn;
}
declare namespace Template {
    export import ƒ = FudgeCore;
    export import ƒS = FudgeStory;
    let emotionen: {
        ausrufezeichen: string;
    };
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
        themeinfrontManor: string;
        themeinfrontManorNight: string;
        themeEntrance: string;
        themeSaloon: string;
        dramaInSaloon: string;
        saloonAfterScrem: string;
        catMeow: string;
        goingThrouBushes: string;
        knockDoor: string;
        alaisterLaugh: string;
        dinnerSound: string;
        waterGlass: string;
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
        studyroomWindow: {
            name: string;
            background: string;
        };
        black: {
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
            positionStandard: {
                x: number;
                y: number;
            };
            positionRightMiddle: {
                x: number;
                y: number;
            };
            positionMiddle: {
                x: number;
                y: number;
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
            positionStandard: {
                x: number;
                y: number;
            };
            positionLeftMiddle: {
                x: number;
                y: number;
            };
            positionMiddle: {
                x: number;
                y: number;
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
            positionStandard: {
                x: number;
                y: number;
            };
            positionLeftMiddle: {
                x: number;
                y: number;
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
            positionRightMiddle: {
                x: number;
                y: number;
            };
            positionMiddle: {
                x: number;
                y: number;
            };
        };
        shadow: {
            name: string;
        };
    };
    let inventory: {
        ring: {
            name: string;
            description: string;
            image: string;
            static: boolean;
        };
        cat: {
            name: string;
            description: string;
            image: string;
            static: boolean;
        };
        collar: {
            name: string;
            description: string;
            image: string;
            static: boolean;
        };
        pistol: {
            name: string;
            description: string;
            image: string;
            static: boolean;
        };
    };
    function fromLeftToRight(startX: number, startY: number, endX: number, endY: number): ƒS.AnimationDefinition;
    function fromMiddleDown(startX: number, startY: number, endY: number): ƒS.AnimationDefinition;
    let dataForSave: {
        foundRing: boolean;
        spiedThroughWindow: boolean;
        mairePuked: boolean;
        maireFellInPond: boolean;
        maireHurtHerselfInCabin: boolean;
        lookedAtCoats: boolean;
        tookGun: boolean;
        gotTestament: boolean;
        greetingInSaalonFinished: boolean;
        lookingInTheGardenForCluesFinished: boolean;
        foundCatCollarFinished: boolean;
        stellaScreamFinished: boolean;
        lookingForCluesFinished: boolean;
        interviewFinished: boolean;
        searchedCloakFinished: boolean;
        maireAndIsaacFinished: boolean;
        finalFinished: boolean;
        pointDetectiv: number;
        pointFriend: number;
        pointAngryGrace: number;
        Achievment: {
            saveTheCat: boolean;
        };
    };
    function showCredits(): void;
    function showDiary(): void;
    function showEmotion(name: string, durationBreak: number): Promise<void>;
    function listenerRestart(this: HTMLElement): void;
}
declare namespace Template {
    function SceneEightBInterviews(): ƒS.SceneReturn;
}
declare namespace Template {
    function SceneEightSaalonInterview(): ƒS.SceneReturn;
}
declare namespace Template {
    function SceneElevenStudy(): ƒS.SceneReturn;
}
declare namespace Template {
    function SceneFiveOutside(): ƒS.SceneReturn;
}
declare namespace Template {
    function SceneFourSaalonDrama(): ƒS.SceneReturn;
}
declare namespace Template {
    function SceneNineEntryhall(): ƒS.SceneReturn;
}
declare namespace Template {
    function SceneOneInfront(): ƒS.SceneReturn;
}
declare namespace Template {
    function SceneSevenCabin(): ƒS.SceneReturn;
}
declare namespace Template {
    function SceneSixGarden(): ƒS.SceneReturn;
}
declare namespace Template {
    function SceneTenMaireAndIsaac(): ƒS.SceneReturn;
}
declare namespace Template {
    function SceneThreeSaalon(): ƒS.SceneReturn;
}
declare namespace Template {
    function SceneTwelveFinal(): ƒS.SceneReturn;
}
declare namespace Template {
    function SceneTwoEntrance(): ƒS.SceneReturn;
}
