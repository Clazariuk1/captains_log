const React = require('react')

class DefaultLayout extends React.Component {
    render() {
        return (
            <html>
                <head>
                    <link rel="stylesheet" href="/css/app.css" />
                </head>
                <body>
                    <h1>{this.props.title}</h1>
                    {this.props.children}
                </body>
            </html>
        )
    }
}

module.exports = DefaultLayout