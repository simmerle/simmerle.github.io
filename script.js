// ---------- IP Block ----------

const specificIP = '176.107.155.6';
const api = 'https://api.ipify.org?format=json';

document.addEventListener('DOMContentLoaded', async () => {
    try {
        const userIP = await fetchUserIP();
        const blockElements = document.querySelectorAll('.block');
    
        blockElements.forEach(element => {
            element.addEventListener('click', (event) => {
                event.preventDefault();
                const targetURL = userIP === specificIP ? element.href : '404.html';
                window.location.href = targetURL;
            });
        });
    } catch (error) {
        console.error('Error fetching IP address:', error);
    }
});

async function fetchUserIP() {
    const response = await fetch(api);
    const data = await response.json();
    return data.ip;
}

// ---------- Grid Instantiation ----------

function createContainers() {
    const parent = document.getElementById('parent');

    const gridContainer = document.createElement('div');
    gridContainer.className = 'grid-container';
    parent.appendChild(gridContainer);

    const noGridContainer = document.createElement('div');
    noGridContainer.className = 'no-grid-container';
    parent.appendChild(noGridContainer);

    return { gridContainer, noGridContainer };
}

function createImageElement(project) {
    const anchor = document.createElement('a');
    anchor.href = project.href;
    anchor.style.cssText = project.gridStyle;

    const img = document.createElement('img');
    img.src = project.imgSrc;
    img.alt = project.alt;
    img.classList.add('bw-image');
    img.loading = 'lazy';

    anchor.appendChild(img);
    return anchor;
}

function createTextBoxElement(project) {
    const container = document.createElement('div');
    container.style.cssText = project.gridStyle;

    const paragraph = document.createElement('p');
    paragraph.textContent = project.paragraph;
    container.appendChild(paragraph);

    if (project.buttons) {
        project.buttons.forEach(button => {
            const buttonElement = document.createElement('p');
            const link = document.createElement('a');
            link.href = button.href;
            link.className = 'button';
            link.textContent = button.text;
            if (button.block) {
                link.classList.add('block');
            }
            buttonElement.appendChild(link);
            container.appendChild(buttonElement);
        });
    }

    return container;
}

function createImageElementNoGrid(project) {
    const paragraph = document.createElement('p');
    const link = document.createElement('a');
    link.href = project.href;
    link.className = 'button';
    link.textContent = project.alt;
    paragraph.appendChild(link);
    return paragraph;
}

function createTextBoxElementNoGrid(project) {
    const container = document.createElement('div');

    const paragraph = document.createElement('p');
    paragraph.textContent = project.paragraph;
    container.appendChild(paragraph);

    if (project.buttons) {
        project.buttons.forEach(button => {
            const buttonElement = document.createElement('p');
            const link = document.createElement('a');
            link.href = button.href;
            link.className = 'button';
            link.textContent = button.text;
            if (button.block) {
                link.classList.add('block');
            }
            buttonElement.appendChild(link);
            container.appendChild(buttonElement);
        });
    }

    return container;
}

function populateGridContainer(content, gridContainer) {    
    content.forEach(item => {
        let element;
        if (item.imgSrc) {
            element = createImageElement(item);
        } else if (item.paragraph) {
            element = createTextBoxElement(item);
        }
        gridContainer.appendChild(element);
    });
}

function populateNoGridContainer(content, noGridContainer) {
    const imageElements = [];
    const textElements = [];
    content.forEach(item => {
        if (item.imgSrc) {
            const imageElement = createImageElementNoGrid(item);
            imageElements.push(imageElement);
        }
        if (item.paragraph) {
            const textElement = createTextBoxElementNoGrid(item);
            textElements.push(textElement);
        }
    });
    imageElements.forEach(element => {
        noGridContainer.appendChild(element);
    });
    textElements.forEach(element => {
        noGridContainer.appendChild(element);
    });
}

function populate(content, { gridContainer, noGridContainer }) {
    populateGridContainer(content, gridContainer);
    populateNoGridContainer(content, noGridContainer);
}