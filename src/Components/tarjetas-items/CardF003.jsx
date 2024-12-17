import React from 'react'

function CardF003() {
  return (
    <div className="card" style={{ width: "100%" }}>
      <div className="card-body">
        <h5 className="card-title">Tabla Productos</h5>
        <p className="card-text">
        Creamos una tabla producto, para tener el control de los productos en las operaciones. Los productos facilmente accecibeles a traves de su codigo de barras.
        Con la finalidad de poder hacer balances sobre los productos mas vendidos en un futuro, esta tabla esta vinculada con la tabla PedidosProductos.
        </p>
        <p>A diferencia de la tabla Usuario esta si puede ser modificada por un usuario no administrador.</p>
     
      </div>
    </div>
  )
}

export default CardF003