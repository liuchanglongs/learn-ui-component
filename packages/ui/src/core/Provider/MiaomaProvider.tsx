/*
 *   Copyright (c) 2024 -Heyi
 *   All rights reserved.
 *   官方出品，作者 @Heyi，供学员学习使用，可用作练习，可用作美化简历，不可开源。
 */
import React from 'react'

import '../ThemeProvider/global.css'

import { MiaomaThemeProvider } from '../ThemeProvider/MiaomaThemeProvider'
import { MiaomaThemeOverrides } from '../types/theme.types'

import { MiaomaContext } from './Miaoma.context'

export interface MiaomaProviderProps {
    /**
     * The theme overrides to apply.
     */
    theme?: MiaomaThemeOverrides
    /**
     * The children to render.
     */
    children?: React.ReactNode
}

export const MiaomaProvider: React.FC<MiaomaProviderProps> = ({ theme, children }) => {
    return (
        <MiaomaContext.Provider value={{}}>
            <MiaomaThemeProvider theme={theme}>{children}</MiaomaThemeProvider>
        </MiaomaContext.Provider>
    )
}

MiaomaProvider.displayName = '@miaoma/ui/MiaomaProvider'
