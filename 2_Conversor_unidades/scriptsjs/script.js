//Selecionar os elementos
const inputElement = document.querySelector('#input');
const fromElement = document.querySelector('#from');
const toElement = document.querySelector('#to');
const outputElement = document.querySelector('#output');
const convertButton = document.querySelector('#convert-btn');
const messageElement = document.querySelector('#message');

//Função de converter para unidades
function convert() {
    // Obter os valores das unidades de entrada e saída
    const inputValue = parseFloat(inputElement.value);
    const fromValue = fromElement.value;
    const toValue = toElement.value;    

    // Verificar se o valor de entrada é um número válido
    if (isNaN(inputValue)) {
        messageElement.textContent = 'Por favor, insira um número.';
        outputElement.value = '';
        return;
    }

     // Verificar se as unidades de entrada e saída são iguais
    if (fromValue === toValue) {
        outputElement.value = inputElement.value;
        messageElement.textContent = 'Os números estão na mesma medida.';
        return;
    }

    // Converter o valor de entrada para metros uniformizando a medida    
    let meters;
    switch (fromValue) {
        case 'm':
            meters = inputElement.value;
            break;
        case 'km':
            meters = inputElement.value * 1000;
            break;
        case 'cm':
            meters = inputElement.value / 100;
            break;
        case 'mm':
            meters = inputElement.value / 1000;
            break;
        default:
            messageElement.textContent = 'Unidade de entrada inválida.';
            return;
    }

    //Converter metros para unidade de saída
    let result;
    switch (toValue) {
        case 'm':
            result = meters;
            break;
        case 'km':
            result = meters / 1000;
            break;
        case 'cm':
            result = meters * 100;
            break;
        case 'mm':
            result = meters * 1000;
            break;
        default:
            messageElement.textContent = 'Unidade de saída inválida.';
            return;
    }

    //Verificar conteúdo das variáveis
    console.log(fromValue, toValue);
    console.log(meters, result);

    // Exibir o resultado na caixa de saída
    outputElement.value = result.toFixed(2);

    //Para converter para o padrão de número brasileiro
    // var valueConvertido = parseFloat(result);
    // outputElement.value = valueConvertido.toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 });

    /// Exibir resultado da mensagem
    const fromLabel = fromElement.options[fromElement.selectedIndex].text;
    const toLabel = toElement.options[toElement.selectedIndex].text;
    
    const message = `${inputElement.value} ${fromLabel} equivalem a ${result} ${toLabel}`;
    messageElement.textContent = message;
}

convertButton.addEventListener("click", convert);