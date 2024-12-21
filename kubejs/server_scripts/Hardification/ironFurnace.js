ServerEvents.recipes((event) => {
  function replace(from, to) {
    event.replaceInput({ mod: "ironfurnaces" }, from, to);
  }

  ["iron", "copper", "gold", "silver"].map((type) => {
    event.replaceInput(
      { mod: "ironfurnaces" },
      `#c:ingots/${type}`,
      `#c:plates/${type}`
    );
  });

  [
    "furnaces/gold_furnace",
    "furnaces/iron_furnace",
    "furnaces/silver_furnace2",
  ].map((craft_id) => event.remove({ id: `ironfurnaces:${craft_id}` }));

  replace("#c:glass_blocks", "pneumaticcraft:pressure_chamber_glass");

  ["upgrade_iron", "upgrade_gold", "upgrade_silver"].map((item) => event.remove({output : `ironfurnaces:${item}`}))
});
