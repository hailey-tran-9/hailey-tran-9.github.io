import profile from './profile.module.css'
import Image from '../../node_modules/next/image'

export default function Page() {
    return <>
        <div id={profile.bgDecal}></div>
        <div className={profile.header}></div>
        <div className='container' id={profile.content}>
            <div className='row'>
                <div className='col'>

                    <div className='row'>
                        <div className='col'>
                            <div id={profile.profilePic}></div>
                        </div>
                        <div className='col'>
                            <p>2 headers will be here</p>
                        </div>
                    </div>

                    <div className='row text-center p-2' style={{marginTop:'2rem'}}>
                        <p>descrip</p>
                    </div>
                    <div className='row text-center p-2'>
                        <p>degrees</p>
                    </div>
                    
                </div>
            </div>
        </div>
    </>
}