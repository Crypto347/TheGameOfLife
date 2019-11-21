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

/**
* Components
*/

import Button from '../../library/Button/button';

/**
* Styles
*/

import './theGameOfLife.scss';

/**
* Selectors
*/

import * as Selectors from '../../reducers/selectors';

/**
* Actions
*/

import * as Actions from '../../actions';

/**
* Utility
*/

import * as Utility from '../../utility';

/**
 * TheGameOfLife component definition and export
 */

export const TheGameOfLife = () => {


    /**
    * Methods
    */ 


    /**
    * Markup
    */

        return(
            <>
                <div>HH</div>
            </>
        );
    
}

export default connect(
    (state) => {
        return {
            // circles: Selectors.getCirclesState(state),
        };
    },
    (dispatch) => {
        return {
            // moveCircleXCoordinate: bindActionCreators(Actions.moveCircleXCoordinate, dispatch),
        };
    }
)(TheGameOfLife);
 