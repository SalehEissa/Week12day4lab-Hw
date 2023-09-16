const React = require('react');

class New extends React.Component {
  render() {
    const date = new Date();
    const futureDate = date.getDate() + 365;
    date.setDate(futureDate);
    const defaultValue = date.toISOString().slice(0, 16);

    return (
      <div>
        <h1>Create new flight</h1>
        <form action="/flights" method="POST">
          <label htmlFor="airline">Airline:</label>
          <input type="text" name="airline" id="airline" placeholder="American Southwest United" /><br />

          <label htmlFor="flightNo">Flight Number:</label>
          <input type="number" name="flightNo" id="flightNo" min={10} max={9999} /><br />

          <label htmlFor="departs">Depart Date:</label>
          <input type="datetime-local" name="departs" id="departs" defaultValue={defaultValue} /><br />

          <label htmlFor="airport">Airport:</label>
          <select name="airport" id="airport">
            <option value="AUS">AUS</option>
            <option value="DAL">DAL</option>
            <option value="LAX">LAX</option>
            <option value="SAN">SAN</option>
            <option value="SEA">SEA</option>
          </select>

          <input type="submit" value="Create Flight" />
        </form>
      </div>
    );
  }
}

module.exports = New;
