const content = [
    {
        href: 'projekte/grundschule-sinich/grundschule-sinich.html',
        imgSrc: 'projekte/grundschule-sinich/reduziert/0.webp',
        alt: '→ Grundschule Sinnich',
        gridStyle: 'grid-column: span 2; grid-row: span 1;'
    },
    {
        href: 'projekte/fc-suedtirol-trainingszentrum-eppan/fc-suedtirol-trainingszentrum-eppan.html',
        imgSrc: 'projekte/fc-suedtirol-trainingszentrum-eppan/reduziert/9.webp',
        alt: '→ FC Südtirol Trainingszentrum Eppan',
        gridStyle: 'grid-column: span 4; grid-row: span 3;'
    },
    {
        href: 'projekte/handelskammer-bozen/handelskammer-bozen.html',
        imgSrc: 'projekte/handelskammer-bozen/reduziert/1.webp',
        alt: '→ Handelskammer Bozen',
        gridStyle: 'grid-column: span 2; grid-row: span 2;'
    },
    {
        href: 'projekte/noi-techpark-suedtirol/noi-techpark-suedtirol.html',
        imgSrc: 'projekte/noi-techpark-suedtirol/reduziert/1.webp',
        alt: '→ NOI Techpark Südtirol',
        gridStyle: 'grid-column: span 4; grid-row: span 2;'
    },
    {
        href: 'projekte/happacherhof-auer/happacherhof-auer.html',
        imgSrc: 'projekte/happacherhof-auer/reduziert/1.webp',
        alt: '→ Happacherhof Auer',
        gridStyle: 'grid-column: span 2; grid-row: span 2;'
    },
    {
        paragraph: 'INFORMATIONEN',
        gridStyle: 'grid-column: span 1; grid-row: span 1;',
        buttons: [
            {
                text: '→ Preise',
                href: 'informationen/preise.html'
            },
            {
                text: '→ weitere Projekte',
                href: 'informationen/weitere-projekte.html'
            }
        ]
    },
    {
        paragraph: 'WERKZEUGE',
        gridStyle: 'grid-column: span 1; grid-row: span 1;',
        buttons: [
            {
                text: '→ Freigabe',
                href: 'http://192.168.178.2:7000'
            },
            {
                text: '→ URL Kürzer',
                href: ''
            }
        ]
    },
    {
        href: 'projekte/landesberufsschule-zuegg-meran/landesberufsschule-zuegg-meran.html',
        imgSrc: 'projekte/landesberufsschule-zuegg-meran/reduziert/7.webp',
        alt: '→ Landesberufsschule Zuegg Meran',
        gridStyle: 'grid-column: span 2; grid-row: span 1;'
    },
    {
        href: 'projekte/info-point-rodeneck/info-point-rodeneck.html',
        imgSrc: 'projekte/info-point-rodeneck/reduziert/0.webp',
        alt: '→ Info Point Rodeneck',
        gridStyle: 'grid-column: span 2; grid-row: span 1;'
    }
];

document.addEventListener('DOMContentLoaded', () => {
    const { gridContainer, noGridContainer } = createContainers();
    populateGridContainer(gridContainer);
    populateNoGridContainer(noGridContainer);
});