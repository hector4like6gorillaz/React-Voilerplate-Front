
import logo from './logo.svg';
import styled from "styled-components";
import './App.css';


export const DivContent = styled.div`
width: 50%;
height: ${window.screen.height/2 }px ;
overflow-y: scroll;
border-style: solid;
font-size: 15px;
`
const Content = [
  `"@fortawesome/fontawesome-svg-core": "^1.2.35"`,
        `"@fortawesome/free-brands-svg-icons": "^5.15.3"`,
        `"@fortawesome/free-solid-svg-icons": "^5.15.3"`,
        `"@fortawesome/react-fontawesome": "^0.1.14"`,
        `"@material-ui/core": "^4.11.4"`,
        `"@material-ui/icons": "^4.11.2"`,
        `"@material-ui/lab": "^4.0.0-alpha.58"`,
        `"@reduxjs/toolkit": "^1.5.1"`,
        `"@testing-library/jest-dom": "^5.11.4"`,
        `"@testing-library/react": "^11.1.0"`,
        `"@testing-library/user-event": "^12.1.10"`,
        `"axios": "^0.21.1"`,
        `"prop-types": "^15.7.2"`,
        `"react": "^17.0.2"`,
        `"react-axios": "^2.0.5"`,
        `"react-dom": "^17.0.2"`,
        `"react-redux": "^7.2.4"`,
        `"react-router-dom": "^5.2.0"`,
        `"react-scripts": "4.0.3"`,
        `"redux": "^4.1.0"`,
        `"redux-localstorage": "^0.4.1"`,
        `"styled-components": "^5.3.0"`,
         `"web-vitals": "^1.0.1"`,
]

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />

        <p>Here contains:</p>

        <DivContent>
          {Content.map((item, index) => {
            return (
              <p key={item} >{item}</p>
            )
          })}
         <p>Endpoints (using axios)</p>
         </DivContent>
        
      </header>
    </div>
  );
}

export default App;
