import { useState, useEffect } from 'react'
import { Input, TextField, MenuItem, Button } from '@mui/material';


function StrikeTempCalc({strikeWaterTemp, setStrikeWaterTemp}){
    const [roomTemp, setRoomTemp] = useState(null);
    const [mashTemp, setMashTemp] = useState(null);

    useEffect(() => {

    },[strikeWaterTemp])

    return(
        <div>
            <h1>Strike Water Temperature Calculation</h1>
            <TextField
                className="w-full bg-white mb-12"
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
            >
            </TextField>

            <TextField
                className="w-full bg-white mb-12"
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
            >
            </TextField>

            <Button
                variant="outlined"
                onClick={() => {
                    let swt = (((parseFloat(0.4)/parseFloat(3.08))* (parseFloat(mashTemp) - parseInt(roomTemp))) + parseFloat(mashTemp) + 4).toFixed(2);
                    console.log(typeof swt)
                    setStrikeWaterTemp(swt)
                }}
            >
                Calculate Strike Water Temperature
            </Button>

            <p>Strike Water Temperature: {strikeWaterTemp ? `${strikeWaterTemp} F` : null}</p>

        </div>
    )

}

export default StrikeTempCalc;