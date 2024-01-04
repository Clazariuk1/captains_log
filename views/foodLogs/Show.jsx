const React = require('react')
const FoodLog = require('../../models/foodLogs')

function Show(props) {
    return(
        <div>
            <h1>{props.foodLog.name}</h1>
            <a href='/foodLogs'>Return to Food Logs Index</a>
            <p>
                <div>
                Captain's Food Log Stardate: {props.foodLog.createdAt.toString()} </div><br/>
                Last Food Log Update Performed On: {props.foodLog.updatedAt.toString()} <br/>
                {props.foodLog.wouldOrderAgain? 'I would order this again': 'I would not order this again'} <br/>
                Captain's Food Log: <br/>{props.foodLog.description}
            </p>
            <form action={`/foodLogs/${props.foodLog._id}?_method=DELETE`} method="POST">
                <input type="submit" value={`Delete log ${props.foodLog.name}`} />
            </form>
            <div>
                <a href={`/foodLogs/${props.foodLog._id}/edit`}><button>{`Edit food log ${props.foodLog.title}`}</button></a>
            </div>
        </div>
    )
}

module.exports = Show
