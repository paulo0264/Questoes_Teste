function findKey(obj, key) {
    return obj.hasOwnProperty(key) ? obj : null;
}
var objetoExemplo = {
    nome: "Alice",
    idade: 25,
    cidade: "Wonderland",
};
var result1 = findKey(objetoExemplo, "nome"); // Retorna o objetoExemplo, pois a chave "nome" existe
var result2 = findKey(objetoExemplo, "email"); // Retorna null, pois a chave "email" não existe
console.log(result1);
console.log(result2);
