const saveButton = document.getElementById('save-bttn');
const moveableImage = document.querySelector('.scroll-Pictures');
const targetArea = document.getElementById('saveshirt');

//save information from save button click as an object
saveButton.addEventListener('click', function(event) {

 // Outfit object
    const outfit = { 
        outfitnumber:'',
        shirts: [],
        pants: [],
        shoes: [],
    };
//pushes data from divs to the outfit object
    outfit.shirts.push(...extractData('builder'));
    outfit.pants.push(...extractData('builder-pants'));
    outfit.shirts.push(...extractData('builder-shoes'));

    console.log('Your outfit is saved',outfit);
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
    }
});*/

$( function() {

    // console.log()
    // $( ".scroll-Pictures").draggable({ revert: true, containment: "document"});
    // $("#saveshirt").droppable({ snap: true})


    $( "#builder").sortable({
        containment: "document",
        connectWith: ".connectedSortable",
        receive: function(event, ui) {
            if ($(this).children().length > 1) {
                $(ui.sender).sortable('cancel');
            }
        }, receive: function(event, ui) {
            if ($(ui.item).hasClass("scroll-Pictures-left ui-sortable-handle")) {
                $(ui.sender).sortable('cancel');
            }
        }
    }).disableSelection();


    $( "#builder-pants").sortable({
        containment: "document",
        connectWith: ".connectedSortable",
        receive: function(event, ui) {
            if ($(this).children().length > 1) {
                $(ui.sender).sortable('cancel');
            }
        },
        receive: function(event, ui) {
            if ($(ui.item).hasClass("scroll-Pictures ui-sortable-handle")) {
                $(ui.sender).sortable('cancel');
            }
        }
    }).disableSelection();
    
    $( "#builder-shoes").sortable({
        containment: "document",
        connectWith: ".connectedSortable", 
        receive: function(event, ui) {
            if ($(this).children().length > 1) {
                $(ui.sender).sortable('cancel');
            }
        }
    }).disableSelection();

    $( "#scrollPictures-right").sortable({
        containment: "document",
        connectWith: ".connectedSortable",
        revert: true,
        
    }).disableSelection();
    $( "#scrollPictures-left").sortable({
        containment: "document",
        connectWith: ".connectedSortable",
        revert: true,
        
    }).disableSelection();


  } );