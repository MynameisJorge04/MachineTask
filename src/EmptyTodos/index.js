import React from 'react';
import './EmptyTodos.css';
import todosEmpty from '../assets/loadingSkeletons/tareasTodos.png';
import botonEmpty from '../assets/loadingSkeletons/botonEmptyTodos.png';

function EmptyTodos (){
    return(
        <div className='EmptyTodos'>
            <p>No tienes ninguna tarea</p>
            <img
            src={todosEmpty}
            />
            <div className='createButton'>
                <p>Crea tu</p>
                <img 
                src={botonEmpty}
                />
                <p
                className='primerTodoText'
                >primer todo....</p>
            </div>
        </div>
    );
}

export { EmptyTodos };