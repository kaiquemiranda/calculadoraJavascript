function calcula() {
    const operacao = prompt('escolha uma operação:\n 1 - soma (+)\n 2 - subtração (-)\n 3 - multiplicação (*)\n 4 - divisão real (/)\n 5 - divisão inteira (%)\n 6 - potenciação (**)   ')
    console.log(operacao);

    if (!operacao || operacao >= 7) {
        alert('operação invalida!')
        calcula();
    } else {
        let n1 = Number(prompt('insira um valor: '))
        let n2 = Number(prompt('insira outro valor: '))
        let resultado;

        function soma() {
            resultado = n1 + n2;
            alert(`${n1} + ${n2} = ${resultado}`)
            novaOperacao();
        }
        function subtracao() {
            resultado = n1 - n2;
            alert(`${n1} - ${n2} = ${resultado}`)
            novaOperacao();
        }
        function multiplicacao() {
            resultado = n1 * n2;
            alert(`${n1} X ${n2} = ${resultado}`)
            novaOperacao();
        }
        function divisaoReal() {
            resultado = n1 / n2;
            alert(`${n1} dividido ${n2} = ${resultado}`)
            novaOperacao();
        }
        function divisaoInteira() {
            resultado = n1 % n2;
            alert(`resto da divisão entre ${n1} e ${n2} = ${resultado}`)
            novaOperacao();
        } function potenciacao() {
            resultado = n1 ** n2;
            alert(`${n1} elevado ${n2} = ${resultado}`)
            novaOperacao();
        }

        function novaOperacao() {
            let opcao = prompt('deseja fazer outra operação? \n 1 - sim \n 2 - não');

            if (opcao == 1) {
                calcula();
            } else if (opcao == 2) {
                alert('ate mais!')
            } else {
                alert('digite uma opção valida')
                novaOperacao();
            }

        }

        if (operacao == 1) {
            soma();
        } else if (operacao == 2) {
            subtracao();
        } else if (operacao == 3) {
            multiplicacao();
        } else if (operacao == 4) {
            divisaoReal();
        } else if (operacao == 5) {
            divisaoInteira();
        } else if (operacao == 6) {
            potenciacao();
        }
    }

    
}
calcula();
