import { useEffect, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { listMediaData, listPostData } from "../redux/action/postAction.tsx";
import { startLoading, stopLoading } from "@/redux/slice/loaderSlice";


export const FormatDate = (timestamp) => {
    const now = new Date();
    const diff = now - timestamp;
  
    const minute = 60 * 1000;
    const hour = minute * 60;
    const day = hour * 24;
  
    if (diff < minute) {
      return "Just now";
    } else if (diff < hour) {
      const minutes = Math.round(diff / minute);
      return `${minutes} ${minutes === 1 ? "minute" : "minutes"} ago`;
    } else if (diff < day) {
      const hours = Math.round(diff / hour);
      return `${hours} ${hours === 1 ? "hour" : "hours"} ago`;
    } else {
      const days = Math.round(diff / day);
      return `${days} ${days === 1 ? "day" : "days"} ago`;
    }
  };
  
  export const getAuthTokenFromLocalStorage = () => {
    return localStorage.getItem('token');
  };
  

  // dataUtils.js


  export function useMergedData() {
    const dispatch = useDispatch();
  
    // Fetching data directly from Redux state using selectors
    const postDataState = useSelector(state => state.post.postData);
    const mediaDataState = useSelector(state => state.post.mediaData);
  
    useEffect(() => {
      const fetchData = async () => {
        try {
          // Dispatch loading start action
          dispatch(startLoading());
  
          // Dispatch actions only if data is not already fetched
          if (postDataState.length === 0) {
            await dispatch(listPostData());
          }
          if (mediaDataState.length === 0) {
            await dispatch(listMediaData());
          }
        } catch (error) {
          console.error('Error fetching data:', error);
        } finally {
          // Dispatch loading stop action after data fetching is completed or encountered an error
          dispatch(stopLoading());
        }
      };
  
      fetchData(); // Call the fetchData function
    }, [dispatch]); // Only dispatch dependency is needed here
  
    // Merge and return data using useMemo
    const mergedData = useMemo(() => {
      return postDataState.map((post, index) => {
        const mediaIndex = index % mediaDataState.length; // Calculate the index for mediaDataState cyclically
        const media = mediaDataState[mediaIndex];
        return media ? { ...post, media } : post;
      });
    }, [postDataState, mediaDataState]);
  
    return mergedData;
  }