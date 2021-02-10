import React, { Component } from "react";
import Header from "./Header";
import Footer from "./Footer";
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
      userInput: "",
      list: [],
    };
  }
  updateInput(value) {
    this.setState({
      userInput: value,
    });
  }
  addTask() {
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

  editTask(key) {
    const list = [...this.state.list];
    const editList = list.find((item) => item.id === key);
    console.log(editList.value);
    const updateList = list.filter((item) => item.id !== key);
    this.setState({
      userInput: editList.value,
      list: updateList,
    });
  }

  render() {
    return (
      <div>
        <Header />
        <Container>
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
                />
                <InputGroup.Append>
                  <Button
                    variant="primary"
                    size="lg"
                    onClick={() => this.addTask()}
                  >
                    Add
                  </Button>
                </InputGroup.Append>
              </InputGroup>
            </Col>
          </Row>
          <hr />
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
                    <ListGroup.Item variant="light" action>
                      {item.value}
                      <Button
                        variant="primary"
                        size="lg"
                        onClick={() => this.editTask(item.id)}
                        style={{ float: "right", margin: "2px" }}
                      >
                        Edit
                      </Button>
                      <Button
                        variant="primary"
                        size="lg"
                        onClick={() => this.deleteTask(item.id)}
                        style={{ float: "right", margin: "2px" }}
                      >
                        Done
                      </Button>
                    </ListGroup.Item>
                  );
                })}
              </ListGroup>
            </Col>
          </Row>
        </Container>
        <Footer />
      </div>
    );
  }
}

export default App;
