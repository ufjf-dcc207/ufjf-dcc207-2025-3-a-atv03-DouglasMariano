import Animal from './Animal'
import './App.css'


function App() {

  return (
    <div>
      <Animal icone='🦁' nome='Leão' peso={190} emExtincao={true} />
      <Animal icone='🦩' nome='Flamingo' peso={15} emExtincao={false} />
      <Animal icone='🦒' nome='Girafa' peso={980} emExtincao={false} />
      <Animal icone='🦜' nome='Papagaio' peso={3} emExtincao={true} />
    </div>
  )
}
export default App
