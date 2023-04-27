# fullstackopen-curso-ejercicios

# Fullstack Part 2-a - Renderizando una colleción, módulos

- Se utiliza map() para iterar colleciones
- Se crea modulos aparte para los componentes hijos
- Se muestra el uso del "key" cuando se itera y donde colocarlo

# Fullstack Part 2-b - Formularios

- Se utiliza el Input: 
    - Para capturar valores escritos en la etiqueta
    - El Evento del Input es el onChange
    - Se utilza el event.target.value del DOM para capturar valor
    - El value del Input debe ser el estado actual de las newNote
- Se utiliza el form:
    - El form tiene evento el "onSubmit"
    - El form se debe utilizar -> **event.preventDefault()**
    - En el debemos actualizar el state global ->  En este caso "notes"
    - Para modificar un state compuesto de array of objects podemos:
        - Utilizar el concat -> **setNotes(notes.concat(newNote))**
        - Tambien podemos usar el spread operator de un array nuevo ->  **setNotes([..notes, newNote])**
- Se utilizo el buttom:
    - El ultimo boton de un formulario es por default de tipo -> **type="submit"**
    - Debido a que es **submit** no es necesario manejarlo con su evento -> **onClick**
    - Por default lo maneja en este caso el evento el **form**