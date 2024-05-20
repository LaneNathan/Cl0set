const saveButton = document.getElementById('save-bttn');
const moveableImage = document.querySelector('.scroll-Pictures');
const targetArea = document.getElementById('saveshirt');


document.getElementById('uploadButton').addEventListener('click', function(event){
    const fileInput = document.getElementById('fileInput');
    const imageTitle = document.getElementById('imageTitle').value;
    const files =fileInput.files;

    if(files.length > 0 && imageTitle.trim()){
        Array.from(files).forEach(file =>{
            const reader = new FileReader();
            reader.onload = function(event) {
                const imageSrc = event.target.result;
                addImageToList('scrollPictures-bottom', imageSrc,imageTitle, file.name);
            };
            reader.readAsDataURL(file);
        });
    }else{
        alert('Please select a file and enter a title');
    }
});

function addImageToList(ulId, imageSrc, imageTitle, imageId){
    const ul = document.getElementById(ulId);
            const li = document.createElement('li');
            const div = document.createElement('div');
            div.id = 'draggable';

            const a = document.createElement('a');
            a.href = '#';

            const divTitle = document.createElement('div');
            divTitle.id = 'image-title';
            divTitle.innerText = imageTitle;

            const img = document.createElement('img');
            img.id = imageId;
            img.src = imageSrc;
            img.alt = imageTitle;

            a.appendChild(divTitle);
            a.appendChild(img);
            div.appendChild(a);
            li.appendChild(div);
            ul.appendChild(li);
        }

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
//console.log(items);
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
    
    $( "#scrollPictures-bottom").sortable({
        containment: "document",
        connectWith: ".connectedSortable",
        revert: true,
        
    }).disableSelection();


  } );