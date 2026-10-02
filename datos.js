// ==============================================
// ✅ PON TUS DATOS REALES — EDITA LO QUE ESTÁ ENTRE COMILLAS
// ==============================================

const DATOS_PAGO = {
    nombre: "Jesus Mamani Cahuana",               // Ej: Juan Pérez Mamani
    banco: "Yape",                              // Ej: Yape / Banco Unión
    numeroCuenta: "63228616",          // Ej: 77712345 → tu número de Yape
    qrImagen: "tu-qr.jpg",                       // NO CAMBIAR esto si tu QR se llama así
    entrega: "🚚 Entrega: Sábados- Ceibo Paqueteria"    // Ej: Sábados — Ceibo, El Alto / Uyuni
  };
  
  const TU_WHATSAPP = "59161159473";            // ✅ Tu número con código de país (591 + tu número)
  // Ejemplo completo: "59177712345"
  
  const USUARIOS = {
    "jesus": "mamani",                 // Tú creas tu usuario y contraseña para el panel
    "yhubanneth": "71931423"
  };
  
  // ==============================================
  // 👟 TUS TENIS A LA VENTA — EDITA, AGREGA, BORRA
  // ==============================================
  // Cada par es UNA entrada → copia y pega para agregar más
  
  const DATOS_INICIALES = [
    {
      "id": 1,
      "nombre": "Tenis Predator — Negro Blanco",  // Nombre del modelo
      "precio": 150,                              // Precio en Bolivianos
      "tallaUnica": 38,                           // ⚠️ UN SOLO NÚMERO por par
      "imagen": "fotos/foto1.jpg",                // Foto correspondiente
      "disponible": true                          // true = disponible / false = vendido
    },
    {
      "id": 2,
      "nombre": "Tenis Deportivo — Blanco Azul",
      "precio": 160,
      "tallaUnica": 38,
      "imagen": "fotos/foto2.jpg",
      "disponible": true
    },
    {
      "id": 3,
      "nombre": "Tenis Jordan — Rojo Negro",
      "precio": 180,
      "tallaUnica": 39,
      "imagen": "fotos/foto3.jpg",
      "disponible": true
    },
    {
      "id": 4,
      "nombre": "Tenis Deportivo — Gris Verde",
      "precio": 140,
      "tallaUnica": 39,
      "imagen": "fotos/foto4.jpg",
      "disponible": true
    },
    {
      "id": 5,
      "nombre": "Tenis Casual — Blanco Amarillo",
      "precio": 155,
      "tallaUnica": 40,
      "imagen": "fotos/foto5.jpg",
      "disponible": true
    }
    // ✅ AGREGA MÁS ABAJO copiando este formato:
    // ,
    // {
    //   "id": 6,
    //   "nombre": "Nombre de tu modelo",
    //   "precio": 170,
    //   "tallaUnica": 41,
    //   "imagen": "fotos/foto6.jpg",
    //   "disponible": true
    // }
  ];