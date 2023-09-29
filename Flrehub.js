// Create the main container for the click GUI
const guiContainer = document.createElement('div');
guiContainer.style.position = 'fixed';
guiContainer.style.top = '20px';
guiContainer.style.left = '20px';
guiContainer.style.backgroundColor = '#252525'; // Dark background color
guiContainer.style.boxShadow = '0px 0px 20px rgba(0,0,0,0.7)'; // Shadow effect
guiContainer.style.borderRadius = '15px'; // Rounded corners
guiContainer.style.width = '500px'; // Width
guiContainer.style.height = '600px'; // Height
guiContainer.style.zIndex = '9999';
guiContainer.style.fontFamily = 'Arial, sans-serif';

// Function to handle dragging the menu
let isDragging = false;
let offsetX, offsetY;
guiContainer.addEventListener('mousedown', (e) => {
    isDragging = true;
    offsetX = e.clientX - guiContainer.getBoundingClientRect().left;
    offsetY = e.clientY - guiContainer.getBoundingClientRect().top;
});

window.addEventListener('mousemove', (e) => {
    if (!isDragging) return;
    guiContainer.style.left = e.clientX - offsetX + 'px';
    guiContainer.style.top = e.clientY - offsetY + 'px';
});

window.addEventListener('mouseup', () => {
    isDragging = false;
});

// Create a header for the menu
const header = document.createElement('div');
header.style.backgroundColor = '#363636'; // Header background color
header.style.color = 'white';
header.style.padding = '10px';
header.style.borderTopLeftRadius = '15px';
header.style.borderTopRightRadius = '15px';
header.style.display = 'flex';
header.style.justifyContent = 'space-between';

// Title for the menu
const title = document.createElement('div');
title.textContent = 'FireHub Menu';
title.style.color = '#ffffff';
title.style.fontSize = '24px';
title.style.fontWeight = 'bold';

// Close button for the menu
const closeButton = document.createElement('div');
closeButton.textContent = 'X';
closeButton.style.color = '#ffffff';
closeButton.style.cursor = 'pointer';
closeButton.style.fontSize = '24px';
closeButton.style.padding = '5px';
closeButton.addEventListener('click', () => {
    guiContainer.style.display = 'none';
});

// Append title and close button to the header
header.appendChild(title);
header.appendChild(closeButton);

// Create a panel on the left side
const panel = document.createElement('div');
panel.style.backgroundColor = '#303030';
panel.style.color = 'white';
panel.style.padding = '15px';
panel.style.borderRadius = '0 0 15px 15px';

// Create links in the panel to switch between pages with buttons
const pages = {
    'Home': ['Button 1', 'Button 2'],
    'Exploits': ['Button 3', 'Button 4'],
    'Games': ['Button 5', 'Button 6'],
    'ClientSettings': ['Button 7', 'Button 8', 'Color']
};

for (const pageName in pages) {
    const link = document.createElement('div');
    link.style.marginBottom = '15px';
    link.style.cursor = 'pointer';
    link.textContent = pageName;
    link.style.fontSize = '18px';

    const page = document.createElement('div');
    page.style.display = 'none';

    for (const buttonName of pages[pageName]) {
        const button = document.createElement('button');
        button.textContent = buttonName;
        button.style.backgroundColor = '#7289da'; // Discord blue color
        button.style.color = 'white';
        button.style.padding = '10px 20px';
        button.style.marginTop = '10px';
        button.style.border = 'none';
        button.style.borderRadius = '10px';
        button.style.cursor = 'pointer';
        button.style.fontSize = '16px';
        button.addEventListener('click', () => {
            // Placeholder for owner-only JavaScript functionality
            if (buttonName === 'Button 1') {
                // Owner-only code for Button 1
                alert('Owner-only code for Button 1');
            } else if (buttonName === 'Button 2') {
                // Owner-only code for Button 2
                alert('Owner-only code for Button 2');
            }
            // You can add more conditions for other buttons
        });
        page.appendChild(button);
    }

    link.addEventListener('click', () => {
        if (page.style.display === 'none') {
            page.style.display = 'block';
        } else {
            page.style.display = 'none';
        }
    });

    panel.appendChild(link);
    panel.appendChild(page);
}

// Append elements to the GUI container
guiContainer.appendChild(header);
guiContainer.appendChild(panel);

// Append the GUI container to the document body
document.body.appendChild(guiContainer);
