<?php
Class Empleado extends Controller
{
    
    public function __construct()
    {
        session_start();
        if (empty($_SESSION['activo'])) {
            header("location: " . base_url);
        }
        parent::__construct();
        $id_user = $_SESSION['id_usuario'];
        $perm = $this->model->verificarPermisos($id_user, "Libros");
        if (!$perm && $id_user != 1) {
            $this->views->getView($this, "permisos");
            exit;
        }
    }
    public function index()
    {
        $this->views->getView($this, "index");
    }
    public function listar()
    {
        $data = $this->model->getEmpleado();
        for ($i = 0; $i < count($data); $i++) {
            if ($data[$i]['Estado'] == 1) {
                $data[$i]['Estado'] = '<span class="badge badge-success">Activo</span>';
                $data[$i]['acciones'] = '<div class="d-flex">
                <button class="btn btn-primary" type="button" onclick="btnEditarEmpleado(' . $data[$i]['IDPersona'] . ');"><i class="fa fa-pencil-square-o"></i></button>
                <button class="btn btn-danger" type="button" onclick="btnEliminarEmpleado(' . $data[$i]['IDPersona'] . ');"><i class="fa fa-trash-o"></i></button>
                <div/>';
            } else {
                $data[$i]['Estado'] = '<span class="badge badge-danger">Inactivo</span>';
                $data[$i]['acciones'] = '<div>
                <button class="btn btn-success" type="button" onclick="btnReingresarEmpleado(' . $data[$i]['IDPersona'] . ');"><i class="fa fa-reply-all"></i></button>
                <div/>';
            }
        }
        echo json_encode($data, JSON_UNESCAPED_UNICODE);
        die();
    }

    //Listado del combobox para seleccionar el cargo
    public function listarcargo()
    {
        $data = $this->model->getcomboempleado(); // Obtienes los datos del modelo
        $cargos = []; // Inicializas un array vacío para almacenar los cargos
    
        foreach ($data as $item) { // Cambié el nombre de la variable de $cargo a $item para evitar el conflicto
            if ($item['estado'] == 1) { // Verificas si el cargo está activo
                // Añades el cargo a la lista de cargos
                $cargos[] = [
                    'IDCargo' => $item['IDCargo'],
                    'NombreCargo' => $item['NombreCargo']
                ];
            }
        }
        echo json_encode($cargos, JSON_UNESCAPED_UNICODE); // Devuelves el array de cargos activos
        die();
    }

    //Listado del combobox para seleccionar el sexo
    public function listarsexo()
    {
        $data = $this->model->getcombosexo(); // Obtienes los datos del modelo
        $sexo = []; // Inicializas un array vacío para almacenar los cargos
        foreach ($data as $item) { // Cambié el nombre de la variable de $cargo a $item para evitar el conflicto
            if ($item['estado'] == 1) { // Verificas si el cargo está activo
                // Añades el cargo a la lista de cargos
                $sexo[] = [
                    'IDSexo' => $item['IDSexo'],
                    'DescripcionSexo' => $item['DescripcionSexo']
                ];
            }
        }
        echo json_encode($sexo, JSON_UNESCAPED_UNICODE); // Devuelves el array de cargos activos
        die();
    }
    //Listado del combobox para seleccionar el tipo de Documento

public function listartipodocumento()
{
    $data = $this->model->getcombotipodocumento();
    $tipodocumento = [];
    foreach($data as $item){
        if($item['estado']==1){
            $tipodocumento[]=[
                'IDTipoDocumento' => $item['IDTipoDocumento'],
                'DescripcionDocumento' => $item['DescripcionDocumento']
            ];
        }
    }
    echo json_encode($tipodocumento, JSON_UNESCAPED_UNICODE); // Devuelves el array de cargos activos
    die();
}

    public function registrar()
    {
     
        $nombre = strClean($_POST['NombrePersona']);
        $apellidoparterno = strClean($_POST['ApellidoPaternoPersona']);        
        $apellidomaterno=strClean($_POST['apellidomaterno']);
        $telefono=strClean($_POST['telefono']);
        $documento=strClean($_POST['documento']);
        $fechanacimiento=strClean($_POST['fechanacimiento']);
        $direccion=strClean($_POST['direccion']);
        $correo=strClean($_POST['correo']);
        $idsexo=strClean($_POST['idsexo']);
        $idtipodocumento=strClean($_POST['idtipodocumento']);
        $idcargo=strClean($_POST['idcargo']);
        $id = strClean($_POST['id']);
        $usuario = $_SESSION['usuario'];
        if(empty($nombre)){
            $msq = array('msg' => 'El nombre es requerido', 'icono' => 'warning');
        }else{
            if($id == ""){
                $data= $this->model->insertarEmpleado($nombre,$apellidoparterno,$apellidomaterno,$telefono,$documento,$direccion,$correo,$idsexo,$idtipodocumento,$idcargo,$fechanacimiento,$usuario);
                if($data == "ok"){
                    $msg = array('msg' => 'Cargo registrado', 'icono' => 'success');
                }else if($data == "existe"){
                    $msg = array('msg' => 'El Cargo ya existe', 'icono' => 'warning');
                }else {
                    $msg = array('msg' => 'Error al registrar', 'icono' => 'error');
                }
            }else {
                $data = $this->model->actualizarEmpleado($id,$nombre,$apellidoparterno,$apellidomaterno,$telefono,$documento,$direccion,$correo, $idsexo,$idtipodocumento,$idcargo,$fechanacimiento,$usuario);
                if($data == "modificado"){
                    $msg = array('msg' => 'Empleado modificado', 'icono' => 'success');
                }else {
                    $msg = array('msg' => 'Error al modificar', 'icono' => 'error');
                }
             

            }

        }
        echo json_encode($msg, JSON_UNESCAPED_UNICODE);
        die();
    }
    
    public function editar($id)
    {
        $data = $this->model->editEmpleado($id);
        echo json_encode($data, JSON_UNESCAPED_UNICODE);
        die();
    }
    public function eliminar($id)
    {
       $data = $this->model->estadoEmpleado(0, $id);
       if($data == 1){
           $msg = array('msg' => 'Empleado dado de baja', 'icono' => 'success');
       } else {
           $msg = array('msg' => 'Empleado  eliminar', 'icono' => 'error');
       }
       echo json_encode($msg, JSON_UNESCAPED_UNICODE);
       die();
    }
   
    public function reingresar($id)
    {
       $data = $this->model->estadoEmpleado(1, $id);
       if($data == 1){
           if ($data == 1) {
               $msg = array('msg' => 'Empleado restaurado', 'icono' => 'success');
           } else {
               $msg = array('msg' => 'Error al restaurar', 'icono' => 'error');
           }
           echo json_encode($msg, JSON_UNESCAPED_UNICODE);
           die();
       }
    }


}


?>