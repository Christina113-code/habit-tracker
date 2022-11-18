import { Button, Form, Modal } from "react-bootstrap";
import { useRef } from "react";
import { useHabits } from "../Contexts/HabitsContext";

const AddHabitModal = ({ show, handleClose }) => {
  const nameRef = useRef();
  const goalRef = useRef();
  const { addHabit } = useHabits();
  const handleSubmit = (e) => {
    e.preventDefault();

    addHabit({
      name: nameRef.current.value,
      goal: parseInt(goalRef.current.value),
    });
    handleClose();
  };
  return (
    <Modal show={show} onHide={handleClose}>
      <Form onSubmit={handleSubmit}>
        <Modal.Header closeButton>
          <Modal.Title>Create New Habit</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form.Group className="mb-3" controlId="name">
            <Form.Label>Name</Form.Label>
            <Form.Control type="text" required  ref={nameRef}/>
          </Form.Group>
          <Form.Group className="mb-3" controlId="goal">
            <Form.Label>Goal</Form.Label>
            <Form.Control type="number" required min={0} step={1} ref={goalRef} />
          </Form.Group>
          <div className="d-flex justify-content-end">
            <Button variant="primary" type="submit">
              Add
            </Button>
          </div>
        </Modal.Body>
      </Form>
    </Modal>
  );
};

export default AddHabitModal;
