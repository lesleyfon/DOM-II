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
let dragged = document.querySelectorAll('.drop-zone');

dragged.forEach(dragItem=>{
    //event fired on dragable item 
    dragItem.addEventListener('drag', function(e){
        e.preventDefault()
    }, false);
    
    dragItem.addEventListener('dragstart', e=>{
       dragItem = e.target;
        e.target.style.opacity = 0.5;
    }, false);
    
    dragItem.addEventListener('dragend', e=>{
        e.target.style.opacity = '';
    }, false);
    
    dragItem.addEventListener('dragover', e=>{
        e.preventDefault();
    }, false);
    
    dragItem.addEventListener('dragenter', e =>{
        e.preventDefault()
        if(e.target.className = 'drop-zone'){
            e.target.style.background = 'grey';
        }
    }, false);
    
    dragItem.addEventListener('dragleave', e=>{
        e.preventDefault()
        if (event.target.className == "dropzone") {
            event.target.style.background = "";
        }
    }, false);
    
    
    dragItem.addEventListener('drop', e=>{
        e.stopPropagation();
        let textContent = dragItem;

        if(e.target.className ==='drop-zone'){
            e.target.style = '';
            console.log(dragItem)
            console.log(e.target)
            dragItem.parentNode.removeChild(dragItem);
            e.target.appendChild(dragItem);

        }
    }, false)
    
})