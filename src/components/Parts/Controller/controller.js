/**
* Libraries
*/

import React,{
    useState
} from 'react';
 
import {
    connect
} from 'react-redux';

import {
    bindActionCreators
} from 'redux';

import { 
    FontAwesomeIcon 
} from '@fortawesome/react-fontawesome';

import { 
    faTachometerAlt,
    faThLarge
} from '@fortawesome/free-solid-svg-icons'

/**
* Components
*/

import Dropdown from '../../../library/Dropdown/dropdown';
import Button from '../../../library/Button/button';
import InfoGameRules from '../InfoGameRules/infoGameRules';

/**
* Styles
*/

import './controller.scss';

/**
* Selectors
*/

import * as Selectors from '../../../reducers/selectors';

/**
* Actions
*/

import * as Actions from '../../../actions';

/**
* Utility
*/

import * as Utility from '../../../utility';

/**
* Hooks
*/

import {
    useInterval
} from '../../../Hooks/useInterval';


/**
 * Controller component definition and export
 */

export const Controller = (props) => {

    const [infoIsShown, setInfoIsShown] = useState(false);
    const [count, setCount] = useState(0);
    const [counterIsRunning, toggleCounter] = useState(false);
    const [delay, setDelay] = useState(1000);
    const [speedRange, setSpeedRange] = useState(1);

    /**
    * Methods
    */ 

   useInterval(() => {
        setCount(count + 1);
        props.onNextHandler();
   }, counterIsRunning ? delay : null)

   const toggleNextButton = () => {
        setCount(count + 1);
        props.onNextHandler();
   }

   const speedHandler = (e) => {
       setSpeedRange(+(e.target.value));
       
   }
    /**
    * Markup
    */

        return(
            <div className="controller">
                <div className="controler-wrapper">
                    <Dropdown 
                        list={["1", "2", "3"]}
                        dropdownClassName={"dropdown-controller"}
                        dropdownTopClassName={"dropdown-top-controller"}
                        dropdownTopActiveClassName={"dropdown-top-active-controller"}
                        dropdownBottomClassName={"dropdown-bottom-controller"}
                        dropdownTopTextClassName={"dropdown-top-text-controller"}
                        // toggleDropdown={this.props.toggleDropdownInvestments}
                        // showDropdown={this.props.showDropdownInvestments}
                        // chosenListDropdown={this.props.chosenListDropdown[0]}
                    />
                </div>
                <Button
                    className="controller-button"
                    onClick={toggleNextButton}
                    text={"Next"}
                />
                <Button
                    className="controller-button"
                    onClick={() => {toggleCounter(!counterIsRunning)}}
                    text={counterIsRunning ? "Stop" : "Start"}
                />
                <div className="controller-moves">{count}</div>
                <div className="controler-wrapper">
                    <FontAwesomeIcon icon={faTachometerAlt} size="lg"/>
                    <input 
                        type="range" 
                        value={props.speedRange} 
                        min="1" 
                        max ="11" 
                        onChange={props.startUpdatingDelay}
                    />
                </div>
                <div className="controler-wrapper">
                    <FontAwesomeIcon icon={faThLarge} size="lg"/>
                    <input 
                        type="range" 
                        value={props.zoom} 
                        min="1" 
                        max ="5" 
                        onChange={()=>props.startZooming(event)}
                    />
                </div>
              
                <Button
                    className="controller-button"
                    onClick={() => setInfoIsShown(true)}
                    text={"Info"}
                />
               {infoIsShown ? <InfoGameRules toggleBackdrop={()=>setInfoIsShown(false)}/> : null} 
            </div>
        );
    
}

export default connect(
    (state) => {
        return {
            zoom: Selectors.getZoomState(state),
            speedRange: Selectors.getSpeedRangeState(state),
            delay: Selectors.getDelayState(state),
        };
    },
    (dispatch) => {
        return {
            updateZoom: bindActionCreators(Actions.updateZoom, dispatch),
            updateMapInteractionCSS: bindActionCreators(Actions.updateMapInteractionCSS, dispatch),
            startZooming: bindActionCreators(Actions.startZooming, dispatch),
            onNextHandler: bindActionCreators(Actions.onNextHandler, dispatch),
            startUpdatingDelay: bindActionCreators(Actions.startUpdatingDelay, dispatch),
        };
    }
)(Controller);
 