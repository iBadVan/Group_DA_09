document.addEventListener("DOMContentLoaded", () => {
  const dropdown = document.getElementById("dropdownMenu");

  dropdown.addEventListener("show.bs.dropdown", () => {
    console.log(" Menú desplegable abierto");
  });

  dropdown.addEventListener("hide.bs.dropdown", () => {
    console.log(" Menú desplegable cerrado");
  });
});
