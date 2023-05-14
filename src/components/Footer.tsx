import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const lists = [{
  name: 'All',
  link: 'https://www.essentiallysports.com/'
},
{
  name: 'Boxing',
  link: 'https://www.essentiallysports.com/category/boxing/'
},
{
  name: 'ESports',
  link: 'https://www.essentiallysports.com/category/esports/'
},
{
  name: 'Formula One',
  link: 'https://www.essentiallysports.com/category/f1/'
},
{
  name: 'Golf',
  link: 'https://www.essentiallysports.com/category/golf/'
},
{
  name: 'NASCAR',
  link: 'https://www.essentiallysports.com/category/nascar/'
}
];

const connectWithus = [
  {
    name: 'Twitter',
    link: 'https://twitter.com/es_sportsnews/'
  },
  {
    name: 'Youtube',
    link: 'https://www.youtube.com/channel/UCEj2bvKodN2-rM1nB64OBeA'
  },
  {
    name: 'Facebook',
    link: 'https://facebook.com/essentiallysports'
  },
  {
    name: 'Email',
    link: 'hr@essentiallysports.com'
  },
  {
    name: 'Linekdin',
    link: 'https://www.linkedin.com/company/essentially-sports'
  }];

const general = [
  {
    name: 'Know about us',
    link: 'https://www.essentiallysports.com/about-us/'
  },
  {
    name: 'Authors',
    link: 'https://www.essentiallysports.com/authors/'
  },
  {
    name: 'Editorial Team',
    link: 'https://www.essentiallysports.com/editorial-team/'
  },
  {
    name: 'Behind the scenes at ES',
    link: 'https://www.essentiallysports.com/category/behind-the-scenes-at-essentiallysports/'
  },
  {
    name: 'Contact Us',
    link: 'https://www.essentiallysports.com/contact-us/'
  },
  {
    name: 'FAQs',
    link: 'https://www.essentiallysports.com/frequently-asked-questions/'
  }]

const legal = [
  {
    name: 'Privacy Policy',
    link: 'https://www.essentiallysports.com/privacy-policy/'
  },
  {
    name: 'Ethics Policy',
    link: 'https://www.essentiallysports.com/ethics-policy/'
  },
  {
    name: 'Fact Checking Policy',
    link: 'https://www.essentiallysports.com/fact-checking-policy/'
  },
  {
    name: 'Corrections Policy',
    link: 'https://www.essentiallysports.com/corrections-policy/'
  },
  {
    name: 'Cookies Policy',
    link: 'https://www.essentiallysports.com/cookies-policy/'
  },
  {
    name: 'GDPR Compilance',
    link: 'https://www.essentiallysports.com/gdpr-statement/'
  },
  {
    name: 'Terms of Use',
    link: 'https://www.essentiallysports.com/terms-of-use/'
  },
  {
    name: 'Editorial Guidelines',
    link: 'https://www.essentiallysports.com/editorial-guidelines/'
  },
  {
    name: 'Ownershp and Funding Information',
    link: 'https://www.essentiallysports.com/ownership-and-funding-information/'
  }];

const Footer = ({isBreakpoint}:{isBreakpoint: boolean}) => {
  return (
    <div className='mainFooterWrap'>
      <h2>The World of ES</h2>
      <div className='listWrap'>
        {lists.map((ele, index) => {
          return (
            <div key={index}>
              <Link href={ele.link} className='linkItems'>{ele.name}</Link>
            </div>
          )
        })}
      </div>
      {!isBreakpoint ?       <div className='imgWrapper'>
        <Image
          src='https://image-cdn.essentiallysports.com/wp-content/uploads/es_horizontal_white_logo_noblank.png'
          alt="Picture of the sports"
          height={41}
          width={206}
        />
      </div> :       <div className='imgWrapper'>
        <Image
          src='https://image-cdn.essentiallysports.com/wp-content/uploads/es_horizontal_white_logo_noblank.png'
          alt="Picture of the sports"
          height={60}
          width={400}
        />
      </div>}
      <div className='bottomWrapper'>
        <div className='bannerImgWrap'>
          <Image
            src='https://image-cdn.essentiallysports.com/wp-content/uploads/footer-poster-2.png'
            alt="Picture of the sports"
            height={301}
            width={575}
            className='imgWrap'
          />
        </div>
        <div>
          <h3>More from ES</h3>
          <div>
            <p><Link href='https://www.youtube.com/channel/UCEj2bvKodN2-rM1nB64OBeA/videos' className='linkText'>Exclusives</Link></p>
            <p>            <Link href='https://www.youtube.com/channel/UCEj2bvKodN2-rM1nB64OBeA/videos' className='linkText'>Stories</Link></p>
          </div>
          <h3>Connect With Us</h3>
          <div>
            {connectWithus.map((ele, index) => {
              return (
                <div key={index} className='itemWrapIt'>
                  <Link href={ele.link} className='linkText'>{ele.name}</Link>
                </div>
              )
            })}
          </div>
        </div>
        <div>
          <h3>General</h3>
          <div>
            {general.map((ele, index) => {
              return (
                <div key={index} className='itemWrapIt'>
                  <Link href={ele.link} className='linkText'>{ele.name}</Link>
                </div>
              )
            })}
          </div>
        </div>
        <div>
          <h3>Legal</h3>
          <div>   {legal.map((ele, index) => {
            return (
              <div key={index} className='itemWrapIt'>
                <Link href={ele.link} className='linkText'>{ele.name}</Link>
              </div>
            )
          })}</div>
        </div>
      </div>
      <div className='textWrap'>Full Spectrum Services LLP © 2022 | All Rights Reserved</div>
      <style jsx>
        {`
          .mainFooterWrap {
            background-color: black;
            padding: 20px;
          }
          h2 {
            font-style: normal;
            font-weight: 700;
            font-size: 20px;
            align-items: center;
            letter-spacing: 0.02em;
            color: #FFFFFF;
          }
          .listWrap {
            display: flex;
            justify-content: space-between;
            margin-right: 500px;
          }
          .imgWrapper {
            margin-top: 50px;
            margin-bottom: 20px;
            border-top: 3px solid rgb(70, 70, 70);
            padding-top: 50px;
          }
          .bottomWrapper {
            display: flex;
            justify-content: space-between;
            border-bottom:  3px solid rgb(70, 70, 70);
            padding-bottom: 50px;
          }

          .textWrap {
            color: white;
            margin-top: 50px;
            margin-bottom: 20px;
            font-family: Lora ,'Roboto';
          }

          h3 {
            color: white;
            font-size: 13px;
            margin-top: 0;
            white-space: nowrap;

          }
          .textPara {
            color: #B4B6BA;
            font-size: 12px;
            width: 120px;

          }

          .itemWrapIt {
            padding-top: 5px;
            padding-bottom: 5px;
          }
          @media screen and (max-width: 762px) {
            .listWrap {
              display: block;
              padding-top: 5px;
              padding-bottom: 5px;
              
            }
            .bottomWrapper {
              display: block;
            }
            .mainFooterWrap {
              background-color: black;
              padding: 20px;
              width: 800px;
            }
            h3 {
              font-size: 30px;
              margin-top: 20px;
            }
            h2 {
              font-size: 60px;
            }
            .textWrap {
              color: white;
              font-size: 25px;
            }
          }

          `}
      </style>

    </div>
  )
}

export default Footer