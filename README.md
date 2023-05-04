# fullstackopen-curso-ejercicios

# Fullstack Part 2-a - Renderizando una colleción, módulos

- Se utiliza map() para iterar colleciones
- Se crea modulos aparte para los componentes hijos
- Se muestra el uso del "key" cuando se itera y donde colocarlo

# Fullstack Part 2-b - Formularios

- Se utiliza el **Input**: 
    - Para capturar valores escritos en la etiqueta
    - El Evento del Input es el **onChange**
    - Se utilza el event.target.value del DOM para capturar valor
    - El value del Input debe ser el estado actual de las newNote
- Se utiliza el **Form**:
    - El form tiene evento el **"onSubmit"**
    - El form se debe utilizar -> **event.preventDefault()**
    - En el debemos actualizar el state global ->  En este caso "notes"
    - Para modificar un state compuesto de array of objects podemos:
        - Utilizar el concat -> **setNotes(notes.concat(newNote))**
        - Tambien podemos usar el spread operator de un array nuevo ->  **setNotes([..notes, newNote])**
- Se utilizo el **buttom**:
    - El ultimo boton de un formulario es por default de tipo -> **type="submit"**
    - Debido a que es **submit** no es necesario manejarlo con su evento -> **onClick**
    - Por default lo maneja en este caso el evento el **form**

# Fullstack Part 2-c - Obteniendo datos del servidor (00:00 - 24:22)

- Utilizamos esta web como una fake api **https://jsonplaceholder.typicode.com/**
- Se utiliza **axios**
- Se Utiliza el hooks (12:24) **useEffect**:
    - Es una función que se ejecuta cada vez que se renderiza nuestro componente
    - El segundo argumento del **useEffect** va determinar cuando se va renderizar:
        - Si el segundo argumento es vacio **''** se ejecuta cada vez que se renderice algo la aplicación
        - Si se coloca el **[]** significa que se ejecutara una vez, es ideal para actualizar 
        los states iniciales de una peticion **fetch/axios**
        - Si el segundo argumento es un state **[newNotes]** cada vez que se modifica ese estado se 
         va ejecutar el **useEffect**

```bash

//Caso #1

useEffect(() =>{
  
}, )

```


```bash

//Caso #2

useEffect(() =>{
  
}, [])

```


```bash

//Caso #3

useEffect(() =>{
  
}, [newNotes])

```