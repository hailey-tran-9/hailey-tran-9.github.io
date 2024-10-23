import Link from '../node_modules/next/link'

export function ESC() {
    return <>
        <Link href={'/'} className='ms-auto'>
            <button type="button" className="btn btn-light"
            style={{width:'10rem', height:'5rem', 
                    margin:'2rem', fontSize:'2em'}}>
                ESC
            </button>
        </Link>
    </>
}