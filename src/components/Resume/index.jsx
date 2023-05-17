import { Container } from "./styles"
import ResumeItem from "../ResumeItem"
import {
    FaRegArrowAltCircleUp,
    FaRegArrowAltCircleDown,
    FaDollarSign

} from 'react-icons/fa'

const Resume = ({ income, expense, total }) => {
    return (
        <Container>
            <ResumeItem
                title="Entradas"
                Icon={ FaRegArrowAltCircleUp }
                value={ income }
                color="green"
            />
            <ResumeItem
                title="Saidas"
                Icon={ FaRegArrowAltCircleDown }
                value={ expense } color="red"
            />
            <ResumeItem
                title="Total"
                Icon={ FaDollarSign }
                value={ total } color="blue"
            />
        </Container>
    )
}
export default Resume
