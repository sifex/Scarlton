<template>
    <div id="progress-wrapper" class="select-none">
        <div id="progress" class="h-12 bg-[#060b16] rounded-lg p-1.5" role="progressbar" tabindex="0" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100">
            <canvas
                :class="{
                'bg-sky-600': color === 'sky',
                'bg-emerald-600': color === 'emerald'}"
                class="h-full w-full transition rounded"
                id="progress-meter"
                  ></canvas>
        </div>
    </div>
</template>

<script>
export default {
    name: 'loading-bar',
    props: ['width', 'color'],
    methods: {
        updateWitdh(width) {
            this.width = width
        }
    }
};
</script>

