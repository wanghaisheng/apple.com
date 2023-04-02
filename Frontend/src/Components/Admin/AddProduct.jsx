import {
    Drawer,
    DrawerBody,
    DrawerHeader,
    DrawerOverlay,
    DrawerContent,
    useDisclosure,
    Button,
    Input,
    Box,
    FormControl,
    FormLabel,
    Tooltip,
} from '@chakra-ui/react'
import React, { useState } from 'react'
import { BiBookAdd } from 'react-icons/bi'
import { useDispatch } from 'react-redux';
import { AddAdminProducts } from '../../Redux/Admin/admin.action';

function AddProduct() {
    const [title, setTitle] = useState("");
    const [category, setCategory] = useState("");
    const [selectedImage, setSelectedImage] = useState(null);
    const [price, setPrice] = useState("");
    const { isOpen, onOpen, onClose } = useDisclosure()
    const dispatch = useDispatch();

    const handleAddProd = () => {
        if (title.length && category.length && selectedImage !== null && price.length) {
            dispatch(AddAdminProducts({
                title: title,
                category: category,
                image: selectedImage,
                price: price
            }))
            console.log('added');
        }
    }

    return (
        <>
            <Box>
                <Tooltip label='Add product' placement='top'>
                    <Button bg='none' fontSize={'25px'} onClick={onOpen} position='left' _hover={{}}>
                        <BiBookAdd />
                    </Button>
                </Tooltip>
                <Drawer placement={"top"} onClose={onClose} isOpen={isOpen}>
                    <DrawerOverlay />
                    <DrawerContent>
                        <DrawerHeader borderBottomWidth='1px' color={'white'}>
                            Add a new Product <span style={{ "marginLeft": '5px' }}><BiBookAdd /> </span>
                        </DrawerHeader>
                        <DrawerBody>
                            <FormControl w='400px' m='auto' >
                                <FormLabel>Title</FormLabel>
                                <Input
                                    placeholder='Add Title'
                                    onChange={(e) => setTitle(e.target.value)}
                                />
                                <FormLabel mt='10px'>Category</FormLabel>
                                <Input
                                    placeholder='Add Category'
                                    onChange={(e) => setCategory(e.target.value)}
                                />
                                <FormLabel mt='10px'>Image</FormLabel>
                                <Input
                                    placeholder='Add image URL'
                                    onChange={(e) => setSelectedImage(e.target.value)}
                                />
                                <FormLabel mt='10px'>Price</FormLabel>
                                <Input
                                    type='number'
                                    placeholder='Add the price'
                                    onChange={(e) => setPrice(e.target.value)}
                                />
                                <Box m='40px 0'>
                                    <Button mr={3} onClick={handleAddProd}>Save</Button>
                                    <Button onClick={onClose}>Cancel</Button>
                                </Box>
                            </FormControl>
                        </DrawerBody>
                    </DrawerContent>
                </Drawer>
            </Box>
        </>
    )
}
export default AddProduct;