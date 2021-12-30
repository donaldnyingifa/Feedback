import {useContext} from 'react'
import {motion, AnimatePresence} from 'framer-motion'
import Feedbackitem from "./Feedbackitem"
import FeedbackContext from '../context/FeedbackContext'
function FeedbackList() {
    const {feedback} = useContext(FeedbackContext)
    if (!feedback || feedback.length === 0 ) return <p>No feedback yet</p>
    return (
        <div className="feedback-list">
            <AnimatePresence>
            {feedback.map((item, i )=> {
                return (
                    <motion.div 
                        key={item.id}
                        initial={{opacity: 0}}
                        animate={{opacity: 1}}
                        exit={{opacity: 0}}
                        >
                    <Feedbackitem key={i} item={item}/>
                    </motion.div>
                )
            })}
            </AnimatePresence>
        </div>
    )
}

export default FeedbackList
