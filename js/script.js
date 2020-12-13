activeLink="home-link";

function getPage(pageLink){
    let pageHide=activeLink.substring(0,activeLink.lastIndexOf("-"))+"-page";
    let pageShow=pageLink.substring(0,pageLink.lastIndexOf("-"))+"-page";
    // console.log(activeLink+" "+pageHide);
    // console.log(pageLink+" "+pageShow);
    document.getElementById(activeLink).classList.remove("active");
    document.getElementById(pageLink).classList.add("active");
    document.getElementById(pageHide).style.display="none";
    document.getElementById(pageShow).style.display="block";
    activeLink=pageLink;
}

activeProj="all-link";

function getProject(newProj){
    document.getElementById(activeProj).classList.remove("active");
    document.getElementById(newProj).classList.add("active");
    activeProj=newProj;
    filter(newProj);
}

function filter(proj){
    let currproj=proj.substring(0,proj.lastIndexOf("-"))+"-proj";
    let allproj=document.getElementsByClassName("all-proj");
    console.log(currproj+" "+allproj);
    for(let i=0;i<allproj.length;i++){
        if(allproj[i].classList.contains(currproj)){
            allproj[i].style.display="block";
        }else{
            allproj[i].style.display="none";
        }
    }
}