import React, { useState } from 'react'

export default function ReconcileChildrenArrayPage() {
    const itemArr = [
        {
            name: 'A',
            id: '01',
            age: 1
        },
        {
            name: 'B',
            id: '02',
            age: 4
        },
        {
            name: 'C',
            id: '03',
            age: 2
        },
        {
            name: 'D',
            id: '04',
            age: 3
        },
    ]
    const [dataList, setDataList] = useState(itemArr);
    const handleSort = () => {
        dataList.sort((a, b) => {
            return a.age - b.age;
        })
        setDataList(dataList);
        console.log('dataList', dataList);
    }
    return (
        <div>
            <button onClick={handleSort}>sort</button>
            <ul>
                {
                    dataList.map(item => (
                        <li key={item.id}>{item.name}</li>
                    ))
                }
            </ul>
        </div>
        
    )
}
