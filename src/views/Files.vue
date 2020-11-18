<template>
  <div>
    <div class="row">
      <grid-vue grid-style="col-6">
        <title-vue
          title-size="1"
          title-style="text-info"
          title-text="Arquivos"
        />
      </grid-vue>
      <grid-vue grid-style="col-6">
        <button
          type="button"
          class="btn btn-info float-right"
          data-toggle="modal"
          data-target="#fileAddModal"
        >
          <i class="fas fa-plus-circle"></i>
          Novo Arquivo
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
        <table-vue table-style="table-sm table-bordered">
          <template v-slot:table-vue-tr>
            <table-line-vue tr-style="text-center text-light bg-info">
              <th scope="col" class="text-center">#</th>
              <th scope="col" class="text-center">Nome</th>
              <th scope="col" class="text-center">Tipo</th>
              <th scope="col" class="text-center">Informações</th>
              <th scope="col" class="text-center">Alterar</th>
              <th scope="col" class="text-center">Remover</th>
            </table-line-vue>
          </template>

          <template v-slot:table-vue-td>
            <table-line-vue v-for="(result, index) in results" :key="index">
              <th scope="col" class="text-center">{{ result.id }}</th>
              <td scope="col" class="text-center">{{ result.filename }}</td>
              <td scope="col" class="text-center">{{ result.mime }}</td>
              <td scope="col" class="text-center">
                <link-vue
                  link-style="text-info"
                  link-icon="fas fa-info-circle"
                  link-title="Informações do Arquivo"
                  link-data-toggle="modal"
                  link-data-target="#fileInfoModal"
                />
              </td>
              <td scope="col" class="text-center">
                <link-vue
                  link-style="text-warning"
                  link-icon="fas fa-edit"
                  link-title="Editar Arquivo"
                  link-data-toggle="modal"
                  link-data-target="#fileEditModal"
                />
              </td>
              <td scope="col" class="text-center">
                <link-vue
                  link-style="text-danger"
                  link-icon="fas fa-trash-alt"
                  link-title="Remover Arquivo"
                  link-data-toggle="modal"
                  link-data-target="#fileDeleteModal"
                />
              </td>
            </table-line-vue>
          </template>
        </table-vue>
      </grid-vue>
    </div>

    <!--    Add File Modal-->
    <modal-vue
      modal-id="fileAddModal"
      modal-text="Adicionar Novo Arquivo"
      modal-style="modal fade"
    ></modal-vue>

    <!--    Edit File Modal-->
    <modal-vue
      modal-id="fileEditModal"
      modal-text="Alterar Arquivo"
      modal-style="modal fade"
    ></modal-vue>

    <!--    Info File Modal-->
    <modal-vue
      modal-id="fileInfoModal"
      modal-text="Informações do Arquivo"
      modal-style="modal fade"
      modal-footer="true"
    >
      <template v-slot:modal-body>
        <ul class="list-group">
          <li class="list-group-item">
            Nome do Arquivo: {{ results[0].filename }}
          </li>
          <li class="list-group-item">Tipo: {{ results[0].mime }}</li>
          <li class="list-group-item">Pasta: {{ results[0].path }}</li>
          <li class="list-group-item">Tamanho: {{ results[0].size }}</li>
          <li class="list-group-item">
            Cadastrado por: {{ results[0].registerUserId }}
          </li>
          <li class="list-group-item">
            Data de Cadastro: {{ results[0].createdAt }}
          </li>
          <li class="list-group-item">
            Última Atualização: {{ results[0].updatedAt }}
          </li>
        </ul>
      </template>
      <template v-slot:modal-footer>
        <button class="btn btn-secondaty" type="button" data-dismiss="modal">
          Fechar
        </button>
      </template>
    </modal-vue>

    <!--    Delete File Modal-->
    <modal-vue
      modal-id="fileDeleteModal"
      modal-text="Remover Arquivo"
      modal-style="modal fade"
      modal-footer="true"
    >
      <template v-slot:modal-body>Informações do Arquivo</template>
      <template v-slot:modal-footer>
        <button class="btn btn-secondary" type="button" data-dismiss="modal">
          Não
        </button>
        <button class="btn btn-danger" type="button">Sim</button>
      </template>
    </modal-vue>
  </div>
</template>

<script>
import TableVue from "@/components/partials/TableVue";
import GridVue from "@/components/partials/GridVue";
import TitleVue from "@/components/partials/TitleVue";
import AlertVue from "@/components/partials/AlertVue";
import TableLineVue from "@/components/partials/TableLineVue";
import LinkVue from "@/components/partials/LinkVue";
import HrVue from "@/components/partials/HrVue";
import ModalVue from "../components/partials/ModalVue";

export default {
  name: "Files",
  components: {
    ModalVue,
    TableVue,
    GridVue,
    TitleVue,
    AlertVue,
    TableLineVue,
    LinkVue,
    HrVue,
  },
  data() {
    return {
      showAlertMessage: false,
      typeAlertMessage: "",
      descriptionAlertMessage: "",
      results: [
        {
          id: 1,
          filename: "foto1.jpg",
          mime: "image/jpeg",
          path: "public/images",
          size: 2048,
          registerUserId: 1,
          createdAt: "2019-12-04 22:34:00",
          updatedAt: "2019-12-04 22:34:00",
        },
        {
          id: 2,
          filename: "foto2.jpg",
          mime: "image/jpeg",
          path: "public/images",
          size: 2048,
          registerUserId: 1,
          createdAt: "2019-12-04 22:34:00",
          updatedAt: "2019-12-04 22:34:00",
        },
        {
          id: 3,
          filename: "foto3.jpg",
          mime: "image/jpeg",
          path: "public/images",
          size: 2048,
          registerUserId: 1,
          createdAt: "2019-12-04 22:34:00",
          updatedAt: "2019-12-04 22:34:00",
        },
        {
          id: 4,
          filename: "foto4.jpg",
          mime: "image/jpeg",
          path: "public/images",
          size: 2048,
          registerUserId: 1,
          createdAt: "2019-12-04 22:34:00",
          updatedAt: "2019-12-04 22:34:00",
        },
      ],
    };
  },
};
</script>

<style scoped></style>
