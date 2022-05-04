import React from "react";

class SelectedNumbersDisplay extends React.Component {

    generateLi = n => {
        let text = 'Lock';
        if (n.locked) {
            text = 'Unlock';
        }
        const { onLockToggle } = this.props;
        return (
            <li className="list-group-item">
                {n.value}
                <button className="ml-3 btn btn-primary" onClick={() => onLockToggle(n)}>{text}</button>
            </li>
        )
    }
    render() {
        const { selectedNumbers } = this.props;
        return (
            <div>
                {!!selectedNumbers.length && <div className="row jumbotron">

                    <div className="col-md-6 col-md-offset-3">
                        <h3>Selected Numbers</h3>
                        <ul className="list-group">
                            {selectedNumbers.map(this.generateLi)}
                        </ul>
                    </div>
                </div>}
            </div>
        )

    }
}
export default SelectedNumbersDisplay;