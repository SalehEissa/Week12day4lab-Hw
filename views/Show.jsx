const React = require('react');

class Show extends React.Component {
  render() {
    const flight = this.props.flight;

    const date = new Date();
    const futureDate = date.getDate() + 365;
    date.setDate(futureDate);
    const defaultValue = date.toLocaleDateString('en-CA');

    return (
      <div>
        <h1>Flight Information</h1>
        <h2>Airline: {flight.airline}</h2>
        <h2>Airport: {flight.airport}</h2>
        <h2>Flight #: {flight.flightNo}</h2>
        <h2>Departure: {flight.departs.toString()}</h2>

        <h2>Destinations:</h2>
        <ul>
          {flight.destinations.map((destination, i) => (
            <li key={i}>
              Arrival: {destination.arrival}, Airport: {destination.airport}
            </li>
          ))}
        </ul>

        <form action={`/flights/${this.props.flight._id}/addDestination?_method=PUT`} method="POST">
          <label htmlFor="airport">Airport:</label>
          <select name="airport" id="airport">
            <option value="AUS">AUS</option>
            <option value="DAL">DAL</option>
            <option value="LAX">LAX</option>
            <option value="SAN">SAN</option>
            <option value="SEA">SEA</option>
          </select>
          <br />
          <label htmlFor="arrival">Arrival:</label>
          <input type="datetime-local" name="arrival" id="arrival" defaultValue={defaultValue} />
          <input type="submit" value="Add Destination" />
        </form>

        <a href="/flights">Go back to main</a>
      </div>
    );
  }
}

module.exports = Show;
