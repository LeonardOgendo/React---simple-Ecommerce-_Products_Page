import ProductsList from "./components/ProductsList";
import './styles.css'
import {Products} from "./Products";

function App(){
    const allProducts = Products.map(product => {
        return(
            <ProductsList product={product} />
        )
    })

    return (
        <div>
            <h2>All Products</h2>
            <div className="products-all">
                {allProducts}
            </div>
            
        </div>
    )
}
export default App