import React from 'react';
import './App.css';
import EventList from './components/EventList'
import SearchBar from './components/SearchBar'
import Hero from './components/Hero'
import {json} from './data/eventlist'

const locations = json.Items.map(event => ({ text: event.VenueCity, value: event.VenueCity }));
const uniqueLocations = locations.reduce((acc, current) => {
    const x = acc.find(item => item.value === current.value);
    if (!x) {
      return acc.concat([current]);
    } else {
      return acc;
    }
}, []);

class App extends React.Component {
  constructor() {
    super()
    this.state = {events: json.Items}
    this.handleChange = this.handleChange.bind(this)
  }
  handleChange = (e, data) => {
    let updatedEvents = json.Items.filter((el) => data.value.includes(el.VenueCity))
    if (updatedEvents.length) {
      this.setState({events: updatedEvents})
    } else {
      this.setState({events: json.Items})
    }
  }
  render() {
    return (
      <div className="App">
        <Hero />
        <SearchBar locations={uniqueLocations} handleChange={this.handleChange}/>
        <EventList events={this.state.events}/>
      </div>
    );
  }
}

export default App;
