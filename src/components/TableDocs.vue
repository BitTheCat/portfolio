<template>
    <div class="grid grid-cols-1 sm:grid-cols-12 mx-5">
        <div class="card sm:col-start-1 sm:col-span-10">
            <span class="text-lg font-medium">
                Tailwind Vue Table
            </span>
            <span class="text-xs font-medium">(TVTable)</span>
            <p class="my-2">
                Simple DataTable with slots, class and style modification for tr and td, sortable by columns (only graphics with click event).
                Contains the TVPaginator component that can be disabled via prop or used in stand-alone mode.
            </p>
            <p>
                TVTable is based on the css of the table of the host site, if you wish you can add a basic css using classes that can be overwritten to retouch the graphic style in addition to the basic ones.
            </p>
            <hr>
            <a href="https://github.com/BitTheCat/tailwind-vue-data-table" target="_blank">Github</a> - <a href="https://www.npmjs.com/package/@bitthecat/tailwind-vue-data-table" target="_blank">NPM</a>

            <hr>

            <a id="install">Install</a>
            <pre class="language-sh"><code>npm i @bitthecat/tailwind-vue-data-table</code></pre>
            Add this code inside tailwind.config.* to compile the css library

            <pre class="language-js">
                    <code>
                        content: [
                        &nbsp&nbsp ...
                        &nbsp&nbsp './node_modules/@bitthecat/tailwind-vue-data-table/dist/*.js',
                        ],
                    </code>
            </pre>

            <h5>Use in Vue</h5>
            <pre class="language-js">
                <code>
import { TVTable } from '@bitthecat/tailwind-vue-data-table'
                </code>
            </pre>

            <hr>

            <a id="props">Props</a>
            <table>
                <thead>
                    <tr>
                        <td>Name</td>
                        <td>Default</td>
                        <td>Description</td>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>items</td>
                        <td>[]</td>
                        <td>table data</td>
                    </tr>
                    <tr>
                        <td>fields</td>
                        <td>{}</td>
                        <td>data fields</td>
                    </tr>
                    <tr>
                        <td>currentPage</td>
                        <td>1</td>
                        <td>current displayed page (used by the paginator)</td>
                    </tr>
                    <tr>
                        <td>totalRows</td>
                        <td>0</td>
                        <td>total number of rows (used by the paginator)</td>
                    </tr>
                    <tr>
                        <td>perPage</td>
                        <td>15</td>
                        <td>number of rows displayed for page (used by the paginator)</td>
                    </tr>
                    <tr>
                        <td>noItemText</td>
                        <td>No data to display</td>
                        <td>change the default text when items is empty</td>
                    </tr>
                    <tr>
                        <td>summaryText</td>
                        <td>'Displaying _STR_FROM_ to _STR_TO_ of _STR_TOTAL_ items'</td>
                        <td>table will replace _STR_FROM_ , _STR_TO_ and _STR_TOTAL_ in your string with the calculated values so that you can translate the summary sentence into your language )</td>
                    </tr>
                    <tr>
                        <td>hideSummary</td>
                        <td>false</td>
                        <td>enables for hide summary</td>
                    </tr>
                    <tr>
                        <td>hidePagination</td>
                        <td>false</td>
                        <td>enables for hide paginator</td>
                    </tr>
                    <tr>
                        <td>multipleSortable</td>
                        <td>false</td>
                        <td>enables multiple sortable for table header</td>
                    </tr>
                    <tr>
                        <td>multiple-selection</td>
                        <td>false</td>
                        <td>enables multiple row selected</td>
                    </tr>
                    <tr>
                        <td>enableCheck</td>
                        <td>false</td>
                        <td>enables checkbox for table row</td>
                    </tr>
                    <tr>
                        <td>busy</td>
                        <td>false</td>
                        <td>enables spinner for loading data</td>
                    </tr>
                    <tr>
                        <td>spinnerClass</td>
                        <td>''</td>
                        <td>style for &lt;spinner></td>
                    </tr>
                    <tr>
                        <td>size</td>
                        <td>md</td>
                        <td>changes the size of the table of contents and pagination, only accepts sm or md</td>
                    </tr>
                </tbody>
            </table>
            Note: You can change the style of table overwrite this css class.
            <pre class="language-css">
                <code>
                    .tv-table {
                        /* code here */
                    }

                    .tv-thead {
                        /* code here */
                    }

                    .tv-th {
                        /* code here */
                    }

                    .tv-tbody {
                        /* code here */
                    }

                    .tv-tr {
                        /* code here */
                    }

                    .tv-td {
                        /* code here */
                    }

                    .tv-tfoot {
                        /* code here */
                    }
                </code>
            </pre>

            <a id="slots">Slots</a>
            <table>
                <thead>
                    <tr>
                        <td>Name</td>
                        <td>Description</td>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>#cell:FIELD_NAME</td>
                        <td>used for overwrite the cell value</td>
                    </tr>
                    <tr>
                        <td>#row-details</td>
                        <td>row details, you need to use row.toggleDetails(row.item) within a template that contains an icon/button to toggle it</td>
                    </tr>
                    <tr>
                        <td>#header-row</td>
                        <td>used for additional row up the header</td>
                    </tr>
                    <tr>
                        <td>#footer-row</td>
                        <td>used for show table footer row</td>
                    </tr>
                    <tr>
                        <td>#no-items</td>
                        <td>used for overwrite no data slot</td>
                    </tr>
                </tbody>
            </table>
            <br>
            slot 'cell:' has item or data props

            item retrieves the row value

            <pre class="language-html">
                            <code>
                                &lt;template #cell:username="{ item }">
                                &#123;{ item.emoji }} - &#123;{ item.username }}
                                &lt;/template>
                            </code>
                        </pre>

            data retrieves the field value

            <pre class="language-html">
                            <code>
                                &lt;template #cell:username="{ data }">
                                &#123;{ data }}
                                &lt;/template>
                            </code>
                        </pre>

            row (or any name without {} ) retrieves the row value

            <div class="language-html">
                <pre class="language-html">
                            <code>
                                &lt;template #cell:username="row">
                                &#123;{ row }}
                                &lt;/template>
                            </code>
                        </pre>
            </div>

            <hr>

            <a id="events">Events</a>
            <br><br>
            <table>
                <thead>
                    <tr>
                        <td>Name</td>
                        <td>Description</td>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>updateSortable</td>
                        <td>emit the sortable field/fields </td>
                    </tr>
                    <tr>
                        <td>changePage</td>
                        <td>emit the page change</td>
                    </tr>
                    <tr>
                        <td>checkRow</td>
                        <td>emit the row item when user click on row checkbox</td>
                    </tr>
                    <tr>
                        <td>rowClicked</td>
                        <td>emit the row item when user click on row</td>
                    </tr>
                </tbody>
            </table>

            <hr>

            <a id="field-props">Field Props</a>
            <br><br>
            <table>
                <thead>
                    <tr>
                        <td>Name</td>
                        <td>Description</td>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>key</td>
                        <td>key of field</td>
                    </tr>
                    <tr>
                        <td>label</td>
                        <td>th title and </td>
                    </tr>
                    <tr>
                        <td>thStyle</td>
                        <td>used for overwrite the th style</td>
                    </tr>
                    <tr>
                        <td>tdStyle</td>
                        <td>used for overwrite the td style</td>
                    </tr>
                    <tr>
                        <td>thClass</td>
                        <td>used for overwrite the th class</td>
                    </tr>
                    <tr>
                        <td>tdClass</td>
                        <td>used for overwrite the td class</td>
                    </tr>
                    <tr>
                        <td>sortable</td>
                        <td>the default setting is false, if set to true a symbol appears for sorting</td>
                    </tr>
                    <tr>
                        <td>_showDetails</td>
                        <td>used for show row details (default false)</td>
                    </tr>
                </tbody>
            </table>
            <div class="my-5">
                <TVTable
                    ref="tvtTableSimple"
                    :items="[]"
                    :fields="fieldsSimple"
                />
            </div>

            <!-- <Vue3Prism source="<TVTable />" /> -->
            <pre class="language-js">
                <code>
&#60;TVTable
    ref="tvtTableSimple"
    :items="[]"
    :fields="fields"
>&#60;/TVTable>

&#60;script setup>
const fields = ref([
  {
    label: 'id',
    key: 'id',
    sortable: true
  },
  {
    label: 'username',
    key: 'username',
    sortable: true
  },
  {
    label: 'email',
    key: 'email'
  }
])
&#60;/script>
                </code>
            </pre>

        <!-- <div class="mb-3">
                <span class="text-xs"> Simple </span>

                <TVTable
                    ref="tvtTableSimple"
                    :items="cloneItems"
                    :fields="fieldsSimple"
                    :spinner-class="'text-green-500'"
                    multiple-selection
                    enable-check
                    :busy="busy"
                    :total-rows="cloneItems.length"
                    summary-text="Visualizzo da _STR_FROM_ a _STR_TO_ su _STR_TOTAL_ elementi"
                >
                    <template #header-row>
                        <tr>
                            <td
                                colspan="2"
                                class="bg-red-500"
                            />
                            <td colspan="2">
                                Header1
                            </td>
                        </tr>
                    </template>

                    <template #footer-row>
                        <tr>
                            <td
                                colspan="1"
                                class="bg-red-500"
                            />
                            <td
                                colspan="1"
                                class="bg-green-500"
                            />
                            <td colspan="2">
                                Footer
                            </td>
                        </tr>
                    </template>
                </TVTable>
            </div>
            <hr>
            <div>
                <span class="text-xs">With Props</span>
                <TVTable
                    ref="tvtTableProps"
                    v-model:currentPage="currentPage"
                    :items="filterItems"
                    :fields="fields"
                    multiple-sortable
                    multiple-selection
                    :total-rows="items.length"
                    :per-page="perPage"
                    :row-select-class="'bg-red-500'"
                    enable-check
                    :busy="busy"
                    @change-page="changePage"
                    @check-row="checkRowMultiple"
                    @row-clicked="checkRowMultiple"
                >
                    <template #header-row>
                        <tr>
                            <td colspan="2" />
                            <td
                                colspan="2"
                                class="bg-white text-center"
                            >
                                Header1
                            </td>
                            <td
                                colspan="1"
                                class="bg-red-300 text-center"
                            >
                                Header2
                            </td>
                        </tr>
                    </template>

                    <template #footer-row>
                        <tr>
                            <td colspan="1" />
                            <td
                                colspan="1"
                                class="bg-green-300 text-center"
                            />
                            <td
                                colspan="3"
                                class="bg-red-300 text-center"
                            >
                                Footer
                            </td>
                        </tr>
                    </template>

                    <template #cell:username="row">
                        {{ row.item.emoji }} - {{ row.item.username }}
                    </template>

                    <template #row-details>
                        ROW-DETAILS ROW-DETAILS ROW-DETAILS
                    </template>

                    <template #cell:details="row">
                        <input
                            id="checkbox"
                            :checked="row.item._showDetails"
                            type="checkbox"
                            @click.stop="row.toggleDetails(row.item)"
                        >
                    </template>
                </TVTable>

                <div class="text-left mt-2">
                    Selected: {{ selectRow }}
                    CurrentPage: {{ currentPage }}
                </div>
            </div>
        </div> -->
        </div>
        <div class="sm:col-start-11 sm:col-span-1 fixed top-50 end-20 mt-5">
            <div>
                <div class="flex">
                    On this page
                </div>
                <ul class="list-disc ml-8">
                    <li><a href="#install">Install</a></li>
                    <li><a href="#props">Props</a></li>
                    <li><a href="#slots">Slots</a></li>
                    <li><a href="#events">Events</a></li>
                    <li><a href="#field-props">Field Props</a></li>
                    <li><a href="#">More are coming</a></li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue'
import { TVTable } from '@bitthecat/tailwind-vue-data-table'
const fields = ref([
  {
    label: 'id',
    key: 'id',
    thStyle: 'width: 30px',
    sortable: true
  },
  {
    label: 'username',
    key: 'username',
    thStyle: 'background: lightblue',
    thClass: 'text-white',
    tdClass: 'text-center',
    sortable: true
  },
  {
    label: 'email',
    key: 'email',
    tdClass: 'bg-indigo-300'
  },
  {
    label: 'details',
    key: '',
    thStyle: 'width: 30px',
    tdClass: 'flex text-center'
  }
])

const fieldsSimple = ref([
  {
    label: 'id',
    key: 'id',
    sortable: true
  },
  {
    label: 'username',
    key: 'username',
    sortable: true
  },
  {
    label: 'email',
    key: 'email'
  }
])

const items = ref([
  {
    id: '1',
    username: 'cat',
    email: 'cat@tvdatatable.test',
    emoji: '🐈'
  },
  {
    id: '2',
    username: 'dog',
    email: 'dog@tvdatatable.test',
    emoji: '🐕'
  },
  {
    id: '3',
    username: 'bird',
    email: 'bird@tvdatatable.test',
    emoji: '🐦'
  }
])

const busy = ref(false)
const customText = ref(false)

const currentPage = ref(1)

const perPage = ref(2)

const filterItems = ref(items.value.slice(0, 1 * perPage.value))

const cloneItems = JSON.parse(JSON.stringify(items.value))

const changePage = (values) => {
  filterItems.value = items.value.slice(values.from, values.to)
}

const selectRow = ref([])

const checkRowMultiple = (value) => {
  if (selectRow.value.includes(value)) {
    const index = selectRow.value.indexOf(value)
    selectRow.value.splice(index, 1)
  } else {
    selectRow.value.push(value)
  }
}

// const checkRow = (value) => {
//   selectRow.value = selectRow.value === value ? null : value
// }

</script>
