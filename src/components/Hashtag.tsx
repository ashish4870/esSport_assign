import React from 'react'
import Link from 'next/link';

const hashTagList = [
    {
        name: '#TomBrady',
        link: 'https://www.essentiallysports.com/tag/tom-brady/?utm_source=website&utm_medium=internal_links&utm_campaign=hashtags'
    },
    {
        name: '#MichaleJordan',
        link: 'https://www.essentiallysports.com/tag/michael-jordan/?utm_source=website&utm_medium=internal_links&utm_campaign=hashtags'
    },
    {
        name: '#Shaq',
        link: 'https://www.essentiallysports.com/tag/shaquille-oneal/?utm_source=website&utm_medium=internal_links&utm_campaign=hashtags'
    },
    {
        name: '#TigerWoods',
        link: 'https://www.essentiallysports.com/tag/tiger-woods/?utm_source=website&utm_medium=internal_links&utm_campaign=hashtags'
    },
    {
        name: '#MikeTyson',
        link: 'https://www.essentiallysports.com/tag/mike-tyson/?utm_source=website&utm_medium=internal_links&utm_campaign=hashtags'
    },
    {
        name: '#SerenaWilliams',
        link: 'https://www.essentiallysports.com/tag/serena-williams/?utm_source=website&utm_medium=internal_links&utm_campaign=hashtags'
    },
    {
        name: '#MichaelPhelps',
        link: 'https://www.essentiallysports.com/tag/michael-phelps/?utm_source=website&utm_medium=internal_links&utm_campaign=hashtags'
    },
    {
        name: '#StephCurry',
        link: 'https://www.essentiallysports.com/tag/stephen-curry/?utm_source=website&utm_medium=internal_links&utm_campaign=hashtags'
    },
    {
        name: '#LewisHamilton',
        link: 'https://www.essentiallysports.com/tag/lewis-hamilton/?utm_source=website&utm_medium=internal_links&utm_campaign=hashtags'
    },
    {
        name: '#JoeRogan',
        link: 'https://www.essentiallysports.com/tag/joe-rogan/?utm_source=website&utm_medium=internal_links&utm_campaign=hashtags'
    },
    {
        name: '#ArnoldSchwarzenegger',
        link: 'https://www.essentiallysports.com/tag/arnold-schwarzenegger/?utm_source=website&utm_medium=internal_links&utm_campaign=hashtags'
    },
    {
        name: '#FloydMayweather',
        link: 'https://www.essentiallysports.com/tag/floyd-mayweather/?utm_source=website&utm_medium=internal_links&utm_campaign=hashtags'
    },
    {
        name: '#DaleEarnhardtJr',
        link: 'https://www.essentiallysports.com/tag/dale-earnhardt-jr/?utm_source=website&utm_medium=internal_links&utm_campaign=hashtags'
    },
    {
        name: '#AaronJudge',
        link: 'https://www.essentiallysports.com/tag/aaron-judge/?utm_source=website&utm_medium=internal_links&utm_campaign=hashtags'
    },
    {
        name: '#ConorMcGregor',
        link: 'https://www.essentiallysports.com/tag/conor-mcgregor/?utm_source=website&utm_medium=internal_links&utm_campaign=hashtags'
    },
    {
        name: '#KhabibNurmagomedov',
        link: 'https://www.essentiallysports.com/tag/khabib-nurmagomedov/?utm_source=website&utm_medium=internal_links&utm_campaign=hashtags'
    },
    {
        name: '#KyleBusch',
        link: 'https://www.essentiallysports.com/tag/kyle-busch/?utm_source=website&utm_medium=internal_links&utm_campaign=hashtags'
    }
];

const Hashtag = () => {
    return (
        <div>
            <p className='hash_title_wrap'>AMERICA'S FAVORITES</p>
            {hashTagList.map((ele, index) => {
                return (
                    <div className='has_name_wrap' key={index}>
                        <Link href={ele.link} className='linkStyle'>{ele.name}</Link>
                    </div>
                )
            })}
            <style jsx>{`
            .hash_title_wrap {
                margin-top: 0px;
                font-style: normal;
                font-weight: 700;
                font-size: 13px;
                text-align: right;
                text-transform: uppercase;
                margin-bottom: 0px;
                color: #000000;
                font-family: Lora ,'Roboto';
            }
            .has_name_wrap {
                text-align: right;
                margin-top: 10px;
            }
            `}

            </style>
        </div>
    )
}

export default Hashtag