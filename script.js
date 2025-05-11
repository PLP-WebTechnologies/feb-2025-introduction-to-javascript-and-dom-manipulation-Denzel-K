// DOM Content Loaded Event
document.addEventListener('DOMContentLoaded', function() {
    // Set current year in footer
    document.getElementById('current-year').textContent = new Date().getFullYear();

    // 1. Change Text Content
    const changeTextBtn = document.getElementById('change-text-btn');
    const dynamicText = document.getElementById('dynamic-text');
    
    changeTextBtn.addEventListener('click', function() {
        dynamicText.textContent = "The text has been changed successfully!";
        dynamicText.classList.add('highlight');
        
        // Reset after 2 seconds
        setTimeout(() => {
            dynamicText.textContent = "This text will change when you click the button below.";
            dynamicText.classList.remove('highlight');
        }, 2000);
    });

    // 2. Modify CSS Styles
    const changeStyleBtn = document.getElementById('change-style-btn');
    const styleDemo = document.getElementById('style-demo');
    let styleToggled = false;
    
    changeStyleBtn.addEventListener('click', function() {
        if (styleToggled) {
            styleDemo.style.backgroundColor = '';
            styleDemo.style.color = '';
            styleDemo.style.fontWeight = '';
            styleDemo.style.border = '1px solid #ddd';
            styleDemo.textContent = "This box's style will change when you click the button.";
        } else {
            styleDemo.style.backgroundColor = '#333';
            styleDemo.style.color = 'white';
            styleDemo.style.fontWeight = 'bold';
            styleDemo.style.border = '2px solid ' + getComputedStyle(document.documentElement).getPropertyValue('--accent-color');
            styleDemo.textContent = "Styles have been modified via JavaScript!";
        }
        styleToggled = !styleToggled;
    });

    // 3. Add/Remove Elements
    const addElementBtn = document.getElementById('add-element-btn');
    const removeElementBtn = document.getElementById('remove-element-btn');
    const elementControlArea = document.getElementById('element-control-area');
    let elementCount = 0;
    
    addElementBtn.addEventListener('click', function() {
        elementCount++;
        const newElement = document.createElement('div');
        newElement.classList.add('new-element');
        newElement.textContent = `New Element #${elementCount} (Added ${new Date().toLocaleTimeString()})`;
        elementControlArea.appendChild(newElement);
    });
    
    removeElementBtn.addEventListener('click', function() {
        const elements = elementControlArea.querySelectorAll('.new-element');
        if (elements.length > 0) {
            elementControlArea.removeChild(elements[elements.length - 1]);
            elementCount--;
        } else {
            alert('No elements to remove!');
        }
    });

    // 4. Interactive List
    const listForm = document.getElementById('list-form');
    const listItemInput = document.getElementById('list-item-input');
    const interactiveList = document.getElementById('interactive-list');
    
    listForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        if (listItemInput.value.trim() === '') {
            alert('Please enter a list item');
            return;
        }
        
        const newItem = document.createElement('li');
        newItem.textContent = listItemInput.value;
        
        // Add click event to remove item when clicked
        newItem.addEventListener('click', function() {
            this.remove();
        });
        
        interactiveList.appendChild(newItem);
        listItemInput.value = '';
    });

    // Bonus: Change heading color on mouseover
    const mainHeading = document.getElementById('main-heading');
    
    mainHeading.addEventListener('mouseover', function() {
        this.style.color = getComputedStyle(document.documentElement).getPropertyValue('--accent-color');
    });
    
    mainHeading.addEventListener('mouseout', function() {
        this.style.color = '';
    });
});