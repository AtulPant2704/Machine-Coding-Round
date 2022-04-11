// Make a page that takes the following 2 inputs separately
// 1. Category name as a string (If the user adds a category it should be added in the category dropdown)
// 2. Then it will also take 2 inputs at once, the product name and its category (With the dropdown containing the added categories)
// The product name will be a string and the category input type will be a dropdown list of the categories the user-entered earlier 

// Then save the data and render the list category wise

// Extending the first question, add delete functionality as such if the user clicks on any item it gets deleted and if the user clicks on any category, all the items within the category and that category itself gets deleted.

import { useState } from "react";

const CategoryProducts = () => {
    const [categories, setCategories] = useState([]);
    const [newCategory, setNewCategory] = useState("");
    const [productsData, setProductsData] = useState([]);
    const [newProduct, setNewProduct] = useState("");
    const [productCategory, setProductCategory] = useState("");

    const categoriesHandler = () => {
        setCategories(prev => [...prev, newCategory]);
        setNewCategory("");
    }

    const productsHandler = () => {
        let newProducts = [...productsData];
        const isCategoryPresent = productsData.some(item => item.category === productCategory);
        if (isCategoryPresent) {
            newProducts = newProducts.map(item => (
                item.category === productCategory ? { ...item, products: [...item.products, newProduct] } : item
            ))
        }
        else {
            newProducts = [...newProducts, { category: productCategory, products: [newProduct] }]
        }
        setProductsData(newProducts);
        setNewProduct("");
        setProductCategory("");
    }

    const deleteProduct = (itemName) => {
        const newProducts = productsData.map(item => (
            { ...item, products: item.products.filter(element => element !== itemName) }
        ));
        setProductsData(newProducts);
    }

    const deleteCategory = (categoryName) => {
        const newProducts = productsData.filter(item => item.category !== categoryName);
        setProductsData(newProducts);
    }

    return (
        <div>
            <label>Add Category: </label>
            <input type="text" value={newCategory} onChange={(e) => setNewCategory(e.target.value)} required></input>
            <button onClick={categoriesHandler}>Add Category</button>
            <div>
                <label htmlFor="">Add Product: </label>
                <input type="text" value={newProduct} onChange={(e) => setNewProduct(e.target.value)} required></input>
                <select value={productCategory} onChange={(e) => setProductCategory(e.target.value)}>
                    <option>Category</option>
                    {categories.map(categoryName => (
                        <option>{categoryName}</option>
                    ))}
                </select>
                <button onClick={productsHandler}>Add product</button>
            </div>
            {productsData.map(({ category, products }) => (
                <div>
                    <h2 onClick={() => deleteCategory(category)}>{category}</h2>
                    {products.map(item => (
                        <p onClick={() => deleteProduct(item)}>{item}</p>
                    ))}
                </div>
            ))}
        </div>
    )
}

export { CategoryProducts };
