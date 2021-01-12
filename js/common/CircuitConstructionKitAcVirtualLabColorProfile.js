// Copyright 2021, University of Colorado Boulder

/**
 * CircuitConstructionKitAcVirtualLabColorProfile defines the color profile for this sim.
 *
 * @author Chris Malley (PixelZoom, Inc.)
 */

import ColorProfile from '../../../scenery-phet/js/ColorProfile.js';
import circuitConstructionKitAcVirtualLab from '../circuitConstructionKitAcVirtualLab.js';

const CircuitConstructionKitAcVirtualLabColorProfile = new ColorProfile( [ 'default' ], {

  // Background color that for screens in this sim
  screenBackgroundColor: {
    default: 'white'
  }
} );

circuitConstructionKitAcVirtualLab.register( 'CircuitConstructionKitAcVirtualLabColorProfile', CircuitConstructionKitAcVirtualLabColorProfile );
export default CircuitConstructionKitAcVirtualLabColorProfile;