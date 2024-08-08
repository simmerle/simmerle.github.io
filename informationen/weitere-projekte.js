const content = [
    {
        href: '../projekte/grundschule-welschnofen/grundschule-welschnofen.html',
        imgSrc: '../projekte/grundschule-welschnofen/reduziert/0.webp',
        alt: '→ Grundschule Welschnofen',
        gridStyle: 'grid-column: span 6; grid-row: span 2;'
    },
    {
        href: '../projekte/kulturzentrum-ex-gasthof-sonne-nals/kulturzentrum-ex-gasthof-sonne-nals.html',
        imgSrc: '../projekte/kulturzentrum-ex-gasthof-sonne-nals/reduziert/0.webp',
        alt: '→ Kulturzentrum Ex Gasthof Sonne Nals',
        gridStyle: 'grid-column: span 3; grid-row: span 2;'
    },
    {
        href: '../projekte/pfarrheim-deutschnofen-nova-teutonica/pfarrheim-deutschnofen-nova-teutonica.html',
        imgSrc: '../projekte/pfarrheim-deutschnofen-nova-teutonica/reduziert/0.webp',
        alt: '→ Pfarrheim Deutschnofen Nova Teutonica',
        gridStyle: 'grid-column: span 3; grid-row: span 2;'
    }
];

document.addEventListener('DOMContentLoaded', () => {
    const { gridContainer, noGridContainer } = createContainers();
    populate(content, { gridContainer, noGridContainer });
});