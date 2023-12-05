import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchData, fetchFavorites, userSelector } from '../../redux/reducers/userReducer';
import NewsCard from '../newscard/NewsCard';
import pageStyle from './home.module.css';
import Carousel from '../Carousel';

const Home = () => {
  const user = useSelector(userSelector);
  const dispatch = useDispatch();
  
  const data = useSelector((state) => state.userReducer.data);
  // const data = [
  //   {
  //     urlToImage:"https://akm-img-a-in.tosshub.com/indiatoday/images/story/202302/khalistan_groups-sixteen_nine.jpg?VersionId=DXE3WIF0xL.Ij.xDJ92OXybVLWdPsUYk",
  //     url:"https://www.hindustantimes.com/videos/news/khalistani-terrorist-paks-go-getter-man-for-anti-india-ops-dies-who-was-lakhbir-singh-rode-101701759411918.html",
  //     title:"Khalistani Terrorist & Pak's Go-getter Man For Anti-India Ops Dies | Who Was Lakhbir Singh Rode",
  //     publishedAt:"Dec 05, 2023 12:29 PM IST",
  //     content:"Khalistani terrorist Lakhbir Singh Rode has reportedly died of a heart attack in Pakistan. The 72-year-old nephew of Jarnail Singh Bhindranwale, had fled to Pakistan after Bhidranwale's death. Rode was the self-styled head of the International Sikh Youth Federation (ISYF), and was allegedly involved in terror activities against India. Rode worked closely with ISI to disrupt peace in Punjab. Watch this video for more details."
  //   },
  //   {
  //     urlToImage:"https://www.hindustantimes.com/ht-img/img/2023/12/05/550x309/Commuters-make-their-way-through-a-flooded-road-af_1701754535275_1701754585697.jpg",
  //     url:"https://www.hindustantimes.com/india-news/cyclone-michaung-live-updates-chennai-rain-tamil-nadu-weather-latest-news-today-december-5-101701734662825.html",
  //     title:"Cyclone Michaung LIVE updates: Chennai schools closed tommorow as storm to make landfall soon",
  //     publishedAt:"Dec 05, 2023 12:40 PM IST",
  //     content:"Cyclone Michaung LIVE updates: It is expected that the storm will make landfall in Andhra Pradesh today, December 5, with heavy rains predicted across the state"
  //   },
  //   {
  //     urlToImage:"https://www.hindustantimes.com/ht-img/img/2023/12/05/550x309/Samajwadi-Party-president-Akhilesh-Yadav-claimed-t_1700765303588_1701759689979.jpg",
  //     url:"https://www.hindustantimes.com/india-news/akhilesh-yadav-has-no-plans-to-attend-india-bloc-meet-says-sp-spokesperson-101701759573608.html",
  //     title:"Akhilesh Yadav has ‘no plans’ to attend INDIA bloc meet, says SP spokesperson",
  //     publishedAt:"Dec 05, 2023 12:41 PM IST",
  //     content:"Samajwadi Party spokesperson Rajendra Chaudhary on Tuesday said party chief Akhilesh Yadav has “no plans” to attend the INDIA bloc meeting which is scheduled for tomorrow. This comes a day after West Bengal chief minister and TMC supremo Mamata Banerjee announced skipping the upcoming meeting in which the member parties are set to chalk out the strategy for the 2024 Lok Sabha elections."
  //   },
  //   {
  //     urlToImage:"https://www.hindustantimes.com/ht-img/img/2023/12/01/550x309/cop280_1701429362034_1701429387794.jpg",
  //     url:"https://www.hindustantimes.com/photos/pm-modi-attends-cop-28-in-dubai-meets-uae-president-mohammed-bin-zayed-un-chief-antonio-guterres-other-leaders-101701428119010.html",
  //     title:"PM Modi attends COP 28 in Dubai, meets UAE President Mohammed bin Zayed, UN chief Antonio Guterres & other leaders",
  //     publishedAt:"Dec 01, 2023 05:34 PM IST",
  //     content:"World leaders pose for a photograph at the COP 28 summit in UAE. Among the notable attendees of the Summit were PM Narendra Modi, President of the UAE and Ruler of Abu Dhabi, Sheikh Mohamed bin Zayed Al Nahyan, UN Secretary General Antonio Gutterus, Uzbekistan President Shavkat Mirziyoyev, Netherlands PM Mark Rutte, Italian Prime Minister Giorgia Meloni and European Union President Ursula von der Leyen.(X/COP 28 UAE)"
  //   },
  //   {
  //     urlToImage:"https://www.hindustantimes.com/ht-img/img/2023/12/05/550x309/Commuters-make-their-way-through-a-flooded-road-af_1701754535275_1701754585697.jpg",
  //     url:"https://www.hindustantimes.com/india-news/cyclone-michaung-live-updates-chennai-rain-tamil-nadu-weather-latest-news-today-december-5-101701734662825.html",
  //     title:"Cyclone Michaung LIVE updates: Chennai schools closed tommorow as storm to make landfall soon",
  //     publishedAt:"Dec 05, 2023 12:40 PM IST",
  //     content:"Cyclone Michaung LIVE updates: It is expected that the storm will make landfall in Andhra Pradesh today, December 5, with heavy rains predicted across the state"
  //   },
  //   {
  //     urlToImage:"https://www.hindustantimes.com/ht-img/img/2023/12/05/550x309/Samajwadi-Party-president-Akhilesh-Yadav-claimed-t_1700765303588_1701759689979.jpg",
  //     url:"https://www.hindustantimes.com/india-news/akhilesh-yadav-has-no-plans-to-attend-india-bloc-meet-says-sp-spokesperson-101701759573608.html",
  //     title:"Akhilesh Yadav has ‘no plans’ to attend INDIA bloc meet, says SP spokesperson",
  //     publishedAt:"Dec 05, 2023 12:41 PM IST",
  //     content:"Samajwadi Party spokesperson Rajendra Chaudhary on Tuesday said party chief Akhilesh Yadav has “no plans” to attend the INDIA bloc meeting which is scheduled for tomorrow. This comes a day after West Bengal chief minister and TMC supremo Mamata Banerjee announced skipping the upcoming meeting in which the member parties are set to chalk out the strategy for the 2024 Lok Sabha elections."
  //   },
  //   {
  //     urlToImage:"https://www.hindustantimes.com/ht-img/img/2023/12/01/550x309/cop280_1701429362034_1701429387794.jpg",
  //     url:"https://www.hindustantimes.com/photos/pm-modi-attends-cop-28-in-dubai-meets-uae-president-mohammed-bin-zayed-un-chief-antonio-guterres-other-leaders-101701428119010.html",
  //     title:"PM Modi attends COP 28 in Dubai, meets UAE President Mohammed bin Zayed, UN chief Antonio Guterres & other leaders",
  //     publishedAt:"Dec 01, 2023 05:34 PM IST",
  //     content:"World leaders pose for a photograph at the COP 28 summit in UAE. Among the notable attendees of the Summit were PM Narendra Modi, President of the UAE and Ruler of Abu Dhabi, Sheikh Mohamed bin Zayed Al Nahyan, UN Secretary General Antonio Gutterus, Uzbekistan President Shavkat Mirziyoyev, Netherlands PM Mark Rutte, Italian Prime Minister Giorgia Meloni and European Union President Ursula von der Leyen.(X/COP 28 UAE)"
  //   },
  //   {
  //     urlToImage:"https://akm-img-a-in.tosshub.com/indiatoday/images/story/202302/khalistan_groups-sixteen_nine.jpg?VersionId=DXE3WIF0xL.Ij.xDJ92OXybVLWdPsUYk",
  //     url:"https://www.hindustantimes.com/videos/news/khalistani-terrorist-paks-go-getter-man-for-anti-india-ops-dies-who-was-lakhbir-singh-rode-101701759411918.html",
  //     title:"Khalistani Terrorist & Pak's Go-getter Man For Anti-India Ops Dies | Who Was Lakhbir Singh Rode",
  //     publishedAt:"Dec 05, 2023 12:29 PM IST",
  //     content:"Khalistani terrorist Lakhbir Singh Rode has reportedly died of a heart attack in Pakistan. The 72-year-old nephew of Jarnail Singh Bhindranwale, had fled to Pakistan after Bhidranwale's death. Rode was the self-styled head of the International Sikh Youth Federation (ISYF), and was allegedly involved in terror activities against India. Rode worked closely with ISI to disrupt peace in Punjab. Watch this video for more details."
  //   },
  // ]
  
  useEffect(() => {
    dispatch(fetchData());
    dispatch(fetchFavorites());
  }, [data])

  return (
    <div>
      <div className={pageStyle.categories}>
        <span> Politics </span>
        <span> Sports </span>
        <span> Education </span>
        <span> Tech </span>
        <span> Politics </span>
        <span> Sports </span>
        <span> Education </span>
        <span> Tech </span>
        <span> Politics </span>
        <span> Sports </span>
        <span> Education </span>
        <span> Tech </span>
        <span> Business </span>
        <span> Entertainment </span>
        <span> Lifestyle </span>
        <span> Research </span>
        <span> Investigations </span>
        <span> Elections </span>
        <span> Terrorism </span>
      </div>
      
      <Carousel data={data}/>
      <div className={pageStyle.container}>{
        data.map((news, index) => 
          (
            <div key={index}>
              {news.urlToImage? <NewsCard news={news} key={index} />:null}
            </div>
          )
        )
      }
      </div>
    </div>
  )
}

export default Home;
