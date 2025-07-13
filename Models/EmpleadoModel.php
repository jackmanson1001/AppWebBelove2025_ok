<?php
Class EmpleadoModel Extends Query 
{
    public function __construct()
    {
        parent::__construct();
    }

    public function getEmpleado()
    {
        $sql="SELECT 	 P.IDPersona
                        ,P.NombrePersona
                        ,P.ApellidoPaternoPersona
                        ,P.ApellidoMaternoPersona
                        ,D.DescripcionDocumento
                        ,P.IDTipoDocumento
                        ,P.DocumentoPersona
                        ,P.DireccionPersona
                        ,P.TelefonoPersona
                        ,P.IDSexo
                        ,S.descripcionsexo
                        ,P.CorreoPersona
                        ,P.FechaNacimientoPersona
                        ,P.Estado
                        ,CARGO.IDCargo
                        ,CARGO.NOMBRECARGO
                FROM persona P 
		                LEFT JOIN Sexo S ON P.IDSEXO=S.IDSEXO
		                LEFT JOIN TipoDocumento D ON P.IDTipoDocumento = D.IDTipoDocumento
                        LEFT JOIN (SELECT C.IDCARGO,C.NOMBRECARGO,E.IDPERSONA FROM CARGO C INNER JOIN EMPLEADO E ON C.IDCARGO=E.IDCARGO)  CARGO
                                 ON P.IDPERSONA= CARGO.IDPERSONA" ;
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
     
    
     public function insertarEmpleado($nombre,$apellidoparterno,$apellidomaterno,$telefono,$documento,$direccion,$correo,$idsexo,$idtipodocumento,$idcargo,$fechanacimiento,$usuario)
    {

        $verificar="SELECT * FROM persona where NombrePersona = '$nombre' ";
        $existe = $this->select($verificar);

        if(empty($existe)){
            $query = "CALL SP_INSERTARPERSONA_EMPLEADO(?,?,?,?,?,?,?,?,?,?,?,?)";
            $datos = array($nombre,$apellidoparterno,$apellidomaterno,$telefono,$documento,$direccion,$correo,$idsexo,$idtipodocumento,$idcargo,$fechanacimiento,$usuario);
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

    public function getcomboempleado(){

        $sql = "SELECT IDCargo,NombreCargo,estado FROM cargo"; 
        $res = $this->SelectAll($sql);
        return $res;
    }
    public function getcombosexo(){

        $sql = "SELECT IDSexo,DescripcionSexo,estado FROM sexo"; 
        $res = $this->SelectAll($sql);
        return $res;
    }

    public function getcombotipodocumento(){

        $sql = "SELECT IDTipoDocumento,DescripcionDocumento,estado FROM tipodocumento";
        $res = $this->SelectAll($sql);
        return $res;
    }


    public function editEmpleado($id)
    {
        $sql = " SELECT  P.IDPersona
                        ,P.NombrePersona
                        ,P.ApellidoPaternoPersona
                        ,P.ApellidoMaternoPersona
                        ,D.DescripcionDocumento
                        ,P.IDTipoDocumento
                        ,P.DocumentoPersona
                        ,P.DireccionPersona
                        ,P.TelefonoPersona
                        ,P.IDSexo
                        ,S.descripcionsexo
                        ,P.CorreoPersona
                        ,P.FechaNacimientoPersona
                        ,P.Estado
                        ,CARGO.IDCargo as IDCargo
                        ,CARGO.NOMBRECARGO as NombreCargo
                FROM persona P 
		                LEFT JOIN Sexo S ON P.IDSEXO=S.IDSEXO
		                LEFT JOIN TipoDocumento D ON P.IDTipoDocumento = D.IDTipoDocumento
                        LEFT JOIN (SELECT C.IDCARGO,C.NOMBRECARGO,E.IDPERSONA FROM CARGO C INNER JOIN EMPLEADO E ON C.IDCARGO=E.IDCARGO)  CARGO
                                 ON P.IDPERSONA= CARGO.IDPERSONA WHERE P.IDPersona =$id " ;
        $res = $this->select($sql);
        return $res;
    }
    public function actualizarEmpleado($id,$NombrePersona,$ApellidoPaternoPersona,$ApellidoMaternoPersona,$TelefonoPersona,$DocumentoPersona,$DireccionPersona,$CorreoPersona,$IDSexo,$IDTipoDocumento,$IDCargo,$FechaNacimientoPersona,$UsuarioModificacion)
    {
        $query = "CALL SP_MODIFICARPERSONA_EMPLEADO(?,?,?,?,?,?,?,?,?,?,?,?,?)";
        $datos = array($id,$NombrePersona,$ApellidoPaternoPersona,$ApellidoMaternoPersona,$TelefonoPersona,$DocumentoPersona,$DireccionPersona,$CorreoPersona,$IDSexo,$IDTipoDocumento,$IDCargo,$FechaNacimientoPersona,$UsuarioModificacion);
        $data = $this->save($query, $datos);
        if($data == 1){
            $res = "modificado";
        }else {
            $res = "error";
        }
        return $res;
    }

    public function estadoEmpleado($estado, $id)
    {
        $query ="UPDATE Persona SET Estado = ? WHERE IDPersona = ?";
        $datos = array($estado, $id);
        $data = $this->save($query, $datos);
        return $data;
    }
    

}


?>