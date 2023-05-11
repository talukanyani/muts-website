export async function sendMessage(name, email, message) {
    const res = await fetch('/contact', {
        method: 'POST',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            name: name,
            email: email,
            text: message
        }),
    })

    return { ok: res.ok }
}