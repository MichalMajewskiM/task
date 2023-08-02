<template>
    <div class="flex-fill">
        <div class="row bg-white mt-4 mb-2 py-3">
            <input class="form-control border w-25 mx-2" type="search" id="filter-stops"
                @change="filterStops($event)" v-model="key">
            <p>Bus stops: {{ filteredStops.length }}</p>
            <div class="py-2 border-bottom" v-for="stop in filteredStops" :key="stop">
                {{ stop }}
            </div>
        </div>
    </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
    data() {
        return {
            filteredStops: this.$store.getters.stops,
            key: "",
        }
    },
    computed: {
        ...mapGetters(["stops"]),
    },
    methods: {
        filterStops(event) {
            console.log('enter')
            this.filteredStops = this.$store.getters.stops.filter((stop) => stop.toLowerCase().includes(event.target.value.toLowerCase()))
            this.filter = event.target.value
        },
    },
    name: 'bus-stops',
    components: {

    }
}
</script>