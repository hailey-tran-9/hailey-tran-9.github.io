import mainMenu from './mainMenu.module.css'
import Image from '../node_modules/next/image'
import Link from '../node_modules/next/link'

export default function Page() {
    return <>
        <div className='container-lg'>
            <div className='row' id={mainMenu.mainButtonGroup}>
                <div className='col-xl-4 d-flex justify-content-center text-center'>
                    <MainMenuButton name='Profile' descrip='More about me' routeSeg='/profile'></MainMenuButton>
                </div>
                <div className='col-xl-4 d-flex justify-content-center text-center'>
                    <MainMenuButton name='Projects' descrip='View my work' routeSeg='/projects'></MainMenuButton>
                </div>
                <div className='col-xl-4 d-flex justify-content-center text-center'>
                    <MainMenuButton name='Skills' descrip="What I've learned" routeSeg='/skills'></MainMenuButton>
                </div>
            </div>
            <div className='row justify-content-center'>
                <div className='fixed-bottom' id={mainMenu.whiteBg} style={{zIndex:0}}></div>
                <div id={mainMenu.pic}>
                    <Image src='/images/desk.png' width={624} height={616} alt="Pixel art of a penguin sitting at a desk"
                    style={{width:'100%', height:'auto'}}></Image>
                </div>
            </div>
        </div>
    </>
}

function MainMenuButton({name, descrip, routeSeg}) {
    return <>
        <Link href={routeSeg} style={{width:'100%'}}>
            <button className={mainMenu.mainButton}>
                <p className={[mainMenu.mainButtonName, 'lalezarRegular'].join(' ')}>{name}</p>
                <p className={[mainMenu.mainButtonDescrip, 'makoRegular'].join(' ')}>{descrip}</p>
            </button>
        </Link>
    </>
}