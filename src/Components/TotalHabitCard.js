import {useHabits} from '../Contexts/HabitsContext'
import HabitCard from './HabitCard'

import React from 'react'

const TotalHabitCard = () => {
    const {reps, habits} = useHabits();
    const amount = reps.length;
    const max = habits.reduce((total, habit)=>total + habit.goal, 0  )
    if(max === 0) return null;
  return (

<>
<HabitCard reps = {amount} name="Total" gray goal={max} hideButtons/>
{amount===max? <h1>Congratulations! You've completed all your habits for today!</h1>: '' }
    </>
  )
}

export default TotalHabitCard