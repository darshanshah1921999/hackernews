//using this  function pass time and get string time in ago format
export const getDurationFromTime = (time) => {
    const storyDate = new Date(time*1000);
    const currentDate = new Date()
    const totalSecond = (currentDate - storyDate) / 1000;
    const remaingYears = Math.floor(totalSecond/3600/24/30/365);
    const remaingMonths = Math.floor(totalSecond/3600/24/30);
    const remaingDays = Math.floor(totalSecond / 3600/24);
    const remaingHours = Math.floor(totalSecond / 3600);
    const remaingMins = Math.floor(totalSecond / 60);
    const remaingSecond = Math.floor(totalSecond);
    if(remaingYears){
        return `${remaingYears} years ago`;
    }
    else if(remaingMonths){
        return `${remaingMonths} months ago`;
    }
    else if(remaingDays){
        return `${remaingDays} days ago`;
    }
    else if(remaingHours){
        return `${remaingHours} hours ago`;
    }
    else if(remaingMins){
        return `${remaingMins} mins ago`;
    }
    else{
        return `${remaingSecond} seconds ago`;
    }
}

//using this function pass time and get date in Month date, year format-ex:November 6, 2020
export const getDateFromTime = (time) => {
    const date = new Date(time*1000);
    const months = [ "January", "February", "March", "April", "May", "June","July", "August", "September", "October", "November", "December" ];
    return `${months[date.getMonth()]} ${date.getDate()}, ${date.getFullYear()}`
}