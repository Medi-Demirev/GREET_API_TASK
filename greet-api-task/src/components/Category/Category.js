import { useState, useContext } from 'react';
import { ProductContext } from '../../context/ProductContext';
import { categoryContext } from '../../context/CategoryContext';
import Home from '../Home/Home';

import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import uuid from 'react-uuid';


 const Category = () => {
    const {data} = useContext(ProductContext);
    const [category, setCategory] = useState('');
    let tempCategoryArray = [];
    let categoryArray= [];

    const handleChange = (e) => {
       
        setCategory(e.target.value);

       };

    
    tempCategoryArray = data.map(category=>category.categories.map(x=> ({name: x.name, id: x.id})).map(x => x.name.split(',').join('\n')));
    
    for (let i = 0; i < tempCategoryArray.length; i++) {
        for (let j = 0; j < tempCategoryArray[i].length; j++) {
            if (!categoryArray.includes(tempCategoryArray[i][j])) {
                categoryArray.push(tempCategoryArray[i][j]);   
            }
        }
      }
  return (
    <>
  
  <categoryContext.Provider value={category}>
    <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Категория</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={category}
          label="Категория"
          onChange={handleChange}
        >
             { categoryArray.map(category=> {

        return  <MenuItem key={uuid()} value={category} >{category}</MenuItem>
        })}
        </Select>
      </FormControl>
    </Box>
    <Home/>
    </categoryContext.Provider>
   
    </>
  );
}
export default Category