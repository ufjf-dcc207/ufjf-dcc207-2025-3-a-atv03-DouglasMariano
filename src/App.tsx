import './App.css';
import Animal from "./Animal";

function App(){
    return(
        <div className="app">
            <Animal icone="🦁" nome="Leão" peso={190.0} emExtincao={true}/>
            <Animal icone="🦩" nome="flamingo" peso={19.0} emExtincao={false}/>
            <Animal icone="🐻" nome="Urso" peso={890.0} emExtincao={false}/>
            <Animal icone="🦒" nome="Girafa" peso={990.0} emExtincao={true}/>

        </div>
    );
}

export default App;
