var cell = document.querySelectorAll("td")
var restart = document.querySelector("#Restart")




// restart button 
function clearBoard(){
    for (let i = 0; i < cell.length; i++) {
        cell[i].textContent = '';        
    }
}

restart.addEventListener("click",clearBoard);




// change cell content
function changeContent() {
    if(this.textContent ==''){
        this.textContent = 'x'
    }
    else if(this.textContent == 'x'){
        this.textContent = 'o'
    }
    else{
        this.textContent = ''
    }
}

for (let i = 0; i < cell.length; i++) {
    cell[i].addEventListener("click",changeContent);
}