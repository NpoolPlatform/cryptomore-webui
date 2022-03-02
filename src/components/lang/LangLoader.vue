<script setup lang='ts'>
import { onMounted } from 'vue'
import { useLangStore } from 'src/store/langs'

const lang = useLangStore()

onMounted(() => {
  lang.getLangs()
})

</script>
