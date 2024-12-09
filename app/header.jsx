export function Header({ name }) {
    return (
        <>
            <div className="page-header d-flex align-items-center">
                <h1 className="palanquin-dark-semibold">{name}</h1>
            </div>
        </>
    );
}