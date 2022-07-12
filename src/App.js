import styled from "styled-components";
import Items from './pages/Items';


const Container = styled.div`
  width: 100vw;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  overflow: hidden;
`
function App() {
  return (
    <Container>
      <Items />
    </Container>
  );
}

export default App;
