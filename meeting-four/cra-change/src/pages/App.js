import logo from 'assets/logo.svg'
import 'styles/App.css'
import Button from 'components/Button/Button'
import Card from 'components/Card/Card'

function App() {
    return (
        <div className="App">
            <Button />
            <Card>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Deleniti omnis, quaerat earum accusamus molestiae modi quidem
                praesentium voluptatem tempora, sequi molestias vitae. Ab quae
                ea, aut molestiae commodi neque. Cum!
            </Card>
            <button className="btn btn-success">boostrap</button>
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <p>
                    Edit <code>src/App.js</code> and save to reload.
                </p>
                <a
                    className="App-link"
                    href="https://reactjs.org"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Learn React
                </a>
            </header>
        </div>
    )
}

export default App
