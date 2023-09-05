import { useState } from 'react';

export default function usePost() {
    const [isLoading, setIsLoading] = useState(false);
    const [isSent, setIsSent] = useState(false);
    const [isError, setIsError] = useState(false);

    const submit = (url, data) => {
        setIsLoading(true);

        fetch(url, {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        }).then((res) => {
            setIsLoading(false);

            if (res.ok) {
                setIsSent(true);
            } else {
                setIsError(true);
            }
        }).catch(() => {
            setIsLoading(false);
            setIsError(true);
        });
    }

    return [submit, isLoading, isSent, isError];
}
