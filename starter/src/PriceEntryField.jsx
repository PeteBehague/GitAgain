import React from 'react'
import NumberEditorField from './NumberEditorField'

const PriceEntryField = (props) => {
    return (
        <div>
            <NumberEditorField value={props.price} />
            {props.label}
        </div>
    )
}

export default PriceEntryField