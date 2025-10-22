
onEvent('recipes', event => {

  event.custom({
    type: "spectrum:pedestal",
    "time": 400,
    "tier": "basic",
    "cyan": 10,
    "magenta": 10,
    "yellow": 10,
    "white": 0,
    "black": 0,
    "experience": 100,
    "pattern": [
      "AAA",
      "BCD",
      "E F"
    ],
    "key": {
      "A": {
        "item": 'minecraft:honeycomb'
      },
      "B": {
        "item": 'minecraft:diamond'
      },
      "C": {
        "item": 'minecraft:elytra'
      },
      "D": {
        "item": 'adventurez:gilded_netherite_fragment'
      },
      "E": {
        "item": 'mythicmetals:adamantite_ingot'
      },
      "F": {
        "item": 'bosses_of_mass_destruction:ancient_anima'
      }

    },
    "result": {
      "item": 'icarus:flandres_wings',
      "count": 1
    }
  })

  event.custom({
    type: "spectrum:pedestal",
    "time": 200,
    "tier": "basic",
    "cyan": 2,
    "magenta": 0,
    "yellow": 3,
    "white": 0,
    "black": 0,
    "experience": 5,
    "pattern": [
      " AA",
      "CBA",
      "BC "
    ],
    "key": {
      "A": {
        "item": 'minecraft:hay_block'
      },
      "B": {
        "item": 'gateofbabylon:extended_stick'
      },
      "C": {
        "item": 'kubejs:spectral_silt'
      }
    },
    "result": {
      "item": 'majobroom:broom_item',
      "count": 1
    }
  })

  event.custom({
    type: "spectrum:pedestal",
    "time": 400,
    "tier": "basic",
    "cyan": 2,
    "magenta": 2,
    "yellow": 2,
    "white": 0,
    "black": 0,
    "experience": 10,
    "pattern": [
      "ABA",
      "CDC",
      "ABA"
    ],
    "key": {
      "A": {
        "item": 'dragonloot:dragon_scale'
      },
      "B": {
        "item": 'minecraft:elytra'
      },
      "C": {
        "item": 'bosses_of_mass_destruction:ancient_anima'
      },
      "D": {
        "item": 'gobber2:gobber2_ring_ascent'
      }

    },
    "result": {
      "item": 'ringsofascension:ring_flight',
      "count": 1
    }
  })

  event.custom({
    type: "spectrum:pedestal",
    "time": 800,
    "tier": "basic",
    "cyan": 32,
    "magenta": 64,
    "yellow": 32,
    "white": 0,
    "black": 0,
    "experience": 10,
    "pattern": [
      "FDE",
      "CAC",
      "BDB"
    ],
    "key": {
      "A": {
        "item": 'utilities:watch'
      },
      "B": {
        "item": 'minecraft:amethyst_cluster'
      },
      "C": {
        "item": 'botania:rune_mana'
      },
      "D": {
        "item": 'botania:terrasteel_ingot'
      },
      "E": {
        "item": 'spectrum:sparklestone_gem'
      },
      "F": {
        "item": 'minecraft:oak_button'
      }
    },
    "result": {
      "item": 'spectrum:celestial_pocketwatch',
      "count": 1
    }
  })

  event.custom({
    type: "spectrum:fusion_shrine",
    "time": 300,
    "experience": 100.0,
    "ingredients": [
      {
        "item": 'ringsofascension:ring_hungerless',
        "count": 1
      },
      {
        "item": 'gobber2:gobber2_rod',
        "count": 2
      },
      {
        "item": 'mythicmetals:hallowed_ingot',
        "count": 10
      },
      {
        "item": 'kubejs:shenqi_ingot',
        "count": 2
      }
    ],
    "result": {
      "item": 'kubejs:yecao_sword'
    },
    "required_advancement": "spectrum:create_onyx_shard",
    "world_conditions": ["day","CLEAR_SKY"],
    "start_crafting_effect": "nothing",
    "during_crafting_effects": [
      "visual_explosions_on_shrine"
    ],
    "finish_crafting_effect": "lightning_on_shrine",
    "description": "§6§l在一个阳光明媚的清晨茁壮生长"
  })

  event.custom({
    type: "spectrum:fusion_shrine",
    "time": 300,
    "experience": 100.0,
    "fluid": "minecraft:water",
    "ingredients": [
      {
        "item": 'mythicmetals:aquarium_pearl',
        "count": 1
      },
      {
        "item": 'gobber2:gobber2_rod',
        "count": 2
      },
      {
        "item": 'mcda:upgrade_core_frost',
        "count": 5
      },
      {
        "item": 'mythicmetals:aquarium_ingot',
        "count": 20
      },
      {
        "item": 'minecraft:conduit',
        "count": 2
      },
      {
        "item": 'kubejs:shenqi_ingot',
        "count": 3
      }
    ],
    "result": {
      "item": 'kubejs:ruoshui_sword'
    },
    "required_advancement": "spectrum:build_fusion_shrine",
    "world_conditions": ["day","CLEAR_SKY"],
    "start_crafting_effect": "nothing",
    "during_crafting_effects": [
      "visual_explosions_on_shrine"
    ],
    "finish_crafting_effect": "lightning_on_shrine",
    "description": "§3§l来自海洋的力量"
  })

  event.custom({
    type: "spectrum:fusion_shrine",
    "time": 100,
    "experience": 2500.0,
    "fluid": "spectrum:liquid_crystal",
    "ingredients": [
      {
        "item": 'betterend:aeternium_sword_blade',//太古合金剑
        "count": 1
      },
      {
        "item": 'mythicmetals:celestium_block',//天体块
        "count": 5
      },
      {
        "item": 'kubejs:soul_bone',//灵魂之骨
        "count": 1
      },
      {
        "item": 'kubejs:shining_star',//闪耀之星
        "count": 1
      },
      {
        "item": 'gobber2:dragon_star',//龙之星
        "count": 2
      },
      {
        "item": 'spectrum:shooting_star',//流星碎片
        "count": 5
      },
      {
        "item": 'spectrum:lightning_stone',//风暴之石
        "count": 4
      }
    ],
    "result": {
      "item": 'kubejs:infinity_sword_b'
    },
    "required_advancement": "spectrum:build_fusion_shrine",
    "world_conditions": [],
    "start_crafting_effect": "nothing",
    "during_crafting_effects": [
      "visual_explosions_on_shrine"
    ],
    "finish_crafting_effect": "lightning_on_shrine"
  })

  event.custom({
    type: "spectrum:fusion_shrine",
    "time": 300,
    "experience": 2500.0,
    "fluid": "spectrum:liquid_crystal",
    "ingredients": [
      {
        "item": 'soulsweapons:chaos_orb',//混沌珠
        "count": 1
      },
      {
        "item": 'gobber2:dragon_star',//龙之星
        "count": 2
      },
      {
        "item": 'bosses_of_mass_destruction:obsidian_heart',//黑曜石之心
        "count": 1
      },
      {
        "item": 'adventurez:source_stone',//源石
        "count": 1
      },
      {
        "item": 'soulsweapons:essence_of_luminescence',//昏光精粹
        "count": 1
      },
      {
        "item": 'infinity:sculk_core',//幽匿核心
        "count": 1
      },
      {
        "item": 'adventurez:stone_golem_heart',//黑石傀儡之心
        "count": 1
      }
    ],
    "result": {
      "item": 'kubejs:infinity_sword_a'
    },
    "required_advancement": "spectrum:build_fusion_shrine",
    "world_conditions": [],
    "start_crafting_effect": "nothing",
    "during_crafting_effects": [
      "visual_explosions_on_shrine"
    ],
    "finish_crafting_effect": "lightning_on_shrine"
  })
  /*event.custom({
    type: "spectrum:pedestal",
    "time": 600,
    "tier": "basic",
    "cyan": 64,
    "magenta": 64,
    "yellow": 64,
    "white": 0,
    "black": 0,
    "experience": 10,
    "pattern": [
      "AAA",
      "BCB",
      "ADA"
    ],
    "key": {
      "A": {
        "item": 'kubejs:shenqi_ingot'//神器零件
      },
      "B": {
        "item": 'mythicmetals:hallowed_ingot'//神圣锭
      },
      "C": {
        "item": 'ringsofascension:ring_hungerless'//饱腹戒指
      },
      "D": {
        "item": 'gobber2:gobber2_rod'//戈伯棒
      }

    },
    "result": {
      "item": 'kubejs:yecao_sword',
      "count": 1
    }
  })

  event.custom({
    type: "spectrum:pedestal",
    "time": 800,
    "tier": "basic",
    "cyan": 32,
    "magenta": 16,
    "yellow": 16,
    "white": 0,
    "black": 0,
    "experience": 10,
    "pattern": [
      "AAA",
      "CBC",
      "ADA"
    ],
    "key": {
      "A": {
        "item": 'kubejs:shenqi_ingot'//激水珍珠
      },
      "B": {
        "item": 'mythicmetals:aquarium_pearl'//激水珍珠
      },
      "C": {
        "item": 'mcda:upgrade_core_frost'//冰霜水晶升级
      },
      "D": {
        "item": 'gobber2:gobber2_rod'//戈伯棒
      }

    },
    "result": {
      "item": 'kubejs:ruoshui_sword',
      "count": 1
    }
  })


  event.custom({
    type: "spectrum:enchanter",
    "group": "vanilla",
    "time": 1000,
    "required_experience": 10000,
    "ingredients": [
      {
        "item": 'betterend:aeternium_sword_blade'//太古合金剑刃
      },
      {
        "item": 'mythicmetals:celestium_block'//天体块
      },
      {
        "item": 'kubejs:soul_bone'//灵魂之骨
      },
      {
        "item": 'kubejs:shining_star'//闪耀之星
      },
      {
        "item": 'gobber2:dragon_star'//龙之星
      },
      {
        "item": 'betterend:eternal_crystal'//永恒水晶
      },
      {
        "item": 'spectrum:shooting_star'//流星碎片
      },
      {
        "item": 'spectrum:midnight_chip'//午夜残片
      },
      {
        "item": 'spectrum:lightning_stone'//风暴之石
      }
    ],
    "result": {
      "item": 'kubejs:infinity_sword_b',
    },
  })

  event.custom({
    type: "spectrum:enchanter",
    "group": "vanilla",
    "time": 1000,
    "required_experience": 10000,
    "ingredients": [
      {
        "item": 'betterend:aeternium_sword_handle'//太古合金剑柄
      },
      {
        "item": 'soulsweapons:chaos_orb'//混沌珠
      },
      {
        "item": 'spectrum:bedrock_storage_block'//基岩粉块
      },
      {
        "item": 'gobber2:dragon_star'//龙之星
      },
      {
        "item": 'bosses_of_mass_destruction:obsidian_heart'//黑曜石之心
      },
      {
        "item": 'adventurez:source_stone'//源石
      },
      {
        "item": 'soulsweapons:essence_of_luminescence'//昏光精粹
      },
      {
        "item": 'infinity:sculk_core'//幽匿核心
      },
      {
        "item": 'adventurez:stone_golem_heart'//黑石傀儡之心
      }
    ],
    "result": {
      "item": 'kubejs:infinity_sword_a',
    },
  })
  /*event.custom({
    type: "spectrum:enchanter",
    "group": "vanilla",
    "time": 600,
    "required_experience": 10000,
    "ingredients": [
      {
        "item": 'dragonloot:dragon_sword'
      },
      {
        "item": 'mythicmetals:celestium_ingot'
      },
      {
        "item": 'mythicmetals:celestium_ingot'
      },
      {
        "item": 'spectrum:shooting_star'
      },
      {
        "item": 'kubejs:shenqi_ingot'
      },
      {
        "item": 'mythicmetals:star_platinum'
      },
      {
        "item": 'enderscape:nebulite'
      },
      {
        "item": 'minecraft:nether_star'
      },
      {
        "item": 'spectrum:stardust'
      }
    ],
    "result": {
      "item": 'kubejs:qixing_sword',
    },
      })*/
  event.custom({
    type: "spectrum:fusion_shrine",
    "time": 500,
    "experience": 5000.0,
    "fluid": "spectrum:liquid_crystal",
    "ingredients": [
      {
        "item": 'spectrum:shooting_star_gemstone',
        "count": 1
      },
      {
        "item": 'spectrum:shooting_star_colorful',
        "count": 1
      },
      {
        "item": 'spectrum:shooting_star_glistering',
        "count": 1
      },
      {
        "item": 'spectrum:shooting_star_pristine',
        "count": 1
      },
      {
        "item": 'minecraft:nether_star',
        "count": 1
      },
      {
        "item": 'spectrum:stardust',
        "count": 10
      },
      {
        "item": 'kubejs:shenqi_ingot',
        "count": 5
      }
    ],
    "result": {
      "item": 'kubejs:qixing_sword'
    },
    "required_advancement": "spectrum:create_onyx_shard",
    "world_conditions": ["midnight","new_moon"],
    "start_crafting_effect": "nothing",
    "during_crafting_effects": [
      "visual_explosions_on_shrine"
    ],
    "finish_crafting_effect": "lightning_on_shrine",
    "description": "§0新月之时,午夜之刻,以星铸刃"
  })

  event.custom({
    type: "spectrum:pedestal",
    "time": 150,
    "tier": "basic",
    "cyan": 2,
    "magenta": 2,
    "yellow": 2,
    "white": 0,
    "black": 0,
    "experience": 10,
    "pattern": [
      " CA",
      "BDC",
      "EB "
    ],
    "key": {
      "A": {
        "item": 'minecraft:nether_star'
      },
      "B": {
        "item": 'staffofbuilding:netherite_builder_staff'
      },
      "C": {
        "item": 'kubejs:spectral_silt'
      },
      "D": {
        "item": 'bosses_of_mass_destruction:mob_ward'
      },
      "E": {
        "item": 'gateofbabylon:extended_stick'
      }

    },
    "result": {
      "item": 'staffofbuilding:infinite_builder_staff',
      "count": 1
    }
  })

  event.custom({
    type: "spectrum:pedestal",
    "time": 400,
    "tier": "advanced",
    "cyan": 0,
    "magenta": 4,
    "yellow": 0,
    "white": 0,
    "black": 2,
    "experience": 0,
    "pattern": [
      "ABA",
      "CEC",
      "CDC"
    ],
    "key": {
      "A": {
        "item": 'spectrum:scarlet_fragments'
      },
      "B": {
        "item": 'minecraft:lapis_block'
      },
      "C": {
        "item": 'spectrum:polished_basalt'
      },
      "D": {
        "item": 'spectrum:polished_calcite'
      },
      "E": {
        "item": 'botania:gaia_ingot'
      }

    },
    "result": {
      "item": 'spectrum:enchanter',
      "count": 1
    }
  })
})