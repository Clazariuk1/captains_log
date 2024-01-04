const React = require('react')
const Default = require('../layout/Default')
const FoodLog = require('../../models/foodLogs')


function Index (props) {
    return(
        <Default type="foodLog">
        <div>
            <h1>Captain's Food Log Index Page</h1>
            <a href="/foodLogs/new">Add a Log Entry Here</a>
            <ul>
                {
                    props.foodLogs.map((foodLog) => {
                        return (
                            <li key={foodLog._id}>
                                <a href={`foodLogs/${foodLog._id}`}>{foodLog.name}</a> <br />
                                Stardate: {foodLog.createdAt.toString()}
                            </li>
                        )
                    })
                }
            </ul>
            <a href="/logs">View Captain's Log Entries Here</a>
        </div>
        </Default>
    )
}

module.exports = Index
