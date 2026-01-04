/*
 *   Copyright (c) 2024 -Heyi
 *   All rights reserved.
 *   官方出品，作者 @Heyi，供学员学习使用，可用作练习，可用作美化简历，不可开源。
 */
import { Button, MiaomaProvider } from '@miaoma/ui'
function App() {
    return (
        <>
            <MiaomaProvider>
                <Button>Button</Button>
                <Button variant="default">default</Button>
                <Button variant="filled">filled</Button>
                <Button variant="gradient">gradient</Button>
                <Button variant="light">light</Button>
                <Button variant="outline">outline</Button>
                <Button variant="subtle">subtle</Button>
                <Button variant="transparent">transparent</Button>
                <Button variant="white">white</Button>
            </MiaomaProvider>
        </>
    )
}

export default App
