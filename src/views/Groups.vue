<template>
  <div>
    <div class="row">
      <grid-vue grid-style="col-6">
        <title-vue title-size="1" title-style="text-info" title-text="Grupos" />
      </grid-vue>
      <grid-vue grid-style="col-6">
        <button
          class="btn btn-info float-right"
          type="button"
          data-toggle="modal"
          data-target="#groupAddModal"
        >
          <i class="fas fa-plus-circle"></i>
          Novo Grupo
        </button>
      </grid-vue>
    </div>
    <hr-vue hr-style="bg-info" />
    <div v-if="showAlertMessage" class="row">
      <grid-vue grid-style="col-12">
        <alert-vue
          :type-message="typeAlertMessage"
          :description-message="descriptionAlertMessage"
        />
      </grid-vue>
    </div>
    <div class="row">
      <grid-vue grid-style="col-12">
        <alert-vue
          v-if="listGroups.length == 0"
          :type-message="'info text-center'"
          :description-message="'Nenhum grupo cadastrado.'"
        />
        <table-vue
          table-style="table-sm table-bordered"
          v-if="listGroups.length > 0"
        >
          <template v-slot:table-vue-tr>
            <table-line-vue tr-style="text-center text-light bg-info">
              <th scope="col" class="text-center">#</th>
              <th scope="col" class="text-center">Nome</th>
              <th scope="col" class="text-center">Informações</th>
              <th scope="col" class="text-center">Alterar</th>
              <th scope="col" class="text-center">Remover</th>
            </table-line-vue>
          </template>

          <template v-slot:table-vue-td>
            <table-line-vue v-for="(group, index) in listGroups" :key="index">
              <th scope="col" class="text-center">{{ group.id }}</th>
              <td scope="col" class="text-center">{{ group.name }}</td>
              <td scope="col" class="text-center">
                <a
                  class="text-info"
                  href="#"
                  data-toggle="modal"
                  data-target="#groupInfoModal"
                  @click="setGroup(group.id)"
                >
                  <i class="fas fa-info-circle"></i>
                </a>
              </td>
              <td scope="col" class="text-center">
                <a
                  class="text-warning"
                  href="#"
                  data-toggle="modal"
                  data-target="#groupEditModal"
                  @click="setGroup(group.id)"
                >
                  <i class="fas fa-edit"></i>
                </a>
              </td>
              <td scope="col" class="text-center">
                <a
                  href="#"
                  class="text-danger"
                  data-toggle="modal"
                  data-target="#groupDeleteModal"
                  @click="setGroup(group.id)"
                >
                  <i class="fas fa-trash-alt"></i>
                </a>
              </td>
            </table-line-vue>
          </template>
        </table-vue>
      </grid-vue>
    </div>

    <!--    Add Group Modal-->
    <modal-vue
      modal-id="groupAddModal"
      modal-text="Adicionar Novo Grupo"
      modal-style="modal fade"
    >
      <template v-slot:modal-body>
        <div class="form-group">
          <input
            v-model="group.name"
            type="text"
            placeholder="Nome"
            class="form-control"
          />
        </div>
        <div class="form-group">
          <button
            class="btn btn-block btn-info"
            @click="postGroup"
            data-dismiss="modal"
          >
            Cadastrar
          </button>
        </div>
      </template>
    </modal-vue>

    <!--    Edit Group Modal-->
    <modal-vue
      modal-id="groupEditModal"
      modal-text="Alterar Grupo"
      modal-style="modal fade"
    >
      <template v-slot:modal-body>
        <div class="form-group">
          <input
            v-model="group.name"
            type="text"
            placeholder="Nome"
            class="form-control"
          />
        </div>
        <div class="form-group">
          <button
            class="btn btn-lg btn-block btn-info"
            @click="updateGroup(group.id)"
            data-dismiss="modal"
          >
            Atualizar
          </button>
        </div>
      </template>
    </modal-vue>

    <!--    Info Group Modal-->
    <modal-vue
      modal-id="groupInfoModal"
      modal-text="Informações do Grupo"
      modal-style="modal fade"
      modal-footer="true"
    >
      <template v-slot:modal-body>
        <ul class="list-group">
          <li class="list-group-item">Nome: {{ group.name }}</li>
          <li class="list-group-item">
            Data de Cadastro: {{ group.createdAt | formatDate }}
          </li>
          <li class="list-group-item">
            Última Atualização: {{ group.updatedAt | formatDate }}
          </li>
        </ul>
      </template>
      <template v-slot:modal-footer>
        <button class="btn btn-secondary" data-dismiss="modal" type="button">
          Fechar
        </button>
      </template>
    </modal-vue>

    <!--    Delete Group Modal-->
    <modal-vue
      modal-id="groupDeleteModal"
      modal-text="Remover Grupo"
      modal-style="modal fade"
      modal-footer="true"
    >
      <template v-slot:modal-body
        >Deseja realmente remover o grupo:
        <strong class="text-danger">{{ group.name }}</strong
        >?</template
      >
      <template v-slot:modal-footer>
        <button class="btn btn-secondary" data-dismiss="modal" type="button">
          Não
        </button>
        <button
          class="btn btn-danger"
          type="button"
          @click="deleteGroup(group.id)"
          data-dismiss="modal"
        >
          Sim
        </button>
      </template>
    </modal-vue>
  </div>
</template>

<script>
import GridVue from "@/components/partials/GridVue";
import TitleVue from "@/components/partials/TitleVue";
import AlertVue from "@/components/partials/AlertVue";
import HrVue from "@/components/partials/HrVue";
import ModalVue from "@/components/partials/ModalVue";
import TableVue from "@/components/partials/TableVue";
import TableLineVue from "@/components/partials/TableLineVue";
import { mapActions, mapGetters } from "vuex";
import {} from "@/filters";
import axios from "axios";

export default {
  name: "Groups",
  components: {
    ModalVue,
    GridVue,
    TitleVue,
    AlertVue,
    HrVue,
    TableVue,
    TableLineVue
  },
  data() {
    return {
      showAlertMessage: false,
      typeAlertMessage: "",
      descriptionAlertMessage: "",
      error: ""
    };
  },
  methods: {
    ...mapActions("groups", ["setGroupList", "setGroup"]),
    postGroup() {
      axios
        .post("/groups", {
          name: this.group.name
        })
        .then(() => {
          this.showAlertMessage = true;
          this.typeAlertMessage = "success";
          this.descriptionAlertMessage = "Grupo cadastrado com sucesso.";
          this.setGroupList();
        })
        .catch(error => {
          if ([422, 404, 403, 500].indexOf(error.response.status) >= 0) {
            this.error = error.response.data.detail;
          } else {
            this.error = "Erro desconhecido.";
          }
          this.showAlertMessage = true;
          this.typeAlertMessage = "danger";
          this.descriptionAlertMessage = this.error;
          this.clearFields();
          this.setGroupList();
        });
    },
    updateGroup(id) {
      axios
        .put("/groups/" + id, {
          name: this.group.name
        })
        .then(() => {
          this.showAlertMessage = true;
          this.typeAlertMessage = "success";
          this.descriptionAlertMessage = "Grupo atualizado com sucesso.";
          this.setGroupList();
        })
        .catch(error => {
          if ([422, 404, 403, 500].indexOf(error.response.status) >= 0) {
            this.error = error.response.data.detail;
          } else {
            this.error = "Erro desconhecido.";
          }
          this.showAlertMessage = true;
          this.typeAlertMessage = "danger";
          this.descriptionAlertMessage = this.error;
          this.clearFields();
          this.setGroupList();
        });
    },
    deleteGroup(id) {
      axios
        .delete("/groups/" + id)
        .then(() => {
          this.showAlertMessage = true;
          this.typeAlertMessage = "success";
          this.descriptionAlertMessage = "Grupo removido com sucesso.";
          this.clearFields();
          this.setGroupList();
        })
        .catch(error => {
          if ([422, 404, 403, 500].indexOf(error.response.status) >= 0) {
            this.error = error.response.data.detail;
          } else {
            this.error = "Erro desconhecido.";
          }
          this.showAlertMessage = true;
          this.typeAlertMessage = "danger";
          this.descriptionAlertMessage = this.error;
          this.clearFields();
          this.setGroupList();
        });
    },
    clearFields() {
      this.group.id = "";
      this.group.name = "";
      this.group.createdAt = "";
      this.group.updatedAt = "";
      this.error = [];
    }
  },
  mounted() {
    this.setGroupList();
  },
  computed: {
    ...mapGetters("groups", ["listGroups", "group"])
  }
};
</script>

<style scoped></style>
