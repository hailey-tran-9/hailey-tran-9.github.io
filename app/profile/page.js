import profile from './profile.module.css'
import Image from '../../node_modules/next/image'
import { Navbar } from '../navbar'

export default function Page() {
    return <>
        <div className="d-flex flex-column">

            <div className="bgPolygon" id={profile.bgPolygonBL}></div>
            <div className="bgPolygon" id={profile.bgPolygonTR}></div>
            <div className="bgPolygon" id={profile.bgPolygonTR2}></div>

            <Navbar name="Profile" />

            <div className="d-flex flex-column flex-xxl-row flex-fill justify-content-center align-items-center gap-5 py-5">
                <Image
                    src="/images/grad.jpg"
                    width={400}
                    height={575}
                    alt="Hailey's graduation picture"
                    priority={true}
                    className="align-self-center"
                    id={profile.pfp}>
                </Image>

                <div className="d-flex flex-column gap-3">

                    <div className="d-flex flex-column flex-lg-row justify-content-center align-items-center gap-3">
                        <div className="d-flex flex-fill align-items-center lalezarRegular px-5 py-2" id={profile.name}>Hailey Tran</div>
                        <div className="d-flex flex-fill align-items-center lalezarRegular px-5 py-2" id={profile.position}>UCB Grad</div>
                    </div>

                    <div className={`${profile.textbox} d-flex align-items-center makoRegular`}>
                        <p>Hi! I'm Hailey, a recent UCB graduate who's interested in SWE and game dev. Thanks for visiting my website!</p>
                    </div>
                    <div className={`${profile.textbox} d-flex align-items-center makoRegular`}>
                        <ul>
                            <li>Bachelor of Arts in Computer Science</li>
                            <li>Minor in Data Science</li>
                        </ul>
                    </div>

                </div>
            </div>

        </div>
    </>
}