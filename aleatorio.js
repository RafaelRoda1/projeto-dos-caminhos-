// Lista de nomes para personalizar a narrativa
export const nomes = ["Gabriel", "Sophia", "Lucas", "Isabela", "Mateus", "Beatriz", "Mariana"];

// Frases de impacto aleatórias para o final da reflexão
export const afirmacoesAleatorias = [
  "Lembre-se: pequenas atitudes geram grandes transformações.",
  "O futuro do planeta é construído por nossas escolhas diárias.",
  "Preservar o meio ambiente é garantir a nossa própria existência.",
  "Cada passo em direção à sustentabilidade conta!"
];

// Função que sorteia um elemento de uma lista
export function aleatorio(lista) {
  const indiceAleatorio = Math.floor(Math.random() * lista.length);
  return lista[indiceAleatorio];
}
