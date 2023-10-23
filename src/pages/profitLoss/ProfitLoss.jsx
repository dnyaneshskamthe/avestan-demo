// import { useEffect, useState } from "react";
import { Box, Image, Heading, Text, Flex } from '@chakra-ui/react';
import { useQuery } from '@tanstack/react-query'

export default function ProfitLoss() {
  // const [products, setProducts] = useState([]);
  // const [isLoading, setIsLoading] = useState(false);
  // const [error, setError] = ("")

  const fetchProducts = async () => {
    const response = await fetch('https://fakestoreapi.com/products/');
    if (!response.ok) {
      throw new Error('Response not okay');
    }
    const data = await response.json();
    return data;
  };

  const {isPending, isError, data, error} = useQuery({ queryKey: ['products'], queryFn: fetchProducts, staleTime:20000 })
  
 

  if(isPending){
    return <h2>loading...</h2>
  }

  if (isError) {
    return <span>Error: {error.message}</span>
  }

  return (
    <Flex flexWrap="wrap" justifyContent="center">
      {data && data.map((product) => (
        <Box
          key={product.id}
          borderWidth="1px"
          borderRadius="md"
          p="4"
          maxW="300px"
          m="2"
        >
          <Image src={product.image} alt={product.title} maxW="100%" />
          <Heading size="md">{product.title}</Heading>
          <Text fontSize="lg">Price: ${product.price.toFixed(2)}</Text>
          <Text>{product.description}</Text>
          <Text>Category: {product.category}</Text>
        </Box>
      ))}
    </Flex>
  );
}
