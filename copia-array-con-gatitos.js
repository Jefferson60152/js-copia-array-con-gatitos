// Métodos eficientes

// Spread Operator: método más simple y rápido
const original1 = ['🐱', '🐶', '🐭'];
const copia1 = [...original1];

// slice(): corta el array y devuelve una copia
const original2 = ['🐱', '🐶', '🐭'];
const copia2 = original2.slice();

// Array.from(): crea un nuevo array desde otro
const original3 = ['🐱', '🐶', '🐭'];
const copia3 = Array.from(original3);

// concat(): une arrays, en este caso con un array vacío
const original4 = ['🐱', '🐶', '🐭'];
const copia4 = [].concat(original4);

// 🔹 Métodos menos eficientes

// map(): crea una copia, pero innecesario si no transformamos los datos
const original5 = ['🐱', '🐶', '🐭'];
const copia5 = original5.map(x => x);

// JSON.parse(JSON.stringify()): crea una copia profunda, pero es lento
const original6 = ['🐱', '🐶', '🐭'];
const copia6 = JSON.parse(JSON.stringify(original6));

// Bucle for: funcional, pero poco eficiente en comparación con otros métodos
const original7 = ['🐱', '🐶', '🐭'];
const copia7 = [];
for (let i = 0; i < original7.length; i++) {
    copia7[i] = original7[i];
}

console.log("practicando")