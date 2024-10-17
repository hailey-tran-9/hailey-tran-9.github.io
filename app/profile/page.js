import profile from './profile.module.css'
import Image from '../../node_modules/next/image'

{/* <div id={profile.bgDecal}></div> */}

export default function Page() {
    return <>
        <div className='d-flex' style={{width:'100vw', height:'100vh'}}>

            <div id={profile.bgDecal}></div>

            <div className='flex-column'>

                <div className='flex-row'><div className={profile.header}></div></div>

                <div className='flex-sm-column flex-md-row' style={{width:'100vw'}}>

                    <div className='row mx-auto' style={{width:'100%', paddingTop:'2rem'}}>
                        <div className='col col-xl-3 offset-xl-1' style={{padding:0}}>
                            <div id={profile.profilePic}></div>
                        </div>

                        {/* style={{margin:0, marginBottom:'1rem'}} */}

                        {/* <div className='col col-xl-6 mx-auto' style={{paddingLeft:0}}> */}
                        <div className='col flex-sm-column flex-xl-row mx-auto' style={{padding:0}}>
                            <div className='flex-row' style={{padding:'1rem', paddingBottom:0}}>
                                <div className='lalezarRegular d-flex align-items-center' id={profile.name}>
                                    <p style={{margin:0, paddingLeft:'1rem', paddingTop:'5px'}}>Hailey Tran</p>
                                </div>
                            </div>

                            <div className='flex-row' style={{padding:'1rem', paddingBottom:0}}>
                                <div className='lalezarRegular d-flex align-items-center' id={profile.position}>
                                    <p style={{margin:0, paddingLeft:'1rem', paddingTop:'5px'}}>UCB Grad</p>
                                </div>
                            </div>

                            <div className='flex-row' style={{padding:'1rem', paddingTop:'2rem', paddingBottom:0}}>
                                {CreateTextbox(profile.descrip, '1.75rem', "Hi! I'm Hailey, a recent UCB graduate who's interested in SWE and game dev. Thanks for visiting my website!", false)}
                            </div>
                            <div className='flex-row' style={{padding:'1rem', paddingBottom:0}}>
                                {CreateTextbox(profile.degrees, '1.75rem', "Bachelor of Arts in Computer Science\nMinor in Data Science", true)}
                            </div>

                        </div>

                    </div>

                    {/* <div className='row justify-content-center mx-auto' style={{width:'100%', marginTop:'2rem'}}>
                        {CreateTextbox(profile.descrip, '1.75rem', "Hi! I'm Hailey, a recent UCB graduate who's interested in SWE and game dev. Thanks for visiting my website!", false)}
                    </div>

                    <div className='row justify-content-center mx-auto' style={{width:'100%', marginTop:'1.5rem'}}>
                        {CreateTextbox(profile.degrees, '1.75rem', "Bachelor of Arts in Computer Science\nMinor in Data Science", true)}
                    </div> */}

                </div>

            </div>

        </div>
    </>
}

function CreateTextbox(id, offset, descrip, isList) {
    let shadowStr = ['0px -', offset, ' #EFEFEF, ', offset, ' -', offset, ' #EFEFEF'].join('');
    // console.log("shadowStr: " + shadowStr);
    let inner;
    if (isList) {
        let lines = descrip.split('\n');
        let listItems = lines.map(ele => <li key={crypto.randomUUID()}>{ele}</li>);
        inner = <ul className='makoRegular' style={{margin:0}}>{listItems}</ul>;
    } else {
        inner = <p className='makoRegular' style={{margin:0}}>{descrip}</p>
    }

    return <>
        <div className={[profile.textbox, 'd-flex', 'align-items-center'].join(' ')} id={id}
        style={{boxShadow:shadowStr, padding:'2rem'}}>
            {inner}
        </div>
    </>
}