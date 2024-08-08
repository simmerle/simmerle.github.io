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
            buttonElement.appendChild(link);
            container.appendChild(buttonElement);
        });
    }

    return container;
}

function populateGridContainer() {
    const gridContainer = document.querySelector('.grid-container');
    
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

function populateNoGridContainer() {
    const noGridContainer = document.querySelector('.no-grid-container');

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
