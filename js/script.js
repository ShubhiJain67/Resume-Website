activeLink="home-link";

function getPage(pageLink){
    document.getElementById(activeLink).classList.remove("active");
    document.getElementById(pageLink).classList.add("active");
    let pageHide=activeLink.substring(0,activeLink.lastIndexOf("-"))+"-page";
    let pageShow=pageLink.substring(0,pageLink.lastIndexOf("-"))+"-page";
    console.log(activeLink+" "+pageHide);
    console.log(pageLink+" "+pageShow);
    document.getElementById(pageHide).style.display="none";
    document.getElementById(pageShow).style.display="block";
    activeLink=pageLink;
}