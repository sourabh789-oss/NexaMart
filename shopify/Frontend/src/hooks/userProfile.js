import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const fetchProfile = async () => {
  const res = await axios.get(`${import.meta.env.VITE_MYBACKENDURL}/user/profile`, {
    withCredentials: true, // use cookie, not Authorization header
  });
  return res.data;
};

export const useProfile = (token) => {
  return useQuery({
    queryKey: ["profile", token],
    queryFn: fetchProfile,
    enabled: !!token,
    staleTime: 1000 * 60 * 5, // 5 minute cache
  });
};
