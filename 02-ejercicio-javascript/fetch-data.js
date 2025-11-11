
const jobListcontainer = document.querySelector('.job-list');
fetch("./data.json").then((response)=>{
    return response.json();
}).
then((job)=>{
    /* 
    Creamos un DocumentFragment para mejorar el rendimiento.
    En lugar de agregar cada trabajo directamente al DOM (lo que haría que el navegador redibuje la página múltiples veces), guardamos todos los elementos en memoria primero. Al final, agregamos todo de una sola vez.
    
    Es como preparar todos los platos en la cocina antes de llevarlos a la mesa, en vez de hacer un viaje por cada plato, llevamos todos juntos, y es mejor :)

    Esto viene muy bien cuando tenemos muchos elementos que agregar al DOM.
    */
   const documentFragment = document.createDocumentFragment();

    job.forEach((jobData)=>{
        const jobItem = document.createElement('article');
        jobItem.classList.add('job-item');
         jobItem.dataset.titulo = jobData.titulo;
        jobItem.dataset.ubicacion = jobData.data.modalidad;
        jobItem.dataset.tecnologia = jobData.data.technology;
        jobItem.dataset.nivel = jobData.data.nivel;
        jobItem.innerHTML = `
            <div>
                <h3 class="job-title">${jobData.titulo}</h3>
                <smal class="company-name">${jobData.empresa} | ${jobData.ubicacion}</smal>
                <p class="job-description">${jobData.descripcion}</p>
            </div>
            <div class="job-actions">
                <button class="btn apply-button" aria-label="Aplicar a ${jobData.titulo} en ${jobData.empresa}">Aplicar</button>
            </div>
        `;
        documentFragment.appendChild(jobItem);
    });

    

    jobListcontainer?.appendChild(documentFragment);
});