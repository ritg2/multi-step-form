import { useState } from 'react'
import { useEffect } from 'react'
import Sidebar from './components/Sidebar'
import YourInfo from './components/YourInfo'
import SelectPlan from './components/SelectPlan'
import Addon from './components/Addon'
import Summary from './components/Summary'
import ThankYou from './components/ThankYou'
import Navgation from './components/Navigation'

function App() {
  const [renderComponent, setRenderComponent] = useState({
    step1: true,
    step2: false,
    step3: false,
    step4: false,
    step5: false
  })

  const [currentStep, setCurrentStep] = useState(1)

  function next(){
    let newStep = currentStep + 1
    setCurrentStep(newStep)
    setRenderComponent(prevComponent => {
      return {...prevComponent,
         [`step${newStep}`]: true,
         [`step${newStep-1}`]: false 
      }
    })
  }

  function goBack(){
    let newStep = currentStep - 1
    setCurrentStep(newStep)
    setRenderComponent(prevComponent => {
      return {...prevComponent,
         [`step${newStep}`]: true,
         [`step${newStep+1}`]: false 
      }
    })
  }

  return(
    <div className='container'>
      <Sidebar currentStep={currentStep} />
      {renderComponent.step1 && <YourInfo />}
      {renderComponent.step2 && <SelectPlan />}
      {renderComponent.step3 && <Addon />}
      {renderComponent.step4 && <Summary />}
      {renderComponent.step5 && <ThankYou />}
      {currentStep < 5 && <Navgation next={next} 
      goBack={goBack} 
      currentStep={currentStep} />}
    </div>
  )
}

export default App
