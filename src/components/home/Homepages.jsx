import React, { Component } from 'react'
import NewsItem from './NewsItem.jsx'
export class Homepages extends Component {
  
  articles= [
    {
    "source": {
    "id": null,
    "name": "The Guardian"
    },
    "author": "Fiona Harvey, Damian Carrington",
    "title": "World is on ‘highway to climate hell’, UN chief warns at Cop27 summit - The Guardian",
    "description": "António Guterres tells leaders ‘global climate fight will be won or lost in this crucial decade – on our watch’",
    "url": "https://www.theguardian.com/environment/2022/nov/07/cop27-climate-summit-un-secretary-general-antonio-guterres",
    "urlToImage": "https://i.guim.co.uk/img/media/5978dda94a4eada0ac9332ad2e624a1aa76e3793/2_59_1879_1128/master/1879.jpg?width=1200&height=630&quality=85&auto=format&fit=crop&overlay-align=bottom%2Cleft&overlay-width=100p&overlay-base64=L2ltZy9zdGF0aWMvb3ZlcmxheXMvdGctZGVmYXVsdC5wbmc&enable=upscale&s=83efdd4f596970c5af6bbc88936e66e2",
    "publishedAt": "2022-11-07T16:12:00Z",
    "content": "Humanity is on a highway to climate hell, the UN secretary general has warned, saying the fight for a liveable planet will be won or lost in this decade.\r\nAntónio Guterres told world leaders at the o… [+4447 chars]"
    },
    {
    "source": {
    "id": "reuters",
    "name": "Reuters"
    },
    "author": null,
    "title": "Ukraine says Russian troops loot, occupy Kherson homes as battle looms - Reuters",
    "description": "Ukraine accused Russia on Monday of looting empty homes in the southern city of Kherson and occupying them with troops in civilian clothes to prepare for street fighting in what both sides predict will be one of the war's most important battles.",
    "url": "https://www.reuters.com/world/europe/us-urges-ukraine-be-open-talks-with-russia-washington-post-2022-11-06/",
    "urlToImage": "https://www.reuters.com/resizer/PSs3AJcLfk-kCoE7YyW9c7piuMI=/1200x628/smart/filters:quality(80)/cloudfront-us-east-2.images.arcpublishing.com/reuters/57QXWO6NLRL3ZEOFEOSAPWEUHY.jpg",
    "publishedAt": "2022-11-07T15:41:00Z",
    "content": "KYIV, Nov 7 (Reuters) - Ukraine accused Russia on Monday of looting empty homes in the southern city of Kherson and occupying them with troops in civilian clothes to prepare for street fighting in wh… [+5569 chars]"
    },
    {
    "source": {
    "id": "ars-technica",
    "name": "Ars Technica"
    },
    "author": "Jon Brodkin",
    "title": "Musk-led Twitter laid off some employees by mistake, asks them to come back - Ars Technica",
    "description": "Dozens of canned workers asked back after Twitter realizes they're still needed.",
    "url": "https://arstechnica.com/tech-policy/2022/11/musk-led-twitter-laid-off-some-employees-by-mistake-asks-them-to-come-back/",
    "urlToImage": "https://cdn.arstechnica.net/wp-content/uploads/2021/03/getty-oops-760x380.jpg",
    "publishedAt": "2022-11-07T15:29:42Z",
    "content": "222 with 124 posters participating\r\nAfter layoffs targeting half the company, the Elon Musk-led Twitter is reportedly asking dozens of employees to come back.\r\n\"Some of those who are being asked to r… [+2728 chars]"
    },
   {
   "source": {
    "id": "polygon",
    "name": "Polygon"
    },
    "author": "Nicole Carpenter",
    "title": "Pokémon Scarlet and Violet leaks spoil new evolutions, forms, and story - Polygon",
    "description": "Pokémon Scarlet and Pokémon Violet are slated for release on Nov. 18, and the leaks have started to trickle out. Leakers posted Fuecoco’s starter evolution online, as well as new Pokémon and story details.",
    "url": "https://www.polygon.com/pokemon/23444624/pokemon-scarlet-violet-leaks-fuecoco-starter-evolution-spoiler",
    "urlToImage": "https://cdn.vox-cdn.com/thumbor/ESEw-eoPhfdZ2rtNAesQfAmy1RE=/0x205:1920x1210/fit-in/1200x630/cdn.vox-cdn.com/uploads/chorus_asset/file/24002105/PokemonSV_featureart2_C_RGB.jpg",
    "publishedAt": "2022-11-07T15:05:00Z",
    "content": "Pokémon Scarlet and Pokémon Violet are just under two weeks away from their release date, and the leaks have started in earnest. Leakers have published images of the game presumably from an early cop… [+2670 chars]"
    },
   {
   "source": {
    "id": null,
    "name": "The Guardian"
    },
    "author": "Guardian staff reporter",
    "title": "‘Blood moon’ total lunar eclipse to arrive on Tuesday - The Guardian",
    "description": "Total eclipse to be visible in North America, Asia and the Pacific, but Africa, Middle East and Europe will have to wait until 2025",
    "url": "https://www.theguardian.com/science/2022/nov/07/total-lunar-eclipse-blood-moon-tuesday",
    "urlToImage": "https://i.guim.co.uk/img/media/ca0543aaafa49a1ae90eb630490f67d85acd4d4c/0_200_6000_3599/master/6000.jpg?width=1200&height=630&quality=85&auto=format&fit=crop&overlay-align=bottom%2Cleft&overlay-width=100p&overlay-base64=L2ltZy9zdGF0aWMvb3ZlcmxheXMvdGctZGVmYXVsdC5wbmc&enable=upscale&s=9d85ea64a1e904fb8414b2378ba498fa",
    "publishedAt": "2022-11-07T14:44:00Z",
    "content": "The moon is set to pull off a disappearing act on Tuesday, and those who miss it will have to wait three years for another chance to see something like it again.\r\nA total lunar eclipse will be visibl… [+1163 chars]"
    },
   {
   "source": {
    "id": null,
    "name": "CNBC"
    },
    "author": "Stefan Sykes",
    "title": "Here are the states voting on marijuana legalization on Election Day - CNBC",
    "description": "Voters in a handful of states are set to decide on ballot proposals that could legalize recreational marijuana.",
    "url": "https://www.cnbc.com/2022/11/07/recreational-marijuana-legalization-is-on-the-ballot-in-these-states.html",
    "urlToImage": "https://image.cnbcfm.com/api/v1/image/106861693-1617129919040-gettyimages-1218861134-bb140295_2020041471148516.jpeg?v=1667832067&w=1920&h=1080",
    "publishedAt": "2022-11-07T14:41:07Z",
    "content": "A recreational marijuana smoker indulges in smoking weed on April 14, 2020 in the Bushwick section of the Brooklyn borough of New York City.\r\nVoters in a handful of states including four that traditi… [+6087 chars]"
    },
   {
    "source": {
    "id": null,
    "name": "YouTube"
    },
    "author": null,
    "title": "Final Poll Reveals Growing Voter Enthusiasm - NBC News",
    "description": "On election eve, NBC News’ Steve Kornacki breaks down the final poll numbers and previews what Americans can expect in the country’s closest races.» Subscrib...",
    "url": "https://www.youtube.com/watch?v=FFGY8wzRc3I",
    "urlToImage": "https://i.ytimg.com/vi/FFGY8wzRc3I/maxresdefault.jpg",
    "publishedAt": "2022-11-07T14:35:01Z",
    "content": null
    },
   {
   "source": {
    "id": "cnn",
    "name": "CNN"
    },
    "author": "Melanie Zanona, Kristin Wilson",
    "title": "Exclusive: Kevin McCarthy previews Republicans' plans for the majority -- starting at the border - CNN",
    "description": "House GOP leader Kevin McCarthy is vowing to secure the border, cut back on government spending and launch rigorous investigations into the Biden administration if Republicans win the House on Tuesday, reflecting a mix of priorities as McCarthy will be forced…",
    "url": "https://www.cnn.com/2022/11/07/politics/kevin-mccarthy-interview-border-security/index.html",
    "urlToImage": "https://media.cnn.com/api/v1/images/stellar/prod/221107003817-01-kevin-mccarthy-interview-cnnphotos.jpg?c=16x9&q=w_800,c_fill",
    "publishedAt": "2022-11-07T14:28:00Z",
    "content": "House GOP leader Kevin McCarthy is vowing to secure the border, cut back on government spending and launch rigorous investigations into the Biden administration if Republicans win the House on Tuesda… [+7716 chars]"
    },
   {
   "source": {
    "id": null,
    "name": "Page Six"
    },
    "author": "Caroline Blair",
    "title": "Rob Kardashian all smiles in rare photo shared by Kim Kardashian - Page Six",
    "description": "The former Arthur George designer famously preferred to keep his life out of the spotlight and rarely makes appearances on his famous family’s social media.",
    "url": "https://pagesix.com/2022/11/07/rob-kardashian-smiles-in-rare-photo-shared-by-kim-kardashian/",
    "urlToImage": "https://pagesix.com/wp-content/uploads/sites/3/2022/11/rob-kim-kardashian-89.jpg?quality=75&strip=all&w=1200",
    "publishedAt": "2022-11-07T14:06:00Z",
    "content": "Rob Kardashian looked happy as a clam in a rare photo Kim Kardashian posted to Instagram celebrating their mom Kris Jenner’s birthday.\r\nThe former Arthur George sock designer smiled for a selfie alon… [+1695 chars]"
    },
   {
   "source": {
    "id": null,
    "name": "YouTube"
    },
    "author": null,
    "title": "Aaron Carter's Exes Hilary Duff, Melanie Martin React to His Death - Entertainment Tonight",
    "description": null,
    "url": "https://www.youtube.com/supported_browsers?next_url=https:%2F%2Fwww.youtube.com%2Fwatch%3Fv%3D_Qh3cnMWCCQ",
    "urlToImage": null,
    "publishedAt": "2022-11-07T14:00:31Z",
    "content": "Your browser isnt supported anymore. Update it to get the best YouTube experience and our latest features. Learn more\r\nRemind me later"
    },
   {
   "source": {
    "id": "the-washington-post",
    "name": "The Washington Post"
    },
    "author": "Jenna C. Lester, MD",
    "title": "How do I get rid of blackheads? Should I squeeze them? - The Washington Post",
    "description": "No, you shouldn’t squeeze blackheads with your fingers. Try these affordable treatments from the drugstore instead.",
    "url": "https://www.washingtonpost.com/wellness/2022/11/07/get-rid-blackheads-treatments-acne/",
    "urlToImage": "https://www.washingtonpost.com/wp-apps/imrs.php?src=https://arc-anglerfish-washpost-prod-washpost.s3.amazonaws.com/public/5XCRGQ7ODBEA5H5M5XVTWFY4B4.gif&w=1440",
    "publishedAt": "2022-11-07T13:58:00Z",
    "content": "Comment on this story\r\nJenna C. Lester is a dermatologist and the director of the Skin of Color Program at the University of California at San Francisco.\r\nQ: I have blackheads on my nose, chin and ch… [+5488 chars]"
    },
   {
   "source": {
    "id": null,
    "name": "The Guardian"
    },
    "author": "Guardian staff reporter",
    "title": "Putin ally Yevgeny Prigozhin admits interfering in US elections - The Guardian",
    "description": "Russian businessman and founder of Wagner group, says interfering will continue as midterms loom",
    "url": "https://www.theguardian.com/world/2022/nov/07/putin-ally-yevgeny-prigozhin-admits-interfering-in-us-elections",
    "urlToImage": "https://i.guim.co.uk/img/media/18054854a890d2c907a7da3a0afefd86d376cfa3/0_155_4191_2515/master/4191.jpg?width=1200&height=630&quality=85&auto=format&fit=crop&overlay-align=bottom%2Cleft&overlay-width=100p&overlay-base64=L2ltZy9zdGF0aWMvb3ZlcmxheXMvdGctZGVmYXVsdC5wbmc&enable=upscale&s=52a44b08d08a7406397d6d114363366e",
    "publishedAt": "2022-11-07T13:56:00Z",
    "content": "The influential Russian businessman Yevgeny Prigozhin, who is linked to President Vladimir Putin and has faced sanctions from Washington and European countries, admitted on Monday to interfering in U… [+1679 chars]"
    },
   {
   "source": {
    "id": null,
    "name": "YouTube"
    },
    "author": null,
    "title": "Donald Trump Speech LIVE | Biden Vs Trump | US Midterm Elections 2022 LIVE | Trump Rally Live News - CNN-News18",
    "description": "Donald Trump Speech LIVE | Trump Campaigns For Senator Marco Rubio | US Midterm Elections 2022 LIVEFormer US President Donald Trump holds a rally ahead of th...",
    "url": "https://www.youtube.com/watch?v=qsAIFdoHnRo",
    "urlToImage": "https://i.ytimg.com/vi/qsAIFdoHnRo/maxresdefault_live.jpg",
    "publishedAt": "2022-11-07T13:34:34Z",
    "content": null
    },
   {
   "source": {
    "id": "fox-news",
    "name": "Fox News"
    },
    "author": "Ryan Gaydos",
    "title": "Packers' Aaron Rodgers takes subtle jab at Lions after loss - Fox News",
    "description": "Aaron Rodgers had three interceptions in the Green Bay Packers' 15-6 loss to the Detroit Lions and still had shade for his NFC North rival.",
    "url": "https://www.foxnews.com/sports/packers-aaron-rodgers-takes-subtle-jab-lions-loss",
    "urlToImage": "https://static.foxnews.com/foxnews.com/content/uploads/2022/11/Aaron-Rodgers13.jpg",
    "publishedAt": "2022-11-07T13:08:50Z",
    "content": "Aaron Rodgers struggled mightily against the Detroit Lions in the Green Bay Packers 15-6 loss on Sunday, but he still took the time to offer a subtle jab against the NFC North rival.\r\nRodgers was 23-… [+2106 chars]"
    },
   {
   "source": {
    "id": null,
    "name": "YouTube"
    },
    "author": null,
    "title": "Facebook's Meta to announce major layoffs: WSJ - Reuters",
    "description": "Meta Platforms is planning to begin large-scale layoffs this week that will affect thousands of employees, the Wall Street Journal reported on Sunday citing ...",
    "url": "https://www.youtube.com/watch?v=fgZ8HCoIU9E",
    "urlToImage": "https://i.ytimg.com/vi/fgZ8HCoIU9E/maxresdefault.jpg?sqp=-oaymwEmCIAKENAF8quKqQMa8AEB-AH-CYAC0AWKAgwIABABGFMgYihlMA8=&rs=AOn4CLBJZmTfS65Kw7iMZJXZXKfTrlOqZg",
    "publishedAt": "2022-11-07T13:00:42Z",
    "content": null
    },
   {
   "source": {
    "id": null,
    "name": "CNBC"
    },
    "author": "Karen Gilchrist",
    "title": "Lab-grown blood given to humans in world-first trial aimed at combatting rare disorders - CNBC",
    "description": "Blood grown in a laboratory has been transfused into humans for the first time in a landmark clinical trial.",
    "url": "https://www.cnbc.com/2022/11/07/lab-grown-blood-transfused-to-people-in-world-first-clinical-trial.html",
    "urlToImage": "https://image.cnbcfm.com/api/v1/image/107146992-1667819443838-gettyimages-1230668527-25817643.jpeg?v=1667824755&w=1920&h=1080",
    "publishedAt": "2022-11-07T12:39:15Z",
    "content": "Blood grown in a laboratory has been transfused into humans for the first time in a landmark clinical trial.\r\nLONDON Blood grown in a laboratory has been transfused into humans for the first time in … [+3479 chars]"
    },
   {
   "source": {
    "id": null,
    "name": "Orlando Sentinel"
    },
    "author": "Richard Tribou",
    "title": "Subtropical Storm Nicole forms, could approach Florida near hurricane strength - Orlando Sentinel",
    "description": "Subtropical Storm Nicole formed Monday morning in the Atlantic Ocean with a projected path that could bring it to Florida’s east coast by Wednesday night close to hurricane strength, according to the National Hurricane Center.",
    "url": "https://www.orlandosentinel.com/weather/hurricane/os-ne-subtropical-storm-nicole-forms-threatens-florida-monday-20221107-3ixa55mkbja3hgb34dg6gfyawa-story.html",
    "urlToImage": "https://www.orlandosentinel.com/resizer/FtblwPw7vaBdSNL55_11MVHyv8g=/1200x630/filters:format(jpg):quality(70)/cloudfront-us-east-1.images.arcpublishing.com/tronc/4GKLXKEFJ5EQJNM4MZ3S3JHS4M.jpg",
    "publishedAt": "2022-11-07T12:28:14Z",
    "content": "Subtropical Storm Nicole formed Monday morning in the Atlantic Ocean with a projected path that could bring it to Floridas east coast by Wednesday night near hurricane strength, according to the Nati… [+4289 chars]"
    },
   {
   "source": {
    "id": null,
    "name": "DawgNation"
    },
    "author": "Connor Riley",
    "title": "Georgia football winners and losers following statement win over Tennessee - DawgNation",
    "description": "",
    "url": "https://www.DawgNation.com/football/good-day-uga/georgia-football-tennessee-winners-loser/MRUFVE2RWFFAFEYWZ64JBYZCEU/",
    "urlToImage": "https://www.dawgnation.com/resizer/pJoTbWsjRFdfee6V1iZ95chAVUg=/135x655:3083x2620/1280x673/cloudfront-us-east-1.images.arcpublishing.com/ajc/YJPZVYPZEZF3MHVUPMHXSS3U3M.JPG",
    "publishedAt": "2022-11-07T12:22:23Z",
    "content": "Connor Riley, DawgNation Staff\r\n@Kconnorriley\r\nPosted 5 hours ago\r\nWelcome to Good Day, UGA, your one-stop shop for Georgia football news and takes. Check us out every weekday morning for everything … [+3219 chars]"
    },
   {
   "source": {
    "id": null,
    "name": "SamMobile"
    },
    "author": "SamMobile",
    "title": "Galaxy Z Flip 3, Galaxy Z Fold 3 getting November 2022 update in the US - SamMobile - Samsung news",
    "description": "Earlier today, Samsung released the November 2022 security update to the Galaxy Z Flip 4 and the Galaxy Z Fold ...",
    "url": "https://www.sammobile.com/news/galaxy-z-flip-3-fold-3-november-2022-update-usa-unlocked/",
    "urlToImage": "https://www.sammobile.com/wp-content/uploads/2021/08/Galaxy-Z-Fold-3-review-36-720x404.jpg",
    "publishedAt": "2022-11-07T12:17:00Z",
    "content": "Earlier today, Samsung released the November 2022 security update to the Galaxy Z Flip 4 and the Galaxy Z Fold 4. Now, the South Korean firm has released its newest security update to its third-gener… [+1108 chars]"
    },
   {
   "source": {
    "id": "wired",
    "name": "Wired"
    },
    "author": "Will Knight",
    "title": "Elon Musk Is Overloaded - WIRED",
    "description": "Twitter’s new CEO also leads Tesla, SpaceX, and startups working on tunnel digging and brain implants. His social media project will make it harder to juggle them all.",
    "url": "https://www.wired.com/story/twitter-elon-musk-is-overloaded/",
    "urlToImage": "https://media.wired.com/photos/6365775e6776a0176c76e4d7/191:100/w_1280,c_limit/Elon-Musk-Has-Alot-On-His-Plate-Business-1238366977.jpg",
    "publishedAt": "2022-11-07T12:00:00Z",
    "content": "Operating in China could get more difficult for Musk if the countrys leaders dislike how he operates Twitter. Government news sources there have complained that the platform labels its staff on the p… [+2803 chars]"
    }
    ]
  constructor(){
    super();
    this.state={
      articles : this.articles,
      loading : false
    }

  }


  render() {
    return (
      <div className='container my-3'>
        <h4 className='tag'>Trending news</h4>
        <div className='row'>
          {this.state.articles.map((element)=>{
              return <div className="col-md-4" key={element.url} >
              <NewsItem title={element.title} description={element.description} imageUrl={element.urlToImage} newsUrl={element.url}/>  
            </div>  
          })}
                     
        </div>
      </div>

     
    )
  }
}

export default Homepages
