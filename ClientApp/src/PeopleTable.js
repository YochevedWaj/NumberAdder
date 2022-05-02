import React from 'react';
import PersonForm from './PersonForm';
import PersonRow from './PersonRow';

class PeopleTable extends React.Component {

    state = {
        people: [],
        person: {}
    }

    onFirstNameChange = e => {
        const { lastName, age } = this.state.person;
        this.setState({ person: {firstName: e.target.value, lastName, age} });
    }

    onLastNameChange = e => {
        const { firstName, age } = this.state.person;
        this.setState({ person: { firstName, lastName: e.target.value, age } });
    }

    onAgeChange = e => {
        const { firstName, lastName } = this.state.person;
        this.setState({ person: { firstName, lastName, age: e.target.value } });
    }

    onAddClick = () => {
        const { people, person } = this.state;
        const copy = [...people, person];
        this.setState({ people: copy, person: {firstName: '', lastName: '', age: ''} });
        console.log(this.state.person);
    }

    onClearAllClick= () => {
        this.setState({ people: [] });
    }

    generateTable = (people) => {
        if (people.length === 0) {
            return <h1>No people added yet! Add some people!</h1>
        } return (
            <div>
                <table className='table table-hover table-striped table bordered'>
                    <thead>
                        <tr>
                            <th>First Name</th>
                            <th>Last Name</th>
                            <th>Age</th>
                        </tr>
                    </thead>
                    <tbody>
                        {people.map((p, k) => <PersonRow person={p} key={k}/>)}
                    </tbody>
                </table>
            </div>

        )
    };
    render() {
        return (
            <div className='container mt-5'>
                <PersonForm
                    onFirstNameChange={this.onFirstNameChange}
                    onLastNameChange={this.onLastNameChange}
                    onAgeChange={this.onAgeChange}
                    onAddClick={this.onAddClick}
                    onClearAllClick={this.onClearAllClick}
                    person={this.state.person} />

                {this.generateTable(this.state.people)}
            </div>
        )
    }
}

export default PeopleTable;