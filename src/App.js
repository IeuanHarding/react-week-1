import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import picture from './image.png';
import cross from './cross.PNG';
import { Container, Row, Col, Button } from 'reactstrap';
import React from "react";

import LinkedList from "./Components/LinkedList";
import SearchBar from "./Components/SearchBar";
import AddButton from './Components/Modal';
import LinkedListNew from "./Components/LinkedListNew";


export default class App extends React.Component {
  constructor(props) {
    super(props)

    const storedLinks = localStorage.getItem('links');
    const parsedLinks = storedLinks === "" || storedLinks === null ? [] : JSON.parse(storedLinks);

    this.state = {
      links: Array.isArray(parsedLinks) ? parsedLinks : [],
      search: ''
    }
  }

  onSearchChange = (search) => {
    this.setState({
      search,
    })
  }

  onAddButtonAddLink = (name, url, tags) => {
    const newLinks = this.state.links.concat([
      {
        name,
        url,
        tags
      }
    ])
    this.setState({
      links: newLinks
    })
    localStorage.setItem('links', JSON.stringify(newLinks))
  }

  clearLinksFunction = () => {
    const clearedLinks = [];
    this.setState({
      links: clearedLinks
    })
    localStorage.setItem('links', JSON.stringify(clearedLinks))
  }

  render() {

    const lowerSearch = this.state.search.toLowerCase();
    let filteredLinks = this.state.links.filter((link) => {
      return (
        link.name.toLowerCase().indexOf(lowerSearch) > -1 ||
        link.url.toLowerCase().indexOf(lowerSearch) > -1 ||
        link.tags
          .map((tag) => {
            return tag.name.toLowerCase().indexOf(lowerSearch) > -1;
          })
          .indexOf(true) > -1
      );
    });

    return (
      <div className="App">
        <Container fluid={true}>
          <Row>
            <Col xs="2" className="column">
              <div className="profilePic"><img src={picture} className="Ppic" alt="Profile Pic" /></div>
              <div className="bLeftText">King of JS</div>
              <div className="bLeftText">{this.state.links.length}Links Shared</div>
              <AddButton onAddLink={this.onAddButtonAddLink} />
              <Button className="bLeftText" color="danger" onClick={this.clearLinksFunction} >Clear All Links</Button>
              <div>
                <div className="tagBox">Tag Name <img src={cross} className="cross" alt="cross" /></div>
              </div>
            </Col>
            <Col xs="8" className="column">
              <h4 className="topDist">List of Links:</h4>
              <LinkedListNew links={filteredLinks} />
            </Col>
            <Col xs="2" className="column">
              <h4 className="topDist">Search Stored Links:</h4>
              <SearchBar onSearchChange={this.onSearchChange} />
              <h4 >Searched: {this.state.search}</h4>
            </Col>
          </Row>
        </Container>

      </div>
    );
  }
}

/*

Use Tagbox instead of current system:

1. When add tag is clicked, save whatever is in the input box as a variable, and pass it into the Tagbox Component as a prop.
2. Concurrently, save it into the tags list.
3. Tagbox component contains all the styling of tagbox.
4. Within both the Modal and LinkedListNew, map all of the Tags into Tagboxes. 
5. When Tag is removed, can easily access using this.tag, then remove it from the list in the Modal. 
6. Trickier to do from the LinkedListNew



*/




