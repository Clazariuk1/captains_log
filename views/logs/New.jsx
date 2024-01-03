const React = require('react')

function New (props) {
    return(
        <div>
            <h1>New Logs</h1>
            <a href='/logs'>Return to Logs Index</a>
            <form action="/logs" method="POST">
                Title: <input type="text" name="title" /> <br />
                Entry: <input type="textarea" name="entry" /> <br />
                shipIsBroken: <input type="checkbox" name="shipIsBroken" defaultChecked /><br />
                <input type="submit" value="Submit New Log" />
            </form>
        </div>
    )
}

module.exports = New
