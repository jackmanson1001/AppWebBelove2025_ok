<?php  
Class ProductoModel Extends Query
{

public function __construct()
{
        parent::__construct();
}

public function getProducto()
{
        $sql="SELECT IDProducto,NombreProducto,Estado FROM PRODUCTO";
        $res = $this->selectAll($sql);
        return $res;
}

public function verificarPermisos($id_user, $permiso)
{
        $tiene = false ;
        $sql = "SELECT p.*, d.* FROM permisos p INNER JOIN detalle_permisos d ON p.id = d.id_permiso WHERE d.id_usuario = $id_user AND p.nombre = '$permiso'";
        $existe = $this->select($sql);
        if ($existe != null || $existe != "") {
            $tiene = true;
        }
        return $tiene;
}

public function insertarProducto($producto, $usuario)
{
    $verificar= "SELECT * FROM Producto WHERE NombreProducto = '$producto'";
    $existe = $this->select($verificar);
    if(empty($existe)){
        $query = "INSERT INTO Producto(NombreProducto,UsuarioRegistroProducto) VALUES (?,?)";
        $datos = array($producto,$usuario);
        $data = $this->save($query,$datos);
        if($data == 1){
            $res = "ok";
        }else{
            $res= "error";
        }
    } else {
        $res = "existe";
    }
    return $res;
}

public function editProducto($id)
{
    $sql = "SELECT * FROM Producto WHERE IDProducto= $id";
    $res = $this->select($sql);
    return $res;
}

public function actualizarProducto($producto,$usuario,$fechaModificar,$id)
{
    $query = "UPDATE Producto SET NombreProducto = ? , UsuarioModificacionProducto= ? ,FechaModificacionProducto = ? WHERE IDProducto = ?";
    $datos = array($producto, $usuario,$fechaModificar ,$id);
    $data = $this->save($query, $datos);
    if($data == 1){
        $res = "modificado";
    }else {
        $res = "error";
    }
    return $res;
}

public function estadoProducto($estado, $id)
{
    $query ="UPDATE Producto SET estado = ? WHERE IDProducto = ?";
    $datos = array($estado, $id);
    $data = $this->save($query, $datos);
    return $data;
}

}
?>