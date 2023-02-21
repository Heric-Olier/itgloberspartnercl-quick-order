import React, { useState, useEffect } from 'react';
import { useMutation, useLazyQuery } from 'react-apollo';
import UPDATE_CART from '../graphql/updateCart.graphql';
import GET_PRODUCT from '../graphql/getProductBySku.graphql';

const QuickOrder = () => {

  const [inputText, setInputText] = useState('');
  const [search, setSearch] = useState('');
  const [error, setError] = useState(false);
  const [productAdded, setProductAdded] = useState(false);
  const [quantity, setQuantity] = useState(1);

  const handleInputChange = (event: any) => {
    setInputText(event.target.value);
    setError(false);
  }

  const [getProduct, { data: product }] = useLazyQuery(GET_PRODUCT);
  const [addToCart] = useMutation(UPDATE_CART)

  useEffect(() => {
    console.log('el resultado de la busqueda es: ', product, search);
    let skuId = parseInt(inputText);
    addToCart({
      variables: {
        salesChannel: "1",
        items: [
          {
            id: skuId,
            quantity: quantity,
            seller: "1"
          }
        ]
      }
    }).then(() => {
      setProductAdded(true);
      setTimeout(() => {
        setProductAdded(false);
        window.location.href = '/checkout/#/cart';
      }, 3500);

    })
  }, [product, search])


  const addProduct = () => {
    getProduct({
      variables: {
        sku: inputText
      }
    })
  }

  const searchProduct = (event: any) => {
    event.preventDefault();
    if (inputText === '') {
      setError(true);
      return;
    } else if (isNaN(parseInt(inputText))) {
      setError(true);
      return;
    } else {
      setSearch(inputText);
      addProduct();
    }
  }

  return (
    <div className='flex flex-column w-100'>
      <form onSubmit={searchProduct}>
        <label htmlFor="sku" >Ingresa el numero de SKU</label>
        <input type="text" id="sku" name="sku" className='w-100 mv4 pa2'
          style={{
            border: '1px solid #ccc',
            borderRadius: '4px',
            padding: '8px 20px',
            boxSizing: 'border-box',
            fontFamily: 'Roboto-Regular',
            fontSize: '1rem',
          }}
          onChange={handleInputChange}
        >
        </input>
        <label htmlFor="quantity" >Ingresa la cantidad</label>
        <input type="number" id="quantity" name="quantity" min="1" max="50" defaultValue={1} className='w-100 mv4 pa2'
          style={{
            border: '1px solid #ccc',
            borderRadius: '4px',
            padding: '8px 20px',
            boxSizing: 'border-box',
            fontFamily: 'Roboto-Regular',
            fontSize: '1rem',
          }}
          onChange={(event) => setQuantity(parseInt(event.target.value))}
        >
        </input>

        {error && <p className='red'>Ingresa un SKU valido</p>}
        <button type="submit"
          className='w-100 mt4'
          style={{
            backgroundColor: '#fb441f',
            color: '#fff',
            border: 'none',
            padding: '10px 20px',
            fontFamily: 'Roboto-Regular',
            fontSize: '.9rem',
            cursor: 'pointer',
          }}
        >
          AÑADIR A LA BOLSA</button>
      </form>
      {productAdded && <div className='flex justify-center flex-column items-center mt4'>
        <h1 style={
          {
            fontFamily: 'Roboto-Regular',
            fontSize: '1rem',
            color: '#fb441f',
            marginBottom: '10px',
            textTransform: 'uppercase',
          }
        }>{product?.product?.productName}</h1>
        Agregado a la bolsa
      </div>}
    </div>
  );
}


export default QuickOrder;
