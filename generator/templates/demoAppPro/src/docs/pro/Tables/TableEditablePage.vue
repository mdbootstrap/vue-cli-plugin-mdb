<template>
  <mdb-container>
    <mdb-row class="mt-5 align-items-center justify-content-start">
      <h4 class="demo-title">
        <strong>Table Editable</strong>
      </h4>
      <a
        href="https://mdbootstrap.com/docs/vue/tables/editable/?utm_source=DemoApp&utm_medium=MDBVuePro"
        waves-fixed
        class="border grey-text px-2 border-light rounded ml-2"
        target="_blank"
      >
        <mdb-icon icon="graduation-cap" class="mr-2" />Docs
      </a>
    </mdb-row>
    <section class="demo-section">
      <h4 class="my-5">Basic example</h4>
      <section>
        <mdb-card>
          <h3 class="card-header text-center font-weight-bold text-uppercase py-4">Editable table</h3>
          <mdb-card-body>
            <mdb-table-editable
              :columns="basicTable.columns"
              :rows="basicTable.rows"
              class="text-center"
              striped
              responsive
              bordered
            />
          </mdb-card-body>
        </mdb-card>
      </section>
    </section>
    <section class="demo-section">
      <h4 class="my-5">Pagination</h4>
      <section>
        <mdb-card>
          <h3 class="card-header stylish-color white-text text-center font-weight-bold text-uppercase py-4">Editable table</h3>
          <mdb-card-body>
            <mdb-table-editable
              :columns="paginationTable.columns"
              :rows="paginationTable.rows"
              class="text-center"
              striped
              bordered
              responsive
              pagination
              :display="3"
              :entries="5"
            />
          </mdb-card-body>
        </mdb-card>
      </section>
    </section>
  </mdb-container>
</template>

<script>
import { mdbTableEditable, mdbContainer, mdbRow, mdbIcon, mdbCard, mdbCardBody } from "mdbvue";

export default {
  name: "TableEditablePage",
  components: {
    mdbTableEditable,
    mdbContainer,
    mdbRow,
    mdbIcon,
    mdbCard,
    mdbCardBody
  },
  data() {
    return {
      basicTable: {
        columns: [
          {
            label: "Name",
            field: "name"
          },
          {
            label: "Position",
            field: "position"
          },
          {
            label: "Office",
            field: "office"
          },
          {
            label: "Age",
            field: "age"
          },
          {
            label: "Start date",
            field: "date",
            sort: "asc"
          },
          {
            label: "Salary",
            field: "salary"
          }
        ],
        rows: [
          {
            name: "Tiger Nixon",
            position: "System Architect",
            office: "Edinburgh",
            age: "61",
            date: "2011/04/25",
            salary: "$320"
          },
          {
            name: "Garrett Winters",
            position: "Accountant",
            office: "Tokyo",
            age: "63",
            date: "2011/07/25",
            salary: "$170"
          },
          {
            name: "Ashton Cox",
            position: "Junior Technical Author",
            office: "San Francisco",
            age: "66",
            date: "2009/01/12",
            salary: "$86"
          },
          {
            name: "Cedric Kelly",
            position: "Senior Javascript Developer",
            office: "Edinburgh",
            age: "22",
            date: "2012/03/29",
            salary: "$433"
          },
          {
            name: "Tiger Nixon",
            position: "System Architect",
            office: "Edinburgh",
            age: "61",
            date: "2011/04/25",
            salary: "$320"
          },
          {
            name: "Tiger Nixon",
            position: "System Architect",
            office: "Edinburgh",
            age: "61",
            date: "2011/04/25",
            salary: "$320"
          },
          {
            name: "Garrett Winters",
            position: "Accountant",
            office: "Tokyo",
            age: "63",
            date: "2011/07/25",
            salary: "$170"
          }
        ]
      },
      paginationTable: {
        columns: [
          {
            label: "Name",
            field: "name"
          },
          {
            label: "Position",
            field: "position"
          },
          {
            label: "Office",
            field: "office"
          },
          {
            label: "Age",
            field: "age"
          },
          {
            label: "Start date",
            field: "date",
            sort: "asc"
          },
          {
            label: "Salary",
            field: "salary"
          }
        ],
        rows: [
          {
            name: "Tiger Nixon",
            position: "System Architect",
            office: "Edinburgh",
            age: "61",
            date: "2011/04/25",
            salary: "$320"
          },
          {
            name: "Garrett Winters",
            position: "Accountant",
            office: "Tokyo",
            age: "63",
            date: "2011/07/25",
            salary: "$170"
          },
          {
            name: "Ashton Cox",
            position: "Junior Technical Author",
            office: "San Francisco",
            age: "66",
            date: "2009/01/12",
            salary: "$86"
          },
          {
            name: "Cedric Kelly",
            position: "Senior Javascript Developer",
            office: "Edinburgh",
            age: "22",
            date: "2012/03/29",
            salary: "$433"
          },
          {
            name: "Tiger Nixon",
            position: "System Architect",
            office: "Edinburgh",
            age: "61",
            date: "2011/04/25",
            salary: "$320"
          },
          {
            name: "Tiger Nixon",
            position: "System Architect",
            office: "Edinburgh",
            age: "61",
            date: "2011/04/25",
            salary: "$320"
          },
          {
            name: "Garrett Winters",
            position: "Accountant",
            office: "Tokyo",
            age: "63",
            date: "2011/07/25",
            salary: "$170"
          }
        ]
      },
    };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
