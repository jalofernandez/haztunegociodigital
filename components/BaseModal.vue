<template>
  <div class="modal-wrapper">
    <div
      class="md-modal has-dish"
      role="dialog"
      aria-labelledby="modalTitle"
      aria-describedby="modalDescription"
    >
      <div class="md-content dish info">
        <button class="button js-close" type="button" @click="close()">
          Cerrar
          <span>&times;</span>
        </button>
        <div class="details">
          <h4 class="name">Horario de apertura</h4>
          <p class="schedule" v-for="day in data.days">
            <small class="day">{{ day.day }}:</small>
            <span :class="schedule(day.hour)">{{ day.hour }}</span>
          </p>
        </div>
      </div>
    </div>
    <div class="modal-overlay md-show" @click="close()"></div>
  </div>
</template>

<script>
export default {
  name: "BaseModal",
  props: {
    data: {
      type: Object,
      default: null,
      required: true,
    },
  },
  methods: {
    close() {
      this.$emit("close");
    },
    schedule(info) {
      var sch = info.replace(/\s/g, "").toLowerCase();
      if (sch !== "cerrado") {
        return "abierto";
      } else {
        return sch;
      }
    },
  },
};
</script>
