<?php
Class ClienteModel Extends Query 
{
    public function __construct()
    {
        parent::__construct();
    }

    public function getCliente()
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
					FROM persona P 
		                LEFT JOIN Sexo S ON P.IDSEXO=S.IDSEXO
		                LEFT JOIN TipoDocumento D ON P.IDTipoDocumento = D.IDTipoDocumento
						LEFT JOIN Cliente C ON P.IDPersona=C.IDPersona" ;
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
     
}

?>
