<template>
    <div>
        <div class="h-per-100 w-240 bg-color-fff">
            <vMenu />
        </div>
    </div>
</template>
<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'
import vMenu from '@/components/library/menu.vue'
@Component({
  components: {
    vMenu
  }
})
export default class Library extends Vue {

}
</script>

