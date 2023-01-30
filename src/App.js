import React, { useState } from "react";
import "./App.css";
import {
  Button,
  Col,
  Form,
  Row,
  Table
} from "react-bootstrap";

function App() {
let date = new Date().toLocaleTimeString();
  const [inputA, setInputA] = useState("");
  const [inputB, setInputB] = useState("");
  const [value, setValue] = useState("+");
  const [result, setResult] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (value === "-")
      setResult(() => [
        {
          expression: `${inputA} ${value} ${inputB}`,
          time: date,
          result: inputA - inputB
        },
      ]);
    else if (value === "+")
      setResult(() => [
        {
          expression: `${inputA} ${value} ${inputB}`,
          time: date,
          result: parseInt(inputA)+ parseInt(inputB)
        },
      ]);
    else if (value === "/")
      setResult(() => [
        {
          expression: `${inputA} ${value} ${inputB}`,
          time: date,
          result: inputA / inputB
        },
      ]);
    else if (value === "%")
      setResult(() => [
        {
          expression: `${inputA} ${value} ${inputB}`,
          time: date,
          result: inputA % inputB
        },
      ]);
    else if (value === "*")
      setResult(() => [
        {
          expression: `${inputA} ${value} ${inputB}`,
          time: date,
          result: inputA * inputB
        },
      ]);
  };
 
  return (
    <center>
      <h4>Super Calculator</h4>
      <Form>
        <Row>
          <Col>
            <Form.Group>
              <Form.Control
                type="text"
                onChange={(e) => setInputA(e.target.value)}
              />
            </Form.Group>
          </Col>
          <Col>
            <Form.Group>
              <Form.Select onChange={(e) => setValue(e.target.value)}>
                <option value={"+"}>+</option>
                <option value={"-"}>-</option>
                <option value={"/"}>/</option>
                <option value={"%"}>%</option>
                <option value={"*"}>*</option>
              </Form.Select>
            </Form.Group>
          </Col>
          <Col>
            <Form.Group>
              <Form.Control
                type={"text"}
                onChange={(e) => setInputB(e.target.value)}
              />
            </Form.Group>
          </Col>
          <Col>
            <Button onClick={handleSubmit}>
              Go!
            </Button>
          </Col>
        </Row>
      </Form>
     
       <h5>{result.length > 0 ? result[0].result : 0}</h5>

      <Table>
        <thead>
          <tr>
            <th>Time</th>
            <th>Expression</th>
            <th>Result</th>
          </tr>
        </thead>
        <tbody>
          {result.map((result) => (
            <tr>
              <td>{result.time}</td>
              <td>{result.expression}</td>
              <td>{result.result}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </center>
  );
}

export default App;