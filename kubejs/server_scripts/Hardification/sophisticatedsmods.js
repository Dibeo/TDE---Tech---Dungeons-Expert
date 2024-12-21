ServerEvents.recipes((event) => {
    //Sophisticated mods
    event.replaceInput(
      { output: "sophisticatedstorage:controller" },
      "#minecraft:planks",
      "immersiveengineering:treated_wood_horizontal"
    );

    event.replaceInput(
      { mod: "sophisticatedstorage" },
      "#minecraft:string",
      "#immersiveengineering:toolbox/wiring"
    );
  });
  