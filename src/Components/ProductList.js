import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

// const ProductList = ({products, deleteProduct}) => {
//   return (
//     <div>
//         <ul>
//         { products.map((product) => (
//           <li key={ product.id }>{ product.title } - { product.price } 
//           <button className="button is-danger" onClick={() => deleteProduct(product.id)} >Delete</button>
//           </li>
//         )) }
//       </ul>
//     </div>
//   )
// }

const ProductList = () => {

    const [products, setProduct] = useState([]);

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async() => {
        const response = await fetch('http://localhost:8080/products/');
        const data = await response.json();
        setProduct(data);
    }

    const deleteProduct = async(id) => {
        await fetch(`http://localhost:8080/products/${id}`, {
            method: "DELETE",
            headers:{
                'Content-Type': 'application/json'
            }
        });
        fetchData();
    }

  return (
    <div>
        <Link to="/Add" className="button is-primary mt-5 mb-3">Add product</Link>
        <table className="table is-stripped is-fullwidth">
            <thead>
                <tr>
                    <th>No.</th>
                    <th>Title</th>
                    <th>Price</th>
                    <th>Actions</th>
                </tr>
            </thead>
            <tbody>
                {products.map((product, index) => (
                    <tr key={product.id}>
                        <td>{index + 1}</td>
                        <td>{product.title}</td>
                        <td>{product.price}</td>
                        <td>
                            <Link to={`/edit/${product.id}`} className="button is-small is-info">Edit</Link>
                            <button onClick={() => deleteProduct(product.id)} className="button is-small is-danger">delete</button>
                        </td>
                    </tr>
                ))}
                
            </tbody>
        </table>
    </div>
  )
}



export default ProductList