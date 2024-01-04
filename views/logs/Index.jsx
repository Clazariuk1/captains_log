const React = require('react')
const Default = require('../layout/Default')

function Index (props) {
    return(
        <Default type="log">
        <div>
            <h1>Captain's Log Index Page</h1>
            <a href="/logs/new">Add a Log Entry Here</a>
            <ul>
                {
                    props.logs.map((log) => {
                        return (
                            <li key={log._id}>
                                <a href={`logs/${log._id}`}>{log.title}</a> <br />
                                Stardate: {log.createdAt.toString()}
                            </li>
                        )
                    })
                }
            </ul>
            <a href='/foodLogs'>View Food Logs Index</a>
        </div>
        </Default>
    )
}

module.exports = Index
