import { defineConfig } from 'dumi'
import path from 'path'

export default defineConfig({
    outputPath: 'docs-dist',
    themeConfig: {
        name: 'my-website'
    },
    // resolve: {
    //     // 配置入口文件路径，API 解析将从这里开始
    //     entryFile: path.join(__dirname, '../../packages/ui/src/index.ts')
    // },
    alias: {
        '@miaoma/ui': path.join(__dirname, '../../packages/ui/src')
    }
})
