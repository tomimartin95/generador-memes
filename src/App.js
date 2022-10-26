import './App.css';
import Imgmeme from './componentes/imgmeme';
import Textomemes from './componentes/textoMeme';

function App() {
  return (
    <div>
      <h1 className="mt-3 text-center">Edita tu MEME</h1>
      <Imgmeme />
      <Textomemes />
    </div>
  );
}

export default App;
