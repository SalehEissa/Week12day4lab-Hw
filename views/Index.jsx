import React, { Component } from 'react'

export default class Index extends Component {
render() {
    const { flights } = this.props;
    return (
    <div>
        <h1>Flight Index</h1>
        <nav>
        <a href="/flights/new">Create A Flight</a>
        </nav>
        <ul>
        {
        flights.map((flight, i) => {
            return (
            <li key={i}>{`${flight.airline} ${flight.flightNo} ${flight.departs}`}</li>
            )
        })
        }
        </ul>
    </div>
    )
}
}
