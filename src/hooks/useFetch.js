import { useState, useEffect } from 'react'

const useFetch = url => {
    const [data, setData] = useState([])
    const [loading, setLoading] = useState(true)
    const [error, setError] =  useState(null)

    // hook para hacer llamada endpoint
    useEffect(()=>{
        const fetchResource = async () => {
            try {
                let res = await fetch(url)
                let data = await res.json()
                console.log(data)

                setData(data)
                setLoading(false)
    
            } catch (error) {
                setLoading(false)
                setError(error)
            }
        }
        fetchResource()
    }, [url])

    return {data, loading, error}
}

export default useFetch