import PropTypes from 'prop-types'
import Card from "./shared/Card"
import { FaTimes } from 'react-icons/fa'

function Feedbackitem({item, onDelete}) {
    return (
            <Card reverse={true}>
                <div className="num-display">{item.rating}</div>
                <button onClick={()=> onDelete(item.id)} className="close">
                    <FaTimes color='purple' />
                </button>
                <div className="text-display">
                    {item.text}
                </div>
            </Card>
    )
}

Feedbackitem.propTypes = {
    item: PropTypes.object.isRequired
}

export default Feedbackitem
