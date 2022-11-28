import { Button, Form, Modal } from "react-bootstrap";
import { useRef } from "react";
import { useHabits } from "../Contexts/HabitsContext";
import CreatableSelect from "react-select/creatable";
const AddHabitModal = ({ show, handleClose }) => {
  const nameRef = useRef();
  const goalRef = useRef();
  const unitRef = useRef();
  const { addHabit } = useHabits();
  const handleSubmit = (e) => {
    e.preventDefault();

    addHabit({
      name: nameRef.current.value,
      goal: parseInt(goalRef.current.value),
      unit: unitRef.current.value,
    });
    handleClose();
  };

  const measurements = [
    {
      value: "lbs",
      label: "lbs",
    },
    {
      value: "hours",
      label: "hours",
    },
    {
      value: "minutes",
      label: "minutes",
    },
    {
      value: "miles",
      label: "miles",
    },
    {
      value: "glasses",
      label: "glasses",
    },
    {
      value: "laps",
      label: "laps",
    },
    {
      value: "sets",
      label: "sets",
    },
    {
      value: "inches",
      label: "inches",
    }
  ];
  return (
    <Modal show={show} onHide={handleClose}>
      <Form onSubmit={handleSubmit}>
        <Modal.Header closeButton>
          <Modal.Title>Create New Habit</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form.Group className="mb-3" controlId="name">
            <Form.Label>Habit name</Form.Label>
            <Form.Control
              type="text"
              required
              ref={nameRef}
              placeholder="Run"
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="goal">
            <Form.Label>Your goal</Form.Label>
            <Form.Control
              type="number"
              required
              min={1}
              step={1}
              ref={goalRef}
              placeholder="10"
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="unit">
            <Form.Label>Unit of Measurement</Form.Label>
            <Form.Control type="text" required ref={unitRef} placeholder = "miles" />
          </Form.Group>
          {/* <CreatableSelect isClearable options={measurements} /> */}
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
