import { useState } from 'react'

var nullityRegEx = /^$/

export function useValidateEmail() {
    var rangeRegEx = /^.{1,50}$/
    var emailRegEx = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{1,10})+$/

    const [isValid, setIsValid] = useState(false)
    const [error, setError] = useState(null)

    const validate = value => {
        var isEmailValid = rangeRegEx.test(value) && emailRegEx.test(value)

        setIsValid(isEmailValid)

        if (nullityRegEx.test(value)) {
            setError('Email is required.')
        } else if (!isEmailValid) {
            setError('Please enter a valid email.')
        }
    }

    const resetError = () => setError(null)

    return [isValid, error, validate, resetError]
}

export function useValidateName() {
    var rangeRegEx = /^.{2,30}$/
    var nameRegEx = /^[A-Za-z]([ ]?[A-Za-z]+)+$/

    const [isValid, setIsValid] = useState(false)
    const [error, setError] = useState(null)

    const validate = value => {
        var isNameValid = rangeRegEx.test(value) && nameRegEx.test(value)

        setIsValid(isNameValid)

        if (nullityRegEx.test(value)) {
            setError('Name is required')
        } else if (!isNameValid) {
            setError('Please enter a valid name.')
        }
    }

    const resetError = () => setError(null)

    return [isValid, error, validate, resetError]
}

export function useValidateMessage() {
    const [isValid, setIsValid] = useState(false)
    const [error, setError] = useState(null)

    const validate = value => {
        setIsValid(/^.{30,250}$/.test(value))

        if (nullityRegEx.test(value)) {
            setError('Message is required')
        } else if (/^.{1,29}$/.test(value)) {
            setError('Message is too short.')
        } else if (/^.{251,}$/.test(value)) {
            setError('Message is too long.')
        }
    }

    const resetError = () => setError(null)

    return [isValid, error, validate, resetError]
}