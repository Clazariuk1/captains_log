const React = require('react')
const FoodLog = require('../../models/foodLogs')


function Index (props) {
    return(
        <div>
            <h1>Captain's Food Log Index Page</h1>
            <a href="/foodLogs/new">Add a Log Entry Here</a>
            <ul>
                {
                    props.foodLogs.map((foodLog) => {
                        return (
                            <li key={foodLog._id}>
                                <a href={`foodLogs/${foodLog._id}`}>{foodLog.title}</a> <br />
                                Stardate: {foodLog.timestamps}
                            </li>
                        )
                    })
                }
            </ul>
        </div>
    )
}

module.exports = Index
