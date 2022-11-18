import React, {useContext, useState} from "react";
import {v4 as uuidV4} from 'uuid';
import useLocalStorage from "../Hooks/useLocalStorage";
const HabitsContext = React.createContext();

export function useHabits(){
    return useContext(HabitsContext)
}

// Schemas

// Habit
// {
//     id: 
//     name: 
//     goal
// }

// Rep - might just increment a count idk
// {
//     id: 
//     habitId: 
    // date/time: 
// }

function getCurrentDate(){
    var currentdate = new Date(); 
var datetime = "Last Sync: " + currentdate.getDate() + "/"
                + (currentdate.getMonth()+1)  + "/" 
                + currentdate.getFullYear() + " @ "  
                + currentdate.getHours() + ":"  
                + currentdate.getMinutes() + ":" 
                + currentdate.getSeconds();
         return datetime;       
}

export const HabitsProvider = ({children}) =>{
    const [habits, setHabits] = useLocalStorage('habits', [])
    const [reps, setReps] = useLocalStorage('reps', [])

    function addHabit({name, goal}) {
        setHabits(prevHabits =>{
            // Check if habit already exists
            if(prevHabits.find(habit =>habit.name === name)){
                return prevHabits;
            }
            return [...prevHabits,{id:uuidV4(), name, goal }]
        })
    }
    function deleteHabit({id}) {
        setHabits(prevHabits=>{
            return prevHabits.filter(habit => habit.id !== id);
        })
    }
    function deleteRep({id}) {
        setReps(prevReps=>{
            return prevReps.filter(rep => rep.id !== id);
        })
    }
    function addRep({goal, habitId}){
        setReps(prevReps =>{
            // Check if habit already exists
            if(prevReps.length === goal ){
                return prevReps;
            }
            return [...prevReps,{id:uuidV4(), date: getCurrentDate(), habitId, goal}]
        })
    }
    // Called when the user clicks on HabitCard
    function getHabits(habitId) {
        return reps.filter(rep => rep.habitId === habitId)
    }
     
    return <HabitsContext.Provider value={{
        habits, 
        addRep,
        reps,
        deleteRep,
        addHabit, deleteHabit, 
        getHabits
    }}>
        {children}
    </HabitsContext.Provider>
}
