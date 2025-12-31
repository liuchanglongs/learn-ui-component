import { defineConfig } from 'tsup'

export default defineConfig([
    // 第一种产物:现代浏览器通过打包工具去使用的场景（为啥ant会使用这种）
    {
        // 打包入口src：会根据目录输出
        entry: ['src'],
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
        outDir: 'es',
        // 代码是否压缩
        minify: true
    },
    // 第二种产物：不经过任何打包工具就可以直接使用
    {
        // 打包入口src：会根据目录输出
        entry: ['src'],
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
        outDir: 'dist',
        // 代码是否压缩
        minify: true
    },
    // 第三种产物：服务端node中
    {
        // 打包入口src：会根据目录输出
        entry: ['src'],
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
        outDir: 'dist',
        // 代码是否压缩
        minify: true
    }
])
