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
      "#c:dusts/redstone",
      "actuallyadditions:restonia_crystal"
    );
  
    event.replaceInput(
      { output: "mekanism:metallurgic_infuser" },
      "#c:ingots/osmium",
      "industrialforegoing:machine_frame_advanced"
    );
  });
  