import React, { useEffect, useState } from 'react'

export default function UseEffectPage() {
    const [count, setCount] = useState(1);
    useEffect(()=>{
        const timer = setInterval(()=>{
            console.log(count);
        }, 1000)
        return () => {
            clearInterval(timer);
        }
    }, [])
    const handleClick = () => {
        setCount(count + 1);
    };
    return (
        <div>
            <div onClick={handleClick}>click me!</div>
            <div>{count}</div>
        </div>
    )
}
