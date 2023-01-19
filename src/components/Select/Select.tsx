import React from "react";
import Select from "@mui/material/Select/Select";
import {FormControl, InputLabel, MenuItem} from "@mui/material";


type ItemType = {
    title: string
    value: string
}

type SelectPropsType = {
    value: any
    onChange: (value: any) => void
    items: ItemType[]
}

export const SelectComponent = (props: SelectPropsType) => {
    return (
        <FormControl variant="standard" sx={{m: 1, minWidth: 240, height: 30}}>
            <InputLabel id="demo-simple-select-label">Users</InputLabel>
            <Select value={props.value}>
                <MenuItem value={props.value} onClick={()=>props.onChange('')}>
                    <em>None</em>
                </MenuItem>
                {props.items.map((i, key) =>
                    <MenuItem key={key} value={i.title} onClick={()=>props.onChange(i.title)}>
                        <em>{i.title}</em>
                    </MenuItem>
                )}
            </Select>

        </FormControl>
    )
}