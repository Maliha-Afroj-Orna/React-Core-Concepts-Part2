import { useState } from "react"

export default function Batsman () {

    // const [state, setState] = useState(0);
    // const [state, setState] = useState("");
    // const [state, setState] = useState(false);
    // const [state, setState] = useState([]);
    // const [state, setState] = useState({});
    // const [state, setState] = useState(null);
    

    const [runs, setRuns] = useState(0);
    const [sixes, setSixes] = useState(0);

    const handleSingles = () => {
        const updatedRuns = runs + 1;
        setRuns(updatedRuns);
    }

    const handleFour = () => {
        const updatedRuns = runs + 4;
        setRuns(updatedRuns);
    }

    const handleSix = () => {
        const updatedRuns = runs + 6;
        const updatedSixes = sixes + 1;
        setRuns(updatedRuns);
        setSixes(updatedSixes);
    }

    return (
        <div>
            <h3>Player: Bangla Batsman</h3>
            <p><small>Six: {sixes}</small></p>
            {
                runs > 50 && <p>You score 50</p>
            }
            <h1>Score: {runs}</h1>
            <button onClick={handleSingles}>Singles</button>
            <button onClick={handleFour}>Four</button>
            <button onClick={handleSix}>Six</button>
        </div>
    )
}