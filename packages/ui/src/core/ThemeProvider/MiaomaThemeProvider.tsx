/*
 *   Copyright (c) 2024 -Heyi
 *   All rights reserved.
 *   官方出品，作者 @Heyi，供学员学习使用，可用作练习，可用作美化简历，不可开源。
 */
import React, { useMemo } from 'react'

import { MiaomaThemeOverrides } from '../types/theme.types'

import { DEFAULT_THEME } from './default-theme'
import { MiaomaThemeContext } from './MiaomaTheme.context'
import { useSafeMiaomaTheme } from './useMiaomaTheme'

export interface MiaomaThemeProviderProps {
    /** Determines whether theme should be inherited from parent MiaomaProvider, `true` by default */
    inherit?: boolean

    /** Theme override object */
    theme?: MiaomaThemeOverrides

    /** Your application or part of the application that requires different theme */
    children?: React.ReactNode
}

export function MiaomaThemeProvider({ theme, children, inherit = true }: MiaomaThemeProviderProps) {
    const parentTheme = useSafeMiaomaTheme()
    const mergedTheme = useMemo(() => Object.assign(inherit ? parentTheme : DEFAULT_THEME, theme), [theme, parentTheme, inherit])

    return <MiaomaThemeContext.Provider value={mergedTheme}>{children}</MiaomaThemeContext.Provider>
}

MiaomaThemeProvider.displayName = '@lcllcllcl/ui/MiaomaThemeProvider'
