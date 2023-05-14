import React from 'react'
import Head from 'next/head'
import Image from 'next/image'
import { FaFacebook } from 'react-icons/fa';
import { AiOutlineTwitter, AiFillYoutube, AiFillLinkedin } from 'react-icons/ai';
import { SiGooglepodcasts } from 'react-icons/si';
import Link from 'next/link';

const Titlebar = ({ isBreakpoint }: { isBreakpoint: boolean }) => {
    return (
        <div className='main_title_wrap'>
            <Head>
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" />
                <link href="https://fonts.googleapis.com/css2?family=Lora&family=Roboto:wght@600&display=swap" rel="stylesheet" />
            </Head>
            {!isBreakpoint ? <div className='home_wrap'>
                <Link href='https://www.essentiallysports.com/' className='linkStyle'>Home</Link>
            </div> : <></>}
            {!isBreakpoint ?
                <div>
                    <Link href='https://www.essentiallysports.com/' className='linkStyle'>
                        <Image
                            src='https://image-cdn.essentiallysports.com/wp-content/uploads/es_horizontal-1.png'
                            alt="Picture of the sports"
                            height={41}
                            width={206}
                        />
                    </Link>
                </div> :
                <div>
                    <Link href='https://www.essentiallysports.com/' className='linkStyleM'>
                        <Image
                            src='https://image-cdn.essentiallysports.com/wp-content/uploads/es_horizontal-1.png'
                            alt="Picture of the sports"
                            height={90}
                            width={350}
                        />
                    </Link>
                </div>}
            {!isBreakpoint ? <div className='iconsWrap'>
                <div className='iconWrap'>
                    <Link href='https://www.essentiallysports.com/' className='iconStyle'><FaFacebook /></Link>
                </div>
                <div className='iconWrap'>
                    <Link href='https://www.essentiallysports.com/' className='iconStyle'><AiOutlineTwitter /></Link>

                </div>
                <div className='iconWrap'>
                    <Link href='https://www.essentiallysports.com/' className='iconStyle'> <AiFillYoutube /></Link>

                </div>
                <div className='iconWrap'>
                    <Link href='https://www.essentiallysports.com/' className='iconStyle'><AiFillLinkedin /></Link>

                </div>
                <div className='iconWrap'>
                    <Link href='https://www.essentiallysports.com/' className='iconStyle'><SiGooglepodcasts /></Link>

                </div>
            </div> : <></>}
            <style jsx>
                {`
            .main_title_wrap {
                display: flex;
                justify-content: space-between;
                padding: 14px 64px 14px 64px;
            }
            .home_wrap {
                font-style: normal;
                font-weight: 300;
                font-size: 14px;
                line-height: 17px;
                letter-spacing: 0.02em;
                color: #000000; 
                font-family: Lora ,'Roboto';
                margin-top: 10px;
                
            }
            .iconsWrap {
                display: flex;
                justify-content: space-between;
                margin-top: 10px;
            }
            .iconWrap {
                margin-right: 16px;
                color: rgb(65, 69, 77);
                font-size: 18px;
            }
            @media screen and (max-width: 762px) {

            }
            `}

            </style>
        </div>
    )
}

export default Titlebar