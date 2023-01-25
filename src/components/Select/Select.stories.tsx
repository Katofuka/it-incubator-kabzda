import React, {useCallback, useState} from 'react';

import {SelectComponent} from "./Select";
import styles from "./Select.module.css";

export default {
    title: 'Input/Select',
    component: 'Select',

}
const users = [
    {title: "Lale", value: "1"},
    {title: "Ukkaa", value: "2"},
    {title: "Opead", value: "3"},
    {title: "Beeelo", value: "4"},
    {title: "Jeel", value: "5"},
]
//
// export const WithValue = () => {
//     const [parentValue, setParenValue] = useState<string>("1")
//
//     return <>
//         <SelectComponent value={parentValue} items={users} onChange={setParenValue}/>
//
//     </>
// }
//
// export const WithoutValue = () => {
//     const [parentValue, setParenValue] = useState<string>("1")
//
//     return <>
//         <SelectComponent value={null} items={users} onChange={setParenValue}/>
//
//     </>
// }

export type CityType = {
    title: string
    country: number
    population: number
    value: string
}


// Классификатор ОК (МК (ИСО 3166) 004-97) 025-2001
// 112 BR
// 643 ru
// 804 UA
const cities_1 = [
    {title: "Minsk", country: 112, population: 1975000, value: "1"},
    {title: "Brest", country: 112, population: 343985, value: "2"},
    {title: "Turov", country: 112, population: 3100, value: "3"},
    {title: "Postavi", country: 112, population: 19800, value: "4"},
    {title: "Polotsk", country: 112, population: 79896, value: "5"},
    {title: "Nikolaev", country: 804, population: 494922, value: "6"},
    {title: "Chernigov", country: 804, population: 295670, value: "7"},
    {title: "Hmelnitskyi", country: 804, population: 266095, value: "8"},
    {title: "Lvov", country: 804, population: 729038, value: "9"},
    {title: "Saratov", country: 643, population: 901361, value: "10"},
    {title: "Barnaul", country: 643, population: 630877, value: "11"},
    {title: "Riazan", country: 643, population: 528599, value: "12"},
    {title: "Perm", country: 643, population: 1034002, value: "13"}
]


export const ExampleMemoByLetterS = () => {
    const [parentValue, setParenValue] = useState<string>("1")

    const filteringByLetter =  (state: CityType[]) => {
        console.log('go to filter by Letter')
        return state.filter(city => city.title.toLowerCase().indexOf('t') !== -1)
    }

    return <div className={styles.inputBlock}>
        <SelectComponent value={parentValue} items={cities_1} onChange={setParenValue} filter={filteringByLetter}/>

    </div>
}

export const ExampleMemoByPopulation = () => {
    const [parentValue, setParenValue] = useState<string>("1")

    const filteringByPopulation =(state: CityType[]) => {
        console.log('go to filter by Population')
        return state.filter(city => city.population > 600000)
    }

    return <div className={styles.inputBlock}>
        <SelectComponent value={parentValue} items={cities_1} onChange={setParenValue} filter={filteringByPopulation}/>

    </div>
}

export const ExampleMemoByCounty = () => {
    const [parentValue, setParenValue] = useState<string>("1")

    const filteringByCountry =  useCallback((state: CityType[]) => {
        console.log('go to filter by Country')
        return state.filter(city => city.country === 804)
    },[])

    return <div className={styles.inputBlock}>
        <SelectComponent value={parentValue} items={cities_1} onChange={setParenValue} filter={filteringByCountry}/>

    </div>
}