import React, { Fragment } from 'react';
import { Table } from 'react-bootstrap';
import './Lista.css';
import { ListaItem } from './ListaItem';

export const Lista = ({ listaTareas, toggleTarea }) => {
    console.log('listaTareas', listaTareas);
    return <Fragment>
        <Table className='table-tareas' striped bordered hover>
            <thead>
                <tr>
                    <th>#</th>
                    <th>Tarea</th>
                    <th>Completa</th>
                </tr>
            </thead>
            <tbody>
                {listaTareas.map((item, index) => (
                    <ListaItem key={index} tarea={item} numero={index} toggleTarea={toggleTarea} />
                ))}
            </tbody>
        </Table>
    </Fragment>;
};
