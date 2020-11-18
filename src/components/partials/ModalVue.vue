<template>
  <div
    :id="modalId"
    :class="modalStyle"
    tabindex="-1"
    role="dialog"
    aria-hidden="true"
  >
    <div class="modal-dialog modal-dialog-centered" role="document">
      <div class="modal-content">
        <div class="modal-header">
          <title-vue
            title-size="5"
            title-style="modal-title text-info"
            :title-text="modalText"
          />
          <button
            type="button"
            class="close"
            data-dismiss="modal"
            aria-label="Close"
          >
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div class="modal-body p-4">
          <slot name="modal-body"></slot>
        </div>
        <div v-if="modalFooter != ''" class="modal-footer">
          <slot name="modal-footer"></slot>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import TitleVue from "./TitleVue";
export default {
  name: "ModalVue",
  components: { TitleVue },
  props: {
    modalId: {
      type: String,
      default: ""
    },
    modalText: {
      type: String,
      default: ""
    },
    modalStyle: {
      type: String,
      default: ""
    },
    modalFooter: {
      type: String,
      default: ""
    }
  }
};
</script>

<style scoped></style>
