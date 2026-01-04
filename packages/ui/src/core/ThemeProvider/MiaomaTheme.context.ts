/*
 *   Copyright (c) 2024 -Heyi
 *   All rights reserved.
 *   官方出品，作者 @Heyi，供学员学习使用，可用作练习，可用作美化简历，不可开源。
 */
import { createContext } from 'react'

import { MiaoMaTheme } from '../types/theme.types'

export const MiaomaThemeContext = createContext<MiaoMaTheme | null>(null)
