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