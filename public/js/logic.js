const saveButton = document.getElementById('save-bttn');
const moveableImage = document.getElementById('{{pid}}');
const targetArea = document.getElementById('saveshirt');

saveButton.addEventListener('click', function(event) {
    // Get the data you want to save (for example, from an input field)

    const dataToSave = { 
        outfit:'',
        shirtId: pid,
        shirtImg: thumb_image,
        pantsId: "",
        pantsImg: ""
    };

    // Save the data to local storage
    localStorage.setItem('userData', JSON.stringify(data));

    
    alert('Your outfit has been saved!');
});


addShirtButtonArray.map(function(element) {
    element.addEventListener.addEventListener("click", function(event) {
    // Test to make sure we can CAPTURE the SELECTED DATASET
    console.log("Selected: ", event.target)
    console.log("This: ", this);
    console.log("Item Id: ", this.dataset.id);
    console.log("Item Id: ", this.getAttribute('data-id'));
    
    // tranverse the DOM elemtns to pull the wanted Data
    
    
    // Create our own dataset (temp dataset)
    let shirtData = {
        pid: "",
        thumb_image: "",
        title: ""
    }
    
    // 
});

})