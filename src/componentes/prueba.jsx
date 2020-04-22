import React from 'react';

export class Test extends React.Component {

    constructor(props) {
        super(props);
        this.state = { seconds: 0 };
    }

    tick() {
        this.setState(state => ({
            seconds: state.seconds + 1
        }));
    }

    componentWillUnmount() {
        clearInterval(this.interval);
    }

    funcion(){
        return(
            <div>
                holiii 2 --->
            </div>
        );
    }

    render() {
        let holii='perreo';
        return (
            <div>
                <span>Segundos: {holii}</span>
                {this.funcion()}
            </div>
        );
    }
}