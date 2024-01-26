interface MeuObjeto {
    nome: string;
    idade: number;
    cidade: string;
  }
  
  function findKey<T extends Record<string, any>, K extends keyof T>(obj: T, key: K): T | null {
    return obj.hasOwnProperty(key) ? obj : null;
  }
  
  const objetoExemplo: MeuObjeto = {
    nome: "Alice",
    idade: 25,
    cidade: "Wonderland",
  };
  
  const result1 = findKey(objetoExemplo, "nome");  // Retorna o objetoExemplo, pois a chave "nome" existe
  const result2 = findKey(objetoExemplo, "email"); // Retorna null, pois a chave "email" não existe
  
  console.log(result1);
  console.log(result2);
  