import React from 'react';
import './TodosLoading.css';

function TodosLoading (){
      return(
        <div className='TodosLoading'>
        <p>Cargando, por favor espere....</p>
        <div className='todoLoadingBlocks'/>
        <div className='todoLoadingBlocks'/>
        <div className='todoLoadingBlocks'/>
        </div>
      );
}

export { TodosLoading };