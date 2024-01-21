let inputBox = document.getElementById("textForSearch");
let btn = document.getElementById("btn");
let para = document.getElementById("paragraph");



function search()
{
    let textToSearch = inputBox.value;
    textToSearch = textToSearch.replace(/[.*+?^${}()|[\]\\]/g,"\\%&");
    let pattern = new RegExp(`${textToSearch}`,"gi");
    para.innerHTML = para.textContent.replace(pattern,match =>`<mark>${match}</mark>`)
}

btn.addEventListener("click",()=>{
    search();
})