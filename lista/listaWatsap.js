const fs = require('fs');

// Função para ler a lista de números do arquivo
function lerListaNumeros(nomeArquivo) {
  try {
    const dados = fs.readFileSync(nomeArquivo, 'utf-8');
    return dados.split('\n').map(numero => numero.trim());
  } catch (erro) {
    console.error("Erro ao ler o arquivo:", erro.message);
    return [];
  }
}

// Lista de números lida do arquivo
const listaNumeros = lerListaNumeros('listaWatsap.txt');

// Variáveis para armazenar resultados
let numerosPrivadosValidos = 0;
let listaNumerosValidos = [];
let gruposValidos = 0;
let listaGruposValidos = [];

// Processar cada número na lista
listaNumeros.forEach(numero => {
  // Remover sufixos
  const numeroLimpo = numero.replace(/@whatsapp\.net|@g\.us/g, '');

  // Verificar se é um número válido do Brasil
  if (/^55\d{14}$/.test(numeroLimpo)) {
    // Separar entre privados e grupos
    if (numero.includes('@whatsapp.net')) {
      numerosPrivadosValidos++;
      listaNumerosValidos.push(numeroLimpo);
      console.log(`Número privado válido: ${numeroLimpo}`);
    } else if (numero.includes('@g.us')) {
      gruposValidos++;
      listaGruposValidos.push(numeroLimpo);
      console.log(`Número de grupo válido: ${numeroLimpo}`);
    }
  }
});

// Exibir resultados
console.log("Quantidade de números privados válidos:", numerosPrivadosValidos);
console.log("Lista de números privados válidos:", listaNumerosValidos);
console.log("Quantidade de grupos válidos:", gruposValidos);
console.log("Lista de grupos válidos:", listaGruposValidos);
console.log("Total de números processados:", listaNumeros.length);

// Salvar resultados em um novo arquivo
const resultados = `Quantidade de números privados válidos: ${numerosPrivadosValidos}\n` +
  `Lista de números privados válidos: ${listaNumerosValidos.join(', ')}\n` +
  `Quantidade de grupos válidos: ${gruposValidos}\n` +
  `Lista de grupos válidos: ${listaGruposValidos.join(', ')}\n` +
  `Total de números processados: ${listaNumeros.length}\n`;

fs.writeFileSync('resultados.txt', resultados);

console.log("Resultados salvos em resultados.txt");
