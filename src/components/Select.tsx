import { FormControl, InputLabel, MenuItem, Select, SelectChangeEvent } from '@mui/material'
import React from 'react'

interface SelectProps {
    id: string,
    onChange: (event: SelectChangeEvent) => void,
    value: string,
    labelName: string,
    items: string[]
}

const SelectComponent: React.FC<SelectProps> = ({ id, labelName, onChange, value, items }) => {
    return (
        <FormControl>
            <InputLabel sx={{ marginBottom: '10px' }} id={id}>{labelName}</InputLabel>
            <Select
                labelId={id}
                onChange={onChange}
                value={value}
                sx={{ width: '6rem', height: '3rem' }}
            >{items.map((item) => {
                return <MenuItem value={item} key={item}>{item}</MenuItem>
            })}
            </Select>
        </FormControl>
    )
}

export default SelectComponent;