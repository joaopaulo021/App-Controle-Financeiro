import Grid from '../Grid'
import { Button, RadioGroup, Label, InputContent, Container, Input } from './styles'
import { useState } from 'react'


const Form = ({ handleAdd, transactionsList, setTransactionsList, formatoReal }) => {
    const [desc, setDesc] = useState('')
    const [amount, setAmount] = useState('')
    const [isExpense, setExpense] = useState(false)

    const generateId = () => Math.round(Math.random() * 1000)


    const handleSave = () => {
        if (!desc || !amount) {
            alert("Informe a descrição e o valor!")
            return;
        } else if (amount < 1) {
            alert('O valor tem que ser positivo!')
            return;
        }

        const transaction = {
            id: generateId(),
            desc: desc,
            amount: amount,
            expense: isExpense,
        }

        handleAdd(transaction)
        setDesc('')
        setAmount('')
    }

    return (
        <>
            <Container>
                <InputContent>
                    <Label>Descrição</Label>
                    <Input
                        value={ desc }
                        onChange={ (e) => setDesc(e.target.value) } />
                </InputContent>

                <InputContent>
                    <Label>Valor</Label>
                    <Input
                        type='number'
                        value={ amount }
                        onChange={ (e) => setAmount(e.target.value) } />
                </InputContent>
                <RadioGroup>
                    <Input
                        type='radio'
                        id='rIncome'
                        defaultChecked
                        name='group1'
                        onChange={ () => setExpense(!isExpense) }
                    />

                    <Label htmlFor='rIncome'>Entrada</Label>
                    <Input
                        type='radio'
                        id='rExpenses'
                        name='group1'
                        onChange={ () => setExpense(!isExpense) }
                    />
                    <Label htmlFor='rExpenses'>Saidas</Label>
                </RadioGroup>
                <Button onClick={ handleSave }>Adicionar</Button>
            </Container>
            <Grid
                formatoReal={ formatoReal }
                itens={ transactionsList }
                setItens={ setTransactionsList } />
        </>
    )
}

export default Form