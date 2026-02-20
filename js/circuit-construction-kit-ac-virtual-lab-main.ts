// Copyright 2021-2025, University of Colorado Boulder

/**
 * Main entry point for the sim.
 *
 * @author Sam Reid (PhET Interactive Simulations)
 */

import LabScreen from '../../circuit-construction-kit-ac/js/lab/LabScreen.js';
import CCKCConstants from '../../circuit-construction-kit-common/js/CCKCConstants.js';
import CCKCSim from '../../circuit-construction-kit-common/js/view/CCKCSim.js';
import CCKCSimulationPreferencesContentNode from '../../circuit-construction-kit-common/js/view/CCKCSimulationPreferencesContentNode.js';
import PreferencesModel from '../../joist/js/preferences/PreferencesModel.js';
import simLauncher from '../../joist/js/simLauncher.js';
import soundManager from '../../tambo/js/soundManager.js';
import Tandem from '../../tandem/js/Tandem.js';
import CircuitConstructionKitAcVirtualLabStrings from './CircuitConstructionKitAcVirtualLabStrings.js';

const circuitConstructionKitAcTitleStringProperty = CircuitConstructionKitAcVirtualLabStrings[ 'circuit-construction-kit-ac-virtual-lab' ].titleStringProperty;

// constants
const tandem = Tandem.ROOT;

// launch the sim - beware that scenery Image nodes created outside of simLauncher.launch() will have zero bounds
// until the images are fully loaded, see https://github.com/phetsims/coulombs-law/issues/70
simLauncher.launch( () => {
  const sim = new CCKCSim( circuitConstructionKitAcTitleStringProperty, [
    new LabScreen( tandem.createTandem( 'labScreen' ), false )
  ], {
    preferencesModel: new PreferencesModel( {
      simulationOptions: {
        customPreferences: [ {
          createContent: tandem => new CCKCSimulationPreferencesContentNode( tandem )
        } ]
      }
    } ),
    credits: CCKCConstants.CREDITS
  } );
  sim.start();

  // turn off common UI sounds until a sound design has been done for this sim
  soundManager.setOutputLevelForCategory( 'user-interface', 0 );
} );