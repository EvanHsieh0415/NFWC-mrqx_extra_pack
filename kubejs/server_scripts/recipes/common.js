ServerEvents.recipes(event => {
    event.remove({ mod: 'nameless_trinkets' })
    event.remove({ mod: 'somebosses' })
    event.remove({ output: 'supplementaries:candy' })
    event.shaped('minecraft:elytra', [
        ['', 'alexsmobs:banana_slug_slime', ''],
        ['minecraft:phantom_membrane', 'createaddition:gold_wire', 'minecraft:phantom_membrane'],
        ['', 'alexsmobs:banana_slug_slime', '']
    ])

    event.shapeless('summoningrituals:altar', ['minecraft:wither_skeleton_skull', '#hexerei:candles', '#hexerei:candles', '#hexerei:candles', 'createaddition:electrum_sheet', 'minecraft:lectern'])

    event.shaped('irons_spellbooks:copper_spell_book', [
        ['kubejs:stardust_fragment', 'kubejs:stardust_fragment', 'kubejs:stardust_fragment'],
        ['kubejs:stardust_fragment', '#kubejs:isb_spell_book', 'kubejs:stardust_fragment'],
        ['kubejs:stardust_fragment', 'kubejs:stardust_fragment', 'kubejs:stardust_fragment']])
        .modifyResult((grid, stack) => {
            let spellBook = grid.find('#kubejs:isb_spell_book', 0)
            if (spellBook.nbt.ISB_spellbook.getInt('starLightEnhance') == 1) {
                return null;
            }
            spellBook.nbt.ISB_spellbook.putInt('spellSlots', spellBook.nbt.ISB_spellbook.getInt('spellSlots') + 2)
            spellBook.nbt.ISB_spellbook.putInt('starLightEnhance', 1)
            stack = spellBook
            return stack;
        });

    event.shaped('irons_spellbooks:scroll', [
        ['kubejs:stardust_fragment', 'kubejs:stardust_fragment', 'kubejs:stardust_fragment'],
        ['kubejs:stardust_fragment', 'irons_spellbooks:scroll', 'kubejs:stardust_fragment'],
        ['kubejs:stardust_fragment', 'kubejs:stardust_fragment', 'kubejs:stardust_fragment']])
        .modifyResult((grid, stack) => {
            let spellBook = grid.find('irons_spellbooks:scroll', 0)
            spellBook.nbt.ISB_spell.putInt('level', spellBook.nbt.ISB_spell.getInt('level') + 1)
            stack = spellBook
            return stack;
        });

    event.shapeless('kubejs:infinity_force', ['kubejs:infinity_force', 'kubejs:infinity_force'])
        .modifyResult((grid, stack) => {
            let item_1 = grid.find('kubejs:infinity_force', 0)
            let item_2 = grid.find('kubejs:infinity_force', 1)
            if ((item_1.nbt?.forgeTimes ?? 0) == (item_2.nbt?.forgeTimes ?? 0)) {
                let forgeTimes = item_1.nbt?.forgeTimes ?? 0
                stack = Item.of('kubejs:infinity_force', { forgeTimes: forgeTimes + 1 })
                return stack;
            }
            return null;
        });
})