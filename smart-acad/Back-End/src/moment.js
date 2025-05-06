const moment = require('moment');

//essa função vai receber uma data de entrada por parametro, que vamos receber do objeto
function vereficarData(dataEntrada){ 

    //vereficar o tipo de dado da data
    if(typeof dataEntrada !=='string') return null;
    //se o tipo de data for diferente de string retorna nulo

    //validar a data no formato brasileiro
    const dataBR = moment(dataEntrada, 'DD/MM/YYYY', true)
    //se a data recebida encontra desse jeito e se for verdadeiro:

    //se o nosso dataEntrada é verdadeiro
    if(dataBR.isValid){ 
        return dataBR.format('YYYY-MM-DD');
        //retornar uma data no padrão yyyy-mm-dd (formatou para o americano)
    }

    //validar se a data já se encontra no formato americano correto
    //para ser salvo no banco de dados.
    const dataUSA = moment(dataEntrada, 'YYYY/MM/DD', true)
    if(dataUSA.isValid()){ 
        return dataEntrada;
    }

    //se não for nenhuma retorna ela nula
    return null;
}
module.exports = vereficarData;