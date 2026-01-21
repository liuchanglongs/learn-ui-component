import { defineConfig } from 'tsup'

export default defineConfig([
    // 第一种产物:现代浏览器通过打包工具去使用的场景（为啥ant会使用这种）
    {
        // 打包入口：使用glob模式排除测试文件和test-utils
        entry: ['src', '!src/**/test-utils/**', '!src/**/*.test.{ts,tsx}'],
        // ignoreWatch: ['**/es', '**/dist', '**/*.css'],
        // 打包产物输出类型文件
        dts: true,
        // 是否切片
        splitting: false,
        // map chunk文件
        sourcemap: false,
        // 清楚原产物
        clean: true,
        // 产物的模块规范:"cjs","esm","iife"
        format: ['esm'],
        // 输出目录文件名
        outDir: 'esm-dist',
        // 代码是否压缩
        minify: true
    },
    // 第二种产物：不经过任何打包工具就可以直接使用
    {
        // 打包入口：仅打包index.ts，自动排除测试文件
        entry: ['src', '!src/**/test-utils/**', '!src/**/*.test.{ts,tsx}'],
        // 打包产物输出类型文件
        dts: true,
        // 是否切片
        splitting: false,
        // map chunk文件
        sourcemap: false,
        // 清楚原产物
        clean: true,
        // 产物的模块规范:"cjs","esm","iife"
        format: ['iife'],
        // 输出目录文件名
        outDir: 'iife-dist',
        // 代码是否压缩
        minify: true
    },
    // 第三种产物：服务端node中
    {
        // 打包入口：仅打包index.ts，自动排除测试文件
        entry: ['src', '!src/**/test-utils/**', '!src/**/*.test.{ts,tsx}'],
        // 打包产物输出类型文件
        dts: true,
        // 是否切片
        splitting: false,
        // map chunk文件
        sourcemap: false,
        // 清楚原产物
        clean: true,
        // 产物的模块规范:"cjs","esm","iife"
        format: ['cjs'],
        // 输出目录文件名
        outDir: 'cjs-dist',
        // 代码是否压缩
        minify: true
    }
])
