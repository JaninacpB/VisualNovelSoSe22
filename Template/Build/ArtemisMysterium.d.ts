declare namespace Artemis {
    function EndScreen(): ƒS.SceneReturn;
}
declare namespace Artemis {
    function EndingBadGraceAngry(): ƒS.SceneReturn;
}
declare namespace Artemis {
    function EndingOneAllSurvive(): ƒS.SceneReturn;
}
declare namespace Artemis {
    function EndingThreeOdetteDead(): ƒS.SceneReturn;
}
declare namespace Artemis {
    function EndingTwoBronteDead(): ƒS.SceneReturn;
}
declare namespace Artemis {
    function ExtraSceneBronteMaire(): ƒS.SceneReturn;
}
declare namespace Artemis {
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
        study: string;
        final: string;
        finalGood: string;
        finalTranquille: string;
        finalSad: string;
        endingSad: string;
        endingHappy: string;
        endingReallyBad: string;
        catMeow: string;
        goingThrouBushes: string;
        knockDoor: string;
        alaisterLaugh: string;
        dinnerSound: string;
        waterGlass: string;
        stellaScream: string;
        graceScream: string;
        gunShoot: string;
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
            positionMiddle: {
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
                cry: string;
                shooked: string;
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
                confussed: string;
                evil: string;
                emotionalDrained: string;
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
                gleefull: string;
                sad: string;
                scream: string;
                think: string;
                shadow: string;
            };
            positionStandard: {
                x: number;
                y: number;
            };
            positionMiddle: {
                x: number;
                y: number;
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
        testament: {
            name: string;
            description: string;
            image: string;
            static: boolean;
        };
    };
    function fromLeftToRight(startX: number, startY: number, endX: number, endY: number): ƒS.AnimationDefinition;
    function fromMiddleDown(startX: number, startY: number, endY: number): ƒS.AnimationDefinition;
    function fromMiddleSinking(startX: number, startY: number, endY: number, timeDuration: number): ƒS.AnimationDefinition;
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
        pointAngryMaire: number;
        pointAngryGrace: number;
        Achievment: {
            saveTheCat: boolean;
        };
    };
    function showCredits(): void;
    function showDiary(): void;
    function showEmotion(name: string, durationBreak: number): Promise<void>;
    function listenerRestart(this: HTMLElement): void;
    function deleteInventory(name: string): void;
}
declare namespace Artemis {
    function SceneEightBInterviews(): ƒS.SceneReturn;
}
declare namespace Artemis {
    function SceneEightSaalonInterview(): ƒS.SceneReturn;
}
declare namespace Artemis {
    function SceneElevenStudy(): ƒS.SceneReturn;
}
declare namespace Artemis {
    function SceneFiveOutside(): ƒS.SceneReturn;
}
declare namespace Artemis {
    function SceneFourSaalonDrama(): ƒS.SceneReturn;
}
declare namespace Artemis {
    function SceneNineEntryhall(): ƒS.SceneReturn;
}
declare namespace Artemis {
    function SceneOneInfront(): ƒS.SceneReturn;
}
declare namespace Artemis {
    function SceneSevenCabin(): ƒS.SceneReturn;
}
declare namespace Artemis {
    function SceneSixGarden(): ƒS.SceneReturn;
}
declare namespace Artemis {
    function SceneTenMaireAndIsaac(): ƒS.SceneReturn;
}
declare namespace Artemis {
    function SceneThreeSaalon(): ƒS.SceneReturn;
}
declare namespace Artemis {
    function SceneTwelveFinal(): ƒS.SceneReturn;
}
declare namespace Artemis {
    function SceneTwoEntrance(): ƒS.SceneReturn;
}
