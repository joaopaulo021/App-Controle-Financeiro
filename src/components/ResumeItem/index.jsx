import { Container, Header, HeaderTitle, Total } from './styles'


const ResumeItem = ({ title, Icon, value, color }) => {
    return (
        <Container>
            <Header>
                <HeaderTitle> { title }</HeaderTitle>
                <Icon color={ color } />
            </Header>
            <Total>{ value }</Total>
        </Container>
    )
}

export default ResumeItem



