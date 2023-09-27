import {useEffect, useState} from "react";
import phoneAPI from "./phoneAPI";

const usePhone = () => {
    const [data, setData] = useState([])
    const [error, setError] = useState(null)

    const fetchData = async() => {
        try {
            const response = await phoneAPI.getAll()
            setData(response)
        } catch (e) {
            setError(`Error getting data, ${e}`);
        }
    }
    useEffect(() => {
        fetchData()
    }, []);

    return [data, error]
}

export default usePhone