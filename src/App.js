import {ChatEngine} from 'react-chat-engine';

import './App.css';

//const projectID = "704e814f-9232-498f-9d75-0399eb4a76c0";

const App = () => {
    return (
        <ChatEngine 
            height = "100vh"
            projectID = "704e814f-9232-498f-9d75-0399eb4a76c0"
            userName = "sarnyaia1"
            userSecret = "ChatJelszo"
        />
    );
}

export default App;