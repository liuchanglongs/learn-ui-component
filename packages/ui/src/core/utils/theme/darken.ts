/*
 *   Copyright (c) 2024 -Heyi
 *   All rights reserved.
 *   官方出品，作者 @Heyi，供学员学习使用，可用作练习，可用作美化简历，不可开源。
 */
import { toRgba } from './to-rgba'

export function darken(color: string, alpha: number) {
    if (color.startsWith('var(')) {
        return `color-mix(in srgb, ${color}, black ${alpha * 100}%)`
    }

    const { r, g, b, a } = toRgba(color)
    const f = 1 - alpha

    const dark = (input: number) => Math.round(input * f)

    return `rgba(${dark(r)}, ${dark(g)}, ${dark(b)}, ${a})`
}
