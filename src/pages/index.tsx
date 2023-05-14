import Titlebar from "@/components/Titlebar";
import Hashtag from "@/components/Hashtag";
import Newsfeed from "@/components/Newsfeed";
import Exclusive from "@/components/Exclusive";
import Footer from "@/components/Footer";
import axios, { all } from 'axios';
import { xml2json } from 'xml-js';
import { useState, useCallback, useEffect } from 'react';

const useMediaQuery = (width: any) => {
    const [targetReached, setTargetReached] = useState(false);

    const updateTarget = useCallback((e: any) => {
        if (e.matches) {
            setTargetReached(true);
        } else {
            setTargetReached(false);
        }
    }, []);

    useEffect(() => {
        const media = window.matchMedia(`(max-width: ${width}px)`);
        media.addListener(updateTarget);

        if (media.matches) {
            setTargetReached(true);
        }

        return () => media.removeListener(updateTarget);
    }, []);

    return targetReached;
};


export default function Home({ allData }: { allData: any }) {
    const isBreakpoint = useMediaQuery(768)
    return (
        <div className='homeWrapper'>
            <div className="titleBarWrap">
                <Titlebar isBreakpoint={isBreakpoint}/>
            </div>
            <div className="middleWrapper">
                {!isBreakpoint ? <div className="hashMainWrap">
                    <Hashtag />
                </div> : <></>}

                <div className="newsMainWrap">
                    <Newsfeed newsfeed={allData} isBreakpoint={isBreakpoint}/>
                </div>
                {!isBreakpoint ? <div>
                    <Exclusive newsfeed={allData} />
                </div> : <></>}

            </div>
            <div className="footerWrap">
                <Footer isBreakpoint={isBreakpoint}/>
            </div>
            <style jsx>{`
    
        
          .titleBarWrap {          
              width: 100%;
          }
          .hashMainWrap {
            padding-right: 15.36px;
            border-right: 1px solid #0000002e;
            padding-left: 40px;
           
          }
          .middleWrapper {
            display: flex;
            justify-content: space-between;
            flex-direction: row;
            margin-top: 20px;
          }
          .newsMainWrap {
            width: 802px;
          }
          .footerWrap {
            margin-top: 50px;
          }
  
  `}</style>
        </div>
    )
}

export async function getServerSideProps() {
    const response = await axios.get(`https://www.essentiallysports.com/feed`);
    const json = xml2json(response.data, { spaces: 2 });
    const jsonData = JSON.parse(json);
    return {
        props: { allData: jsonData.elements[0].elements[0].elements },
    };
}
