import React from "react";
import Typing from 'react-typing-animation';

export class Home extends React.Component {
    render() {
        return (
            <main>
                <div>
                    <Typing cursorClassName="cursor">
                        <h1>Cześć, nazywam się Piotrek</h1>
                        <div>Uczę się <Typing.Backspace count={9} /> Programuje.</div>
                    </Typing>
                </div>
            </main>
        );
    }
}
export default Home;