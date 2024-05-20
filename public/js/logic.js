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
//takes the id, image source and title from each section and creates an object to be pushed into the items array
function extractData(ulId) {
    const ul = document.getElementById(ulId);
    const lis = ul.getElementsByTagName('li');
    const items = [];

for (let li of lis) {
    const img = li.querySelector('img');
    const divTitle = li.querySelector('div').innerText;
    if(img) {
        items.push({
            id: img.id,
            src: img.src,
            title: divTitle
        });
    }
}
console.log(items);
return items;
}
// saves each outfit object by pushing that data into the outfits array
function saveOutfit(outfit) {
    let outfits = JSON.parse(localStorage.getItem('outfits')) || [];
    outfits.push(outfit);
    localStorage.setItem('outfits', JSON.stringify(outfits));
    console.log('Outfit saved to local storage', outfits);
}
//loads the outfits by array
function loadOutfits() {
    const outfits = JSON.parse(localStorage.getItem('outfits')) || [];
    console.log('Loaded outfits from local storage', outfits);
}
//loads the saved outfits once the page has loaded
document.addEventListener('DOMContentLoaded', loadOutfits);

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