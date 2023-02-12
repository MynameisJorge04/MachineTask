import React from 'react';
import './TodosError.css';
import errorTodosImg from '../assets/loadingSkeletons/errorTodo.png'

function TodosError ({error}){
    return(
        <div className='TodosError'>
            <h2>¡Hubo un error!</h2>
            <p>Danos un poco de tiempo y vuelve en un par de minutos....</p>
            <img
            src={errorTodosImg}
            />
        </div>
    );
}

export { TodosError };