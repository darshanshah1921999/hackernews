import React, { useState,useEffect} from 'react'
import { storyCategoryTypes } from '../constants/storyCategoryTypes';
import { withRouter } from 'react-router-dom';
import StoryContainer from './StoryContainer';

//Home component which showing search bar,stories category and story container
function Home(props) {
    const [searchText, setSearchText] = useState("");
    const [storyCategory, setStroyCategory] = useState(storyCategoryTypes.TOP);

    //updating state of search bar
    const handleSearchTextChange = (event) => {
        const updatedSearchText = event.target.value;
        setSearchText(updatedSearchText);
    }

    //updating the category of stories
    const handleStoryCategoryChange = (event) => {
        const updatedStoryCategory = event.target.value;
        setStroyCategory(updatedStoryCategory);
        props.history.push(updatedStoryCategory.toLowerCase());
    }

    //loading by default category is top
    useEffect(() => {
        props.history.push(storyCategoryTypes.TOP.toLowerCase());
    }, [])

    return (
        <>
            <input className="search" type="text" placeholder="Search by title" value={searchText} onChange={(event) => handleSearchTextChange(event)} />
            <label className="item"><input type="radio" name={storyCategoryTypes.TOP} value={storyCategoryTypes.TOP} checked={storyCategory === storyCategoryTypes.TOP} onChange={(event) => handleStoryCategoryChange(event)} />{storyCategoryTypes.TOP}</label>
            <label className="item"><input type="radio" name={storyCategoryTypes.ASK} value={storyCategoryTypes.ASK} checked={storyCategory === storyCategoryTypes.ASK} onChange={(event) => handleStoryCategoryChange(event)} />{storyCategoryTypes.ASK}</label>
            <label className="item"><input type="radio" name={storyCategoryTypes.SHOW} value={storyCategoryTypes.SHOW} checked={storyCategory === storyCategoryTypes.SHOW} onChange={(event) => handleStoryCategoryChange(event)} />{storyCategoryTypes.SHOW}</label>
            <label className="item"><input type="radio" name={storyCategoryTypes.JOB} value={storyCategoryTypes.JOB} checked={storyCategory === storyCategoryTypes.JOB} onChange={(event) => handleStoryCategoryChange(event)} />{storyCategoryTypes.JOB}</label>
            <StoryContainer searchText={searchText} {...props}/>
        </>
    )
}
export default withRouter(Home);