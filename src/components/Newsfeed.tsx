import React from 'react'
import Image from 'next/image';
import Fire from './Fire';
import Link from 'next/link';

const Newsfeed = ({ newsfeed, isBreakpoint }: { newsfeed: any, isBreakpoint: boolean }) => {

  return (
    <div className='slideWrap'>
      <h2 className='upperWrap'>
        {!isBreakpoint ? <Fire width='50' height='50'/> : <Fire width='150' height='150'/>}
        <span className='newsFeedTitle'>News Feed</span>
      </h2>
      <div className='titleWrap'></div>
      <div className='newsWrapper'>
        {newsfeed.length !== 0 && newsfeed.map((ele: any, index: any) => {
          return (
            index > 9 ?

              <div className='newsFeedWrap' key={index}>
                {!isBreakpoint ? <Link href={ele.elements[2].elements[0].text} className='iconStyle'>
                  <div>
                    <Image
                      src={ele.elements[ele.elements.length - 1].attributes.url}
                      alt="Article Picture"
                      height={230}
                      width={190}
                      loading='lazy'
                    />
                  </div>
                </Link> : <Link href={ele.elements[2].elements[0].text} className='iconStyle'>
                  <div>
                    <Image
                      src={ele.elements[ele.elements.length - 1].attributes.url}
                      alt="Article Picture"
                      height={400}
                      width={700}
                      loading='lazy'
                    />
                  </div>
                </Link>}
                <div className='articleContentWrap'>
                  <div className='sportWrap'>{ele.elements[5].elements[0].cdata}</div>
                  <Link href={ele.elements[2].elements[0].text} className='iconStyle'>
                    <h3 className='articleParaWrap'>{ele.elements[0].elements[0].text}</h3>
                    {!isBreakpoint ? <div className='subPara' dangerouslySetInnerHTML={{ __html: ele.elements[ele.elements.length - 5].elements[0].cdata.split('</p>')[0] }}></div> : <></>}
                  </Link>
                  <div className='paraText'>
                    <p className='authNameWrap'>{ele.elements[3].elements[0].cdata}</p>
                    <p className='dataWrap'>{ele.elements[4].elements[0].text}</p>
                  </div>
                </div>

              </div> : <></>
          )
        })}
      </div>
      <style jsx>{

        `
            .articleContentWrap {
              margin-left:20px;
            }
            .newsWrapper {
              overflow-x: hidden;
              max-height: 570px;
            }
            .newsWrapper::-webkit-scrollbar {
              width: 8px;
          }
          
          .newsWrapper::-webkit-scrollbar-track {
              -webkit-box-shadow: inset 0 0 0px rgba(0,0,0,0.3); 
              border-radius: 10px;
          }
            .dataWrap {
              color: #535353;
              font-style: normal;
              font-weight: 300;
              font-size: 12px;
              line-height: 150%;
              color: #888888;
            }
            .articleParaWrap {              
              margin: 0;
              display: block;
              font-style: normal;
              font-weight: 600;
              font-size: 20px;
              color: #0a0a0a;
              line-height: 150%;
              margin-bottom: 10px;
              max-width: 650px;
              display: -webkit-box;
              -webkit-line-clamp: 3;
              -webkit-box-orient: vertical;
              overflow: hidden;
              text-overflow: ellipsis;
              cursor: pointer;
              margin-right: 50px;
            }
            .newsFeedWrap {
               display: flex;
               justify-content: space-between;
               padding-bottom: 10px;
               margin-bottom: 10px;
               border-bottom: 2px solid #0000002e;
               
            }
            .titleWrap {
              padding-bottom: 20px;
              border-bottom: 5px solid rgb(255, 90, 90);
              margin-bottom:40px;
            }
            .newsFeedTitle {
              font-size: 18px;
              line-height: 24px;
              font-weight: 700;
              font-family: Lora ,'Roboto';
              margin-top: 15px;
            }
            .upperWrap {
              display: flex;
            }
            .sportWrap {
              padding: 0px 8px;
              background: #3a3a3a;
              border-radius: 3px;
              font-style: normal;
              font-weight: 500;
              font-size: 11px;
              line-height: 150%;
              text-transform: uppercase;         
              font-family: Lora ,'Roboto';
              color: white;
              margin-right: 550px;
              text-align: center;
            }
            .subPara {
              font-style: normal;
              font-weight: 300;
              font-size: 11px;
              line-height: 150%;
              color: #898989;
              margin: 0;
              margin-bottom: 10px;
              max-width: 650px;
              display: -webkit-box;
              -webkit-line-clamp: 3;
              -webkit-box-orient: vertical;
              overflow: hidden;
              text-overflow: ellipsis;
              font-family: Lora ,'Roboto';
              margin-right: 50px;
             }
             .paraText {
              display: flex;
              justify-content: space-between;
              margin-right: 30px;
             }
             .authNameWrap{
              color: #f75454;
              cursor: pointer;
              text-transform: uppercase;
              font-weight: 400;
              font-size: 12px;
              line-height: 150%;
              font-family: Lora ,'Roboto';
             }
             @media screen and (max-width: 762px) {
              .newsFeedWrap {
                flex-direction: column;
                padding-bottom: 20px;
                margin-bottom: 10px;
                border-bottom: 3px solid #0000002e;
              }
                .sportWrap {
                  font-size: 25px;
                  margin-top: 15px;
                  margin-bottom: 15px;
                  padding-top: 5px;
                  padding-bottom: 5px;
                }
                .articleParaWrap {              
                  font-size: 35px;
                }
                .authNameWrap{
                  font-size: 20px;
                 }

                 .dataWrap {
                  font-size: 20px;
                 }
                 .newsFeedTitle {
                  font-size: 80px;
                  margin-top: 60px;
                }
             
             }
            
            `
      }</style>
    </div>
  )
}

export default Newsfeed