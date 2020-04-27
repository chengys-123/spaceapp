import React from 'react';
import Link from 'next/link';
import Modal from 'react-bootstrap/Modal';
import RocketDetail from '../data/Rocket';

export default function RocketsListComponent({
  rockets: {
    rocket_id,
    rocket_name,
    country,
    flickr_images
  }
}, props) {
  const [modalShow, setModalShow] = React.useState(false);
  const handleClose = () => setModalShow(false);

  return (
    <div>
      <div className="card" >
        <div className="card-content">
          <div className="media">
            <div className="media-left">
              <figure className="image is-96x96">
                <img src={flickr_images} />
              </figure>
            </div>
            <div className="media-content">
              <p className="title is-4"> Rocket: {rocket_name}</p>
              <p className="lead">Country: {country} </p>
            </div>
            <div className="media-right">
              <p className="lead">
                <Link href={{
                  query: { rocket_id }
                }} replace>
                  <a className="button" onClick={() => setModalShow(true)}>Details</a>
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
        show={modalShow}
        onHide={() => setModalShow(false)}
        dialogClassName="showModal">
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            {rocket_name}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <RocketDetail />
        </Modal.Body>
        <Modal.Footer>
          <div className="button is-dark" onClick={handleClose}>
            Back
          </div>
        </Modal.Footer>
      </Modal>
    </div>
  )
}
