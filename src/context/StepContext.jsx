import React, { useState, useEffect, useContext, createContext } from 'react'

const StepContext = createContext()

export const useStep = () => useContext(StepContext)

export const StepProvider = ({ children }) => {
  const [currentStep, setCurrentStep] = useState(
    parseInt(localStorage.getItem('currentStep')) || 1
  )

  useEffect(() => {
    localStorage.setItem('currentStep', currentStep)
  }, [currentStep])

  const updateStep = (newStep) => {
    if (newStep <= currentStep + 1) {
      setCurrentStep(newStep)
    }
  }

  return (
    <StepContext.Provider value={{ currentStep, updateStep }}>
      {children}
    </StepContext.Provider>
  )
}
