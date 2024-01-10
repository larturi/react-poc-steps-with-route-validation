import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import NavigationButtons from './NavigationButtons'
import { useStep } from '../context/StepContext'
import { STEPS } from '../constants'

const PageTemplate = ({ title, pageId }) => {
  const navigate = useNavigate()
  const { currentStep } = useStep()

  useEffect(() => {
    const currentPage = STEPS.find((step) => step.id === currentStep)

    if (pageId !== currentStep) {
      navigate(currentPage.slug)
    }
  }, [pageId, currentStep, history])

  return (
    <>
      <div>
        <h1>{title}</h1>
        <NavigationButtons step={pageId} />
      </div>
    </>
  )
}

export default PageTemplate
