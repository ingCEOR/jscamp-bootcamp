
const jobListcontainer = document.querySelector('.job-list');
fetch("./data.json").then((response)=>{
    return response.json();
}).
then((job)=>{
   
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
        jobListcontainer?.appendChild(jobItem);
    });
});