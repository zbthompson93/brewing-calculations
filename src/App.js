import { useEffect, useState } from 'react';
import './App.css';
import { Input, TextField, MenuItem, Button } from '@mui/material';

function App() {
  const [grainMass, setGrainMass] = useState(null);
  const [waterToGrist, setWaterToGrist] = useState(null);
  const [mashWaterAmount, setMashWaterAmount] = useState(null);
  const [mashTunDeadSpace, setMashTunDeadSpace] = useState(null);
  const [boilWaterAmount, setBoilWaterAmount] = useState(null);
  const [boilOffRate, setBoilOffRate] = useState(null);
  const [trubLoss, setTrubLoss] = useState(null);
  const [batchSize, setBatchSize] = useState(null);
  const [spargeWaterAmount, setSpargeWaterAmount] = useState(null);
  const [roomTemp, setRoomTemp] = useState(null);
  const [mashTemp, setMashTemp] = useState(null);
  const [strikeWaterTemp, setStrikeWaterTemp] = useState(null);

  const calculateAmounts = () => {
    let mw = ((grainMass*waterToGrist) + parseFloat(mashTunDeadSpace)).toFixed(2);
    console.log(typeof mw)
    setMashWaterAmount(mw)

    let bw = (parseFloat(batchSize)*(1.04)) + parseFloat(boilOffRate) + parseFloat(trubLoss);
    setBoilWaterAmount(bw)

    let sw = (parseFloat(bw) - parseFloat(mw) + parseFloat(grainMass) + parseFloat(mashTunDeadSpace)).toFixed(2);
    console.log(typeof sw)
    setSpargeWaterAmount(sw)

    let swt = (((parseFloat(0.4)/parseFloat(3.08))* (parseFloat(mashTemp) - parseInt(roomTemp))) + parseFloat(mashTemp) + 2).toFixed(2);
    console.log(typeof swt)
    setStrikeWaterTemp(swt)
  }

  const handleKeyDown = event => {
    console.log('User pressed: ', event.key);

    if (event.key === 'Enter') {
      // 👇️ your logic here
      calculateAmounts()
    }
  };

  useEffect(() => {
    console.log("Updated!")
  }, [mashWaterAmount, spargeWaterAmount])

  return (
    <div className="App">
      <h1>Brewing Water Calculations</h1>
      <div className='inputs-div'>
      <TextField
          className="w-full bg-white mb-12"
          style={{ marginLeft: '10px', marginRight: '10px'}}
          label="Batch Size (L)"
          id="batch-size"
          name="BatchSize"
          variant="outlined"
          value={batchSize || ''}
          onChange={(e) => setBatchSize(e.target.value)}
          margin="dense"
          InputLabelProps={{
              style: {
                  textShadow: '0px 0px 4px white'
              }
          }}
          onKeyDown={handleKeyDown}
      >
      </TextField>
      <TextField
          className="w-full bg-white mb-12"
          style={{ marginLeft: '10px', marginRight: '10px'}}
          label="Grain Amount (kg)"
          id="grain-amount"
          name="GrainAmount"
          variant="outlined"
          value={grainMass || ''}
          onChange={(e) => setGrainMass(e.target.value)}
          margin="dense"
          InputLabelProps={{
              style: {
                  textShadow: '0px 0px 4px white'
              }
          }}
          onKeyDown={handleKeyDown}
      >
      </TextField>
      <TextField
          className="w-full bg-white mb-12"
          style={{ marginLeft: '10px', marginRight: '10px'}}
          label="Water-To-Grist Ratio (L/kg)"
          id="water-to-grist"
          name="WaterToGrist"
          variant="outlined"
          value={waterToGrist || ''}
          onChange={(e) => setWaterToGrist(e.target.value)}
          margin="dense"
          InputLabelProps={{
              style: {
                  textShadow: '0px 0px 4px white'
              }
          }}
          onKeyDown={handleKeyDown}
      >
      </TextField>
      <TextField
          className="w-full bg-white mb-12"
          style={{ marginLeft: '10px', marginRight: '10px'}}
          label="Mash Tun Dead Space (L)"
          id="dead-space"
          name="DeadSpace"
          variant="outlined"
          value={mashTunDeadSpace || ''}
          onChange={(e) => setMashTunDeadSpace(e.target.value)}
          margin="dense"
          InputLabelProps={{
              style: {
                  textShadow: '0px 0px 4px white'
              }
          }}
          onKeyDown={handleKeyDown}
      >
      </TextField>
      <TextField
          className="w-full bg-white mb-12"
          style={{ marginLeft: '10px', marginRight: '10px'}}
          label="Boil Off Rate (L/hr)"
          id="boil-off-rate"
          name="BoilRate"
          variant="outlined"
          value={boilOffRate || ''}
          onChange={(e) => setBoilOffRate(e.target.value)}
          margin="dense"
          InputLabelProps={{
              style: {
                  textShadow: '0px 0px 4px white'
              }
          }}
          onKeyDown={handleKeyDown}
      >
      </TextField>
      <TextField
          className="w-full bg-white mb-12"
          style={{ marginLeft: '10px', marginRight: '10px'}}
          label="Trub Loss (L)"
          id="trub-loss"
          name="TrubLoss"
          variant="outlined"
          value={trubLoss || ''}
          onChange={(e) => setTrubLoss(e.target.value)}
          margin="dense"
          InputLabelProps={{
              style: {
                  textShadow: '0px 0px 4px white'
              }
          }}
          onKeyDown={handleKeyDown}
      >
      </TextField>

      <TextField
          className="w-full bg-white mb-12"
          style={{ marginLeft: '10px', marginRight: '10px'}}
          label="Room Temperature (F)"
          id="room-temp"
          name="RoomTemp"
          variant="outlined"
          value={roomTemp || ''}
          onChange={(e) => setRoomTemp(e.target.value)}
          margin="dense"
          InputLabelProps={{
              style: {
                  textShadow: '0px 0px 4px white'
              }
          }}
          onKeyDown={handleKeyDown}
      >
      </TextField>

      <TextField
          className="w-full bg-white mb-12"
          style={{ marginLeft: '10px', marginRight: '10px'}}
          label="Mash Temperature (F)"
          id="mash-temp"
          name="MashTemp"
          variant="outlined"
          value={mashTemp || ''}
          onChange={(e) => setMashTemp(e.target.value)}
          margin="dense"
          InputLabelProps={{
              style: {
                  textShadow: '0px 0px 4px white'
              }
          }}
          onKeyDown={handleKeyDown}
      >
      </TextField>
      </div>

      <Button
          variant="outlined"
          onClick={calculateAmounts}
      >
          Calculate Amounts
      </Button>

      {mashWaterAmount &&
          <>
              <p>Mash Water Amount: {mashWaterAmount ? `${mashWaterAmount} L` : null}</p>
              <p>Sparge Water Amount: {spargeWaterAmount ? `${spargeWaterAmount} L` : null}</p>
              <p>Boil Water Amount: {boilWaterAmount ? `${boilWaterAmount} L` : null}</p>
              <p>Strike Water Temperature: {strikeWaterTemp ? `${strikeWaterTemp} F` : null}</p>
          </>
      }
    </div>
  );
}

export default App;