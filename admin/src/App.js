import Sidebar from "./components/Sidebar";
import Topbar from "./components/Topbar";
import styled from "styled-components"

const AppContainer = styled.div`
  display: flex;

`
const OtherPagesContainer = styled.div`
  background-color: red;
  flex: 4;
`

function App() {
  return (
    <div>
      <Topbar />
      <AppContainer>
        <Sidebar />
        <OtherPagesContainer>
          other pages
        </OtherPagesContainer>
      </AppContainer>
    </div>
  );
}

export default App;
