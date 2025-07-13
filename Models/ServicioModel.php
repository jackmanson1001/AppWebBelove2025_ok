<?php
Class ServicioModel Extends Query
{
    public function __construct()
    {
        parent::__construct();
    }
public function getServicio()
{
    $sql="SELECT IDServicio,DescripcionServicio,PrecioBaseServicio,Estado FROM servicio";
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

public function insertarServicio($Servicio,$preciobase,$usuario)
    {
        $verificar= "SELECT * FROM servicio WHERE DescripcionServicio = '$Servicio'";
        $existe = $this->select($verificar);
        if(empty($existe)){
            $query = "INSERT INTO servicio(DescripcionServicio,PrecioBaseServicio,UsuarioCreacionServicio) VALUES (?,?,?)";
            $datos = array($Servicio,$preciobase,$usuario);
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

    public function editServicio($id)
    {
        $sql = "SELECT * FROM servicio WHERE IDServicio = $id";
        $res = $this->select($sql);
        return $res;
    }
    public function actualizarServicio($servicio,$preciobase,$usuario,$fechaModificar,$id)
    {
        $query = "UPDATE servicio SET DescripcionServicio = ? , PrecioBaseServicio = ? , UsuarioModificacionServicio = ? , FechaModificacionServicio = ?  WHERE IDServicio = ?";
        $datos = array($servicio,$preciobase, $usuario, $fechaModificar,$id);
        $data = $this->save($query, $datos);
        if($data == 1){
            $res = "modificado";
        }else {
            $res = "error";
        }
        return $res;
    }

    public function estadoServicio($estado, $id)
    {
        $query ="UPDATE servicio SET estado = ? WHERE IDServicio = ?";
        $datos = array($estado, $id);
        $data = $this->save($query, $datos);
        return $data;
    }





}




?>