
//Esta regex que irá remover inclusive vogais acentuadas:
//                       /[aeiouà-ú]/gi
// Flags:
// g -> global. Busca por todas as ocorrências.
// i -> case insensitive. Não faz distinção entre maiúsculas e minúsculas.

export function removeVogaisString( remove: any ){
   return remove.replace(/[aeiouà-ú]/gi,'');
 }
