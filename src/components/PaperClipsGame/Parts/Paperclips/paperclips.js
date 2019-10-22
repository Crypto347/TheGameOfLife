/**
* Libraries
*/

import React,{
    Component
} from 'react';

import {
    connect
} from 'react-redux';

import {
    bindActionCreators
} from 'redux';

/**
* Components
*/

import Hover from '../../SmallParts/Hover/hover';

/**
* Styles
*/

import './paperclips.scss';

/**
* Actions
*/

import * as Actions from '../../../../actions';

/**
* Selectors
*/

import * as Selectors from '../../../../reducers/selectors';

/**
* Utility
*/

import * as Utility from '../../../../utility';

/**
* Paperclips component definition and export
*/

export class Paperclips extends Component {

    /**
    * Constructor
    */

    constructor (props){
        super(props);
        this.state = {
            isHovering: false
        }
    }

    /**
     * Methods
     */

    handleMouseEnter = () => {
        this.setState({
            isHovering: true
        })
    }

    handleMouseLeave = () => {
        this.setState({
            isHovering: false
        })
    }

    renderShortNumber = () => {
        if(this.props.paperClips < 1000){
            return (this.props.paperClips).toFixed(1);
        }
        if(this.props.paperClips < 1000000){
            let length = Utility.getLength(this.props.paperClips);
            
            if(length === 4){
                length -= 1;
            }
            if(length === 5){
                length -= 2;
            }
            if(length === 6){
                length -= 3;
            }
            
            let denominator = Utility.getDenominator(length);
            let shortNumber = this.props.paperClips/denominator;
            return shortNumber.toFixed(1) + " thousand"; 
        }
        if(this.props.paperClips < 1000000000){
            let length = Utility.getLength(this.props.paperClips);
            if(length === 7){
                length -= 1;
            }
            if(length === 8){
                length -= 2;
            }
            if(length === 9){
                length -= 3;
            }
            let denominator = Utility.getDenominator(length);
            let shortNumber = this.props.paperClips/denominator;
            return shortNumber.toFixed(1) + " million"; 
        }
        if(this.props.paperClips < 1000000000000){
            let length = Utility.getLength(this.props.paperClips);
            if(length === 10){
                length -= 1;
            }
            if(length === 11){
                length -= 2;
            }
            if(length === 12){
                length -= 3;
            }
            let denominator = Utility.getDenominator(length);
            let shortNumber = this.props.paperClips/denominator;
            return shortNumber.toFixed(1) + " milliard"; 
        }
        if(this.props.paperClips < 1000000000000000){
            let length = Utility.getLength(this.props.paperClips);
            if(length === 13){
                length -= 1;
            }
            if(length === 14){
                length -= 2;
            }
            if(length === 15){
                length -= 3;
            }
            let denominator = Utility.getDenominator(length);
            let shortNumber = this.props.paperClips/denominator;
            return shortNumber.toFixed(1) + " billion"; 
        }
        if(this.props.paperClips < 1000000000000000000){
            let length = Utility.getLength(this.props.paperClips);
            if(length === 16){
                length -= 1;
            }
            if(length === 17){
                length -= 2;
            }
            if(length === 18){
                length -= 3;
            }
            let denominator = Utility.getDenominator(length);
            let shortNumber = this.props.paperClips/denominator;
            return shortNumber.toFixed(1) + " billiard"; 
        }
        if(this.props.paperClips < 1000000000000000000000){
            let length = Utility.getLength(this.props.paperClips);
            if(length === 19){
                length -= 1;
            }
            if(length === 20){
                length -= 2;
            }
            if(length === 21){
                length -= 3;
            }
            let denominator = Utility.getDenominator(length);
            let shortNumber = this.props.paperClips/denominator;
            return shortNumber.toFixed(1) + " trillion"; 
        }
        if(this.props.paperClips < 1000000000000000000000000){
            let length = Utility.getLength(this.props.paperClips);
            if(length === 22){
                length -= 1;
            }
            if(length === 23){
                length -= 2;
            }
            if(length === 24){
                length -= 3;
            }
            let denominator = Utility.getDenominator(length);
            let shortNumber = this.props.paperClips/denominator;
            return shortNumber.toFixed(1) + " trilliard"; 
        }
        if(this.props.paperClips < 1000000000000000000000000000){
            let length = Utility.getLength(this.props.paperClips);
            if(length === 25){
                length -= 1;
            }
            if(length === 26){
                length -= 2;
            }
            if(length === 27){
                length -= 3;
            }
            let denominator = Utility.getDenominator(length);
            let shortNumber = this.props.paperClips/denominator;
            return shortNumber.toFixed(1) + " quadrillion"; 
        }
    }

    renderHoverComponent = () => {
        if(this.state.isHovering){
            return(
                <Hover>
                    {this.renderShortNumber()}
                </Hover>
            )
        }
       
    }
    
    /**
    * Markup
    */

    render(){
        return(
            <div className="paperclips">
               <div 
                    onMouseEnter={this.handleMouseEnter} 
                    onMouseLeave={this.handleMouseLeave} 
                    className="paperclips-text"> 
                    Paperclips : {Utility.commaSeparator(this.props.paperClips)}
                </div>
                {this.renderHoverComponent()}
            </div>
        );
    }
}

export default connect(
    (state) => {
        return {
            paperClips: Selectors.getPaperclipsState(state),
            funds: Selectors.getFundsState(state),
            unsoldInventory: state.business.unsoldInventory,
            paperclipPrice: Selectors.getPaperclipPriceState(state),
            delay: state.business.delay,
            wire: state.business.wire,
            makePaperclipDisabled: state.business.makePaperclipDisabled,
            time: state.business.time,
        };
    },
    (dispatch) => {
        return {
            makePaperclip: bindActionCreators(Actions.makePaperclip, dispatch),
            sellPaperclips: bindActionCreators(Actions.sellPaperclips, dispatch),
            sendCommentToTerminal: bindActionCreators(Actions.sendCommentToTerminal, dispatch),
        };
    }
)(Paperclips);
