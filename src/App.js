import { Button, Container, Stack } from "react-bootstrap";
import AddHabitModal from "./Components/AddHabitModal";
import HabitCard from "./Components/HabitCard";
import { useState } from "react";
import { useHabits } from "./Contexts/HabitsContext";
import TotalHabitCard from "./Components/TotalHabitCard";
function App() {
  const [showAddHabitModal, setShowAddHabitModal] = useState(false);
  const {habits, getHabits} = useHabits();
  return (
    <>
      <Container className="my-4">
        <Stack direction="horizontal" gap="2" className="mb-4">
          <h1 className="me-auto">Habits</h1>
          <Button variant="primary" onClick = {()=>setShowAddHabitModal(true)}>Add Habit</Button>
        </Stack>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr",
            gap: "1rem",
            alignItems: "flex-start",
          }}
        >
          {habits.map(habit =>{
            const amount = getHabits(habit.id).length ;
           return <HabitCard 
            name={habit.name}
            key={habit.id} 
            reps = {amount}
            goal={habit.goal} id={habit.id} unit = {habit.unit}/>
            
})}
<TotalHabitCard/>
        </div>
        
      </Container>
      <AddHabitModal show = {showAddHabitModal} handleClose = {()=>setShowAddHabitModal(false)}/>
    </>
  );
}

export default App;
