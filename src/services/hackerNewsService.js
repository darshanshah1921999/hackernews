import axios from 'axios';

export const baseApi = 'https://hacker-news.firebaseio.com/v0/';
export const userDetailUrl = `${baseApi}/user/`;
export const newsStoryUrl = `${baseApi}item/`

//using this function pass category like top, ask, show, job and get it's all story ids
export const getStoryIds = async (category) => {
    const url = getUrl(category);
    const result = await axios.get(url).then((response) => {
        return response.data;
    })
    return result;
}

//helper function to get url from category
const getUrl = (category) => {
    return `${baseApi+category}stories.json`;
}

//using this function pass newsStoryid and get the news story data
export const getNewsStory = async (newsStoryId) => {
    const result = await axios.get(`${newsStoryUrl+newsStoryId}.json`).then((response)=>response.data);
    return result;
}

//using this function pass userId and get user's data
export const getUserDetail = async (userId) => {
    const result = await axios.get(`${userDetailUrl+userId}.json`).then((response)=>response.data);
    return result;
}