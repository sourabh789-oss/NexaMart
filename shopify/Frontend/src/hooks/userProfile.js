import { useQuery } from "@tanstack/react-query";
import axios from "axios";

 const fetchProfile=async(token)=>{
    // const res=await axios.get(`${import.meta.env.VITE_BASE_URL}/user/profile`,{
    const res=await axios.get(`${import.meta.env.VITE_MYBACKENDURL}/user/profile`,{
         headers:{
             Authorization:`Bearer ${token}`
         },
    });

    return res.data;
 }


 //here token as a parameter in this function give it where we actual import this useProfile
 export const useProfile=(token)=>{
    return useQuery({
         queryKey:["profile",token],
         queryFn:()=> fetchProfile(token),
         enabled:!!token,
         staleTime:1000*60*5,//5 minute cache store the data
    });

 };

