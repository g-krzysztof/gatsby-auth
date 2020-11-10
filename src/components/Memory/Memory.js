import React, { Component } from 'react';
import './App.css';
import Button from './Button';

class Memory extends Component {
    click1 = ""
    click2 = ""
    click3 = ""
    state = {
        buttons: [
            { id: 0, name: 'A', clicked: false, disabled: false },
            { id: 1, name: 'A', clicked: false, disabled: false },
            { id: 2, name: 'A', clicked: false, disabled: false },
            { id: 3, name: 'B', clicked: false, disabled: false },
            { id: 4, name: 'B', clicked: false, disabled: false },
            { id: 5, name: 'B', clicked: false, disabled: false },
            { id: 6, name: 'C', clicked: false, disabled: false },
            { id: 7, name: 'C', clicked: false, disabled: false },
            { id: 8, name: 'C', clicked: false, disabled: false },
            { id: 9, name: 'D', clicked: false, disabled: false },
            { id: 10, name: 'D', clicked: false, disabled: false },
            { id: 11, name: 'D', clicked: false, disabled: false },
            { id: 12, name: 'E', clicked: false, disabled: false },
            { id: 13, name: 'E', clicked: false, disabled: false },
            { id: 14, name: 'E', clicked: false, disabled: false },
            { id: 15, name: 'F', clicked: false, disabled: false },
            { id: 16, name: 'F', clicked: false, disabled: false },
            { id: 17, name: 'F', clicked: false, disabled: false },
        ],
        step: 0,
        count: 0
    }

    compareNumbers = () => {
        let a = Math.random() - 0.5;
        let b = Math.random() - 0.5;
        return a - b
    }

    // mixing the table with buttons
    componentDidMount() {
        let buttons = [...this.state.buttons];
        buttons = buttons.sort(this.compareNumbers);
        this.setState({
            buttons
        })
    }

    // checking if two buttons have been clicked and checking if there is a match
    componentDidUpdate() {
        let buttons = [...this.state.buttons];
        buttons = buttons.filter(button => button.clicked === true ? button : null)

        setTimeout(() => {
            if (buttons.length === 3 && (buttons[0].name !== buttons[1].name || buttons[1].name !== buttons[2].name || buttons[0].name !== buttons[2].name)) {
                let buttons = [...this.state.buttons];
                buttons.forEach(button => { if (button.clicked === true) { button.clicked = false; } })
                this.click1 = ""
                this.click2 = ""
                this.click3 = ""
                this.setState({
                    buttons,
                    count: this.state.count + 1,
                    step: 0
                })
            } else if (buttons.length === 3 && buttons[0].name === buttons[1].name && buttons[0].name === buttons[2].name) {
                if (buttons[0].id !== buttons[1].id && buttons[0].id !== buttons[2].id) {
                    let buttons = [...this.state.buttons];
                    buttons.forEach(button => { if (button.clicked === true) { button.disabled = true; button.clicked = false } })
                    this.click1 = ""
                    this.click2 = ""
                    this.click3 = ""
                    this.setState({
                        buttons,
                        count: this.state.count + 1,
                        step: 0
                    })
                }
            }
        }, 1000);
    }

    // show button name on click [max 3 buttons at same time]
    handleClick = e => {
        let buttons = [...this.state.buttons];

        if (this.state.step === 0) {
            this.click1 = e.target.id;
        }

        if (this.state.step === 1) {
            this.click2 = e.target.id;
        }

        if (this.state.step === 2) {
            this.click3 = e.target.id;
        }

        if (this.state.step === 0 && this.click1 !== this.click2) {
            buttons.forEach(button => { if (parseInt(e.target.id, 10) === button.id) { button.clicked = true; } })
            this.setState({
                buttons,
                step: this.state.step + 1
            })
        }
        if (this.state.step === 1 && this.click1 !== this.click2 && this.click1 !== this.click3) {
            buttons.forEach(button => { if (parseInt(e.target.id, 10) === button.id) { button.clicked = true; } })
            this.setState({
                buttons,
                step: this.state.step + 1
            })
        }
        if (this.state.step === 2 && this.click1 !== this.click2 && this.click1 !== this.click3 && this.click2 !== this.click3) {
            buttons.forEach(button => { if (parseInt(e.target.id, 10) === button.id) { button.clicked = true; } })
            this.setState({
                buttons,
                step: this.state.step + 1
            })
        }
    }

    // restart game and start again
    handleRestartButton = () => {
        let buttons = [...this.state.buttons];
        buttons.forEach(button => { if (button.disabled === true) { button.disabled = false; } })
        buttons.forEach(button => { if (button.clicked === true) { button.clicked = false; } })
        buttons = buttons.sort(this.compareNumbers);
        this.setState({
            buttons,
            count: 0,
            step: 0
        })
    }

    render() {
        return (
            <div className="memory">
                <Button buttons={this.state.buttons} onClick={this.handleClick} />
                <div className="memory__text">Liczba prób: {this.state.count}</div>
                <button onClick={this.handleRestartButton} className="memory__restart-btn">Zagraj od nowa</button>
            </div>
        );
    }
}

export default Memory;