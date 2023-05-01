import { useEffect } from 'react'

export function useHideScrollBars(isHide) {
    useEffect(() => {
        if (isHide) {
            document.body.style.overflow = 'hidden'
        } else {
            document.body.style.overflow = ''
        }
    }, [isHide])
}