ServerEvents.recipes((event) => {
  event.replaceInput({output : "industrialforegoing:machine_frame_pity"}, 
    "#minecraft:logs",
    "immersiveengineering:treated_wood_horizontal"
  );

  ["iron", "copper", "gold", "silver"].map((type) => {
    event.replaceInput(
      { mod: "industrialforegoing" },
      `#c:ingots/${type}`,
      `#c:plates/${type}`
    );
  });
});
