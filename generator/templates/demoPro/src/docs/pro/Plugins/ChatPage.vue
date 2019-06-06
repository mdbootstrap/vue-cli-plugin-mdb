<template>
  <mdb-container>
    <mdb-row class="mt-5 align-items-center justify-content-start">
      <h4 class="demo-title"><strong>Chat</strong></h4>
      <a href="https://mdbootstrap.com/plugins/vue/chat/?utm_source=DemoApp&utm_medium=MDBVuePro" waves-fixed class="border grey-text px-2 border-light rounded ml-2" target="_blank"><mdb-icon icon="graduation-cap" class="mr-2"/>Docs</a>
    </mdb-row>
    <hr class="mb-5" />
    <h4 class="mb-4">Basic chat</h4>
    <mdb-card class="grey lighten-3 chat-room">
        <mdb-card-body>

            <!-- Grid row -->
            <mdb-row class="px-lg-2 px-2">

                <!-- Grid column -->
                <mdb-col md="6" xl="4" class="px-0">

                    <h6 class="font-weight-bold mb-3 text-center text-lg-left">Member</h6>
                    <div class="white z-depth-1 px-3 pt-3 pb-0">
                        <ul class="list-unstyled friend-list">
                            <li class="active grey lighten-3 p-2">
                                <a href="#" class="d-flex justify-content-between">
                                    <img src="https://mdbootstrap.com/img/Photos/Avatars/avatar-8.jpg" alt="avatar" class="avatar rounded-circle d-flex align-self-center z-depth-1">
                                    <div class="text-small">
                                        <strong>John Doe</strong>
                                        <p class="last-message text-muted">Hello, Are you there?</p>
                                    </div>
                                    <div class="chat-footer">
                                        <p class="text-smaller text-muted mb-0">Just now</p>
                                        <span class="badge badge-danger float-right">1</span>
                                    </div>
                                </a>
                            </li>
                            <li class="p-2">
                                <a href="#" class="d-flex justify-content-between">
                                    <img src="https://mdbootstrap.com/img/Photos/Avatars/avatar-1.jpg" alt="avatar" class="avatar rounded-circle d-flex align-self-center z-depth-1">
                                    <div class="text-small">
                                        <strong>Danny Smith</strong>
                                        <p class="last-message text-muted">Lorem ipsum dolor sit.</p>
                                    </div>
                                    <div class="chat-footer">
                                        <p class="text-smaller text-muted mb-0">5 min ago</p>
                                        <span class="text-muted float-right"><mdb-icon icon="mail-reply" aria-hidden="true"/></span>
                                    </div>
                                </a>
                            </li>
                            <li class="p-2">
                                <a href="#" class="d-flex justify-content-between">
                                    <img src="https://mdbootstrap.com/img/Photos/Avatars/avatar-2.jpg" alt="avatar" class="avatar rounded-circle d-flex align-self-center z-depth-1">
                                    <div class="text-small">
                                        <strong>Alex Steward</strong>
                                        <p class="last-message text-muted">Lorem ipsum dolor sit.</p>
                                    </div>
                                    <div class="chat-footer">
                                        <p class="text-smaller text-muted mb-0">Yesterday</p>
                                        <span class="text-muted float-right"><mdb-icon icon="mail-reply" aria-hidden="true"/></span>
                                    </div>
                                </a>
                            </li>
                            <li class="p-2">
                                <a href="#" class="d-flex justify-content-between">
                                    <img src="https://mdbootstrap.com/img/Photos/Avatars/avatar-3.jpg" alt="avatar" class="avatar rounded-circle d-flex align-self-center z-depth-1">
                                    <div class="text-small">
                                        <strong>Ashley Olsen</strong>
                                        <p class="last-message text-muted">Lorem ipsum dolor sit.</p>
                                    </div>
                                    <div class="chat-footer">
                                        <p class="text-smaller text-muted mb-0">Yesterday</p>
                                        <span class="text-muted float-right"><mdb-icon icon="mail-reply" aria-hidden="true"/></span>
                                    </div>
                                </a>
                            </li>
                            <li class="p-2">
                                <a href="#" class="d-flex justify-content-between">
                                    <img src="https://mdbootstrap.com/img/Photos/Avatars/avatar-4.jpg" alt="avatar" class="avatar rounded-circle d-flex align-self-center z-depth-1">
                                    <div class="text-small">
                                        <strong>Kate Moss</strong>
                                        <p class="last-message text-muted">Lorem ipsum dolor sit.</p>
                                    </div>
                                    <div class="chat-footer">
                                        <p class="text-smaller text-muted mb-0">Yesterday</p>
                                        <span class="text-muted float-right"><mdb-icon icon="mail-reply" aria-hidden="true"/></span>
                                    </div>
                                </a>
                            </li>
                            <li class="p-2">
                                <a href="#" class="d-flex justify-content-between">
                                    <img src="https://mdbootstrap.com/img/Photos/Avatars/avatar-5.jpg" alt="avatar" class="avatar rounded-circle d-flex align-self-center z-depth-1">
                                    <div class="text-small">
                                        <strong>Lara Croft</strong>
                                        <p class="last-message text-muted">Lorem ipsum dolor sit.</p>
                                    </div>
                                    <div class="chat-footer">
                                        <p class="text-smaller text-muted mb-0">Yesterday</p>
                                        <span class="text-muted float-right"><mdb-icon icon="mail-reply" aria-hidden="true"/></span>
                                    </div>
                                </a>
                            </li>
                            <li class="p-2">
                                <a href="#" class="d-flex justify-content-between">
                                    <img src="https://mdbootstrap.com/img/Photos/Avatars/avatar-6.jpg" alt="avatar" class="avatar rounded-circle d-flex align-self-center z-depth-1">
                                    <div class="text-small">
                                        <strong>Brad Pitt</strong>
                                        <p class="last-message text-muted">Lorem ipsum dolor sit.</p>
                                    </div>
                                    <div class="chat-footer">
                                        <p class="text-smaller text-muted mb-0">5 min ago</p>
                                        <span class="text-muted float-right"><mdb-icon icon="check" aria-hidden="true"/></span>
                                    </div>
                                </a>
                            </li>
                        </ul>
                    </div>

                </mdb-col>
                <!-- Grid column -->

                <!-- Grid column -->
                <mdb-col md="6" xl="8" class="pl-md-3 px-lg-auto px-0">

                    <div class="chat-message">

                        <ul class="list-unstyled chat">
                            <li class="d-flex justify-content-between mb-4">
                                <img src="https://mdbootstrap.com/img/Photos/Avatars/avatar-6.jpg" alt="avatar" class="avatar rounded-circle ml-lg-3 ml-0 z-depth-1">
                                <div class="chat-body white p-3 ml-2 z-depth-1">
                                    <div class="header">
                                        <strong class="primary-font">Brad Pitt</strong>
                                        <small class="pull-right text-muted"><mdb-icon icon="clock-o"/> 12 mins ago</small>
                                    </div>
                                    <hr class="w-100">
                                    <p class="mb-0">
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                    </p>
                                </div>
                            </li>
                            <li class="d-flex justify-content-between mb-4">
                                <div class="chat-body white p-3 z-depth-1">
                                    <div class="header">
                                        <strong class="primary-font">Lara Croft</strong>
                                        <small class="pull-right text-muted"><mdb-icon icon="clock-o"/> 13 mins ago</small>
                                    </div>
                                    <hr class="w-100">
                                    <p class="mb-0">
                                        Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.
                                    </p>
                                </div>
                                <img src="https://mdbootstrap.com/img/Photos/Avatars/avatar-5.jpg" alt="avatar" class="avatar rounded-circle mr-0 ml-3 z-depth-1">
                            </li>
                            <li class="d-flex justify-content-between mb-4 pb-3">
                                <img src="https://mdbootstrap.com/img/Photos/Avatars/avatar-6.jpg" alt="avatar" class="avatar rounded-circle ml-lg-3 ml-0 z-depth-1">
                                <div class="chat-body white p-3 ml-2 z-depth-1">
                                    <div class="header">
                                        <strong class="primary-font">Brad Pitt</strong>
                                        <small class="pull-right text-muted"><mdb-icon icon="clock-o"/> 12 mins ago</small>
                                    </div>
                                    <hr class="w-100">
                                    <p class="mb-0">
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                    </p>
                                </div>
                            </li>
                            <li class="white">
                                <div class="form-group basic-textarea">
                                    <textarea class="form-control pl-2 my-0" id="exampleFormControlTextarea2" rows="3" placeholder="Type your message here..."></textarea>
                                </div>
                            </li>
                            <mdb-btn color="info" rounded size="sm" class="float-right">Send</mdb-btn>
                        </ul>

                    </div>

                </mdb-col>
                <!-- Grid column -->

            </mdb-row>
            <!-- Grid row -->

        </mdb-card-body>
    </mdb-card>
    <h4 class="mt-5 mb-4">Colorful background chat</h4>
    <mdb-card class="card purple lighten-4 chat-room">
        <mdb-card-body>

            <!-- Grid row -->
            <mdb-row class="px-2">

                <!-- Grid column -->
                <mdb-col md="6" xl="8" class="pr-md-4 px-lg-auto px-0">

                    <div class="chat-message">

                        <ul class="list-unstyled chat">
                            <li class="d-flex justify-content-between mb-4">
                                <img src="https://mdbootstrap.com/img/Photos/Avatars/avatar-6.jpg" alt="avatar" class="avatar rounded-circle ml-0 z-depth-1">
                                <div class="chat-body white p-3 ml-2 z-depth-1">
                                    <div class="header">
                                        <strong class="primary-font">Brad Pitt</strong>
                                        <small class="pull-right text-muted"><mdb-icon icon="clock-o"/> 12 mins ago</small>
                                    </div>
                                    <hr class="w-100">
                                    <p class="mb-0">
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                    </p>
                                </div>
                            </li>
                            <li class="d-flex justify-content-between mb-4">
                                <div class="chat-body white p-3 z-depth-1">
                                    <div class="header">
                                        <strong class="primary-font">Lara Croft</strong>
                                        <small class="pull-right text-muted"><mdb-icon icon="clock-o"/> 13 mins ago</small>
                                    </div>
                                    <hr class="w-100">
                                    <p class="mb-0">
                                        Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.
                                    </p>
                                </div>
                                <img src="https://mdbootstrap.com/img/Photos/Avatars/avatar-5.jpg" alt="avatar" class="avatar rounded-circle mr-0 ml-3 z-depth-1">
                            </li>
                            <li class="d-flex justify-content-between mb-4 pb-3">
                                <img src="https://mdbootstrap.com/img/Photos/Avatars/avatar-6.jpg" alt="avatar" class="avatar rounded-circle ml-0 z-depth-1">
                                <div class="chat-body white p-3 ml-2 z-depth-1">
                                    <div class="header">
                                        <strong class="primary-font">Brad Pitt</strong>
                                        <small class="pull-right text-muted"><mdb-icon icon="clock-o"/> 12 mins ago</small>
                                    </div>
                                    <hr class="w-100">
                                    <p class="mb-0">
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                    </p>
                                </div>
                            </li>
                            <li class="white">
                                <div class="form-group basic-textarea">
                                    <textarea class="form-control pl-2 my-0" id="exampleFormControlTextarea2" rows="3" placeholder="Type your message here..."></textarea>
                                </div>
                            </li>
                            <mdb-btn color="deep-purple" rounded size="sm" class="float-right">Send</mdb-btn>
                        </ul>

                    </div>

                </mdb-col>
                <!-- Grid column -->

                <!-- Grid column -->
                <mdb-col md="6" xl="4" class="px-0">

                    <h6 class="font-weight-bold mb-3 text-center text-lg-left">Member</h6>
                    <div class="white z-depth-1 px-3 pt-3 pb-0">
                        <ul class="list-unstyled friend-list">
                            <li class="active grey lighten-3 p-2">
                                <a href="#" class="d-flex justify-content-between">
                                    <img src="https://mdbootstrap.com/img/Photos/Avatars/avatar-8.jpg" alt="avatar" class="avatar rounded-circle d-flex align-self-center z-depth-1">
                                    <div class="text-small">
                                        <strong>John Doe</strong>
                                        <p class="last-message text-muted">Hello, Are you there?</p>
                                    </div>
                                    <div class="chat-footer">
                                        <p class="text-smaller text-muted mb-0">Just now</p>
                                        <span class="badge badge-danger float-right">1</span>
                                    </div>
                                </a>
                            </li>
                            <li class="p-2">
                                <a href="#" class="d-flex justify-content-between">
                                    <img src="https://mdbootstrap.com/img/Photos/Avatars/avatar-1.jpg" alt="avatar" class="avatar rounded-circle d-flex align-self-center z-depth-1">
                                    <div class="text-small">
                                        <strong>Danny Smith</strong>
                                        <p class="last-message text-muted">Lorem ipsum dolor sit.</p>
                                    </div>
                                    <div class="chat-footer">
                                        <p class="text-smaller text-muted mb-0">5 min ago</p>
                                        <span class="text-muted float-right"><mdb-icon icon="mail-reply" aria-hidden="true"/></span>
                                    </div>
                                </a>
                            </li>
                            <li class="p-2">
                                <a href="#" class="d-flex justify-content-between">
                                    <img src="https://mdbootstrap.com/img/Photos/Avatars/avatar-2.jpg" alt="avatar" class="avatar rounded-circle d-flex align-self-center z-depth-1">
                                    <div class="text-small">
                                        <strong>Alex Steward</strong>
                                        <p class="last-message text-muted">Lorem ipsum dolor sit.</p>
                                    </div>
                                    <div class="chat-footer">
                                        <p class="text-smaller text-muted mb-0">Yesterday</p>
                                        <span class="text-muted float-right"><mdb-icon icon="mail-reply" aria-hidden="true"/></span>
                                    </div>
                                </a>
                            </li>
                            <li class="p-2">
                                <a href="#" class="d-flex justify-content-between">
                                    <img src="https://mdbootstrap.com/img/Photos/Avatars/avatar-3.jpg" alt="avatar" class="avatar rounded-circle d-flex align-self-center z-depth-1">
                                    <div class="text-small">
                                        <strong>Ashley Olsen</strong>
                                        <p class="last-message text-muted">Lorem ipsum dolor sit.</p>
                                    </div>
                                    <div class="chat-footer">
                                        <p class="text-smaller text-muted mb-0">Yesterday</p>
                                        <span class="text-muted float-right"><mdb-icon icon="mail-reply" aria-hidden="true"/></span>
                                    </div>
                                </a>
                            </li>
                            <li class="p-2">
                                <a href="#" class="d-flex justify-content-between">
                                    <img src="https://mdbootstrap.com/img/Photos/Avatars/avatar-4.jpg" alt="avatar" class="avatar rounded-circle d-flex align-self-center z-depth-1">
                                    <div class="text-small">
                                        <strong>Kate Moss</strong>
                                        <p class="last-message text-muted">Lorem ipsum dolor sit.</p>
                                    </div>
                                    <div class="chat-footer">
                                        <p class="text-smaller text-muted mb-0">Yesterday</p>
                                        <span class="text-muted float-right"><mdb-icon icon="mail-reply" aria-hidden="true"/></span>
                                    </div>
                                </a>
                            </li>
                            <li class="p-2">
                                <a href="#" class="d-flex justify-content-between">
                                    <img src="https://mdbootstrap.com/img/Photos/Avatars/avatar-5.jpg" alt="avatar" class="avatar rounded-circle d-flex align-self-center z-depth-1">
                                    <div class="text-small">
                                        <strong>Lara Croft</strong>
                                        <p class="last-message text-muted">Lorem ipsum dolor sit.</p>
                                    </div>
                                    <div class="chat-footer">
                                        <p class="text-smaller text-muted mb-0">Yesterday</p>
                                        <span class="text-muted float-right"><mdb-icon icon="mail-reply" aria-hidden="true"/></span>
                                    </div>
                                </a>
                            </li>
                            <li class="p-2">
                                <a href="#" class="d-flex justify-content-between">
                                    <img src="https://mdbootstrap.com/img/Photos/Avatars/avatar-6.jpg" alt="avatar" class="avatar rounded-circle d-flex align-self-center z-depth-1">
                                    <div class="text-small">
                                        <strong>Brad Pitt</strong>
                                        <p class="last-message text-muted">Lorem ipsum dolor sit.</p>
                                    </div>
                                    <div class="chat-footer">
                                        <p class="text-smaller text-muted mb-0">5 min ago</p>
                                        <span class="text-muted float-right"><mdb-icon icon="check" aria-hidden="true"/></span>
                                    </div>
                                </a>
                            </li>
                        </ul>
                    </div>

                </mdb-col>
                <!-- Grid column -->

            </mdb-row>
            <!-- Grid row -->

        </mdb-card-body>
    </mdb-card>
    <h4 class="mt-5 mb-4">Gradient chat with scrollbar</h4>
    <mdb-card class="rare-wind-gradient chat-room">
        <mdb-card-body>

            <!-- Grid row -->
            <mdb-row class="px-lg-2 px-2">

                <!-- Grid column -->
                <mdb-col md="6" xl="4" class="px-0">

                    <h6 class="font-weight-bold mb-3 text-center text-lg-left">Member</h6>
                    <div class="white z-depth-1 px-2 pt-3 pb-0 members-panel-1 scrollbar-light-blue">
                        <ul class="list-unstyled friend-list">
                            <li class="active grey lighten-3 p-2">
                                <a href="#" class="d-flex justify-content-between">
                                    <img src="https://mdbootstrap.com/img/Photos/Avatars/avatar-8.jpg" alt="avatar" class="avatar rounded-circle d-flex align-self-center z-depth-1">
                                    <div class="text-small">
                                        <strong>John Doe</strong>
                                        <p class="last-message text-muted">Hello, Are you there?</p>
                                    </div>
                                    <div class="chat-footer">
                                        <p class="text-smaller text-muted mb-0">Just now</p>
                                        <span class="badge badge-danger float-right">1</span>
                                    </div>
                                </a>
                            </li>
                            <li class="p-2">
                                <a href="#" class="d-flex justify-content-between">
                                    <img src="https://mdbootstrap.com/img/Photos/Avatars/avatar-1.jpg" alt="avatar" class="avatar rounded-circle d-flex align-self-center z-depth-1">
                                    <div class="text-small">
                                        <strong>Danny Smith</strong>
                                        <p class="last-message text-muted">Lorem ipsum dolor sit.</p>
                                    </div>
                                    <div class="chat-footer">
                                        <p class="text-smaller text-muted mb-0">5 min ago</p>
                                        <span class="text-muted float-right"><mdb-icon icon="mail-reply" aria-hidden="true"/></span>
                                    </div>
                                </a>
                            </li>
                            <li class="p-2">
                                <a href="#" class="d-flex justify-content-between">
                                    <img src="https://mdbootstrap.com/img/Photos/Avatars/avatar-2.jpg" alt="avatar" class="avatar rounded-circle d-flex align-self-center z-depth-1">
                                    <div class="text-small">
                                        <strong>Alex Steward</strong>
                                        <p class="last-message text-muted">Lorem ipsum dolor sit.</p>
                                    </div>
                                    <div class="chat-footer">
                                        <p class="text-smaller text-muted mb-0">Yesterday</p>
                                        <span class="text-muted float-right"><mdb-icon icon="mail-reply" aria-hidden="true"/></span>
                                    </div>
                                </a>
                            </li>
                            <li class="p-2">
                                <a href="#" class="d-flex justify-content-between">
                                    <img src="https://mdbootstrap.com/img/Photos/Avatars/avatar-3.jpg" alt="avatar" class="avatar rounded-circle d-flex align-self-center z-depth-1">
                                    <div class="text-small">
                                        <strong>Ashley Olsen</strong>
                                        <p class="last-message text-muted">Lorem ipsum dolor sit.</p>
                                    </div>
                                    <div class="chat-footer">
                                        <p class="text-smaller text-muted mb-0">Yesterday</p>
                                        <span class="text-muted float-right"><mdb-icon icon="mail-reply" aria-hidden="true"/></span>
                                    </div>
                                </a>
                            </li>
                            <li class="p-2">
                                <a href="#" class="d-flex justify-content-between">
                                    <img src="https://mdbootstrap.com/img/Photos/Avatars/avatar-4.jpg" alt="avatar" class="avatar rounded-circle d-flex align-self-center z-depth-1">
                                    <div class="text-small">
                                        <strong>Kate Moss</strong>
                                        <p class="last-message text-muted">Lorem ipsum dolor sit.</p>
                                    </div>
                                    <div class="chat-footer">
                                        <p class="text-smaller text-muted mb-0">Yesterday</p>
                                        <span class="text-muted float-right"><mdb-icon icon="mail-reply" aria-hidden="true"/></span>
                                    </div>
                                </a>
                            </li>
                            <li class="p-2">
                                <a href="#" class="d-flex justify-content-between">
                                    <img src="https://mdbootstrap.com/img/Photos/Avatars/avatar-5.jpg" alt="avatar" class="avatar rounded-circle d-flex align-self-center z-depth-1">
                                    <div class="text-small">
                                        <strong>Lara Croft</strong>
                                        <p class="last-message text-muted">Lorem ipsum dolor sit.</p>
                                    </div>
                                    <div class="chat-footer">
                                        <p class="text-smaller text-muted mb-0">Yesterday</p>
                                        <span class="text-muted float-right"><mdb-icon icon="mail-reply" aria-hidden="true"/></span>
                                    </div>
                                </a>
                            </li>
                            <li class="p-2">
                                <a href="#" class="d-flex justify-content-between">
                                    <img src="https://mdbootstrap.com/img/Photos/Avatars/avatar-6.jpg" alt="avatar" class="avatar rounded-circle d-flex align-self-center z-depth-1">
                                    <div class="text-small">
                                        <strong>Brad Pitt</strong>
                                        <p class="last-message text-muted">Lorem ipsum dolor sit.</p>
                                    </div>
                                    <div class="chat-footer">
                                        <p class="text-smaller text-muted mb-0">5 min ago</p>
                                        <span class="text-muted float-right"><mdb-icon icon="check" aria-hidden="true"/></span>
                                    </div>
                                </a>
                            </li>
                            <li class="p-2">
                                <a href="#" class="d-flex justify-content-between">
                                    <img src="https://mdbootstrap.com/img/Photos/Avatars/img(3).jpg" alt="avatar" class="avatar rounded-circle d-flex align-self-center z-depth-1">
                                    <div class="text-small">
                                        <strong>Ken Ditto</strong>
                                        <p class="last-message text-muted">Lorem ipsum dolor sit.</p>
                                    </div>
                                    <div class="chat-footer">
                                        <p class="text-smaller text-muted mb-0">Yesterday</p>
                                        <span class="text-muted float-right"><mdb-icon icon="mail-reply" aria-hidden="true"/></span>
                                    </div>
                                </a>
                            </li>
                            <li class="p-2">
                                <a href="#" class="d-flex justify-content-between">
                                    <img src="https://mdbootstrap.com/img/Photos/Avatars/img(2).jpg" alt="avatar" class="avatar rounded-circle d-flex align-self-center z-depth-1">
                                    <div class="text-small">
                                        <strong>Marta Wozniak</strong>
                                        <p class="last-message text-muted">Lorem ipsum dolor sit.</p>
                                    </div>
                                    <div class="chat-footer">
                                        <p class="text-smaller text-muted mb-0">Yesterday</p>
                                        <span class="text-muted float-right"><mdb-icon icon="mail-reply" aria-hidden="true"/></span>
                                    </div>
                                </a>
                            </li>
                        </ul>
                    </div>

                </mdb-col>
                <!-- Grid column -->

                <!-- Grid column -->
                <mdb-col md="6" xl="8" class="pl-md-3 px-lg-auto px-0">

                    <div class="chat-message">

                        <ul class="list-unstyled chat-1 scrollbar-light-blue">
                            <li class="d-flex justify-content-between mb-4">
                                <img src="https://mdbootstrap.com/img/Photos/Avatars/avatar-6.jpg" alt="avatar" class="avatar rounded-circle ml-lg-3 ml-0 z-depth-1">
                                <div class="chat-body white p-3 ml-2 z-depth-1">
                                    <div class="header">
                                        <strong class="primary-font">Brad Pitt</strong>
                                        <small class="pull-right text-muted"><mdb-icon icon="clock-o"/> 12 mins ago</small>
                                    </div>
                                    <hr class="w-100">
                                    <p class="mb-0">
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                    </p>
                                </div>
                            </li>
                            <li class="d-flex justify-content-between mb-4">
                                <div class="chat-body white p-3 z-depth-1">
                                    <div class="header">
                                        <strong class="primary-font">Lara Croft</strong>
                                        <small class="pull-right text-muted"><mdb-icon icon="clock-o"/> 13 mins ago</small>
                                    </div>
                                    <hr class="w-100">
                                    <p class="mb-0">
                                        Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.
                                    </p>
                                </div>
                                <img src="https://mdbootstrap.com/img/Photos/Avatars/avatar-5.jpg" alt="avatar" class="avatar rounded-circle mr-0 ml-3 z-depth-1">
                            </li>
                            <li class="d-flex justify-content-between mb-4">
                                <img src="https://mdbootstrap.com/img/Photos/Avatars/avatar-6.jpg" alt="avatar" class="avatar rounded-circle ml-lg-3 ml-0 z-depth-1">
                                <div class="chat-body white p-3 ml-2 z-depth-1">
                                    <div class="header">
                                        <strong class="primary-font">Brad Pitt</strong>
                                        <small class="pull-right text-muted"><mdb-icon icon="clock-o"/> 12 mins ago</small>
                                    </div>
                                    <hr class="w-100">
                                    <p class="mb-0">
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                    </p>
                                </div>
                            </li>
                            <li class="d-flex justify-content-between mb-4">
                                <div class="chat-body white p-3 z-depth-1">
                                    <div class="header">
                                        <strong class="primary-font">Lara Croft</strong>
                                        <small class="pull-right text-muted"><mdb-icon icon="clock-o"/> 13 mins ago</small>
                                    </div>
                                    <hr class="w-100">
                                    <p class="mb-0">
                                        Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.
                                    </p>
                                </div>
                                <img src="https://mdbootstrap.com/img/Photos/Avatars/avatar-5.jpg" alt="avatar" class="avatar rounded-circle mr-0 ml-3 z-depth-1">
                            </li>
                            <li class="d-flex justify-content-between mb-4 pb-3">
                                <img src="https://mdbootstrap.com/img/Photos/Avatars/avatar-6.jpg" alt="avatar" class="avatar rounded-circle ml-lg-3 ml-0 z-depth-1">
                                <div class="chat-body white p-3 ml-2 z-depth-1">
                                    <div class="header">
                                        <strong class="primary-font">Brad Pitt</strong>
                                        <small class="pull-right text-muted"><mdb-icon icon="clock-o"/> 12 mins ago</small>
                                    </div>
                                    <hr class="w-100">
                                    <p class="mb-0">
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                    </p>
                                </div>
                            </li>
                        </ul>
                        <div class="white">
                            <div class="form-group basic-textarea">
                                <textarea class="form-control pl-2 my-0" id="exampleFormControlTextarea2" rows="3" placeholder="Type your message here..."></textarea>
                            </div>
                        </div>
                        <mdb-btn outline="pink" rounded size="sm" darkWaves class="float-right">Send</mdb-btn>

                    </div>

                </mdb-col>
                <!-- Grid column -->

            </mdb-row>
            <!-- Grid row -->

        </mdb-card-body>
    </mdb-card>
  </mdb-container>
</template>

<script>
import { mdbContainer, mdbRow, mdbCol, mdbIcon, mdbBtn, mdbCard, mdbCardBody } from 'mdbvue';

export default {
  components: {
    mdbContainer,
    mdbRow,
    mdbCol,
    mdbIcon,
    mdbBtn,
    mdbCard,
    mdbCardBody
  }
};

</script>

<style>
.basic-textarea textarea {
    height: auto;
}

.card.chat-room .friend-list li {
  border-bottom: 1px solid #e0e0e0; }
  .card.chat-room .friend-list li:last-of-type {
    border-bottom: none; }

.card.chat-room img.rounded-circle {
  border-radius: 50%; }

.card.chat-room img.avatar {
  height: 3rem;
  width: 3rem; }

.card.chat-room .text-small {
  font-size: 0.95rem; }

.card.chat-room .text-smaller {
  font-size: 0.75rem; }

.card.chat-room .friend-list li {
border-bottom: 1px solid #e0e0e0; }
.card.chat-room .friend-list li:last-of-type {
  border-bottom: none; }

.card.chat-room img.rounded-circle {
  border-radius: 50%; }

.card.chat-room img.avatar {
  height: 3rem !important;
  width: 3rem !important; }

.card.chat-room .text-small {
  font-size: 0.95rem; }

.card.chat-room .text-smaller {
  font-size: 0.75rem; }

.card.chat-room .members-panel-1,
.card.chat-room .chat-1 {
  position: relative;
  overflow-y: scroll; }

.card.chat-room .members-panel-1 {
  height: 570px; }

.card.chat-room .chat-1 {
  height: 495px; }

.card.chat-room .friend-list li {
  border-bottom: 1px solid #e0e0e0; }
  .card.chat-room .friend-list li:last-of-type {
    border-bottom: none; }

.card.chat-room img.rounded-circle {
  border-radius: 50%; }

.card.chat-room img.avatar {
  height: 3rem;
  width: 3rem; }

.card.chat-room .text-small {
  font-size: 0.95rem; }

.card.chat-room .text-smaller {
  font-size: 0.75rem; }

.scrollbar-light-blue::-webkit-scrollbar-track {
  -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.1);
  box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.1);
  background-color: #F5F5F5;
  border-radius: 10px; }

.scrollbar-light-blue::-webkit-scrollbar {
  width: 12px;
  background-color: #F5F5F5; }

.scrollbar-light-blue::-webkit-scrollbar-thumb {
  border-radius: 10px;
  -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.1);
  box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.1);
  background-color: #82B1FF; }

.rare-wind-gradient {
  background-image: -webkit-gradient(linear, left bottom, left top, from(#a8edea), to(#fed6e3));
  background-image: -webkit-linear-gradient(bottom, #a8edea 0%, #fed6e3 100%);
  background-image: linear-gradient(to top, #a8edea 0%, #fed6e3 100%); }
</style>
