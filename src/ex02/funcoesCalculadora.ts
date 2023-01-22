
export function calcular(operacao: string, valorA: number, valorB: number){
    switch(operacao) {
        case 'somar': 
            return valorA + valorB;
        case 'subtrair': 
            return valorA - valorB;   
        case 'multiplicar': 
            return valorA * valorB;
        case 'dividir': 
            return valorA / valorB;     
    }
}