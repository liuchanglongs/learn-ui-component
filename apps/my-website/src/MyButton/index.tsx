import { Button, MiaomaProvider } from '@lcllcllcl/ui'
import React from 'react'

const MyButton = () => {
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

export default MyButton
