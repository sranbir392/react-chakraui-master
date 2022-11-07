import { chakra } from "@chakra-ui/react";
import React from "react";

const Product = (props) => {
  const {title,gender,category,price,src}=props;
  const {Text,Image,Box,Stack,Heading,Tag,TagLabel}=chakra;
  // TODO: Remove below const and instead import them from chakra
  // const Text = () => <div />;
  // const Image = () => <div />;
  // const Box = () => <div />;
  // const Stack = () => <div />;
  // const Heading = () => <div />;
  // const Tag = () => <div />;
  // const TagLabel = () => <div />;
  // console.log(src)
  return (
    <Stack data-cy="product">
      <Image data-cy="product-image" src={src}/>
      <Text data-cy="product-category">Category:{category}</Text>
      <Tag>
        <TagLabel data-cy="product-gender">Gender:{gender}</TagLabel>
      </Tag>
      <Heading data-cy="product-title">Title : {title}</Heading>
      <Box data-cy="product-price">Price:{price}</Box>
    </Stack>
  );
};

export default Product;
