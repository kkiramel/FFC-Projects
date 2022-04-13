window.onload = () => {
    let contentNav = document.querySelectorAll("#content-nav a");
    for(let x = 0; x < 2; x++){
        contentNav[x].addEventListener("click", (e)=>{
            let contentLink = e.target;
            contentLink.style.color = "#FE327B";
            contentLink.style.borderBottom = "#FE327B 3px solid";
            let divId = contentLink.getAttribute("href");
            document.querySelector(divId).style.display = "flex";
            let y = Number(!x);
            contentNav[y].style.color = "#000";
            contentNav[y].style.borderBottom = "none";
            divId = contentNav[y].getAttribute("href");
            document.querySelector(divId).style.display = "none";
        });
    }
    let currentImage = 1;
    let nextBtn = document.querySelector("#next");
    let prevBtn = document.querySelector("#previous");
    nextBtn.addEventListener("click", () => {
        document.querySelector(`#content-photos :nth-child(${currentImage})`).style.display = "none";
        if(currentImage === 12)
            currentImage = 1;
        else 
            currentImage++;
        document.querySelector(`#content-photos :nth-child(${currentImage})`).style.display = "block";
    });
    prevBtn.addEventListener("click", () => {
        document.querySelector(`#content-photos :nth-child(${currentImage})`).style.display = "none";
        if(currentImage === 1)
            currentImage = 12;
        else 
            currentImage--;
        document.querySelector(`#content-photos :nth-child(${currentImage})`).style.display = "block";
    });
    document.querySelector("#license-text").innerHTML = new Date().getFullYear() + " " +document.querySelector(`#license-text`).innerHTML;
};