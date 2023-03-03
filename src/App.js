import { useEffect, useState } from 'react';
import './App.css';
import MashWaterCalc from './MashWaterCalc';
import SpargeWaterCalc from './SpargeWaterCalc';
import StrikeTempCalc from './StrikeTempCalc';

function App() {
  const [grainMass, setGrainMass] = useState(null);
  const [mashWaterAmount, setMashWaterAmount] = useState(null);
  const [mashTunDeadSpace, setMashTunDeadSpace] = useState(null);
  const [spargeWaterAmount, setSpargeWaterAmount] = useState(null);
  const [strikeWaterTemp, setStrikeWaterTemp] = useState(null);

  useEffect(() => {
    console.log("Updated!")
  }, [mashWaterAmount, spargeWaterAmount])

  return (
    <div className="App0">
      <MashWaterCalc 
        mashWaterAmount={mashWaterAmount} 
        setMashWaterAmount={setMashWaterAmount}
        grainMass={grainMass} 
        setGrainMass={setGrainMass} 
        mashTunDeadSpace={mashTunDeadSpace}
        setMashTunDeadSpace={setMashTunDeadSpace}
      />

      {mashWaterAmount &&
        <SpargeWaterCalc
          grainMass={grainMass}
          mashWaterAmount={mashWaterAmount}
          mashTunDeadSpace={mashTunDeadSpace} 
          spargeWaterAmount={spargeWaterAmount} 
          setSpargeWaterAmount={setSpargeWaterAmount}
        />
      }

      <StrikeTempCalc strikeWaterTemp={strikeWaterTemp} setStrikeWaterTemp={setStrikeWaterTemp} />
    </div>
  );
}

export default App;