const productosData = require("../data/detallesData")


const productos = {

    listar: (req, res) => {
        /* res.status(200).send(productosData); */
        res.render( "index.ejs",  {prod: productosData} );
    },

    
}

module.exports = productos;