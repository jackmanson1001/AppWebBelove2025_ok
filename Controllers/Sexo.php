<?php
class Sexo extends Controller
{
    public function __construct()
    {
        session_start();
        if (empty($_SESSION['activo'])){
            header("location: " . base_url);
        }
        parent::__construct();
        $id_user = $_SESSION['id_usuario'];
        $perm = $this->model->verificarPermisos($id_user, "Sexo");
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
        $data=$this->model->getSexo();
        for ($i = 0; $i < count($data); $i++) {
            if ($data[$i]['Estado'] == 1) {
                $data[$i]['Estado'] = '<span class="badge badge-success">Activo</span>';
                $data[$i]['Acciones'] = '<div>
                <button class="btn btn-primary" type="button" onclick="btnEditarSexo(' . $data[$i]['IDsexo'] . ');"><i class="fa fa-pencil-square-o"></i></button>
                <button class="btn btn-danger" type="button" onclick="btnEliminarSexo(' . $data[$i]['IDsexo'] . ');"><i class="fa fa-trash-o"></i></button>
                <div/>';
            } else {
                $data[$i]['Estado'] = '<span class="badge badge-danger">Inactivo</span>';
                $data[$i]['Acciones'] = '<div>
                <button class="btn btn-success" type="button" onclick="btnReingresarSexo(' . $data[$i]['IDsexo'] . ');"><i class="fa fa-reply-all"></i></button>
                <div/>';
            }
        }
        echo json_encode($data, JSON_UNESCAPED_UNICODE);
        die();
    }

    public function registrar()
    {
        $sexo = strClean($_POST['sexo']);
        $id = strClean($_POST['id']);
        $usuario = $_SESSION['usuario'];
        if(empty($sexo)){
            $msq = array('msg' => 'El nombre es requerido', 'icono' => 'warning');
        }else {
            if($id == ""){
               $data = $this->model->insertarSexo($sexo, $usuario);
                if($data == "ok"){
                    $msg = array('msg' => 'Sexo registrado', 'icono' => 'success');
                }else if ($data == "existe"){
                    $msg = array('msg' => 'El sexo ya existe', 'icono' => 'warning');
                } else {
                    $msg = array('msg' => 'Error al registrar', 'icono' => 'error');
                }
            } else {
                $data = $this->model->actualizarSexo($sexo, $usuario, $id);
                if ($data == "modificado") {
                    $msg = array('msg' => 'Sexo modificado', 'icono' => 'success');
                } else {
                    $msg = array('msg' => 'Error al modificar', 'icono' => 'error');
                }
            }

        }
        echo json_encode($msg, JSON_UNESCAPED_UNICODE);
        die();
    }
    public function editar($id)
    {
        $data = $this->model->editSexo($id);
        echo json_encode($data, JSON_UNESCAPED_UNICODE);
        die();
    }

 public function eliminar($id)
 {
    $data = $this->model->estadoSexo(0, $id);
    if($data == 1){
        $msg = array('msg' => 'Sexo dado de baja', 'icono' => 'success');
    } else {
        $msg = array('msg' => 'Error al eliminar', 'icono' => 'error');
    }
    echo json_encode($msg, JSON_UNESCAPED_UNICODE);
    die();
 }

 public function reingresar($id)
 {
    $data = $this->model->estadoSexo(1, $id);
    if($data == 1){
        if ($data == 1) {
            $msg = array('msg' => 'Sexo restaurado', 'icono' => 'success');
        } else {
            $msg = array('msg' => 'Error al restaurar', 'icono' => 'error');
        }
        echo json_encode($msg, JSON_UNESCAPED_UNICODE);
        die();
    }
 }
}

?>