import Link from '../node_modules/next/link'

function Header({ name }) {
    return (
        <>
            <div className="page-header d-flex align-items-center me-auto">
                <h1 className="palanquin-dark-semibold">{name}</h1>
            </div>
        </>
    );
}

function ESC() {
    return <>
        <Link href={'/'}>
            <button
                type="button"
                className="btn btn-light escButton palanquin-dark-semibold">
                    ESC
            </button>
        </Link>
    </>
}

export function Navbar({ name }) {
    return (
        <>
            <div className="navbar">
                <div className="d-inline-flex flex-column flex-sm-row" style={{width: "100vw"}}>
                    <Header name={name} />
                    <ESC />
                </div>
            </div>
        </>
    );
}