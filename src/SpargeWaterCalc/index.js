import { useState, useEffect } from 'react'
import { Input, TextField, MenuItem, Button } from '@mui/material';



function SpargeWaterCalc({grainMass, mashWaterAmount, mashTunDeadSpace, spargeWaterAmount, setSpargeWaterAmount}) {
    const [boilWaterAmount, setBoilWaterAmount] = useState(null);
    //const [mashWaterAmount, setMashWaterAmount] = useState(null);

    
    useEffect(() => {
        console.log("test")
    },[spargeWaterAmount]);

    return(
        <div className='App0'>
            <h1>Sparge Water Calculation</h1>
            <TextField
                className="w-full bg-white mb-12"
                label="Boil Water Amount (L)"
                id="boil-amount"
                name="BoilAmount"
                variant="outlined"
                value={boilWaterAmount || ''}
                onChange={(e) => setBoilWaterAmount(e.target.value)}
                margin="dense"
                InputLabelProps={{
                    style: {
                        textShadow: '0px 0px 4px white'
                    }
                }}
            >
            </TextField>

            <Button
                variant="outlined"
                onClick={() => {
                    let sw = (parseFloat(boilWaterAmount) - parseFloat(mashWaterAmount) + parseFloat(grainMass) + parseInt(mashTunDeadSpace)).toFixed(2);
                    console.log(typeof sw)
                    setSpargeWaterAmount(sw)
                }}
            >
                Calculate Sparge Water
            </Button>

            <p>Sparge Water Amount: {spargeWaterAmount ? `${spargeWaterAmount} L` : null}</p>
        </div>
    )
    
}

export default SpargeWaterCalc;




{/* <TextField
    className="w-full bg-white mb-12"
    label="Grain Amount"
    id="type"
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
    select
>
    <MenuItem value="P">
        Percentage
    </MenuItem>
    <MenuItem value="F">
        Fixed
    </MenuItem>
</TextField> */}