// Copyright 2021, University of Colorado Boulder

/**
 * Main entry point for the sim.
 *
 * @author Sam Reid (PhET Interactive Simulations)
 */

import Sim from '../../joist/js/Sim.js';
import simLauncher from '../../joist/js/simLauncher.js';
import Tandem from '../../tandem/js/Tandem.js';
import CircuitConstructionKitAcVirtualLabScreen from './circuit-construction-kit-ac-virtual-lab/CircuitConstructionKitAcVirtualLabScreen.js';
import circuitConstructionKitAcVirtualLabStrings from './circuitConstructionKitAcVirtualLabStrings.js';

const circuitConstructionKitAcVirtualLabTitleString = circuitConstructionKitAcVirtualLabStrings[ 'circuit-construction-kit-ac-virtual-lab' ].title;

const simOptions = {

  //TODO fill in credits, all of these fields are optional, see joist.CreditsNode
  credits: {
    leadDesign: '',
    softwareDevelopment: '',
    team: '',
    qualityAssurance: '',
    graphicArts: '',
    soundDesign: '',
    thanks: ''
  }
};

// launch the sim - beware that scenery Image nodes created outside of simLauncher.launch() will have zero bounds
// until the images are fully loaded, see https://github.com/phetsims/coulombs-law/issues/70
simLauncher.launch( () => {
  const sim = new Sim( circuitConstructionKitAcVirtualLabTitleString, [
    new CircuitConstructionKitAcVirtualLabScreen( Tandem.ROOT.createTandem( 'circuitConstructionKitAcVirtualLabScreen' ) )
  ], simOptions );
  sim.start();
} );