const filter = document.querySelector('.filters');
const search = document.querySelector('#empleos-search-input');
search?.addEventListener('input', (ev) => {
    const searchTerm = ev.target.value.toLowerCase();
    const jobs = document.querySelectorAll('.job-item');

    jobs.forEach((job) => {
        const title = job.getAttribute('data-titulo').toLowerCase();
        const isShown = title.includes(searchTerm);
        job.classList.toggle('is-hidden', !isShown);
    });
});

filter?.addEventListener('change', () => {
    const filters= {
        tecnologia: document.querySelector('#filter-job-tech').value,
        ubicacion: document.querySelector('#filter-location').value,
        experiencia: document.querySelector('#filter-experience-level').value,
        };

    const jobs = document.querySelectorAll('.job-item');

    jobs.forEach((job) => {
            const jobData = {
            tecnologia: job.getAttribute('data-tecnologia'),
            ubicacion: job.getAttribute('data-ubicacion'),
            experiencia: job.getAttribute('data-nivel'),
            };
        const tecnologiaMatch = filters.tecnologia === '' || jobData.tecnologia.split(',').includes(filters.tecnologia);
        const ubicacionMatch = filters.ubicacion === '' || filters.ubicacion === jobData.ubicacion;
        const experienciaMatch = filters.experiencia === '' || filters.experiencia === jobData.experiencia;
       
        const isShown = tecnologiaMatch && ubicacionMatch && experienciaMatch;
        job.classList.toggle('is-hidden', !isShown);
    });
});