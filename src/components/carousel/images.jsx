import React, { Component } from 'react';
import Button from 'react-bootstrap/Button';
import Carousel from 'react-bootstrap/Carousel';


const images=[
    {
        "source": {
            "id": "bbc-news",
            "name": "BBC News"
        },
        "author": "BBC News",
        "title": "Girl hidden in Germany for years by family prompts inquiry",
        "description": "Prosecutors say the eight-year-old girl was locked away for seven years in her grandparents' house.",
        "url": "http://www.bbc.co.uk/news/world-europe-63555610",
        "urlToImage": "https://ichef.bbci.co.uk/news/1024/branded_news/CE6D/production/_127554825_attendorn.jpg",
        "publishedAt": "2022-11-08T18:07:18.8027729Z",
        "content": "An eight-year-old girl's mother and grandparents are being investigated after German prosecutors say she was locked away for seven years.\r\nShe was finally freed from the house at the end of September… [+2739 chars]"
    },
    {
        "source": {
            "id": "bbc-news",
            "name": "BBC News"
        },
        "author": "BBC News",
        "title": "Leslie Phillips: Carry On and Harry Potter star dies aged 98",
        "description": "The star was well known for the Carry On films and as the voice of the sorting hat in Harry Potter.",
        "url": "http://www.bbc.co.uk/news/entertainment-arts-63557414",
        "urlToImage": "https://ichef.bbci.co.uk/news/1024/branded_news/DCEB/production/_127555565_leslie-index-getty.jpg",
        "publishedAt": "2022-11-08T17:52:23.3174408Z",
        "content": "Actor Leslie Phillips, who was known for appearing in the Carry On films, has died aged 98 after a long illness.\r\nPhillips was also familiar to younger fans as the voice of the Sorting Hat in Harry P… [+3472 chars]"
    },
    {
        "source": {
            "id": "bbc-news",
            "name": "BBC News"
        },
        "author": "BBC News",
        "title": "How rotisserie 'chicken man' became viral sensation",
        "description": "Hundreds gathered to witness a man eat his 40th rotisserie chicken, celebrating his odd achievement.",
        "url": "http://www.bbc.co.uk/news/world-us-canada-63560206",
        "urlToImage": "https://ichef.bbci.co.uk/news/1024/branded_news/6F4F/production/_127559482_p0ddtl2k.jpg",
        "publishedAt": "2022-11-08T17:37:26.3478781Z",
        "content": "Alexander Tominsky ate a rotisserie every day for 40 days, going on to post flyers around Philadelphia to advertise his last feast. \r\nRoughly 500 people gathered to be a part of history, as the onlin… [+57 chars]"
    },
    {
        "source": {
            "id": "bbc-news",
            "name": "BBC News"
        },
        "author": "BBC News",
        "title": "US midterms 2022: The key states to watch on election night",
        "description": "As America prepares to go to the polls, we take you through how the drama might unfold on the night",
        "url": "http://www.bbc.co.uk/news/world-us-canada-63402244",
        "urlToImage": "https://ichef.bbci.co.uk/news/1024/branded_news/F96E/production/_127545836_2a5b7001-c085-450b-9bbf-89255ba3e9b4.jpg",
        "publishedAt": "2022-11-08T17:37:22.8956117Z",
        "content": "Election night in America can mean a long evening watching hundreds of results from all corners of the country pour in. Feeling overwhelmed? Here's how you can focus on the moments that really matter… [+4565 chars]"
    },
    {
        "source": {
            "id": "bbc-news",
            "name": "BBC News"
        },
        "author": "BBC News",
        "title": "Chhawla rape: India shocked as men sentenced to death freed",
        "description": "The Supreme Court cleared three men of gang rape and murder in a case that made headlines in 2012.",
        "url": "http://www.bbc.co.uk/news/world-asia-india-63554474",
        "urlToImage": "https://ichef.bbci.co.uk/news/1024/branded_news/17EF3/production/_127553089_gettyimages-1228827548-594x594.jpg",
        "publishedAt": "2022-11-08T17:07:29.4263359Z",
        "content": "Ten years ago when a 19-year-old Delhi woman was found gang raped and murdered in the fields of the neighbouring state of Haryana, it was described as a \"rarest of rare\" case.\r\nIndians were shocked b… [+6989 chars]"
    },
    {
        "source": {
            "id": "bbc-news",
            "name": "BBC News"
        },
        "author": "BBC News",
        "title": "Powerball: how to play and other questions answered",
        "description": "Winners, if any, will be announced after national results are certified following a delay on Monday.",
        "url": "http://www.bbc.co.uk/news/world-us-canada-63545192",
        "urlToImage": "https://ichef.bbci.co.uk/news/1024/branded_news/14FCD/production/_127556958_gettyimages-1439925197.jpg",
        "publishedAt": "2022-11-08T17:07:25.1294154Z",
        "content": "The draw to claim a record US Powerball jackpot of $2.04bn (£1.7bn) took place on Tuesday morning after being delayed. \r\nThe premier lottery game - which has had no winner in more than three months a… [+5515 chars]"
    },
    {
        "source": {
            "id": "bbc-news",
            "name": "BBC News"
        },
        "author": "BBC News",
        "title": "Rebel Wilson announces birth of child by surrogate",
        "description": "The Australian comic actress has described her daughter as a \"beautiful miracle\".",
        "url": "https://www.bbc.co.uk/news/articles/cxw0zwldjdxo",
        "urlToImage": "https://ichef.bbci.co.uk/news/1024/branded_news/7bb3/live/2eb8b400-5f5c-11ed-864f-9f80ed77c171.jpg",
        "publishedAt": "2022-11-08T13:22:18.6685916Z",
        "content": "The comic actor revealed in June she was in a relationship with female fashion designer Ramona Agruma.\r\nShe said at the time: \"I thought I was searching for a Disney Prince... but maybe what I really… [+1525 chars]"
    },
    {
        "source": {
            "id": "bbc-news",
            "name": "BBC News"
        },
        "author": "BBC Sport",
        "title": "Awarding Qatar the World Cup a mistake - Blatter",
        "description": "Former Fifa president Sepp Blatter says the decision to award the 2022 World Cup to Qatar was a \"mistake\".",
        "url": "http://www.bbc.co.uk/sport/football/63554507",
        "urlToImage": "https://ichef.bbci.co.uk/live-experience/cps/624/cpsprodpb/61DF/production/_127555052_gettyimages-893716012.jpg",
        "publishedAt": "2022-11-08T13:07:23.9342035Z",
        "content": "Sepp Blatter first joined Fifa as technical director in 1975 and was voted president in 1998\r\nFormer Fifa president Sepp Blatter says the decision to award the 2022 World Cup to Qatar was a \"mistake\"… [+1627 chars]"
    },
    {
        "source": {
            "id": "bbc-news",
            "name": "BBC News"
        },
        "author": "BBC News",
        "title": "Trudeau accuses China of 'aggressive' election interference",
        "description": "It follows reports that Canada has identified 11 Beijing-funded candidates at the 2019 elections.",
        "url": "http://www.bbc.co.uk/news/world-us-canada-63551134",
        "urlToImage": "https://ichef.bbci.co.uk/news/1024/branded_news/11305/production/_127550407_gettyimages-1243457204.jpg",
        "publishedAt": "2022-11-08T12:07:22.0281968Z",
        "content": "Canadian Prime Minister Justin Trudeau has accused China of attempting to interfere in the country's elections.\r\nMr Trudeau accused Beijing of playing \"aggressive games\" with democracies and of targe… [+2833 chars]"
    },
    {
        "source": {
            "id": "bbc-news",
            "name": "BBC News"
        },
        "author": "BBC News",
        "title": "Hushpuppi: Notorious Nigerian fraudster jailed for 11 years in US",
        "description": "The FBI says ex-social media star Hushpuppi is one of the word's most high-profile money launderers.",
        "url": "http://www.bbc.co.uk/news/world-africa-63542573",
        "urlToImage": "https://ichef.bbci.co.uk/news/1024/branded_news/9636/production/_127545483_mediaitem127545482.jpg",
        "publishedAt": "2022-11-08T01:22:24.7161562Z",
        "content": "A notorious Instagram influencer from Nigeria has been jailed for more than 11 years in the US for his role in an international fraud syndicate.\r\nHushpuppi, whose real name was Ramon Abbas, flaunted … [+3250 chars]"
    }
]









// export class Images extends Component {

//     render() {
//     let { title, description, urlToImg, url, author, date, source } = this.props;
//         return(
//             <div>
//                 <Carousel>
//                     <Carousel.Item>
//                       <img
//                         className="carousel"
//                         src={urlToImg}
//                         alt="...."
//                       />
//                       <Carousel.Caption>
//                         <h3>First slide label</h3>
//                         <p>{title}</p>
//                         <a href={url} target="_black" className='btn btn-sm btn-primary'>Read more</a>
//                       </Carousel.Caption>
//                     </Carousel.Item>
//                 </Carousel>
//             </div>
//         )


//     }




// } 


export default images;