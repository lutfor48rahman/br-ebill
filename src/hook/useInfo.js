import { useEffect, useState } from "react"

const useInfo = () =>{
    const [countries, setCountries] = useState('');
    const [filter, setFilter] = useState('');

    useEffect(()=>{
        fetch('https://restcountries.com/v3.1/all')
            .then(res => res.json())
            .then(data => {
                setCountries(data)
                setFilter(data)
            })
    },[])
    return {countries, filter}
    // return[filter]
}

export default useInfo;