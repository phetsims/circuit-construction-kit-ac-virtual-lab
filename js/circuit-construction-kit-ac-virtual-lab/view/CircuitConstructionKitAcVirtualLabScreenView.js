// Copyright 2021, University of Colorado Boulder

/**
 * @author Sam Reid (PhET Interactive Simulations)
 */

import ScreenView from '../../../../joist/js/ScreenView.js';
import ResetAllButton from '../../../../scenery-phet/js/buttons/ResetAllButton.js';
import Tandem from '../../../../tandem/js/Tandem.js';
import CircuitConstructionKitAcVirtualLabConstants from '../../common/CircuitConstructionKitAcVirtualLabConstants.js';
import circuitConstructionKitAcVirtualLab from '../../circuitConstructionKitAcVirtualLab.js';
import CircuitConstructionKitAcVirtualLabModel from '../model/CircuitConstructionKitAcVirtualLabModel.js';

class CircuitConstructionKitAcVirtualLabScreenView extends ScreenView {

  /**
   * @param {CircuitConstructionKitAcVirtualLabModel} model
   * @param {Tandem} tandem
   */
  constructor( model, tandem ) {
    assert && assert( model instanceof CircuitConstructionKitAcVirtualLabModel, 'invalid model' );
    assert && assert( tandem instanceof Tandem, 'invalid tandem' );

    super( {
      tandem: tandem
    } );

    const resetAllButton = new ResetAllButton( {
      listener: () => {
        this.interruptSubtreeInput(); // cancel interactions that may be in progress
        model.reset();
        this.reset();
      },
      right: this.layoutBounds.maxX - CircuitConstructionKitAcVirtualLabConstants.SCREEN_VIEW_X_MARGIN,
      bottom: this.layoutBounds.maxY - CircuitConstructionKitAcVirtualLabConstants.SCREEN_VIEW_Y_MARGIN,
      tandem: tandem.createTandem( 'resetAllButton' )
    } );
    this.addChild( resetAllButton );
  }

  /**
   * Resets the view.
   * @public
   */
  reset() {
    //TODO
  }

  /**
   * Steps the view.
   * @param {number} dt - time step, in seconds
   * @public
   */
  step( dt ) {
    //TODO
  }
}

circuitConstructionKitAcVirtualLab.register( 'CircuitConstructionKitAcVirtualLabScreenView', CircuitConstructionKitAcVirtualLabScreenView );
export default CircuitConstructionKitAcVirtualLabScreenView;