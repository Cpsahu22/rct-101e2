import {
  Stack,
  Image,
  Text,
  Tag,
  TagLabel,
  Heading,
  Box,
  GridItem,
} from "@chakra-ui/react";
import React from "react";

const Product = ({ data }) => {
  return data.map((el) => {
    return (
      <>
        <GridItem>
          <Stack data-cy="product">
            <Image data-cy="product-image" src={el.imageSrc} />
            <Text data-cy="product-category">{el.category}</Text>
            <Tag>
              <TagLabel data-cy="product-gender">{el.gender}</TagLabel>
            </Tag>
            <Heading data-cy="product-title">{el.title}</Heading>
            <Box data-cy="product-price">{el.price}</Box>
          </Stack>
        </GridItem>
      </>
    );
  });
};

export default Product;
