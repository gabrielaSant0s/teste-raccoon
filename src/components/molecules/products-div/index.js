import React, {useEffect, useState} from "react";
import "./style.css"
import apiProducts from "../../../services/api"

import ProductCard from "../../atoms/product-card";


const ProductsDiv = () => {
    const [dataProducts,setDataProducts] = useState([]);
    const [itensPerPage, setItensPerPage] = useState(6)
    const [currentPage, setCurrentPage] = useState(0)

    useEffect (()=>{
        apiProducts.get("products").then(({data})=>{
            setDataProducts(data)
    })
    },[])

    const pages = Math.ceil(dataProducts["products"]?.length/itensPerPage)
    const startIndex = currentPage * itensPerPage
    const endIndex = startIndex + itensPerPage
    const currentItens = dataProducts["products"]?.slice(startIndex, endIndex)
    
    
    const arrayNumbers = []
    for (let index = 0; index < pages; index++) {
        arrayNumbers.push(index)   
    }

    const colors = (i) =>{
        switch(i){
            case 0:
                return "#0072c6"
            case 1:
                return "#2c5898"
            case 2:
                return "#207245"
            case 3:
                return "#cb4a32" 
            case 4:
                return "#733781" 
            case 5:
                return "#5558af"     
        }
    }

    return (
        <>
        <div className="containerProducts">
           {currentItens?.map((item, index) => (
                <div className="cards"><ProductCard title={item["title"]} description={item["description"]} color={colors(index)}/></div>
            ))}
        </div>
        <div className="containerPagination">
            {arrayNumbers.map((i, index) =>{
                return <button className="pagination" value={index} onClick={(e) => setCurrentPage(e.target.value)}>{index+1}</button>
            })}
        </div>
        </>
    )
}

export default ProductsDiv