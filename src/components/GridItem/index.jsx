import * as C from './styles'

import {
    FaRegArrowAltCircleUp,
    FaRegArrowAltCircleDown,
    FaTrash,
} from "react-icons/fa"


const GridItem = ({ item, onDelete, formatoReal }) => {
    return (
        <C.Tr>
            <C.Td>{ item.desc }</C.Td>
            <C.Td> { formatoReal(Number(item.amount)) }</C.Td>
            <C.Td alignCenter>
                { item.expense ? (
                    <FaRegArrowAltCircleDown color='red' />
                ) : (
                    <FaRegArrowAltCircleUp color='green' />
                )

                }
            </C.Td>
            <C.Td>
                <C.TdBtn>
                    <FaTrash color="gray" onClick={ () => onDelete(item.id) } />
                </C.TdBtn>
            </C.Td>
        </C.Tr>
    )
}

export default GridItem
