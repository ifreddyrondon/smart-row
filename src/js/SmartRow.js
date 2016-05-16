/**
 * Created by freddyrondon on 4/21/16.
 */

import React, { Component, PropTypes } from 'react'
import {Nav, NavItem} from 'react-bootstrap'
import classSet from 'classnames'

import './../css/smart-row.css';

class SmartRow extends Component {

    constructor(props) {
        super(props);
        this.state = {
            firstChildVisible: this.props.firstChildVisible,
            secondChildVisible: this.props.secondChildVisible
        }
    }

    componentWillReceiveProps(nextProps){
        this.setState({
            firstChildVisible: nextProps.firstChildVisible,
            secondChildVisible: nextProps.secondChildVisible
        })
    }

    _setFirstConfig() {
        if (this.props.onChange){
            this.props.onChange(1)
        } else {
            this.setState({
                firstChildVisible: true,
                secondChildVisible: false
            });
        }
    }

    _setSecondConfig() {
        if (this.props.onChange){
            this.props.onChange(2)
        } else {
            this.setState({
                firstChildVisible: false,
                secondChildVisible: true
            });
        }
    }

    _setThirdConfig() {
        if (this.props.onChange){
            this.props.onChange(3)
        } else {
            this.setState({
                firstChildVisible: true,
                secondChildVisible: true
            });
        }
    }

    render() {
        const classConfigFirst = classSet({
            'col-lg-12': this.state.firstChildVisible || this.state.secondChildVisible,
            'col-lg-6': !(!this.state.firstChildVisible || !this.state.secondChildVisible),
            'hidden': this.state.secondChildVisible && !this.state.firstChildVisible
        });

        const classConfigSecond = classSet({
            'col-lg-12': this.state.firstChildVisible || this.state.secondChildVisible,
            'col-lg-6': !(!this.state.firstChildVisible || !this.state.secondChildVisible),
            'hidden': this.state.firstChildVisible && !this.state.secondChildVisible
        });

        return (
            <div className="smart-row-container row">
                <Nav bsStyle="tabs" className="control-tabs">
                    <NavItem active={!this.state.secondChildVisible}
                             onClick={this._setFirstConfig.bind(this)}>
                        {this.props.firstChildTabName}
                    </NavItem>
                    <NavItem active={!this.state.firstChildVisible} onClick={this._setSecondConfig.bind(this)}>
                        {this.props.secondChildTabName}
                    </NavItem>
                    <NavItem active={!(!this.state.firstChildVisible || !this.state.secondChildVisible)}
                             onClick={this._setThirdConfig.bind(this)}>
                        {this.props.bothTabName}
                    </NavItem>
                </Nav>

                <div>
                    <div className={classConfigFirst}>
                        {this.props.children[0]}
                    </div>
                    <div className={classConfigSecond}>
                        {this.props.children[1]}
                    </div>
                </div>
            </div>
        )
    }

}

SmartRow.propTypes = {
    bothTabName: PropTypes.string,
    firstChildTabName: PropTypes.string.isRequired,
    onChange: PropTypes.func,
    secondChildTabName: PropTypes.string.isRequired
};

SmartRow.defaultProps = {
    bothTabName: 'both',
    firstChildVisible: true,
    onChange: undefined,
    secondChildVisible: false
};

export default SmartRow