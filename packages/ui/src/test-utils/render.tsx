import { render as rtlRender, RenderOptions, RenderResult } from '@testing-library/react'
import { ReactElement } from 'react'
// import { ThemeProvider } from 'styled-components'

// 导入默认主题（如果有的话）
// import { defaultTheme } from '../core/ThemeProvider/default-theme'

// 自定义 render 函数，包装必要的 Provider
export function render(ui: ReactElement, options?: Omit<RenderOptions, 'wrapper'>): RenderResult {
    // 如果你的组件需要 ThemeProvider，可以在这里添加
    // const Wrapper = ({ children }: { children: React.ReactNode }) => (
    //     <ThemeProvider theme={defaultTheme}>{children}</ThemeProvider>
    // )

    // return rtlRender(ui, { wrapper: Wrapper, ...options })

    // 目前简单返回，如果需要 Provider 可以取消上面的注释
    return rtlRender(ui, options)
}

// 重新导出所有 testing-library 的工具
export * from '@testing-library/react'
