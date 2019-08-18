class App extends React.Component{
    state = {
        number: 0
    }

    increment = () => {
        this.setState((prevState)=> ({number: prevState.number +1}))
    }

    decrement = () => {
        this.setState((prevState)=> ({number: prevState.number -1}))
    }
    render (){
        const {number} = this.state
        return(
            <div className="counter">
                < button onClick={this.increment}> add one </button>
                < button onClick={this.decrement}> minus one </button>
                <p> {number}</p>
                {number === 10 && (<p>TEN!</p>)}
            </div>  


        )
    }

}


ReactDOM.render(
    <App />,
    document.getElementById('root')
  );