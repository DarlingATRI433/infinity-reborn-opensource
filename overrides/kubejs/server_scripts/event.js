function randomNum(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}


onEvent('player.logged_in', event => {
    if (!event.player.stages.has('starting_items') && event.player.profile.name == "moyuguguji") {
        event.player.stages.add('starting_items')
        event.player.give('kubejs:zhongzi')
        event.player.give('minecraft:stone_sword')
        event.player.give('minecraft:leather_helmet')
        event.player.give('minecraft:leather_chestplate')
        event.player.give('minecraft:leather_leggings')
        event.player.give('minecraft:leather_boots')
        event.player.give('minerslunchbox:lunchbox')
    }
    if (!event.player.stages.has('starting_items') && event.player.profile.name == "Anti_Yv") {
        event.player.stages.add('starting_items')
        event.player.give('kubejs:putong_stone_sword')
        event.player.give('minecraft:leather_helmet')
        event.player.give('minecraft:leather_chestplate')
        event.player.give('minecraft:leather_leggings')
        event.player.give('minecraft:leather_boots')
        event.player.give('minerslunchbox:lunchbox')
    }
    if (!event.player.stages.has('starting_items') && event.player.profile.name == "Shu_Zhix") {
        event.player.stages.add('starting_items')
        event.player.give('kubejs:nature_spirit')
        event.player.give('minecraft:leather_helmet')
        event.player.give('minecraft:leather_chestplate')
        event.player.give('minecraft:leather_leggings')
        event.player.give('minecraft:leather_boots')
        event.player.give('minerslunchbox:lunchbox')
    }
    if (!event.player.stages.has('starting_items')) {
        event.player.stages.add('starting_items')
        event.player.give('minecraft:stone_sword')
        event.player.give('minecraft:leather_helmet')
        event.player.give('minecraft:leather_chestplate')
        event.player.give('minecraft:leather_leggings')
        event.player.give('minecraft:leather_boots')
        event.player.give('minerslunchbox:lunchbox')
    }
})

//doo
onEvent('player.tick', event => {
    if (event.player.getHeldItem(MAIN_HAND) == 'kubejs:ruoshui_sword') {
        if (event.player.crouching) {
            //海之屏障-潜行时给予抗性2
            event.server.runCommandSilent(`effect give ${event.player.id} minecraft:resistance 1 1 true`)
        }
        if (event.player.attackingEntity != null) {
            //冰之霜寒-战斗时冻结攻击你的目标
            event.server.runCommandSilent(`effect give ${event.player.attackingEntity.id} minecraft:slowness 3 9 true`)
        }
        //水之净化-立刻熄灭你身上的火焰
        event.player.extinguish()

        //河之湍急-处于战斗状态时获得速度效果
        if (event.player.lastAttackedEntity != null && event.player.lastAttackedEntity.attackingEntity != null) {
            event.server.runCommandSilent(`effect give ${event.player.id} minecraft:speed 1 0`)
        }

    }
})

onEvent('item.right_click', event => {
    if (event.player.getHeldItem(MAIN_HAND) == 'kubejs:ruoshui_sword') {
        if (event.player.crouching) {
            //泉之治愈-潜行使用恢复最大生命值的一半，冷却时间15秒
            event.player.heal(event.player.maxHealth / 2)
            event.player.addItemCooldown('kubejs:ruoshui_sword', 300)
        }
        else {
            //汽之呼吸-右键使用获得15秒水下呼吸，冷却时间20秒
            event.server.runCommandSilent(`effect give ${event.player.id} minecraft:water_breathing 15 0 true`)
            event.player.addItemCooldown('kubejs:ruoshui_sword', 400)
        }
    }

})

//Infinity
onEvent('entity.hurt', event => {
    let target = event.getEntity()
    let player = event.getSource().getPlayer()

    let mainItem
    let offItem
    if (player != null) {
        mainItem = player.getHeldItem(MAIN_HAND)
        offItem = player.getHeldItem(OFF_HAND)
    }
    if (mainItem == 'kubejs:infinity_sword') {
        if (player.crouching) {
            target.kill()
        }
    }
})



onEvent('player.tick', event => {
    let player = event.player
    let mainItem = player.getHeldItem(MAIN_HAND)
    if (mainItem == 'kubejs:infinity_sword') {
        event.server.runCommandSilent(`effect give ${event.player.id} minecraft:resistance 1 4 true`)
    }
})

//剑柄
onEvent('player.tick', event => {
    let player = event.player
    let mainItem = player.getHeldItem(MAIN_HAND)
    if (mainItem == 'kubejs:infinity_sword_a') {
        event.server.runCommandSilent(`effect give ${event.player.id} minecraft:resistance 1 4 true`)
    }
})

//剑刃
onEvent('player.tick', event => {
    let player = event.player
    let mainItem = player.getHeldItem(MAIN_HAND)

    if (mainItem == 'kubejs:infinity_sword_b') {
        player.potionEffects.add('minecraft:instant_damage', 1, 0, false, false)
    }

})


//野草
onEvent('item.right_click', event => {
    if (event.player.getHeldItem(MAIN_HAND) == 'kubejs:yecao_sword') {
        if (event.player.getHeldItem(OFF_HAND) != null) {
            event.server.runCommandSilent(`title @p actionbar {"text":"你无法在副手持有物品时使用该物品","color":"white"}`)
        }
        else {
            let player = event.player
            //右键使用获得5秒抗性5生命恢复5，冷却时间10秒
            event.player.potionEffects.add('minecraft:regeneration', 100, 4, false, false)
            event.player.potionEffects.add('minecraft:resistance', 100, 4, false, false)
            event.player.addItemCooldown('kubejs:yecao_sword', 200)
        }
    }

})

onEvent('player.tick', event => {
    let player = event.player
    let mainItem = player.getHeldItem(MAIN_HAND)

    if (mainItem == 'kubejs:yecao_sword') {
        player.potionEffects.add('minecraft:fire_resistance', 20, 0, false, false)
        //event.server.runCommand(`say ${event.level.getBlock(player.getX()-1,player.getY()-1,player.getZ()-1).getId()}`)
        if (event.level.getBlock(player.getX() - 1, player.getY() - 1, player.getZ() - 1) == 'minecraft:grass_block') {
            player.potionEffects.add('minecraft:speed', 20, 3, false, false)
        }
        if (player.crouching) {
            player.potionEffects.add('minecraft:saturation', 20, 3, false, false)
        }
    }

})

//石剑?

onEvent('item.right_click', event => {
    if (event.player.getHeldItem(MAIN_HAND) == 'kubejs:putong_stone_sword') {
        if (event.player.getHeldItem(OFF_HAND) != null) {
            event.server.runCommandSilent(`title @p actionbar {"text":"你无法在副手持有物品时使用该物品","color":"white"}`)
        }
        else {
            let player = event.player
            //右键使用获得30秒抗性5，冷却时间600秒
            event.player.potionEffects.add('minecraft:resistance', 600, 4, false, false)
            event.player.addItemCooldown('kubejs:putong_stone_sword', 12000)
        }
    }

})


//七星剑
onEvent('entity.death', event => {
    let entity = event.getEntity()
    let player = event.getSource().getPlayer()
    if (player != null) {
        if (player.getHeldItem(MAIN_HAND) == 'kubejs:qixing_sword') {
            player.potionEffects.add('minecraft:absorption', 200, 3, false, false)
            let chance = randomNum(1, 2)
            if (chance == 1) {
                if (entity.type == 'minecraft:creeper') {
                    player.give('minecraft:creeper_head')
                }
                if (entity.player) {
                    event.server.runCommandSilent(`give ${player.name} minecraft:player_head{SkullOwner:"${entity.name}"} 1`)
                }
                if (entity.type == 'minecraft:zombie') {
                    player.give('minecraft:zombie_head')
                }
                if (entity.type == 'minecraft:skeleton') {
                    player.give('minecraft:skeleton_skull')
                }
                if (entity.type == 'minecraft:wither_skeleton') {
                    player.give('minecraft:wither_skeleton_skull')
                }
                if (entity.type == 'minecraft:ender_dragon') {
                    player.give('minecraft:dragon_head')
                }
            }

        }
    }
})

onEvent('player.tick', event => {
    let player = event.player
    let mainItem = player.getHeldItem(MAIN_HAND)
    if (mainItem == 'kubejs:qixing_sword') {
        event.server.runCommandSilent(`effect give ${event.player.id} minecraft:speed 1 2 true`)//速度
        event.server.runCommandSilent(`effect give ${event.player.id} minecraft:resistance 1 1 true`)//抗性提升
    }
})
onEvent('entity.hurt', event => {

    let target = event.getEntity()
    let player = event.getSource().getPlayer()
    let entity = event.getSource().getImmediate()
    let actual = event.getSource().getActual()
    let damage = event.getDamage()
    if (player != null) {
        let mainItem = player.getHeldItem(MAIN_HAND)
        if (mainItem == 'kubejs:qixing_sword') {
            player.heal((damage + target.health * 0.05) * 0.05)
        }
    }

})

//中子灭杀
onEvent('item.right_click', event => {
    if (event.player.getHeldItem(MAIN_HAND) == 'kubejs:zhongzi' || event.player.getHeldItem(OFF_HAND) == 'kubejs:zhongzi') {
        event.server.runCommandSilent(`/kill @e[type=!minecraft:player]`)
        event.player.addItemCooldown('kubejs:zhongzi', 24000)
    }

})

//镐
onEvent('entity.hurt',event =>{
    
    let target = event.getEntity()
    let player = event.getSource().getPlayer()
    let entity = event.getSource().getImmediate()
    let actual = event.getSource().getActual()
    let damage = event.getDamage()
    if(player!=null)
    {
        let mainItem = player.getHeldItem(MAIN_HAND)
        if (mainItem == 'kubejs:nature_spirit')
        {
            target.potionEffects.add('minecraft:slowness',40,9)
            target.potionEffects.add('soulsweapons:bleed',80,6)
        }
    }
})
onEvent('player.tick', event => {
    let player = event.player
    let mainItem = player.getHeldItem(MAIN_HAND)

    if (mainItem == 'kubejs:nature_spirit')
    {
        player.potionEffects.add('minecraft:night_vision',240,0,false,false)
        player.potionEffects.add('minecraft:haste',20,1,false,false)
    }
})
onEvent('block.break', event => {
    let player = event.player
    let mainItem = player.getHeldItem(MAIN_HAND)

    if (mainItem == 'kubejs:nature_spirit')
    {
        event.player.heal(1)
        event.player.addFood(2,0.5)
    }
})


onEvent('block.right_click', event => {
    if (event.player.getHeldItem(MAIN_HAND) == 'xps:xp_remover') {
        if (event.player.getHeldItem(OFF_HAND) != 'spectrum:knowledge_gem') {

        }
        else {
            event.player.setHeldItem(OFF_HAND,AIR_ITEM)
            event.player.setXpLevel(0)
            event.player.tell(`§c§l你创造的虚空吞噬了你的灵魂`)
            event.player.kill()
        }
    }
})
onEvent('player.tick', event => {
    let player = event.player
    if (event.player.getHeldItem(MAIN_HAND) == 'spectrum:knowledge_gem' || event.player.getHeldItem(OFF_HAND) == 'spectrum:knowledge_gem') {
        if (event.level.getBlock(player.getX() - 1, player.getY() - 1, player.getZ() - 1) == 'kibe:tank') {
            event.server.runCommandSilent(`clear @p spectrum:knowledge_gem`)
            event.player.setXpLevel(0)
            event.player.kill()
            event.player.tell(`§c§l你脆弱的身体无法担当中继器`)
        }
    }



})

    