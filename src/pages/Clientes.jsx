import { useState, useEffect } from "react";
import { db } from "../Firebase";
import {
  collection,
  addDoc,
  getDocs,
} from "firebase/firestore";

export default function Clientes() {
  const [nombre, setNombre] = useState("");
  const [empresa, setEmpresa] = useState("");
  const [telefono, setTelefono] = useState("");
  const [direccion, setDireccion] = useState("");
  const [localidad, setLocalidad] = useState("");
  const [clientes, setClientes] = useState([]);

  async function cargarClientes() {
    const querySnapshot = await getDocs(collection(db, "clientes"));

    const lista = [];

    querySnapshot.forEach((doc) => {
      lista.push({
        id: doc.id,
        ...doc.data(),
      });
    });

    setClientes(lista);
  }

  useEffect(() => {
    cargarClientes();
  }, []);

  async function guardarCliente() {
    const nuevoCliente = {
      nombre,
      empresa,
      telefono,
      direccion,
      localidad,
    };

    try {
      await addDoc(collection(db, "clientes"), nuevoCliente);

      cargarClientes();

      setNombre("");
      setEmpresa("");
      setTelefono("");
      setDireccion("");
      setLocalidad("");

      alert("Cliente guardado correctamente");
    } catch (error) {
      console.error(error);
      alert("Error al guardar el cliente");
    }
  }

  return (
    <div style={{ padding: "30px" }}>
      <h1>👥 Clientes</h1>

      <h3>Nuevo Cliente</h3>

      <input
        placeholder="Nombre"
        value={nombre}
        onChange={(e) => setNombre(e.target.value)}
      />
      <br /><br />

      <input
        placeholder="Empresa"
        value={empresa}
        onChange={(e) => setEmpresa(e.target.value)}
      />
      <br /><br />

      <input
        placeholder="Teléfono"
        value={telefono}
        onChange={(e) => setTelefono(e.target.value)}
      />
      <br /><br />

      <input
        placeholder="Dirección"
        value={direccion}
        onChange={(e) => setDireccion(e.target.value)}
      />
      <br /><br />

      <input
        placeholder="Localidad"
        value={localidad}
        onChange={(e) => setLocalidad(e.target.value)}
      />
      <br /><br />

      <button onClick={guardarCliente}>
        Guardar Cliente
      </button>

      <hr />

      <h2>Clientes cargados</h2>

      {clientes.map((cliente) => (
        <div
          key={cliente.id}
          style={{
            border: "1px solid #ccc",
            padding: "10px",
            marginBottom: "10px",
            borderRadius: "8px",
          }}
        >
          <strong>{cliente.nombre}</strong>
          <br />
          🏢 {cliente.empresa}
          <br />
          📞 {cliente.telefono}
          <br />
          📍 {cliente.direccion}
          <br />
          🌎 {cliente.localidad}
        </div>
      ))}
    </div>
  );
}