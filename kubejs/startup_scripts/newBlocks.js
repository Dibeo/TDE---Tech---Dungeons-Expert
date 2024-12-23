StartupEvents.registry("block", (event) => {
  event
    .create("constanite_block")
    .lightLevel(0.5)
    .fullBlock(true)
    .requiresTool(true)
    //.soundType('netherite_block')
    .texture("kubejs:block/constanite_block")
    .tag("minecraft:beacon_base_blocks");
});
