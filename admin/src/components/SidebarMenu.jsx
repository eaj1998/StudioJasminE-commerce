import styled from "styled-components"

const SidebarMenuContainer = styled.div`
    margin-bottom: 10px;

`
const SidebarTitle = styled.h3`
    font-size: 13px;
    color: lightgray;
`
const SidebarList = styled.ul`
    list-style: none;
    padding: 5px;
`
const SidebarListItem = styled.li`
    cursor: pointer;
    padding: 5px;
    display: flex;
    align-items: center;
    border-radius: 10px;

    &.active{
        background-color: rgb(240, 240, 250);
    }

    &:hover{
        background-color: rgb(240, 240, 250);
    }
`
const SidebarIcon = styled.div`
    margin-right: 5px;
    font-size: 18px;
    margin-top: 6px;
`

const MenuDesc = styled.div`
    font-size: 20px;
`
const SidebarMenu = ({ title, menuList }) => {
    console.log(menuList);

    return (
        <div>
            <SidebarMenuContainer>
                <SidebarTitle>{title}</SidebarTitle>
                <SidebarList>
                    {menuList.map(item => (
                        <SidebarListItem>
                            <SidebarIcon>
                                {item.icon}
                            </SidebarIcon>
                            <MenuDesc>{item.desc}</MenuDesc>
                        </SidebarListItem>

                    ))}
                </SidebarList>
            </SidebarMenuContainer>
        </div>
    )
}

export default SidebarMenu
