onEvent('recipes', event => {
  event.shaped('endrem:cryptic_eye', [
    'BBB',
    'BAB',
    'BBB'
  ],
    {
      A: 'minecraft:ender_eye',
      B: 'xps:xp_dust',
    })
})
onEvent('recipes', event => {
  event.shaped('endrem:cold_eye', [
    'BCB',
    'CAC',
    'BCB'
  ],
    {
      A: 'minecraft:ender_eye',
      B: 'mcda:upgrade_core_frost',
      C: 'victus:icy_heart_aspect',
    })
})
onEvent('recipes', event => {
  event.shaped('endrem:rogue_eye', [
    'BBB',
    'BAB',
    'BBB'
  ],
    {
      A: 'minecraft:ender_eye',
      B: 'mcda:gemstone_red',
    })
})
onEvent('recipes', event => {
  event.shaped('endrem:old_eye', [
    'CBC',
    'BAB',
    'CBC'
  ],
    {
      A: 'minecraft:ender_eye',
      B: 'victus:golden_heart_aspect',
      C: 'mcda:upgrade_core_golden',
    })
})
onEvent('recipes', event => {
  event.shaped('endrem:undead_eye', [
    'CDC',
    'BAB',
    'CDC'
  ],
    {
      A: 'minecraft:ender_eye',
      B: 'mcda:upgrade_core_wither',
      C: 'mcda:upgrade_core_soul',
      D: 'mcda:glut_charm',
    })
})
onEvent('recipes', event => {
  event.shaped('endrem:guardian_eye', [
    'CDC',
    'BAB',
    'EDE'
  ],
    {
      A: 'minecraft:ender_eye',
      B: 'mythicmetals:aquarium_pearl',
      C: 'minecraft:heart_of_the_sea',
      D: 'minecraft:trident',
      E: 'mcda:upgrade_core_oceanic',
    })
})
onEvent('recipes', event => {
  event.shaped('minecraft:dragon_egg', [
    ' B ',
    'BAB',
    ' B '
  ],
    {
      A: 'victus:draconic_heart_aspect',
      B: 'dragonloot:dragon_scale',
    })
})