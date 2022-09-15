
import './App.css';

function App() {
  const [paino, setPaino] = useState(0)
  const [pullo, setPullo] = useState(0)
  const [tunti, setTunti] = useState(0)
  const [sukupuoli, setSukupuoli] = useState('male');
  const [verenalkoholinpitoisuus, setPitoisuus] = useState(0);
  

  
 

  function pulloLitroiks(){return pullo * 0.33}
  function grammat(){return pulloLitroiks() * 8 * 4.5}
  function palaminen(){return paino / 10}
  function grammojaJäljellä(){return grammat() - (palaminen() * hour)}
  function miehellä(){return (grammojaJäljellä() / (paino * 0.7)).toFixed(2)}
  function naisella(){return (grammojaJäljellä() / (paino * 0.6)).toFixed(2)}
  
  const laske = (e) => {
    e.preventDefault()
    let tulos = 0;
    if (sukupuoli === 'mies') {
      tulos = miehellä
    } else {
      tulos = naisella
    }
    setPitoisuus(tulos)
  }
  
  

  


  
  return (
    <div>
      <h3>Alkometri</h3>
      <form onSubmit={laske}>
      <div>
        <label>Paino</label>
        <input value = {paino} onChange={e => setPaino(e.target.value)} />
      </div>
      <div>
        <label>Pullot</label>
        <select value = {pullo} onChange={e => setPullo(e.target.value)}>
          <option value="1"></option>
          <option value="2"></option>
          <option value="3"></option>
          <option value="4"></option>
          <option value="5"></option>
          <option value="6"></option>
          <option value="7"></option>
          <option value="8"></option>
          <option value="9"></option>
          <option value="10"></option>
        </select>
      </div>
      <div>
        <label>Aika</label>
        <select value = {tunti} onChange={e =>setTunti(e.target.value)}>
          <option value="1"></option>
          <option value="2"></option>
          <option value="3"></option>
          <option value="4"></option>
          <option value="5"></option>
          <option value="6"></option>
          <option value="7"></option>
          <option value="8"></option>
          <option value="9"></option>
          <option value="10"></option>
          <option value="11"></option>
          <option value="12"></option>
        </select>
      </div>
      <div>
        <label>Sukupuoli</label>
        <input type="radio" name="sukupuoli" value ="mies" onChange={e => setSukupuoli(e.target.value)}></input>
        <input type="radio" name="sukupuoli" value ="nainen" onChange={e => setSukupuoli(e.target.value)}></input>
      </div>
      <div>
        <label>Verenalkoholipitoisuus</label>
        <output> {verenalkoholinpitoisuus.toFixed(2)}</output>
      </div>
      <button>Laske</button>
      </form>
    </div>
    
    
  
    
  );

}
export default App;
