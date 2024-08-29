function tseamAccount(arr) {
    let accountSeq = [arr.shift()];
    for (let i = 0; i < arr.length; i++) {
        let command = arr[i].split(` `)[0];
        let gameName = arr[i].split(` `)[1];

        if (command === "Play"){
            break;
        }else if (command==="Install" && accountSeq.includes(gameName)===false){
                accountSeq.push(gameName);
        
        }else if (command === "Update" && accountSeq.includes(gameName)){
               let index = accountSeq.indexOf(gameName);
                accountSeq.splice(index, 1);
                accountSeq.push(gameName)
            

        }else if(command === "Expansion"){
            let expansion  = gameName.split(`-`);
            let game = expansion[0];

            if(accountSeq.includes(game)){
                let expandedGame = expansion.join(`:`);
                let index = gameName.indexOf(game);
                gameName.splice(index+1, 0, expandedGame)
            }
        }
        
    }
    console.log(accountSeq.join(` `));


}
tseamAccount(['CS WoW Diablo', 'Install LoL', 'Uninstall WoW', 'Update Diablo', 'Expansion CS-Go', 'Play!']);
