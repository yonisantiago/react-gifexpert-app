import React from 'react'
import { useFetchGifs } from '../hooks/useFetchGifs';
//import { getGifs } from '../helpers/getGifs';
import { GifGridItem } from './GifGridItem';



export const GifGrid = ({category}) => {

//     const [images, setImages] = useState([]);
    const {data:images, loading} = useFetchGifs(category);


    //getGifs();
//mostrando informacion id y titulos usando images.map()
    return (
        <>
        <h2 className='animate__animated animate__rubberBand'>{category}</h2>

        {loading && <p className='animate__animated animate__heartBeat'>Loading</p> }

        <div className='card-grid'>
         
            
                
                {images.map( img => (
                   <GifGridItem key={img.id} {...img}/>
                ))}
         
        </div>

        </>
    )
}
