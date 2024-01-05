const React = require('react')
const FoodLog = require('../../models/foodLogs')
const Default = require('../layout/Default')


function Show(props) {
    return(
        <Default type="foodLog">
        <div id="food">
            <h1 id="food">{props.foodLog.name}</h1>
            <a id="food" href='/foodLogs'>Return to Food Logs Index</a>
            <div>
                <span id="timestamp"> Captain's Food Log Stardate: {props.foodLog.createdAt.toLocaleString()} </span><br/>
                <span id="time-update">Last Food Log Update Performed On: {props.foodLog.updatedAt.toLocaleString()} </span><br/>
                <div id="status"> {props.foodLog.wouldOrderAgain? 'I would order this again': 'I would not order this again'} </div><br/>
                <div id="description">Captain's Food Log: <br/>{props.foodLog.description} </div>
            </div>
            <form action={`/foodLogs/${props.foodLog._id}?_method=DELETE`} method="POST">
                <input type="submit" value={`Delete log ${props.foodLog.name}`} />
            </form>
            <div>
                <a href={`/foodLogs/${props.foodLog._id}/edit`}><button>{`Edit food log ${props.foodLog.name}`}</button></a>
            </div>
            <a href="/logs">View Captain's Log Entries Here</a>
        </div>
        </Default>
    )
}

module.exports = Show
