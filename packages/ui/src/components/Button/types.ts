/*
 *   Copyright (c) 2024 -Heyi
 *   All rights reserved.
 *   官方出品，作者 @Heyi，供学员学习使用，可用作练习，可用作美化简历，不可开源。
 */
export const buttonVariants = ['filled', 'light', 'outline', 'transparent', 'white', 'subtle', 'default', 'gradient'] as const
export type ButtonVariant = (typeof buttonVariants)[number]

export interface ButtonProps {
    /**
     * 按钮的变体
     */
    variant?: ButtonVariant
    /**
     * 按钮内容
     */
    children?: React.ReactNode
    /**
     * 是否禁用按钮
     */
    disabled?: boolean
    /**
     * 点击事件处理函数
     */
    onClick?: React.MouseEventHandler<HTMLButtonElement>
}

