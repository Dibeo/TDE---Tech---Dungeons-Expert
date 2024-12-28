ServerEvents.tags('item', event => {
    const yelloriumItems = event.get('c:ingots/yellorium').getObjectIds();

    yelloriumItems.forEach(item => {
      event.remove('c:ingots/uranium', item.toString());
    });
  });
  