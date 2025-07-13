<?php
Class DocumentoModel Extends Query
{
  public function __construct()
  {
    parent::__construct();
  }

  public function getDocumento()
  {
    $sql="SELECT IDTipoDocumento,DescripcionDocumento,Estado FROM TIPODOCUMENTO";
    $res=$this->selectAll($sql);
    return $res;
  }

  public function verificarPermisos($id_user, $permiso)
{
    $tiene = false;
    $sql = "SELECT p.*, d.* FROM permisos p INNER JOIN detalle_permisos d ON p.id = d.id_permiso WHERE d.id_usuario = $id_user AND p.nombre = '$permiso'";
    $existe = $this->select($sql);
    if ($existe != null || $existe != "") {
        $tiene = true;
    }
    return $tiene;
}

public function insertarDocumento($documento, $usuario)
{
    $verificar= "SELECT * FROM tipodocumento WHERE DescripcionDocumento = '$documento'";
    $existe = $this->select($verificar);
    if(empty($existe)){
        $query = "INSERT INTO tipodocumento(DescripcionDocumento,UsuarioCreacionDocumento) VALUES (?,?)";
        $datos = array($documento,$usuario);
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
public function editDocumento($id)
{
    $sql = "SELECT * FROM tipodocumento WHERE IDTipoDocumento = $id";
    $res = $this->select($sql);
    return $res;
}
public function actualizarDocumento($documento,$usuario,$fechamodificacion,$id)
{
    $query = "UPDATE tipodocumento SET DescripcionDocumento = ? , UsuarioModificacionDocumento= ? , FechaModificacionDocumento = ?  WHERE IDTipoDocumento = ?";
    $datos = array($documento, $usuario, $fechamodificacion ,$id);
    $data = $this->save($query, $datos);
    if($data == 1){
        $res = "modificado";
    }else {
        $res = "error";
    }
    return $res;
}

public function estadoDocumento($estado, $id)
{
    $query ="UPDATE tipodocumento SET estado = ? WHERE IDTipoDocumento = ?";
    $datos = array($estado, $id);
    $data = $this->save($query, $datos);
    return $data;
}


}


?>