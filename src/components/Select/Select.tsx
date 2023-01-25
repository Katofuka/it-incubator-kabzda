import React, {KeyboardEvent, memo, useCallback, useEffect, useMemo, useState} from "react";
import styles from "./Select.module.css";
import {CityType} from "./Select.stories";


type ItemType = {
    title: string
    value: string
}

type SelectPropsType = {
    value?: any
    onChange: (value: any) => void
    items: CityType[];
    filter?: (state: CityType[]) => CityType[]
}

export const SelectComponent = memo((props: SelectPropsType) => {
    const [active, setActive] = useState<boolean>(false)
    const [hoveredElement, setHoveredElement] = useState(props.value)

    const newItems = props.filter ? props.filter(props.items) : props.items

    const selectedItem = newItems.find(i => i.value === props.value)
    const hoveredItem = newItems.find(i => i.value === hoveredElement)

    const toggleItems = () => setActive(!active)
    const onItemClick = (value: any) => {
        props.onChange(value);
        toggleItems()
    }

    useEffect(() => setHoveredElement(props.value), [props.value])

    const onKeyUp = (e: KeyboardEvent<HTMLDivElement>) => {
        if (e.code === "ArrowUp" || e.code === "ArrowDown") {
            for (let i = 0; i < newItems.length; i++) {
                if (hoveredElement === newItems[i].value) {
                    const pretendentValue = e.code === "ArrowDown"
                        ? newItems[i + 1]
                        : newItems[i - 1];
                    if (pretendentValue) {
                        props.onChange(pretendentValue.value);
                        return;
                    }
                }
            }
            if (!hoveredElement)
                props.onChange(newItems[0].value)

        }
        if (e.code === "Escape" || e.code === "Enter") {
            setActive(false)
        }

    }


    return (

        <div onKeyUp={onKeyUp} className={styles.select} tabIndex={0}>

            <span className={styles.main} onClick={toggleItems}>{selectedItem && selectedItem.title}</span>
            {
                active && <div className={styles.itemGroup}>
                    {newItems
                        .map(i =>
                            <div className={styles.item + " " + (hoveredItem === i ? styles.selected : "")}
                                 key={i.value}
                                 onMouseEnter={() => setHoveredElement(i.value)}
                                 onClick={() => onItemClick(i.value)}>
                                {i.title}
                            </div>)}
                </div>
            }
        </div>


    )
})