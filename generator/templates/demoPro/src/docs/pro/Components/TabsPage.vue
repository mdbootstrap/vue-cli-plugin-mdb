<template>
  <mdb-container>
    <mdb-row class="mt-5 align-items-center justify-content-start">
      <h4 class="demo-title"><strong>Tabs</strong></h4>
      <a href="https://mdbootstrap.com/docs/vue/components/tabs/?utm_source=DemoApp&utm_medium=MDBVuePro" waves-fixed class="border grey-text px-2 border-light rounded ml-2" target="_blank"><mdb-icon icon="graduation-cap" class="mr-2"/>Docs</a>
    </mdb-row>
    <hr />
    <mdb-container class="mt-5">
      <h4 class="mb-4">Material tabs</h4>
      <mdb-tabs 
        :active="0"
        tabs 
        card
        class="mb-5"
        :links="[
          { text: 'Home' },
          { text: 'Profile' },
          { text: 'Contact' }]" 
        :content="[
          `Raw denim you probably haven't heard of them jean shorts Austin. Nesciunt tofu stumptown aliqua, retro synth master cleanse. Mustache cliche tempor, williamsburg carles vegan helvetica. Reprehenderit butcher retro keffiyeh dreamcatcher synth. Cosby sweater eu banh mi, qui irure terry richardson ex squid. Aliquip placeat salvia cillum iphone. Seitan aliquip quis cardigan american apparel, butcher voluptate nisi qui.`,
          `Food truck fixie locavore, accusamus mcsweeney's marfa nulla single-origin coffee squid. Exercitation +1 labore velit, blog sartorial PBR leggings next level wes anderson artisan four loko farm-to-table craft beer twee. Qui photo booth letterpress, commodo enim craft beer mlkshk aliquip jean shorts ullamco ad vinyl cillum PBR. Homo nostrud organic, assumenda labore aesthetic magna delectus mollit. Keytar helvetica VHS salvia yr, vero magna velit sapiente labore stumptown. Vegan fanny pack odio cillum wes anderson 8-bit, sustainable jean shorts beard ut DIY ethical culpa terry richardson biodiesel. Art party scenester stumptown, tumblr butcher vero sint qui sapiente accusamus tattooed echo park.`,
          `Etsy mixtape wayfarers, ethical wes anderson tofu before they sold out mcsweeney's organic lomo retro fanny pack lo-fi farm-to-table readymade. Messenger bag gentrify pitchfork tattooed craft beer, iphone skateboard locavore carles etsy salvia banksy hoodie helvetica. DIY synth PBR banksy irony. Leggings gentrify squid 8-bit cred pitchfork. Williamsburg banh mi whatever gluten-free, carles pitchfork biodiesel fixie etsy retro mlkshk vice blog. Scenester cred you probably haven't heard of them, vinyl craft beer blog stumptown. Pitchfork sustainable tofu synth chambray yr.`]"
      />

      <h4 class="mb-4">Tabs with dropdown</h4>
      <mdb-tabs 
        :active="0"
        tabs 
        color="default"
        class="mb-4"
        :links="[
          { text: 'Active' },
          { text: 'Dropdown', dropdown: true, dropdownItems: [{ text: 'Action' }, { text: 'Another action' }, { text: 'Something else here' }, { divider: true }, { text: 'Separeted link'}]},
          { text: 'Link' },
          { text: 'Disabled', disabled: true } ]" 
      />

      <h4 class="mb-4">Tabs justified</h4>
      <mdb-tabs 
        :active="0"
        tabs 
        card
        class="mb-5"
        color="indigo"
        :zIndex="0"
        justify
        :links="[
          { text: 'Home' },
          { text: 'Profile' },
          { text: 'Contact' }]" 
        :content="[
          `Raw denim you probably haven't heard of them jean shorts Austin. Nesciunt tofu stumptown aliqua, retro synth master cleanse. Mustache cliche tempor, williamsburg carles vegan helvetica. Reprehenderit butcher retro keffiyeh dreamcatcher synth. Cosby sweater eu banh mi, qui irure terry richardson ex squid. Aliquip placeat salvia cillum iphone. Seitan aliquip quis cardigan american apparel, butcher voluptate nisi qui.`,
          `Food truck fixie locavore, accusamus mcsweeney's marfa nulla single-origin coffee squid. Exercitation +1 labore velit, blog sartorial PBR leggings next level wes anderson artisan four loko farm-to-table craft beer twee. Qui photo booth letterpress, commodo enim craft beer mlkshk aliquip jean shorts ullamco ad vinyl cillum PBR. Homo nostrud organic, assumenda labore aesthetic magna delectus mollit. Keytar helvetica VHS salvia yr, vero magna velit sapiente labore stumptown. Vegan fanny pack odio cillum wes anderson 8-bit, sustainable jean shorts beard ut DIY ethical culpa terry richardson biodiesel. Art party scenester stumptown, tumblr butcher vero sint qui sapiente accusamus tattooed echo park.`,
          `Etsy mixtape wayfarers, ethical wes anderson tofu before they sold out mcsweeney's organic lomo retro fanny pack lo-fi farm-to-table readymade. Messenger bag gentrify pitchfork tattooed craft beer, iphone skateboard locavore carles etsy salvia banksy hoodie helvetica. DIY synth PBR banksy irony. Leggings gentrify squid 8-bit cred pitchfork. Williamsburg banh mi whatever gluten-free, carles pitchfork biodiesel fixie etsy retro mlkshk vice blog. Scenester cred you probably haven't heard of them, vinyl craft beer blog stumptown. Pitchfork sustainable tofu synth chambray yr.`]"
      />

      <h4 class="mb-4">Pills within tabs</h4>
      <mdb-tab tabs color="primary" justify>
        <mdb-tab-item icon="user" :active="pillsActive==0" @click.native.prevent="pillsActive=0">Profile</mdb-tab-item>
        <mdb-tab-item icon="heart" :active="pillsActive==1" @click.native.prevent="pillsActive=1">Follow</mdb-tab-item>
      </mdb-tab>
      <mdb-tab-content>
        <mdb-tab-pane class="fade" key="show1" v-if="pillsActive==0">
          <mdb-row>
            <mdb-col md="3">
              <mdb-tab pills color="primary" vertical>
                <mdb-tab-item :active="verticalWithin==0" @click.native.prevent="verticalWithin=0">Downloads <mdb-icon icon="download" class="ml-2"/></mdb-tab-item>
                <mdb-tab-item :active="verticalWithin==1" @click.native.prevent="verticalWithin=1">Orders & Invoices <mdb-icon icon="file" class="ml-2"/></mdb-tab-item>
                <mdb-tab-item :active="verticalWithin==2" @click.native.prevent="verticalWithin=2">Billing Details <mdb-icon icon="address-card" class="ml-2"/></mdb-tab-item>
              </mdb-tab>
            </mdb-col>
            <mdb-col md="9">
              <mdb-tab-content vertical>
                <mdb-tab-pane class="fade" key="pills1" v-if="verticalWithin==0"><h5 class="my-2 h5">Panel 1</h5></mdb-tab-pane>
                <mdb-tab-pane class="fade" key="pills2" v-if="verticalWithin==1"><h5 class="my-2 h5">Panel 2</h5></mdb-tab-pane>
                <mdb-tab-pane class="fade" key="pills3" v-if="verticalWithin==2"><h5 class="my-2 h5">Panel 3</h5></mdb-tab-pane>
              </mdb-tab-content>
            </mdb-col>
          </mdb-row>
        </mdb-tab-pane>
        <mdb-tab-pane class="fade" key="show2" v-if="pillsActive==1"><br/>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. <br><br>Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat.</mdb-tab-pane>
      </mdb-tab-content>

      <h4 class="mb-4">Classic tabs with border</h4>
      <div class="classic-tabs">
        <mdb-tabs 
          :active="0" 
          border
          class="mb-5"
          color="cyan"
          :links="[
            { text: 'Profile' },
            { text: 'Follow' },
            { text: 'Contact' },
            { text: 'Be awesome' }]" 
          :content="[
            `Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.`,
            `Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?`,
            `At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus.`,
            `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`]"
        />
      </div>

      <h4 class="mb-4">Classic tabs with shadow</h4>
      <div class="classic-tabs">
        <mdb-tabs 
          :active="0" 
          card
          class="mb-5"
          color="cyan"
          :links="[
            { text: 'Profile' },
            { text: 'Follow' },
            { text: 'Contact' },
            { text: 'Be awesome' }]" 
          :content="[
            `Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.`,
            `Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?`,
            `At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus.`,
            `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`]"
        />
      </div>

      <h4 class="mb-4">Classic tabs with icons</h4>
      <div class="classic-tabs">
        <mdb-tabs 
          :active="0" 
          card
          class="mb-5"
          color="orange"
          :links="[
            { text: 'Profile', icon: 'user', bigIcon: true },
            { text: 'Follow', icon: 'heart', bigIcon: true },
            { text: 'Contact', icon: 'envelope', bigIcon: true },
            { text: 'Be awesome', icon: 'star', bigIcon: true }]" 
          :content="[
            `Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.`,
            `Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?`,
            `At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus.`,
            `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`]"
        />
      </div>

    </mdb-container>
  </mdb-container>
</template>

<script>
import { mdbTab, mdbTabItem, mdbTabContent, mdbTabPane, mdbContainer, mdbCol, mdbRow, mdbIcon, mdbTabs } from 'mdbvue';

export default {
  name: 'TabPage',
  components: {
    mdbTab,
    mdbTabItem,
    mdbTabContent,
    mdbTabPane,
    mdbContainer,
    mdbCol,
    mdbRow,
    mdbIcon,
    mdbTabs
  },
  data() {
    return {
      pillsActive: 0,
      verticalWithin: 0
    };
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h4 {
  font-weight: bold;
}
</style>
