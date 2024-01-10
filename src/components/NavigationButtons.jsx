import { useNavigate } from 'react-router-dom'
import { STEPS } from '../constants'
import { useStep } from '../context/StepContext'

const NavigationButtons = ({ step }) => {
  const navigate = useNavigate()

  const { updateStep } = useStep()

  const goToNext = () => {
    const nextStep = STEPS.find((s) => s.id === step + 1)
    if (nextStep) {
      const path = nextStep.slug === '/' ? '' : nextStep.slug
      navigate(path)
      updateStep(step + 1)
    }
  }

  const goToPrevious = () => {
    const prevStep = STEPS.find((s) => s.id === step - 1)
    if (prevStep) {
      const path = prevStep.slug === '/' ? '/' : prevStep.slug
      navigate(path)
      updateStep(step - 1)
    }
  }

  return (
    <div>
      {step > 1 && <button onClick={goToPrevious}>Anterior</button>}
      {step < STEPS.length && <button onClick={goToNext}>Siguiente</button>}
    </div>
  )
}

export default NavigationButtons
