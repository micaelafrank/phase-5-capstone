import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import { useNavigate } from 'react-router-dom';
import ItemCard from './ignore/ItemCard'

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
    console.log(user)

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
    console.log(user)

    
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
            <div style={{display:"flex"}}>
                <form className="new-plant-form" id="item-form" style={{width:"600px", paddingLeft:"20px", height:"auto"}} onSubmit={handleSubmit}> 
                    <h1>Add a new item for sale:</h1>
                    <Form.Group style={{paddingBottom:"20px"}} className="mb-3">
                        <Form.Label style={{ paddingRight: "10px" }} htmlFor="name">Item Name:</Form.Label>
                        <Form.Control type="text" 
                            id="itemname"
                            value={itemname}
                            onChange={(e) => setItemName(e.target.value)}
                        />
                    </Form.Group>

                    <Form.Group className="mb-3" style={{ paddingBottom: "20px" }}>
                        <Form.Label htmlFor="price" style={{paddingRight:"10px"}}>Price:</Form.Label>
                        <Form.Control type="float"
                            id="price"
                            value={price}
                            onChange={(e) => setPrice(e.target.value).toFixed(2)}
                        />
                    </Form.Group>
                    <Form.Label style={{ paddingRight: "10px"}} htmlFor="description">Description:</Form.Label>
                    <FloatingLabel style={{paddingTop:"20px"}}>
                        <Form.Control
                        as="textarea"
                        placeholder="Enter a description"
                        style={{ height: '100px', width:"400px"}}
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                        />
                    </FloatingLabel>

                    <Form.Label style={{ paddingRight: "10px", paddingTop: "20px" }} 
                        htmlFor="exampleColorInput">Color:</Form.Label>
                    <Form.Control
                        type="color"
                        style={{marginTop:"10px"}}
                        id="color"
                        title="Choose your color"
                        value={color}
                        onChange={(e) => setColor(e.target.value)}
                    />

                    <Form.Group style={{paddingTop:"20px"}} className="mb-3">
                        <Form.Label style={{ paddingRight: "10px"}} htmlFor="name">Brand/Material:</Form.Label>
                        <Form.Control type="text"
                            id="material"
                            value={material}
                            onChange={(e) => setMaterial(e.target.value)}
                        />
                    </Form.Group>

                    <Form.Group style={{ paddingTop: "20px" }} className="mb-3">
                        <label style={{ paddingRight: "10px" }} htmlFor="type">Size:</label>
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
                            <option value="W5">W5</option>
                            <option value="W6">W6</option>
                            <option value="W7">W7</option>
                            <option value="W8">W8</option>
                            <option value="W9">W9</option>
                            <option value="W10">W10</option>
                            <option value="W11">W11</option>
                            <option value="M7">M7</option>
                            <option value="M8">M8</option>
                            <option value="M9">M9</option>
                            <option value="M10">M10</option>
                            <option value="M11">M11</option>
                            <option value="M12">M12</option>
                            <option value="M13">M13</option>
                            <option value="M14">M14</option>
                            <option value="NA">N/A</option>
                        </select>
                    </Form.Group>

                    <Form.Group style={{ paddingTop: "20px" }} className="mb-3">
                        <label style={{ paddingRight: "10px" }} htmlFor="type">Condition:</label>
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

                    <Form.Group style={{ paddingTop: "20px" }} className="mb-3">
                        <label style={{ paddingRight: "10px" }}>Upload images:</label>
                        <input type="file"
                        id="file" 
                        multiple 
                        name="file"
                        accept="image/*"
                        onChange={handleImages} 
                        />
                    </Form.Group>  
                    <button style={{ marginTop: "20px", padding: "10px 25px" }} type="submit">Submit</button>
                </form>
                </div>
            </>
    )
}

export default AddItemForm; 