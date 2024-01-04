const React = require('react')
const Default = require('../layout/Default')


function Edit (props) {
    const { title, _id, shipIsBroken, entry } = props.log
    return(
        <Default type="log">
        <div>
            <h1>{title} Edit Log </h1>
            <a href='/logs'>Return to Captain's Logs Index</a>
            <form action={`/logs/${_id}?_method=PUT`} method="POST">
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
