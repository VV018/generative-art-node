/*
const layersOrder = [
    { name: 'background', number: 1 },
    { name: 'Comets', number: 8 },
    { name: 'Planet_Top', number: 12 },
    { name: 'Second_Planet_Top', number: 12 },
    { name: 'Third_Planet_Top', number: 12 },
    { name: 'Fourth_Planet_Top', number: 12 },
    { name: 'Fifth_Planet_Top', number: 12 },
    { name: 'Sixth_Planet_Top', number: 12 },
    { name: '45_Rings', number: 12 },
    { name: '270 Rings', number: 12 },
    { name: '360 Rings', number: 12 },

];
*/

const layersOrder = [
    { name: 'background', number: 1 },
    { name: 'Comets', number: 8 },
    { name: 'TerreBack', number: 24 },
    { name: '45_Rings', number: 12 },
    { name: '270 Rings', number: 12 },
    { name: '360 Rings', number: 12 },

];


  
const format = {
    width: 1024,
    height: 1024
};

const rarity = [
    { key: "", val: "original" },
    { key: "_r", val: "rare" },
    { key: "_sr", val: "super rare" },
];

const defaultEdition = 500;

module.exports = { layersOrder, format, rarity, defaultEdition };