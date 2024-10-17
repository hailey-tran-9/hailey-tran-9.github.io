import profile from './profile.module.css'
import Image from '../../node_modules/next/image'

{/* <div id={profile.bgDecal}></div> */}

export default function Page() {
    return <>
        <div className='container-fluid' style={{height:"100vh"}}>

            <div id={profile.bgDecal}></div>
            <div className='row' style={{marginBottom:'2rem'}}>
                <div className={profile.header}></div>
            </div>

            <div className='row d-flex' style={{padding:'5rem'}}>
                
                <div className='col-md'>
                    <div id={profile.profilePic}></div>
                </div>

                <div className='col-xl-8' style={{margin:'auto', marginTop:0}}>
                    <div className='row' style={{marginBottom:'0.5rem', marginLeft:'3rem', marginRight:'4rem'}}>

                        <div className='col'>
                            <div className='lalezarRegular d-flex align-items-center' id={profile.name}>
                                <p style={{margin:0, marginLeft:"2rem", paddingTop:'5px'}}>Hailey Tran</p>
                            </div>
                        </div>
                        <div className='col'>
                            <div className='lalezarRegular d-flex align-items-center' id={profile.position}>
                                <p style={{margin:0, marginLeft:"2rem", paddingTop:'5px'}}>UCB Grad</p>
                            </div>
                        </div>

                    </div>

                    <div className='row'>
                        <div className='row justify-content-center p-2' style={{marginTop:'2rem'}}>
                            {CreateTextbox('85rem', '17.5rem', '2rem', '2em', "Hi! I'm Hailey, a recent UCB graduate who's interested in SWE and game dev. Thanks for visiting my website!", false)}
                        </div>
                    </div>

                    <div className='row'>
                        <div className='row justify-content-center p-2' style={{marginTop:'1.5rem'}}>
                            {CreateTextbox('85rem', '12.5rem', '2rem', '2em', "Bachelor of Arts in Computer Science\nMinor in Data Science", true)}
                        </div>
                    </div>

                </div>
            </div>
            
        </div>
    </>
}

function CreateTextbox(w, h, offset, fontSize, descrip, isList) {
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
        <div className={[profile.textbox, 'd-flex', 'align-items-center'].join(' ')} 
        style={{width:w, height:h, boxShadow:shadowStr, fontSize:fontSize, padding:'2rem'}}>
            {inner}
        </div>
    </>
}