import React, {KeyboardEvent, useEffect, useState} from "react";
import styles from "./Select.module.css";


type ItemType = {
    title: string
    value: string
}

type SelectPropsType = {
    value?: any
    onChange: (value: any) => void
    items: ItemType[];
}

export const SelectComponent = (props: SelectPropsType) => {
    const [active, setActive] = useState<boolean>(false)
    const [hoveredElement, setHoveredElement] = useState(props.value)

    const selectedItem = props.items.find(i => i.value === props.value)
    const hoveredItem = props.items.find(i => i.value === hoveredElement)

    const toggleItems = () => setActive(!active)
    const onItemClick = (value: any) => {
        props.onChange(value);
        toggleItems()
    }

    useEffect(() => setHoveredElement(props.value), [props.value])

    const onKeyUp = (e: KeyboardEvent<HTMLDivElement>) => {
        if (e.code === "ArrowUp" || e.code === "ArrowDown") {
            for (let i = 0; i < props.items.length; i++) {
                if (hoveredElement === props.items[i].value) {
                    const pretendentValue = e.code === "ArrowDown"
                        ? props.items[i + 1]
                        : props.items[i - 1];
                    if (pretendentValue) {
                        props.onChange(pretendentValue.value);
                        return;
                    }
                }
            }
            if (!hoveredElement)
                props.onChange(props.items[0].value)

        }
        if (e.code === "Escape" || e.code === "Enter") {
            setActive(false)
        }

    }

    return (

        <div onKeyUp={onKeyUp} className={styles.select} tabIndex={0}>

            <span className={styles.main} onClick={toggleItems} >{selectedItem && selectedItem.title}</span>
            {
                active && <div className={styles.itemGroup}>
                    {props.items
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
}