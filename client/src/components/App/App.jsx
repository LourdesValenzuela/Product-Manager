import React, { useState } from 'react';
import axios from 'axios';
import ProductForm from '../ProductForm/ProductForm';
import './App.css';

const App = () => {
    // mantener el control de lo que se escribe a través del gancho useState
    const [title, setTitle] = useState(""); 
    const [price, setPrice] = useState("");
    const [description, setDescription] = useState("");
    
    // gestor cuando se envía el formulario
    const onSubmitHandler = e => {
        // evitar el comportamiento por defecto de submit
        e.preventDefault();
        // hacer una petición POST para crear un nuevo producto
        axios.post('http://localhost:8000/api/products', {
            title,
            price,
            description
        })
            .then(res => console.log(res))
            .catch(err => console.log(err));
    };

    return (
        <div className="App">
            <ProductForm
                title={title}
                price={price}
                description={description}
                setTitle={setTitle}
                setPrice={setPrice}
                setDescription={setDescription}
                onSubmitHandler={onSubmitHandler}
            />
        </div>
    );
};

export default App;

