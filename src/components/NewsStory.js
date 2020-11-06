import React, { useEffect, useState } from 'react';
import { getNewsStory } from '../services/hackerNewsService';
import { Link } from 'react-router-dom';
import { getDurationFromTime } from '../services/timeConverter';

//component contians each news story
export default function NewsStory(props) {
    const [newsStory, setNewsStory] = useState({})
    const [loading,setLoading] = useState(false);
    useEffect(() => {
        setLoading(true);
        getNewsStory(props.newsStoryId).then(response => {
            setNewsStory(response);
            setLoading(false)
        })
    }, [])

    return (
        <>
            {
                 newsStory && newsStory.title && newsStory.title.toUpperCase().includes(props.searchText.toUpperCase()) ? 
                <>
                    <a href={newsStory.url} target="_blank"><p>{props.count}. {newsStory.title}</p></a>
                    <span className="item">Score: {newsStory.score}</span>
                    <span className="item">By:<Link to={"/user/" + newsStory.by}>  {newsStory.by}</Link></span>
                    <span className="item"> Posted: {getDurationFromTime(newsStory.time)}</span>
                </> : loading && <div>loading...</div>
            }
            
        </>
    )
}
