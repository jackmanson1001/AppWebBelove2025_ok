<?php
Class SexoModel Extends Query 
{

    public function __construct()
    {
        parent::__construct();
    }
    public function getSexo()
    {
        $sql="SELECT IDsexo,DescripcionSexo,Estado FROM Sexo";
        $res = $this->selectAll($sql);
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

    public function insertarSexo($sexo, $usuario)
    {
        $verificar= "SELECT * FROM sexo WHERE DescripcionSexo = '$sexo'";
        $existe = $this->select($verificar);
        if(empty($existe)){
            $query = "INSERT INTO Sexo(DescripcionSexo,UsuarioCreacionSexo) VALUES (?,?)";
            $datos = array($sexo,$usuario);
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
    public function editSexo($id)
    {
        $sql = "SELECT * FROM sexo WHERE IDSexo = $id";
        $res = $this->select($sql);
        return $res;
    }
    public function actualizarSexo($sexo,$usuario,$id)
    {
        $query = "UPDATE sexo SET DescripcionSexo = ? , usuarioCreacionSexo= ?  WHERE IDsexo = ?";
        $datos = array($sexo, $usuario ,$id);
        $data = $this->save($query, $datos);
        if($data == 1){
            $res = "modificado";
        }else {
            $res = "error";
        }
        return $res;
    }

    public function estadoSexo($estado, $id)
    {
        $query ="UPDATE sexo SET estado = ? WHERE IDsexo = ?";
        $datos = array($estado, $id);
        $data = $this->save($query, $datos);
        return $data;
    }

}



?>