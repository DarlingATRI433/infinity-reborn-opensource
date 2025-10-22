onEvent('player.logged_in', event => {

    if (!event.player.stages.has('difficulty_normal') && !event.player.stages.has('difficulty_easy') && !event.player.stages.has('difficulty_hard') && !event.player.stages.has('difficulty_impossible')) {

        event.player.stages.add('difficulty_easy')

    }
})

onEvent('entity.hurt', event => {
    let target = event.getEntity()
    let source = event.getSource().getActual()
    let damage = event.getDamage()
    let entity = event.getSource().getImmediate()

    //event.server.runCommand(`say ${event.getSource().getType()}`)

    if (target.player) {
        let offItem = target.getHeldItem(OFF_HAND).getId()
        let armor_result = event.server.runCommandSilent(`attribute ${target.id} minecraft:generic.armor get`)
        let armor_toughness_result = event.server.runCommandSilent(`attribute ${target.id} minecraft:generic.armor_toughness get`)
        //event.server.runCommand(`say ${armor_result}`)
        if (target.stages.has('difficulty_easy')) {
            if (source != null && (source.type == "minecraft:ender_dragon" || source.type == "minecraft:wither")) {
                if (entity != null && !entity.living) {

                    entity.kill()
                    damage_new = damage
                    if (offItem.indexOf("shield") >= 0) damage_new = damage_new / 2
                    target.attack(damage_new * (1 - Math.min(20, Math.max(armor_result / 5, armor_result - damage_new / (2 + armor_toughness_result / 4))) / 25))
                }
            }
        }
        else if (target.stages.has('difficulty_normal')) {
            if (source != null && (source.type == "minecraft:ender_dragon" || source.type == "minecraft:wither")) {
                //玩家受到的生物伤害额外增加20%
                //event.cancel()
                //target.attack(damage*1.1)
                if (entity != null && !entity.living) {

                    //event.cancel()
                    entity.kill()
                    damage_new = damage * 1.2
                    if (offItem.indexOf("shield") >= 0) damage_new = damage_new / 2
                    target.attack(damage_new * (1 - Math.min(20, Math.max(armor_result / 5, armor_result - damage_new / (2 + armor_toughness_result / 4))) / 25))
                }
            }
        }
        else if (target.stages.has('difficulty_hard')) {
            if (source != null && (source.type == "minecraft:ender_dragon" || source.type == "minecraft:wither")) {
                //玩家受到的生物伤害额外增加30%
                //event.cancel()
                //target.attack(damage*1.2)
                if (entity != null && !entity.living) {

                    //event.cancel()
                    entity.kill()
                    damage_new = damage * 1.3
                    if (offItem.indexOf("shield") >= 0) damage_new = damage_new / 2
                    target.attack(damage_new * (1 - Math.min(20, Math.max(armor_result / 5, armor_result - damage_new / (2 + armor_toughness_result / 4))) / 25))
                }
            }
        }
        else if (target.stages.has('difficulty_impossible')) {
            if (source != null && (source.type == "minecraft:ender_dragon" || source.type == "minecraft:wither")) {
                //玩家受到的生物伤害额外增加80%
                if (entity != null && !entity.living) {
                    //event.cancel()
                    entity.kill()
                    damage_new = damage * 1.8
                    if (offItem.indexOf("shield") >= 0) damage_new = damage_new / 2
                    target.attack(damage_new * (1 - Math.min(20, Math.max(armor_result / 5, armor_result - damage_new / (2 + armor_toughness_result / 4))) / 25))
                }
            }
        }
        else if (target.stages.has('difficulty_impossibleplus')) {
            if (source != null && (source.type == "minecraft:ender_dragon" || source.type == "minecraft:wither")) {
                //玩家受到的生物伤害额外增加150%
                if (entity != null && !entity.living) {
                    //event.cancel()
                    entity.kill()
                    damage_new = damage * 2.5
                    if (offItem.indexOf("shield") >= 0) damage_new = damage_new / 2
                    target.attack(damage_new * (1 - Math.min(20, Math.max(armor_result / 5, armor_result - damage_new / (2 + armor_toughness_result / 4))) / 25))
                }
            }
        }
    }

})

onEvent('entity.hurt', event => {
    let target = event.getEntity()
    let player = event.getSource().getPlayer()
    let damage = event.getDamage()
    if (player != null) {
        if (player.stages.has('difficulty_normal')) {
            //生物在未满血的状态下受到的玩家伤害减少20%
            target.heal(damage * 0.2)
        }
        else if (player.stages.has('difficulty_hard')) {
            //生物在未满血的状态下受到的玩家伤害减少30%
            target.heal(damage * 0.3)
        }
        else if (player.stages.has('difficulty_impossible')) {
            //生物在未满血的状态下受到的玩家伤害减少50%
            target.heal(damage * 0.5)
            
        }
        else if (player.stages.has('difficulty_impossibleplus')) {
            //生物在未满血的状态下受到的玩家伤害减少70%
            target.heal(damage * 0.7)
            
        }
    }
})

onEvent('recipes', event => {
    event.shapeless('kubejs:difficulty_changer', ['minecraft:clock'])
  })

onEvent('item.right_click', event => {
    if (event.player.getHeldItem(MAIN_HAND) == 'kubejs:difficulty_changer') {
        if (event.player.getHeldItem(OFF_HAND) != null) {
            event.server.runCommandSilent(`title ${event.player.name} actionbar {"text":"你无法在副手持有物品时使用该物品","color":"red"}`)
        }
        else {
            if (event.player.stages.has('difficulty_easy')) {
                event.player.stages.remove('difficulty_easy')
                event.player.stages.remove('difficulty_normal')
                event.player.stages.remove('difficulty_hard')
                event.player.stages.remove('difficulty_impossible')
                event.player.stages.add('difficulty_normal')
                event.player.playSound('minecraft:entity.arrow.hit_player')
                event.server.runCommand(`title ${event.player.name} actionbar {"text":"当前难度：经典","color":"yellow"}`)
                event.player.tell("当前难度：§e经典")
            }
            else if (event.player.stages.has('difficulty_normal')) {
                event.player.stages.remove('difficulty_easy')
                event.player.stages.remove('difficulty_normal')
                event.player.stages.remove('difficulty_hard')
                event.player.stages.remove('difficulty_impossible')
                event.player.stages.add('difficulty_hard')
                event.player.playSound('minecraft:entity.arrow.hit_player')
                event.server.runCommandSilent(`title ${event.player.name} actionbar {"text":"当前难度：专家","color":"red"}`)
                event.player.tell("当前难度：§c专家")
            }
            else if (event.player.stages.has('difficulty_hard')) {
                event.player.stages.remove('difficulty_easy')
                event.player.stages.remove('difficulty_normal')
                event.player.stages.remove('difficulty_hard')
                event.player.stages.remove('difficulty_impossible')
                event.player.stages.add('difficulty_impossible')
                event.player.playSound('minecraft:entity.arrow.hit_player')
                event.server.runCommandSilent(`title ${event.player.name} actionbar {"text":"当前难度：大师","color":"dark_red"}`)
                event.player.tell("当前难度：§4大师")
            }
            else if (event.player.stages.has('difficulty_impossible')) {
                event.player.stages.remove('difficulty_easy')
                event.player.stages.remove('difficulty_normal')
                event.player.stages.remove('difficulty_hard')
                event.player.stages.remove('difficulty_impossible')
                event.player.stages.remove('difficulty_impossibleplus')
                event.player.stages.add('difficulty_impossibleplus')
                event.player.playSound('minecraft:entity.arrow.hit_player')
                event.server.runCommandSilent(`title ${event.player.name} actionbar {"text":"当前难度：死亡","color":"dark_red"}`)
                event.player.tell("当前难度：§4死亡")
            }
            else if (event.player.stages.has('difficulty_impossibleplus')) {
                event.player.stages.remove('difficulty_easy')
                event.player.stages.remove('difficulty_normal')
                event.player.stages.remove('difficulty_hard')
                event.player.stages.remove('difficulty_impossible')
                event.player.stages.remove('difficulty_impossibleplus')
                event.player.stages.add('difficulty_easy')
                event.player.playSound('minecraft:entity.arrow.hit_player')
                event.server.runCommandSilent(`title ${event.player.name} actionbar {"text":"当前难度：旅途","color":"green"}`)
                event.player.tell("当前难度：§a旅途")
            }
            else {
                event.player.stages.remove('difficulty_easy')
                event.player.stages.remove('difficulty_normal')
                event.player.stages.remove('difficulty_hard')
                event.player.stages.remove('difficulty_impossible')
                event.player.stages.remove('difficulty_impossibleplus')
                event.player.stages.add('difficulty_easy')
                event.player.playSound('minecraft:entity.arrow.hit_player')
                event.server.runCommandSilent(`title ${event.player.name} actionbar {"text":"当前难度：旅途","color":"green"}`)
                event.player.tell("当前难度：§a旅途")
            }
        }
    }
})

//概率事件

function randomNum(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

onEvent('entity.hurt', event => {
    let target = event.getEntity()
    let player = event.getSource().getPlayer()
    let source = event.getSource().getActual()
    let damage = event.getDamage()
    if (player != null) {
        if (target.monster && !target.tags.contains('attacked')) {
            //event.server.runCommand(`say ${result}`)
            let result = event.server.runCommandSilent(`attribute ${target.id} minecraft:generic.armor base get`)
            if (player.stages.has('difficulty_impossibleplus')) {
                if(result>=16){
                event.server.runCommandSilent(`attribute ${target.id} minecraft:generic.armor base set ${result - result * 0.1}`)
                }
                else if(result<=0){
                    event.server.runCommandSilent(`attribute ${target.id} minecraft:generic.armor base set ${result + 15}`)
                }
                else if(result<=16){
                    event.server.runCommandSilent(`attribute ${target.id} minecraft:generic.armor base set ${result + (15-result)}`)
                }
            }
        }
    }
    if (target.player) {
        if (source != null && source.monster && !source.tags.contains('attacked')) {
            //护甲值
            let result = event.server.runCommandSilent(`attribute ${target.id} minecraft:generic.armor base get`)
            if (player.stages.has('difficulty_impossibleplus')) {
                if(result>=16){
                event.server.runCommandSilent(`attribute ${target.id} minecraft:generic.armor base set ${result - result * 0.1}`)
                }
                else if(result<=0){
                    event.server.runCommandSilent(`attribute ${target.id} minecraft:generic.armor base set ${result + 15}`)
                }
                else if(result<=16){
                    event.server.runCommandSilent(`attribute ${target.id} minecraft:generic.armor base set ${result + (15-result)}`)
                }
            }
        }
    }
})



/*onEvent('item.right_click', event => {
    if (event.player.getHeldItem(MAIN_HAND) == 'minecraft:diamond')
    {
        n = randomNum(1,3)
        if(n==1) event.server.runCommand(`say 1`)
        else if(n==2) event.server.runCommand(`say 2`)
        else if(n==3) event.server.runCommand(`say 3`)
    }
})*/

