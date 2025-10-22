// 添加锻造台配方，将后2个物品合并成第一个物品
onEvent('recipes',event => {
    event.smithing('gofish:ender_rod', 'gofish:diamond_reinforced_rod', 'gofish:end_crate'),
    event.smithing('gofish:matrix_rod', 'gofish:ender_rod', 'gofish:end_crate'),
    event.smithing('gofish:frosted_rod', 'gofish:diamond_reinforced_rod', 'gofish:frosted_crate'),
    event.smithing('gofish:slime_rod', 'gofish:diamond_reinforced_rod', 'gofish:slimey_crate'),
    event.smithing('gofish:soul_rod', 'gofish:diamond_reinforced_rod', 'gofish:soul_crate'),
    event.smithing('gofish:celestial_rod', 'gofish:diamond_reinforced_rod', 'gofish:astral_crate'),
    event.smithing('gofish:skeletal_rod', 'gofish:diamond_reinforced_rod', 'gofish:fiery_crate'),
    event.shaped('gofish:soul_crate', [
		'BBB',
		'BAB',
		'BBB'
	  ], 
      {
		A: 'gofish:fiery_crate',
        B: "soulsweapons:lost_soul"
	  }),
      event.shaped('gofish:gilded_blackstone_crate', [
		'BBB',
		'BAB',
		'BBB'
	  ], 
      {
		A: 'gofish:fiery_crate',
        B: "adventurez:gilded_stone"
	  })
})
  