const React = require('react')
const FoodLog = require('../../models/foodLogs')
const Default = require('../layout/Default')


function New (props) {
    return(
        <Default type="foodLog">
        <div id="food">
            <h1>New Food Logs</h1>
            <a href='/foodLogs'>Return to Food Logs Index</a>
            <form action="/foodLogs" method="POST">
                Name: <input type="text" name="name" /> <br />
                Description: <input type="textarea" name="description" /> <br />
                WouldOrderAgain: <input type="checkbox" name="wouldOrderAgain" defaultChecked /><br />
                <input type="submit" value="Submit New Food Log" />
            </form>
            <a href="/logs">View Captain's Log Entries Here</a>
        </div>
        </Default>
    )
}

module.exports = New
