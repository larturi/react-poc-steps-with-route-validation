import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { StepProvider } from './context/StepContext'
import { STEPS } from './constants'

export default function App() {
  return (
    <StepProvider>
      <BrowserRouter>
        <Routes>
          {STEPS.map((step) => (
            <Route
              key={step.id}
              path={step.slug}
              element={<step.component />}
            />
          ))}
        </Routes>
      </BrowserRouter>
    </StepProvider>
  )
}
