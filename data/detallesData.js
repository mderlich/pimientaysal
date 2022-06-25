/* 
Carpaccio fresco
Entrada Carpaccio de salmón con cítricos U$S 65.50

Risotto de berenjena
Risotto de berenjena y queso de cabra U$S 47.00

Mousse de arroz
Mousse de arroz con leche y aroma de azahar U$S 27.50

Espárragos blancos
Espárragos blancos con vinagreta de verduras y jamón ibérico U$S 37.50 
*/

const productos = [
    {   id: 1, 
        name: "Carpaccio fresco", 
        descripcion: "Entrada Carpaccio de salmón con cítricos", 
        precio: 65.50,
        img: 'Carpaccio-de-salmon.jpg',
    },

    {   id: 2, 
        name: "Risotto de berenjena", 
        descripcion: "Risotto de berenjena y queso de cabra", 
        precio: 47.00,
        img: 'Risotto-berenjena-queso-cabra.jpg',
    },

    {   id: 3, 
        name: "Mousse de arroz", 
        descripcion: "Mousse de arroz con leche y aroma de azahar", 
        precio: 27.50,
        img: 'Mousse-de-arroz-con-leche.jpg',
    },

    {   id: 4, 
        name: "Espárragos blancos", 
        descripcion: "Espárragos blancos con vinagreta de verduras y jamón ibérico", 
        precio: 37.50,
        img: 'esparragos.png',
    },

];

module.exports = productos;

