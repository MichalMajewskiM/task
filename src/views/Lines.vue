<template>
    <div class="flex-fill">
        <div class="row bg-white mt-4 mb-2 py-3 rounded m-0">
            <h5>Select Bus Line</h5>
            <div class="col grid my-4">
                <button type="button" :class="{ active: selectedLine === line}" class="btn btn-primary px-3 py-2 me-md-2" v-for="line in lines" :key="line"
                    @click="getStopsForLine(line)">{{ line }}</button>
            </div>
        </div>
        <div class="d-flex flex-row justify-content-between gap-3">
            <div class="bg-white rounded overflow-auto flex-fill p-2 w-100" v-if="!!stops.length">
                <div class="py-2 border-bottom hover-effect" :class="{ 'text-primary': selectedStop === stop}" v-for="stop in stops" :key="stop" @click="getTimes(stop)">
                    {{ stop }}
                </div>
            </div>
            <div class="bg-white rounded text-center flex-fill w-100" style="min-height: 444px; max-height:550px; border-style: dashed;" v-else>
                <p class="m-0">Please select the bus line first</p>
            </div>
            <div class="bg-white rounded overflow-auto p-2 w-100"  v-if="!!times.length">
                <div class="py-2 border-bottom" v-for="time in times" :key="time">
                    {{ time }}
                </div>
            </div>
            <div class="bg-white rounded text-center flex-fill w-100" style="min-height: 444px; max-height:550px; border-style: dashed;" v-else>
                <p v-if="!stops.length" class="m-0">Please select the bus line first</p>
                <p v-else class="m-0">Please select the bus line first</p>
            </div>
        </div>
    </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";

export default {
    data() {
        return {
            stops: [],
            times: [],
            selectedLine: 0,
            selectedStop: '',
        }
    },
    computed: {
        ...mapGetters(["lines"]),
    },
    methods: {
        ...mapActions(["fetchAllData"]),
        getStopsForLine(line) {
            this.stops = []
            this.stops = [... new Set(this.$store.state.data.filter((el) => el.line === line).map((el) => el.stop))]
            this.selectedLine = line
        },
        getTimes(stop) {
            this.times = []
            this.times = [... new Set(this.$store.state.data.filter((el) => el.line === this.selectedLine && el.stop === stop).map((el) => el.time).sort())]
            this.selectedStop = stop
        },
    },
    created() {
        this.fetchAllData();
    },
    name: 'bus-lines',
    components: {

    }
}
</script>

<style>
.hover-effect:hover {
    background-color: #f8f8fb;
    cursor: pointer;
}
</style>