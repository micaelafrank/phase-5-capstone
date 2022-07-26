import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import { useNavigate } from 'react-router-dom';

function AddItemForm({ user, addNewItem }) {
    const [itemname, setItemName] = useState("")
    const [price, setPrice] = useState("")
    const [description, setDescription] = useState("")
    const [color, setColor] = useState("#00FF00")
    const [material, setMaterial] = useState("")
    const [size, setSize] = useState("XXS")
    const [condition, setCondition] = useState("New With Tags")
    const [errors, setErrors] = useState([]);
    const [images, setImages] = useState([]);
    const navigate = useNavigate();

    function handleImages(e) {
        console.log(e.target.files[0]);
        setImages(e.target.files[0])
    };

   const formData = new FormData();
    formData.append('itemname', itemname);
    formData.append('price', price);
    formData.append('description', description);
    formData.append('color', color);
    formData.append('material', material);
    formData.append('size', size);
    formData.append('condition', condition);
    formData.append('user_id', user.id);
    formData.append('images', images);

    
    function handleSubmit(e) {
        e.preventDefault();
        setErrors([]);
        fetch("/items", {
            method: "POST",
            body: formData,
        })
            .then((r) => {
                // setIsLoading(false);
                if (r.ok) {
                    r.json().then(data => addNewItem(data));
                    navigate("/buy")}
                else {
                    r.json().then((err) => setErrors(err.errors));
                }
            });
    }

    return(
        <>
            <h1>SELL NEW ITEM:</h1>
            <form onSubmit={handleSubmit}> 
                <Form.Group className="mb-3">
                    <Form.Label htmlFor="name">Item Name:</Form.Label>
                    <Form.Control type="text" 
                        id="itemname"
                        value={itemname}
                        onChange={(e) => setItemName(e.target.value)}
                    />
                </Form.Group>

                <Form.Group className="mb-3">
                    <Form.Label htmlFor="price">Price:</Form.Label>
                    <Form.Control type="float"
                        id="price"
                        value={price}
                        onChange={(e) => setPrice(e.target.value)}
                    />
                </Form.Group>
                <FloatingLabel>
                    <Form.Control
                    as="textarea"
                    placeholder="Enter a description"
                    style={{ height: '100px' }}
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    />
                </FloatingLabel>

                <Form.Label htmlFor="exampleColorInput">Select color (optional):</Form.Label>
                <Form.Control
                    type="color"
                    id="color"
                    title="Choose your color"
                    value={color}
                    onChange={(e) => setColor(e.target.value)}
                />

                <Form.Group className="mb-3">
                    <Form.Label htmlFor="name">Material:</Form.Label>
                    <Form.Control type="text"
                        id="material"
                        value={material}
                        onChange={(e) => setMaterial(e.target.value)}
                    />
                </Form.Group>

                <Form.Group className="mb-3">
                    <label htmlFor="type">Size</label>
                    <select
                        id="type"
                        value={size}
                        onChange={(e) => setSize(e.target.value)}
                    >
                        <option value="XXS">XXS</option>
                        <option value="XS">XS</option>
                        <option value="S">S</option>
                        <option value="M">M</option>
                        <option value="L">L</option>
                        <option value="XL">XL</option>
                        <option value="XXL">XXL</option>
                        <option value="24">24</option>
                        <option value="25">25</option>
                        <option value="26">26</option>
                        <option value="27">27</option>
                        <option value="28">28</option>
                        <option value="29">29</option>
                        <option value="30">30</option>
                        <option value="31">31</option>
                        <option value="32">32</option>
                        <option value="33">33</option>
                        <option value="0">0</option>
                        <option value="2">2</option>
                        <option value="4">4</option>
                        <option value="6">6</option>
                        <option value="8">8</option>
                        <option value="10">10</option>
                        <option value="12">12</option>
                        <option value="14">14</option>
                        <option value="16">16</option>
                        <option value="NA">N/A</option>
                    </select>
                </Form.Group>

                <Form.Group className="mb-3">
                    <label htmlFor="type">Condition</label>
                    <select
                        id="condition"
                        value={condition}
                        onChange={(e) => setCondition(e.target.value)}
                    >
                        <option value="newWithTags">New With Tags</option>
                        <option value="likeNew">Like New</option>
                        <option value="good">Good</option>
                        <option value="average">Average</option>
                        <option value="worn">Worn/Used</option>
                        <option value="wearTear">Some Wear and Tear</option>
                    </select>
                </Form.Group>

                <Form.Group className="mb-3">
                    <label>Upload images:</label>
                    <input type="file"
                    id="file" 
                    name="file"
                    accept="image/*"
                    onChange={handleImages} 
                    />
                </Form.Group>  
                <button style={{padding:"5px 12px"}} type="submit">Submit</button>
            </form>
        </>
    )
}

export default AddItemForm; 