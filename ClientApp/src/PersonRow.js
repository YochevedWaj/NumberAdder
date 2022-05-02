import React from 'react';

class PersonRow extends React.Component{
   
    generateRow = ({firstName, lastName, age }, key) => {

        let className = '';
        if (age > 65 ){
            className = 'table-danger';
        }

        return <tr key={key} className={className}>
            <td>{firstName}</td>
            <td>{lastName}</td>
            <td>{age}</td>
        </tr>;
    }

    
    render(){
        const person = this.props.person;
        return this.generateRow(person);
    }
    
}

export default PersonRow;