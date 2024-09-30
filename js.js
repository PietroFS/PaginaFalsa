/* 
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/ClientSide/javascript.js to edit this template
 */


 function formatCPF(cpf) {
            // Remove todos os caracteres que não sejam números
            cpf = cpf.replace(/\D/g, '');

            // Adiciona os pontos e o traço na posição correta
            cpf = cpf.replace(/(\d{3})(\d)/, "$1.$2");
            cpf = cpf.replace(/(\d{3})(\d)/, "$1.$2");
            cpf = cpf.replace(/(\d{3})(\d{1,2})$/, "$1-$2");

            return cpf;
        }

        function maskCPF(input) {
            input.value = formatCPF(input.value);
        }
        
function formatFone(Fone) {
    // Remove todos os caracteres que não sejam números
    Fone = Fone.replace(/\D/g, '');

    // Adiciona os parênteses no DDD, espaço após o DDD e traço no número
    Fone = Fone.replace(/(\d{2})(\d)/, "($1) $2");
    Fone = Fone.replace(/(\d{5})(\d{4})$/, "$1-$2");

    return Fone;
}

function maskFone(input) {
    input.value = formatFone(input.value);
}

 function formatCardNumber(cardNumber) {
        cardNumber = cardNumber.replace(/\D/g, '');
        cardNumber = cardNumber.replace(/(\d{4})(?=\d)/g, "$1 ");
        return cardNumber;
    }

    function maskCardNumber(input) {
        input.value = formatCardNumber(input.value);
    }
    
function formatData(date) {
        date = date.replace(/\D/g, '');
        if (date.length > 2) {
            date = date.replace(/(\d{2})(\d)/, "$1/$2");
        }
        return date;
    }

    function maskData(input) {
        input.value = formatData(input.value);
    }
    
function formatCVV(CVV) {
    // Remove todos os caracteres que não sejam números
    CVV = CVV.replace(/\D/g, '');

    return CVV;
}

function maskCVV(input) {
    input.value = formatCVV(input.value);
}

/*================================= AVISO NA TELA ==========================*/

document.getElementById('layoutFake').addEventListener(
        'submit', function () {
            event.preventDefault();
            
            const nome = document.layoutFake.nome.value;
            const valor = document.layoutFake.valor.value;
            
            alert("Muito bem " + nome +"! " + "Seu pagamento de " + valor + " reais foi realizado com sucesso! Você deve receber o valor em torno de no máximo 30 minutos.");     });

        
        