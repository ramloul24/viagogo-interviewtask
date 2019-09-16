import React from 'react';
import { Grid, Card, Image, Button } from 'semantic-ui-react'

const EventList = (props) => {
    return(
        <Grid celled centered>
            {props.events && props.events.map(event =>
            <Card style={{marginTop: 50, width: 290, height: 330}}>
                <Image src='https://img.vggcdn.net/img/cat/4508/1/1.jpg' wrapped ui={false} />    
                <Card.Header>{event.EventName}</Card.Header>
                <Card.Meta>
                    <span className='date'>{event.Date}</span>
                </Card.Meta>
                <Card.Content>
                    <Card.Description>
                        {event.VenueName}
                    </Card.Description>
                    <Card.Description>
                        {event.VenueCity}
                    </Card.Description>
                    <Card.Description>
                        {event.Time}
                    </Card.Description>
                </Card.Content>
                <Button primary style={{width:200}}>Find Tickets</Button>
            </Card>
            )}
        </Grid>
    )
}
export default EventList;
