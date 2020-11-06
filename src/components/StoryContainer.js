import React, { useEffect, useState} from 'react';
import { getStoryIds } from '../services/hackerNewsService';
import NewsStory from './NewsStory';
import InfiniteScroll from './InfiniteScroll';
import {INITIAL_STORIES} from './../constants/commonTypes';

//component contians story container which loads stroy id and pass it to news story component
export default function StoryContainer(props) {
    const {count} = InfiniteScroll();
    const [storyCount,setStoryCount] = useState(count);
    const [storyIds, setStoryIds] = useState([]);
    const [isUnmount,setIsUnmount] = useState(false);

    //called once when document load set top stories
    useEffect(() => {
        setIsUnmount(false);
        let category = props.match.path;
        category = category.slice(1);
        getStoryIds(category).then(stories => {
            if(!isUnmount){
                setStoryIds([...stories]);
            }
        })
        return () => {setIsUnmount(true)};
    }, [])

    //when story category change this hook called and set it stories
    useEffect(() => {
        setIsUnmount(false);
        let category = props.match.path;
        category = category.slice(1);
        getStoryIds(category).then(stories => {
            if(!isUnmount){
                setStoryIds([...stories]);
                setStoryCount(INITIAL_STORIES);
            }
        })
        return () => {setIsUnmount(true)};
    },[props.match.path])

    //when story count is change update the page count
    useEffect(()=>{
        setStoryCount(count);
    },[count])

    //when user serach story at that time this called
    useEffect(()=>{
        if(props.searchText!==""){
            setStoryCount(storyIds.length);
        }
        else{
            setStoryCount(INITIAL_STORIES)
        }
    },[props.searchText])

    return (
        <>
            {storyIds.slice(0,storyCount).map((storyId,index) => (
                <NewsStory key={storyId} newsStoryId={storyId} count={index+1} searchText={props.searchText} totalStories={storyCount}/>)
            )}
                
        </>
    )
}
