
const bg = document.querySelector("body");
const num = document.querySelector('h2');
bg.addEventListener("click",change(),false); 

function change(){
  
function hexnum() {
        let result = '#'
        const hex = [1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
        for(let i=0; i<6; i++){
            
            let random = Math.floor(Math.random() * hex.length);
            result = result + hex[random];
            
        }
        return result;
        }
    
        let bodyTag = document.getElementById("body");
        bodyTag.style.backgroundColor = hexnum();

        num.innerHTML = hexnum();
    }




/*function number(){
const hex = [1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
for(let i=0; i<6; i++){
    let result = '#'
    let random = Math.floor(Math.random() * hex.length);
    result = result + hex[random];
}
return result;
}
*/
