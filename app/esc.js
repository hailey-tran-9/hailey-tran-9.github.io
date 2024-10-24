import Link from '../node_modules/next/link'

export function ESC() {
    return <>
        <Link href={'/'} className='ms-auto'>
            <button type="button" className="btn btn-light escButton">
                ESC
            </button>
        </Link>
    </>
}