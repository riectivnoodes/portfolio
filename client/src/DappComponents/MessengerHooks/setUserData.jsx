//CUSTOM HOOK
import { useState, useEffect } from 'react'

export const useSetForm = () => {

    const [value, setForm] = useState('')
    return [value, event => setForm({...value, [event.target.name] : event.target.value })]
}

export const useSetUserAddress = () => {

    const [address, setAddress] = useState('')

    const getAddress = async () => {
        let account = await window.ethereum.request({ method: 'eth_requestAccounts' });
        setAddress(account)
    }

    return [address, getAddress]
}