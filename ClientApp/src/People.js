import React from 'react';
import AddPersonForm from './AddPersonForm';
import PeopleTable from './PeopleTable';

class People extends React.Component {

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
    render() {
        return (
            <div className='container mt-5'>
                <AddPersonForm
                    onFirstNameChange={this.onFirstNameChange}
                    onLastNameChange={this.onLastNameChange}
                    onAgeChange={this.onAgeChange}
                    onAddClick={this.onAddClick}
                    onClearAllClick={this.onClearAllClick}
                    person={this.state.person}   />
                <PeopleTable people={this.state.people}/>
            </div>
        )
    }
}

export default People;