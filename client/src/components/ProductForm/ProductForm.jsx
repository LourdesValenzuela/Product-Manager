import React from 'react';
import './ProductForm.css';

const ProductForm = ({
    title,
    price,
    description,
    setTitle,
    setPrice,
    setDescription,
    onSubmitHandler
}) => {
    return (
        <div className="product-form-container">
            <form className="product-form" onSubmit={onSubmitHandler}>
                <h2>Product Manager</h2>
                <div className="form-group">
                    <label>Title</label>
                    <input
                        type="text"
                        onChange={(e) => setTitle(e.target.value)}
                        value={title}
                    />
                </div>
                <div className="form-group">
                    <label>Price</label>
                    <input
                        type="number"
                        onChange={(e) => setPrice(e.target.value)}
                        value={price}
                    />
                </div>
                <div className="form-group">
                    <label>Description</label>
                    <input
                        type="text"
                        onChange={(e) => setDescription(e.target.value)}
                        value={description}
                    />
                </div>
                <input type="submit" value="Create" />
            </form>
        </div>
    );
};

export default ProductForm;
