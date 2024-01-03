const openModalBtnSkills = document.getElementById('skillsBtn');
const openModalBtnProjects = document.getElementById('projectsBtn');
const openModalBtnContact = document.getElementById('contactBtn');

const closeModalBtnSkills = document.getElementById('closeModalBtnSkills');
const closeModalBtnProjects = document.getElementById('closeModalBtnProjects');
const closeModalBtnContact = document.getElementById('closeModalBtnContact');

const modalSkills = document.getElementById('modalSkills');
const modalProjects = document.getElementById('modalProjects');
const modalContact = document.getElementById('modalContact');

openModalBtnSkills.addEventListener("click", () => {
    modalSkills.showModal();
})
closeModalBtnSkills.addEventListener("click", () => {
    modalSkills.close();
})

openModalBtnProjects.addEventListener("click", () => {
    modalProjects.showModal();
})

closeModalBtnProjects.addEventListener("click", () => {
    modalProjects.close();
})


openModalBtnContact.addEventListener("click", () => {
    modalContact.showModal();
})

closeModalBtnContact.addEventListener("click", () => {
    modalContact.close();
})