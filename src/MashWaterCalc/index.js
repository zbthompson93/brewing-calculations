import { useState, useEffect } from 'react'
import { Input, TextField, MenuItem, Button } from '@mui/material';



function MashWaterCalc() {
    const [grainMass, setGrainMass] = useState(null);
    const [waterToGrist, setWaterToGrist] = useState(null);
    const [mashTunDeadSpace, setMashTunDeadSpace] = useState(null);
    const [mashWaterAmount, setMashWaterAmount] = useState(null);

    
    useEffect(() => {
        // const fetchData = async () => {
        //     const data = await getData(params)

        //     setName(data[0].name)
        //     setDescription(data[0].description)
        //     setReviews(data[0].reviews)

        //     let count = 0;
        //     let ratingCount = 0;
        //     for(let i = 0; i < data[0].reviews.length; i++){
        //         ratingCount += data[0].reviews[i].rating;
        //         count++
        //     }

        //     setRating(ratingCount/count)

        //     setRestaurantId(params.restaurantId)
        // }
        // fetchData();
        console.log(grainMass, waterToGrist, mashTunDeadSpace)
    },[grainMass, waterToGrist, mashTunDeadSpace]);

    return(
        <div className='App0'>
            <h1>Mash Water Calculation</h1>
            <TextField
                className="w-full bg-white mb-12"
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
            >
            </TextField>
            <TextField
                className="w-full bg-white mb-12"
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
            >
            </TextField>
            <TextField
                className="w-full bg-white mb-12"
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
            >
            </TextField>

            <Button
                variant="outlined"
                onClick={() => {
                    let mw = ((grainMass*waterToGrist) + parseInt(mashTunDeadSpace)).toFixed(2);
                    console.log(typeof mw)
                    setMashWaterAmount(mw)
                }}
            >
                Calculate Mash Water
            </Button>

            <p>Mash Water Amount: {mashWaterAmount ? `${mashWaterAmount} L` : null}</p>
        </div>
    )
    
}

export default MashWaterCalc;




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