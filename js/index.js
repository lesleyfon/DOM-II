// Your code goes here

// select signup button
const signUpBtn = document.querySelectorAll('.destination .btn');
// console.log(signUpBtn);
signUpBtn.forEach(btn=>{
    btn.style.margin = '0 auto'
    btn.addEventListener('mouseover', e =>{
        let destination = e.path[1];
        destination.classList.toggle('destinationMouseOver')
    })
    btn.addEventListener('mouseout', e =>{
        let destination = e.path[1];
        destination.classList.toggle('destinationMouseOver')
    })
})
//

window.addEventListener('scroll', e=>{
    // console.log(e.path[0].images[0].y)
    let header = document.querySelector('header');
    if(e.path[0].images[0].y <= 90){
        header = document.querySelector('header');
        header.classList.add("scrollActive")
    } else if(e.path[0].images[0].y > 90){
        header.classList.remove("scrollActive")
    }
})

document.addEventListener('keypress', e=>{
    alert(`You pressed the ${e.key} keys`)
})

// drag event 
const contentSection = document.querySelectorAll('.content-section');



function drop(e){
    e.preventDefault()
    let dropData = e.dataTransfer.getData('id');
}

function drag(e){
    e.preventDefault()

}


contentSection.forEach(cs=>{
    // Allow drop
    cs.addEventListener('dragover', e=>{
        e.preventDefault();
    })
    // handles the drop
    cs.addEventListener('drop', drop)

    // handle drag
    cs.addEventListener('dragstart', drag)
    // console.log(cs)
})   

