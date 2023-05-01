import { useState, useEffect } from "react";

const pad = n => ((n < 10) && '0') + n;

export function useTime() {
    const [date, setDate] = useState(new Date());

    var hour = pad(date.getHours())
    var minute = pad(date.getMinutes())

    useEffect(() => {
        const updateTime = setInterval(() => {
            setDate(new Date());
        }, 1000);

        return () => clearInterval(updateTime);
    })

    return [hour, minute]
}