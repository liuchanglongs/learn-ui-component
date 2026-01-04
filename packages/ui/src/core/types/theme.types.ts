/*
 *   Copyright (c) 2024 -Heyi
 *   All rights reserved.
 *   官方出品，作者 @Heyi，供学员学习使用，可用作练习，可用作美化简历，不可开源。
 */

export type MiaoMaSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl'

export interface VariantColorResolverResult {
    background: string
    hover: string
    color: string
    border: string
    hoverColor?: string
}

export interface MiaoMaTheme {}

// need replace partial to deepPartial use type-fest
export type MiaomaThemeOverrides = Partial<MiaoMaTheme>
