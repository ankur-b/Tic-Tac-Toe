import { turnsType } from "../App";

export default function Log(props:{turns:turnsType}){
    return <ol id='log'>
        {props.turns.map(turn=><li key={`${turn.square.row}${turn.square.col}`}>{turn.player} selected {turn.square.row},{turn.square.col}</li>)}
    </ol>
}