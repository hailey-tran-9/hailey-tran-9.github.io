import skills from './skills.module.css'
import Image from '../../node_modules/next/image'
import { Navbar } from '../navbar';

export default function Page() {
    return <>
        <div className='container-lg'>
            <Navbar name="Skills" />
            <p>skills o.o</p>
        </div>
    </>
}