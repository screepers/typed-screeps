// StructureLab

{
    const lab0 = Game.getObjectById<StructureLab>("lab0");
    const lab1 = Game.getObjectById<StructureLab>("lab1");
    const lab2 = Game.getObjectById<StructureLab>("lab2");
    if (lab0 !== null && lab1 !== null && lab2 !== null) {
        if (lab1.mineralAmount >= LAB_REACTION_AMOUNT && lab2.mineralAmount >= LAB_REACTION_AMOUNT && lab0.mineralType === null) {
            lab0.runReaction(lab1, lab2); // $ExpectType ScreepsReturnCode
        }
        // nevermind, reverse that
        lab0.reverseReaction(lab1, lab2); // $ExpectType ScreepsReturnCode
    }
}
