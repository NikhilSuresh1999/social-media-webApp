

import { FIND_TWEET_BY_ID_FAILURE, FIND_TWEET_BY_ID_SUCCESS, GET_ALL_TWEETS_FAILURE, GET_ALL_TWEETS_REQUEST, GET_ALL_TWEETS_SUCCESS, GET_USERS_TWEET_FAILURE, GET_USERS_TWEET_SUCCESS, LIKE_TWEET_FAILURE, LIKE_TWEET_SUCCESS, REPLY_TWEET_FAILURE, REPLY_TWEET_SUCCESS, RETWEET_FAILURE, RETWEET_SUCCESS, TWEET_CREATE_FAILURE, TWEET_CREATE_SUCCESS, TWEET_DELETE_FAILURE, TWEET_DELETE_SUCCESS, USER_LIKE_TWEET_FAILURE, USER_LIKE_TWEET_SUCCESS } from "./ActionType"
import {API_BASE_URL ,api } from "../../Config/api";
import axios from 'axios';


export const getAllTwits=()=>async(dispatch)=>{
  try{
    const {data}=await api.get(`/api/twits/`,{responseType: 'json'})
    console.log("get all twits: ",data)
    dispatch({type:GET_ALL_TWEETS_SUCCESS,payload:data})
  }catch(error){

    console.log("catch error - ",error)

    dispatch({type:GET_ALL_TWEETS_FAILURE,payload:error.message})

  }
}

// export const getAllTwits=()=>async(dispatch)=>{
//   try{
//     const {data}=await axios.get(`${API_BASE_URL}/api/twits`,{responseType: 'json'})
//     console.log("get all twits: ",data)

//     if(data.jwt)
//     {
//       localStorage.setItem("jwt",data.jwt)
//     }
//     dispatch({type:GET_ALL_TWEETS_SUCCESS,payload:data})
//   }catch (error){

//     console.log("error",error)
//     dispatch({type:GET_ALL_TWEETS_FAILURE,payload:error.message})


//   }
// }

export const getUsersTweets=(userId)=>async(dispatch)=>{
  try{
    const {data}=await api.get(`/api/twits/user/${userId}`);
    console.log("get user twits: ",data)
    dispatch({type:GET_USERS_TWEET_SUCCESS,payload:data})
  }catch(error){

    console.log("catch error - ",error)

    dispatch({type:GET_USERS_TWEET_FAILURE,payload:error.message})

  }
}


export const findTwitsByLikeContainUser=(userId)=>async(dispatch)=>{
  try{
    const {data}=await api.get(`/api/twits/user/${userId}/likes`);
    console.log("user likes twits: ",data)
    dispatch({type:USER_LIKE_TWEET_SUCCESS,payload:data})
  }catch(error){

    console.log("catch error - ",error)

    dispatch({type:USER_LIKE_TWEET_FAILURE,payload:error.message})

  }
}

export const findTwitsByID=(twitId)=>async(dispatch)=>{
  try{
    const {data}=await api.get(`/api/twits/${twitId}`);
    console.log("find twit by id: ",data)
    dispatch({type:FIND_TWEET_BY_ID_SUCCESS,payload:data})
  }catch(error){

    console.log("catch error - ",error)

    dispatch({type:FIND_TWEET_BY_ID_FAILURE,payload:error.message})

  }
}

export const createTweet=(tweetData)=>async(dispatch)=>{
  try{
    const {data}=await api.post(`/api/twits/create`,tweetData);
    console.log("created tweet",data)
    dispatch({type:TWEET_CREATE_SUCCESS,payload:data})
  }catch(error){

    console.log("catch error - ",error)

    dispatch({type:TWEET_CREATE_FAILURE,payload:error.message})

  }
}


export const createTweetReply=(tweetData)=>async(dispatch)=>{
  try{
    const {data}=await api.post(`/api/twits/reply`,tweetData);
    console.log("reply tweet",data)
    dispatch({type:REPLY_TWEET_SUCCESS,payload:data})
  }catch(error){

    console.log("catch error - ",error)

    dispatch({type:REPLY_TWEET_FAILURE,payload:error.message})

  }
}


export const createReTweet=(twitId)=>async(dispatch)=>{
  try{
    const {data}=await api.put(`/api/twits/${twitId}/retwit`);
    console.log("Retweet tweet",data)
    dispatch({type:RETWEET_SUCCESS,payload:data})
  }catch(error){

    console.log("catch error - ",error)

    dispatch({type:RETWEET_FAILURE,payload:error.message})

  }
}

export const likeTweet=(twitId)=>async(dispatch)=>{
  try{
    const {data}=await api.post(`/api/${twitId}/like`);
    console.log("Like tweet",data)
    dispatch({type:LIKE_TWEET_SUCCESS,payload:data})
  }catch(error){

    console.log("catch error - ",error)

    dispatch({type:LIKE_TWEET_FAILURE,payload:error.message})

  }
}


export const deleteTweet=(twitId)=>async(dispatch)=>{
  try{
    const {data}=await api.post(`/api/tweet/${twitId}`);
    console.log("deleted tweet",data)
    dispatch({type:TWEET_DELETE_SUCCESS,payload:twitId})
  }catch(error){

    console.log("catch error - ",error)

    dispatch({type:TWEET_DELETE_FAILURE,payload:error.message})

  }
}