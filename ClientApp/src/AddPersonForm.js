import React from 'react';

class AddPersonForm extends React.Component {
    render() {
        const { onFirstNameChange, onLastNameChange, onAgeChange, onAddClick, onClearAllClick, person } = this.props;
        const {firstName, lastName, age} = person;
        return (
            <div className='row jumbotron'>
                <div className='col-md-3'>
                    <input value={firstName} onChange={onFirstNameChange} className='form-control' placeholder='First Name' />
                </div>

                <div className='col-md-3'>
                    <input value={lastName} onChange={onLastNameChange} className='form-control' placeholder='Last Name' />
                </div>

                <div className='col-md-3'>
                    <input value={age} onChange={onAgeChange} className='form-control' placeholder='Age' />
                </div>

                <div className='col-md-3'>
                    <button onClick={onAddClick} className='btn btn-primary'>Add</button>
                    <button onClick={onClearAllClick} className='btn btn-warning'>Clear All</button>
                </div>
            </div>
        )
    }
}

export default AddPersonForm;