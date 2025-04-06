import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FormCheck } from 'react-bootstrap';
import logo from './logo.svg';
import './App.css';

function App() {
  const [usuarios] = useState([
    { id: 1, nom: "Juan", ap: "X0" },
    { id: 2, nom: "Ana", ap: "Y0" },
    { id: 3, nom: "Luis", ap: "Z0" },
    { id: 4, nom: "Sara", ap: "W0" },
  ]);
  const [seleccionados, setSeleccionados] = useState([]);
  const toggleSeleccion = (id) =>
    setSeleccionados((prev) =>
      prev.includes(id) ? prev.filter((i) => i !== id) : [...prev, id]
    );

  return (
    <div style={{ padding: '20px' }}>
      <h1>Mi aplicación de React</h1>
      <h6>Lexis Uriel Leyva</h6>
      <img src={logo} className="App-logo" alt="logo" style={{ width: '150px', height: '150px' }} />

      <button
        className="btn btn-primary"
        style={{ padding: '10px 20px' }}
        disabled={!seleccionados.length}
      >
        Enviar
      </button>
      <table className="table table-striped">
        <thead>
          <tr>
            <th>ID</th>
            <th>Nombre</th>
            <th>Apellido</th>
            <th>Seleccionado</th>
          </tr>
        </thead>
        <tbody>
          {usuarios.map(({ id, nom, ap }) => (
            <tr key={id}>
              <td>{id}</td>
              <td>{nom}</td>
              <td>{ap}</td>
              <td>
                <FormCheck
                  type="checkbox"
                  checked={seleccionados.includes(id)}
                  onChange={() => toggleSeleccion(id)}
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
export default App;