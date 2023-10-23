import { useState, useContext } from 'react';
import { ProductContext } from '../../context/ProductContext';
import { categoryContext } from '../../context/CategoryContext';

import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import uuid from 'react-uuid';
import ProductCard from '../ProductCard/ProductCard';

import { BsArrowUp } from "react-icons/bs";
import { BsArrowDown } from "react-icons/bs";



const Filter = () => {
    const { data } = useContext(ProductContext);
    const [category,setCategory] = useState()

    // Store sortby order i.e. ascending or descending
    const [sortType, setSortType] = useState("");

    // Sortby field i.e. category
    const [sortByField, setSortByField] = useState("");

    // Store filter/latest posts
    const [result, setResult] = useState();

    const [state, setstate] = useState({
        query: '',
        list: data
    })

    let tempCategoryArray = [];
    let categoryArray = [];

    tempCategoryArray = data.map(category => category.categories.map(x => ({ name: x.name, id: x.id })).map(x => x.name.split(',').join('\n')));

    for (let i = 0; i < tempCategoryArray.length; i++) {
        for (let j = 0; j < tempCategoryArray[i].length; j++) {
            if (!categoryArray.includes(tempCategoryArray[i][j])) {
                categoryArray.push(tempCategoryArray[i][j]);
            }
        }
    }
    let selectedCategory = [];
    function filteredProducts(category) {

        if (category) {
            data.filter(item => (item.categories.map(categoryName => categoryName.name === sortByField ? selectedCategory.push(item) : null)))
        }
    }
    
    filteredProducts(sortByField)
   
    

    // Sort posts depending on sort type and available results
    function sortFunc(results, sortType, sortByField) {
        if (sortType === "ascending name") {
            
            results.sort((a, b) => a.name < b.name ? -1 : 1)
        }
        else if (sortType === "descending name") {

            results.sort((a, b) => b.name > a.name ? 1 : -1)
        }
        else if (sortType === "ascending price") {
            results.sort((a, b) => Math.round(a.prices.price) < Math.round(b.prices.price) ? -1 : 1)
        } else if (sortType === "descending price") {
            results.sort((a, b) => Math.round(b.prices.price) > Math.round(a.prices.price) ? 1 : -1)
        } 
        
        return results
    }
    // Dropdown to sort posts in ascending or descending order depending on title.
    function updatePosts(e) {
        setSortType(e);
        setstate({
            query: state.query,
            list: !result ? sortFunc(data, e, sortByField) : sortFunc(result, e, sortByField)
        })
    }

    // Dropdown to sort posts in ascending or descending order depending on title.
    function sortBy(e) {
        setSortByField(e);
        setstate({
            query: state.query,
            list: !result ? sortFunc(data, sortType, e) : sortFunc(result, sortType, e)
        })
    }
    
    return (
        <>

            <categoryContext.Provider value={sortByField} >
                <Box sx={{
                    height: 'auto', marginBottom: '25px', display: 'flex',
                    justifyContent: "space-between", gap: '15px'
                }}>
                    <FormControl fullWidth>
                        <InputLabel id="demo-simple-select-label">Категория</InputLabel>
                        <Select sx={{ width: '300px' }}
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            value={sortByField}
                            label="Категория"
                            onChange={(e) => sortBy(e.target.value)}
                        >
                            {categoryArray.map(category => {

                                return <MenuItem key={uuid()} value={category} onChange={(e) => sortBy(e.target.value)}>{category}</MenuItem>
                            })}
                        </Select>
                    </FormControl>
                    <Box >
                        <FormControl fullWidth>
                            <InputLabel id="demo-simple-select-label">Сортирай по</InputLabel>
                            <Select sx={{ width: '300px' }}
                                labelId="demo-imple-select-label"
                                id="demo-simple-select"
                                value={sortType}
                                label="Сортирай по"
                                defaultValue={'DEFAULT'}
                                onChange={(e) => updatePosts(e.target.value)}
                            >
                                <MenuItem value={'ascending name'}>Име <BsArrowUp></BsArrowUp></MenuItem>
                                <MenuItem value={'descending name'}>Име <BsArrowDown></BsArrowDown></MenuItem>
                                <MenuItem value={'ascending price'}>Цена <BsArrowUp></BsArrowUp></MenuItem>
                                <MenuItem value={'descending price'}>Цена <BsArrowDown></BsArrowDown></MenuItem>
                            </Select>
                        </FormControl>
                    </Box>
                </Box>
               <ProductCard value={selectedCategory}/>
            </categoryContext.Provider>
        </>
    );
}
export default Filter