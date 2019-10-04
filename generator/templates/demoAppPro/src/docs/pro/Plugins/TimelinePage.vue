<template>
  <mdb-container>
    <mdb-row class="mt-5 align-items-center justify-content-start">
      <h4 class="demo-title"><strong>Timeline</strong></h4>
      <a href="https://mdbootstrap.com/plugins/vue/timeline/?utm_source=DemoApp&utm_medium=MDBVuePro" waves-fixed class="border grey-text px-2 border-light rounded ml-2" target="_blank"><mdb-icon icon="graduation-cap" class="mr-2"/>Docs</a>
    </mdb-row>
    <hr class="mb-5" />

    <section class="demo-section">
      <h4>Basic Timeline</h4>
      <section class="p-5">
        <mdb-timeline>
          <mdb-timeline-item v-for="(item, i) in timeline" :key="i" :content="item.content" :title="item.title" :inverted="item.inverted" :color="item.color" :icon="item.icon" :far="item.far" :time="item.time"/>
        </mdb-timeline>
      </section>
    </section>
    <section class="demo-section">
      <h4>Colorful Timeline</h4>
      <section class="p-5">
        <mdb-timeline colorful>
          <mdb-timeline-item v-for="(item, i) in colorfulTimeline" :key="i" :content="item.content" :title="item.title" :inverted="item.inverted" :color="item.color" :icon="item.icon" :far="item.far" :time="item.time"/>
        </mdb-timeline>
      </section>
    </section>
    <section class="demo-section">
      <h4>Animated Timeline</h4>
      <section class="p-5">
        <mdb-timeline>
          <mdb-timeline-item v-for="(item, i) in animatedTimeline" :key="i" :content="item.content" :title="item.title" :inverted="item.inverted" :color="item.color" :icon="item.icon" :far="item.far" :time="item.time" :fab="item.fab" :animation="item.animation"/>
        </mdb-timeline>
      </section>
    </section>
    <section class="demo-section">
      <h4>Simple Timeline</h4>
      <section class="p-5">
        <mdb-timeline simple>
          <mdb-timeline-item v-for="(item, i) in simpleTimeline" :key="i" :content="item.content" :title="item.title" :inverted="item.inverted" :time="item.time"/>
        </mdb-timeline>
      </section>
    </section>
    <section class="demo-section">
      <h4>Timeline with images</h4>
      <section class="p-5">
        <mdb-timeline images lineColor="#26c6da">
          <mdb-timeline-item v-for="(item, i) in imageTimeline" :key="i" :content="item.content" :title="item.title" :inverted="item.inverted" :time="item.time" :imgSrc="item.imgSrc" :marker="item.marker" :color="item.color" />
        </mdb-timeline>
      </section>
    </section>
    <section class="demo-section">
      <h4>Timeline light</h4>
      <section class="p-5">
        <mdb-timeline light>
          <mdb-timeline-item icon="circle" far content="Text 1" tailStyle="dashed"/>
          <mdb-timeline-item icon="circle" far iconClass="grey-text" content="Text 2"/>
          <mdb-timeline-item icon="circle-notch" iconClass="red-text spinner-1" content="Text 3"/>
          <mdb-timeline-item icon="spinner" iconClass="purple-text spinner-2" tailColor="rgb(43, 187, 173)" tailStyle="dotted" content="Text 4" />
          <mdb-timeline-item far icon="smile" iconClass="black-text spinner-1" content="Text 5"/>
        </mdb-timeline>
      </section>
    </section>
    <section class="demo-section">
      <h4>Simple timeline with animated icons</h4>
      <section class="p-5">
        <mdb-timeline simple lineColor="#26c6da">
          <mdb-timeline-item title="Title" color="cyan" icon="circle" far iconClass="black-text" content="Place your content here" tailStyle="dashed"/>
          <mdb-timeline-item title="Title" color="cyan" icon="circle" far iconClass="black-text" content="Place your content here" inverted/>
          <mdb-timeline-item title="Title" color="cyan" icon="circle-notch" iconClass="black-text spinner-1" content="Place your content here"/>
          <mdb-timeline-item title="Title" color="cyan" icon="spinner" iconClass="black-text spinner-2" tailColor="rgb(43, 187, 173)" tailStyle="dotted" content="Place your content here" inverted/>
          <mdb-timeline-item title="Title" color="cyan" far icon="smile" iconClass="black-text spinner-1" content="Place your content here"/>
        </mdb-timeline>
      </section>
    </section>
  </mdb-container>
</template>

<script>
import { mdbContainer, mdbRow, mdbIcon, mdbTimeline, mdbTimelineItem } from 'mdbvue';

export default {
  name: 'TimelinePage',
  components: {
    mdbContainer,
    mdbRow,
    mdbIcon,
    mdbTimeline,
    mdbTimelineItem
  },
  data() {
    return {
      timeline: [
        {
          title: 'Sed ut perspiciatis unde',
          content: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.",
          icon: 'check',
          color: 'primary',
          inverted: false,
          time: "11 hours ago via Twitter"
        },
        {
          title: "Acusamus et iusto odio dignissimos ducimus",
          content: "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio.",
          icon: 'credit-card',
          color: 'warning',
          inverted: true,
          far: true
        },
        {
          title: 'Beatae vitae dicta sunt explicabo',
          content: "Totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.",
          icon: 'credit-card',
          color: 'danger',
          inverted: false,
        },
        {
          title: 'Sed ut perspiciatis unde',
          content: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.",
          icon: 'save',
          color: 'info',
          inverted: true,
        },
        {
          title: 'Perspiciatis unde',
          content: "Natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.",
          icon: 'thumbs-up',
          color: 'success',
          inverted: false,
          far: true
        }
      ],
      colorfulTimeline: [
        {
          title: 'Sed ut perspiciatis unde',
          content: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.",
          icon: 'check',
          color: 'warning',
          inverted: false,
          time: "11 hours ago via Twitter"
        },
        {
          title: "Acusamus et iusto odio dignissimos ducimus",
          content: "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio.",
          icon: 'credit-card',
          color: 'danger',
          inverted: true,
          far: true
        },
        {
          title: 'Beatae vitae dicta sunt explicabo',
          content: "Totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.",
          icon: 'credit-card',
          color: 'success',
          inverted: false,
        },
        {
          title: 'Sed ut perspiciatis unde',
          content: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.",
          icon: 'save',
          color: 'primary',
          inverted: true,
        },
        {
          title: 'Perspiciatis unde',
          content: "Natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.",
          icon: 'thumbs-up',
          color: 'info',
          inverted: false,
          far: true
        }
      ],
      animatedTimeline: [
        {
          title: 'Sed ut perspiciatis unde',
          content: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.",
          icon: 'heart',
          color: 'default',
          inverted: false,
          time: "11 hours ago via Twitter",
          animation: 'timeline-animation-left'
        },
        {
          title: "Acusamus et iusto odio dignissimos ducimus",
          content: "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio.",
          icon: 'users',
          color: 'secondary',
          inverted: true,
          animation: 'timeline-animation-right'
        },
        {
          title: 'Beatae vitae dicta sunt explicabo',
          content: "Totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.",
          icon: 'cloud',
          color: 'blue',
          inverted: false,
          animation: 'timeline-animation-left'
        },
        {
          title: 'Sed ut perspiciatis unde',
          content: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.",
          icon: 'coffee',
          color: 'danger',
          inverted: true,
          animation: 'timeline-animation-right'
        },
        {
          title: 'Perspiciatis unde',
          content: "Natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.",
          icon: 'instagram',
          color: 'stylish',
          inverted: false,
          fab: true,
          animation: 'timeline-animation-left'
        }
      ],
      simpleTimeline: [
        {
          title: 'Sed ut perspiciatis unde',
          content: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.",
          inverted: false,
          time: "11 hours ago via Twitter"
        },
        {
          title: "Acusamus et iusto odio dignissimos ducimus",
          content: "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio.",
          inverted: true,
        },
        {
          title: 'Beatae vitae dicta sunt explicabo',
          content: "Totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.",
          inverted: false,
        },
        {
          title: 'Sed ut perspiciatis unde',
          content: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.",
          inverted: true,
        },
        {
          title: 'Perspiciatis unde',
          content: "Natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.",
          inverted: false,
        }
      ],
      imageTimeline: [
        {
          title: 'Sed ut perspiciatis unde',
          content: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.",
          inverted: false,
          time: "11 hours ago via Twitter",
          imgSrc: "https://mdbootstrap.com/img/Photos/Slides/img%20(135).jpg",
          marker: "1",
          color: "cyan lighten-1"
        },
        {
          title: "Acusamus et iusto odio dignissimos ducimus",
          content: "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio.",
          inverted: true,
          imgSrc: "https://mdbootstrap.com/img/Photos/Slides/img%20(144).jpg",
          marker: "2",
          color: "cyan lighten-1"
        },
        {
          title: 'Beatae vitae dicta sunt explicabo',
          content: "Totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.",
          inverted: false,
          imgSrc: "https://mdbootstrap.com/img/Photos/Slides/img%20(129).jpg",
          marker: "3",
          color: "cyan lighten-1"
        },
        {
          title: 'Sed ut perspiciatis unde',
          content: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.",
          inverted: true,
          imgSrc: "https://mdbootstrap.com/img/Photos/Slides/img%20(131).jpg",
          marker: "4",
          color: "cyan lighten-1"
        },
        {
          title: 'Perspiciatis unde',
          content: "Natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.",
          inverted: false,
          imgSrc: "https://mdbootstrap.com/img/Photos/Slides/img%20(125).jpg",
          marker: "5",
          color: "cyan lighten-1"
        }
      ],
    };
  },
};

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
  .timeline-animation-left {
    animation-name: timeline-left
  }

  @keyframes timeline-left {
    from {
      padding-left: 100px;
    }
    to {
      padding-left: 24px
    }
  }

    .timeline-animation-right {
    animation-name: timeline-right
  }

  @keyframes timeline-right {
    from {
      padding-right: 100px;
    }
    to {
      padding-right: 24px
    }
  }

  .spinner-1 {
    animation: spinner 1s 1s infinite linear;
  }

  .spinner-2 {
    animation: spinner 2s 2s infinite linear;
  }

  @keyframes spinner {
    0% {
    transform: rotate(0deg);
    }
    100% {
      transform: rotate(-360deg);
    }
  }

  
  

</style>
