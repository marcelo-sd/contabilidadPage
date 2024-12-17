

function CardFunciones() {
  return (
    <div className="card" style={{ width: "100%" }}>
      <div className="card-body">
        <h5 className="card-title">Tabla Usuarios</h5>
        <p className="card-text">
          Una de las 3 tablas principales es la de usuario, esta diseñada para gestionar los roles, el campo mas importante es RolId,que nos permite asignar roles .
            Ademas, tambien permite registrar  todos las ventas que cada usuario realizó. Esta pensada para que los vendedores se logueen y registren sus operaciones.
            Como toda tabla, tiene su crud corespondiente, pero solo el usuarioAdministrador puede modificar, esto se logra a traves de politicas
        </p>
      </div>
    </div>
  );
}

export default CardFunciones;
