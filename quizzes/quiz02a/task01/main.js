// your function here
function changeClass(theme) {
    const body = document.body;
    body.className = theme;
 }
 if(theme="body"){
    document.getElementById("darkMode").addEventListener("click", () => changeClass("dark-mode"));

 }else if(theme = "dark-mode"){
    document.getElementById("darkMode").addEventListener("click", () => changeClass("body"));

 }

 
