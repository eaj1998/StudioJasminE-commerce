import styled from "styled-components"
import { Language, NotificationsNone, Settings } from "@mui/icons-material"
import { Badge } from "@mui/material"

const TopbarContainer = styled.div`
    width: 100%;
    height: 50px;
    background-color: white;
    position: sticky;
    top: 0;
    z-index: 999;
`

const TopbarWrapper = styled.div`
    height: 100%;
    padding: 0px 20px;
    display: flex;
    align-items: center;
    justify-content: space-between;
`

const Left = styled.div`

`

const Right = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
`

const Logo = styled.span`
    font-weight: bold;
    font-size: 30px;
    color: #2b2828;
    cursor: pointer;
`
const TopBarIconContainer = styled.div`
    cursor: pointer;
    margin-right: 10px;
    color: #555;
`
const Image = styled.img`
    width: 40px;
    height: 40px;
    border-radius: 50%;
    cursor: pointer;
`
const Topbar = () => {
    return (
        <TopbarContainer>
            <TopbarWrapper>
                <Left>
                    <Logo>Studio Jesm Admin</Logo>
                </Left>
                <Right>
                    <TopBarIconContainer>
                        <Badge overlap="rectangular" badgeContent={4} color="primary">
                            <NotificationsNone />
                        </Badge>
                    </TopBarIconContainer>
                    <TopBarIconContainer>
                        <Badge overlap="rectangular" badgeContent={4} color="primary">
                            <Language />
                        </Badge>
                    </TopBarIconContainer>
                    <TopBarIconContainer>
                        <Settings />
                    </TopBarIconContainer>
                    <Image src="https://images.pexels.com/photos/1526814/pexels-photo-1526814.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"/>
                </Right>
            </TopbarWrapper>
        </TopbarContainer>
    )
}

export default Topbar
