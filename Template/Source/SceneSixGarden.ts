
public class FormatterMain {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		//Names und Dialog = 3

		String userInput; 
		String test = "Bronte: Vielleicht sind hier ja Spuren. Mhm.. Ja… Mhm… Autsch! Blöde Dornen! Oh hier! Tatsache sie führen in den Garten. Maire: Hinterher!"; 
		//formatVn(userInput);
		formatVnTest(test);
	}
	
	private static void formatVnTest(String input) {
		String[] names;
		String[] dialog;
		int timerNames = 1; 
		int dialogTimer = 0; 
		
		String[] spliceInput = input.split("((?<=:))");
		names = new String[spliceInput.length -1];
		dialog = new String[spliceInput.length -1];
		
		names[0] = spliceInput[0];
		
		//Namen
		for(int i = 1; i < spliceInput.length-1; i++) {
			String[] lastWord = spliceInput[i].split(" ");
			names[timerNames] = lastWord[lastWord.length-1];
			timerNames++; 
		}

		//Dialog
		for(int i = 1; i < spliceInput.length; i++) {
			dialog[dialogTimer] = spliceInput[i];
			dialogTimer++;
		}
		
		//clean : from names and names+: from other 
		for(int i = 0; i<names.length; i++) {
			names[i] = names[i].substring(0, names[i].length()-1); 
			
			//letzter Dialog hat es nicht
			if(i < names.length -1) {
				String target = names[i+1];
				dialog[i] = dialog[i].replace(target, "");	
			}
		}
		fillInVNForm(names, dialog); 
	}
	
	private static void fillInVNForm(String[] names, String[] dialog) {
		int i = 0; 
		for(String name : names) {
			System.out.println("await ƒS.Speech.tell(charaktere." + name.toLowerCase() + ", \"" + dialog[i] + "\");");
			i++;
		}	
	}
}
