ServerEvents.recipes((event) => {
  event.shapeless(Item.of("kubejs:constanite_ingot", 9), [
    "kubejs:constanite_block",
  ]);

  event.shapeless(Item.of("kubejs:constanite_block", 1), [
    "9x kubejs:constanite_ingot",
  ]);

  event.custom({
    type: "immersiveengineering:alloy",
    input0: {
      tag: "c:ingots/constantan",
    },
    input1: {
      tag: "c:ingots/inanite",
    },
    result: {
      basePredicate: {
        tag: "c:ingots/constanite",
      },
      count: 2,
    },
  });
});
