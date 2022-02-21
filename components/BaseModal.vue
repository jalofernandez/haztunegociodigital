<template>
  <div class="modal-wrapper">
    <div class="md-modal has-dish" role="dialog" aria-labelledby="modalTitle" aria-describedby="modalDescription">
      <div class="md-content dish info">
        <button class="btn js-close" type="button" @click="close()">
          <small>Cerrar</small>
          <span>&times;</span>
        </button>
        <div class="details">
          <div class="notification is-warning is-size-6">
            Debido a las medidas especiales por la crisis del covid-19, el
            <span class="has-text-weight-medium">horario de apertura podría variar</span>.
          </div>
          <h4 class="name has-text-centered">Horario de apertura</h4>
          <ul class="schedule-list">
            <li class="schedule" v-for="day in data.days">
              <small class="day">{{ day.day }}:</small>
              <span :class="schedule(day.hour)">{{ day.hour }}</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div class="modal-overlay md-show" @click="close()"></div>
  </div>
</template>

<script>
export default {
  name: 'BaseModal',
  props: {
    data: {
      type: Object,
      default: null,
      required: true,
    },
  },
  methods: {
    close() {
      this.$emit('close')
    },
    schedule(info) {
      var sch = info.replace(/\s/g, '').toLowerCase()
      if (sch !== 'cerrado') {
        return 'abierto'
      } else {
        return sch
      }
    },
  },
}
</script>
