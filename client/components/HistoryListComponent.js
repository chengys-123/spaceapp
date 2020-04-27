import React from 'react'
import Moment from 'react-moment';
import Accordion from 'react-bootstrap/Accordion'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'

export default function HistoryListComponent({
  histories: { title, event_date_utc, details, links: { reddit, article, wikipedia } }
}) {

  return (
    <Accordion>
      <Card>
        <Card.Header>
          <Accordion.Toggle as={Button} variant="link" eventKey="0">
            Event: {title} &nbsp; (<Moment format="dddd, MMMM Do YYYY, h:mm a">{event_date_utc}</Moment>)
          </Accordion.Toggle>
        </Card.Header>
        <Accordion.Collapse eventKey="0">
          <Card.Body>
            <div className="lead">
              {details} 
            </div>
            <p></p>
            <div className="lead">
              <div>Read More:</div>
              <div>Wikipedia: <a href={wikipedia}>{wikipedia}</a></div> 
              <div>Article: <a href={article}>{article}</a></div>
              <div>Reddit: <a href={reddit}>{reddit}</a></div>
            </div>
          </Card.Body>
        </Accordion.Collapse>
      </Card>
    </Accordion>
  )
}