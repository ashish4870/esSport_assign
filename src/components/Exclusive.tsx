import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const Exclusive = ({ newsfeed }: { newsfeed: any }) => {
  return (
    <div className='exclusiveWrap'>
      <h4>EDITORS' PICK</h4>
      {newsfeed.map((ele: any, index: any) => {

        return (
          index > 14 ?
            <div className='exclusiveMiddleWrap' key={index}>
              <Link href={ele.elements[2].elements[0].text} className='iconStyle'>
                <div>
                  <Image
                    src={ele.elements[ele.elements.length - 1].attributes.url}
                    alt="Article Picture"
                    height={80}
                    width={80}
                    quality="100"
                    className='imgWrapping'
                    loading='lazy'
                  />
                </div>
              </Link>
              <div className='articleContentWrap'>
                <Link href={ele.elements[2].elements[0].text} className='iconStyle'>
                  <p className='exclusivePara'>{ele.elements[0].elements[0].text}</p>
                </Link>
                <h3>{ele.elements[3].elements[0].cdata}</h3>
              </div>
            </div> : <></>
        )
      })}
      <style jsx>{`
      .exclusiveWrap {
        border-left: 1px solid #0000002e;
      }
      h4 {
        font-style: normal;
        font-weight: 700;
        font-size: 13px;
        text-align: left;
        text-transform: uppercase;
        color: #000000;
        margin-bottom: 10px;
        margin-top: 0px;
        font-family: Lora ,'Roboto';
        margin-left: 31px;
      }
      .exclusivePara {
        font-style: normal;
        font-weight: 600;
        font-size: 12px;
        color: #0a0a0a;
        max-width: 250px;
      }
      .exclusiveMiddleWrap {
        display: flex;
        justify-content: space-between;
        margin-left: 30px;
      }
      h3 {
        font-size: 10px;
        color: #8e8e8e;
        text-transform: uppercase;
        font-weight: 400;
        color: #f75454;
        font-family: Lora ,'Roboto';
      }
      .articleContentWrap {
        margin-left: 15px;
      }
      `}</style>

    </div>
  )
}

export default Exclusive;