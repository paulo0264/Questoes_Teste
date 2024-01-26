// Função para verificar se um número é bonito
function ehBonito(numero) {
    // Converte o número para uma string para facilitar a manipulação dos dígitos
    const strNumero = numero.toString();
    
    // Verifica se o número contém o dígito 8 e não contém o dígito 3
    return strNumero.includes('8') && !strNumero.includes('3');
}

// Função para contar números bonitos no intervalo [inicio, fim]
function contarNumerosBonitos(inicio, fim) {
    let contador = 0;

    // Itera sobre todos os números no intervalo
    for (let i = inicio; i <= fim; i++) {
        // Se o número for bonito, incrementa o contador
        if (ehBonito(i)) {
            contador++;
        }
    }

    // Retorna o total de números bonitos encontrados
    return contador;
}

// Definindo os extremos do intervalo
const inicioIntervalo = 18907;
const fimIntervalo = 33306;

// Chamando a função para contar números bonitos no intervalo dado
const totalBonitos = contarNumerosBonitos(inicioIntervalo, fimIntervalo);

// Exibindo o resultado no console
console.log(`O total de números bonitos no intervalo [${inicioIntervalo}, ${fimIntervalo}] é: ${totalBonitos}`);
