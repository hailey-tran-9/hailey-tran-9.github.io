import projects from './projects.module.css'
import Image from '../../node_modules/next/image'
import {ESC} from '../esc'

export default function Page() {
    return <>
        <div className='d-flex' style={{width:'100vw', height:'100vh'}}>
            <div className='flex-column'>

                <div className='d-flex flex-lg-col flex-row flex-wrap'>
                    <div className={`${projects.header}`}></div>
                    <ESC />
                </div>

                <div className='d-flex flex-lg-col flex-row flex-wrap'>
                    <div>
                        <p>projects</p>
                    </div>

                    <div>
                        <p>Title</p>
                        <p>Role</p>
                        <p>Duration</p>
                    </div>
                </div>

            </div>
        </div>
    </>
}