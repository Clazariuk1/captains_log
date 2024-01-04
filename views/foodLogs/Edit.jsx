const React = require('react')
const FoodLog = require('../../models/foodLogs')
const Default = require('../layout/Default')



function Edit (props) {
    const { name, _id, wouldOrderAgain, description } = props.foodLog
    return(
        <Default type="foodLog">
        <div>
            <h1>{name} Edit Food Log </h1>
            <a href='/foodLogs'>Return to Food Logs Index</a>
            <form action={`/foodLogs/${_id}?_method=PUT`} method="POST">
                name: <input type="text" name="title" defaultValue={name} /><br/>
                description: <input type="textarea" name="entry" defaultValue={description}/><br/>
                WouldOrderAgain: {wouldOrderAgain? <input type="checkbox" name="wouldOrderAgain" defaultChecked />: <input type='checkbox' name="wouldOrderAgain"/>} <br/>
                <input type="submit" value="Update Food Log" />
            </form>
            <a href="/logs">View Captain's Log Entries Here</a>
        </div>
        </Default>
    )
}

module.exports = Edit
