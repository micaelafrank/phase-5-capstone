import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import S3FileUpload from 'react-s3';


function AddItemForm({ renderNewItem, items, setItems, user }) {
    const [itemname, setItemName] = useState("")
    const [price, setPrice] = useState("")
    const [description, setDescription] = useState("")
    const [color, setColor] = useState("#00FF00")
    const [material, setMaterial] = useState("")
    const [size, setSize] = useState("XXS")
    const [condition, setCondition] = useState("New With Tags")
    const [errors, setErrors] = useState([]);

    const formData = {
        itemname: itemname,
        price: price, 
        description: description, 
        color: color, 
        material: material, 
        size: size, 
        condition: condition,
        user_id: user.id
    }
    
    function handleSubmit(e) {
        e.preventDefault();
        setErrors([]);
        fetch("/items", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(formData)
        })
            .then((r) => {
                if (r.ok) {
                    r.json().then(data => renderNewItem(data));
                    // navigate(`/item/${id}`);
                }
                else {
                    r.json().then((err) => setErrors(err.errors));
                }
            });
    }


    // const uploadPhoto=(e)=>{
    //     S3FileUpload.uploadFile(e.target.files[0], config)
    //     .then((data)=> {
    //         console.log(data.location)
    //     })
    //     .catch( (err=>{
    //         alert(err)
    //     }))
    // }

    return(
        <>
            <h1>SELL NEW ITEM:</h1>
            <form onSubmit={handleSubmit}> 
            {/* onSubmit={handleSubmit}> */}
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
                        <option value="33">N/A</option>
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
{/* 
                <Form.Group controlId="formFileSm" className="mb-3">
                    <Form.Label>Upload photos:</Form.Label>
                    <Form.Control type="file" size="sm" 
                    value={image}
                    onChange={uploadPhoto}/>
                    <Form.Control type="file" size="sm"
                        value={image}
                        onChange={uploadPhoto} />
                    <Form.Control type="file" size="sm"
                        value={image}
                        onChange={uploadPhoto} />
                </Form.Group>  */}
                <button type="submit">Submit</button>
            </form>
        </>
    )
}

export default AddItemForm; 