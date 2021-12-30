import Card from "../components/shared/Card"
import {Link} from 'react-router-dom'

function AboutPage() {
    return (
        <Card>
            <h2>About this Project</h2>
            <p>This is a feedback app that allows users to give ratings for a product or service.</p>
             <Link to="/">
            <p>Back to Home Page</p>
            </Link>
        </Card>
    )
}

export default AboutPage
