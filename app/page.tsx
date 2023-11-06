"use client"
import { useEffect, useState } from "react"
import CountButton from "./CountButton"
import SearchBar from "./SearchBar/SearchBar"
import './styles/global.css'



export default function Page() {

    const [productsStates, setProductsStates] = useState ([])

    useEffect(() => {

        fetch('https://fakestoreapi.com/products')
            .then(res=>res.json())
            .then((productsArray)=>{
                setProductsStates(productsArray)
            })
    }, [])


    const hasProducts = productsStates.length > 0 

    return( 
        <div>
            <CountButton incrementBy = {1} buttonColor = {'red'}/>
            <CountButton incrementBy = {2} buttonColor = {'yellow'}/>
            <div className="separator"></div>
            {hasProducts ? <SearchBar products = {productsStates}/> : "Loading"}
            
        </div>
    )
    
  }

