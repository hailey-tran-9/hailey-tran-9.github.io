import '/node_modules/@popperjs/core/dist/umd/popper.js'
import '../node_modules/bootstrap/dist/css/bootstrap.css'
import './style.css'

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <head>
                <meta charSet="utf-8"></meta>
                <meta name="viewport" content="width=device-width, initial-scale=1"></meta>
                <title>Hailey</title>
                <link rel="preconnect" href="https://fonts.googleapis.com"></link>
                <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true"></link>
                <link href="https://fonts.googleapis.com/css2?family=Lalezar&family=Mako&family=Palanquin+Dark:wght@400;500;600;700&display=swap" rel="stylesheet"></link>
                <link rel="preconnect" href="https://fonts.googleapis.com"></link>
                <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true"></link>
                <link href="https://fonts.googleapis.com/css2?family=Kadwa:wght@400;700&display=swap" rel="stylesheet"></link>
            </head>
            <body className="makoRegular">
                {children}
            </body>
        </html>
    )
}