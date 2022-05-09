import { useEffect, useState } from "react"

const useItems = () => {
    const [items, setItems] = useState([])
    useEffect(() => {

        fetch("https://immense-stream-59373.herokuapp.com/item")
            .then(res => res.json())
            .then(data => setItems(data))

    }, [])
    return [items, setItems]
}

export default useItems;