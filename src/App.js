
// import { useState, useEffect } from "react";
// import Header from "./Components/Header";
import ProductList from "./Components/ProductList";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Contact from "./Components/Contact";
// import About from "./Components/About";
import AddProduct from "./Components/AddProduct";
import EditProduct from "./Components/EditProduct";

function App() {

  // const [title, setTitle] = useState("Wellcome in here");
  // const [age, setAge] = useState(40);
  // const [products, setProducts] = useState([
  //   {id: 1, title:'product 1', price: 899},
  //   {id: 2, title:'product 2', price: 890},
  //   {id: 3, title:'product 3', price: 379},
  //   {id: 4, title:'product 4', price: 329}
  // ]);
  // const link = "https://reactjs.org/docs/create-a-new-react-app.html";

  // const clickMe = (name) => {
  //   console.log('Hallo : '+ name);
  // }

  // const changeTitle = () => {
  //   setTitle("Title Changed");
  //   setAge(20);
  // }

  // const deleteProduct = (productId) => {
  //   const newProducts = products.filter(product => product.id !== productId);
  //   setProducts(newProducts);
  // }

  // const [name, setName] = useState("Toni");

  // useEffect(() => {
  //   console.log('Use Effect Running');
  // }, [name]);

  return (
    <div className="App container">
      {/* <Header /> */}
      <Router>
        <Routes>
          <Route path="/" element={<ProductList />} />
          <Route path="/Add" element={<AddProduct />} />
          <Route path="/Edit/:id" element={<EditProduct />} />
          <Route path="/contact" element={<Contact />} /> 
        </Routes>
      </Router>
      {/* <button onClick={ () => setName('Tri Yuli Pahtoni') }>Change name</button>
      <p>{name}</p> */}
      {/* <h1>{ title }</h1>
      <h1>Age : { age }</h1> */}
      {/* <a href={ link }>go form rect</a> */}
      {/* <button onClick={ () => clickMe('Toni') }>Click me</button> */}
      {/* <button onClick={changeTitle}>Change title</button> */}
      
    </div>
  );
};

export default App;
