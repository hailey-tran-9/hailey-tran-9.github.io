import mainMenu from './mainMenu.module.css'
import Image from '../node_modules/next/image'
import Link from '../node_modules/next/link'

export default function Page() {
    return <>
        <div className="d-flex flex-column">
            <div className="d-flex flex-column flex-md-row justify-content-center align-items-center gap-3" id={mainMenu.mainButtonGroup}>
                <MainMenuButton name='Profile' descrip='More about me' routeSeg='/profile'></MainMenuButton>
                <MainMenuButton name='Projects' descrip='View my work' routeSeg='/projects'></MainMenuButton>
                <MainMenuButton name='Skills' descrip="What I've learned" routeSeg='/skills'></MainMenuButton>
            </div>
            <div className="align-self-end" id={mainMenu.whiteBg}></div>
        </div>

    </>
}

function MainMenuButton({name, descrip, routeSeg}) {
    return <>
        <Link href={routeSeg}>
            <button className={mainMenu.mainButton}>
                <p className={`${mainMenu.mainButtonName} lalezarRegular`}>{name}</p>
                <p className={`${mainMenu.mainButtonDescrip} makoRegular`}>{descrip}</p>
            </button>
        </Link>
    </>
}