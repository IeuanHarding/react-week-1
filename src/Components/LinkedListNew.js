import React from 'react';
import LinkBox from './LinkBox';

export default class LinkedListNew extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="listOfLinks">
                {this.props.links.map((link, i) => (
                    <LinkBox name={link.name} url={link.url} tags={link.tags} i={i}/>
                ))}

            </div >
        );
    }
}
