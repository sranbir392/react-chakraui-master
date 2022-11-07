import { chakra } from "@chakra-ui/react";
import React, { useEffect } from "react";
import AddProduct from "./AddProduct";
import Pagination from "./Pagination";
import axios from "axios";
import Product from "./Product";
const Products = () => {
  const {Flex,Grid}=chakra;
  const [page,setPage]=React.useState(1);
  const [limit,setLimit]=React.useState(3);
  const [data,setData]=React.useState([]);

  const getData=(page,limit)=>{
    axios.get(`http://localhost:8080/products?_page=${page}&_limit=${limit}`).then((res)=>{const arr=res.data;
  setData(arr)})
  }
  useEffect(()=>{
getData(page,limit)
  },[])
  
  // TODO: Remove below const and instead import them from chakra
  // const Flex = () => <div />;
  // const Grid = () => <div />;
  // const {Flex,Grid}=chakra;
  return (
    <Flex>
      {/*  AddProduct */}
      <AddProduct/>
      <Grid>{/* List of Products */}
      {data.map((item)=>(<Product key={item.id} id={item.id} title={item.title} src={item.imageSrc} category={item.category} gender={item.gender} price={item.price} />)
      )
      }
      </Grid>
      {/* Pagination */}
      <Pagination/>
    </Flex>
  );
};

export default Products;
