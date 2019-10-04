<template>
  <mdb-container>
    <mdb-row class="mt-5 align-items-center justify-content-start">
      <h4 class="demo-title"><strong>Social Sections</strong></h4>
      <a href="https://mdbootstrap.com/docs/vue/sections/social/" waves-fixed class="border grey-text px-2 border-light rounded ml-2" target="_blank"><mdb-icon icon="graduation-cap" class="mr-2"/>Docs</a>
    </mdb-row>
    <hr />
    <mdb-container>
      <h2 class="title pt-4 my-5">
        <strong>Social newsfeed v.1 </strong>
      </h2>
      <div class="mdb-feed">
        <div class="news">
          <div class="label">
            <img src="https://mdbootstrap.com/img/Photos/Avatars/avatar-1-mini.jpg" class="rounded-circle z-depth-1-half"/>
          </div>
          <div class="excerpt">
            <div class="brief">
              <a class="name">John Doe</a> added you as a friend
              <div class="date">1 hour ago</div>
            </div>
            <div class="feed-footer">
              <a class="like">
                <mdb-icon icon="heart"/>
                <span>5 likes</span>
              </a>
            </div>
          </div>
        </div>

        <div class="news">
          <div class="label">
            <img src="https://mdbootstrap.com/img/Photos/Avatars/img%20(17)-mini.jpg" class="rounded-circle z-depth-1-half"/>
          </div>
          <div class="excerpt">
            <div class="brief">
              <a class="name">Anna Smith</a> added <a>2 new illustrations</a>
              <div class="date">4 hours ago</div>
            </div>
            <div class="added-images">
              <img src="https://mdbootstrap.com/img/Photos/Others/images/71.jpg" class="z-depth-1 rounded mb-md-0 mb-2"/>
              <img src="https://mdbootstrap.com/img/Photos/Others/images/74.jpg" class="z-depth-1 rounded"/>
            </div>
            <div class="feed-footer">
              <a class="like">
              <mdb-icon icon="heart"/>
                <span>18 likes</span>
              </a>
            </div>
          </div>
        </div>

        <div class="news">
          <div class="label">
            <img src="https://mdbootstrap.com/img/Photos/Avatars/img%20(9)-mini.jpg" class="rounded-circle z-depth-1-half"/>
          </div>
          <div class="excerpt">
            <div class="brief">
              <a class="name">Danny Moore</a> added you as a friend
              <div class="date">7 hours ago</div>
            </div>
            <div class="feed-footer">
              <a class="like">
              <mdb-icon icon="heart"/>
                <span>11 likes</span>
              </a>
            </div>
          </div>
        </div>

        <div class="news">
          <div class="label">
            <img src="https://mdbootstrap.com/img/Photos/Avatars/img%20(18)-mini.jpg" class="rounded-circle z-depth-1-half"/>
          </div>
          <div class="excerpt">
            <div class="brief">
              <a class="name">Lili Rose</a> posted on her page
              <div class="date">2 days ago</div>
            </div>
            <div class="added-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vero inventore, iste quas libero eius? Vitae sint neque animi alias sunt dolor, accusantium ducimus, non placeat voluptate.</div>
            <div class="feed-footer">
              <a class="like">
              <mdb-icon icon="heart"/>
                <span>7 likes</span>
              </a>
            </div>
          </div>
        </div>

        <div class="news">
          <div class="label">
            <img src="https://mdbootstrap.com/img/Photos/Avatars/img%20(20)-mini.jpg" class="rounded-circle z-depth-1-half"/>
          </div>
          <div class="excerpt">
            <div class="brief">
              <a class="name">Kate Harrison</a> added <a> 2 new photos</a> of you
              <div class="date">3 days ago</div>
            </div>
            <div class="added-images">
              <img src="https://mdbootstrap.com/img/Photos/Others/images/29.jpg" class="z-depth-1 rounded mb-md-0 mb-2"/>
              <img src="https://mdbootstrap.com/img/Photos/Others/images/31.jpg" class="z-depth-1 rounded"/>
            </div>
            <div class="feed-footer">
              <a class="like">
              <mdb-icon icon="heart"/>
                <span>53 likes</span>
              </a>
            </div>
          </div>
        </div>
      </div>


      <h2 class="title pt-4 my-4">
        <strong>Social newsfeed v.2 </strong>
      </h2>
      <mdb-row>
        <div class="mdb-feed">
          <div class="news">
            <div class="label">
              <img src="https://mdbootstrap.com/img/Photos/Avatars/avatar-1-mini.jpg" class="rounded-circle z-depth-1-half"/>
            </div>
            <div class="excerpt">
              <div class="brief">
                <a class="name">John Doe</a> added you as a friend
                <div class="date">1 hour ago</div>
              </div>
              <div class="feed-footer">
                  <a class="comment" aria-expanded="false" aria-controls="collapseExample-1" @click="comment1=!comment1">Comment </a> &middot; <span><a> 7 </a></span>
                  <a class="thumbs">
                    <mdb-tooltip trigger="hover" :options="{placement: 'top'}" tag="span">
                      <div class="tooltip">
                        I like it
                      </div>
                      <mdb-icon slot="reference" icon="thumbs-up"/>
                    </mdb-tooltip>
                  </a>
                  <a class="thumbs">
                    <mdb-tooltip trigger="hover" :options="{placement: 'top'}" tag="span">
                      <div class="tooltip">
                        I don't like it
                      </div>
                      <mdb-icon slot="reference" icon="thumbs-down"/>
                    </mdb-tooltip>
                  </a>
                <transition @before-enter="beforeEnter" @enter="enter" @before-leave="beforeLeave">
                  <mdb-collapse v-if="comment1" class="collapse-item">
                    <mdb-card class="card-body mt-1">
                      <mdb-textarea label="Add comment"/>
                      <div class="d-flex justify-content-end">
                        <mdb-btn flat @click.native="comment1=!comment1">Cancel</mdb-btn>
                        <mdb-btn color="primary" @click.native="comment1=!comment1">Reply</mdb-btn>
                      </div>
                    </mdb-card>
                  </mdb-collapse>
                </transition>
              </div>
            </div>
          </div>

          <div class="news">
            <div class="label">
              <img src="https://mdbootstrap.com/img/Photos/Avatars/img%20(17)-mini.jpg" class="rounded-circle z-depth-1-half"/>
            </div>
            <div class="excerpt">
              <div class="brief">
                <a class="name">Anna Smith</a> added <a>2 new illustrations</a>
                <div class="date">4 hours ago</div>
              </div>
              <div class="added-images">
                <img src="https://mdbootstrap.com/img/Photos/Others/images/50.jpg" class="z-depth-1 rounded mb-md-0 mb-2"/>
                <img src="https://mdbootstrap.com/img/Photos/Others/images/52.jpg" class="z-depth-1 rounded"/>
              </div>
              <div class="feed-footer">
                  <a class="comment" aria-expanded="false" aria-controls="collapseExample-1" @click="comment2=!comment2">Comment </a> &middot; <span><a> 31 </a></span>
                  <a class="thumbs">
                    <mdb-tooltip trigger="hover" :options="{placement: 'top'}" tag="span">
                      <div class="tooltip">
                        I like it
                      </div>
                      <mdb-icon slot="reference" icon="thumbs-up"/>
                    </mdb-tooltip>
                  </a>
                  <a class="thumbs">
                    <mdb-tooltip trigger="hover" :options="{placement: 'top'}" tag="span">
                      <div class="tooltip">
                        I don't like it
                      </div>
                      <mdb-icon slot="reference" icon="thumbs-down"/>
                    </mdb-tooltip>
                  </a>
                </div>
                <transition @before-enter="beforeEnter" @enter="enter" @before-leave="beforeLeave">
                  <mdb-collapse v-if="comment2" class="collapse-item">
                    <mdb-card class="card-body mt-1">
                      <mdb-textarea label="Add comment"/>
                      <div class="d-flex justify-content-end">
                        <mdb-btn flat @click.native="comment2=!comment2">Cancel</mdb-btn>
                        <mdb-btn color="primary" @click.native="comment2=!comment2">Reply</mdb-btn>
                      </div>
                    </mdb-card>
                  </mdb-collapse>
                </transition>
            </div>
          </div>

          <div class="news">
            <div class="label">
              <img src="https://mdbootstrap.com/img/Photos/Avatars/img%20(9)-mini.jpg" class="rounded-circle z-depth-1-half"/>
            </div>
            <div class="excerpt">
              <div class="brief">
                <a class="name">Danny Moore</a> added you as a friend
                <div class="date">7 hours ago</div>
              </div>
              <div class="feed-footer">
                  <a class="comment" aria-expanded="false" aria-controls="collapseExample-1" @click="comment3=!comment3">Comment </a> &middot; <span><a> 12 </a></span>
                  <a class="thumbs">
                    <mdb-tooltip trigger="hover" :options="{placement: 'top'}" tag="span">
                      <div class="tooltip">
                        I like it
                      </div>
                      <mdb-icon slot="reference" icon="thumbs-up"/>
                    </mdb-tooltip>
                  </a>
                  <a class="thumbs">
                    <mdb-tooltip trigger="hover" :options="{placement: 'top'}" tag="span">
                      <div class="tooltip">
                        I don't like it
                      </div>
                      <mdb-icon slot="reference" icon="thumbs-down"/>
                    </mdb-tooltip>
                  </a>
                </div>
                <transition @before-enter="beforeEnter" @enter="enter" @before-leave="beforeLeave">
                  <mdb-collapse v-if="comment3" class="collapse-item">
                    <mdb-card class="card-body mt-1">
                      <mdb-textarea label="Add comment"/>
                      <div class="d-flex justify-content-end">
                        <mdb-btn flat @click.native="comment3=!comment3">Cancel</mdb-btn>
                        <mdb-btn color="primary" @click.native="comment3=!comment3">Reply</mdb-btn>
                      </div>
                    </mdb-card>
                  </mdb-collapse>
                </transition>
            </div>
          </div>

          <div class="news">
            <div class="label">
              <img src="https://mdbootstrap.com/img/Photos/Avatars/img%20(18)-mini.jpg" class="rounded-circle z-depth-1-half"/>
            </div>
            <div class="excerpt">
              <div class="brief">
                <a class="name">Lili Rose</a> posted on her page
                <div class="date">2 days ago</div>
              </div>
              <div class="added-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vero inventore, iste quas libero eius? Vitae sint neque animi alias sunt dolor, accusantium ducimus, non placeat voluptate.</div>
              <div class="feed-footer">
                  <a class="comment" aria-expanded="false" aria-controls="collapseExample-1" @click="comment4=!comment4">Comment </a> &middot; <span><a> 25 </a></span>
                  <a class="thumbs">
                    <mdb-tooltip trigger="hover" :options="{placement: 'top'}" tag="span">
                      <div class="tooltip">
                        I like it
                      </div>
                      <mdb-icon slot="reference" icon="thumbs-up"/>
                    </mdb-tooltip>
                  </a>
                  <a class="thumbs">
                    <mdb-tooltip trigger="hover" :options="{placement: 'top'}" tag="span">
                      <div class="tooltip">
                        I don't like it
                      </div>
                      <mdb-icon slot="reference" icon="thumbs-down"/>
                    </mdb-tooltip>
                  </a>
                </div>
                <transition @before-enter="beforeEnter" @enter="enter" @before-leave="beforeLeave">
                  <mdb-collapse v-if="comment4" class="collapse-item">
                    <mdb-card class="card-body mt-1">
                      <mdb-textarea label="Add comment"/>
                      <div class="d-flex justify-content-end">
                        <mdb-btn flat @click.native="comment4=!comment4">Cancel</mdb-btn>
                        <mdb-btn color="primary" @click.native="comment4=!comment4">Reply</mdb-btn>
                      </div>
                    </mdb-card>
                  </mdb-collapse>
                </transition>
            </div>
          </div>

          <div class="news">
            <div class="label">
              <img src="https://mdbootstrap.com/img/Photos/Avatars/img%20(20)-mini.jpg" class="rounded-circle z-depth-1-half"/>
            </div>
            <div class="excerpt">
              <div class="brief">
                <a class="name">Kate Harrison</a> added <a> 2 new photos</a> of you
                <div class="date">3 days ago</div>
              </div>
              <div class="added-images">
                <img src="https://mdbootstrap.com/img/Photos/Others/images/81.jpg" class="z-depth-1 rounded mb-md-0 mb-2"/>
                <img src="https://mdbootstrap.com/img/Photos/Others/images/86.jpg" class="z-depth-1 rounded"/>
              </div>
              <div class="feed-footer">
                <a class="comment" aria-expanded="false" aria-controls="collapseExample-1" @click="comment5=!comment5">Comment </a> &middot; <span><a> 47 </a></span>
                <a class="thumbs">
                  <mdb-tooltip trigger="hover" :options="{placement: 'top'}" tag="span">
                    <div class="tooltip">
                      I like it
                    </div>
                    <mdb-icon slot="reference" icon="thumbs-up"/>
                  </mdb-tooltip>
                </a>
                <a class="thumbs">
                  <mdb-tooltip trigger="hover" :options="{placement: 'top'}" tag="span">
                    <div class="tooltip">
                      I don't like it
                    </div>
                    <mdb-icon slot="reference" icon="thumbs-down"/>
                  </mdb-tooltip>
                </a>
              </div>
              <transition @before-enter="beforeEnter" @enter="enter" @before-leave="beforeLeave">
                <mdb-collapse v-if="comment5" class="collapse-item">
                  <mdb-card class="card-body mt-1">
                    <mdb-textarea label="Add comment"/>
                    <div class="d-flex justify-content-end">
                      <mdb-btn flat @click.native="comment5=!comment5">Cancel</mdb-btn>
                      <mdb-btn color="primary" @click.native="comment5=!comment5">Reply</mdb-btn>
                    </div>
                  </mdb-card>
                </mdb-collapse>
              </transition>
            </div>
          </div>
        </div>
      </mdb-row>

      <h2 class="title my-4">
        <strong>Personal card </strong>
      </h2>
      <mdb-row>
        <mdb-col md="6" lg="4">
          <mdb-card personal>
            <mdb-card-image top src="https://mdbootstrap.com/img/Photos/Avatars/img%20(29).jpg" alt="Card image cap"/>
            <mdb-card-body>
              <mdb-card-title><a class="title-one">Clara</a></mdb-card-title>
              <p class="card-meta">Joined in 2013</p>
              <mdb-card-text>Clara is an photographer living in Madrid.</mdb-card-text>
              <hr/>
              <a class="card-meta"><span><mdb-icon icon="user"/>22 Friends</span></a>
            </mdb-card-body>
          </mdb-card>
        </mdb-col>
      </mdb-row>

      <h2 class="title pt-4">
        <strong>Social news card</strong>
      </h2>
      <mdb-row>
        <mdb-col md="6" lg="4">
          <mdb-card news class="my-5">
          <mdb-card-body>
            <div class="content">
              <div class="right-side-meta">14 h</div>
              <img src="https://mdbootstrap.com/img/Photos/Avatars/img%20(17)-mini.jpg" class="rounded-circle avatar-img z-depth-1-half"/>Kate
            </div>
          </mdb-card-body>
          <mdb-card-image top src="https://mdbootstrap.com/img/Photos/Others/girl1.jpg" alt="Card image cap"/>
          <mdb-card-body>
            <div class="social-meta">
              <p>Another great adventure! </p>
              <span><mdb-icon far icon="heart"/>25 likes</span>
              <p><mdb-icon icon="comment"/>13 comments</p>
            </div>
            <hr/>
            <mdb-input far icon="heart" placeholder="Add Comment..."/>
          </mdb-card-body>
        </mdb-card>
        </mdb-col>
      </mdb-row>

      <h2 class="title pt-4">
        <strong>Social card with video</strong>
      </h2>
      <mdb-row>
        <mdb-col md="6" lg="4">
          <mdb-card news class="my-5">
            <mdb-card-body>
              <div class="content">
                <div class="right-side-meta">2 h</div>
                <img src="https://mdbootstrap.com/img/Photos/Avatars/img%20(3).jpg" class="rounded-circle avatar-img z-depth-1-half"/>Tony
              </div>
            </mdb-card-body>
            <div class="embed-responsive embed-responsive-1by1">
              <iframe class="embed-responsive-item" src="https://www.youtube.com/embed/37pwbUp8t1I" allowFullScreen></iframe>
            </div>
            <mdb-card-body>
              <div class="social-meta">
                <p class="blue-text">#awesome #bboy #battle #breaking #cool</p>
                <span><mdb-icon far icon="heart"/>265 likes</span>
                <p><mdb-icon icon="comment"/>89 comments</p>
              </div>
              <hr/>
              <mdb-input far icon="heart" placeholder="Add Comment..."/>
            </mdb-card-body>
          </mdb-card>
        </mdb-col>
      </mdb-row>

      <h2 class="title pt-4">
        <strong>Group of personal cards</strong>
      </h2>
      <mdb-row>
        <mdb-col md="12">
          <mdb-card-group class="my-5">
            <mdb-card personal class="mb-md-0 mb-4">
              <mdb-view hover>
                <mdb-card-image top src="https://mdbootstrap.com/img/Photos/Avatars/img%20(26).jpg" alt="Card image cap"/>
                <a><mdb-mask overlay="white-slight" waves/></a>
              </mdb-view>
              <mdb-card-body>
                <a><mdb-card-title>Anna</mdb-card-title></a>
                <a class="card-meta">Friends</a>
                <mdb-card-text>Anna is a web designer living in New York.</mdb-card-text>
                <hr/>
                <a class="card-meta"><span><mdb-icon icon="user"/>83 Friends</span></a>
                <p class="card-meta float-right">Joined in 2012</p>
              </mdb-card-body>
            </mdb-card>

            <mdb-card personal class="mb-md-0 mb-4">
              <mdb-view hover>
                <mdb-card-image top src="https://mdbootstrap.com/img/Photos/Avatars/img%20(27).jpg" alt="Card image cap"/>
                <a><mdb-mask overlay="white-slight" waves/></a>
              </mdb-view>
              <mdb-card-body>
                <a><mdb-card-title>John</mdb-card-title></a>
                <a class="card-meta">Coworker</a>
                <mdb-card-text>John is a copywriter living in Seattle.</mdb-card-text>
                <hr/>
                <a class="card-meta"><span><mdb-icon icon="user"/>48 Friends</span></a>
                <p class="card-meta float-right">Joined in 2015</p>
              </mdb-card-body>
            </mdb-card>

            <mdb-card personal class="mb-md-0 mb-4">
              <mdb-view hover>
                <mdb-card-image top src="https://mdbootstrap.com/img/Photos/Avatars/img%20(28).jpg" alt="Card image cap"/>
                <a><mdb-mask overlay="white-slight" waves/></a>
              </mdb-view>
              <mdb-card-body>
                <a><mdb-card-title>Sara</mdb-card-title></a>
                <a class="card-meta">Coworker</a>
                <mdb-card-text>Sara is a video maker living in Tokyo.</mdb-card-text>
                <hr/>
                <a class="card-meta"><span><mdb-icon icon="user"/>127 Friends</span></a>
                <p class="card-meta float-right">Joined in 2014</p>
              </mdb-card-body>
            </mdb-card>

          </mdb-card-group>
        </mdb-col>
      </mdb-row>
    </mdb-container>
  </mdb-container>
</template>

<script>
import { mdbContainer, mdbRow, mdbCol, mdbCard, mdbCardBody, mdbCardGroup, mdbCardTitle,  mdbCardImage, mdbCardText, mdbMask, mdbIcon, mdbView, mdbTooltip, mdbCollapse, mdbInput, mdbTextarea, mdbBtn } from 'mdbvue';

export default {
  name: 'SocialPage',
  components: {
    mdbContainer,
    mdbRow,
    mdbCol,
    mdbCard,
    mdbCardBody,
    mdbCardGroup,
    mdbCardTitle,
    mdbCardText,
    mdbCardImage,
    mdbMask,
    mdbIcon,
    mdbView,
    mdbTooltip,
    mdbCollapse,
    mdbInput,
    mdbBtn,
    mdbTextarea
  },
  data() {
    return {
      comment1: false,
      comment2: false,
      comment3: false,
      comment4: false,
      comment5: false,
    };
  },
  methods: {
    beforeEnter(el) {
      this.elHeight = el.scrollHeight;
    },
    enter(el) {
      el.style.height = this.elHeight+'px';
    },
    beforeLeave(el) {
      el.style.height = 0;
    }
  },
};
</script>

<style scoped>
.collapse-item {
  overflow: hidden;
  height: 0;
  padding: 0;
  transition: height .5s;
}
</style>
