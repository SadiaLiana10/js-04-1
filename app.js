let parent = document.querySelector("#parent");
let child = document.querySelector(".child");


window.addEventListener(`scroll`, function(){
    let height = document.documentElement.scrollHeight;
    let clientheight = document.documentElement.clientHeight;
    let fromtop = document.documentElement.scrollTop;
    let subheight = height - clientheight;
    let result = Math.round(fromtop * 100 / subheight);
    parent.style.background = `conic-gradient(#e67e22 ${result}% , #2c3e50 ${result}%)` ; 
    child.innerHTML = result;

    // console.log(result);
    
})