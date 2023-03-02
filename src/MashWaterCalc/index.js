import { useState, useEffect } from 'react'
import { Input, TextField, MenuItem } from '@mui/material';



function MashWaterCalc() {
    const [grainMass, setGrainMass] = useState(null);
    const [waterToGrist, setWaterToGrist] = useState(null);
    const [mashTunDeadSpace, setMashTunDeadSpace] = useState(0);
    const [mashWaterAmount, setMashWaterAmount] = useState(0);

    
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
    },[]);

    return(
        <div className='App0'>
            <h1>Mash Water Calculation</h1>
            <TextField
                className="w-full bg-white mb-12"
                label="Grain Amount (kg)"
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
            >
            </TextField>
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