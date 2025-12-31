/*
 *   Copyright (c) 2024 妙码学院-Heyi
 *   All rights reserved.
 *   妙码学院官方出品，作者 @Heyi，供学员学习使用，可用作练习，可用作美化简历，不可开源。
 */
import { toRgba } from './to-rgba'

export function lighten(color: string, alpha: number) {
    if (color.startsWith('var(')) {
        return `color-mix(in srgb, ${color}, white ${alpha * 100}%)`
    }

    const { r, g, b, a } = toRgba(color)

    const light = (input: number) => Math.round(input + (255 - input) * alpha)

    return `rgba(${light(r)}, ${light(g)}, ${light(b)}, ${a})`
}
