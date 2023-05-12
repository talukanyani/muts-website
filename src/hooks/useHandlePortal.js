import { useState } from 'react'

export function useHandlePortal() {
    const [isInsertedToDOM, setIsInsertedToDOM] = useState(false)
    const [isVisibleToScreen, setIsVisibleToScreen] = useState(false)

    const open = () => {
        setIsInsertedToDOM(true)
        setTimeout(() => {
            setIsVisibleToScreen(true)
        }, 100);
    }

    const close = () => {
        setIsVisibleToScreen(false)
        setTimeout(() => {
            setIsInsertedToDOM(false)
        }, 1000);
    }

    return [isInsertedToDOM, isVisibleToScreen, open, close]
}