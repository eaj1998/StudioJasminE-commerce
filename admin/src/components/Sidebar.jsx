import styled from "styled-components"
import { AttachMoney, BarChart, ChatBubbleOutline, DynamicFeed, LineStyle, MailOutline, People, PermIdentity, Report, Storefront, Timeline, TrendingUp, WorkOutline } from "@mui/icons-material"
import SidebarMenu from "./SidebarMenu"


const SideContainer = styled.div`
   flex: 1;
   height: calc(100vh-50px);
   background-color: rgb(251, 251, 255);
   position: sticky;
   top: 50px;
`
const Wrapper = styled.div`
    padding: 20px;
    color: #555;
`


const Sidebar = () => {
    return (
        <SideContainer>
            <Wrapper>
                <SidebarMenu title="Dashboard" menuList={[
                    { icon: <LineStyle />, desc: "Home" },
                    { icon: <Timeline />, desc: "Analytics" },
                    { icon: <TrendingUp />, desc: "Sales" }
                ]} />
                <SidebarMenu title="Quick Menu" menuList={[
                    { icon: <PermIdentity />, desc: "Users" },
                    { icon: <Storefront />, desc: "Products" },
                    { icon: <AttachMoney />, desc: "Transactions" },
                    { icon: <BarChart />, desc: "Reports" }
                ]} />
                <SidebarMenu title="Notifications" menuList={[
                    { icon: <MailOutline />, desc: "Mail" },
                    { icon: <DynamicFeed />, desc: "Feedback" },
                    { icon: <ChatBubbleOutline />, desc: "Messages" },
                ]} />
                <SidebarMenu title="Staff" menuList={[
                    { icon: <WorkOutline />, desc: "Manage" },
                    { icon: <Timeline />, desc: "Analytics" },
                    { icon: <Report />, desc: "Reports" },
                ]} />
            </Wrapper>
        </SideContainer>
    )
}

export default Sidebar
