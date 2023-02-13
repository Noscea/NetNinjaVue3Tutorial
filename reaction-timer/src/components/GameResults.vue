<template>
<div>
    <p class="results">Reaction Time : {{ result }} ms</p>
    <p class="rank">{{rank}}</p>
</div>
</template>

<script>
export default {
    name:"GameResults",
    props : ['result'],
    data() {
        return {
            rank:null
        }
    },
    mounted() {
        if (this.result < 250) {
            this.rank = 'Ninja Fingers'
        } else  if (this.result < 400) {
            this.rank = 'Rapid Reflexes'
        } else {
            this.rank = 'Snail pace ...'
        }
    }

}
</script>

<style>
.results{
    display: inline-block ;
    border: 1px black solid;
    margin-top: 20px;
}
.rank{
    font-size: 1.4em;
    color: #0faf87;
    font-weight: bold;
}
</style>