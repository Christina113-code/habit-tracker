import React from 'react'
import { Button, Card, ProgressBar, Stack } from 'react-bootstrap'
import { repFormatter } from '../utils';
import {AiOutlinePlus} from 'react-icons/ai'
import { useHabits } from '../Contexts/HabitsContext';
import {AiOutlineDelete} from 'react-icons/ai';

const getProgressBarVariant = (reps, goal)=>{
    const ratio = reps/goal;
    if(ratio < 1) return 'info';
    if(ratio >=1) return 'success';

}

const HabitCard = ({name,reps, goal, gray, id, hideButtons}) => {
    
    const {addRep,  deleteHabit} = useHabits();

    // Plus sign button -> need to add rep to unique habit 
function addRepetition(goal, habitId) {
    addRep({
        goal, habitId
    })
  }

function delHabit(id){
   deleteHabit(id);
}

    const classNames = [];
    if(reps >=goal){
        classNames.push('bg-success', 'bg-opacity-10');
    }else if(gray) {
        classNames.push('bg-light');
    }
  return (
    <Card className = {classNames.join(" ")}>
        <Card.Body>
            <Card.Title className = "d-flex justify-content-between align-items-baseline fw-normal mb-3">
                <div className = "me-2">{name}</div>
                <div className = "d-flex align-items-baseline">{repFormatter.format(reps)} / <span className= 'text-muted fs-6 ms-1'>{repFormatter.format(goal)}</span></div>

            </Card.Title>
            <ProgressBar className = 'rounded-pill' variant = {getProgressBarVariant(reps, goal)} min={0} max={goal} now={reps}/>
        </Card.Body>
        {!hideButtons?  <Stack direction = "horizontal" gap = "2" className = "m-3">
            <Button variant = 'outline-secondary' className = 'ms-auto d-flex align-items-center justify-content-center p-2 text-danger btn-outline-danger' onClick = {()=>delHabit(id)}><AiOutlineDelete/></Button>
            <Button variant = "outline-primary" className = 'd-flex align-items-center justify-content-center p-2' onClick = {()=>addRepetition(goal, id)}><AiOutlinePlus/></Button>

        </Stack>:''}
       
    </Card>
  )
}

export default HabitCard