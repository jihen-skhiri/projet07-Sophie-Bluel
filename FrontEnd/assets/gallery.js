
const reponse = await fetch('http://localhost:5678/api/works')
const projects = await reponse.json();
/************Create Gallery************ */
function AfficheGallery(projects){ 
for(let i=0; i<projects.length; i++) {
    const sectionProjets = document.querySelector(".gallery")
    const figure = document.createElement("figure"); 
    const image = document.createElement("img");
    image.src = projects[i].imageUrl;
    image.alt =projects[i].title;
    figure.appendChild(image);
    const figcaption = document.createElement("figcaption");
    figcaption.innerHTML = projects[i].title;
    figure.appendChild(figcaption);
    sectionProjets.appendChild(figure);
}
}
AfficheGallery(projects)

/*********Create Filter&Buttons******* */
filter = document.querySelector(".filter");
