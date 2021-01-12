// Copyright 2021, University of Colorado Boulder

/**
 * @author Sam Reid (PhET Interactive Simulations)
 */

import Screen from '../../../joist/js/Screen.js';
import CircuitConstructionKitAcVirtualLabColorProfile from '../common/CircuitConstructionKitAcVirtualLabColorProfile.js';
import circuitConstructionKitAcVirtualLab from '../circuitConstructionKitAcVirtualLab.js';
import CircuitConstructionKitAcVirtualLabModel from './model/CircuitConstructionKitAcVirtualLabModel.js';
import CircuitConstructionKitAcVirtualLabScreenView from './view/CircuitConstructionKitAcVirtualLabScreenView.js';

class CircuitConstructionKitAcVirtualLabScreen extends Screen {

  /**
   * @param {Tandem} tandem
   */
  constructor( tandem ) {

    const options = {
      //TODO if you include homeScreenIcon or navigationBarIcon, use JOIST/ScreenIcon
      backgroundColorProperty: CircuitConstructionKitAcVirtualLabColorProfile.screenBackgroundColorProperty,
      tandem: tandem
    };

    super(
      () => new CircuitConstructionKitAcVirtualLabModel( tandem.createTandem( 'model' ) ),
      model => new CircuitConstructionKitAcVirtualLabScreenView( model, tandem.createTandem( 'view' ) ),
      options
    );
  }
}

circuitConstructionKitAcVirtualLab.register( 'CircuitConstructionKitAcVirtualLabScreen', CircuitConstructionKitAcVirtualLabScreen );
export default CircuitConstructionKitAcVirtualLabScreen;