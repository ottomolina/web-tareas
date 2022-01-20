import React, { useState, useRef, useEffect } from 'react';
import { Button } from 'react-bootstrap';
import { Lista } from '../common/Lista';
import { v4 as uuid } from 'uuid';
import './App.css';

function App() {

  const [ lista, setLista ] = useState([]);

  const txtTarea = useRef();

  useEffect(() => {
    const tareasGuardadas = JSON.parse(localStorage.getItem('tareas'));
    if(tareasGuardadas) {
      setLista(tareasGuardadas);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('tareas', JSON.stringify(lista));
  }, [lista]);

  const handleButton = () => {
    const descripcion = txtTarea.current.value;
    if(descripcion === '') {
      return;
    }
    setLista((prev) => {
      return [...prev, {
        id: uuid(), descripcion, completada: false
      }];
    });
    txtTarea.current.value = null;
  }

  const toggleTarea = (id) => {
    const copiaLista = [...lista];
    const tarea = lista.find(item => item.id === id);
    tarea.completada = !tarea.completada;
    setLista(copiaLista);
  }

  return (
    <div className="App">
      <input type="text" ref={txtTarea} placeholder='Descripción tarea' />{' '}
      <Button variant="primary" onClick={handleButton}>Agregar</Button>
      <hr/>
      <div>
        Tienes {lista.filter(item => !item.completada).length} tareas pendientes
      </div>
      <hr/>
      <Lista listaTareas={lista} toggleTarea={toggleTarea} />
    </div>
  );
}

export default App;
