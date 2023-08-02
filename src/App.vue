<template id="app">
    <div class="px-4 py-5">
        <div>
            <h1>Timetable</h1>
            <nav class="navbar navbar-expand-lg bg-white py-0" style="height: 64px;">
                <ul class="navbar-nav me-auto mb-2 mb-lg-0 h-100">
                    <router-link :to="{ name: 'Bus Lines' }" class="nav-link h-100 pb-0 pt-3 px-3" v-slot="{ isActive }">
                        <li class="nav-item h-100 align-middle" :class="[isActive && 'border-bottom border-primary border-2']">
                            Bus
                            Lines
                        </li>
                    </router-link>
                    <router-link :to="{ name: 'Bus Stops' }" class="nav-link h-100 pb-0 pt-3 px-3" v-slot="{ isActive }">
                        <li class="nav-item h-100" :class="[isActive && 'border-bottom-2 border-primary border-2']">
                            Stops
                        </li>
                    </router-link>
                </ul>
            </nav>
        </div>
        <main class="d-flex align-items-stretch">
            <routerView />
        </main>
    </div>
</template>

<script>
</script>

<style>
#app {
    background-color: #F3F4F9;
    min-height: 100vh;
}
</style>