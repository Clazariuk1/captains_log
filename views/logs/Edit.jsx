const React = require('react')
const Default = require('../layout/Default')


function Edit (props) {
    const { date, title, _id, shipIsBroken, entry } = props.log
    return(
        <Default type="log">
        <div id="edit">
            <h1>{title}</h1> <br/>
            <h2>Edit Log? </h2> <br/>
            <a href='/logs'>Return to Captain's Logs Index</a>
            <form action={`/logs/${_id}?_method=PUT`} method="POST">
                Date: <input type="datetime-local" name="date" defaultValue={date}/><br/>
                Title: <input type="text" name="title" defaultValue={title} /><br/>
                Entry: <input type="textarea" name="entry" defaultValue={entry}/><br/>
                Is the Ship Broken: {shipIsBroken? <input type="checkbox" name="shipIsBroken" defaultChecked />: <input type='checkbox' name="shipIsBroken"/>} <br/>
                <input type="submit" value="Update Log" />
            </form>
            <a href='/foodLogs'>View Food Logs Index</a>
        </div>
        </Default>
    )
}

module.exports = Edit
