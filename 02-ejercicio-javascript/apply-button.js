const jobslist = document.querySelector('.job-list');

jobslist?.addEventListener('click', (ev) => {
    const clickedElement = ev.target;
    if (clickedElement.classList.contains('apply-button')) {
        clickedElement.disabled = true;
        clickedElement.textContent = '¡Aplicado!';
        clickedElement.classList.add('is-applied');
    }
});

