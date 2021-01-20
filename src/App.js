import React, { Component } from "react";

import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import ListGroup from "react-bootstrap/ListGroup";
import InputGroup from "react-bootstrap/InputGroup";
import FormControl from "react-bootstrap/FormControl";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      //state
      userInput: "",
      list: [],
    };
  }
  updateInput(value) {
    //set task
    this.setState({
      userInput: value,
    });
  }
  addTask() {
    //add task in todo
    if (this.state.userInput !== "") {
      const userInput = {
        id: Math.random(),
        value: this.state.userInput,
      };
      const list = [...this.state.list];
      list.push(userInput);
      this.setState({
        list,
        userInput: "",
      });
    }
  }

  deleteTask(key) {
    const list = [...this.state.list];
    const updateList = list.filter((item) => item.id !== key);
    this.setState({
      list: updateList,
    });
  }
  render() {
    return (
      <Container>
        <Row
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            fontSize: "3rem",
            fontWeight: "bolder",
          }}
        >
          BerryNote
        </Row>
        <hr />
        <Row>
          <Col
            md={{
              span: 5,
              offset: 4,
            }}
          >
            <InputGroup className="md-3">
              <FormControl
                placeholder="Add a Task"
                size="lg"
                value={this.state.userInput}
                onChange={(item) => this.updateInput(item.target.value)}
                aria-label="Write Something"
                aria-describedby="basic-addon2"
              />
              <InputGroup.Append>
                <Button variant="dark" size="lg" onClick={() => this.addTask()}>
                  Add
                </Button>
              </InputGroup.Append>
            </InputGroup>
          </Col>
        </Row>
        <Row>
          <Col
            md={{
              span: 5,
              offset: 4,
            }}
          >
            <ListGroup>
              {}
              {this.state.list.map((item) => {
                return (
                  <ListGroup.Item
                    variant="dark"
                    action
                    onClick={() => this.deleteTask(item.id)}
                  >
                    {item.value}
                  </ListGroup.Item>
                );
              })}
            </ListGroup>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default App;
