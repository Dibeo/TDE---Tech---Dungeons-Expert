ServerEvents.recipes((event) => {
    //Sophisticated mods
    event.replaceInput(
      { mod: "sophisticatedstorage" },
      "minecraft:string",
      "#immersiveengineering:toolbox/wiring"
    );
    event.replaceInput(
      { mod: "sophisticatedbackpacks" },
      "minecraft:string",
      "#immersiveengineering:toolbox/wiring"
    );
  });
  