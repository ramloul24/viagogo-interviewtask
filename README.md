This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### How this app works? (Part 1)
The javascript object that contains the event data can be found at https://gist.github.com/taddison/ab00ecd1a2703fa661b4f7a9ccf46267.
The website displays a list of events for one artist, Elton John, and shows the user all the important information (Date, Time, Venue, City) that a customer would want to know when deciding on which event to go to.

### How this app works? (Part 2) 
A filter allows the user to filter by location. 
The filter shows a full list of locations. The locations are grabbed from the JS object provided and also takes care of duplicates.
When the user removes all cities from the filter, all events are displayed. 

### Part 3 (Not Implemented)
Why the filter implemented in part 2 did not help the customer experience?
It turned out that, in the given object, all the locations were unique and when filtered, it would only show one event. 
How to improve on it?
An advanced search could be set up. The other options could include sorting by date, by price, setting a range of either or a maximum price. The object contains other information that could be used such as the number of tickets left and the venue capacity can be used to show which events are selling out quickly. These would give the customer more options to better match their wants.

### How I built the app and why?
I kept the JS object as it was. The alternative would be be to import the data in a JSON format. That way, I could have set up some APIs to fetch the required data. But, for the scope of this project, some array manipulation sufficed. I used React because I wanted to use its lifecycle. When the user selects their location, the change in state will cause the components to re-render. This made the app dynamic. There was only a small volume of data to play with, so I strayed away from expensive API calls. I used Semantic UI to make it more appealing. 
