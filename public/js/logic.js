const saveButton = document.getElementById('save-bttn');
const moveableImage = document.querySelector('.scroll-Pictures');
const targetArea = document.getElementById('saveshirt');

//save information from save button click as an object
saveButton.addEventListener('click', function(event) {
    // Get the data you want to save (for example, from an input field)

    const dataToSave = { 
        outfit:'',
        shirtId: moveableImage.getAttribute('data-shirt-id'),
        shirtImg: moveableImage.src,
        pantsId: '',
        pantsImg: '',
        shoesId:'',
        shoesImg:''
    };

    // Save the data to local storage
    localStorage.setItem('userData', JSON.stringify(dataToSave));

    
    alert('Your outfit has been saved!');
});

//controls image dragging
/*let isDragging = false;
let offsetX, offsetY;

moveableImage.addEventListener('mousedown', function(event){
    isDragging= true;

    offsetX = event.clientX - event.target.getBoundingClientRect().left;
    offsetY = event.clientY - event.target.getBoundingClientRect().top;
});

document.addEventListener('mousemove', function(event){
    if(isDragging){
        moveableImage.style.left = (event.clientX - offsetX) + 'px';
        moveableImage.style.top = (event.clientY - offsetY) + 'px';

    }
});

document.addEventListener('mouseup', function(){
    if(isDragging){
    isDragging = false;
    targetArea.appendChild(moveableImage);
});