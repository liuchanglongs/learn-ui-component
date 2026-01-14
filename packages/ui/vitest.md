1. Vitest 配置文件
2. 依赖包安装
   package.json
   添加了以下测试相关的 devDependencies：
   @testing-library/react@^14.2.1 - React 组件测试工具
   @testing-library/jest-dom@^6.6.3 - DOM 断言匹配器
   @testing-library/user-event@^14.5.2 - 用户交互模拟
   jsdom@^25.0.1 - DOM 环境
   @vitejs/plugin-react@^4.3.4 - Vite React 插件
   @vitest/coverage-v8@^4.0.17 - 代码覆盖率工具
   react@18.3.1 - React 库（测试环境）
   react-dom@18.3.1 - React DOM（测试环境）
   styled-components@6.1.11 - 样式组件库（测试环境）

    > 使用 React 18.3.1 和 @testing-library/react v14 以确保版本兼容性

3. 测试工具函数[text](src/test-utils)
4. Button 组件测试
