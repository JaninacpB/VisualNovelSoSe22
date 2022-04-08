"use strict";
var Template;
(function (Template) {
    Template.ƒ = FudgeCore;
    Template.ƒS = FudgeStory;
    console.log("Artemis Mysterium starting");
    // define Transitions 
    // export let transistions = {
    //   puzzle: {
    //     duration: 1,
    //     alpha: "Link zum Bild",
    //     edge: 1 //härtegrad
    //   }
    // }
    Template.sound = {
        //Themes
        themeMitGutenNamen: "",
        //SFX
        guterNameSoundEffekt: ""
    };
    Template.location = {
        vollGuterName: {
            name: "",
            background: "Pfad",
        },
        vollGuterNameZweiter: {
            name: "",
            background: "",
        }
    };
    Template.charaktere = {
        bronte: {
            name: "Bronte",
            origin: Template.ƒS.ORIGIN.BOTTOMCENTER,
            pose: {
                neutral: "pfad"
            }
        }
    };
    Template.dataForSave = {
        //Sachen die Gespeichert werden müssen
        Achievment: {
            saveTheCat: false
        }
    };
    window.addEventListener("load", start);
    function start(_event) {
        let scenes = [
            { scene: Template.Scene, name: "Scene" }
        ];
        // start the sequence
        Template.ƒS.Progress.go(scenes);
    }
})(Template || (Template = {}));
var Template;
(function (Template) {
    async function Scene() {
        console.log("FudgeStory Template Scene starting");
        //Template umbenennen 
        let text = {
            Bronte: {
                T0001: "HIER ist Text",
                T0002: ""
            },
            RandomPerson: {
                T0001: ""
            }
        };
        await Template.ƒS.Speech.tell(Template.charaktere.bronte, text.Bronte.T0001);
    }
    Template.Scene = Scene;
})(Template || (Template = {}));
//# sourceMappingURL=Template.js.map