window.onload = function() {
    let worksArticle = document.querySelectorAll(".works__grid article");
    let worksNum = worksArticle.length;
    for(let x = 0; x < worksNum; x++){
        worksArticle[x].addEventListener("mouseover", (e)=>{
            let showDescription = e.target.closest("article");
            showDescription.querySelector(".works__figcaption").style.zIndex = 3;
            showDescription.querySelector("h3").style.textDecoration = "underline";
            showDescription.querySelector(".works_description").style.opacity = 1;
        });
        worksArticle[x].addEventListener("mouseout", (e)=>{
            let hideDescription = e.target.closest("article");
            hideDescription.querySelector(".works__figcaption").style.zIndex = 1;
            hideDescription.querySelector("h3").style.textDecoration = "none";
            hideDescription.querySelector(".works_description").style.opacity = 0;
        });
    }
        
};