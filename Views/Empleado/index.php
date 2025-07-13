<?php include "Views/Templates/header.php"; ?>
<div class="app-title">
    <div>
        <h1><i class="fa fa-dashboard"></i> Empleado</h1>
    </div>
</div>
<button class="btn btn-primary mb-2" type="button" onclick="frmEmpleado()"><i class="fa fa-plus"></i></button>
<div class="row">
    <div class="col-lg-12">
        <div class="tile">
            <div class="tile-body">
                <div class="table-responsive">
                    <table class="table table-light mt-4" id="tblEmpleado">
                        <thead class="thead-dark">
                            <tr>
                                <th>Id</th>
                                <th>Nombre</th>
                                <th>Apellido Paterno</th>
                                <th>Apellido Materno</th>
                                <th>Dni</th>
                                <th>Dirección</th>
                                <th>Teléfono</th>
                                <th>Sexo</th>
                                <th>Correo</th>
                                <th>Fecha Nacimiento</th>
                                <th>Cargo</th>
                                <th>Estado</th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </div>
</div>
<div id="nuevoEmpleado" class="modal fade" tabindex="-1" role="dialog" aria-labelledby="my-modal-title" aria-hidden="true">
    <div class="modal-dialog" role="document">
        <div class="modal-content">
            <div class="modal-header bg-primary text-white">
                <h5 class="modal-title text-white" id="title">Registro Empleado</h5>
                <button class="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                </button>
            </div>
            <div class="modal-body">
                <form id="frmEmpleado">
                    <div class="row">
                       
                        <div class="col-md-12">
                            <div class="form-group">
                                <label for="NombrePersona">Nombres</label>
                                <input type="hidden" id="id" name="id">
                                <input id="NombrePersona" class="form-control" type="text" name="NombrePersona" required placeholder="Nombre completo">
                            </div>
                        </div>
                        <div class="col-md-12">
                            <div class="form-group">
                                <label for="ApellidoPaternoPersona">Apellido Paterno</label>
                                <input id="ApellidoPaternoPersona" class="form-control" type="text" name="ApellidoPaternoPersona" required placeholder="Apellido Paterno">
                            </div>
                        </div>
                        <div class="col-md-12">
                            <div class="form-group">
                                <label for="apellidomaterno">Apellido Materno</label>
                                <input id="apellidomaterno" class="form-control" type="text" name="apellidomaterno" required placeholder="Apellido Materno">
                            </div>
                        </div>
                        <div class="col-md-4">
                            <div class="form-group">
                                <label for="telefono">Télefono</label>
                                <input id="telefono" class="form-control" type="text" name="telefono" required placeholder="Télefono">
                            </div>
                        </div>

                        <div class="col-md-4">
                        <div class="form-group">
                                <label for="idsexo">Sexo</label>
                                <select id="idsexo" class="form-control" name="idsexo" required>
                                <option value="">Seleccionar</option>
                                </select>
                            </div>
                        </div>

                        <div class="col-md-4">
                            <div class="form-group">
                                <label for="fechanacimiento">Fecha Nacimiento</label>
                                <input id="fechanacimiento" class="form-control" type="date" name="fechanacimiento" required placeholder="Fecha de Nacimiento">
                            </div>
                        </div>
                        <div class="col-md-12">
                            <div class="form-group">
                                <label for="direccion">Dirección</label>
                                <input id="direccion" class="form-control" type="text" name="direccion" required placeholder="Dirección">
                            </div>
                        </div>
                        <div class="col-md-12">
                            <div class="form-group">
                                <label for="correo">Correo Eléctronico</label>
                                <input id="correo" class="form-control" type="text" name="correo" required placeholder="Correo">
                            </div>
                        </div>

                        <div class="col-md-6">
                            <div class="form-group">
                                <label for="idtipodocumento">Tipo Documento</label>
                                <select id="idtipodocumento" class="form-control" name="idtipodocumento" required>
                                <option value="">Seleccionar</option>
                                </select>
                            </div>
                        </div>
                        
                        <div class="col-md-6">
                            <div class="form-group">
                                <label for="documento">Documento</label>
                                <input id="documento" class="form-control" type="text" name="documento" required placeholder="Dni">
                            </div>
                        </div>
                        <div class="col-md-12">
                            <div class="form-group">
                                <label for="idcargo">Cargo</label>
                                <select id="idcargo" class="form-control" name="idcargo" required>
                                <option value="">Seleccionar Cargo</option>
                                </select>
                            </div>
                        </div>
                        <div class="col-md-12">
                            <div class="form-group">
                                <button class="btn btn-primary" type="submit" onclick="registrarEmpleado(event)" id="btnAccion">Registrar</button>
                                <button class="btn btn-danger" type="button" data-dismiss="modal">Atras</button>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    </div>
</div>
<?php include "Views/Templates/footer.php"; ?>