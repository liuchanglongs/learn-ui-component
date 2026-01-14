import { defineConfig } from 'vitest/config'
import react from '@vitejs/plugin-react'
import path from 'path'

export default defineConfig({
    plugins: [react()],
    test: {
        // 全局变量: 启用全局测试函数（如 describe, it, expect）
        globals: true,
        // 测试环境: jsdom（用于 React 组件测试
        environment: 'jsdom',
        // 设置文件: 自动加载的测试设置文件
        setupFiles: './src/test-utils/setup.ts',
        // CSS 支持: 启用 CSS 处
        css: true,
        // 覆盖率配置: 使用 v8 provider，排除测试文件和配置文件
        coverage: {
            provider: 'v8',
            reporter: ['text', 'json', 'html'],
            exclude: ['node_modules/', 'src/test-utils/', '**/*.test.{js,ts,jsx,tsx}', '**/*.config.{js,ts}', '**/types.ts']
        }
    },
    // 路径别名: 配置 @ 指向 ./src
    resolve: {
        alias: {
            '@': path.resolve(__dirname, './src')
        }
    }
})
