import {useMemo, useState} from "react";

export default {
    title: 'useMemo'
}

export const DifficultCountingExample = () => {
    const [a, setA] = useState<number>(4)
    const [b, setB] = useState<number>(4)
    let resultA = 1
    let resultB = 1

    resultA = useMemo(() => {
        let tempResultA = resultA
        for (let i = 1; i <= a; i++) {
            let fake = 0
            while (fake < 19700) {
                fake++;
                const fakeValue = Math.random()
            }
            tempResultA = tempResultA * i
        }
        return tempResultA
    }, [a])

    for (let i = 1; i <= b; i++) {
        resultB = resultB * i
    }

    return <>
        <input value={a} onChange={(e) => setA(+e.currentTarget.value)}></input>
        <input value={b} onChange={(e) => setB(+e.currentTarget.value)}></input>
        <hr/>
        <div>
            Result for a: {resultA}
        </div>
        <div>
            Result for b: {resultB}
        </div>
    </>
}

