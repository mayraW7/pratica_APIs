import { validateHeaderName } from "http";


export function reverseString(str: string) {
    // Passo 1. Use o método split() para retornar um novo array
    var splitString = str.split(""); // var splitString = "hello".split("");
    // ["h", "e", "l", "l", "o"]
 
    // Passo 2. Use o método reverse() para inverter o array recém-criado
    var reverseArray = splitString.reverse(); // var reverseArray = ["h", "e", "l", "l", "o"].reverse();
    // ["o", "l", "l", "e", "h"]
 
    // Passo 3. Use o método join() para unir todos os elementos do array em uma string
    var joinArray = reverseArray.join(""); // var joinArray = ["o", "l", "l", "e", "h"].join("");
    // "olleh"
    
    // Passo 4. Retorne a string invertida
    return joinArray; // "olleh"
}

