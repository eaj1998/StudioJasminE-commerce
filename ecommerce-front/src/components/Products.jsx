import styled from "styled-components"
import { popularProducts } from "../data"
import Product from "./Product"
import { useEffect, useState } from "react"
import axios from "axios"


const Container = styled.div`
    padding: 20px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
`

const Products = ({cat, filters, sort}) => {    

    const [products, setProducts] = useState([]);
    const [filteredProducts, setfilteredProducts] = useState([]);

    useEffect(() => {
        const getProducts = async () => {
            try {
                const res = await axios.get();
            } catch (error) {
                
            }
        }
    },[cat])
    return (
        <Container>
            {popularProducts.map(item => (
                <Product item={item} key={item.id} />
            ))}
        </Container>
    )
}

export default Products
