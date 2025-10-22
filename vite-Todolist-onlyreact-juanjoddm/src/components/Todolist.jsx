import { useEffect, useState } from "react";
import "./Todolist.css";
const List = () => {
  const [elemento, setElemento] = useState("");

  const [listaDeTareas, setListaDeTareas] = useState([
    "Comer",
    "Ir a clase",
    "Hacer los deberes",
  ]);

  const [isHovering, setIsHovering] = useState({
    hovering: false,
    index:-1,
  });

  const incremetarTexto = (e) => {
    setElemento(e.target.value);
  };

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      // li.staDeTareas.push(elemento)
      if (elemento != "") {
        setListaDeTareas([...listaDeTareas, elemento]);
        setElemento("");
      } else {
        alert("Escriba una tarea antes de agregarla");
      }
    }
  };

  useEffect(() => {
    console.log(listaDeTareas);
  }, [listaDeTareas]);

  const eliminarTarea = (position) => {
    setListaDeTareas(
      listaDeTareas.filter((a, index) => {
        return position !== index;
      })
    );
  };

  return (
    <>
      <div className="lista m-auto d-flex justify-content-center flex-column">
        <div className="title d-flex justify-content-center">
          <h1>Tareas</h1>
        </div>
        <input
          className="entradatexto"
          type="text"
          value={elemento}
          onChange={incremetarTexto}
          onKeyDown={(evento) => handleKeyDown(evento)}
        />
        <ul className=" d-flex flex-column">
          {listaDeTareas.map((tarea, index) => (
            <div
              className="grupodeelementos d-flex flex-row justify-content-between border-bottom"
              onMouseEnter={() => {
                setIsHovering({
                    hovering: true,
                    index: index
                });
              }}
              onMouseLeave={() => {
                setIsHovering({
                    hovering: false,
                    index: index
                });
              }}
            >
              <li className="tarea">{tarea}</li>
              {isHovering.hovering && isHovering.index === index &&  (
                <button
                  className="eliminar btn btn-danger"
                  onClick={() => eliminarTarea(index)}
                >
                  X
                </button>
              )}
            </div>
          ))}
        </ul>
      </div>
    </>
  );
};

export default List;
