<?php
class Cargo extends Controller
{
    public function __construct()
    {
        session_start();
        if(empty($_SESSION['activo'])){
            header("location: " . base_url);
        }
        parent::__construct();
        $id_user = $_SESSION['id_usuario'];
        $perm = $this->model->verificarPermisos($id_user, "Cargo");
        if(!$perm && $id_user != 1) {
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
        $data=$this->model->getCargo();
        for($i=0; $i<count($data); $i++)
        {
            if($data[$i]['Estado'] == 1) {
               $data[$i]['Estado'] ='<span class="badge badge-success">Activo</span>';
               $data[$i]['acciones']='<div>
               <button class="btn btn-primary" type="button" onclick="btnEditarCargo(' .$data[$i]['IDCargo'] . ');"><i class="fa fa-pencil-square-o"></i></button>
               <button class="btn btn-danger" type="button" onclick="btnEliminarCargo(' .$data[$i]['IDCargo'] . ');"><i class="fa fa-trash-o"></i></button>
               <div/>';
            }else {
               $data[$i]['Estado'] = '<span class="badge badge-danger">Inactivo</span>';
               $data[$i]['acciones']= '<div>
                <button class="btn btn-success" type="button" onclick="btnReingresarCargo(' . $data[$i]['IDCargo'] . ');"><i class="fa fa-reply-all"></i></button>
                <div/>';
            }
        }
        echo json_encode($data, JSON_UNESCAPED_UNICODE);
        die();
    }

    public function registrar()
    {
        date_default_timezone_set('America/Lima');
        $cargo = strClean($_POST['cargo']);
        $id = strClean($_POST['id']);
        $usuario = $_SESSION['usuario'];
        $fechaModificar = date('Y-m-d H:i:s');
        if(empty($cargo)){
            $msq = array('msg' => 'El nombre es requerido', 'icono' => 'warning');
        }else {
            if($id == ""){
               $data = $this->model->insertarCargo($cargo, $usuario);
                if($data == "ok"){
                    $msg = array('msg' => 'Cargo registrado', 'icono' => 'success');
                }else if ($data == "existe"){
                    $msg = array('msg' => 'El Cargo ya existe', 'icono' => 'warning');
                } else {
                    $msg = array('msg' => 'Error al registrar', 'icono' => 'error');
                }
            } else {
                $data = $this->model->actualizarCargo($cargo, $usuario, $fechaModificar, $id);
                if ($data == "modificado") {
                    $msg = array('msg' => 'Cargo modificado', 'icono' => 'success');
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
        $data = $this->model->editCargo($id);
        echo json_encode($data, JSON_UNESCAPED_UNICODE);
        die();
    }
    public function eliminar($id)
    {
       $data = $this->model->estadoCargo(0, $id);
       if($data == 1){
           $msg = array('msg' => 'Cargo dado de baja', 'icono' => 'success');
       } else {
           $msg = array('msg' => 'Cargo al eliminar', 'icono' => 'error');
       }
       echo json_encode($msg, JSON_UNESCAPED_UNICODE);
       die();
    }
   
    public function reingresar($id)
    {
       $data = $this->model->estadoCargo(1, $id);
       if($data == 1){
           if ($data == 1) {
               $msg = array('msg' => 'Cargo restaurado', 'icono' => 'success');
           } else {
               $msg = array('msg' => 'Error al restaurar', 'icono' => 'error');
           }
           echo json_encode($msg, JSON_UNESCAPED_UNICODE);
           die();
       }
    }
    



  }



  

 ?>