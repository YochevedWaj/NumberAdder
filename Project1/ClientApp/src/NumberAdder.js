import React from "react";
import NumberRow from "./NumberRow";
import { produce } from 'immer';
import { v4 as uuidv4 } from 'uuid';
import SelectedNumbersDisplay from './SelectedNumbersDisplay';

class NumberAdder extends React.Component {
    state = {
        numbers: [],
        selectedNumbers: []
    };

    onAddClick = () => {
        const numbers = this.state.numbers;
        const copy = [...numbers, { id: uuidv4(), value: this.getRandomNumber(1, 1000), locked: false }];
        this.setState({ numbers: copy });
    }
    getRandomNumber = (min, max) => {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    onSelectClick = n => {
        const selectedNumbers = this.state.selectedNumbers;
        const copy = [...selectedNumbers, n];
        this.setState({ selectedNumbers: copy });
    }

    onUnselectClick = n => {
        const selectedNumbers = this.state.selectedNumbers.filter(num => n.id !== num.id);
        this.setState({ selectedNumbers });
    }
    isSelected = n => {
        const { selectedNumbers } = this.state;
        return selectedNumbers.some(num => n.id === num.id);
    }

    isLocked = (n) => {
        const { selectedNumbers } = this.state;
        const num = selectedNumbers.find(sn => n.id === sn.id);
        return num ? num.locked : false;
    }

    onLockToggle = n => {

        const newState = produce(this.state, draftState => {
            draftState.selectedNumbers.find(num => n.id === num.id).locked = !n.locked;
        });

        this.setState(newState);
        console.log(n.locked);


    }

    render() {
        return (
            <div className="container mt-5">
                <div className="row">
                    <div className="col-md-12">
                        <button className="btn btn-block btn-success" onClick={this.onAddClick}>Add</button>
                        <table className="table table-hover table-striped table-bordered">
                            <thead >
                                <tr>
                                    <th>Number</th>
                                    <th>Add/Remove</th>
                                </tr>
                            </thead>
                            <tbody>
                                {this.state.numbers.map((n, k) => <NumberRow
                                    number={n}
                                    key={k}
                                    onSelectClick={() => this.onSelectClick(n)}
                                    onUnselectClick={() => this.onUnselectClick(n)}
                                    isSelected={this.isSelected(n)}
                                    isLocked={this.isLocked(n)}
                                />)}

                            </tbody>
                        </table>
                        <SelectedNumbersDisplay
                            selectedNumbers={this.state.selectedNumbers}
                            onLockToggle={this.onLockToggle} />
                    </div>
                </div>
            </div>

        )

    }
}

export default NumberAdder;