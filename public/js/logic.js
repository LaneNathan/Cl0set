const saveButton = document.getElementById('save-bttn');
const moveableImage = document.getElementById('{{pid}}');
const targetArea = document.getElementById('saveshirt');

//save information from save button click as an object
saveButton.addEventListener('click', function(event) {
    // Get the data you want to save (for example, from an input field)

    const dataToSave = { 
        outfit:'',
        shirtId: pid,
        shirtImg: thumb_image,
        pantsId: '',
        pantsImg: '',
        shoesId:'',
        shoesImg:''
    };

    // Save the data to local storage
    localStorage.setItem('userData', JSON.stringify(data));

    
    alert('Your outfit has been saved!');
});

//controls image dragging
let isDragging = false;
let offsetX, offsetY;

moveableImage.addEventListener('mousedown', function(event){
    isDragging= true;

    offsetX = event.clientX - moveableImage.getBoundingClientRect().left;
    offsetY = event.clientY - moveableImage.getBoundingClientRect().top;
});

document.addEventListener('mousemove', function(event){
    if(isDragging){
        moveableImage.style.left = (event.clientX - offsetX) + 'px';
        moveableImage.style.top = (event.clientY - offsetY) + 'px';

    }
});

document.addEventListener('mouseup', function(){
    isDragging = false;
    targetArea.appendChild(moveableImage);
});