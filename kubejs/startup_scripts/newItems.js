// Listen to item registry event
StartupEvents.registry("item", (event) => {
  // You can chain builder methods as much as you like
  event
    .create("constanite_ingot")
    .maxStackSize(64)
    .texture("kubejs:item/ingot_constanite")
    .tag("c:ingots")
    .tag("c:ingots/constanite");
});
