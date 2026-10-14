const modulos = [
  {
    id: 1,
    titulo: "Seminario de Software",
    descripcion: "Aqui se aprendera a como desarrollar en React, vite, utilizar vercel y Material UI y a utilizar apis tambien",
    imagen: "https://images.unsplash.com/photo-1558008258-3256797b43f3?q=80&w=1331&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D",
  },
  {
    id: 2,
    titulo: "Auditoria de Gestion",
    descripcion: "Se realizaran auditorias a las empresas o escuelas que cuenten con un centro de datos",
    imagen: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D",
  },
  {
    id: 3,
    titulo: "Big Data",
    descripcion: "Trabajaremos con maquinas virtuales y con servidores, utilizaremos hadoop",
    imagen: "https://images.unsplash.com/photo-1666875753105-c63a6f3bdc86?q=80&w=1173&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D",
  },

  {
    id: 4,
    titulo: "Gestion de Proyectos Informaticos",
    descripcion: "Se aprendera a como gestionar proyectos informaticos, se trabajara con metodologias agiles y con heramientas de gestion de proyectos",
    imagen: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D"
  }
];

 

const estilos = {
  grid: { display: "flex", flexWrap: "wrap", gap: "20px" },
  card: {
    width: "300px",
    background: "#1e293b",
    borderRadius: "12px",
    overflow: "hidden",
    border: "1px solid #2a3a55",
  },
  img: { width: "100%", height: "138px", objectFit: "cover", display: "block" },
  info: { padding: "18px 16px 16px" },
  titulo: { fontSize: "18px", color: "#fff", marginBottom: "6px" },
  desc: { fontSize: "15px", color: "#94a3b8", marginBottom: "16px" },
  boton: {
    background: "#2563eb",
    color: "#fff",
    border: "none",
    borderRadius: "6px",
    padding: "8px 16px",
    fontSize: "15px",
    cursor: "pointer",
  },
};

export default function Clases() {
  return (
    <div>
      <h3 style={{ fontSize: "20px", marginBottom: "18px" }}>
        Modulos disponibles
      </h3>
      <div style={estilos.grid}>
        {modulos.map((m) => (
          <div style={estilos.card} key={m.id}>
            <img style={estilos.img} src={m.imagen} alt={m.titulo} />
            <div style={estilos.info}>
              <h4 style={estilos.titulo}>{m.titulo}</h4>
              <p style={estilos.desc}>{m.descripcion}</p>
              <button style={estilos.boton}>Suscribirse</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}