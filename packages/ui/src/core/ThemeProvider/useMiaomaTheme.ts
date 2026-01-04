/*
 *   Copyright (c) 2024 -Heyi
 *   All rights reserved.
 *   官方出品，作者 @Heyi，供学员学习使用，可用作练习，可用作美化简历，不可开源。
 */
import { useContext } from 'react'

import { DEFAULT_THEME } from './default-theme'
import { MiaomaThemeContext } from './MiaomaTheme.context'

export const useSafeMiaomaTheme = () => useContext(MiaomaThemeContext) || DEFAULT_THEME

export const useMiaomaTheme = () => {
    const ctx = useContext(MiaomaThemeContext)
    if (!ctx) {
        throw new Error('@miaoma/ui: MiaomaProvider was not found in component tree, make sure you have it in your app')
    }

    return ctx
}
