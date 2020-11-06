import { useState, useEffect } from 'react';
import { STORY_INCREMENT, MAX_STORIES } from './../constants/commonTypes';
//component performing infinite scroll returns count of stories
export default function InfiniteScroll() {
    const [loading, setLoading] = useState(false);
    const [count, setCount] = useState(STORY_INCREMENT);

    //handlescroll when scrooling happen check for scrollbar is at bottom or not
    const handleScroll = () => {
        
        if ((Math.floor(window.innerHeight + document.documentElement.scrollTop) !== document.documentElement.offsetHeight) || loading) {
            return false;
        }
        setLoading(true);
    }

    //set the count when change loading
    useEffect(() => {
        if (!loading) return;
        if (count + STORY_INCREMENT >= MAX_STORIES) {
            setCount(MAX_STORIES);
        }
        else {
            setCount(count + STORY_INCREMENT);
        }
        setLoading(false);
    }, [loading])

    //set eventlistener for scroll
    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [])

    return { count };
}