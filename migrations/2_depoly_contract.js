const MOI = artifacts.require( "MOI.sol" );

module.exports = function ( deployer )
{
    // Use deployer to state migration tasks.
    deployer.deploy( MOI, "100000000000000000000000000", "MOI", "MOI" );
};
