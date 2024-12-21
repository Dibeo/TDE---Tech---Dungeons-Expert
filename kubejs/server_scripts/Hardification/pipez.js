ServerEvents.recipes((event) => {
  event.replaceInput(
    { mod: "pipez" },
    "#c:ingots/iron",
    "immersiveengineering:plate_iron"
  );

  event.replaceInput(
    { output: "pipez:basic_upgrade" },
    "#c:plates/iron",
    "industrialforegoing:iron_gear"
  );

  event.replaceInput(
    { mod: "pipez" },
    "#c:ingots/gold",
    "industrialforegoing:gold_gear"
  );

  event.replaceInput(
    { mod: "pipez" },
    "#c:gems/diamond",
    "industrialforegoing:diamond_gear"
  );

  event.replaceInput(
    { mod: "pipez" },
    "#c:dusts/redstone",
    "actuallyadditions:restonia_crystal"
  );

  event.replaceInput(
    { mod: "pipez" },
    "#c:storage_blocks/redstone",
    "actuallyadditions:empowered_restonia_crystal_block"
  );

  event.replaceInput(
    { output: "pipez:advanced_upgrade" },
    "actuallyadditions:empowered_restonia_crystal_block",
    "actuallyadditions:restonia_crystal_block"
  );

  event.replaceInput(
    { output: "pipez:energy_pipe" },
    "actuallyadditions:empowered_restonia_crystal_block",
    "actuallyadditions:restonia_crystal_block"
  );

  event.replaceInput(
    { mod: "pipez" },
    "#c:nuggets/iron",
    "actuallyadditions:enori_crystal_shard"
  );

  event.replaceInput(
    { output: "pipez:universal_pipe" },
    "#c:plates/iron",
    "pipez:gas_pipe"
  );
});
