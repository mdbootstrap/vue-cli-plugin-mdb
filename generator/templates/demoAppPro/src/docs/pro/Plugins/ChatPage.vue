<template>
  <mdb-container>
    <mdb-row class="mt-5 align-items-center justify-content-start">
      <h4 class="demo-title">
        <strong>Chat</strong>
      </h4>
      <a
        href="https://mdbootstrap.com/plugins/vue/chat/?utm_source=DemoApp&utm_medium=MDBVuePro"
        waves-fixed
        class="border grey-text px-2 border-light rounded ml-2"
        target="_blank"
      >
        <mdb-icon icon="graduation-cap" class="mr-2"/>Docs
      </a>
    </mdb-row>
    <section class="demo-section">
      <h4 class="mb-4">Basic chat</h4>
      <section>
        <mdb-chat-room color="grey lighten-3">
          <mdb-row class="px-lg-2 px-2">
            <mdb-chat
              :loggedUserId="basicChat.loggedUserId"
              :chat="basicChat.chat"
              color="info"
              :avatarWidth="50"
              @send="sendMessage($event, basicChat)"
            ></mdb-chat>
          </mdb-row>
        </mdb-chat-room>
      </section>
    </section>
    <section class="demo-section">
      <h4 class="mt-5 mb-4">Colorful background chat list</h4>
      <section>
        <mdb-chat-room color="purple lighten-4">
          <mdb-row class="px-2">
            <mdb-chat-list :data="chatList"></mdb-chat-list>
          </mdb-row>
        </mdb-chat-room>
      </section>
    </section>
    <section class="demo-section">
      <h4 class="mt-5 mb-4">Gradient chat with scrollbar</h4>
      <section>
        <mdb-chat-room color="rare-wind-gradient">
          <mdb-row class="px-lg-2 px-2">
            <mdb-col md="6" xl="4" class="px-0 pt-3">
              <mdb-chat-list
                scroll
                :height="500"
                scrollbarClass="scrollbar-light-blue"
                :data="gradientChat"
                @click="changeActiveChat"
              ></mdb-chat-list>
            </mdb-col>
            <mdb-col md="6" xl="8" class="pl-md-3 px-lg-auto px-0 pt-3">
              <mdb-chat
                :loggedUserId="gradientChat[0].loggedUserId"
                :chat="gradientChat[activeChat].chat"
                outline="purple"
                :avatarWidth="50"
                scroll
                scrollbarClass="scrollbar-light-blue"
                @send="sendMessage($event, gradientChat[activeChat])"
              ></mdb-chat>
            </mdb-col>
          </mdb-row>
        </mdb-chat-room>
      </section>
    </section>
    <section class="demo-section">
      <mdb-chat-room small>
        <mdb-small-chat
          :loggedUserId="smallChat.loggedUserId"
          :chat="smallChat.chat"
          scrollbarClass="scrollbar-light-blue"
          small
          @send="sendMessage($event, smallChat)"
        >
          <template v-slot:media>
            <mdb-media class="mb-3">
              <img
                class="d-flex rounded mr-2"
                src="https://mdbootstrap.com/img/Photos/Avatars/avatar-6.jpg"
                alt="Generic placeholder image"
                style="width: 60px"
              >
              <mdb-media-body style="font-size: 0.8rem">
                <p class="my-0">You're friends on Facebook</p>
                <p class="mb-0 text-muted">Web Designer at MDBootstrap</p>
                <p class="mb-0 text-muted">Lives in Paris</p>
              </mdb-media-body>
            </mdb-media>
          </template>
        </mdb-small-chat>
      </mdb-chat-room>
    </section>
  </mdb-container>
</template>

<script>
import {
  mdbContainer,
  mdbRow,
  mdbCol,
  mdbIcon,
  mdbChat,
  mdbChatList,
  mdbChatRoom,
  mdbSmallChat,
  mdbMedia,
  mdbMediaBody
} from "mdbvue";

export default {
  components: {
    mdbContainer,
    mdbRow,
    mdbCol,
    mdbIcon,
    mdbChat,
    mdbChatList,
    mdbChatRoom,
    mdbSmallChat,
    mdbMedia,
    mdbMediaBody
  },

  data() {
    return {
      basicChat: {
        loggedUserId: 1,
        lastId: 4,
        chat: [
          {
            id: 0,
            name: "Brad Pitt",
            img: "https://mdbootstrap.com/img/Photos/Avatars/avatar-6.jpg",
            messages: [
              {
                id: 0,
                date: "2019-04-21 15:00:09",
                content:
                  "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium."
              },
              {
                id: 1,
                date: "2019-06-26 11:00",
                content:
                  "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium."
              },
              {
                id: 4,
                date: "2019-06-26 11:20",
                content:
                  "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium."
              }
            ]
          },
          {
            id: 1,
            name: "Lara Croft",
            img: "https://mdbootstrap.com/img/Photos/Avatars/avatar-5.jpg",
            messages: [
              {
                id: 2,
                date: "2019-06-26 11:15",
                content:
                  "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium."
              },
              {
                id: 3,
                date: "2019-06-26 11:16",
                content:
                  "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium."
              }
            ]
          }
        ]
      },
      chatList: [
        {
          id: 0,
          active: true,
          loggedUserId: 0,
          lastId: 2,
          chat: [
            {
              id: 0,
              name: "Brad Pitt",
              img: "https://mdbootstrap.com/img/Photos/Avatars/avatar-6.jpg",
              messages: [
                {
                  id: 0,
                  date: "2019-04-21 15:00:09",
                  content:
                    "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium."
                }
              ]
            },
            {
              id: 1,
              name: "Lara Croft",
              online: true,
              img: "https://mdbootstrap.com/img/Photos/Avatars/avatar-5.jpg",
              messages: [
                {
                  id: 2,
                  date: "2019-06-26 11:15",
                  content:
                    "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium."
                }
              ]
            }
          ]
        },
        {
          id: 1,
          loggedUserId: 0,
          lastId: 2,
          chat: [
            {
              id: 0,
              name: "Brad Pitt",
              img: "https://mdbootstrap.com/img/Photos/Avatars/avatar-6.jpg",
              messages: [
                {
                  id: 0,
                  date: "2019-04-21 15:00:09",
                  content:
                    "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium."
                },
              ]
            },
            {
              id: 1,
              name: "Ashley Olsen",
              img: "https://mdbootstrap.com/img/Photos/Avatars/avatar-2.jpg",
              messages: [
                {
                  id: 2,
                  date: "2019-06-26 11:15",
                  content: "Sed ut perspicantium.",
                  unread: true
                }
              ]
            }
          ]
        },
        {
          id: 2,
          loggedUserId: 0,
          lastId: 2,
          chat: [
            {
              id: 0,
              name: "Brad Pitt",
              img: "https://mdbootstrap.com/img/Photos/Avatars/avatar-6.jpg",
              messages: [
                {
                  id: 0,
                  date: "2019-06-26 11:00",
                  content: "Sed ut doloremque laudantium."
                }
              ]
            },
            {
              id: 1,
              name: "Danny Smith",
              img: "https://mdbootstrap.com/img/Photos/Avatars/avatar-3.jpg",
              messages: [
                {
                  id: 2,
                  date: "2019-06-26 11:15",
                  content: "Sed ut perspiciatis laudantium.",
                  unread: true
                }
              ]
            }
          ]
        },
        {
          id: 1,
          loggedUserId: 0,
          lastId: 2,
          chat: [
            {
              id: 0,
              name: "Brad Pitt",
              img: "https://mdbootstrap.com/img/Photos/Avatars/avatar-6.jpg",
              messages: [
                {
                  id: 0,
                  date: "2019-04-21 15:00:09",
                  content:
                    "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium."
                },
              ]
            },
            {
              id: 1,
              name: "Alex Turner",
              img: "https://mdbootstrap.com/img/Photos/Avatars/avatar-1.jpg",
              messages: [
                {
                  id: 2,
                  date: "2019-06-26 11:15",
                  content: "Sed ut perspicantium.",
                  unread: true
                }
              ]
            }
          ]
        },
        {
          id: 2,
          loggedUserId: 0,
          lastId: 2,
          chat: [
            {
              id: 0,
              name: "Brad Pitt",
              img: "https://mdbootstrap.com/img/Photos/Avatars/avatar-6.jpg",
              messages: [
                {
                  id: 0,
                  date: "2019-04-21 15:00:09",
                  content:
                    "Sed ut perspiciatis unde omnis iste natus remque laudantium."
                },
              ]
            },
            {
              id: 1,
              name: "Kate Moss",
              img: "https://mdbootstrap.com/img/Photos/Avatars/avatar-4.jpg",
              messages: [
                {
                  id: 2,
                  date: "2019-06-26 11:15",
                  content: "Sed ut perspiciatis laudantium.",
                  unread: true
                }
              ]
            }
          ]
        }
      ],
      gradientChat: [
        {
          loggedUserId: 1,
          active: true,
          lastId: 4,
          chat: [
            {
              id: 0,
              name: "Brad Pitt",
              online: true,
              img: "https://mdbootstrap.com/img/Photos/Avatars/avatar-6.jpg",
              messages: [
                {
                  id: 0,
                  date: "2019-04-21 15:00:09",
                  content:
                    "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium."
                },
                {
                  id: 1,
                  date: "2019-06-26 11:00",
                  content:
                    "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium."
                },
                {
                  id: 4,
                  date: "2019-07-01 09:20",
                  content:
                    "Can you pop out and buy lemons?"
                }
              ]
            },
            {
              id: 1,
              name: "Lara Croft",
              img: "https://mdbootstrap.com/img/Photos/Avatars/avatar-5.jpg",
              messages: [
                {
                  id: 2,
                  date: "2019-06-26 11:15",
                  content:
                    "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium."
                },
                {
                  id: 3,
                  date: "2019-06-26 11:16",
                  content:
                    "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium."
                }
              ]
            }
          ]
        },
        {
          id: 1,
          loggedUserId: 1,
          active: false,
          lastId: 2,
          chat: [
            {
              id: 1,
              name: "Lara Croft",
              online: true,
              img: "https://mdbootstrap.com/img/Photos/Avatars/avatar-5.jpg",
              messages: [
                {
                  id: 0,
                  date: "2019-04-21 15:00:09",
                  content:
                    "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium."
                },
                {
                  id: 1,
                  date: "2019-06-26 11:00",
                  content:
                    "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium."
                }
              ]
            },
            {
              id: 2,
              name: "Ashley Olsen",
              img: "https://mdbootstrap.com/img/Photos/Avatars/avatar-2.jpg",
              messages: [
                {
                  id: 2,
                  date: "2019-06-26 11:15",
                  content: "Remember to bring me oranges",
                  unread: true
                }
              ]
            }
          ]
        },
        {
          id: 2,
          loggedUserId: 1,
          active: false,
          lastId: 2,
          chat: [
            {
              id: 1,
              name: "Lara Croft",
              img: "https://mdbootstrap.com/img/Photos/Avatars/avatar-5.jpg",
              messages: [
                {
                  id: 0,
                  date: "2019-04-21 15:00:09",
                  content:
                    "Sed ut perspiciatis unde omnis iste natus remque laudantium."
                },
                {
                  id: 1,
                  date: "2019-06-26 11:00",
                  content: "Sed ut doloremque laudantium."
                }
              ]
            },
            {
              id: 3,
              name: "Danny Smith",
              img: "https://mdbootstrap.com/img/Photos/Avatars/avatar-3.jpg",
              messages: [
                {
                  id: 2,
                  date: "2019-06-26 11:15",
                  content: "Call me later!",
                  unread: false
                }
              ]
            }
          ]
        },
        {
          id: 1,
          loggedUserId: 1,
          active: false,
          lastId: 2,
          chat: [
            {
              id: 1,
              name: "Lara Croft",
              img: "https://mdbootstrap.com/img/Photos/Avatars/avatar-5.jpg",
              messages: [
                {
                  id: 0,
                  date: "2019-04-21 15:00:09",
                  content:
                    "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium."
                },
                {
                  id: 1,
                  date: "2019-06-26 11:00",
                  content:
                    "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium."
                }
              ]
            },
            {
              id: 6,
              name: "Alex Turner",
              img: "https://mdbootstrap.com/img/Photos/Avatars/avatar-1.jpg",
              messages: [
                {
                  id: 2,
                  date: "2019-06-26 11:15",
                  content: "Hey, are you at home?",
                  unread: false
                }
              ]
            }
          ]
        },
        {
          id: 2,
          loggedUserId: 1,
          active: false,
          lastId: 2,
          chat: [
            {
              id: 1,
              name: "Lara Croft",
              img: "https://mdbootstrap.com/img/Photos/Avatars/avatar-5.jpg",
              messages: [
                {
                  id: 0,
                  date: "2019-04-21 15:00:09",
                  content:
                    "Sed ut perspiciatis unde omnis iste natus remque laudantium."
                },
                {
                  id: 1,
                  date: "2019-06-26 11:00",
                  content: "Sed ut doloremque laudantium."
                }
              ]
            },
            {
              id: 7,
              name: "Kate Moss",
              img: "https://mdbootstrap.com/img/Photos/Avatars/avatar-4.jpg",
              messages: [
                {
                  id: 2,
                  date: "2019-06-26 11:15",
                  content: "Wanna grab a bite later?",
                  unread: true
                }
              ]
            }
          ]
        },
        {
          id: 1,
          loggedUserId: 1,
          active: false,
          lastId: 2,
          chat: [
            {
              id: 1,
              name: "Lara Croft",
              img: "https://mdbootstrap.com/img/Photos/Avatars/avatar-5.jpg",
              messages: [
                {
                  id: 0,
                  date: "2019-04-21 15:00:09",
                  content:
                    "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium."
                },
                {
                  id: 1,
                  date: "2019-06-26 11:00",
                  content:
                    "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium."
                }
              ]
            },
            {
              id: 10,
              name: "Meg Ryan",
              online: true,
              img: "https://mdbootstrap.com/img/Photos/Avatars/avatar-12.jpg",
              messages: [
                {
                  id: 2,
                  date: "2019-06-26 11:15",
                  content: "Sed ut perspicantium.",
                  unread: false
                }
              ]
            }
          ]
        },
        {
          id: 2,
          loggedUserId: 1,
          active: false,
          lastId: 2,
          chat: [
            {
              id: 1,
              name: "Lara Croft",
              img: "https://mdbootstrap.com/img/Photos/Avatars/avatar-6.jpg",
              messages: [
                {
                  id: 0,
                  date: "2019-04-21 15:00:09",
                  content:
                    "Sed ut perspiciatis unde omnis iste natus remque laudantium."
                },
                {
                  id: 1,
                  date: "2019-06-26 11:00",
                  content: "Sed ut doloremque laudantium."
                }
              ]
            },
            {
              id: 3,
              name: "John Smith",
              img: "https://mdbootstrap.com/img/Photos/Avatars/avatar-13.jpg",
              messages: [
                {
                  id: 2,
                  date: "2019-06-26 11:15",
                  content: "Sed ut!",
                  unread: true
                }
              ]
            }
          ]
        },
        {
          id: 1,
          loggedUserId: 1,
          active: false,
          lastId: 2,
          chat: [
            {
              id: 1,
              name: "Lara Croft",
              img: "https://mdbootstrap.com/img/Photos/Avatars/avatar-5.jpg",
              messages: [
                {
                  id: 0,
                  date: "2019-04-21 15:00:09",
                  content:
                    "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium."
                },
                {
                  id: 1,
                  date: "2019-06-26 11:00",
                  content:
                    "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium."
                }
              ]
            },
            {
              id: 13,
              name: "Olenna Gervais",
              img: "https://mdbootstrap.com/img/Photos/Avatars/avatar-11.jpg",
              messages: [
                {
                  id: 2,
                  date: "2019-06-26 11:15",
                  content: "Sed ut perspicantium.",
                  unread: false
                }
              ]
            }
          ]
        },
        {
          id: 2,
          loggedUserId: 1,
          active: false,
          lastId: 2,
          chat: [
            {
              id: 1,
              name: "Lara Croft",
              img: "https://mdbootstrap.com/img/Photos/Avatars/avatar-5.jpg",
              messages: [
                {
                  id: 0,
                  date: "2019-04-21 15:00:09",
                  content:
                    "Sed ut perspiciatis unde omnis iste natus remque laudantium."
                },
                {
                  id: 1,
                  date: "2019-06-26 11:00",
                  content: "Sed ut doloremque laudantium."
                }
              ]
            },
            {
              id: 11,
              name: "Max Jackson",
              img: "https://mdbootstrap.com/img/Photos/Avatars/avatar-14.jpg",
              messages: [
                {
                  id: 2,
                  date: "2019-06-26 11:15",
                  content: "Sed laudantium!",
                  unread: false
                }
              ]
            }
          ]
        }
      ],
      activeChat: 0,
      smallChat: {
        loggedUserId: 1,
        lastId: 4,
        chat: [
          {
            id: 0,
            name: "Brad Pitt",
            online: true,
            img: "https://mdbootstrap.com/img/Photos/Avatars/avatar-6.jpg",
            messages: [
              {
                id: 0,
                date: "2019-04-21 15:00:09",
                content: "Sed ut perspi."
              },
              {
                id: 1,
                date: "2019-06-26 11:00",
                content: "Sed ut peium."
              },
              {
                id: 4,
                date: "2019-06-26 11:20",
                content:
                  "Error sit voluptatem accusantium doloremque laudantium."
              }
            ]
          },
          {
            id: 1,
            name: "Lara Croft",
            img: "https://mdbootstrap.com/img/Photos/Avatars/avatar-5.jpg",
            messages: [
              {
                id: 2,
                date: "2019-06-26 11:15",
                content:
                  "Sed ut or sit voluptatem accusantium doloremque laudantium."
              },
              {
                id: 3,
                date: "2019-06-26 11:16",
                content: "voluptatem accusantium doloremque laudantium."
              }
            ]
          }
        ]
      }
    };
  },
  methods: {
    createMessage(e, id) {
      const { content, unread, date } = e;
      return {
        id: id + 1,
        date,
        content,
        unread
      };
    },
    sendMessage(e, chat) {
      const newMessage = this.createMessage(e, chat.lastId);
      chat.chat
        .find(el => {
          return el.id === chat.loggedUserId;
        })
        .messages.push(newMessage);

      chat.lastId += 1;
    },
    changeActiveChat(index) {
      this.activeChat = index;
      this.gradientChat.forEach((chat, i) => {
        if (i === index) {
          chat.active = true;
        } else {
          chat.active = false;
        }
      });
    }
  }
};

</script>

<style>
.rare-wind-gradient {
  background-image: -webkit-gradient(
    linear,
    left bottom,
    left top,
    from(#a8edea),
    to(#fed6e3)
  );
  background-image: -webkit-linear-gradient(bottom, #a8edea 0%, #fed6e3 100%);
  background-image: linear-gradient(to top, #a8edea 0%, #fed6e3 100%);
}

.scrollbar-light-blue::-webkit-scrollbar-track {
  -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.1);
  box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.1);
  background-color: #f5f5f5;
  border-radius: 10px;
}

.scrollbar-light-blue::-webkit-scrollbar {
  width: 12px;
  background-color: #f5f5f5;
}

.scrollbar-light-blue::-webkit-scrollbar-thumb {
  border-radius: 10px;
  -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.1);
  box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.1);
  background-color: #82b1ff;
}
</style>
