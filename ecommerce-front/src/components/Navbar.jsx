import styled from "styled-components"
import { Search, ShoppingCartOutlined } from "@material-ui/icons"
import { Badge } from "@material-ui/core"

const Container = styled.div`
    height: 60px;
`

const Wrapper = styled.div`
    padding: 10px 20x;
    display: flex;
    justify-content: space-between;
`
const Language = styled.span`
    font-size: 14px;
    cursor: pointer;
`
const SearchContainer = styled.div`
    border: 1px solid lightgray;
    display: flex;
    align-items: center;
    margin-left: 25px;
    padding: 5px;
`
const Input = styled.input`
    border: none;
`
const Logo = styled.h1`
    font: bold;
    text-align: center;
`
const Left = styled.div`
    flex: 1;
    display: flex;
    align-items: center;
    margin-left: 15px;
`
const Center = styled.div`
    flex: 1;
`
const Right = styled.div`
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: flex-end;    
    margin-right: 15px;
`
const MenuItem = styled.div`
    font-size: 14px;
    cursor: pointer;
    margin-left: 25px;
`

const Navbar = () => {
    return (
        <Container>
            <Wrapper>
                <Left>
                    <Language>PT-BR</Language>
                    <SearchContainer>
                        <Input />
                        <Search style={{color:"gray", fontSize:16}}/>
                    </SearchContainer>
                </Left>
                <Center><Logo>Studio Jesm</Logo></Center>
                <Right>
                    <MenuItem>REGISTRE-SE</MenuItem>
                    <MenuItem>LOGIN</MenuItem>
                    <MenuItem>
                    <Badge overlap="rectangular" badgeContent={4} color="primary">
                        <ShoppingCartOutlined/>
                    </Badge>
                    </MenuItem>
                </Right>
            </Wrapper>
        </Container>
    )
}

export default Navbar
