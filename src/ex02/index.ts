import express, {Request, Response} from 'express';
import { calcular } from './funcoesCalculadora';

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get('/', (request: Request, response: Response) => {
return response.send('OK FUNCIONOU A API do exercício 02!');
})

app.get('/calculadora', (request: Request, response: Response) => {
    try{
        const {operacao, valorA, valorB} = request.query;
        const resposta = calcular(String(operacao), Number(valorA), Number(valorB))
        return response.status(200).send({
            ok: true,
            message: `O resultado é ${resposta}`});

    }catch (error: any) {
        return response.status(500).send({
        ok: false,
        message: error,
    });
}

})

app.listen(7007, () => console.log("Servidor iniciado na porta 7007"));

//                          -----------SOMAR----------------
//  http://localhost:7007/calculadora?operacao=somar&valorA=7&valorB=13

//                        -----------SUBTRAIR---------------
//  http://localhost:7007/calculadora?operacao=subtrair&valorA=30&valorB=13

//                      -----------MULTIPLICAR--------------
//  http://localhost:7007/calculadora?operacao=multiplicar&valorA=8&valorB=8

//                         -----------DIVIDIR--------------
//  http://localhost:7007/calculadora?operacao=dividir&valorA=120&valorB=10
