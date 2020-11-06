import React,{useEffect,useState} from 'react';
import {getUserDetail} from './../services/hackerNewsService';
import {getDateFromTime} from './../services/timeConverter';

//component for see user deatails
export default function UserDetails(props) {
    const [userDetail,setUserDetail] = useState({});

    //set the user Data
    useEffect(() => {
        console.log(props);
        const userId = props.match.params.id;
        if(userId){
            getUserDetail(userId).then(user => {
                setUserDetail(user);
            })
        }
    }, [])

    return (
        <>
            {
                userDetail &&  userDetail.id ?
                <div>
                    <h2>User Profile</h2>
                    <div>User: {userDetail.id}</div>
                    <div>Created: {getDateFromTime(userDetail.created)}</div>
                    <div>Karma: {userDetail.karma}</div>
                </div>: <div>Loading...</div>
            }
        </>
    )   
}
