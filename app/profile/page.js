import profile from './profile.module.css'
import Image from '../../node_modules/next/image'

{/* <div id={profile.bgDecal}></div> */}

export default function Page() {
    return <>
        <div className='d-flex' style={{width:"100vw", height:"100vh"}}>

            <div id={profile.bgDecal}></div>

            <div className='flex-column'>

                <div className='flex-row'><div className={profile.header}></div></div>

                <div className='flex-sm-column flex-md-row'>

                    <div className='row' style={{width:'100%', paddingTop:'2rem', margin:"auto"}}>

                        <div className='col' style={{padding:0}}><div id={profile.profilePic}></div></div>

                        <div className='col' style={{paddingLeft:0}}>
                            <div className='row' style={{margin:0}}>
                                <div className='lalezarRegular d-flex align-items-center' id={profile.name}>
                                    <p style={{margin:0, paddingTop:'5px'}}>Hailey Tran</p>
                                </div>
                            </div>

                            <div className='row' style={{margin:0}}>
                                <div className='lalezarRegular d-flex align-items-center' id={profile.position}>
                                    <p style={{margin:0, paddingTop:'5px'}}>UCB Grad</p>
                                </div>
                            </div>
                        </div>

                    </div>

                    <div className='row justify-content-center mx-auto' style={{width:'100%', marginTop:'2rem'}}>
                        {CreateTextbox('20rem', '15rem', '1.75rem', '1.25em', "Hi! I'm Hailey, a recent UCB graduate who's interested in SWE and game dev. Thanks for visiting my website!", false)}
                    </div>

                    <div className='row justify-content-center mx-auto' style={{width:'100%', marginTop:'1.5rem'}}>
                        {CreateTextbox('20rem', '10rem', '1.75rem', '1.25em', "Bachelor of Arts in Computer Science\nMinor in Data Science", true)}
                    </div>

                </div>

            </div>

        </div>
    </>
}

// export default function Page() {
//     return <>
//         <div className='container' style={{width:"100%", height:"100%"}}>
//             <div id={profile.bgDecal}></div>
//             <div className='row' style={{marginBottom:'2rem'}}>
//                 <div className={profile.header}></div>
//             </div>

//             <div className='row d-md-flex' style={{paddingLeft:'1rem', paddingRight:'1rem'}}>
//                 <div className='col-auto'>
//                     <div id={profile.profilePic}></div>
//                 </div>
//                 <div className='col-auto' style={{margin:'auto', marginTop:0}}>
//                     <div className='row' style={{marginBottom:'0.5rem'}}>
//                         <div className='lalezarRegular d-flex align-items-center' id={profile.name}>
//                             <p style={{margin:0, paddingTop:'5px'}}>Hailey Tran</p>
//                         </div>
//                     </div>
//                     <div className='row'>
//                         <div className='lalezarRegular d-flex align-items-center' id={profile.position}>
//                             <p style={{margin:0, paddingTop:'5px'}}>UCB Grad</p>
//                         </div>
//                     </div>
//                 </div>
//             </div>

//             <div className='row justify-content-center p-2' style={{marginTop:'2rem'}}>
//                 {CreateTextbox('350px', '175px', '25px', '20px', "Hi! I'm Hailey, a recent UCB graduate who's interested in SWE and game dev. Thanks for visiting my website!", false)}
//             </div>
//             <div className='row justify-content-center p-2' style={{marginTop:'1rem'}}>
//                 {CreateTextbox('350px', '140px', '25px', '20px', "Bachelor of Arts in Computer Science\nMinor in Data Science", true)}
//             </div>
//         </div>
//     </>
// }

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