<template>
  <div class="centerMap">
    <GmapMap
      ref="mapRef"
      :center="{ lat: 47.497913, lng: 19.040236 }"
      :zoom="10"
      map-type-id="terrain"
      style="width: 1500px; height: 700px"
    >
    </GmapMap>
  </div>
</template>
<script>
import { gmapApi } from 'vue2-google-maps';

export default {
  computed: {
    google: gmapApi,
  },
};
</script>

<style>
.centerMap {
  display: flex;
  align-items: center;
  justify-content: center;
  padding-top: 10px;
  margin-top: 90px;
}
</style>
