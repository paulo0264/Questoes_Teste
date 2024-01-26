function formatarCpfCnpj(numero) {
    var cpfRegex = /^(\d{3})(\d{3})(\d{3})(\d{2})$/;
    var cnpjRegex = /^(\d{2})(\d{3})(\d{3})(\d{4})(\d{2})$/;
    var cpfFormatado = numero.replace(cpfRegex, '$1.$2.$3-$4');
    var cnpjFormatado = numero.replace(cnpjRegex, '$1.$2.$3/$4-$5');
    if (cpfFormatado.length === 14) {
        return cpfFormatado;
    }
    else if (cnpjFormatado.length === 18) {
        return cnpjFormatado;
    }
    else {
        return '';
    }
}
// Exemplos de uso:
console.log(formatarCpfCnpj('12345678901')); // Saída: '123.456.789-01'
console.log(formatarCpfCnpj('12345678901234')); // Saída: '12.345.678/9012-34'
console.log(formatarCpfCnpj('123456')); // Saída: ''
