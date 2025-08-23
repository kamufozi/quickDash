import { useEffect, useState } from 'react'
import { FaRegNewspaper } from "react-icons/fa6";
import { FaArrowRight } from "react-icons/fa";
import { ImSpinner6 } from "react-icons/im";
import { BsBoxArrowUpRight } from "react-icons/bs";
export default function News() {
    const [news, setNews] = useState(null);
    const [isLoading, setIsLoading] = useState(true)
    const API_KEY=import.meta.env.VITE_NEWS_API_TOKEN;
    useEffect(
        () => {
            setIsLoading(true)
            const api = `https://api.thenewsapi.com/v1/news/top?api_token=${API_KEY}&locale=us&limit=3`
            fetch(api)
                .then(res => res.json())
                .then(info => {
                    setNews(info.data)
                    console.log(info.data)
                    setIsLoading(false)
                })
        }, []
    )
    const Loading = () => (
        <div>
            <ImSpinner6 className="animate-spin text-4xl" />
        </div>
    )
    function firstLetterToUpperCase(text){
        let firstL= text[0].toUpperCase()
        let lastPart = text.slice(1)
        return `${firstL}${lastPart}`
    }
    function timeAgo(published){
        const diff= Date.now() - new Date(published).getTime();
        const seconds = Math.floor(diff/1000)
        const minutes = Math.floor(seconds/60)
        const hours = Math.floor(minutes/60)
        const days= Math.floor(hours/24)
        if (seconds < 60) return `${seconds} seconds ago`;
        if (minutes < 60) return `${minutes} minutes ago`;
        if (hours < 24) return `${hours} hours ago`;
        return `${days} days ago`;
    }

    const newsCards = news?.map(item => {
        return (
            <a href={item.url} target="_blank" className='rounded-xl w-[400px] border-2 p-5'>
                <div className='flex justify-between'>
                    <p className='text-2xl'> 
                        {firstLetterToUpperCase(item.categories[0])}
                    </p>
                    <p className='flex gap-2 text-sm '>
                        {timeAgo(item.published_at)}
                        {/* {item.published_a} */}
                        <BsBoxArrowUpRight />
                    </p>
                </div>
                <h3 className='text-xl'>{item.title}</h3>
                <p className='text-sm text-gray-500 mt-4'>{item.description}</p>

            </a>
        )
    })
    return (
        <div className='w-[450px] mt-10 ml-10 p-5 border-2 border-y-gray-400 border-x-gray-100 rounded-2xl'>
            <p className='flex gap-2'><FaRegNewspaper />News Feed</p>
            {isLoading ? <Loading /> :
                <div className='flex flex-col p-3 gap-5'>
                    {newsCards}
                </div>}
            <p className='flex justify-center items-center gap-1'>View more news <FaArrowRight /></p>
        </div>
    )
}
