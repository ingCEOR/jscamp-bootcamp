# Ejercicio HTML y CSS

- [Diseño](https://stitch.withgoogle.com/projects/7508115667617706440)
- [Ejercicio explicado](https://jscamp.dev/html-y-css/ejercicios-cursos)

Replica la página de "Resultados de Búsqueda" en el archivo `empleos.html`.

Ten en cuenta:

- Debes crear la navegación entre el archivo `index.html` a `empleos.html`
- Investiga e implementa el HTML adecuado para los inputs y la sección de resultados de búsqueda.
- Trabaja en el modo responsive con lo que hemos aprendido en el curso
- NO añadas nada de JavaScript en este ejercicio

---

## Corrección del Ejercicio

Hola! Como estas? Enhorabuena por cómo hiciste el ejercicio!
Cumpliste con todos los puntos de una manera super buena y organizada

Ya que el ejercicio estaba muy bien, quisimos hacer unas mejoras a nivel de semántica y accesibilidad. El primer punto creemos que si es importante de cara al resto de ejercicios y cómo estructures las páginas en un futuro. El segundo punto si es un Plus que quisimos dar ya que vimos un muy buen nivel 🙏

Trabajamos sobre todo con `aria-label` y `aria-hidden`. El primero se usa para dar nombre a un elemento que no tiene contenido semanticamente claro (como un botón con un SVG, si ves el SVG podrías entender de qué se trata, pero... si no estas viendo el botón?). Y el segundo se usa para ocultar un elemento que no es relevante a nivel semántico pero si visual, por ejemplo el icon de search en el input de búsqueda.

Hubieron cambios en el CSS, pero más bien fue para no romper mucho los estilos a la hora de modificar la estructura.

### A nivel de secciones:

Dividimos el documento en dos secciones, la de búsqueda y la de resultados.

La sección de búsqueda tiene un formulario con un input de búsqueda y un select para filtrar por tecnología, ubicación y nivel de experiencia.

La sección de resultados tiene un listado de los resultados de la búsqueda.

Cada resultado tiene un título, una empresa, una ubicación y un nivel de experiencia. Se usó un `article` porque es un elemento que, si lo sacamos fuera de la sección de resultados, tiene sentido por si mismo.

La paginación se implementó con un `nav` que contiene un `ul` con los botones numerados. Esto es porque su contenido más que ser una sección, es un apartado de navegación que te permite navegar entre los resultados de la búsqueda.

### A nivel de accesibilidad:

Puedes ver aquí un botón dentro del inspector de código que te permite ver como se ve el documento desde el punto de vista de un lector de pantalla.

<img width="1062" height="1258" alt="CleanShot 2025-10-23 at 18 21 17@2x" src="https://github.com/user-attachments/assets/2b23123f-2526-4d84-a15d-bdc61acfeb1f" />

La página no está 100% igual al de la imagen, pero ese no es el objetivo del ejercicio, sino que entiendan cómo se estructura y cómo se estila cada elemento, sin tener que ser pixel perfect.