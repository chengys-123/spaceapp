import React from 'react'
import Moment from 'react-moment';
import Accordion from 'react-bootstrap/Accordion';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Link from 'next/link';
import Modal from 'react-bootstrap/Modal';
import RocketDetail from '../data/Rocket';

export default function LaunchListComponent({
  launches: {
    rocket: {
      rocket_id,
      rocket_name
    },
    mission_name,
    details,
    launch_success,
    launch_date_utc,
    links: {
      flickr_images,
      mission_patch_small,
      video_link,
      reddit_media,
      wikipedia,
      article_link
    }
  }
}, props) {
  const [modalShow, setModalShow] = React.useState(false);
  const handleClose = () => setModalShow(false);

  return (
    <Accordion>
      <Card>
        <Card.Header>
          <Accordion.Toggle as={Button} variant="link" eventKey="0">
            <img src={mission_patch_small} width="80" height="80"></img> &nbsp;
            Mission Name: {mission_name} 
          </Accordion.Toggle>
        </Card.Header>
        <Accordion.Collapse eventKey="0">
          <Card.Body>
          <div className="lead">Launch Time: <Moment format="dddd, MMMM Do YYYY, h:mm a">{launch_date_utc}</Moment>
            </div>
            <div className="lead">
              Rocket Name: &nbsp;
              <Link href={{ query: { rocket_id } }} replace>
                <a className="lead" onClick={() => setModalShow(true)}>{rocket_name}</a>
              </Link>
            </div>
            <div className="lead">Launch Status: {launch_success
              ? <h3 className="lead text-success">Launched Successfully.</h3>
              : <h3 className="lead text-danger">Launch Failed.</h3>}
            </div>
            <hr></hr>
            <div className="lead">
              {details}
            </div>
            <p></p>
            <div className="lead">
              <div>
                <img src={flickr_images} width="500" height="500"></img>
              </div>
            </div>
            <hr></hr>
            <div className="lead">
              <div>Related Links:</div>
              <div>Youtube: <a href={video_link}>{video_link}</a></div>
              <div>Wikipedia: <a href={wikipedia}>{wikipedia}</a></div>
              <div>Reddit: <a href={reddit_media}>{reddit_media}</a></div>
              <div>Article: <a href={article_link}>{article_link}</a></div>
            </div>
          </Card.Body>
        </Accordion.Collapse>
      </Card>
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
    </Accordion>
  )
}