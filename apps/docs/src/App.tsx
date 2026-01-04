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
                <Button variant="filled">Button55</Button>
                <Button variant="default">defa1ult</Button>
                <Button variant="filled">fill1ed</Button>
                <Button variant="gradient">gra1dient</Button>
                <Button variant="light">lig1ht</Button>
                <Button variant="outline">ou1tline</Button>
                <Button variant="subtle">sub1tle</Button>
                <Button variant="transparent">tran1sparent</Button>
                <Button variant="white">whi1te</Button>
            </MiaomaProvider>
        </>
    )
}

export default App
