<template>
  <div id="clock">
      <span class="time2"> <p class="titulo">Duración de la llamada</p> {{ time }}</span>
  </div>
</template>

<script>
export default {
    name: 'Clock',
    data(){
        return {
            time: '00:00:00',
            timeBegan: null,
            timeStopped: null,
            stoppedDuration: 0,
            started: null,
            running: false
        }
    },
    mounted(){
        this.start();
    },
    methods: {
        start() {
            if(this.running) return;
            
            if (this.timeBegan === null) {
                this.reset();
                this.timeBegan = new Date();
            }

            if (this.timeStopped !== null) {
                this.stoppedDuration += (new Date() - this.timeStopped);
            }

            this.started = setInterval(this.clockRunning, 10);	
            this.running = true;
        },
        stop() {
            this.running = false;
            this.timeStopped = new Date();
            clearInterval(this.started);
        },
        reset() {
            this.running = false;
            clearInterval(this.started);
            this.stoppedDuration = 0;
            this.timeBegan = null;
            this.timeStopped = null;
            this.time = "00:00:00";
        },
        clockRunning(){
            let currentTime = new Date()
            , timeElapsed = new Date(currentTime - this.timeBegan - this.stoppedDuration)
            , hour = timeElapsed.getUTCHours()
            , min = timeElapsed.getUTCMinutes()
            , sec = timeElapsed.getUTCSeconds();

            this.time = 
                this.zeroPrefix(hour, 2) + ":" + 
                this.zeroPrefix(min, 2) + ":" + 
                this.zeroPrefix(sec, 2);
        },
        zeroPrefix(num, digit) {
        var zero = '';
        for(var i = 0; i < digit; i++) {
            zero += '0';
        }
        return (zero + num).slice(-digit);
        }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
    #clock {
        width: 100%;
        height: 100%;
        display: flex;
        justify-content: center;
        margin-bottom: 50px;
    }
    .time2{
        width: 300px;
        height: 80px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        font-size: 20px;
        box-shadow: 0px 4px 4px rgba(0,0,0,0.25);
        font-family: Poppins;
        font-style: normal;
        font-weight: 500;
        line-height: 30px;
    }
    .titulo{
        margin-top: 10px;
    }
</style>
