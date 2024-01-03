const React = require('react')

function Edit (props) {
    const { title, _id, shipIsBroken, entry } = props.log
    return(
        <div>
            <h1>{title} Edit Log </h1>
            <a href='/logs'>Return to Captain's Logs Index</a>
            <form action={`/logs/${_id}?_method=PUT`} method="POST">
                Title: <input type="text" name="title" defaultValue={title} /><br/>
                Entry: <input type="textarea" name="entry" defaultValue={entry}/><br/>
                Is the Ship Broken: {shipIsBroken? <input type="checkbox" name="shipIsBroken" defaultChecked />: <input type='checkbox' name="shipIsBroken"/>} <br/>
                <input type="submit" value="Update Log" />
            </form>
        </div>
    )
}

module.exports = Edit
