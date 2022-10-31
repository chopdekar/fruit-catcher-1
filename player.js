class Player {
    constructor() {
        this.name = null;
        this.index = null;
        this.positionX = 0;
        this.positionY =0;
        this.rank = 0 ;
        this.fuel=185;
        this.life=185;
        this.score=0
    }

    getCount() {
        var playerCountRef = database.ref('playerCount');
        playerCountRef.on("value", (data) => {
            playerCount = data.val();
        })
    }

    updateCount(count) {
        database.ref('/').update({
            playerCount: count
        });
    }

    update() {
        var playerIndex = "players/player" + this.index;
        database.ref(playerIndex).set({
            name: this.name,
            distance: this.distance,
            score:this.score
        });
    }

    static getPlayerInfo() {
        var playerInfoRef = database.ref('players');
        playerInfoRef.on("value", (data) => {
            allPlayers = data.val();
        })
    }

    getPlayersAtEnd(){
        database.ref('playersAtEnd').on("value",(data)=>{
            this.rank = data.val();
        })
    }

    

    static updatePlayersAtEnd(rank){
        database.ref("").update({
            playersAtEnd : 0
        })
    }


    
}
