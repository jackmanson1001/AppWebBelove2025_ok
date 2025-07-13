<?php
Class Cliente extends Controller
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
        $data = $this->model->getCliente();
        for ($i = 0; $i < count($data); $i++) {
            if ($data[$i]['Estado'] == 1) {
                $data[$i]['Estado'] = '<span class="badge badge-success">Activo</span>';
                $data[$i]['acciones'] = '<div class="d-flex">
                <button class="btn btn-primary" type="button" onclick="btnEditarCliente(' . $data[$i]['IDPersona'] . ');"><i class="fa fa-pencil-square-o"></i></button>
                <button class="btn btn-danger" type="button" onclick="btnEliminarCliente(' . $data[$i]['IDPersona'] . ');"><i class="fa fa-trash-o"></i></button>
                <div/>';
            } else {
                $data[$i]['Estado'] = '<span class="badge badge-danger">Inactivo</span>';
                $data[$i]['acciones'] = '<div>
                <button class="btn btn-success" type="button" onclick="btnReingresarCliente(' . $data[$i]['IDPersona'] . ');"><i class="fa fa-reply-all"></i></button>
                <div/>';
            }
        }
        echo json_encode($data, JSON_UNESCAPED_UNICODE);
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

   


}


?>