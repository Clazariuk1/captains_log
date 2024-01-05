const React = require('react')
const Log = require('../../models/logs')
const Default = require('../layout/Default')


function Show(props) {
    return(
        <Default type="log">
        <div id="show">
            <h1>{props.log.title}</h1>
            <a href='/logs'>Return to Logs Index</a>
            <div>
                <span id="timestamp">"Stardate: {props.log.createdAt.toLocaleString()} </span><br/>
                <span id="time-update">Last Log Update Performed On: {props.log.updatedAt.toLocaleString()} </span><br/>
                <div id="status">{props.log.shipIsBroken? 'The ship is currently Broken': 'The ship is in working order'} </div><br/>
                <div id="description">Captain's Log: <br/>{props.log.entry}</div>
            </div>
            <form action={`/logs/${props.log._id}?_method=DELETE`} method="POST">
                <input type="submit" value={`Delete log '${props.log.title}'`} />
            </form>
            <div>
                <a href={`/logs/${props.log._id}/edit`}><button>{`Edit log '${props.log.title}'`}</button></a>
            </div>
            <a href='/foodLogs'>View Food Logs Index</a>
        </div>
        </Default>
    )
}

module.exports = Show
