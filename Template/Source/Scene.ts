namespace Template {
  export async function Scene(): ƒS.SceneReturn {
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

    await ƒS.Speech.tell(charaktere.bronte, text.Bronte.T0001);


  }
}