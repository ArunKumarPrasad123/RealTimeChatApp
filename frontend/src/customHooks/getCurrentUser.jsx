import axios from "axios"
import { useEffect } from "react"
import { serverUrl } from "../main"
import { useDispatch, useSelector } from "react-redux"
import { setUserData } from "../redux/userSlice"

const useCurrentUser = () => {
    let dispatch = useDispatch();
    let {userData} = useSelector(state=> state.user);
    useEffect(() => {
        const fetchUser = async () => {
            try {
                let result = await axios.get(`${serverUrl}/api/user/current`, { withCredentials: true });
                dispatch(setUserData(result.data));
            } catch (error) {
                console.log(error);
            }
        };
        // Only fetch if we don't already have user data
        if (!userData) {
            fetchUser();
        }
    }, [userData, dispatch]);
};

export default useCurrentUser;