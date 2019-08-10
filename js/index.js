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