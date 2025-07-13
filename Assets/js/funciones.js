let tblUsuarios, tblEst, tblMateria, tbltiporeserva, tblServicio, tblAutor, tblSexo, tblCargo, tblDocumento, tblProducto, tblEditorial, tblLibros, tblPrestar,  tblEmpleado ;
document.addEventListener("DOMContentLoaded", function(){
    document.querySelector("#modalPass").addEventListener("click", function () {
        document.querySelector('#frmCambiarPass').reset();
        $('#cambiarClave').modal('show');
    });
    const language = {
        "decimal": "",
        "emptyTable": "No hay información",
        "info": "Mostrando _START_ a _END_ de _TOTAL_ Entradas",
        "infoEmpty": "Mostrando 0 to 0 of 0 Entradas",
        "infoFiltered": "(Filtrado de _MAX_ total entradas)",
        "infoPostFix": "",
        "thousands": ",",
        "lengthMenu": "Mostrar _MENU_ Entradas",
        "loadingRecords": "Cargando...",
        "processing": "Procesando...",
        "search": "Buscar:",
        "zeroRecords": "Sin resultados encontrados",
        "paginate": {
            "first": "Primero",
            "last": "Ultimo",
            "next": "Siguiente",
            "previous": "Anterior"
        }

    }
    const  buttons = [{
                //Botón para Excel
                extend: 'excel',
                footer: true,
                title: 'Archivo',
                filename: 'Export_File',

                //Aquí es donde generas el botón personalizado
                text: '<button class="btn btn-success"><i class="fa fa-file-excel-o"></i></button>'
            },
            //Botón para PDF
            {
                extend: 'pdf',
                footer: true,
                title: 'Archivo PDF',
                filename: 'reporte',
                text: '<button class="btn btn-danger"><i class="fa fa-file-pdf-o"></i></button>'
            },
            //Botón para print
            {
                extend: 'print',
                footer: true,
                title: 'Reportes',
                filename: 'Export_File_print',
                text: '<button class="btn btn-info"><i class="fa fa-print"></i></button>'
            }
        ]
            
    tblUsuarios = $('#tblUsuarios').DataTable({
        ajax: {
            url: base_url + "Usuarios/listar",
            dataSrc: ''
        },
        columns: [
            {'data' : 'id'},
            {'data': 'usuario'},
            {'data': 'nombre'},
            {'data': 'estado'},
            {'data': 'acciones'}
        ],
        responsive: true,
        bDestroy: true,
        iDisplayLength: 10,
        order: [
            [0, "desc"]
        ],
        language,
        dom: "<'row'<'col-sm-4'l><'col-sm-4 text-center'B><'col-sm-4'f>>" +
            "<'row'<'col-sm-12'tr>>" +
            "<'row'<'col-sm-5'i><'col-sm-7'p>>",
        buttons
    });
    //Fin de la tabla usuarios
    tblEst = $('#tblEst').DataTable({
        ajax: {
            url: base_url + "Estudiantes/listar",
            dataSrc: ''
        },
        columns: [{'data': 'id'},
            {'data': 'codigo'},
            {'data': 'dni'},
            {'data': 'nombre'},
            {'data':'carrera'},
            {'data': 'direccion'},
            {'data': 'telefono'},
            {'data': 'estado'},
            {'data': 'acciones'}
        ],
        language,
        dom: "<'row'<'col-sm-4'l><'col-sm-4 text-center'B><'col-sm-4'f>>" +
            "<'row'<'col-sm-12'tr>>" +
            "<'row'<'col-sm-5'i><'col-sm-7'p>>",
            buttons
    });
    //Fin de la tabla Estudiantes
    tblMateria = $('#tblMateria').DataTable({
        ajax: {
            url: base_url + "Materia/listar",
            dataSrc: ''
        },
        columns: [{
                'data': 'id'
            },
            {
                'data': 'materia'
            },
            {
                'data': 'estado'
            },
            {
                'data': 'acciones'
            }
        ],
        language,
        dom: "<'row'<'col-sm-4'l><'col-sm-4 text-center'B><'col-sm-4'f>>" +
            "<'row'<'col-sm-12'tr>>" +
            "<'row'<'col-sm-5'i><'col-sm-7'p>>",
        buttons
    });
    //Fin de la tabla Materias
    tblAutor = $('#tblAutor').DataTable({
        ajax: {
            url: base_url + "Autor/listar",
            dataSrc: ''
        },
        columns: [{
                'data': 'id'
            },
            {
                'data': 'imagen'
            },
            {
                'data': 'autor'
            },
            {
                'data': 'estado'
            },
            {
                'data': 'acciones'
            }
        ],
        language,
        dom: "<'row'<'col-sm-4'l><'col-sm-4 text-center'B><'col-sm-4'f>>" +
            "<'row'<'col-sm-12'tr>>" +
            "<'row'<'col-sm-5'i><'col-sm-7'p>>",
            buttons
    });
    //Fin de la tabla Autor
    tblSexo= $('#tblSexo').DataTable({
        ajax: {
            url: base_url + "Sexo/listar",
            dataSrc: ''
        },
        columns: [{
                'data': 'IDsexo'
            },
            {
                'data': 'DescripcionSexo'
            },
            {
                'data': 'Estado'
            },
            {
                'data': 'Acciones'
            }
        ],
        language,
        dom: "<'row'<'col-sm-4'l><'col-sm-4 text-center'B><'col-sm-4'f>>" +
            "<'row'<'col-sm-12'tr>>" +
            "<'row'<'col-sm-5'i><'col-sm-7'p>>",
            buttons
    });

//Servicio
tblServicio= $('#tblServicio').DataTable({
    ajax: {
        url: base_url + "Servicio/listar",
        dataSrc: ''
    },
    columns: [{
            'data': 'IDServicio'
        },
        {
            'data': 'DescripcionServicio'
        },
        {
            'data': 'PrecioBaseServicio'
        },
        {
            'data': 'Estado'
        },
        {
            'data': 'Acciones'
        }
    ],
    language,
    dom: "<'row'<'col-sm-4'l><'col-sm-4 text-center'B><'col-sm-4'f>>" +
        "<'row'<'col-sm-12'tr>>" +
        "<'row'<'col-sm-5'i><'col-sm-7'p>>",
        buttons
});

//tiporeserva
tbltiporeserva= $('#tbltiporeserva').DataTable({
    ajax: {
        url: base_url + "Tiporeserva/listar",
        dataSrc: ''
    },
    columns: [{
            'data': 'IDTipoReserva'
        },
        {
            'data': 'DescripcionTipoReserva'
        },
        {
            'data': 'Estado'
        },
        {
            'data': 'Acciones'
        }
    ],
    language,
    dom: "<'row'<'col-sm-4'l><'col-sm-4 text-center'B><'col-sm-4'f>>" +
        "<'row'<'col-sm-12'tr>>" +
        "<'row'<'col-sm-5'i><'col-sm-7'p>>",
        buttons
});
    //Fin de la tabla Sexo

    tblProducto= $('#tblProducto').DataTable({
        ajax: {
            url: base_url + "Producto/listar",
            dataSrc: ''
        },
        columns: [{
                'data': 'IDProducto'
            },
            {
                'data': 'NombreProducto'
            },
            {
                'data': 'Estado'
            },
            {
                'data': 'acciones'
            }
        ],
        language,
        dom: "<'row'<'col-sm-4'l><'col-sm-4 text-center'B><'col-sm-4'f>>" +
            "<'row'<'col-sm-12'tr>>" +
            "<'row'<'col-sm-5'i><'col-sm-7'p>>",
            buttons
    });

//Fin de la tabla Producto
    tblCargo= $('#tblCargo').DataTable({
        ajax: {
            url: base_url + "Cargo/listar",
            dataSrc: ''
        },
        columns: [{
                'data': 'IDCargo'
            },
            {
                'data': 'NombreCargo'
            },
            {
                'data': 'Estado'
            },
            {
                'data': 'acciones'
            }
        ],
        language,
        dom: "<'row'<'col-sm-4'l><'col-sm-4 text-center'B><'col-sm-4'f>>" +
            "<'row'<'col-sm-12'tr>>" +
            "<'row'<'col-sm-5'i><'col-sm-7'p>>",
            buttons
    });
///

tblDocumento = $('#tblDocumento').DataTable({
    ajax: {
        url: base_url + "Documento/listar",
        dataSrc: ''
    },
    columns: [{
            'data': 'IDTipoDocumento'
        },
        {
            'data': 'DescripcionDocumento'
        },
        {
            'data': 'Estado'
        },
        {
            'data': 'acciones'
        }
    ],
    language,
    dom: "<'row'<'col-sm-4'l><'col-sm-4 text-center'B><'col-sm-4'f>>" +
        "<'row'<'col-sm-12'tr>>" +
        "<'row'<'col-sm-5'i><'col-sm-7'p>>",
        buttons
});
    //Fin de la tabla editorial

    //Tabla Empledos
    tblEmpleado = $('#tblEmpleado').DataTable({
        ajax: {
            url: base_url + "Empleado/listar",
            dataSrc: ''
        },
        columns: [{
                'data': 'IDPersona'
            },
            {
                'data': 'NombrePersona'
            },
            {
                'data': 'ApellidoPaternoPersona'
            },
            {
                'data': 'ApellidoMaternoPersona'
            },
           
            {
                'data': 'DocumentoPersona'
            },
            {
                'data': 'DireccionPersona'
            },
            {
                'data': 'TelefonoPersona'
            },
            {
                'data': 'descripcionsexo'
            },
            {
                'data': 'CorreoPersona'
            },
            {
                'data': 'FechaNacimientoPersona'
            },
            {
                'data': 'NOMBRECARGO'
            },
            {
                'data': 'Estado'
            },
            {
                'data': 'acciones'
            }
        ],
        language,
        dom: "<'row'<'col-sm-4'l><'col-sm-4 text-center'B><'col-sm-4'f>>" +
            "<'row'<'col-sm-12'tr>>" +
            "<'row'<'col-sm-5'i><'col-sm-7'p>>",
            buttons
    });


    tblLibros = $('#tblLibros').DataTable({
        ajax: {
            url: base_url + "Libros/listar",
            dataSrc: ''
        },
        columns: [{
                'data': 'id'
            },
            {
                'data': 'titulo'
            },
            {
                'data': 'cantidad'
            },            
            {
                'data': 'autor'
            },            
            {
                'data': 'editorial'
            },
	        {
                'data': 'materia'
            },
            {
                'data': 'foto'
            },
            {
                'data': 'descripcion'
            },
            {
                'data': 'estado'
            },
            {
                'data': 'acciones'
            }
        ],
        language,
        dom: "<'row'<'col-sm-4'l><'col-sm-4 text-center'B><'col-sm-4'f>>" +
            "<'row'<'col-sm-12'tr>>" +
            "<'row'<'col-sm-5'i><'col-sm-7'p>>",
            buttons
    });

    //fin Libros
    tblPrestar = $('#tblPrestar').DataTable({
        ajax: {
            url: base_url + "Prestamos/listar",
            dataSrc: ''
        },
        columns: [{
                'data': 'id'
            },
            {
                'data': 'titulo'
            },
            {
                'data': 'nombre'
            },
            {
                'data': 'fecha_prestamo'
            },

            {
                'data': 'fecha_devolucion'
            },
            {
                'data': 'cantidad'
            },
            {
                'data': 'observacion'
            },
            {
                'data': 'estado'
            },
            {
                'data': 'acciones'
            }
        ],
        language,
        dom: "<'row'<'col-sm-4'l><'col-sm-4 text-center'B><'col-sm-4'f>>" +
            "<'row'<'col-sm-12'tr>>" +
            "<'row'<'col-sm-5'i><'col-sm-7'p>>",
        buttons,
        "resonsieve": true,
        "bDestroy": true,
        "iDisplayLength": 10,
        "order": [
            [0, "desc"]
        ]
    });
    $('.estudiante').select2({
        placeholder: 'Buscar Estudiante',
        minimumInputLength: 2,
        ajax: {
            url: base_url + 'Estudiantes/buscarEstudiante',
            dataType: 'json',
            delay: 250,
            data: function (params) {
                return {
                    est: params.term
                };
            },
            processResults: function (data) {
                return {
                    results: data
                };
            },
            cache: true
        }
    });
    $('.libro').select2({
        placeholder: 'Buscar Libro',
            minimumInputLength: 2,
            ajax: {
                url: base_url + 'Libros/buscarLibro',
                dataType: 'json',
                delay: 250,
                data: function (params) {
                    return {
                        lb: params.term
                    };
                },
                processResults: function (data) {
                    return {
                        results: data
                    };
                },
                cache: true
            }
    });
    $('.autor').select2({
        placeholder: 'Buscar Autor',
        minimumInputLength: 2,
        ajax: {
            url: base_url + 'Autor/buscarAutor',
            dataType: 'json',
            delay: 250,
            data: function (params) {
                return {
                    q: params.term
                };
            },
            processResults: function (data) {
                return {
                    results: data
                };
            },
            cache: true
        }
    });
    $('.editorial').select2({
        placeholder: 'Buscar Editorial',
        minimumInputLength: 2,
        ajax: {
            url: base_url + 'Editorial/buscarEditorial',
            dataType: 'json',
            delay: 250,
            data: function (params) {
                return {
                    q: params.term
                };
            },
            processResults: function (data) {
                return {
                    results: data
                };
            },
            cache: true
        }
    });
    $('.materia').select2({
        placeholder: 'Buscar Materia',
        minimumInputLength: 2,
        ajax: {
            url: base_url + 'Materia/buscarMateria',
            dataType: 'json',
            delay: 250,
            data: function (params) {
                return {
                    q: params.term
                };
            },
            processResults: function (data) {
                return {
                    results: data
                };
            },
            cache: true
        }
    });

    if (document.getElementById('nombre_estudiante')) {
        const http = new XMLHttpRequest();
        const url = base_url + 'Configuracion/verificar';
        http.open("GET", url);
        http.send();
        http.onreadystatechange = function () {
            if (this.readyState == 4 && this.status == 200) {
                const res = JSON.parse(this.responseText);
                let html = '';
                res.forEach(row => {
                    html += `
                    <a class="app-notification__item" href="javascript:;"><span class="app-notification__icon"><span class="fa-stack fa-lg"><i class="fa fa-circle fa-stack-2x text-primary"></i><i class="fa fa-user-o fa-stack-1x fa-inverse"></i></span></span>
                        <div>
                            <p class="app-notification__message" id="nombre_estudiante">${row.nombre}</p>
                            <p class="app-notification__meta" id="fecha_entrega">${row.fecha_devolucion}</p>
                        </div>
                    </a>
                    `;
                });
                document.getElementById('nombre_estudiante').innerHTML = html;
            }
        }
    }
})

function frmUsuario() {
    document.getElementById("title").textContent = "Nuevo Usuario";
    document.getElementById("btnAccion").textContent = "Registrar";
    document.getElementById("claves").classList.remove("d-none");
    document.getElementById("frmUsuario").reset();
    document.getElementById("id").value = "";
    $("#nuevo_usuario").modal("show");
}
function registrarUser(e) {
    e.preventDefault();
    const usuario = document.getElementById("usuario");
    const nombre = document.getElementById("nombre");
    const clave = document.getElementById("clave");
    const confirmar = document.getElementById("confirmar");
    if (usuario.value == "" || nombre.value == "") {
        alertas('Todo los campos son requeridos', 'warning');
    } else {
        const url = base_url + "Usuarios/registrar";
        const frm = document.getElementById("frmUsuario");
        const http = new XMLHttpRequest();
        http.open("POST", url, true);
        http.send(new FormData(frm));
        http.onreadystatechange = function () {
            if (this.readyState == 4 && this.status == 200) {
                const res = JSON.parse(this.responseText);
                $("#nuevo_usuario").modal("hide");
                frm.reset();
                tblUsuarios.ajax.reload();
                alertas(res.msg, res.icono);
            }
        }
    }
}
function btnEditarUser(id) {
    document.getElementById("title").textContent = "Actualizar usuario";
    document.getElementById("btnAccion").textContent = "Modificar";
    const url = base_url + "Usuarios/editar/"+id;
    const http = new XMLHttpRequest();
    http.open("GET", url, true);
    http.send();
    http.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            const res = JSON.parse(this.responseText);
            document.getElementById("id").value = res.id;
            document.getElementById("usuario").value = res.usuario;
            document.getElementById("nombre").value = res.nombre;
            document.getElementById("claves").classList.add("d-none");
            $("#nuevo_usuario").modal("show");
        }
    }
}
function btnEliminarUser(id) {
    Swal.fire({
        title: 'Esta seguro de eliminar?',
        text: "El usuario no se eliminará de forma permanente, solo cambiará el estado a inactivo!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Si!',
        cancelButtonText: 'No'
    }).then((result) => {
        if (result.isConfirmed) {
            const url = base_url + "Usuarios/eliminar/" + id;
            const http = new XMLHttpRequest();
            http.open("GET", url, true);
            http.send();
            http.onreadystatechange = function () {
                if (this.readyState == 4 && this.status == 200) {
                    const res = JSON.parse(this.responseText);
                    tblUsuarios.ajax.reload();
                    alertas(res.msg, res.icono);
                }
            }
            
        }
    })
}
function btnReingresarUser(id) {
    Swal.fire({
        title: 'Esta seguro de reingresar?',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Si!',
        cancelButtonText: 'No'
    }).then((result) => {
        if (result.isConfirmed) {
            const url = base_url + "Usuarios/reingresar/" + id;
            const http = new XMLHttpRequest();
            http.open("GET", url, true);
            http.send();
            http.onreadystatechange = function () {
                if (this.readyState == 4 && this.status == 200) {
                    const res = JSON.parse(this.responseText);
                    tblUsuarios.ajax.reload();
                    alertas(res.msg, res.icono);
                }
            }

        }
    })
}
//Fin Usuarios
function frmEstudiante() {
    document.getElementById("title").textContent = "Nuevo Estuadiante";
    document.getElementById("btnAccion").textContent = "Registrar";
    document.getElementById("frmEstudiante").reset();
    document.getElementById("id").value = "";
    $("#nuevoEstudiante").modal("show");
}

function registrarEstudiante(e) {
    e.preventDefault();
    const codigo = document.getElementById("codigo");
    const dni = document.getElementById("dni");
    const nombre = document.getElementById("nombre");
    const carrera = document.getElementById("carrera");
    const telefono = document.getElementById("telefono");
    const direccion = document.getElementById("direccion");
    if (codigo.value == "" || dni.value == "" || nombre.value == ""
    || telefono.value == "" || direccion.value == "" || carrera.value == "") {
        alertas('Todo los campos son requeridos', 'warning');
    } else {
        const url = base_url + "Estudiantes/registrar";
        const frm = document.getElementById("frmEstudiante");
        const http = new XMLHttpRequest();
        http.open("POST", url, true);
        http.send(new FormData(frm));
        http.onreadystatechange = function () {
            if (this.readyState == 4 && this.status == 200) {
                const res = JSON.parse(this.responseText);
                $("#nuevoEstudiante").modal("hide");
                frm.reset();
                tblEst.ajax.reload();
                alertas(res.msg, res.icono);
            }
        }
    }
}

function btnEditarEst(id) {
    document.getElementById("title").textContent = "Actualizar estudiante";
    document.getElementById("btnAccion").textContent = "Modificar";
    const url = base_url + "Estudiantes/editar/" + id;
    const http = new XMLHttpRequest();
    http.open("GET", url, true);
    http.send();
    http.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            const res = JSON.parse(this.responseText);
            document.getElementById("id").value = res.id;
            document.getElementById("codigo").value = res.codigo;
            document.getElementById("dni").value = res.dni;
            document.getElementById("nombre").value = res.nombre;
            document.getElementById("carrera").value = res.carrera;
            document.getElementById("telefono").value = res.telefono;
            document.getElementById("direccion").value = res.direccion;
            $("#nuevoEstudiante").modal("show");
        }
    }
}

function btnEliminarEst(id) {
    Swal.fire({
        title: 'Esta seguro de eliminar?',
        text: "El estudiante no se eliminará de forma permanente, solo cambiará el estado a inactivo!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Si!',
        cancelButtonText: 'No'
    }).then((result) => {
        if (result.isConfirmed) {
            const url = base_url + "Estudiantes/eliminar/" + id;
            const http = new XMLHttpRequest();
            http.open("GET", url, true);
            http.send();
            http.onreadystatechange = function () {
                if (this.readyState == 4 && this.status == 200) {
                    const res = JSON.parse(this.responseText);
                    tblEst.ajax.reload();
                    alertas(res.msg, res.icono);
                }
            }

        }
    })
}

function btnReingresarEst(id) {
    Swal.fire({
        title: 'Esta seguro de reingresar?',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Si!',
        cancelButtonText: 'No'
    }).then((result) => {
        if (result.isConfirmed) {
            const url = base_url + "Estudiantes/reingresar/" + id;
            const http = new XMLHttpRequest();
            http.open("GET", url, true);
            http.send();
            http.onreadystatechange = function () {
                if (this.readyState == 4 && this.status == 200) {
                    const res = JSON.parse(this.responseText);
                    tblEst.ajax.reload();
                    alertas(res.msg, res.icono);
                }
            }

        }
    })
}
//Fin Estudiante
function frmMateria() {
    document.getElementById("title").textContent = "Nueva Materia";
    document.getElementById("btnAccion").textContent = "Registrar";
    document.getElementById("frmMateria").reset();
    document.getElementById("id").value = "";
    $("#nuevoMateria").modal("show");
}

function registrarMateria(e) {
    e.preventDefault();
    const materia = document.getElementById("materia");
    if (materia.value == "") {
        alertas('La materia es requerido', 'warning');
    } else {
        const url = base_url + "Materia/registrar";
        const frm = document.getElementById("frmMateria");
        const http = new XMLHttpRequest();
        http.open("POST", url, true);
        http.send(new FormData(frm));
        http.onreadystatechange = function () {
            if (this.readyState == 4 && this.status == 200) {
                const res = JSON.parse(this.responseText);
                $("#nuevoMateria").modal("hide");
                frm.reset();
                tblMateria.ajax.reload();
                alertas(res.msg, res.icono);
            }
        }
    }
}

function btnEditarMat(id) {
    document.getElementById("title").textContent = "Actualizar caja";
    document.getElementById("btnAccion").textContent = "Modificar";
    const url = base_url + "Materia/editar/" + id;
    const http = new XMLHttpRequest();
    http.open("GET", url, true);
    http.send();
    http.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            const res = JSON.parse(this.responseText);
            document.getElementById("id").value = res.id;
            document.getElementById("materia").value = res.materia;
            $("#nuevoMateria").modal("show");
        }
    }
}

function btnEliminarMat(id) {
    Swal.fire({
        title: 'Esta seguro de eliminar?',
        text: "La materia no se eliminará de forma permanente, solo cambiará el estado a inactivo!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Si!',
        cancelButtonText: 'No'
    }).then((result) => {
        if (result.isConfirmed) {
            const url = base_url + "Materia/eliminar/" + id;
            const http = new XMLHttpRequest();
            http.open("GET", url, true);
            http.send();
            http.onreadystatechange = function () {
                if (this.readyState == 4 && this.status == 200) {
                    const res = JSON.parse(this.responseText);
                    tblMateria.ajax.reload();
                    alertas(res.msg, res.icono);
                }
            }

        }
    })
}

function btnReingresarMat(id) {
    Swal.fire({
        title: 'Esta seguro de reingresar?',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Si!',
        cancelButtonText: 'No'
    }).then((result) => {
        if (result.isConfirmed) {
            const url = base_url + "Materia/reingresar/" + id;
            const http = new XMLHttpRequest();
            http.open("GET", url, true);
            http.send();
            http.onreadystatechange = function () {
                if (this.readyState == 4 && this.status == 200) {
                    const res = JSON.parse(this.responseText);
                    tblMateria.ajax.reload();
                    alertas(res.msg, res.icono);
                }
            }

        }
    })
}
//Fin Materia
function frmAutor() {
    document.getElementById("title").textContent= "Nuevo Autor";
    document.getElementById("btnAccion").textContent= "Registrar";
    document.getElementById("frmAutor").reset();
    document.getElementById("id").value = "";
    deleteImg();
    $("#nuevoAutor").modal("show");
}

function registrarAutor(e) {
    e.preventDefault();
    const autor = document.getElementById("autor");
    if (autor.value == "") {
        alertas('El nombre es requerido', 'warning');
    } else {
        const url = base_url + "Autor/registrar";
        const frm = document.getElementById("frmAutor");
        const http = new XMLHttpRequest();
        http.open("POST", url, true);
        http.send(new FormData(frm));
        http.onreadystatechange = function () {
            if (this.readyState == 4 && this.status == 200) {
                const res = JSON.parse(this.responseText);
                $("#nuevoAutor").modal("hide");
                frm.reset();
                tblAutor.ajax.reload();
                alertas(res.msg, res.icono);
            }
        }
    }
}

function btnEditarAutor(id) {
    document.getElementById("title").textContent = "Actualizar Autor";
    document.getElementById("btnAccion").textContent = "Modificar";
    const url = base_url + "Autor/editar/" + id;
    const http = new XMLHttpRequest();
    http.open("GET", url, true);
    http.send();
    http.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            const res = JSON.parse(this.responseText);
            document.getElementById("id").value = res.id;
            document.getElementById("autor").value = res.autor;
            document.getElementById("foto_actual").value = res.imagen;
            document.getElementById("img-preview").src = base_url + 'Assets/img/autor/' + res.imagen;
            document.getElementById("icon-image").classList.add("d-none");
            document.getElementById("icon-cerrar").innerHTML = `
            <button class="btn btn-danger" onclick="deleteImg()">
            <i class="fa fa-times-circle"></i></button>`;
            $("#nuevoAutor").modal("show");
        }
    }
}

function btnEliminarAutor(id) {
    Swal.fire({
        title: 'Esta seguro de eliminar?',
        text: "El Autor no se eliminará de forma permanente, solo cambiará el estado a inactivo!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Si!',
        cancelButtonText: 'No'
    }).then((result) => {
        if (result.isConfirmed) {
            const url = base_url + "Autor/eliminar/" + id;
            const http = new XMLHttpRequest();
            http.open("GET", url, true);
            http.send();
            http.onreadystatechange = function () {
                if (this.readyState == 4 && this.status == 200) {
                    const res = JSON.parse(this.responseText);
                    tblAutor.ajax.reload();
                    alertas(res.msg, res.icono);
                }
            }

        }
    })
}

function btnReingresarAutor(id) {
    Swal.fire({
        title: 'Esta seguro de reingresar?',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Si!',
        cancelButtonText: 'No'
    }).then((result) => {
        if (result.isConfirmed) {
            const url = base_url + "Autor/reingresar/" + id;
            const http = new XMLHttpRequest();
            http.open("GET", url, true);
            http.send();
            http.onreadystatechange = function () {
                if (this.readyState == 4 && this.status == 200) {
                    const res = JSON.parse(this.responseText);
                    tblAutor.ajax.reload();
                    alertas(res.msg, res.icono);
                }
            }

        }
    })
}

//Empleado
function frmEmpleado() {
    document.getElementById("title").textContent = "Nuevo Empleado";
    document.getElementById("btnAccion").textContent = "Registrar";
    document.getElementById("frmEmpleado").reset();
    document.getElementById("id").value = "";
    cargarComboCargo();
    cargarComboSexo();
    cargarComboTipodocumento();
    $("#nuevoEmpleado").modal("show");
}
    
//cargar combocargos para el formularioempleados
function cargarComboCargo(seleccionado = null) {
    const url = base_url + "Empleado/listarcargo";
    const http = new XMLHttpRequest();
    http.open("GET", url, true);
    http.send();

    http.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            const respuesta = JSON.parse(this.responseText); // Parseamos la respuesta JSON.
            console.log(respuesta); // Verifica la estructura de los datos aquí.

            // Comprobamos si la respuesta contiene un objeto con claves numéricas.
            const cargo = Object.values(respuesta); // Convierte el objeto en un array.
    
            // Verifica si realmente tenemos un array de cargos.
            if (Array.isArray(cargo)) {
                const comboEmpleado = document.getElementById("idcargo");
                comboEmpleado.innerHTML = "<option value=''>Seleccionar</option>"; // Opción predeterminada.                
                cargo.forEach(function(cargo) {
                    const option = document.createElement("option");
                    option.value = cargo.IDCargo;
                    option.textContent = cargo.NombreCargo;

                    // Si el valor del cargo coincide con el valor recibido (seleccionado), lo seleccionamos
                    if (cargo.IDCargo === seleccionado) {
                        option.selected = true; // Marca esta opción como seleccionada
                    }

                    comboEmpleado.appendChild(option);
                });
            } else {
                console.error('La respuesta no contiene un array de cargos:', respuesta);
            }
        }
    };
}

//Cargar el combo Sexo

function cargarComboSexo(seleccionado = null) {
    const url = base_url + "Empleado/listarsexo";
    const http = new XMLHttpRequest();
    http.open("GET", url, true);
    http.send();

    http.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            const respuesta = JSON.parse(this.responseText); // Parseamos la respuesta JSON.
            console.log(respuesta); // Verifica la estructura de los datos aquí.

            // Comprobamos si la respuesta contiene un objeto con claves numéricas.
            const sexo = Object.values(respuesta); // Convierte el objeto en un array.
    
            // Verifica si realmente tenemos un array de sexo.
            if (Array.isArray(sexo)) {
                const comboSexo = document.getElementById("idsexo");
                comboSexo.innerHTML = "<option value=''>Seleccionar</option>"; // Opción predeterminada.

                sexo.forEach(function(sexo) {
                    const option = document.createElement("option");
                    option.value = sexo.IDSexo;
                    option.textContent = sexo.DescripcionSexo;

                    // Si el valor del sexo coincide con el valor recibido (seleccionado), lo seleccionamos
                    if (sexo.IDSexo === seleccionado) {
                        option.selected = true; // Marca esta opción como seleccionada
                    }

                    comboSexo.appendChild(option);
                });
            } else {
                console.error('La respuesta no contiene un array de sexos:', respuesta);
            }
        }
    };
}


function cargarComboTipodocumento(seleccionado = null) {
    const url = base_url + "Empleado/listartipodocumento";
    const http = new XMLHttpRequest();
    http.open("GET", url, true);
    http.send();

    http.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            const respuesta = JSON.parse(this.responseText); // Parseamos la respuesta JSON.
            console.log(respuesta); // Verifica la estructura de los datos aquí.

            // Comprobamos si la respuesta contiene un objeto con claves numéricas.
            const tipodocumento = Object.values(respuesta); // Convierte el objeto en un array.
    
            // Verifica si realmente tenemos un array de empleados.
            if (Array.isArray(tipodocumento)) {
                const combotipodocumento = document.getElementById("idtipodocumento");
                combotipodocumento.innerHTML = "<option value=''>Seleccionar</option>"; // Opción por defecto.

                // Llenar el combo con los valores de la respuesta
                tipodocumento.forEach(function(tipodocumento) {
                    const option = document.createElement("option");
                    option.value = tipodocumento.IDTipoDocumento;
                    option.textContent = tipodocumento.DescripcionDocumento;

                    // Si el valor del tipo de documento coincide con el valor recibido, lo seleccionamos
                    if (tipodocumento.IDTipoDocumento === seleccionado) {
                        option.selected = true; // Selecciona esta opción
                    }

                    combotipodocumento.appendChild(option);
                });
            } else {
                console.error('La respuesta no contiene un array de tipos de documentos:', respuesta);
            }
        }
    };
}





function registrarEmpleado(e) {
    e.preventDefault();
    const nombre = document.getElementById("NombrePersona");
    const apellidoparterno = document.getElementById("ApellidoPaternoPersona");
    const apellidomaterno = document.getElementById("ApellidoMaternoPersona");
    
    const id = document.getElementById("id");

    if (nombre.value == "" || apellidoparterno == "") {
        alertas('El Nombre es requerido', 'warning');
    } else {
        const url = base_url + "Empleado/registrar";
        const frm = document.getElementById("frmEmpleado");
        const http = new XMLHttpRequest();
        http.open("POST", url, true);
        http.send(new FormData(frm));

        http.onreadystatechange = function () {
            if (this.readyState == 4) {
                if (this.status == 200) {
                    console.log("Respuesta recibida:");
                    console.log(this.responseText);  // Muestra el JSON que se recibe

                    try {
                        // Intentamos parsear la respuesta a JSON
                        const res = JSON.parse(this.responseText);

                        console.log("Respuesta parseada:");
                        // Muestra el JSON con indentación para hacerlo más legible
                        console.log(JSON.stringify(res, null, 2));

                        // Oculta el modal, reinicia el formulario y recarga la tabla
                        $("#nuevoEmpleado").modal("hide");
                        frm.reset();
                        tblEmpleado.ajax.reload();
                        
                        // Muestra la alerta con el mensaje y el icono
                        alertas(res.msg, res.icono);
                    } catch (error) {
                        // Si ocurre un error al parsear el JSON
                        console.error("Error al parsear JSON:", error);
                        alertas("Hubo un error al procesar la respuesta del servidor", 'error');
                    }
                } else {
                    // Si la respuesta no es exitosa (código de estado no 200)
                    console.log("Error en la respuesta del servidor:");
                    console.log(this.status, this.statusText);
                }
            }
        }
    }
}

function btnEditarEmpleado(id) {
    document.getElementById("title").textContent = "Editar Empleado";
    document.getElementById("btnAccion").textContent = "Modificar";
    const url = base_url + "Empleado/editar/" + id;
    const http = new XMLHttpRequest();
    http.open("GET", url, true);
    http.send();
    http.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            const res = JSON.parse(this.responseText);
            // Mostrar la respuesta en la consola
            console.log(res); // Aquí es donde se muestran los datos que recibes
            
            document.getElementById("id").value = res.IDPersona;
            document.getElementById("NombrePersona").value = res.NombrePersona;
            document.getElementById("ApellidoPaternoPersona").value = res.ApellidoPaternoPersona;
            document.getElementById("apellidomaterno").value = res.ApellidoMaternoPersona;
            document.getElementById("telefono").value = res.TelefonoPersona;
           // document.getElementById("idsexo").value = res.IDSexo;
            document.getElementById("fechanacimiento").value = res.FechaNacimientoPersona;
            document.getElementById("direccion").value = res.DireccionPersona;
            document.getElementById("correo").value = res.CorreoPersona;
           // document.getElementById("idtipodocumento").value = res.IDTipoDuocmento;
           //document.getElementById("idcargo").value = res.IDCargo;
           cargarComboCargo(res.IDCargo);
           cargarComboSexo(res.IDSexo);
           cargarComboTipodocumento(res.IDTipoDocumento);

            $("#nuevoEmpleado").modal("show");
        }
    }
}

function btnEliminarEmpleado(id){
    Swal.fire({
        title: 'Esta seguro de eliminar?',
        text: "El Cargo no se eliminará de forma permanente, solo cambiará el estado a inactivo!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Si!',
        cancelButtonText: 'No'
    }).then((result) => {
        if (result.isConfirmed) {
            const url = base_url + "Empleado/eliminar/" + id;
            const http = new XMLHttpRequest();
            http.open("GET", url, true);
            http.send();
            http.onreadystatechange = function () {
                if (this.readyState == 4 && this.status == 200) {
                    const res = JSON.parse(this.responseText);
                    tblEmpleado.ajax.reload();
                    alertas(res.msg, res.icono);
                }
            }

        }
    })
}

function btnReingresarEmpleado(id){
    Swal.fire({
        title: 'Esta seguro de reingresar?',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Si!',
        cancelButtonText: 'No'
    }).then((result) => {
        if (result.isConfirmed) {
            const url = base_url + "Empleado/reingresar/" + id;
            const http = new XMLHttpRequest();
            http.open("GET", url, true);
            http.send();
            http.onreadystatechange = function () {
                if (this.readyState == 4 && this.status == 200) {
                    const res = JSON.parse(this.responseText);
                    tblEmpleado.ajax.reload();
                    alertas(res.msg, res.icono);
                }
            }

        }
    })
}
//Fin Autor
function frmCargo() {
    document.getElementById("title").textContent = "Nuevo Cargo";
    document.getElementById("btnAccion").textContent = "Registrar";
    document.getElementById("frmCargo").reset();
    document.getElementById("id").value = "";
    $("#nuevoCargo").modal("show");
}
function registrarCargo(e) {
    e.preventDefault();
    const cargo = document.getElementById("cargo");
    const id = document.getElementById("id");
    if (cargo.value == "") {
        alertas('El Cargo es requerido', 'warning');
    } else {
        const url = base_url + "Cargo/registrar";
        const frm = document.getElementById("frmCargo");
        const http = new XMLHttpRequest();
        http.open("POST", url, true);
        http.send(new FormData(frm));
        http.onreadystatechange = function () {
            if (this.readyState == 4 && this.status == 200) {
                const res = JSON.parse(this.responseText);
                $("#nuevoCargo").modal("hide");
                frm.reset();
                tblCargo.ajax.reload();
                alertas(res.msg, res.icono);
            }
        }
    }
}

function btnEditarCargo(id) {
    document.getElementById("title").textContent = "Editar Cargo";
    document.getElementById("btnAccion").textContent = "Modificar";
    const url = base_url + "Cargo/editar/" + id;
    const http = new XMLHttpRequest();
    http.open("GET", url, true);
    http.send();
    http.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            const res = JSON.parse(this.responseText);
            // Mostrar la respuesta en la consola
            console.log(res); // Aquí es donde se muestran los datos que recibes
            
            document.getElementById("id").value = res.IDCargo;
            document.getElementById("cargo").value = res.NombreCargo;
            $("#nuevoCargo").modal("show");
        }
    }
}

function btnEliminarCargo(id){
    Swal.fire({
        title: 'Esta seguro de eliminar?',
        text: "El Cargo no se eliminará de forma permanente, solo cambiará el estado a inactivo!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Si!',
        cancelButtonText: 'No'
    }).then((result) => {
        if (result.isConfirmed) {
            const url = base_url + "Cargo/eliminar/" + id;
            const http = new XMLHttpRequest();
            http.open("GET", url, true);
            http.send();
            http.onreadystatechange = function () {
                if (this.readyState == 4 && this.status == 200) {
                    const res = JSON.parse(this.responseText);
                    tblCargo.ajax.reload();
                    alertas(res.msg, res.icono);
                }
            }

        }
    })
}

function btnReingresarCargo(id){
    Swal.fire({
        title: 'Esta seguro de reingresar?',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Si!',
        cancelButtonText: 'No'
    }).then((result) => {
        if (result.isConfirmed) {
            const url = base_url + "Cargo/reingresar/" + id;
            const http = new XMLHttpRequest();
            http.open("GET", url, true);
            http.send();
            http.onreadystatechange = function () {
                if (this.readyState == 4 && this.status == 200) {
                    const res = JSON.parse(this.responseText);
                    tblCargo.ajax.reload();
                    alertas(res.msg, res.icono);
                }
            }

        }
    })
}
//Servicio
function frmServicio() {
    document.getElementById("title").textContent = "Nuevo Servicio";
    document.getElementById("btnAccion").textContent = "Registrar";
    document.getElementById("frmServicio").reset();
    document.getElementById("id").value = "";
    $("#nuevoServicio").modal("show");
}
function registrarServicio(e) {
    e.preventDefault();
    const servicio = document.getElementById("servicio");
    const preciobase = document.getElementById("preciobase");
    const id = document.getElementById("id");
    if (servicio.value == "" || preciobase.value == ""  ) {
        alertas('El Servicio y el precio Base es requerido', 'warning');
    } else {
        const url = base_url + "Servicio/registrar";
        const frm = document.getElementById("frmServicio");
        const http = new XMLHttpRequest();
        http.open("POST", url, true);
        http.send(new FormData(frm));
        http.onreadystatechange = function () {
            if (this.readyState == 4 && this.status == 200) {
                const res = JSON.parse(this.responseText);
                $("#nuevoServicio").modal("hide");
                frm.reset();
                tblServicio.ajax.reload();
                alertas(res.msg, res.icono);
            }
        }
    }
}

function btnEditarServicio(id) {
    document.getElementById("title").textContent = "Editar Servicio";
    document.getElementById("btnAccion").textContent = "Modificar";
    const url = base_url + "Servicio/editar/" + id;
    const http = new XMLHttpRequest();
    http.open("GET", url, true);
    http.send();
    http.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            const res = JSON.parse(this.responseText);
            // Mostrar la respuesta en la consola
            console.log(res); // Aquí es donde se muestran los datos que recibes
            
            document.getElementById("id").value = res.IDServicio;
            document.getElementById("servicio").value = res.DescripcionServicio;
            document.getElementById("preciobase").value = res.PrecioBaseServicio;

            $("#nuevoServicio").modal("show");
        }
    }
}


function btnEliminarServicio(id){
    Swal.fire({
        title: 'Esta seguro de eliminar?',
        text: "El Servicio no se eliminará de forma permanente, solo cambiará el estado a inactivo!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Si!',
        cancelButtonText: 'No'
    }).then((result) => {
        if (result.isConfirmed) {
            const url = base_url + "Servicio/eliminar/" + id;
            const http = new XMLHttpRequest();
            http.open("GET", url, true);
            http.send();
            http.onreadystatechange = function () {
                if (this.readyState == 4 && this.status == 200) {
                    const res = JSON.parse(this.responseText);
                    tblServicio.ajax.reload();
                    alertas(res.msg, res.icono);
                }
            }

        }
    })
}

function btnReingresarServicio(id){
    Swal.fire({
        title: 'Esta seguro de reingresar?',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Si!',
        cancelButtonText: 'No'
    }).then((result) => {
        if (result.isConfirmed) {
            const url = base_url + "Servicio/reingresar/" + id;
            const http = new XMLHttpRequest();
            http.open("GET", url, true);
            http.send();
            http.onreadystatechange = function () {
                if (this.readyState == 4 && this.status == 200) {
                    const res = JSON.parse(this.responseText);
                    tblServicio.ajax.reload();
                    alertas(res.msg, res.icono);
                }
            }

        }
    })
}


//Tipo de Documento
function frmDocumento() {
    document.getElementById("title").textContent = "Nuevo Documento";
    document.getElementById("btnAccion").textContent = "Registrar";
    document.getElementById("frmDocumento").reset();
    document.getElementById("id").value = "";
    $("#nuevoDocumento").modal("show");
}

function registrarDocumento(e) {
    e.preventDefault();
    const documento = document.getElementById("documento");
    const id = document.getElementById("id");
    if (documento.value == "") {
        alertas('El Documento es requerido', 'warning');
    } else {
        const url = base_url + "Documento/registrar";
        const frm = document.getElementById("frmDocumento");
        const http = new XMLHttpRequest();
        http.open("POST", url, true);
        http.send(new FormData(frm));
        http.onreadystatechange = function () {
            if (this.readyState == 4 && this.status == 200) {
                const res = JSON.parse(this.responseText);
                 console.log(res);
                $("#nuevoDocumento").modal("hide");
                frm.reset();
                tblDocumento.ajax.reload();
                alertas(res.msg, res.icono);
            }
        }
    }
}

function btnEditarDocumento(id) {
    document.getElementById("title").textContent = "Editar Documento";
    document.getElementById("btnAccion").textContent = "Modificar";
    const url = base_url + "Documento/editar/" + id;
    const http = new XMLHttpRequest();
    http.open("GET", url, true);
    http.send();
    http.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            const res = JSON.parse(this.responseText);
            // Mostrar la respuesta en la consola
            console.log(res); // Aquí es donde se muestran los datos que recibes
            
            document.getElementById("id").value = res.IDTipoDocumento;
            document.getElementById("documento").value = res.DescripcionDocumento;
            $("#nuevoDocumento").modal("show");
        }
    }
}

function btnEliminarDocumento(id){
    Swal.fire({
        title: 'Esta seguro de eliminar?',
        text: "El Documento no se eliminará de forma permanente, solo cambiará el estado a inactivo!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Si!',
        cancelButtonText: 'No'
    }).then((result) => {
        if (result.isConfirmed) {
            const url = base_url + "Documento/eliminar/" + id;
            const http = new XMLHttpRequest();
            http.open("GET", url, true);
            http.send();
            http.onreadystatechange = function () {
                if (this.readyState == 4 && this.status == 200) {
                    const res = JSON.parse(this.responseText);
                    tblDocumento.ajax.reload();
                    alertas(res.msg, res.icono);
                }
            }

        }
    })
}

function btnReingresarDocumento(id){
    Swal.fire({
        title: 'Esta seguro de reingresar?',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Si!',
        cancelButtonText: 'No'
    }).then((result) => {
        if (result.isConfirmed) {
            const url = base_url + "Documento/reingresar/" + id;
            const http = new XMLHttpRequest();
            http.open("GET", url, true);
            http.send();
            http.onreadystatechange = function () {
                if (this.readyState == 4 && this.status == 200) {
                    const res = JSON.parse(this.responseText);
                    tblDocumento.ajax.reload();
                    alertas(res.msg, res.icono);
                }
            }

        }
    })
}
//Producto

function frmProducto() {
    document.getElementById("title").textContent = "Nuevo Producto";
    document.getElementById("btnAccion").textContent = "Registrar";
    document.getElementById("frmProducto").reset();
    document.getElementById("id").value = "";
    $("#nuevoProducto").modal("show");
}

function registrarProducto(e) {
    e.preventDefault();
    const producto = document.getElementById("producto");
    const id = document.getElementById("id");
    if (producto.value == "") {
        alertas('El Producto es requerido', 'warning');
    } else {
        const url = base_url + "Producto/registrar";
        const frm = document.getElementById("frmProducto");
        const http = new XMLHttpRequest();
        http.open("POST", url, true);
        http.send(new FormData(frm));
        http.onreadystatechange = function () {
            if (this.readyState == 4 && this.status == 200) {
                const res = JSON.parse(this.responseText);
                 console.log(res);
                $("#nuevoProducto").modal("hide");
                frm.reset();
                tblProducto.ajax.reload();
                alertas(res.msg, res.icono);
            }
        }
    }
}

function btnEditarProducto(id) {
    document.getElementById("title").textContent = "Editar Producto";
    document.getElementById("btnAccion").textContent = "Modificar";
    const url = base_url + "Producto/editar/" + id;
    const http = new XMLHttpRequest();
    http.open("GET", url, true);
    http.send();
    http.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            const res = JSON.parse(this.responseText);
            // Mostrar la respuesta en la consola
            console.log(res); // Aquí es donde se muestran los datos que recibes
            
            document.getElementById("id").value = res.IDProducto;
            document.getElementById("producto").value = res.NombreProducto;
            $("#nuevoProducto").modal("show");
        }
    }
}

function btnEliminarProducto(id){
    Swal.fire({
        title: 'Esta seguro de eliminar?',
        text: "El Producto no se eliminará de forma permanente, solo cambiará el estado a inactivo!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Si!',
        cancelButtonText: 'No'
    }).then((result) => {
        if (result.isConfirmed) {
            const url = base_url + "Producto/eliminar/" + id;
            const http = new XMLHttpRequest();
            http.open("GET", url, true);
            http.send();
            http.onreadystatechange = function () {
                if (this.readyState == 4 && this.status == 200) {
                    const res = JSON.parse(this.responseText);
                    tblProducto.ajax.reload();
                    alertas(res.msg, res.icono);
                }
            }

        }
    })
}

function btnReingresarProducto(id){
    Swal.fire({
        title: 'Esta seguro de reingresar?',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Si!',
        cancelButtonText: 'No'
    }).then((result) => {
        if (result.isConfirmed) {
            const url = base_url + "Producto/reingresar/" + id;
            const http = new XMLHttpRequest();
            http.open("GET", url, true);
            http.send();
            http.onreadystatechange = function () {
                if (this.readyState == 4 && this.status == 200) {
                    const res = JSON.parse(this.responseText);
                    tblProducto.ajax.reload();
                    alertas(res.msg, res.icono);
                }
            }

        }
    })
}

//Tipo Reserva
function frmTipoReserva() {
    document.getElementById("title").textContent = "Nuevo Tipo Reserva";
    document.getElementById("btnAccion").textContent = "Registrar";
    document.getElementById("frmTipoReserva").reset();
    document.getElementById("id").value = "";
    $("#nuevoTipoReserva").modal("show");
}

function registrarTipoReserva(e) {
    e.preventDefault();
    const tiporeserva = document.getElementById("tiporeserva");
    const id = document.getElementById("id");
    if (tiporeserva.value == "") {
        alertas('El tipo de reserva es requerido', 'warning');
    } else {
        const url = base_url + "Tiporeserva/registrar";
        const frm = document.getElementById("frmTipoReserva");
        const http = new XMLHttpRequest();
        http.open("POST", url, true);
        http.send(new FormData(frm));
        http.onreadystatechange = function () {
            if (this.readyState == 4 && this.status == 200) {
                const res = JSON.parse(this.responseText);
                 console.log(res);
                $("#nuevoTipoReserva").modal("hide");
                frm.reset();
                tbltiporeserva.ajax.reload();
                alertas(res.msg, res.icono);
            }
        }
    }
}

function btnEditarTipoReserva(id) {
    document.getElementById("title").textContent = "Editar Tipo Reserva";
    document.getElementById("btnAccion").textContent = "Modificar";
    const url = base_url + "Tiporeserva/editar/" + id;
    const http = new XMLHttpRequest();
    http.open("GET", url, true);
    http.send();
    http.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            const res = JSON.parse(this.responseText);
            // Mostrar la respuesta en la consola
            console.log(res); // Aquí es donde se muestran los datos que recibes
            
            document.getElementById("id").value = res.IDTipoReserva;
            document.getElementById("tiporeserva").value = res.DescripcionTipoReserva;
            $("#nuevoTipoReserva").modal("show");
        }
    }
}

function btnEliminarTipoReserva(id){
    Swal.fire({
        title: 'Esta seguro de eliminar?',
        text: "El Tipo de Reserva no se eliminará de forma permanente, solo cambiará el estado a inactivo!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Si!',
        cancelButtonText: 'No'
    }).then((result) => {
        if (result.isConfirmed) {
            const url = base_url + "TipoReserva/eliminar/" + id;
            const http = new XMLHttpRequest();
            http.open("GET", url, true);
            http.send();
            http.onreadystatechange = function () {
                if (this.readyState == 4 && this.status == 200) {
                    const res = JSON.parse(this.responseText);
                    tbltiporeserva.ajax.reload();
                    alertas(res.msg, res.icono);
                }
            }

        }
    })
}

function btnReingresarTipoReserva(id){
    Swal.fire({
        title: 'Esta seguro de reingresar?',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Si!',
        cancelButtonText: 'No'
    }).then((result) => {
        if (result.isConfirmed) {
            const url = base_url + "TipoReserva/reingresar/" + id;
            const http = new XMLHttpRequest();
            http.open("GET", url, true);
            http.send();
            http.onreadystatechange = function () {
                if (this.readyState == 4 && this.status == 200) {
                    const res = JSON.parse(this.responseText);
                    tbltiporeserva.ajax.reload();
                    alertas(res.msg, res.icono);
                }
            }

        }
    })
}


//Sexo

function frmSexo() {
    document.getElementById("title").textContent = "Nuevo Sexo";
    document.getElementById("btnAccion").textContent = "Registrar";
    document.getElementById("frmSexo").reset();
    document.getElementById("id").value = "";
    $("#nuevoSexo").modal("show");
}

function registrarSexo(e) {
    e.preventDefault();
    const sexo = document.getElementById("sexo");
    const id=document.getElementById("id");
    if (sexo.value == "") {
        alertas('El Sexo es requerido', 'warning');
    } else {
        const url = base_url + "Sexo/registrar";
        const frm = document.getElementById("frmSexo");
        const http = new XMLHttpRequest();
        http.open("POST", url, true);
        http.send(new FormData(frm));
        http.onreadystatechange = function () {
            if (this.readyState == 4 && this.status == 200) {
                const res = JSON.parse(this.responseText);
                $("#nuevoSexo").modal("hide");
                frm.reset();
                tblSexo.ajax.reload();
                alertas(res.msg, res.icono);
            }
        }
    }
}

function btnEliminarSexo(id){
    Swal.fire({
        title: 'Esta seguro de eliminar?',
        text: "El sexo no se eliminará de forma permanente, solo cambiará el estado a inactivo!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Si!',
        cancelButtonText: 'No'
    }).then((result) => {
        if (result.isConfirmed) {
            const url = base_url + "Sexo/eliminar/" + id;
            const http = new XMLHttpRequest();
            http.open("GET", url, true);
            http.send();
            http.onreadystatechange = function () {
                if (this.readyState == 4 && this.status == 200) {
                    const res = JSON.parse(this.responseText);
                    tblSexo.ajax.reload();
                    alertas(res.msg, res.icono);
                }
            }

        }
    })
}

function btnReingresarSexo(id){
    Swal.fire({
        title: 'Esta seguro de reingresar?',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Si!',
        cancelButtonText: 'No'
    }).then((result) => {
        if (result.isConfirmed) {
            const url = base_url + "Sexo/reingresar/" + id;
            const http = new XMLHttpRequest();
            http.open("GET", url, true);
            http.send();
            http.onreadystatechange = function () {
                if (this.readyState == 4 && this.status == 200) {
                    const res = JSON.parse(this.responseText);
                    tblSexo.ajax.reload();
                    alertas(res.msg, res.icono);
                }
            }

        }
    })
}

function btnEditarSexo(id) {
    document.getElementById("title").textContent = "Editar Sexo";
    document.getElementById("btnAccion").textContent = "Modificar";
    const url = base_url + "Sexo/editar/" + id;
    const http = new XMLHttpRequest();
    http.open("GET", url, true);
    http.send();
    http.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            const res = JSON.parse(this.responseText);
            // Mostrar la respuesta en la consola
            console.log(res); // Aquí es donde se muestran los datos que recibes
            
            document.getElementById("id").value = res.IDSexo;
            document.getElementById("sexo").value = res.DescripcionSexo;
            $("#nuevoSexo").modal("show");
        }
    }
}

//Fin Sexo
function frmEditorial() {
    document.getElementById("title").textContent = "Nuevo Editorial";
    document.getElementById("btnAccion").textContent = "Registrar";
    document.getElementById("frmEditorial").reset();
    document.getElementById("id").value = "";
    $("#nuevoEditorial").modal("show");
}

function registrarEditorial(e) {
    e.preventDefault();
    const editorial = document.getElementById("editorial");
    if (editorial.value == "") {
        alertas('El editorial es requerido', 'warning');
    } else {
        const url = base_url + "Editorial/registrar";
        const frm = document.getElementById("frmEditorial");
        const http = new XMLHttpRequest();
        http.open("POST", url, true);
        http.send(new FormData(frm));
        http.onreadystatechange = function () {
            if (this.readyState == 4 && this.status == 200) {
                const res = JSON.parse(this.responseText);
                $("#nuevoEditorial").modal("hide");
                tblEditorial.ajax.reload();
                alertas(res.msg, res.icono);
            }
        }
    }
}

function btnEditarEdi(id) {
    document.getElementById("title").textContent = "Actualizar Editorial";
    document.getElementById("btnAccion").textContent = "Modificar";
    const url = base_url + "Editorial/editar/" + id;
    const http = new XMLHttpRequest();
    http.open("GET", url, true);
    http.send();
    http.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            const res = JSON.parse(this.responseText);
            document.getElementById("id").value = res.id;
            document.getElementById("editorial").value = res.editorial;
            $("#nuevoEditorial").modal("show");
        }
    }
}

function btnEliminarEdi(id) {
    Swal.fire({
        title: 'Esta seguro de eliminar?',
        text: "El Editorial no se eliminará de forma permanente, solo cambiará el estado a inactivo!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Si!',
        cancelButtonText: 'No'
    }).then((result) => {
        if (result.isConfirmed) {
            const url = base_url + "Editorial/eliminar/" + id;
            const http = new XMLHttpRequest();
            http.open("GET", url, true);
            http.send();
            http.onreadystatechange = function () {
                if (this.readyState == 4 && this.status == 200) {
                    const res = JSON.parse(this.responseText);
                    tblEditorial.ajax.reload();
                    alertas(res.msg, res.icono);
                }
            }

        }
    })
}

function btnReingresarEdi(id) {
    Swal.fire({
        title: 'Esta seguro de reingresar?',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Si!',
        cancelButtonText: 'No'
    }).then((result) => {
        if (result.isConfirmed) {
            const url = base_url + "Editorial/reingresar/" + id;
            const http = new XMLHttpRequest();
            http.open("GET", url, true);
            http.send();
            http.onreadystatechange = function () {
                if (this.readyState == 4 && this.status == 200) {
                    const res = JSON.parse(this.responseText);
                    tblEditorial.ajax.reload();
                    alertas(res.msg, res.icono);
                }
            }

        }
    })
}
//Fin editorial
function frmLibros() {
    document.getElementById("title").textContent = "Nuevo Libro";
    document.getElementById("btnAccion").textContent = "Registrar";
    document.getElementById("frmLibro").reset();
    document.getElementById("id").value = "";
    $("#nuevoLibro").modal("show");
    deleteImg();
}

function registrarLibro(e) {
    e.preventDefault();
    const titulo = document.getElementById("titulo");
    const autor = document.getElementById("autor");
    const editorial = document.getElementById("editorial");
    const materia = document.getElementById("materia");
    const cantidad = document.getElementById("cantidad");
    const num_pagina = document.getElementById("num_pagina");

    if (titulo.value == '' || autor.value == '' || editorial.value == ''
    || materia.value == '' || cantidad.value == '' || num_pagina.value == '') {
        alertas('Todo los campos son requeridos', 'warning');
    } else {
        const url = base_url + "Libros/registrar";
        const frm = document.getElementById("frmLibro");
        const http = new XMLHttpRequest();
        http.open("POST", url, true);
        http.send(new FormData(frm));
        http.onreadystatechange = function () {
            if (this.readyState == 4 && this.status == 200) {
                const res = JSON.parse(this.responseText);
                $("#nuevoLibro").modal("hide");
                tblLibros.ajax.reload();
                frm.reset();
                alertas(res.msg, res.icono);
            }
        }
    }
}

function btnEditarLibro(id) {
    document.getElementById("title").textContent = "Actualizar Libro";
    document.getElementById("btnAccion").textContent = "Modificar";
    const url = base_url + "Libros/editar/" + id;
    const http = new XMLHttpRequest();
    http.open("GET", url, true);
    http.send();
    http.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            const res = JSON.parse(this.responseText);
              document.getElementById("id").value = res.id;
              document.getElementById("titulo").value = res.titulo;
              document.getElementById("autor").value = res.id_autor;
              document.getElementById("editorial").value = res.id_editorial;
              document.getElementById("materia").value = res.id_materia;
              document.getElementById("cantidad").value = res.cantidad;
              document.getElementById("num_pagina").value = res.num_pagina;
              document.getElementById("anio_edicion").value = res.anio_edicion;
              document.getElementById("descripcion").value = res.descripcion;
            document.getElementById("img-preview").src = base_url + 'Assets/img/libros/'+ res.imagen;
            document.getElementById("icon-cerrar").innerHTML = `
            <button class="btn btn-danger" onclick="deleteImg()">
            <i class="fa fa-times-circle"></i></button>`;
            document.getElementById("icon-image").classList.add("d-none");
            document.getElementById("foto_actual").value = res.imagen;
            $("#nuevoLibro").modal("show");
        }
    }
}

function btnEliminarLibro(id) {
    Swal.fire({
        title: 'Esta seguro de eliminar?',
        text: "El libro no se eliminará de forma permanente, solo cambiará el estado a inactivo!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Si!',
        cancelButtonText: 'No'
    }).then((result) => {
        if (result.isConfirmed) {
            const url = base_url + "Libros/eliminar/" + id;
            const http = new XMLHttpRequest();
            http.open("GET", url, true);
            http.send();
            http.onreadystatechange = function () {
                if (this.readyState == 4 && this.status == 200) {
                    const res = JSON.parse(this.responseText);
                    tblLibros.ajax.reload();
                    alertas(res.msg, res.icono);
                }
            }

        }
    })
}

function btnReingresarLibro(id) {
    Swal.fire({
        title: 'Esta seguro de reingresar?',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Si!',
        cancelButtonText: 'No'
    }).then((result) => {
        if (result.isConfirmed) {
            const url = base_url + "Libros/reingresar/" + id;
            const http = new XMLHttpRequest();
            http.open("GET", url, true);
            http.send();
            http.onreadystatechange = function () {
                if (this.readyState == 4 && this.status == 200) {
                    const res = JSON.parse(this.responseText);
                    tblLibros.ajax.reload();
                    alertas(res.msg, res.icono);
                }
            }

        }
    })
}
function preview(e) {
    var input = document.getElementById('imagen');
    var filePath = input.value;
    var extension = /(\.png|\.jpeg|\.jpg)$/i;
    if (!extension.exec(filePath)) {
        alertas('Seleccione un archivo valido', 'warning');
        deleteImg();
        return false;
    }else{
        const url = e.target.files[0];
        const urlTmp = URL.createObjectURL(url);
        document.getElementById("img-preview").src = urlTmp;
        document.getElementById("icon-image").classList.add("d-none");
        document.getElementById("icon-cerrar").innerHTML = `
        <button class="btn btn-danger" onclick="deleteImg()"><i class="fa fa-times-circle"></i></button>
        `;
    }

}
function deleteImg() {
    document.getElementById("icon-cerrar").innerHTML = '';
    document.getElementById("icon-image").classList.remove("d-none");
    document.getElementById("img-preview").src = '';
    document.getElementById("imagen").value = '';
    document.getElementById("foto_actual").value = '';
}
function frmConfig(e) {
    e.preventDefault();
    const nombre = document.getElementById("nombre");
    const telefono = document.getElementById("telefono");
    const direccion = document.getElementById("direccion");
    const correo = document.getElementById("correo");
    if (nombre.value == "" || telefono.value == "" || direccion.value == "" || correo.value == "") {
        alertas('Todo los campos son requeridos', 'warning');
    } else {
        const url = base_url + "Configuracion/actualizar";
        const frm = document.getElementById("frmConfig");
        const http = new XMLHttpRequest();
        http.open("POST", url, true);
        http.send(new FormData(frm));
        http.onreadystatechange = function () {
            if (this.readyState == 4 && this.status == 200) {
                const res = JSON.parse(this.responseText);
                alertas(res.msg, res.icono);
            }
        }
    }
}
function frmPrestar() {
    document.getElementById("frmPrestar").reset();
    $("#prestar").modal("show");
}
function btnEntregar(id) {
    Swal.fire({
        title: 'Recibir de libro?',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Si!',
        cancelButtonText: 'No'
    }).then((result) => {
        if (result.isConfirmed) {
            const url = base_url + "Prestamos/entregar/" + id;
            const http = new XMLHttpRequest();
            http.open("GET", url, true);
            http.send();
            http.onreadystatechange = function () {
                if (this.readyState == 4 && this.status == 200) {
                    const res = JSON.parse(this.responseText);
                    tblPrestar.ajax.reload();
                    alertas(res.msg, res.icono);
                }
            }

        }
    })
}
function registroPrestamos(e){
    e.preventDefault();
    const libro = document.getElementById("libro").value;
    const estudiante = document.getElementById("estudiante").value;
    const cantidad = document.getElementById("cantidad").value;
    const fecha_prestamo = document.getElementById("fecha_prestamo").value;
    const fecha_devolucion = document.getElementById("fecha_devolucion").value;
    if (libro == '' || estudiante == '' || cantidad == '' || fecha_prestamo == '' || fecha_devolucion == '') {
        alertas('Todo los campos son requeridos', 'warning');
    } else {
        const frm = document.getElementById("frmPrestar");
        const url = base_url + "Prestamos/registrar";
        const http = new XMLHttpRequest();
        http.open("POST", url, true);
        http.send(new FormData(frm));
        http.onreadystatechange = function () {
            if (this.readyState == 4 && this.status == 200) {
                const res = JSON.parse(this.responseText);
                tblPrestar.ajax.reload();
                $("#prestar").modal("hide");
                alertas(res.msg, res.icono);
                if (res.icono == 'success') {
                    setTimeout(() => {
                        window.open(base_url + 'Prestamos/ticked/'+ res.id, '_blank');
                    }, 3000);
                }
                
            }
        }
    }
}
function btnRolesUser(id) {
    const http = new XMLHttpRequest();
    const url = base_url + "Usuarios/permisos/" + id;
    http.open("GET", url);
    http.send();
    http.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            document.getElementById("frmPermisos").innerHTML = this.responseText;
            $("#permisos").modal("show");
        }
    }
}
function registrarPermisos(e) {
    e.preventDefault();
    const http = new XMLHttpRequest();
    const frm = document.getElementById("frmPermisos");
    const url = base_url + "Usuarios/registrarPermisos";
    http.open("POST", url);
    http.send(new FormData(frm));
    http.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            const res = JSON.parse(this.responseText);
            $("#permisos").modal("hide");
            if(res == 'ok'){
				alertas('Permisos Asignado', 'success');
			}else{
				alertas('Error al asignar los permisos', 'error');
			}
        }
    }
}
function modificarClave(e) {
    e.preventDefault();
    var formClave = document.querySelector("#frmCambiarPass");
    formClave.onsubmit = function (e) {
        e.preventDefault();
        const clave_actual = document.querySelector("#clave_actual").value;
        const nueva_clave = document.querySelector("#clave_nueva").value;
        const confirmar_clave = document.querySelector("#clave_confirmar").value;
        if (clave_actual == "" || nueva_clave == "" || confirmar_clave == "") {
            alertas('Todo los campos son requeridos', 'warning');
        } else if (nueva_clave != confirmar_clave) {
            alertas('Las contraseñas no coinciden', 'warning');
        } else {
            const http = new XMLHttpRequest();
            const frm = document.getElementById("frmPermisos");
            const url = base_url + "Usuarios/cambiarPas";
            http.open("POST", url);
            http.send(new FormData(formClave));
            http.onreadystatechange = function () {
                if (this.readyState == 4 && this.status == 200) {
                    const res = JSON.parse(this.responseText);
                    $('#cambiarClave').modal("hide");
                    alertas(res.msg, res.icono);                    
                }
            }            
        }

    }
}
if (document.getElementById("reportePrestamo")) {
    const url = base_url + "Configuracion/grafico";
    const http = new XMLHttpRequest();
    http.open("GET", url, true);
    http.send();
    http.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
                const data = JSON.parse(this.responseText);
                let nombre = [];
                let cantidad = [];
                for (let i = 0; i < data.length; i++) {
                    nombre.push(data[i]['titulo']);
                    cantidad.push(data[i]['cantidad']);
                }
                var ctx = document.getElementById("reportePrestamo");
                var myPieChart = new Chart(ctx, {
                    type: 'bar',
                    data: {
                        labels: nombre,
                        datasets: [{
                            label: 'Libros',
                            data: cantidad,
                            backgroundColor: ['#dc143c'],
                        }],
                    },
                });
            
        }
    }
}
function alertas(msg, icono) {
    Swal.fire({
        position: 'top-end',
        icon: icono,
        title: msg,
        showConfirmButton: false,
        timer: 3000
    })
}
function verificarLibro(e) {
    const libro = document.getElementById('libro').value;
    const cant = document.getElementById('cantidad').value;
    const http = new XMLHttpRequest();
    const url = base_url + 'Libros/verificar/' + libro;
    http.open("GET", url);
    http.send();
    http.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            const res = JSON.parse(this.responseText);
            if (res.icono == 'success') {
                document.getElementById('msg_error').innerHTML = `<span class="badge badge-primary">Disponible: ${res.cantidad}</span>`;
            }else{
                alertas(res.msg, res.icono);
                return false;
            }
        }
    }
}
