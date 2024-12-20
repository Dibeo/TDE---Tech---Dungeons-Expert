// Unification
ServerEvents.recipes((event) => {
  function unify(old_item, new_item) {
    event.replaceInput({ input: old_item }, old_item, new_item);
    event.replaceOutput({ output: old_item }, old_item, new_item);
  }

  unify("samurai_dynasty:steel_block", "immersiveengineering:block_steel");

  event.remove({ output: "#c:gears", type: "minecraft:crafting" });

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
