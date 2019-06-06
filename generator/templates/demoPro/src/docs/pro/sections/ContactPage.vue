<template>
  <mdb-container class="my-5 pt-5">
    <mdb-row class="mt-5 align-items-center justify-content-start">
      <h4 class="demo-title"><strong>Contact Sections</strong></h4>
      <a href="https://mdbootstrap.com/docs/vue/sections/contact/" waves-fixed class="border grey-text px-2 border-light rounded ml-2" target="_blank"><mdb-icon icon="graduation-cap" class="mr-2"/>Docs</a>
    </mdb-row>
    <hr />
    <mdb-container>
      <section class="my-5 mx-4">
          <h2 class="h1-responsive font-weight-bold text-center my-5">Contact us</h2>
          <p class="text-center w-responsive mx-auto pb-5">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit, error amet numquam iure provident voluptate esse quasi, veritatis totam voluptas nostrum quisquam eum porro a pariatur veniam.</p>
          <mdb-row>
            <mdb-col lg="5" class="lg-0 mb-4">
              <mdb-card>
                <mdb-card-body>
                  <div class="form-header blue accent-1">
                    <h3 class="mt-2"><mdb-icon icon="envelope" /> Write to us:</h3>
                  </div>
                  <p class="dark-grey-text">We'll write rarely, but only the best content.</p>
                  <div class="md-form">
                    <mdb-input icon="user" label="Your name" iconClass="grey-text" type="text" id="form-name" />
                  </div>
                  <div class="md-form">
                    <mdb-input icon="envelope" label="Your email" iconClass="grey-text" type="text" id="form-email" />
                  </div>
                  <div class="md-form">
                    <mdb-input icon="tag" label="Subject" iconClass="grey-text" type="text" id="form-subject" />
                  </div>
                  <div class="md-form">
                    <mdb-textarea icon="pencil-alt" label="Your message" iconClass="grey-text" id="form-text" />
                  </div>
                  <div class="text-center">
                    <mdb-btn color="light-blue">Submit</mdb-btn>
                  </div>
                </mdb-card-body>
              </mdb-card>
            </mdb-col>
            <mdb-col lg="7">
              <div id="map-container" class="rounded z-depth-1-half map-container" style="height: 400px">
                <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d76765.98321148289!2d-73.96694563267306!3d40.751663750099084!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1spl!2spl!4v1525939514494" width="100%" height="100%" frameBorder="0" style="border: 0"></iframe>
              </div>
              <br/>
              <mdb-row class="text-center">
                <mdb-col md="4">
                  <mdb-btn tag="a" floating color="blue" class="accent-1">
                    <mdb-icon icon="map-marker" class="blue accent-1"/>
                  </mdb-btn>
                  <p>New York, 94126</p>
                  <p class="mb-md-0">United States</p>
                </mdb-col>
                <mdb-col md="4">
                  <mdb-btn tag="a" floating color="blue" class="accent-1">
                    <mdb-icon icon="phone" class="blue accent-1"/>
                  </mdb-btn>
                  <p>+ 01 234 567 89</p>
                  <p class="mb-md-0">Mon - Fri, 8:00-22:00</p>
                </mdb-col>
                <mdb-col md="4">
                  <mdb-btn tag="a" floating color="blue" class="accent-1">
                    <mdb-icon icon="envelope" class="blue accent-1"/>
                  </mdb-btn>
                  <p>info@gmail.com</p>
                  <p class="mb-md-0">sale@gmail.com</p>
                </mdb-col>
              </mdb-row>
            </mdb-col>
          </mdb-row>
        </section>

        <hr class="my-5"/>


        <section class="my-5 mx-4">
          <h2 class="h1-responsive font-weight-bold text-center my-5">Contact us</h2>
          <p class="text-center w-responsive mx-auto pb-5">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit, error amet numquam iure provident voluptate esse quasi, veritatis totam voluptas nostrum quisquam eum porro a pariatur veniam.</p>
          <mdb-row>
            <mdb-col md="9" class="md-0 mb-5">
              <form>
                <mdb-row>
                  <mdb-col md="6">
                    <div class="md-form mb-0">
                      <mdb-input type="text" id="contact-name" label="Your name" />
                    </div>
                  </mdb-col>
                  <mdb-col md="6">
                    <div class="md-form mb-0">
                      <mdb-input type="text" id="contact-email" label="Your email" />
                    </div>
                  </mdb-col>
                </mdb-row>
                <mdb-row>
                  <mdb-col md="12">
                    <div class="md-form mb-0">
                      <mdb-input type="text" id="contact-subject" label="Subject" />
                    </div>
                  </mdb-col>
                </mdb-row>
                <mdb-row>
                  <mdb-col md="12">
                    <div class="md-form mb-0">
                      <mdb-textarea id="contact-message" label="Your message" />
                    </div>
                  </mdb-col>
                </mdb-row>
              </form>
              <div class="text-center text-md-left">
                <mdb-btn color="primary" size="md">Send</mdb-btn>
              </div>
            </mdb-col>
            <mdb-col md="3" class="text-center">
              <ul class="list-unstyled mb-0">
                <li>
                  <mdb-icon icon="map-marker" size="2x" class="blue-text"/>
                  <p>San Francisco, CA 94126, USA</p>
                </li>
                <li>
                  <mdb-icon icon="phone" size="2x" class="blue-text mt-4"/>
                  <p>+ 01 234 567 89</p>
                </li>
                <li>
                  <mdb-icon icon="envelope" size="2x" class="blue-text mt-4"/>
                  <p>contact@example.com</p>
                </li>
              </ul>
            </mdb-col>
          </mdb-row>
        </section>

        <hr class="my-5"/>

        <section class="contact-section my-5 mx-4">
          <mdb-card>
            <mdb-row>
              <mdb-col lg="8">
                <mdb-card-body class="form">
                  <h3 class="mt-4">
                    <mdb-icon icon="envelope" class="pr-2"/>Write to us:
                  </h3>
                  <mdb-row>
                    <mdb-col md="6">
                      <div class="md-form mb-0">
                        <mdb-input type="text" id="form-contact-name" label="Your name"/>
                      </div>
                    </mdb-col>
                    <mdb-col md="6">
                      <div class="md-form mb-0">
                        <mdb-input type="text" id="form-contact-email" label="Your email"/>
                      </div>
                    </mdb-col>
                  </mdb-row>
                  <mdb-row>
                    <mdb-col md="6">
                      <div class="md-form mb-0">
                        <mdb-input type="text" id="form-contact-phone" label="Your phone"/>
                      </div>
                    </mdb-col>
                    <mdb-col md="6">
                      <div class="md-form mb-0">
                        <mdb-input type="text" id="form-contact-company" label="Your company"/>
                      </div>
                    </mdb-col>
                  </mdb-row>
                  <mdb-row>
                    <mdb-col md="12">
                      <div class="md-form mb-0">
                        <mdb-textarea id="form-contact-message" label="Your message"/>
                        <mdb-btn tag="a" floating color="blue" size="lg">
                          <mdb-icon far icon="paper-plane"/>
                        </mdb-btn>
                      </div>
                    </mdb-col>
                  </mdb-row>
                </mdb-card-body>
              </mdb-col>
              <mdb-col lg="4">
                <mdb-card-body class="text-center h-100">
                  <h3 class="my-4 pb-2">Contact information</h3>
                  <ul class="list-unstyled ml-4">
                    <li>
                      <mdb-icon icon="map-marker" class="pr-2"/>
                      <p>New York, 94126 USA</p>
                    </li>
                    <li>
                      <mdb-icon icon="phone" class="pr-2"/>
                      <p>+ 01 234 567 89</p>
                    </li>
                    <li>
                      <mdb-icon icon="envelope" class="pr-2"/>
                      <p>contact@example.com</p>
                    </li>
                  </ul>
                  <hr class="hr-light my-4"/>
                  <ul class="list-inline text-center list-unstyled">
                    <li class="list-inline-item">
                      <a class="p-2 fa-lg w-ic">
                        <mdb-icon fab icon="twitter"/>
                      </a>
                    </li>
                    <li class="list-inline-item">
                      <a class="p-2 fa-lg w-ic">
                        <mdb-icon fab icon="linkedin"/>
                      </a>
                    </li>
                    <li class="list-inline-item">
                      <a class="p-2 fa-lg w-ic">
                        <mdb-icon fab icon="instagram"/>
                      </a>
                    </li>
                  </ul>
                </mdb-card-body>
              </mdb-col>
            </mdb-row>
          </mdb-card>
        </section>
    </mdb-container>
  </mdb-container>
</template>

<script>
import { mdbContainer, mdbRow, mdbCol, mdbBtn, mdbIcon, mdbInput, mdbTextarea, mdbCard, mdbCardBody } from 'mdbvue';

export default {
  name: 'ContactPage',
  components: {
    mdbContainer,
    mdbRow,
    mdbCol,
    mdbBtn,
    mdbIcon,
    mdbInput,
    mdbTextarea,
    mdbCard,
    mdbCardBody
  }

};
</script>

<style scoped>
</style>
