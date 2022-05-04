import React from "react";


class NumberRow extends React.Component {
    render() {
        const { number, onSelectClick, onUnselectClick, isSelected, isLocked } = this.props;
        const { value } = number;
        return (
            <tr>
                <td>{value}</td>
                <td>
                    <button className={`btn btn-${isSelected ? 'danger' : 'success'}`} onClick={isSelected ? onUnselectClick : onSelectClick}
                        disabled={isLocked}>
                        {isSelected ? `Remove from Selected ` : 'Add to Selected'}
                    </button>
                </td>
            </tr>
        )
    }

}

export default NumberRow;