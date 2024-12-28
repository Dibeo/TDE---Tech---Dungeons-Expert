ServerEvents.recipes((event) => {
    event.remove({ id:"industrialforegoing:iron_gear" });
    event.remove({ id:"industrialforegoing:gold_gear" });
    event.remove({ id:"industrialforegoing:diamond_gear" });
    event.remove({ id:"pneumaticcraft:compressed_iron_gear" });
  
    event.custom({
      "neoforge:conditions": [
        {
          type: "neoforge:not",
          value: {
            type: "neoforge:tag_empty",
            tag: "c:gems/diamond",
          },
        },
        {
          type: "neoforge:not",
          value: {
            type: "neoforge:tag_empty",
            tag: "c:gears/diamond",
          },
        },
      ],
      type: "immersiveengineering:metal_press",
      energy: 2400,
      input: {
        basePredicate: {
          tag: "c:gems/diamond",
        },
        count: 4,
      },
      mold: "immersiveengineering:mold_gear",
      result: {
        tag: "c:gears/diamond",
      },
    });
  
    event.custom({
      "neoforge:conditions": [
        {
          type: "neoforge:not",
          value: {
            type: "neoforge:tag_empty",
            tag: "c:ingots/compressed_iron",
          },
        },
        {
          type: "neoforge:not",
          value: {
            type: "neoforge:tag_empty",
            tag: "c:gears/compressed_iron",
          },
        },
      ],
      type: "immersiveengineering:metal_press",
      energy: 2400,
      input: {
        basePredicate: {
          tag: "c:ingots/compressed_iron",
        },
        count: 4,
      },
      mold: "immersiveengineering:mold_gear",
      result: {
        tag: "c:gears/compressed_iron",
      },
    });
  });