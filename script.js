// 1. Click counter
const counterBtn = document.querySelector('#counter-btn');
const counterDisplay = document.querySelector('#counter-display');
let count = 0;

counterBtn.addEventListener('click', () => {
    count++;
    counterDisplay.textContent = count;
});

// 2. Text toggler
const toggleBtn = document.querySelector('#toggle-btn');
const toggleText = document.querySelector('#toggle-text');

toggleBtn.addEventListener('click', () => {
    // Uses classList.toggle to add/remove 'hidden' class
    toggleText.classList.toggle('hidden');
});

// 3. Live input echo
const echoInput = document.querySelector('#echo-input');
const echoDisplay = document.querySelector('#echo-display');

echoInput.addEventListener('input', () => {
    // Updates the echo display in real-time as user types
    echoDisplay.textContent = echoInput.value;
});

// 4. Dynamic list
const listInput = document.querySelector('#list-input');
const addBtn = document.querySelector('#add-btn');
const dynamicList = document.querySelector('#dynamic-list');

addBtn.addEventListener('click', () => {
    const itemText = listInput.value;
    
    // Only add if the input is not empty
    if (itemText.trim() !== '') {
        // Create element with document.createElement
        const listItem = document.createElement('li');
        listItem.textContent = itemText;
        
        // Insert with appendChild
        dynamicList.appendChild(listItem);
        
        // Clear the input field
        listInput.value = '';
    }
});
