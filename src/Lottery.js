import React, { Component } from 'react';
import LottoBall from './LottoBall';
import './Lottery.css'

class Lottery extends Component {
    static defaultProps = {
        title: 'Lotto',
        numBalls: 6,
        maxNum: 40
    }

    constructor(props) {
        super(props);
        // setting an empty array of set max size; it allowes to loop
        // over this array and do ajustments
        this.state={nums: Array.from({length: this.props.numBalls})};
        this.genNums=this.genNums.bind(this);
        this.handleClick=this.handleClick.bind(this);
    }

    
    genNums() {
        let newNumber = Math.floor(Math.random() * this.props.maxNum + 1);
        
        // setting state by using !callback function
        this.setState(curState => ({
            // building new array and setting state with that new array
            nums: curState.nums.map(
                n => Math.floor(Math.random() * this.props.maxNum) + 1
            )
        }));
    }


    handleClick() {
        this.genNums();
    }


    render() {
        return(
            <section className="Lottery">
                <h3>{this.props.title}</h3>
                    <div>
                        {/* looping and generating required number of LottoBalls components */}
                        {this.state.nums.map(x =><LottoBall num={x}/>)}
                    </div>
                <button onClick={this.handleClick}>Generate</button>
            </section>

        );
    }
}

export default  Lottery;


