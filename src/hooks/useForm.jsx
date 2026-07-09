import { useState, useCallback } from 'react'

const RULES = {
  required: (v) => (v ? '' : 'This field is required'),
  email: (v) =>
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v) ? '' : 'Invalid email address',
  phone: (v) =>
    /^(\+?254|0)?[17]\d{8}$/.test(v) ? '' : 'Invalid phone number',
  min: (min) => (v) =>
    v && v.length >= min ? '' : `Must be at least ${min} characters`,
  max: (max) => (v) =>
    v && v.length <= max ? '' : `Must be at most ${max} characters`,
}

const useForm = ({ initial = {}, validate = {}, onSubmit }) => {
  const [values, setValues] = useState(initial)
  const [errors, setErrors] = useState({})
  const [touched, setTouched] = useState({})
  const [submitting, setSubmitting] = useState(false)

  const runValidation = useCallback(
    (data) => {
      const result = {}
      for (const [field, rules] of Object.entries(validate)) {
        const val = data[field]
        const ruleList = Array.isArray(rules) ? rules : [rules]
        for (const rule of ruleList) {
          const validator = typeof rule === 'function' ? rule : RULES[rule]
          if (validator) {
            const err = validator(val)
            if (err) {
              result[field] = err
              break
            }
          }
        }
      }
      return result
    },
    [validate],
  )

  const handleChange = useCallback((e) => {
    const { name, value, type, checked } = e.target
    setValues((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }))
  }, [])

  const handleBlur = useCallback(
    (e) => {
      const { name } = e.target
      setTouched((prev) => ({ ...prev, [name]: true }))
      setErrors((prev) => ({
        ...prev,
        ...runValidation(values),
      }))
    },
    [runValidation, values],
  )

  const setValue = useCallback((name, value) => {
    setValues((prev) => ({ ...prev, [name]: value }))
  }, [])

  const reset = useCallback(() => {
    setValues(initial)
    setErrors({})
    setTouched({})
    setSubmitting(false)
  }, [initial])

  const handleSubmit = useCallback(
    (e) => {
      if (e) e.preventDefault()
      const validationErrors = runValidation(values)
      setErrors(validationErrors)
      setTouched(
        Object.keys(values).reduce((acc, k) => ({ ...acc, [k]: true }), {}),
      )
      if (Object.keys(validationErrors).length > 0) return
      setSubmitting(true)
      const result = onSubmit(values)
      if (result && typeof result.finally === 'function') {
        result.catch(() => {}).finally(() => setSubmitting(false))
      } else {
        setSubmitting(false)
      }
    },
    [values, runValidation, onSubmit],
  )

  const isValid = Object.keys(errors).length === 0
  const isDirty = Object.keys(touched).length > 0

  return {
    values,
    errors,
    touched,
    submitting,
    isValid,
    isDirty,
    handleChange,
    handleBlur,
    handleSubmit,
    setValue,
    reset,
    setValues,
  }
}

export { useForm, RULES }
