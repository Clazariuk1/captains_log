const React = require('react')

function Show(props) {
    return(
        <div>
            <h1>{props.log.title}</h1>
            <a href='/logs'>Return to Logs Index</a>
            <p>
                {props.log.shipIsBroken? 'The ship is currently Broken': 'The ship is in working order'}
                Captain's Log: {props.log.entry}
            </p>
            <form action={`/logs/${props.log._id}?_method=DELETE`} method="POST">
                <input type="submit" value={`Delete log ${props.log.title}`} />
            </form>
            <div>
                <a href={`/logs/${props.log._id}/edit`}><button>{`Edit log ${props.log.name}`}</button></a>
            </div>
        </div>
    )
}

module.exports = Show
