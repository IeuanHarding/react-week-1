import React from 'react';

export default class SearchBar extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            search: ""
        }
    }

    onSearchChange = (input) => {
        const changedSearch = input.currentTarget.value;
        this.setState({
            search: changedSearch
        })

        this.props.onSearchChange(changedSearch)
    }

    render() {
        return (
            <div>
                <input
                    type="text"
                    value={this.state.search}
                    onChange={this.onSearchChange}
                />
            </div>
        );
    }
}
