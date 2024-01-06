import React, { useEffect, useState } from 'react'
import repository from 'src/repository'

export default function useRepository() {
    const [isLoading, setIsLoading] = useState(false)
    const [errors, setErrors] = useState(null)
    const [data, setData] = useState<any>()
    const fetchData = async (url: string, method: string = "get", body = null) => {
        try {
            setIsLoading(true)
            const result = await repository({
                method,
                url,
                data: body
            })
            setData(result)
            setIsLoading(false)
        } catch (error: any) {
            setErrors(error)
        }
    }
    return [isLoading, errors, data, fetchData]
}