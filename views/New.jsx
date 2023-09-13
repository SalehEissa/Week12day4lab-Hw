import React, { Component } from 'react'

export default class New extends Component {
render() {
    return (
    <div>
        <h1>
            Add New Flight
        </h1>
        <form action="/flights" method="POST">
            Airline <input type="text" name="airline" /><br />
            Flight Number <input type="number" name="flightNo" /><br />
            Departure <input type="datetime-local" name="departs" /><br />
            <input type="submit" value="Submit New flight" />
        </form>
    </div>
    )
}
}