const content = [
    {
        href: 'original/0.jpg',
        imgSrc: 'original/0.jpg',
        alt: '→ 0',
        gridStyle: 'grid-column: span 6; grid-row: span 3;'
    },
    {
        href: 'original/1.jpg',
        imgSrc: 'original/1.jpg',
        alt: '→ 1',
        gridStyle: 'grid-column: span 6; grid-row: span 3;'
    },
    {
        href: 'original/2.jpg',
        imgSrc: 'original/2.jpg',
        alt: '→ 2',
        gridStyle: 'grid-column: span 6; grid-row: span 3;'
    },
    {
        href: 'original/3.jpg',
        imgSrc: 'original/3.jpg',
        alt: '→ 3',
        gridStyle: 'grid-column: span 2; grid-row: span 2;'
    },
    {
        href: 'original/4.jpg',
        imgSrc: 'original/4.jpg',
        alt: '→ 4',
        gridStyle: 'grid-column: span 4; grid-row: span 2;'
    },
    {
        href: 'original/5.jpg',
        imgSrc: 'original/5.jpg',
        alt: '→ 5',
        gridStyle: 'grid-column: span 6; grid-row: span 3;'
    },
    {
        href: 'original/6.jpg',
        imgSrc: 'original/6.jpg',
        alt: '→ 6',
        gridStyle: 'grid-column: span 4; grid-row: span 2;'
    },
    {
        href: 'original/7.jpg',
        imgSrc: 'original/7.jpg',
        alt: '→ 7',
        gridStyle: 'grid-column: span 2; grid-row: span 2;'
    },
    {
        href: 'original/8.jpg',
        imgSrc: 'original/8.jpg',
        alt: '→ 8',
        gridStyle: 'grid-column: span 6; grid-row: span 3;'
    }
];

document.addEventListener('DOMContentLoaded', () => {
    const { gridContainer, noGridContainer } = createContainers();
    populateGridContainer(gridContainer);
    populateNoGridContainer(noGridContainer);
});
