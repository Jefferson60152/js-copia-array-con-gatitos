# Copias de Arrays en JavaScript con Gatitos



## Introducción
En JavaScript, cuando copiamos un array de manera incorrecta, podría seguir apuntando al mismo lugar en memoria (referencia compartida), lo que puede causar efectos secundarios inesperados. 

En este repositorio veremos diferentes formas de copiar un array sin que apunten al mismo lugar en memoria. También evaluaremos la eficiencia de cada método.

---

## Métodos para copiar un array

### 1. **Spread Operator (`...`)** ✅ (Eficiente)
```js
const gatitos = ['🐱', '🐱', '🐱'];
const copiaGatitos = [...gatitos]; // Copia rápida y eficiente usando spread operator
```
**Explicación:**
- Utiliza el operador spread `...` para copiar los elementos en un nuevo array.
- Es una de las formas más eficientes.

---

### 2. **Método `slice()`** ✅ (Eficiente)
```js
const gatitos = ['🐱', '🐱', '🐱'];
const copiaGatitos = gatitos.slice(); // Crea una copia del array usando slice()
```
**Explicación:**
- `slice()` sin argumentos devuelve una copia superficial del array.
- Muy eficiente.

---

### 3. **Método `Array.from()`** ✅ (Eficiente)
```js
const gatitos = ['🐱', '🐱', '🐱'];
const copiaGatitos = Array.from(gatitos); // Convierte un array existente en una nueva copia
```
**Explicación:**
- `Array.from()` crea un nuevo array con los mismos elementos.
- Similar en eficiencia a `slice()` y `spread`.

---

### 4. **Método `concat()`** ✅ (Eficiente)
```js
const gatitos = ['🐱', '🐱', '🐱'];
const copiaGatitos = [].concat(gatitos); // Genera una copia concatenando con un array vacío
```
**Explicación:**
- `concat()` con un array vacío genera una copia del array original.
- Forma poco utilizada, pero efectiva.

---

### 5. **Método `map()`** ❌ (Menos eficiente)
```js
const gatitos = ['🐱', '🐱', '🐱'];
const copiaGatitos = gatitos.map(x => x); // Usa map(), pero no es la forma más eficiente de copiar un array
```
**Explicación:**
- `map()` crea un nuevo array transformando cada elemento.
- No es necesario para copiar un array y es menos eficiente.

---

### 6. **Método `JSON.parse(JSON.stringify())`** ❌ (Ineficiente)
```js
const gatitos = ['🐱', '🐱', '🐱'];
const copiaGatitos = JSON.parse(JSON.stringify(gatitos)); // Copia profunda, pero lenta e ineficiente
```
**Explicación:**
- Convierte el array en un string JSON y lo vuelve a parsear.
- Útil para copias profundas, pero ineficiente para arrays simples.

---

### 7. **Bucle `for` tradicional** ❌ (Ineficiente)
```js
const gatitos = ['🐱', '🐱', '🐱'];
const copiaGatitos = [];
for (let i = 0; i < gatitos.length; i++) {
  copiaGatitos[i] = gatitos[i]; // Copia manualmente cada elemento del array
}
```
**Explicación:**
- Funciona, pero es más largo y menos eficiente que `spread`, `slice()` o `Array.from()`.

---

## Conclusión
Las formas más eficientes y recomendadas para copiar un array en JavaScript son:
- `Spread Operator (...)`
- `slice()`
- `Array.from()`
- `concat()`

Evita usar `map()`, `JSON.parse(JSON.stringify())` y bucles `for` cuando solo necesitas una copia superficial.

