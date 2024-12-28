ServerEvents.recipes((event) => {
  // Mekanism
  event.replaceInput(
    { mod: "mekanism" }, // Arg 1: the filter
    "#c:ingots/steel", // Arg 2: the item to replace
    "immersiveengineering:plate_steel" // Arg 3: the item to replace it with
    // Note: tagged fluid ingredients do not work on Fabric, but tagged items do.
  );

  event.replaceInput(
    { mod: "mekanism" },
    "#c:ingots/iron",
    "immersiveengineering:plate_iron"
  );

  event.replaceInput(
    { mod: "mekanism" },
    "#c:glass_blocks",
    "pneumaticcraft:pressure_chamber_glass"
  );

  event.replaceInput(
    { mod: "mekanism" },
    "#c:dusts/redstone",
    "actuallyadditions:restonia_crystal"
  );

  event.replaceInput(
    { output: "mekanism:metallurgic_infuser" },
    "#c:ingots/osmium",
    "industrialforegoing:machine_frame_advanced"
  );

  event.replaceInput(
    { output: "mekanism:mekasuit_helmet" },
    "minecraft:netherite_helmet",
    "pneumaticcraft:pneumatic_helmet"
  );

  event.replaceInput(
    { output: "mekanism:mekasuit_bodyarmor" },
    "minecraft:netherite_chestplate",
    "pneumaticcraft:pneumatic_chestplate"
  );

  event.replaceInput(
    { output: "mekanism:mekasuit_pants" },
    "minecraft:netherite_leggings",
    "pneumaticcraft:pneumatic_leggings"
  );

  event.replaceInput(
    { output: "mekanism:mekasuit_boots" },
    "minecraft:netherite_boots",
    "pneumaticcraft:pneumatic_boots"
  );

  event.replaceInput(
    { output: "mekanism:teleportation_core" },
    "minecraft:diamond",
    "actuallyadditions:empowered_diamatine_crystal"
  );

  event.replaceInput(
    { output: "mekanism:teleportation_core" },
    "minecraft:gold_ingot",
    "#c:ingots/electrum"
  );

  event.replaceInput(
    { output: "mekanism:teleportation_core" },
    "minecraft:ender_pearl",
    "actuallyadditions:ender_casing"
  );
});
