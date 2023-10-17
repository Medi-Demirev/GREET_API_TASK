
import React, { useState } from 'react'
import { useContext } from 'react'
import { ProductContext } from '../../context/ProductContext'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { categoryContext } from '../../context/CategoryContext';


const  ProductCard = ()=> {
   
    const {data} = useContext(ProductContext);
    let category = useContext(categoryContext);
    let selectedCategory = []; 
  
   data.filter( item=> (item.categories.map(categoryName=> categoryName.name === category ? selectedCategory.push(item): null ))) 
  
   if (category === '') {
    return (
        <> 
        {data.map((product)=>(
         <Card key={product.id} sx={{ maxWidth: 345}}>
           
           <CardMedia
             sx={{ height:550}}
             image={product.images.map(x=>x.src)}
             title={product.name}
           />
           <CardContent>
             <Typography gutterBottom variant="h4" sx={{display:"flex",
              textAlign:"center", 
              alignItems: "center",
              justifyContent:'center',
              color:"CaptionText"
              }} component="div">
               {product.name}
             </Typography>
             <Typography variant="h6" 
             sx={{
                 overflow: "hidden",
                 textOverflow: "ellipsis",
                 display: "-webkit-box",
                 WebkitLineClamp: "8",
                 WebkitBoxOrient: "vertical",
               }}>
             {(product.short_description).replace(/<(.|\n )*?>/g, '') }
             </Typography>
             <Typography gutterBottom variant="h7" component="div" sx={{marginTop:5}}>
              Категоря: {product.categories.map(( x => x.name +' ,' ))}
             </Typography>
           </CardContent>
           <CardActions>
             <Button variant="contained" sx={{display: "block",
              marginLeft: 'auto' , 
              marginRight: 'auto', 
              marginTop: 0,
              marginBottom:0 }}>Add To Cart
             </Button>
           </CardActions>
         </Card>
           ))}
         </>

  );

   } else {
    return (
        <> 
        {selectedCategory.map((product)=>(
         <Card key={product.id} sx={{ maxWidth: 345}}>
           
           <CardMedia
             sx={{ height:550}}
             image={product.images.map(x=>x.src)}
             title={product.name}
           />
           <CardContent>
             <Typography gutterBottom variant="h4" sx={{display:"flex",
              textAlign:"center", 
              alignItems: "center",
              justifyContent:'center',
              color:"CaptionText"
              }} component="div">
               {product.name}
             </Typography>
             <Typography variant="h6" 
             sx={{
                 overflow: "hidden",
                 textOverflow: "ellipsis",
                 display: "-webkit-box",
                 WebkitLineClamp: "8",
                 WebkitBoxOrient: "vertical",
               }}>
             {(product.short_description).replace(/<(.|\n )*?>/g, '') }
             </Typography>
             <Typography gutterBottom variant="h7" component="div" sx={{marginTop:5}}>
              Категоря: {product.categories.map(( x => x.name +' ,' ))}
             </Typography>
           </CardContent>
           <CardActions>
             <Button variant="contained" sx={{display: "block",
              marginLeft: 'auto' , 
              marginRight: 'auto', 
              marginTop: 0,
              marginBottom:0 }}>Add To Cart
             </Button>
           </CardActions>
         </Card>
           ))}
         </>

  );
   }

}

export default ProductCard