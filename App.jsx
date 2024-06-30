import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'

import './App.css'
import {Box} from '@chakra-ui/react'
import { Stack, HStack, VStack } from '@chakra-ui/react'
import { Input } from '@chakra-ui/react'
import { IconButton } from '@chakra-ui/react'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     
     <h1>S E P H O R A</h1>
   
     <Input placeholder='Search' size='md' />
 
     

     <Box bg='black' w='100%' p={4} color='white'>
     <HStack spacing='24px'>
  <Box w='100px' h='40px' bg='black'>
    New
  </Box>
  <Box w='100px' h='40px' bg='black'>
    Brands
  </Box>
  <Box w='100px' h='40px' bg='black'>
    Makeup
  </Box>
  <Box w='100px' h='40px' bg='black'>
    Skincare
  </Box>
  <Box w='100px' h='40px' bg='black'>
    Hair
  </Box>
  <Box w='100px' h='40px' bg='black'>
    Fragrance
  </Box>
  <Box w='100px' h='40px' bg='black'>
    Tools & Brushes
  </Box>
  <Box w='100px' h='40px' bg='black'>
    Bath & Body
  </Box>
  <Box w='100px' h='40px' bg='black'>
    Clean Beauty
  </Box>
  <Box w='100px' h='40px' bg='black'>
    Mini Size
  </Box>
  <Box w='100px' h='54px' bg='black'>
    Gifts & Gift Cards
  </Box>
  <Box w='100px' h='54px' bg='black'>
    Beauty Under $20
  </Box>
  <Box w='100px' h='40px' bg='black'>
    Sale & Offers
  </Box>

  



</HStack>
     </Box>
     
           




    </>



  )
}

export default App
