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

export async function sendEmail(email) {
    const res = await fetch('/api/mailing_list_ios_app', {
        method: 'POST',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email: email }),
    })

    return { ok: res.ok }
}