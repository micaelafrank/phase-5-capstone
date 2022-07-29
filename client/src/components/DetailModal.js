import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

function DetailModal({item, props}) {
        return (
            <Modal
                {...props}
                size="lg"
                aria-labelledby="contained-modal-title-vcenter"
                centered
            >
                <Modal.Header closeButton>
                    <Modal.Title id="contained-modal-title-vcenter">
                        {item.itemname}
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <img src={item.images_url} style={{height:"10em", width:"100%"}} />
                    <h4>Price: ${item.price}</h4>
                    <h4>Size: {item.size}</h4>
                    <p>{item.description}</p>
                </Modal.Body>
                <Modal.Footer>
                    <Button onClick={props.onHide}>Close</Button>
                </Modal.Footer>
            </Modal>
        );
}

    // const [modalShow, setModalShow] = React.useState(false);

    // return (
    //     <>
    //         <Button variant="primary" onClick={() => setModalShow(true)}>
    //             Launch vertically centered modal
    //         </Button>

    //         <MyVerticallyCenteredModal
    //             show={modalShow}
    //             onHide={() => setModalShow(false)}
    //         />
    //     </>
    // );

export default DetailModal;