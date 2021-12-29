import PropTypes from 'prop-types'

import Feedbackitem from "./Feedbackitem"
function FeedbackList({feedback,onDelete}) {
    if (!feedback || feedback.length === 0 ) return <p>No feedback yet</p>
    return (
        <div className="feedback-list">
            {feedback.map((item, i )=> {
                return (
                    <Feedbackitem key={i} item={item} onDelete={onDelete}/>
                )
            })}
        </div>
    )
}
FeedbackList.propTypes = {
    feedback: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            text: PropTypes.string.isRequired,
            rating: PropTypes.number.isRequired
        })
    )
}

export default FeedbackList
