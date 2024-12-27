import profile from './profile.module.css'
import Image from '../../node_modules/next/image'
import { Navbar } from '../navbar';

export default function Page() {
    return <>
        <div className='d-flex' style={{width:'100vw', height:'100vh'}}>

            <div id={profile.bgPolygonBL}></div>
            <div id={profile.bgPolygonTR}></div>
            <div id={profile.bgPolygonTR2}></div>

            <div className='flex-column' style={{width:'100vw', height:'100vh'}}>

                <Navbar name="Profile" />

                {/* <div className="mainContent">
                    <div className='flex-sm-column flex-md-row' id={profile.content} style={{width:'100vw'}}>

                        <div className='row mx-auto' style={{width:'100%', paddingTop:'2rem'}}>
                            <div className='col col-sm-3 offset-sm-1' style={{padding:0}}>
                                <div id={profile.profilePic}></div>
                            </div>

                            <div className='col flex-sm-column flex-md-row mx-auto' id={profile.textContent}>
                                <div className='flex-row' style={{paddingTop:'1rem', paddingBottom:"0.5rem"}}>
                                    <div className='lalezarRegular d-flex align-items-center' id={profile.name}>
                                        <p style={{margin:0, paddingLeft:'1rem', paddingTop:'5px'}}>Hailey Tran</p>
                                    </div>
                                </div>

                                <div className='flex-row' style={{paddingBottom:0}}>
                                    <div className='lalezarRegular d-flex align-items-center' id={profile.position}>
                                        <p style={{margin:0, paddingLeft:'1rem', paddingTop:'5px'}}>UCB Grad</p>
                                    </div>
                                </div>

                                <div className='flex-row' style={{paddingTop:'1rem', paddingBottom:0}}>
                                    <Textbox 
                                        id={profile.descrip}
                                        description={"Hi! I'm Hailey, a recent UCB graduate who's interested in SWE and game dev. Thanks for visiting my website!"}
                                        isList={false}
                                    />
                                </div>
                                <div className='flex-row' style={{paddingTop:'1rem', paddingBottom:0}}>
                                    <Textbox 
                                        id={profile.degrees}
                                        description={"Bachelor of Arts in Computer Science\nMinor in Data Science"}
                                        isList={true}
                                    />
                                </div>

                            </div>

                        </div>

                    </div>
                </div> */}


                <div className="mainContent">
                    <div className="d-flex flex-row justify-content-center gap-5 mx-auto">
                        {/* <div className="align-self-center" id={profile.pic}></div> */}
                        <Image
                            src="/images/grad.jpg"
                            width={400}
                            height={575}
                            alt="Hailey's graduation picture"
                            className="align-self-center">
                        </Image>
                        <div className="d-flex flex-column gap-2" id={profile.textContent}>
                            <div className="d-flex align-items-center lalezarRegular" id={profile.name}>
                                <p>Hailey Tran</p>
                            </div>
                            <div className="d-flex align-items-center lalezarRegular" id={profile.position}>
                                <p>UCB Grad</p>
                            </div>
                            <div className={`${profile.textboxTest} d-flex align-items-center makoRegular`} style={{height:"20vh"}}>
                                <p>Hi! I'm Hailey, a recent UCB graduate who's interested in SWE and game dev. Thanks for visiting my website!</p>
                            </div>
                            <div className={`${profile.textboxTest} d-flex align-items-center makoRegular`} style={{height:"15vh"}}>
                                <ul>
                                    <li>
                                        Bachelor of Arts in Computer Science
                                    </li>
                                    <li>
                                        Minor in Data Science
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>

            </div>

        </div>
    </>
}

function Textbox({ id, description, isList }) {
    // let shadowStr = ['0px -', offset, ' #EFEFEF, ', offset, ' -', offset, ' #EFEFEF'].join('');
    // console.log("shadowStr: " + shadowStr);
    let inner;
    if (isList) {
        let lines = description.split('\n');
        let listItems = lines.map(ele => <li key={crypto.randomUUID()}>{ele}</li>);
        inner = <ul className='makoRegular' style={{margin:0}}>{listItems}</ul>;
    } else {
        inner = <p className='makoRegular' style={{margin:0}}>{description}</p>
    }

    return <>
        <div className={`${profile.textbox}`} id={id} style={{padding:'2rem'}}>
            {inner}
        </div>
    </>
}