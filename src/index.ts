import express, {Request, Response} from 'express';
import { getRepositories, getUserFromGithub } from './ex01';
import { op_numeral } from './ex04/operacao';
import { reverseString } from './ex05/funcao-inverter';
import { removeVogaisString } from './ex06/filtroStrings';
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get('/', (request: Request, response: Response) => {
return response.send('OK FUNCIONOU!');
})

// -------------exercício 03------------------- 
// http://localhost:7700/contador
let contador = 0 
app.get('/contador', (request: Request, response: Response) => {
    try{
        contador++ 
        if(contador === 10){
            contador = 0
            return response.status(200).send(
              {  ok: true,
                message: `Contador chegou em 10!`});
        }else{
            return response.status(200).send(
                {  ok: true,
                  message: `Contador ${contador} `});
        }
     }catch (error: any) {
        return response.status(500).send({
        ok: false,
        message: 'Server Error',
        error: error.toString()
    });}

});
// ------------- exercício 04 ------------------- 
// http://localhost:7700/numeral

app.get('/numeral', (request: Request, response: Response) => {
    try{  
        const {numeral, operacao} = request.query;
    const resposta = op_numeral(Number(numeral), String(operacao))
    return response.status(200).send({
        ok: true,
        message: `O numeral é ${resposta}`});
     }catch (error: any) {
        return response.status(500).send({
        ok: false,
        message: 'Server Error',
        error: error.toString()
    });}
});



// ------------- exercício 05 ------------------- 

// http://localhost:7700/inverter-string
app.get('/inverter-string', (request: Request, response: Response) => {
    try{  
        const {str} = request.query;
    const resposta = reverseString(String(str))
    return response.status(200).send({
        ok: true,
        message: `O valor invertido é ${resposta.toString()}`});
     }catch (error: any) {
        return response.status(500).send({
        ok: false,
        message: 'Server Error',
        error: error.toString()
    });}
});



// ------------- exercício 06 ------------------- 
    let list: any[] = []; 
// http://localhost:7700/remover-vogais
app.get('/remover-vogais', (request: Request, response: Response) => {
    try{  
        const {valor} = request.query;
        let result = removeVogaisString(String(valor));
        list.push(result);

        return response.status(200).send({
        ok: true,
        message: `As letras são ${list}`
    });
     }catch (error: any) {
        return response.status(500).send({
        ok: false,
        message: 'Server Error',
        error: error.toString()
    });}
});


app.listen(7700, () => console.log("Servidor iniciado"));

// ---------  ex01  -------------------
getUserFromGithub('djunior97');
getUserFromGithub('djunioriqdivqv97');
//
getRepositories('marcelo-growdev/scrapbook-es6');
getRepositories('marcelo-growdev/qdbqqbqwn');
//

