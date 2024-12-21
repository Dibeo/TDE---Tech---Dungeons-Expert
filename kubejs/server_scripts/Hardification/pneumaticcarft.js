ServerEvents.recipes((event) => {
  event.replaceInput(
    { output: "pneumaticcraft:compressed_iron_helmet" },
    "minecraft:leather_helmet",
    "minecraft:netherite_helmet"
  );

  event.replaceInput(
    { output: "pneumaticcraft:compressed_iron_chestplate" },
    "minecraft:leather_chestplate",
    "minecraft:netherite_chestplate"
  );

  event.replaceInput(
    { output: "pneumaticcraft:compressed_iron_leggings" },
    "minecraft:leather_leggings",
    "minecraft:netherite_leggings"
  );

  event.replaceInput(
    { output: "pneumaticcraft:compressed_iron_boots" },
    "minecraft:leather_boots",
    "minecraft:netherite_boots"
  );
});
