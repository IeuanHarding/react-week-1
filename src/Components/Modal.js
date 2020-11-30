import React from 'react';
import { Button, Modal, ModalBody, ModalFooter, ModalHeader } from 'reactstrap'

export default class AddButton extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            modal: false,
            name: "",
            tags: [],
            url: ""
        }
    }

    toggle = () => {
        this.setState({
            modal: !this.state.modal
        })
    }

    addLink = () => {
        this.props.onAddLink(this.state.name, this.state.url, this.state.tags)
        this.setState({
            modal: false,
            name: "",
            tags: [],
            url: ""
        })
    }

    addTag = () => {
        this.setState({
            tags: this.state.tags.concat([{ name: `` }])
        })
    }

    onTagChange = (index, event) => {
        const tags = this.state.tags.slice()
        tags[index] = {
            name: event.currentTarget.value
        }
        this.setState({
            tags: tags
        })
    }

    onNameChange = (event) => {
        this.setState({
            name: event.currentTarget.value
        })
    }

    onURLChange = (event) => {
        this.setState({
            url: event.currentTarget.value
        })
    }

    render() {
        return (
            <div>
                <Button color="secondary" onClick={this.toggle}> Add Link </Button>

                <Modal isOpen={this.state.modal} toggle={this.toggle}>
                    <ModalHeader className="modalElement">Add Links</ModalHeader>
                    <ModalBody className="modalElement">
                        <label className="modalElement modalLabel">Name:</label>
                        <br />
                        <input
                            type="text"
                            onChange={this.onNameChange}
                            value={this.state.name} />
                        <br />
                        <label className="modalElement modalLabel">URL:</label>
                        <br />
                        <input
                            type="text"
                            onChange={this.onURLChange}
                            value={this.state.url} />
                        <br />
                            <Button className="modalElement modalTagAddBtn" color="secondary" onClick={this.addTag}>Add Tag</Button>
                        <br />

                        {this.state.tags.map((tag, i) => {
                            return (
                                <input
                                    key={i}
                                    type="text"
                                    onChange={this.onTagChange.bind(this, i)}
                                    value={tag.name}
                                />
                            );
                        })}
                        <br />
                    </ModalBody>
                    <ModalFooter>
                        <Button color="primary" onClick={this.addLink}>Submit Link</Button>
                        <Button color="danger" onClick={this.toggle}>Close</Button>

                    </ModalFooter>
                </Modal>
            </div>
        )
    }


}








