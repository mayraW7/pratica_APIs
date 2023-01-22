export function op_numeral(numeral:number, operacao: string){
    switch(operacao) {
        case 'anterior': 
            return numeral -1;
        case 'proximo': 
            return numeral +1;   
    }
}