

new Vue({
    el: '#game',
    data: {
        player: 'Matheus',
        npc: 'Monstro',
        life_bar_size: '100',
        playerLife: 100,
        monsterLife: 100,
        status: false,
        logs: []
    },
    // watch: {
    //     playerLife(){
    //         this.gerarLog(this.playerLife);
    //     },
    //     monsterLife(){
    //         this.gerarLog(this.monsterLife);
    //     }
    // },
    methods:{
        ataque(especial){
            this.causarDano('monsterLife', false,'Matheus','Monstro');
            this.causarDano('playerLife', especial,'Monstro','Matheus');
        },
        causarDano(atr, especial, source, target){
            const dano = this.getRandom(especial ? 10 : 20);
            this[atr] = Math.max(this[atr] - dano, 0);
            this.gerarLog(`${source} atingiu ${target} com ${dano}.`);
        },
        getRandom(especial){
            const value = Math.floor(Math.random() * especial);
            return value;
        },
        causarDanoECurar(){
            this.curar('playerLife', 'Matheus');
            this.causarDano('playerLife', false,'Monstro','Matheus');
        },
        curar(atr,source){
            const heal = this.getRandom(20);
            this[atr] = Math.min(this[atr] + heal,100);
            this.gerarLog(`${source} se curou com ${heal}.`);

        },
        reiniciarJogo(){
            this.status = false;
            this.monsterLife = 100;
            this.playerLife = 100;
        },
        gerarLog(text){
            this.logs.push(text);
        }

    }
})