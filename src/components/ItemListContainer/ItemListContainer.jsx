import {useState, useEffect} from 'react'
import { getProducts, getProductsByCategory } from '../../asyncMock'
import ItemList from '../ItemList.js/ItemList'
import { useParams } from 'react-router-dom'
import Footer from '../Footer/Footer'

// ESTILOS
import './ItemListContainer.scss'


const ItemListContainer =()=>{
    const[products, setProducts]=useState([])
    const{categoryId}=useParams()

    
    useEffect( ()=> {
        if(categoryId){
            getProductsByCategory(categoryId)
            .then(response => {
                setProducts(response)
            })

            .catch(error =>{
                console.log(error)
            })
        }
        else{
            getProducts()
            .then(response => {
                setProducts(response)
            })

            .catch(error =>{
                console.log(error)
            })
        }
 
    }, [categoryId])

    return(
        <div> 
            <h2> Todos los Productos</h2>          
            <ItemList products={products}/>
            <Footer/>
        </div>
    )
}

export default ItemListContainer 