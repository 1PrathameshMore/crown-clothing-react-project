import React, { Fragment } from 'react'
import {Group, Input, InputLabel} from './form-input.styles'

const FormInput = ({ name, label, changeHandler, value, type, isRequired }) => {
    return (
        <Group>
            <Input required={isRequired} type={type} onChange={changeHandler} name={name} value={value} />
            {label
                &&
                <InputLabel shrink={value.length}>
                    {label}
                </InputLabel>
            }
        </Group>
    )
}

export default FormInput