import React from 'react';
import { Collapse, CardBody, Card } from 'reactstrap';
import Chevron from '../chevron.PNG';

export default class LinkBox extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            isOpen: false,
        }
    }

    toggle = () => {
        this.setState({
            isOpen: !this.state.isOpen
        })
    }

    render() {
        return (
            <div>
                <div key={this.props.i} className="linkBox">
                    <div><span className="linkName">{this.props.name}</span> - <a href={this.props.url} rel="noopener referrer" target="_blank" className="linkAddress">
                        {this.props.url}{" "}
                    </a>

                        <a onClick={this.toggle}><img src={Chevron} className="chevron" alt="chevron" /></a>
                        <Collapse isOpen={this.state.isOpen}>
                            <Card>
                                <CardBody>
                                    <div className="tagLabel">Tags:</div>
                                    {this.props.tags.map((tag, j) => (
                                        <div key={j}>{tag.name}</div>
                                    ))}

                                </CardBody>
                            </Card>
                        </Collapse>
                    </div>
                </div>
            </div >
        );
    }
}
