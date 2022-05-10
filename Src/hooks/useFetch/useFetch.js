import {useEffect,useState} from 'react';
import axios from 'axios';

function useFetch(url){

    const [data, setData] = useState([]);
    const [loading,setLoading] = useState(true);
    const [error,setError] = useState(null);

    const fectData = async () => {
        try {
            const { data : responseData } = await axios.get(url);
            setData(responseData);
            setLoading(false);
            
        } catch (err) {
            setError(err.message);
            setLoading(false);
        }
    }

    useEffect(() => {
        fectData();
    },[]);

    return {error,loading,data}
}

export default useFetch;