import React from 'react';

export const ListaItem = ({ tarea, numero, toggleTarea }) => {
    const { id, descripcion, completada } = tarea;

    const changeCheckbox = () => toggleTarea(id);

    return (
        tarea && 
        <tr>
            <td>{numero}</td>
            <td>{descripcion}</td>
            <td>
                <input type="checkbox" checked={completada} onChange={changeCheckbox} />
            </td>
        </tr>
    );
};
