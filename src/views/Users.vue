<template>
  <div>
    <div class="row">
      <grid-vue grid-style="col-6">
        <title-vue
          title-size="1"
          title-style="text-info"
          title-text="Usuários"
        />
      </grid-vue>
      <grid-vue grid-style="col-6">
        <button
          class="btn btn-info float-right"
          type="button"
          data-toggle="modal"
          data-target="#userAddModal"
        >
          <i class="fas fa-plus-circle"></i>
          Novo Usuário
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
          v-if="listUsers.length == 0"
          :type-message="'info text-center'"
          :description-message="'Nenhum usuário cadastrado.'"
        />
        <table-vue
          table-style="table-sm table-bordered"
          v-if="listUsers.length > 0"
        >
          <template v-slot:table-vue-tr>
            <table-line-vue tr-style="text-center text-light bg-info">
              <th scope="col" class="text-center">#</th>
              <th scope="col" class="text-center">Nome</th>
              <th scope="col" class="text-center">E-mail</th>
              <th scope="col" class="text-center">Informações</th>
              <th scope="col" class="text-center">Alterar</th>
              <th scope="col" class="text-center">Remover</th>
            </table-line-vue>
          </template>

          <template v-slot:table-vue-td>
            <table-line-vue v-for="(user, index) in listUsers" :key="index">
              <th scope="col" class="text-center">{{ user.id }}</th>
              <td>{{ user.name }}</td>
              <td scope="col" class="text-center">{{ user.email }}</td>
              <td scope="col" class="text-center">
                <a
                  href="#"
                  class="text-info"
                  data-toggle="modal"
                  data-target="#userInfoModal"
                  @click="setUser(user.id)"
                >
                  <i class="fas fa-info-circle"></i>
                </a>
              </td>
              <td scope="col" class="text-center">
                <a
                  href="#"
                  class="text-warning"
                  data-toggle="modal"
                  data-target="#userEditModal"
                  @click="setUser(user.id)"
                >
                  <i class="fas fa-edit"></i>
                </a>
              </td>
              <td scope="col" class="text-center">
                <a
                  href="#"
                  class="text-danger"
                  data-toggle="modal"
                  data-target="#userDeleteModal"
                  @click="setUser(user.id)"
                >
                  <i class="fas fa-trash-alt"></i>
                </a>
              </td>
            </table-line-vue>
          </template>
        </table-vue>
      </grid-vue>
    </div>

    <!--    Add User Modal-->
    <modal-vue
      modal-id="userAddModal"
      modal-text="Adicionar Novo Usuário"
      modal-style="modal fade"
    >
      <template v-slot:modal-body>
        <div class="form-group">
          <input
            v-model="postInfoUser.name"
            type="text"
            class="form-control"
            placeholder="Nome"
          />
        </div>
        <div class="form-group">
          <input
            v-model="postInfoUser.email"
            type="text"
            class="form-control"
            placeholder="E-mail"
          />
        </div>
        <div class="form-group">
          <select class="form-control" v-model="postInfoUser.group">
            <option>Selecione o grupo</option>
            <option
              v-for="(group, index) in listGroups"
              :key="index"
              :value="group.id"
              >{{ group.name }}</option
            >
          </select>
        </div>
        <div class="form-group">
          <button
            class="btn btn-block btn-info"
            @click="postUser"
            data-dismiss="modal"
          >
            Cadastrar
          </button>
        </div>
      </template>
    </modal-vue>

    <!--    Edit User Modal-->
    <modal-vue
      modal-id="userEditModal"
      modal-text="Alterar Usuário"
      modal-style="modal fade"
    >
      <template v-slot:modal-body>
        <div class="form-group">
          <input
            v-model="postInfoUser.name"
            type="text"
            name="userName"
            class="form-control"
            placeholder="Nome"
          />
        </div>
        <div class="form-group">
          <input
            v-model="postInfoUser.email"
            type="text"
            name="userEmail"
            class="form-control"
            placeholder="E-mail"
          />
        </div>
        <div class="form-group">
          <select class="form-control" v-model="postInfoUser.group">
            <option>Selecione o grupo</option>
            <option
              v-for="(group, index) in listGroups"
              :key="index"
              :value="group.id"
              >{{ group.name }}</option
            >
          </select>
        </div>
        <div class="form-gruop">
          <button
            class="btn btn-block btn-info"
            @click="updateUser(user.id)"
            data-dismiss="modal"
          >
            Atualizar
          </button>
        </div>
      </template>
    </modal-vue>

    <!--    Info User Modal-->
    <modal-vue
      modal-id="userInfoModal"
      modal-text="Informações do Usuário"
      modal-style="modal fade"
      modal-footer="true"
    >
      <template v-slot:modal-body>
        <ul class="list-group">
          <li class="list-group-item">Nome: {{ user.name }}</li>
          <li class="list-group-item">E-mail: {{ user.email }}</li>
          <li class="list-group-item">
            Grupo: {{ user._embedded.group.name }}
          </li>
          <li class="list-group-item">
            Data de Cadastro: {{ user.createdAt | formatDate }}
          </li>
          <li class="list-group-item">
            Última Atualização: {{ user.updatedAt | formatDate }}
          </li>
        </ul>
      </template>
      <template v-slot:modal-footer>
        <button class="btn btn-secondary" type="button" data-dismiss="modal">
          Fechar
        </button>
      </template>
    </modal-vue>

    <!--    Delete User Modal-->
    <modal-vue
      modal-id="userDeleteModal"
      modal-text="Remover Usuário"
      modal-style="modal fade"
      modal-footer="true"
    >
      <template v-slot:modal-body
        >Deseja realmente remover o usuário:
        <strong class="text-danger">{{ user.name }}</strong
        >?</template
      >
      <template v-slot:modal-footer>
        <button class="btn btn-secondary" type="button" data-dismiss="modal">
          Não
        </button>
        <button
          class="btn btn-danger"
          type="button"
          @click="deleteUser(user.id)"
          data-dismiss="modal"
        >
          Sim
        </button>
      </template>
    </modal-vue>
  </div>
</template>

<script>
import TableVue from "@/components/partials/TableVue";
import GridVue from "@/components/partials/GridVue";
import AlertVue from "@/components/partials/AlertVue";
import TableLineVue from "@/components/partials/TableLineVue";
import HrVue from "@/components/partials/HrVue";
import TitleVue from "@/components/partials/TitleVue";
import ModalVue from "@/components/partials/ModalVue";
import { mapGetters, mapActions } from "vuex";
import {} from "@/filters";
import axios from "axios";

export default {
  name: "Users",
  components: {
    ModalVue,
    TitleVue,
    TableVue,
    GridVue,
    AlertVue,
    TableLineVue,
    HrVue
  },
  data() {
    return {
      postInfoUser: {
        name: "",
        email: "",
        group: ""
      },
      showAlertMessage: false,
      typeAlertMessage: "",
      descriptionAlertMessage: "",
      error: ""
    };
  },
  methods: {
    ...mapActions("groups", ["setGroupList"]),
    ...mapActions("users", ["setUserList", "setUser"]),
    postUser() {
      axios
        .post("/users", this.postInfoUser)
        .then(() => {
          this.setUserList();
          this.showAlertMessage = true;
          this.typeAlertMessage = "success";
          this.descriptionAlertMessage = "Usuário cadastrado com sucesso.";
        })
        .catch(error => {
          if ([422, 404, 403, 500].indexOf(error.response.status) >= 0) {
            this.error = error.response.data.detail;
          } else {
            this.error = "Erro desconhecido.";
          }
          this.setUserList();
          this.clearFields();
          this.showAlertMessage = true;
          this.typeAlertMessage = "danger";
          this.descriptionAlertMessage = this.error;
        });
    },
    updateUser(id) {
      axios
        .put("/users/" + id, {
          name: this.postInfoUser.name,
          email: this.postInfoUser.email,
          group: this.postInfoUser.group
        })
        .then(() => {
          this.setUserList();
          this.showAlertMessage = true;
          this.typeAlertMessage = "success";
          this.descriptionAlertMessage = "Usuário atualizado com sucesso.";
        })
        .catch(error => {
          if ([422, 404, 403, 500].indexOf(error.response.status) >= 0) {
            this.error = error.response.data.detail;
          } else {
            this.error = "Erro desconhecido.";
          }
          this.setUserList();
          this.clearFields();
          this.showAlertMessage = true;
          this.typeAlertMessage = "danger";
          this.descriptionAlertMessage = this.error;
        });
    },
    deleteUser(id) {
      axios
        .delete("/users/" + id)
        .then(() => {
          this.setUserList();
          this.clearFields();
          this.showAlertMessage = true;
          this.typeAlertMessage = "success";
          this.descriptionAlertMessage = "Usuário removido com sucesso.";
        })
        .catch(error => {
          if ([422, 404, 403, 500].indexOf(error.response.status) >= 0) {
            this.error = error.response.data.detail;
          } else {
            this.error = "Erro desconhecido.";
          }
          this.setUserList();
          this.clearFields();
          this.showAlertMessage = true;
          this.typeAlertMessage = "danger";
          this.descriptionAlertMessage = this.error;
        });
    },
    clearFields() {
      this.postInfoUser.id = "";
      this.postInfoUser.name = "";
      this.postInfoUser.email = "";
      this.postInfoUser.group = "";
      this.postInfoUser.createdAt = "";
      this.postInfoUser.updatedAt = "";
      this.error = [];
    }
  },
  computed: {
    ...mapGetters("groups", ["listGroups"]),
    ...mapGetters("users", ["listUsers", "user"])
  },
  mounted() {
    this.setUserList();
    this.setGroupList();
  }
};
</script>

<style scoped></style>
