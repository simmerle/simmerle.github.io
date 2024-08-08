const content = [
    {
        href: 'original/0.jpg',
        imgSrc: 'reduziert/0.webp',
        alt: '→ 0',
        gridStyle: 'grid-column: span 6; grid-row: span 3;'
    },
    {
        href: 'original/1.jpg',
        imgSrc: 'reduziert/1.webp',
        alt: '→ 1',
        gridStyle: 'grid-column: span 6; grid-row: span 3;'
    },
    {
        href: 'original/2.jpg',
        imgSrc: 'reduziert/2.webp',
        alt: '→ 2',
        gridStyle: 'grid-column: span 6; grid-row: span 3;'
    },
    {
        href: 'original/3.jpg',
        imgSrc: 'reduziert/3.webp',
        alt: '→ 3',
        gridStyle: 'grid-column: span 6; grid-row: span 3;'
    },
    {
        href: 'original/4.jpg',
        imgSrc: 'reduziert/4.webp',
        alt: '→ 4',
        gridStyle: 'grid-column: span 6; grid-row: span 3;'
    }
];

document.addEventListener('DOMContentLoaded', () => {
    const { gridContainer, noGridContainer } = createContainers();
    populateGridContainer(gridContainer);
    populateNoGridContainer(noGridContainer);
});
