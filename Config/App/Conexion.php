<?php
// class Conexion{
//     private $conect;
//     public function __construct()
//     {
//         $pdo = "mysql:host=".host.";dbname=".db.";.charset.";
//         try {
//             $this->conect = new PDO($pdo, user, pass);
//             $this->conect->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
//         } catch (PDOException $e) {
//             echo "Error en la conexion".$e->getMessage();
//         }
//     }
//     public function conect()
//     {
//         return $this->conect;
//     }
// }

class Conexion{
    private $conect;
    
    public function __construct() {
        // Configuración recomendada con puerto explícito
        $dsn = "mysql:host=".host.";port=3333;dbname=".db.";charset=utf8mb4";
        
        try {
            $this->conect = new PDO($dsn, user, pass, [
                PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION,
                PDO::ATTR_DEFAULT_FETCH_MODE => PDO::FETCH_ASSOC,
                PDO::ATTR_EMULATE_PREPARES => false
            ]);
            
        } catch (PDOException $e) {
            // Mejor manejo de errores para producción
            error_log("Error en la conexión a la BD: " . $e->getMessage());
            throw new Exception("Error al conectar con la base de datos");
        }
    }
    
    public function conect() {
        return $this->conect;
    }
}
?>