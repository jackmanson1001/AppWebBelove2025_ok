<?php
Class CargoModel Extends Query
{
    public function __construct()
    {
        parent::__construct();
    }
public function getCargo()
{
    $sql="SELECT IDCargo,NombreCargo,Estado FROM CARGO";
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

public function insertarCargo($cargo, $usuario)
    {
        $verificar= "SELECT * FROM cargo WHERE NombreCargo = '$cargo'";
        $existe = $this->select($verificar);
        if(empty($existe)){
            $query = "INSERT INTO cargo(NombreCargo,UsuarioCreacionCargo) VALUES (?,?)";
            $datos = array($cargo,$usuario);
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

    public function editCargo($id)
    {
        $sql = "SELECT * FROM cargo WHERE IDCargo = $id";
        $res = $this->select($sql);
        return $res;
    }
    public function actualizarCargo($cargo,$usuario,$fechaModificar,$id)
    {
        $query = "UPDATE cargo SET NombreCargo = ? , usuarioModificacionCargo = ? , FechaModificacionCargo = ?  WHERE IDCargo = ?";
        $datos = array($cargo, $usuario, $fechaModificar,$id);
        $data = $this->save($query, $datos);
        if($data == 1){
            $res = "modificado";
        }else {
            $res = "error";
        }
        return $res;
    }

    public function estadoCargo($estado, $id)
    {
        $query ="UPDATE cargo SET estado = ? WHERE IDCargo = ?";
        $datos = array($estado, $id);
        $data = $this->save($query, $datos);
        return $data;
    }





}




?>