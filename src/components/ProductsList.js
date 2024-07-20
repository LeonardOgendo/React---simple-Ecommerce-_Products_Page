import { useState } from 'react'
import '../styles.css'

function ProductsList(props){
    const [addedToCart, setAddedToCart] = useState(false);

    function handleClick(){
        return(
            setAddedToCart((prevState) => !prevState)
        )
    }

    return(
        <main>
            <div className='products-list'>
                <img id='product--image' src={`/images/${props.product.img} `} alt={props.product.title} />
                <span>{props.product.title}</span>
                <span>Ksh {props.product.price}</span>
                <button onClick={handleClick}>{addedToCart ? 'Remove from Cart' : 'Add to Cart'}</button>
            </div>
       </main>
        
    )
}
export default ProductsList