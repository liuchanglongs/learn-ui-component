/*
 *   Copyright (c) 2024 -Heyi
 *   All rights reserved.
 *   官方出品，作者 @Heyi，供学员学习使用，可用作练习，可用作美化简历，不可开源。
 */
import React from 'react'
import { StyledButton } from './styles'
import { ButtonProps } from './types'

export const Button: React.FC<ButtonProps> = ({ variant, children, disabled }) => {
    console.log(children)

    return (
        <>
            {/* <button disabled={disabled}>{children}</button> */}
            <StyledButton disabled={disabled} variant={variant}>
                {children}
            </StyledButton>
        </>
    )
}
