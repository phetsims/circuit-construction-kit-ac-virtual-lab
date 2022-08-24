// Copyright 2021-2022, University of Colorado Boulder

/**
 * Main entry point for the sim.
 *
 * @author Sam Reid (PhET Interactive Simulations)
 */

import LabScreen from '../../circuit-construction-kit-ac/js/lab/LabScreen.js';
// Image is required for making toDataURLNodeSynchronous work in the built version
import CCKCGeneralPreferencesContentNode from '../../circuit-construction-kit-common/js/view/CCKCGeneralPreferencesContentNode.js';
import PreferencesModel from '../../joist/js/preferences/PreferencesModel.js';
import Sim from '../../joist/js/Sim.js';
import simLauncher from '../../joist/js/simLauncher.js';
import '../../scenery/js/nodes/Image.js';
import soundManager from '../../tambo/js/soundManager.js';
import Tandem from '../../tandem/js/Tandem.js';
import circuitConstructionKitAcVirtualLabStrings from './circuitConstructionKitAcVirtualLabStrings.js';

const circuitConstructionKitAcTitleString = circuitConstructionKitAcVirtualLabStrings[ 'circuit-construction-kit-ac-virtual-lab' ].title;

// constants
const tandem = Tandem.ROOT;

const simOptions = {
  preferencesModel: new PreferencesModel( {
    generalOptions: {
      customPreferences: [ {
        createContent: tandem => new CCKCGeneralPreferencesContentNode( tandem.createTandem( 'cckPreferencesContent' ) )
      } ]
    }
  } ),
  credits: {
    leadDesign: 'Amy Rouinfar',
    softwareDevelopment: 'Sam Reid, Denzell Barnett',
    team: 'Wendy Adams, Michael Dubson, Noah Finkelstein, Chris Keller, Ariel Paul, Kathy Perkins, Carl Wieman',
    qualityAssurance: 'Jaspe Arias, Steele Dalton, Amanda Davis, Alex Dornan, Bryce Griebenow, Clifford Hardin, Ethan Johnson, Brooklyn Lash, Emily Miller, Liam Mulhall, Ben Roberts, Jacob Romero, Nancy Salpepi, Ethan Ward, Kathryn Woessner',
    graphicArts: 'Bryce Gruneich, Mariah Hermsmeyer, Cheryl McCutchan'
  }
};

// launch the sim - beware that scenery Image nodes created outside of simLauncher.launch() will have zero bounds
// until the images are fully loaded, see https://github.com/phetsims/coulombs-law/issues/70
simLauncher.launch( () => {
  const sim = new Sim( circuitConstructionKitAcTitleString, [
    new LabScreen( tandem.createTandem( 'labScreen' ), {
      labScreenViewOptions: {
        showNoncontactAmmeters: false
      }
    } )
  ], simOptions );
  sim.start();

  // turn off common UI sounds until a sound design has been done for this sim
  soundManager.setOutputLevelForCategory( 'user-interface', 0 );
} );