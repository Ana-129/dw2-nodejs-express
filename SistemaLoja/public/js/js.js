const date = new Date();
const day = date.getDate();
const month = date.getMonth() + 1;
const year = date.getFullYear();
const currentDate = document.querySelector(".currentDate");
currentDate.innerHTML = `Ùltimo acesso ao sistema. Hoje <strong>${day}/${month}/${year}</strong>.`;
