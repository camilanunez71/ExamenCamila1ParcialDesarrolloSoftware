const docentes = [
  { id: 1, nombre: "Jonatan Moncada", materia: "Seminario Software" },
  { id: 2, nombre: "Abraham Sikaffy", materia: "Big Data" },
  { id: 3, nombre: "Ledyn ", materia: "Gestion de Proyectos Informaticos" },
  { id: 4, nombre: "Yeimy Saldivar", materia: "Auditoria de Sistemas" },
];

export default function Docentes() {
  return (
    <div>
      <h3 className="inicio-titulo">Docentes</h3>
      <div className="grid-tarjetas">
        {docentes.map((d) => (
          <div className="tarjeta" key={d.id}>
            <h4>{d.nombre}</h4>
            <p>{d.materia}</p>
          </div>
        ))}
      </div>
    </div>
  );
}