<template>
<mdb-container>
  <mdb-row class="mt-5 align-items-center justify-content-start">
    <h4 class="demo-title"><strong>Sticky Content</strong></h4>
    <a href="https://mdbootstrap.com/docs/vue/advanced/sticky-content/?utm_source=DemoApp&utm_medium=MDBVuePro" waves-fixed class="border grey-text px-2 border-light rounded ml-2" target="_blank"><mdb-icon icon="graduation-cap" class="mr-2"/>Docs</a>
  </mdb-row>
  <hr class="mb-4" />
  <div class="wrapper">
    <div class="content">
      <div class="headerBox">
        <div v-sticky="{ zIndex: 12, stickyTop: 50 }" class="z-depth-1" style="position: static; width: auto; top: 0px; z-index: 3;">
          <div class="header"> <!-- sticky wrapper, IMPORTANT -->
            <h1>Sticky Content demo</h1>
            <h4>Scroll down to see the effect</h4>
          </div>
        </div>
        <div class="sidebar">
          <h2>Static Widget</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam interdum luctus eros sed pretium. Proin turpis odio, viverra et tincidunt nec, tincidunt sed nisl.</p>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam interdum luctus eros sed pretium.</p>
        </div>
        <div class="article">
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vestibulum lacus sed velit luctus tempus. Ut bibendum gravida rutrum. Phasellus et ipsum id ante interdum laoreet. Vivamus pharetra tortor sed libero interdum at volutpat arcu cursus. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Maecenas porta tempor ullamcorper. Curabitur quis elit nisl. In tincidunt, purus eget commodo pretium, libero mauris egestas sem, in vestibulum sem lacus ac odio. Donec pharetra tristique nulla, non scelerisque mauris auctor in. Sed elit mauris, pellentesque sed iaculis id, condimentum eget sem. Maecenas at enim mi. Duis non nunc justo, vitae tristique purus. Quisque sagittis convallis elementum.</p>
        </div>
        <div class="sidebar">
          <h2>Static Widget</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam interdum luctus eros sed pretium. Proin turpis odio, viverra et tincidunt nec, tincidunt sed nisl.</p>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam interdum luctus eros sed pretium.</p>
        </div>
      </div>


      <div class="articleBox">
        <div class="sidebar">
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam interdum luctus eros sed pretium. Proin turpis odio, viverra et tincidunt nec, tincidunt sed nisl.</p>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam interdum luctus eros sed pretium. Proin turpis odio, viverra et tincidunt nec, tincidunt sed nisl.</p>
          <div class="leftColumn">
            <div v-sticky='{ zIndex: 12, stickyTop: 100 }'>
              <div class="header">  <!-- sticky wrapper, IMPORTANT -->
                <h2>Sticky Widget</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam interdum luctus eros sed pretium. Proin turpis odio, viverra et tincidunt nec, tincidunt sed nisl.</p>
              </div>
            </div>
            <h2 className="mt-3">Static Widget</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam interdum luctus eros sed pretium. Proin turpis odio, viverra et tincidunt nec, tincidunt sed nisl.</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam interdum luctus eros sed pretium. Proin turpis odio, viverra et tincidunt nec, tincidunt sed nisl.</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam interdum luctus eros sed pretium. Proin turpis odio, viverra et tincidunt nec, tincidunt sed nisl.</p>
          </div>
        </div>
        <div class="article">
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vestibulum lacus sed velit luctus tempus. Ut bibendum gravida rutrum. Phasellus et ipsum id ante interdum laoreet. Vivamus pharetra tortor sed libero interdum at volutpat arcu cursus. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Maecenas porta tempor ullamcorper. Curabitur quis elit nisl. In tincidunt, purus eget commodo pretium, libero mauris egestas sem, in vestibulum sem lacus ac odio. Donec pharetra tristique nulla, non scelerisque mauris auctor in. Sed elit mauris, pellentesque sed iaculis id, condimentum eget sem. Maecenas at enim mi. Duis non nunc justo, vitae tristique purus. Quisque sagittis convallis elementum.</p>

          <p>Donec sed lectus tellus. Cras felis leo, imperdiet a interdum in, vestibulum eu quam. Donec elit est, interdum eget mattis quis, semper ac est. Nam dignissim ultrices risus, a ornare justo pretium vitae. Quisque vitae pellentesque mauris. Cras consectetur laoreet adipiscing. Morbi placerat, elit et dapibus vestibulum, ipsum diam pellentesque metus, eu tincidunt tellus elit in quam. Mauris quis accumsan urna. Proin commodo sapien volutpat lectus ultricies varius. Duis elit enim, dapibus nec convallis id, egestas non neque. Sed a libero eu dolor ultrices ultricies a sit amet nulla.</p>

          <p>In hac habitasse platea dictumst. Nulla a velit dolor. Vestibulum in purus libero. Donec et orci libero. Proin eget lacinia nisi. Proin eget pretium nisi. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse purus diam, adipiscing quis ultrices in, fringilla non neque. Integer et lectus lectus, vel congue massa. Duis tincidunt ipsum non quam bibendum et lacinia purus viverra. Etiam tortor est, volutpat vel ultricies a, aliquet et augue. Vivamus sed nulla enim, vel egestas tortor.</p>

          <p>Cras eu ipsum ac erat convallis gravida. Donec porta consequat odio, id pharetra augue volutpat vitae. Etiam ut volutpat dui. Vestibulum eu risus leo. Ut quis nisl in magna gravida feugiat in vel libero. Donec felis nunc, fermentum quis luctus elementum, vulputate quis turpis. Vestibulum erat arcu, feugiat eu eleifend et, pretium et enim. Integer dignissim nunc ac velit pharetra quis laoreet ipsum varius. Praesent dictum, elit tempus aliquam vulputate, lorem est euismod neque, sit amet vulputate nisl turpis at magna. Maecenas felis ipsum, adipiscing ut mollis ut, feugiat vel nunc. Morbi blandit, enim a faucibus cursus, mi nunc rutrum turpis, a dictum diam justo eget ipsum. Vestibulum facilisis dolor sed elit faucibus nec ornare eros bibendum. Etiam enim odio, ultricies vitae imperdiet vel, aliquam id ante. In hac habitasse platea dictumst. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus vitae fringilla sapien.</p>

          <p>Sed consectetur ornare nisi eu lobortis. Curabitur nunc purus, vulputate vel blandit nec, dignissim pharetra tortor. Nulla sagittis condimentum semper. Maecenas auctor hendrerit enim, quis ultrices justo venenatis sagittis. Aliquam erat volutpat. In hac habitasse platea dictumst. Sed sed ipsum lorem, eu tincidunt lacus. Suspendisse porttitor, elit sit amet placerat vestibulum, urna urna convallis odio, nec accumsan urna nulla sit amet orci.</p>

          <p>Sed in massa diam, et luctus neque. Morbi viverra turpis ut quam faucibus mattis quis sit amet lorem. Vestibulum porta tellus at sem rhoncus pharetra. Aenean quis erat eu sem convallis scelerisque cursus at lectus. Morbi ipsum turpis, consectetur et scelerisque quis, molestie sit amet sem. Etiam mollis, quam pellentesque sagittis egestas, justo nibh gravida lacus, ac rhoncus leo neque sed leo. Nunc consequat lacinia lorem, et blandit justo tempus non. Morbi quam turpis, sodales non porttitor nec, fermentum vel risus. Praesent quam lacus, hendrerit a consectetur a, viverra vitae enim. Morbi varius pulvinar mi, ut sodales eros mattis viverra. Nam condimentum, ante nec varius posuere, turpis orci gravida nulla, eget cursus tellus libero sed risus.</p>

          <p>Suspendisse pulvinar urna non libero viverra viverra. Pellentesque commodo sagittis mattis. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Nulla consequat nunc semper enim sodales accumsan aliquam justo luctus. Pellentesque quis leo at mauris malesuada malesuada. Integer vel metus lectus. Duis lobortis, massa ac viverra dignissim, ipsum magna auctor ante, et venenatis massa justo eget velit. Pellentesque vel leo ipsum, rhoncus adipiscing lacus. Donec neque lacus, tempus id pulvinar et, fermentum vitae lectus. Pellentesque aliquam velit sit amet libero ornare eu facilisis sem tristique. Nunc faucibus congue lorem, non ultricies ligula faucibus non. Duis vehicula, est sit amet congue convallis, leo lorem posuere eros, a feugiat felis nisl non turpis.</p>

          <p>Donec arcu lectus, ullamcorper ut blandit sit amet, consequat eu quam. Fusce augue augue, blandit non ornare nec, auctor in purus. Quisque nec turpis arcu. Phasellus hendrerit massa quis erat pulvinar dapibus. Maecenas at elit et nulla tempor varius. Aenean consectetur elit ac ligula dignissim aliquam. Praesent adipiscing metus bibendum libero malesuada porta. Suspendisse potenti. Cras molestie mauris id orci lobortis congue. Phasellus accumsan placerat euismod. Vivamus non viverra dolor. Ut tempus gravida elit, sed vehicula velit porttitor sit amet.</p>

        </div>

        <div class="sidebar rightColumn">
          <div v-sticky='{ zIndex: 12, stickyTop: 100 }'>
            <div class="header">  <!-- sticky wrapper, IMPORTANT -->
              <h2>Sticky Widget</h2>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam interdum luctus eros sed pretium. Proin turpis odio, viverra et tincidunt nec, tincidunt sed nisl.</p>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam interdum luctus eros sed pretium. Proin turpis odio, viverra et tincidunt nec, tincidunt sed nisl.</p>
            </div>
          </div>
          <h2 className="mt-5">Static Widget</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam interdum luctus eros sed pretium. Proin turpis odio, viverra et tincidunt nec, tincidunt sed nisl.</p>
        </div>
      </div>
    </div>
    <div class="stopPoint text-center">
      <h1 class="pt-3">Stop Point</h1>
    </div>
  </div>
</mdb-container>
</template>

<script>
import { mdbBtn, mdbContainer, Sticky, mdbIcon, mdbRow } from 'mdbvue';

export default {
  name: 'Test',
  components: {
    mdbBtn,
    mdbContainer,
    mdbIcon,
    mdbRow
  },
  data() {
    return {

    };
  },
  directives: {
    'sticky': Sticky,
  },
};
</script>

<style>
.wrapper {
  width: 960px;
  margin: 0 auto;
}

.content {
  height: 3000px;
}

.header {
  background: #2f93ce;
  color: #fff;
  padding: 10px 20px;
  margin: 0;
  width: 100%;
}

.headerBox {
  height: 465px;
  padding: 0;
}

.sidebar {
  float: left;
  width: 230px;
  padding: 10px 15px;
}

.article {
   width: 458px;
   padding: 0 20px;
   border-left: 1px solid #ccc;
   border-right: 1px solid #ccc;
   float: left;
}

.articleBox {
  height: 900px;
}
.leftColumn {
  height: 2200px;
}

.rightColumn {
  height: 2540px;
}

.stopPoint {
  height: 500px;
  background: rgb(103, 104, 107);
  color: #fff;
}
</style>
