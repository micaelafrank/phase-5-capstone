import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import React from 'react';
import { useParams } from 'react-router-dom'
import AddItemForm from './AddItemForm';

function EditDelete(){

    function handleDelete(){
        //delete request 
        fetch(`http://localhost:4000/expenses/${id}`, {
            method: "DELETE",
        })
        //send to App and delete from items list 
        deleteMyListing(id);

        // ***************************
        //post this filtering in App: 
        function deleteMyListing(id) {
            const updatedItemsList = items.filter((item) => item.id !== id);
            setItems(updatedItemsList);
        }
        // *************************** 
    }

    // in return statement for editing: 
    <button onClick={() => setShowEdit(showEdit => !showEdit)}>Edit Item</button>
    { showEdit && <AddItemForm item={item} onUpdateRequest={handleUpdateItem} edit={true} /> }


    return(
        <>
            <div className="edit-item">
                <EditIcon />
                <p style={{ paddingRight: "14px" }}>Edit Details</p>
            </div>
            <div className="delete-item" onClick={handleDelete}>
                <DeleteIcon />
                <p style={{ paddingRight: "14px" }}>Delete Listing</p>
            </div>

            <aside className="hide" class="asideclass" id="moveAside">
                <div class="modal-square">
                    <p class="modal-blurb">Are you sure you want to delete this item? This action cannot be undone.</p>
                    <div class="modal-button" id="loveYouButton">
                        <div style={{display:"flex"}}>
                            <p class="button-blurb" onClick={handleDelete}>Yes, I'm sure.</p>
                            <p class="button-blurb" onClick={cancelDelete}>Cancel</p>
                        </div>
                        <a class="actual-button" href="#"></a>
                    </div>
                </div>
            </aside>
        </>
    )
}

