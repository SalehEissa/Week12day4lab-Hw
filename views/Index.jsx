const React = require('react');

class Index extends React.Component {
  render() {
    const { flights } = this.props; // Change 'flight' to 'flights' to match the prop name

    return (
      <div>
        <h1>See All The Flights</h1>
        <nav>
          <a href="/flights/new">Create a New Flight</a>
        </nav>
        <ul>
          {flights.map((flight, i) => (
            <li key={i}>
              <p>Airline: {flight.airline}</p>
              <p>Flight #: {flight.flightNo}</p>
              <p>Departure: {flight.departs.toString()}</p>
              <a href={`/flights/${flight._id}`}>Details</a>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

module.exports = Index;
