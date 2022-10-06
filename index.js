const container= document.querySelector('.container')
//created div using createElement
//added the class .color to it
//then to the container we used appendchild to generate the colorboxes
//first we had manually done 6 boxes in html
//later we deleted it
for(let i=0; i<30;i++){
    const newContainer = document.createElement('div')
    newContainer.classList.add('color')
    container.appendChild(newContainer)
}
function generatRandom(){
    const chars= '123456789abcdef'
    let color=''
    for(let i=0; i< 6;i++){
        let random= Math.floor(Math.random()* chars.length)
        color += chars.substring(random, random + 1)
    }
    return '#' + color
}   
generatRandom()

//selected all the conatiners with .color classes
const allContainer = document.querySelectorAll('.color')
console.log(allContainer)
//applied foreach for all the conatiners 
function colorGenerator(){
    allContainer.forEach((container)=>{
        const colorCode= generatRandom()
        container.style.backgroundColor = colorCode;
        container.innerText= colorCode
    })
}
colorGenerator()