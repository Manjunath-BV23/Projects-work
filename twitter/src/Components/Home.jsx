import axios from "axios"
import { useEffect, useState } from "react"

export const Home = () => {
    const [user, setUser] = useState([])
    useEffect(() => {
        getData()
    }, [])

    let API_key = "CLkecYlAJBy8jO3Sqgw1GpzNr"
    const getData = async () => {
        let response = await fetch (`https://api.twitter.com/2/tweets/search?part=snippet&q=manjunathbvmtrs&key=${API_key}`);

        let data = await response.json();
    
        console.log("data:", data)
           
    }
    return (
        <div>
            Hello
        </div>
    )
}