onEvent('recipes', event => {
  
    event.custom({
      type: "botania:terra_plate",
      "mana": 10000,
      "ingredients": [
        {
          "item": 'soulsweapons:crimson_obsidian'
        },
        {
          "item": 'spirit:soul_powder'
        },
        {
          "item": 'botania:mana_powder'
        },
        {
          "item": 'kibe:cursed_droplets'
        },
        {
          "item": 'kubejs:spectral_silt'
        },
        {
          "item": 'waystones:warp_dust'
        }
      ],
      "result": {
        "item": 'infinity:special_handlingof_glowing_obsidian'
      }

  
  })

  event.custom({
      type: "spectrum:fusion_shrine",
      "group": "horse_armor",
      "time": 200,
      "experience": 1.0,
      "fluid": 'the_bumblezone:honey_fluid_still',
      "ingredients": [
        {
          "item": 'botania:life_essence',
          "count": 2
        },
        {
          "item": 'botania:terrasteel_ingot',
          "count": 1
        }
      ],
      "result": {
        "item": 'botania:gaia_ingot'
      },
      "required_advancement": "spectrum:create_onyx_shard",
      "world_conditions": [],
      "start_crafting_effect": "nothing",
      "during_crafting_effects": [],
      "finish_crafting_effect": "single_visual_explosion_on_shrine"
     })

    event.custom({
      type: "spectrum:fusion_shrine",
      "group": "horse_armor",
      "time": 200,
      "experience": 1.0,
      "fluid": 'the_bumblezone:honey_fluid_still',
      "ingredients": [
        {
          "item": 'botania:life_essence',
          "count": 2
        },
        {
          "item": 'botania:terrasteel_ingot',
          "count": 1
        }
      ],
      "result": {
        "item": 'botania:gaia_ingot'
      },
      "required_advancement": "spectrum:create_onyx_shard",
      "world_conditions": [],
      "start_crafting_effect": "nothing",
      "during_crafting_effects": [],
      "finish_crafting_effect": "single_visual_explosion_on_shrine"
     })

    event.shaped('explorerscompass:explorerscompass', [
          'BAB',
          'ACA',
          'BAB'
        ], {
          A: 'botania:elementium_ingot',
          B: 'botania:mana_string',
          C: 'the_bumblezone:honey_compass'
        })

    event.custom({
      type: "botania:terra_plate",
      "mana": 1000000,
      "ingredients": [
        {
          "item": 'bosses_of_mass_destruction:charged_ender_pearl'
        },
        {
          "item": 'adventurez:prime_eye'
        },
        {
          "item": 'twilightforest:naga_trophy'
        },
        {
          "item": 'twilightforest:lich_trophy'
        },
        {
          "item": 'twilightforest:minoshroom_trophy'
        },
        {
          "item": 'twilightforest:hydra_trophy'
        },
        {
          "item": 'twilightforest:knight_phantom_trophy'
        },
        {
          "item": 'twilightforest:ur_ghast_trophy'
        },
        {
          "item": 'twilightforest:alpha_yeti_trophy'
        },
        {
          "item": 'twilightforest:snow_queen_trophy'
        },
        {
          "item": 'twilightforest:cube_talisman'
        }
      ],
      "result": {
        "item": 'soulsweapons:chaos_orb'
      }
  })

onEvent('recipes', event => {
  event.custom({
    type: "botania:runic_altar",
    "output": {
    "item": 'kubejs:shining_star'
  },
  "mana": 100000,
  "ingredients": [
    {
      "item": 'minecraft:nether_star'
    },
    {
      "item": 'soulsweapons:lord_soul_void'
    },
    {
      "item": 'soulsweapons:lord_soul_rose'
    },
    {
      "item":'soulsweapons:lord_soul_purple'
    },
    {
      "item": 'soulsweapons:lord_soul_dark'
    },
    {
      "item": 'soulsweapons:lord_soul_red'
    },
    {
      "item": 'soulsweapons:lord_soul_white'
    },
    {
      "item": 'gobber2:dragon_star'
    },
    {
      "item": 'mythicmetals:celestium_ingot'
    }
    ]
    })
  })
})

onEvent('recipes', event => {
  event.custom({
    type: "botania:runic_altar",
    "output": {
    "item": 'botania:terra_sword'
  },
  "mana": 100000,
  "ingredients": [
    {
      "item": 'botania:terrasteel_ingot'
    },
    {
      "item": 'botania:terrasteel_ingot'
    },
    {
      "item": 'minecraft:nether_star'
    },
    {
      "item":'gobber2:gobber2_ingot'
    },
    {
      "item":'terrarianslimes:royal_gel'
    },
    {
      "item":'botania:gaia_ingot'
    }
    ]
    })
})
