
import React from 'react'
import { useContext } from 'react'
import { ProductContext } from '../../context/ProductContext'
import { categoryContext } from '../../context/CategoryContext';
import Dinero from 'dinero.js'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Grid2 from '@mui/material/Unstable_Grid2/Grid2';
import Box from '@mui/material/Box';
import Button from '../Button/Button';

const ProductCard = (selectedCategory) => {

    const { data } = useContext(ProductContext);
    const  category = useContext(categoryContext);
  
    const BUTTON_URL = 'https://greet.bg/?add-to-cart=5589'


    {
        if (category === '') {
            return (
                <div>
                    <Box sx={{
                        display: 'flex', flexDirection: 'row', marginTop: '10px', justifyContent: 'space-around',
                        marginBottom: '40px'
                    }}>
                        <Grid2 sx={{
                            display: "grid",
                            gridTemplateColumns: "repeat(5, 1fr)",
                            gridGap: "30px",
                            margin: "auto",
                            width: "90vw",
                        }}>

                            {data.map((product) => (
                                <Card key={product.id} sx={{
                                    maxWidth: 345, display: 'block', flexDirection: 'column', justifyContent: 'space-between',
                                    border: '2px solid #F2F2F2', boxShadow: ' rgba(0, 0, 0, 0.16) 0px 1px 4px',
                                    borderRadius: '5px', justifyContent: 'center'
                                }}>
                                    <Box sx={{ position: 'relative' }}>
                                        <Box > 
                                        <CardMedia
                                            sx={{ height: 550 }}
                                            image={product.images.map(x => x.src)}
                                            title={product.name}
                                        />
                                        </Box>
                                        <Box
                                            sx={{
                                                position: 'absolute',
                                                bottom: 0,
                                                left: 0,
                                                width: '100%',
                                                bgcolor: 'rgba(0, 0, 0, 0.54)',
                                                color: 'white',
                                                padding: '10px',
                                            }}
                                        >
                                            <Typography gutterBottom variant="h7" component="div" sx={{ marginTop: 5, display: 'flex', justifyContent: 'center' }}>
                                                Цена: {Dinero({ amount: Math.round(product.prices.price), currency: product.prices.currency_code, precision: 2 }).toFormat()}
                                            </Typography>
                                        </Box>
                                    </Box>
                                    <CardContent sx={{ display: 'flex', flexDirection: 'column', gap: '25px' }}>
                                        <Box sx={{
                                            display: 'flex', flexDirection: 'row', height: '130px', textAlign: 'center',
                                            border: '2px solid #F2F2F2', padding: '10px', boxShadow: ' rgba(0, 0, 0, 0.16) 0px 1px 4px', alignItems: 'center',
                                            borderRadius: '5px', justifyContent: 'center',
                                        }}>
                                            <Typography gutterBottom variant="h4" sx={{
                                                display: "flex",
                                                textAlign: "center",
                                                paddingTop: '8px',
                                                color: "CaptionText"
                                            }} component="div">
                                                {product.name}
                                            </Typography>
                                        </Box>
                                        <Box sx={{
                                            border: '2px solid red', height: '350px', border: '2px solid #F2F2F2', padding: '10px',
                                            boxShadow: ' rgba(0, 0, 0, 0.16) 0px 1px 4px', alignItems: 'center', borderRadius: '5px',
                                            justifyContent: 'center'
                                        }}>
                                            <Typography variant="h6"
                                                sx={{
                                                    overflow: "hidden",
                                                    textOverflow: "ellipsis",
                                                    display: "-webkit-box",
                                                    WebkitLineClamp: "10",
                                                    WebkitBoxOrient: "vertical",
                                                }}>
                                                {(product.short_description).replace(/<(.|\n )*?>/g, '')}
                                            </Typography>
                                        </Box>
                                        <Box sx={{
                                            border: '2px solid #F2F2F2', padding: '10px', boxShadow: ' rgba(0, 0, 0, 0.16) 0px 1px 4px', alignItems: 'center',
                                            borderRadius: '5px', justifyContent: 'center', height: '100px',
                                        }}>
                                            <Typography gutterBottom variant="h7" component="div" sx={{ marginBottom: 5, display: 'flex', fontSize: '18px' }}>
                                                Категоря: {product.categories.map((x => x.name + ' '))}
                                            </Typography>
                                        </Box>

                                    </CardContent>

                                    <CardActions>
                                        
                                        <Button onClick={() => { window.open(BUTTON_URL, '_blank') }} > Add To Cart</Button>
                                      
                                    </CardActions>
                                </Card>
                            ))}
                        </Grid2>
                    </Box>

                </div>
            );

        } else if (category !== '') {
            return (
                
                <div>
                <Box sx={{
                    display: 'flex', flexDirection: 'row', marginTop: '10px', justifyContent: 'space-around',
                    marginBottom: '40px'
                }}>
                    <Grid2 sx={{
                        display: "grid",
                        gridTemplateColumns: "repeat(5, 1fr)",
                        gridGap: "30px",
                        margin: "auto",
                        width: "90vw",
                    }}>

                        {selectedCategory.value && selectedCategory.value.map((product) => (
                            <Card key={product.id} sx={{
                                maxWidth: 345, display: 'block', flexDirection: 'column', justifyContent: 'space-between',
                                border: '2px solid #F2F2F2', boxShadow: ' rgba(0, 0, 0, 0.16) 0px 1px 4px',
                                borderRadius: '5px', justifyContent: 'center'
                            }}>
                                <Box sx={{ position: 'relative' }}>
                                    <Box > 
                                    <CardMedia
                                        sx={{ height: 550 }}
                                        image={product.images.map(x => x.src)}
                                        title={product.name}
                                    />
                                    </Box>
                                    <Box
                                        sx={{
                                            position: 'absolute',
                                            bottom: 0,
                                            left: 0,
                                            width: '100%',
                                            bgcolor: 'rgba(0, 0, 0, 0.54)',
                                            color: 'white',
                                            padding: '10px',
                                        }}
                                    >
                                        <Typography gutterBottom variant="h7" component="div" sx={{ marginTop: 5, display: 'flex', justifyContent: 'center' }}>
                                            Цена: {Dinero({ amount: Math.round(product.prices.price), currency: product.prices.currency_code, precision: 2 }).toFormat()}
                                        </Typography>
                                    </Box>
                                </Box>
                                <CardContent sx={{ display: 'flex', flexDirection: 'column', gap: '25px' }}>
                                    <Box sx={{
                                        display: 'flex', flexDirection: 'row', height: '130px', textAlign: 'center',
                                        border: '2px solid #F2F2F2', padding: '10px', boxShadow: ' rgba(0, 0, 0, 0.16) 0px 1px 4px', alignItems: 'center',
                                        borderRadius: '5px', justifyContent: 'center',
                                    }}>
                                        <Typography gutterBottom variant="h4" sx={{
                                            display: "flex",
                                            textAlign: "center",
                                            paddingTop: '8px',
                                            color: "CaptionText"
                                        }} component="div">
                                            {product.name}
                                        </Typography>
                                    </Box>
                                    <Box sx={{
                                        border: '2px solid red', height: '350px', border: '2px solid #F2F2F2', padding: '10px',
                                        boxShadow: ' rgba(0, 0, 0, 0.16) 0px 1px 4px', alignItems: 'center', borderRadius: '5px',
                                        justifyContent: 'center'
                                    }}>
                                        <Typography variant="h6"
                                            sx={{
                                                overflow: "hidden",
                                                textOverflow: "ellipsis",
                                                display: "-webkit-box",
                                                WebkitLineClamp: "10",
                                                WebkitBoxOrient: "vertical",
                                            }}>
                                            {(product.short_description).replace(/<(.|\n )*?>/g, '')}
                                        </Typography>
                                    </Box>
                                    <Box sx={{
                                        border: '2px solid #F2F2F2', padding: '10px', boxShadow: ' rgba(0, 0, 0, 0.16) 0px 1px 4px', alignItems: 'center',
                                        borderRadius: '5px', justifyContent: 'center', height: '100px',
                                    }}>
                                        <Typography gutterBottom variant="h7" component="div" sx={{ marginBottom: 5, display: 'flex', fontSize: '18px' }}>
                                            Категоря: {product.categories.map((x => x.name + ' '))}
                                        </Typography>
                                    </Box>

                                </CardContent>

                                <CardActions>
                                    
                                    <Button onClick={() => { window.open(BUTTON_URL, '_blank') }} > Add To Cart</Button>
                                  
                                </CardActions>
                            </Card>
                        ))}
                    </Grid2>
                </Box>

            </div>
            );
        }
    }
}

export default ProductCard