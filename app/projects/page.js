import projects from './projects.module.css'
import Image from '../../node_modules/next/image'
import {ESC} from '../esc'

export default function Page() {
    return <>
        <div className='d-flex' style={{width:'100vw', height:'100vh'}}>
            <div className='flex-column' style={{width:'100vw', height:'100vh'}}>

                <div className='d-flex flex-lg-col flex-row flex-wrap'>
                    <div className={`${projects.header}`}></div>
                    <ESC />
                </div>

                <div className='d-flex justify-content-between' style={{margin:'5rem', marginLeft:0}}>
                    
                    {GenerateProjTab('[ME][TA]L')}
                    
                    <p>filter</p>
                    
                    <div>
                        {GenerateProjInfo('[ME][TA]L', 'Programmer', '2 months', 'descrip')}
                    </div>
                    
                </div>

            </div>
        </div>
    </>
}

function GenerateProjTab(proj) {
    return <>
        <div id={`${proj}` + '-tab'}>
            <div className={`${projects.tab}` + ' makoRegular align-items-center'}>
                <p style={{paddingLeft:'3rem', paddingTop:'0.75rem', paddingBottom:'auto'}}>{proj}</p>
                <div className={projects.tabStripe}></div>
            </div>
        </div>
    </>
}

function GenerateProjInfo(proj, role, duration, description) {
    return <>
        <div id={`${proj}` + '-info'}>
            <div className={`${projects.title}` + ' lalezarRegular align-items-center'}>
                <p style={{paddingLeft:'3rem', paddingTop:'0.75rem', paddingBottom:'auto'}}>{proj}</p>
            </div>
            <div className={`${projects.roleDur}` + ' lalezarRegular align-items-center'}>
                <div className='d-flex'>
                    <p className='flex-grow-1' style={{paddingLeft:'3rem', paddingTop:'0.75rem', paddingBottom:'auto'}}>Role: {role}</p>
                    <p style={{paddingLeft:'3rem', paddingRight:'3rem', paddingTop:'0.75rem', paddingBottom:'auto'}}>Duration: {duration}</p>
                </div>
            </div>
            <div className={projects.descrip}>
                <p style={{padding:'3rem'}}>{description}</p>
            </div>
        </div>
    </>
}