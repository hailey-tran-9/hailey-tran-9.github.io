import '../node_modules/bootstrap/dist/css/bootstrap.css'
import './style.css'

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <head>
                <meta charSet="utf-8"></meta>
                <meta name="viewport" content="width=device-width, initial-scale=1"></meta>
                <title>rhythm gamer</title>
                <link rel="preconnect" href="https://fonts.googleapis.com"></link>
                <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true"></link>
                <link href="https://fonts.googleapis.com/css2?family=Lalezar&family=Mako&display=swap" rel="stylesheet"></link>
            </head>
            <body style={{width: "100vw", height: "100vh"}}>
                {children}
            </body>
        </html>
    )
}