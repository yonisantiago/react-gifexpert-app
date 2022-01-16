import React, { useState } from 'react'
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';

export const GifExpertApp = () => {

   // const categories = ['one punch ', 'Samurai X ', 'Dragon Ball '];
    const [categories, setCategories] = useState(['lucifer']);

   // const handleAdd = () => {
        //para añadir otro elemento en la lista usamos esta constante con funcion, y setCategories como este, luego en boton onCLick y llamamos la funcion   <button onClick={handleAdd}>Add</button>
            //setCategories([ 'The witcher', ...categories]);
           // setCategories(cats => [ ...cats, 'The Witcher'])
    //};
   

    return (
        <>
        <div>
            <h1>GifExpertApp</h1>  

            <AddCategory setCategories={setCategories}/>

        <hr/>
        </div>
      
       
        <ol>
            {
                categories.map( category => 
                     <GifGrid category={category} key={category} />
                )
            }
        </ol>
        </>
       
    )
}

