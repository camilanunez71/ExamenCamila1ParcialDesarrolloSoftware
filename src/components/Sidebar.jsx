import { NavLink } from "react-router-dom";

const nombreUsuario = "Camila Fernanda Nuñez Suazo"; // 

const enlaces = [
  { to: "/", texto: "Inicio" },
  { to: "/clases", texto: "Mis Clases" },
  { to: "/docentes", texto: "Docentes" },
];

export default function Sidebar() {
  return (
    <aside className="sidebar">
      <div className="sidebar-usuario">Usuario: {nombreUsuario}</div>
      <nav>
        {enlaces.map((e) => (
          <NavLink
            key={e.to}
            to={e.to}
            end={e.to === "/"}
            className={({ isActive }) => (isActive ? "enlace activo" : "enlace")}
          >
            {e.texto}
          </NavLink>
        ))}
      </nav>
    </aside>
  );
}