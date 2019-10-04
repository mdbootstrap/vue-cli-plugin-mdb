<template>
  <div class="mt-5">
    <mdb-container>
      <mdb-row class="mt-5 align-items-center justify-content-start">
        <h4 class="demo-title"><strong>Accordion</strong></h4>
        <a href="https://mdbootstrap.com/docs/vue/advanced/accordion/?utm_source=DemoApp&utm_medium=MDBVuePro" waves-fixed class="border grey-text px-2 border-light rounded ml-2" target="_blank"><mdb-icon icon="graduation-cap" class="mr-2"/>Docs</a>
      </mdb-row>
      <hr class="mb-4" />
      <h2 class="mb-3">Material</h2>
      <mdb-accordion :panes="panesMaterial" material :open="0"></mdb-accordion>
      <hr class="my-5"/>

      <h2 class="mb-3">Gradient</h2>
      <mdb-row center class="accordion-gradient-bcg">
        <mdb-col md="10" xl="6" class="py-5">
          <mdb-accordion :panes="panesGradient" gradient :open="0"></mdb-accordion>
        </mdb-col>
      </mdb-row>
      <hr class="my-5"/>

      <h2 class="mb-3">Picture</h2>
      <mdb-accordion :panes="panesPicture" picture :open="0"></mdb-accordion>
      <hr class="my-5"/>

      <h2 class="mb-3">Icon</h2>
      <mdb-accordion :panes="panesIcon" icon :open="0">
        <ul class="list-unstyled d-flex justify-content-center pt-5 red-text">
          <li><mdb-icon icon="anchor" class="mr-3 fa-2x" aria-hidden="true"></mdb-icon></li>
          <li><mdb-icon icon="life-ring" class="mr-3 fa-2x" aria-hidden="true"></mdb-icon></li>
          <li><mdb-icon far icon="star" class="fa-2x" aria-hidden="true"></mdb-icon></li>
        </ul>
        <h2 class="text-center text-uppercase red-text py-4 px-3">Hello my friends, I am the nicest accordion!</h2>
        <hr class="mb-0"/>
      </mdb-accordion>
      <hr class="my-5"/>

      <h2 class="mb-3">Color shades cards</h2>
      <mdb-accordion :panes="panesColor" shades="teal" :open="0"></mdb-accordion>
      <hr class="my-5"/>

      <h2 class="mb-3">Image Background</h2>
      <div class="card card-image" style="background-image: url(https://mdbootstrap.com/img/Photos/Horizontal/Work/4-col/img%20%2814%29.jpg);">
        <div class="rgba-black-strong py-5 px-4">
          <mdb-row center>
            <mdb-col md="10" xl="8">
              <mdb-accordion :panes="panePhotoBg" photoBg :open="0"></mdb-accordion>
            </mdb-col>
          </mdb-row>
        </div>
      </div>
      <hr class="my-5"/>


      <h2 class="mb-3">Table</h2>
      <mdb-accordion table >
        <mdb-accordion-pane title="Unfiled items" type="table" :isOpen="openPaneNum==0" @pane-clicked="handlePaneOpened(0)">
          <mdb-dropdown class="float-left" slot="title">
            <mdb-dropdown-toggle @click.prevent.native="handlePaneOpened(0)" color="info" slot="toggle" class="pull-left dropdown mr-3" style="padding: 8px"><mdb-icon icon="pencil-alt"/></mdb-dropdown-toggle>
            <mdb-dropdown-menu color="info">
              <mdb-dropdown-item>Add new condition</mdb-dropdown-item>
              <mdb-dropdown-item>Rename folder</mdb-dropdown-item>
              <mdb-dropdown-item>Delete folder</mdb-dropdown-item>
            </mdb-dropdown-menu>
          </mdb-dropdown>
          <div class="table-ui p-2 mb-3 mx-3 mb-4">
            <mdb-row>
              <mdb-col xl="4" lg="6" md="12">
                <mdb-select :options="[{value: null, text: 'Bulk actions', disabled: true, selected: true}, {value: 1, text: 'Delete'}, {value: 2, text: 'Change folder'}]" />
              </mdb-col>
              <mdb-col xl="4" lg="6" md="6">
                <mdb-select :options="[{value: null, text: 'Show only', disabled: true}, {value: 1, text: 'All', selected: true}, {value: 2, text: 'Clicks'}, {value: 3, text: 'Page'}]" />
              </mdb-col>
              <mdb-col xl="4" lg="6" md="6">
                <mdb-select :options="[{value: null, text: 'Filter', disabled: true, selected: true}, {value: 1, text: 'All'}, {value: 2, text: 'Active'}, {value: 3, text: 'Inactive'}]" />
              </mdb-col>
            </mdb-row>
          </div>
          <div class="table-responsive mx-3">
            <!--Table-->
            <mdb-tbl class="table table-hover mb-0">

              <!--Table head-->
              <mdb-tbl-head>
                <tr>
                  <th>
                    <input class="form-check-input" type="checkbox" id="checkbox7">
                    <label for="checkbox7" class="mr-2 label-table"></label>
                  </th>
                  <th class="th-lg">
                    <a>Name
                      <i class="fas fa-sort ml-1"></i>
                    </a>
                  </th>
                  <th class="th-lg">
                    <a>Condition
                      <i class="fas fa-sort ml-1"></i>
                    </a>
                  </th>
                  <th class="th-lg">
                    <a>Last edited
                      <i class="fas fa-sort ml-1"></i>
                    </a>
                  </th>
                  <th></th>
                </tr>
              </mdb-tbl-head>
              <!--Table head-->

              <!--Table body-->
              <mdb-tbl-body>
                <tr>
                  <th scope="row">
                    <input class="form-check-input" type="checkbox" id="checkbox8">
                    <label for="checkbox8" class="label-table"></label>
                  </th>
                  <td>Test subscription</td>
                  <td>
                    <code>Scroll %</code> equals or greater than
                    <strong>80</strong>
                  </td>
                  <td>12.06.2017</td>
                  <td>
                    <a>
                      <i class="fas fa-info mx-1" data-toggle="tooltip" data-placement="top" title="" data-original-title="Tooltip on top"></i>
                    </a>
                    <a>
                      <i class="fas fa-pencil-square mx-1"></i>
                    </a>
                    <a>
                      <i class="fas fa-times mx-1"></i>
                    </a>
                  </td>
                </tr>
                <tr>
                  <th scope="row">
                    <input class="form-check-input" type="checkbox" id="checkbox9">
                    <label for="checkbox9" class="label-table"></label>
                  </th>
                  <td>Product Hunt Visitor</td>
                  <td>
                    <code>Scroll %</code> equals or greater than
                    <strong>80</strong>
                  </td>
                  <td>13.06.2017</td>
                  <td>
                    <a>
                      <i class="fas fa-info mx-1" data-toggle="tooltip" data-placement="top" title="" data-original-title="Tooltip on top"></i>
                    </a>
                    <a>
                      <i class="fas fa-pencil-square mx-1"></i>
                    </a>
                    <a>
                      <i class="fas fa-times mx-1"></i>
                    </a>
                  </td>
                </tr>
                <tr>
                  <th scope="row">
                    <input class="form-check-input" type="checkbox" id="checkbox10">
                    <label for="checkbox10" class="label-table"></label>
                  </th>
                  <td>Test subscription</td>
                  <td>
                    <code>Scroll %</code> equals or greater than
                    <strong>80</strong>
                  </td>
                  <td>12.06.2017</td>
                  <td>
                    <a>
                      <i class="fas fa-info mx-1" data-toggle="tooltip" data-placement="top" title="" data-original-title="Tooltip on top"></i>
                    </a>
                    <a>
                      <i class="fas fa-pencil-square mx-1"></i>
                    </a>
                    <a>
                      <i class="fas fa-times mx-1"></i>
                    </a>
                  </td>
                </tr>
              </mdb-tbl-body>
              <!--Table body-->
            </mdb-tbl>
            <!--Table-->
          </div>
          </mdb-accordion-pane>
          <mdb-accordion-pane title="Folder 1" type="table" :isOpen="openPaneNum==1" @pane-clicked="handlePaneOpened(1)">
            <mdb-dropdown class="float-left" slot="title">
              <mdb-dropdown-toggle @click.prevent.native="handlePaneOpened(0)" color="info" slot="toggle" class="pull-left dropdown mr-3" style="padding: 8px">
                <mdb-icon icon="pencil-alt" />
              </mdb-dropdown-toggle>
              <mdb-dropdown-menu color="info">
                <mdb-dropdown-item>Add new condition</mdb-dropdown-item>
                <mdb-dropdown-item>Rename folder</mdb-dropdown-item>
                <mdb-dropdown-item>Delete folder</mdb-dropdown-item>
              </mdb-dropdown-menu>
            </mdb-dropdown>
            <div class="table-ui p-2 mb-3 mx-3 mb-4">
              <mdb-row>
                <mdb-col xl="4" lg="6" md="12">
                  <mdb-select :options="[{value: null, text: 'Bulk actions', disabled: true, selected: true}, {value: 1, text: 'Delete'}, {value: 2, text: 'Change folder'}]" />
                </mdb-col>
                <mdb-col xl="4" lg="6" md="6">
                  <mdb-select :options="[{value: null, text: 'Show only', disabled: true}, {value: 1, text: 'All', selected: true}, {value: 2, text: 'Clicks'}, {value: 3, text: 'Page'}]" />
                </mdb-col>
                <mdb-col xl="4" lg="6" md="6">
                  <mdb-select :options="[{value: null, text: 'Filter', disabled: true, selected: true}, {value: 1, text: 'All'}, {value: 2, text: 'Active'}, {value: 3, text: 'Inactive'}]" />
                </mdb-col>
              </mdb-row>
            </div>
            <div class="table-responsive mx-3">
              <!--Table-->
              <mdb-tbl class="table table-hover mb-0">

                <!--Table head-->
                <mdb-tbl-head>
                  <tr>
                    <th>
                      <input class="form-check-input" type="checkbox" id="checkbox7">
                      <label for="checkbox7" class="mr-2 label-table"></label>
                    </th>
                    <th class="th-lg">
                      <a>Name
                        <i class="fas fa-sort ml-1"></i>
                      </a>
                    </th>
                    <th class="th-lg">
                      <a>Condition
                        <i class="fas fa-sort ml-1"></i>
                      </a>
                    </th>
                    <th class="th-lg">
                      <a>Last edited
                        <i class="fas fa-sort ml-1"></i>
                      </a>
                    </th>
                    <th></th>
                  </tr>
                </mdb-tbl-head>
                <!--Table head-->

                <!--Table body-->
                <mdb-tbl-body>
                  <tr>
                    <th scope="row">
                      <input class="form-check-input" type="checkbox" id="checkbox8">
                      <label for="checkbox8" class="label-table"></label>
                    </th>
                    <td>Test subscription</td>
                    <td>
                      <code>Scroll %</code> equals or greater than
                      <strong>80</strong>
                    </td>
                    <td>12.06.2017</td>
                    <td>
                      <a>
                        <i class="fas fa-info mx-1" data-toggle="tooltip" data-placement="top" title="" data-original-title="Tooltip on top"></i>
                      </a>
                      <a>
                        <i class="fas fa-pencil-square mx-1"></i>
                      </a>
                      <a>
                        <i class="fas fa-times mx-1"></i>
                      </a>
                    </td>
                  </tr>
                  <tr>
                    <th scope="row">
                      <input class="form-check-input" type="checkbox" id="checkbox9">
                      <label for="checkbox9" class="label-table"></label>
                    </th>
                    <td>Product Hunt Visitor</td>
                    <td>
                      <code>Scroll %</code> equals or greater than
                      <strong>80</strong>
                    </td>
                    <td>13.06.2017</td>
                    <td>
                      <a>
                        <i class="fas fa-info mx-1" data-toggle="tooltip" data-placement="top" title="" data-original-title="Tooltip on top"></i>
                      </a>
                      <a>
                        <i class="fas fa-pencil-square mx-1"></i>
                      </a>
                      <a>
                        <i class="fas fa-times mx-1"></i>
                      </a>
                    </td>
                  </tr>
                  <tr>
                    <th scope="row">
                      <input class="form-check-input" type="checkbox" id="checkbox10">
                      <label for="checkbox10" class="label-table"></label>
                    </th>
                    <td>Test subscription</td>
                    <td>
                      <code>Scroll %</code> equals or greater than
                      <strong>80</strong>
                    </td>
                    <td>12.06.2017</td>
                    <td>
                      <a>
                        <i class="fas fa-info mx-1" data-toggle="tooltip" data-placement="top" title="" data-original-title="Tooltip on top"></i>
                      </a>
                      <a>
                        <i class="fas fa-pencil-square mx-1"></i>
                      </a>
                      <a>
                        <i class="fas fa-times mx-1"></i>
                      </a>
                    </td>
                  </tr>
                </mdb-tbl-body>
                <!--Table body-->
              </mdb-tbl>
              <!--Table-->
            </div>
          </mdb-accordion-pane>
          <mdb-accordion-pane title="Folder 2" type="table" :isOpen="openPaneNum==2" @pane-clicked="handlePaneOpened(2)">
            <mdb-dropdown class="float-left" slot="title">
              <mdb-dropdown-toggle @click.prevent.native="handlePaneOpened(0)" color="info" slot="toggle" class="pull-left dropdown mr-3" style="padding: 8px">
                <mdb-icon icon="pencil-alt" />
              </mdb-dropdown-toggle>
              <mdb-dropdown-menu color="info">
                <mdb-dropdown-item>Add new condition</mdb-dropdown-item>
                <mdb-dropdown-item>Rename folder</mdb-dropdown-item>
                <mdb-dropdown-item>Delete folder</mdb-dropdown-item>
              </mdb-dropdown-menu>
            </mdb-dropdown>
            <div class="table-ui p-2 mb-3 mx-3 mb-4">
              <mdb-row>
                <mdb-col xl="4" lg="6" md="12">
                  <mdb-select :options="[{value: null, text: 'Bulk actions', disabled: true, selected: true}, {value: 1, text: 'Delete'}, {value: 2, text: 'Change folder'}]" />
                </mdb-col>
                <mdb-col xl="4" lg="6" md="6">
                  <mdb-select :options="[{value: null, text: 'Show only', disabled: true}, {value: 1, text: 'All', selected: true}, {value: 2, text: 'Clicks'}, {value: 3, text: 'Page'}]" />
                </mdb-col>
                <mdb-col xl="4" lg="6" md="6">
                  <mdb-select :options="[{value: null, text: 'Filter', disabled: true, selected: true}, {value: 1, text: 'All'}, {value: 2, text: 'Active'}, {value: 3, text: 'Inactive'}]" />
                </mdb-col>
              </mdb-row>
            </div>
            <div class="table-responsive mx-3">
              <!--Table-->
              <mdb-tbl class="table table-hover mb-0">

                <!--Table head-->
                <mdb-tbl-head>
                  <tr>
                    <th>
                      <input class="form-check-input" type="checkbox" id="checkbox7">
                      <label for="checkbox7" class="mr-2 label-table"></label>
                    </th>
                    <th class="th-lg">
                      <a>Name
                        <i class="fas fa-sort ml-1"></i>
                      </a>
                    </th>
                    <th class="th-lg">
                      <a>Condition
                        <i class="fas fa-sort ml-1"></i>
                      </a>
                    </th>
                    <th class="th-lg">
                      <a>Last edited
                        <i class="fas fa-sort ml-1"></i>
                      </a>
                    </th>
                    <th></th>
                  </tr>
                </mdb-tbl-head>
                <!--Table head-->

                <!--Table body-->
                <mdb-tbl-body>
                  <tr>
                    <th scope="row">
                      <input class="form-check-input" type="checkbox" id="checkbox8">
                      <label for="checkbox8" class="label-table"></label>
                    </th>
                    <td>Test subscription</td>
                    <td>
                      <code>Scroll %</code> equals or greater than
                      <strong>80</strong>
                    </td>
                    <td>12.06.2017</td>
                    <td>
                      <a>
                        <i class="fas fa-info mx-1" data-toggle="tooltip" data-placement="top" title="" data-original-title="Tooltip on top"></i>
                      </a>
                      <a>
                        <i class="fas fa-pencil-square mx-1"></i>
                      </a>
                      <a>
                        <i class="fas fa-times mx-1"></i>
                      </a>
                    </td>
                  </tr>
                  <tr>
                    <th scope="row">
                      <input class="form-check-input" type="checkbox" id="checkbox9">
                      <label for="checkbox9" class="label-table"></label>
                    </th>
                    <td>Product Hunt Visitor</td>
                    <td>
                      <code>Scroll %</code> equals or greater than
                      <strong>80</strong>
                    </td>
                    <td>13.06.2017</td>
                    <td>
                      <a>
                        <i class="fas fa-info mx-1" data-toggle="tooltip" data-placement="top" title="" data-original-title="Tooltip on top"></i>
                      </a>
                      <a>
                        <i class="fas fa-pencil-square mx-1"></i>
                      </a>
                      <a>
                        <i class="fas fa-times mx-1"></i>
                      </a>
                    </td>
                  </tr>
                  <tr>
                    <th scope="row">
                      <input class="form-check-input" type="checkbox" id="checkbox10">
                      <label for="checkbox10" class="label-table"></label>
                    </th>
                    <td>Test subscription</td>
                    <td>
                      <code>Scroll %</code> equals or greater than
                      <strong>80</strong>
                    </td>
                    <td>12.06.2017</td>
                    <td>
                      <a>
                        <i class="fas fa-info mx-1" data-toggle="tooltip" data-placement="top" title="" data-original-title="Tooltip on top"></i>
                      </a>
                      <a>
                        <i class="fas fa-pencil-square mx-1"></i>
                      </a>
                      <a>
                        <i class="fas fa-times mx-1"></i>
                      </a>
                    </td>
                  </tr>
                </mdb-tbl-body>
                <!--Table body-->
              </mdb-tbl>
              <!--Table-->
            </div>
          </mdb-accordion-pane>
          <mdb-accordion-pane title="Folder 3" type="table" :isOpen="openPaneNum==3" @pane-clicked="handlePaneOpened(3)">
            <mdb-dropdown class="float-left" slot="title">
              <mdb-dropdown-toggle @click.prevent.native="handlePaneOpened(0)" color="info" slot="toggle" class="pull-left dropdown mr-3" style="padding: 8px">
                <mdb-icon icon="pencil-alt" />
              </mdb-dropdown-toggle>
              <mdb-dropdown-menu color="info">
                <mdb-dropdown-item>Add new condition</mdb-dropdown-item>
                <mdb-dropdown-item>Rename folder</mdb-dropdown-item>
                <mdb-dropdown-item>Delete folder</mdb-dropdown-item>
              </mdb-dropdown-menu>
            </mdb-dropdown>
            <div class="table-ui p-2 mb-3 mx-3 mb-4">
              <mdb-row>
                <mdb-col xl="4" lg="6" md="12">
                  <mdb-select :options="[{value: null, text: 'Bulk actions', disabled: true, selected: true}, {value: 1, text: 'Delete'}, {value: 2, text: 'Change folder'}]" />
                </mdb-col>
                <mdb-col xl="4" lg="6" md="6">
                  <mdb-select :options="[{value: null, text: 'Show only', disabled: true}, {value: 1, text: 'All', selected: true}, {value: 2, text: 'Clicks'}, {value: 3, text: 'Page'}]" />
                </mdb-col>
                <mdb-col xl="4" lg="6" md="6">
                  <mdb-select :options="[{value: null, text: 'Filter', disabled: true, selected: true}, {value: 1, text: 'All'}, {value: 2, text: 'Active'}, {value: 3, text: 'Inactive'}]" />
                </mdb-col>
              </mdb-row>
            </div>
            <div class="table-responsive mx-3">
              <!--Table-->
              <mdb-tbl class="table table-hover mb-0">

                <!--Table head-->
                <mdb-tbl-head>
                  <tr>
                    <th>
                      <input class="form-check-input" type="checkbox" id="checkbox7">
                      <label for="checkbox7" class="mr-2 label-table"></label>
                    </th>
                    <th class="th-lg">
                      <a>Name
                        <i class="fas fa-sort ml-1"></i>
                      </a>
                    </th>
                    <th class="th-lg">
                      <a>Condition
                        <i class="fas fa-sort ml-1"></i>
                      </a>
                    </th>
                    <th class="th-lg">
                      <a>Last edited
                        <i class="fas fa-sort ml-1"></i>
                      </a>
                    </th>
                    <th></th>
                  </tr>
                </mdb-tbl-head>
                <!--Table head-->

                <!--Table body-->
                <mdb-tbl-body>
                  <tr>
                    <th scope="row">
                      <input class="form-check-input" type="checkbox" id="checkbox8">
                      <label for="checkbox8" class="label-table"></label>
                    </th>
                    <td>Test subscription</td>
                    <td>
                      <code>Scroll %</code> equals or greater than
                      <strong>80</strong>
                    </td>
                    <td>12.06.2017</td>
                    <td>
                      <a>
                        <i class="fas fa-info mx-1" data-toggle="tooltip" data-placement="top" title="" data-original-title="Tooltip on top"></i>
                      </a>
                      <a>
                        <i class="fas fa-pencil-square mx-1"></i>
                      </a>
                      <a>
                        <i class="fas fa-times mx-1"></i>
                      </a>
                    </td>
                  </tr>
                  <tr>
                    <th scope="row">
                      <input class="form-check-input" type="checkbox" id="checkbox9">
                      <label for="checkbox9" class="label-table"></label>
                    </th>
                    <td>Product Hunt Visitor</td>
                    <td>
                      <code>Scroll %</code> equals or greater than
                      <strong>80</strong>
                    </td>
                    <td>13.06.2017</td>
                    <td>
                      <a>
                        <i class="fas fa-info mx-1" data-toggle="tooltip" data-placement="top" title="" data-original-title="Tooltip on top"></i>
                      </a>
                      <a>
                        <i class="fas fa-pencil-square mx-1"></i>
                      </a>
                      <a>
                        <i class="fas fa-times mx-1"></i>
                      </a>
                    </td>
                  </tr>
                  <tr>
                    <th scope="row">
                      <input class="form-check-input" type="checkbox" id="checkbox10">
                      <label for="checkbox10" class="label-table"></label>
                    </th>
                    <td>Test subscription</td>
                    <td>
                      <code>Scroll %</code> equals or greater than
                      <strong>80</strong>
                    </td>
                    <td>12.06.2017</td>
                    <td>
                      <a>
                        <i class="fas fa-info mx-1" data-toggle="tooltip" data-placement="top" title="" data-original-title="Tooltip on top"></i>
                      </a>
                      <a>
                        <i class="fas fa-pencil-square mx-1"></i>
                      </a>
                      <a>
                        <i class="fas fa-times mx-1"></i>
                      </a>
                    </td>
                  </tr>
                </mdb-tbl-body>
                <!--Table body-->
              </mdb-tbl>
              <!--Table-->
            </div>

          </mdb-accordion-pane>
      </mdb-accordion>
    </mdb-container>
  </div>
</template>

<script>
import { mdbContainer, mdbAccordion, mdbAccordionPane, mdbIcon, mdbRow, mdbCol, mdbSelect, mdbDropdown, mdbDropdownToggle, mdbDropdownMenu, mdbDropdownItem, mdbTbl, mdbTblHead, mdbTblBody } from 'mdbvue';

export default {
  name: 'AccordionPage',
  components: {
    mdbContainer,
    mdbAccordion,
    mdbAccordionPane,
    mdbIcon,
    mdbRow,
    mdbCol,
    mdbSelect,
    mdbDropdown,
    mdbDropdownMenu,
    mdbDropdownToggle,
    mdbDropdownItem,
    mdbTbl,
    mdbTblHead,
    mdbTblBody
  },
  data() {
    return {
      elHeight: 0,
      openPaneNum: 0,
      panesMaterial: [
        {
          title: 'Collapsible Group Item #1',
          content: 'Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven\'t heard of them accusamus labore sustainable VHS.'
        }, {
          title: 'Collapsible Group Item #2',
          content: 'Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven\'t heard of them accusamus labore sustainable VHS.'
        },
        {
          title: 'Collapsible Group Item #3',
          content: 'Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven\'t heard of them accusamus labore sustainable VHS.'
        },
      ],
      panesGradient: [
        {
          title: '#1',
          content: "Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable."
        },
        {
          title: '#2',
          content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
        },
        {
          title: '#3',
          content: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.'
        }
      ],
      panesPicture: [
        {
          title: 'I am the first title of accordion',
          content: `<div class="row my-4">
                      <div class="col-md-8">
                          <h2 class="font-weight-bold mb-3 black-text">Hi! I am the first one.</h2>
                          <p class="">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris</p>
                          <p class="mb-0">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
                      </div>
                      <div class="col-md-4 mt-3 pt-2">
                          <div class="view z-depth-1">
                              <img src="https://mdbootstrap.com/img/Photos/Others/nature.jpeg" alt="" class="img-fluid">
                          </div>
                      </div>
                  </div>`
        },{
          title: 'I am the second title of accordion',
          content: `<div class="row my-4">
                      <div class="col-md-8">
                          <h2 class="font-weight-bold mb-3 black-text">Hi! I am the second one.</h2>
                          <p class="">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris</p>
                          <p class="mb-0">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
                      </div>
                      <div class="col-md-4 mt-3 pt-2">
                          <div class="view z-depth-1">
                              <img src="https://mdbootstrap.com/img/Photos/Others/nature.jpeg" alt="" class="img-fluid">
                          </div>
                      </div>
                  </div>`
        },{
          title: 'I am the third title of accordion',
          content: `<div class="row my-4">
                      <div class="col-md-8">
                          <h2 class="font-weight-bold mb-3 black-text">Hi! I am the third one.</h2>
                          <p class="">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris</p>
                          <p class="mb-0">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
                      </div>
                      <div class="col-md-4 mt-3 pt-2">
                          <div class="view z-depth-1">
                              <img src="https://mdbootstrap.com/img/Photos/Others/nature.jpeg" alt="" class="img-fluid">
                          </div>
                      </div>
                  </div>`
        }
      ],
      panesIcon: [
        {
          title: 'How awesome accordion I am?',
          content: 'Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven\'t heard of them accusamus labore sustainable VHS.'
        },{
          title: 'You\'re the greatest accordion!',
          content: 'Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven\'t heard of them accusamus labore sustainable VHS.'
        },{
          title: 'Thank you my dear!',
          content: 'Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven\'t heard of them accusamus labore sustainable VHS.'
        }
      ],
      panesColor: [
        {
          title: 'First title',
          content: `<p>Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute,
                non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch
                3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda
                shoreditch et.</p>

                <p>Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt
                sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer
                farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them
                accusamus labore.</p>`
        },
        {
          title: 'Second title',
          content: `<p>Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute,
                non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch
                3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda
                shoreditch et.</p>

                <p>Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt
                sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer
                farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them
                accusamus labore.</p>`
        },
        {
          title: 'Third title',
          content: `<p>Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute,
                non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch
                3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda
                shoreditch et.</p>

                <p>Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt
                sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer
                farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them
                accusamus labore.</p>`
        },
        {
          title:'Fourth title',
          content: `<p>Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute,
                non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch
                3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda
                shoreditch et.</p>

                <p>Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt
                sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer
                farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them
                accusamus labore.</p>`
        },
        {
          title: 'Fifth title',
          content: `<p>Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute,
                non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch
                3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda
                shoreditch et.</p>

                <p>Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt
                sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer
                farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them
                accusamus labore.</p>`
        }
      ],
      panePhotoBg: [
        {
          title: 'Item #1',
          icon: 'cloud',
          content: `<p class="p-md-4 mb-0">Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute,
                                non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch
                                3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda
                                shoreditch et.</p>`
        },
        {
          title: 'Item #2',
          icon: 'comment-alt',
          content: `<p class="p-md-4 mb-0">Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute,
                                non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch
                                3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda
                                shoreditch et.</p>`
        },
        {
          title: 'Item #3',
          icon: 'cogs',
          content: `<p class="p-md-4 mb-0">Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute,
                                non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch
                                3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda
                                shoreditch et.</p>`
        },
      ]
    };
  },
  methods: {
    handlePaneOpened(num) {
      if (this.openPaneNum == num) {return (this.openPaneNum = null);}
      this.openPaneNum = num;
    }
  }
};
</script>

