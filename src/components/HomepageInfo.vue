<template>
    <div class="grid grid-cols-1 sm:grid-cols-12 mx-5">
        <div class="sm:col-start-1 sm:col-span-3">
            <ProfileCard />
        </div>
        <div class="sm:col-start-5 sm:col-span-7">
            <InfoCard />
        </div>
    </div>
</template>

<script setup>
import ProfileCard from './ProfileCard.vue'
import InfoCard from './InfoCard.vue'

</script>

<style scoped>
</style>
