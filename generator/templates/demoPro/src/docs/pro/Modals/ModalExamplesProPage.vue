<template>
  <mdb-container>
    <mdb-row class="mt-5 align-items-center justify-content-start">
      <h4 class="demo-title"><strong>Modal Examples</strong></h4>
      <a href="https://mdbootstrap.com/docs/vue/modals/basic/?utm_source=DemoApp&utm_medium=MDBVuePro" waves-fixed class="border grey-text px-2 border-light rounded ml-2" target="_blank"><mdb-icon icon="graduation-cap" class="mr-2"/>Docs</a>
    </mdb-row>
    <hr />

    <mdb-btn color="default" @click="product=true" class="mb-3">Product</mdb-btn>
    <mdb-modal :show="product" class="product-modal" @close="product = false" size="lg" info>
      <mdb-modal-body>
        <mdb-row>
          <mdb-col lg="5">
            <mdb-carousel :interval="0" showControls showIndicators thumbnails  :indicatorStyle="{width: '90%'}">
              <mdb-carousel-item img src="https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Vertical/img%20(23).jpg" thumbnail="https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Vertical/img%20(23).jpg" alt="First slide"/>
              <mdb-carousel-item img src="https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Vertical/img%20(24).jpg" thumbnail="https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Vertical/img%20(24).jpg" alt="Second slide"/>
              <mdb-carousel-item img src="https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Vertical/img%20(25).jpg" thumbnail="https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Vertical/img%20(25).jpg" alt="Third slide"/>
            </mdb-carousel>
          </mdb-col>
          <mdb-col lg="7">
            <h2 class="h2-responsive product-name">
              <strong>Product Name</strong>
            </h2>
            <h4 class="h4-responsive">
              <span class="green-text">
                <strong>$49</strong>
              </span>
              <span class="grey-text">
                <small>
                  <strong>$89</strong>
                </small>
              </span>
            </h4>

            <mdb-accordion :panes="panes" material/>

            <mdb-card-body>
              <mdb-row>
                <mdb-col md="6">
                  <mdb-select :options="colors" />
                </mdb-col>
                <mdb-col md="6">
                  <mdb-select :options="sizes" />
                </mdb-col>
              </mdb-row>
              <div class="text-center">
                <mdb-btn color="secondary" @click="product=false">Close</mdb-btn>
                <mdb-btn color="primary" icon="cart-plus" iconClass="ml-2 white-text" iconRight>Add to cart</mdb-btn>
              </div>
            </mdb-card-body>
          </mdb-col>
        </mdb-row>
      </mdb-modal-body>
    </mdb-modal>

  </mdb-container>
</template>

<script>
import { mdbContainer, mdbRow, mdbCol, mdbIcon, mdbBtn, mdbModal, mdbModalHeader, mdbModalBody, mdbModalFooter, mdbModalTitle, mdbBadge, Input, mdbTextarea, mdbTbl, mdbTblHead, mdbTblBody, mdbCarousel, mdbCarouselItem, mdbCarouselIndicators, mdbCarouselIndicator, mdbAccordion, mdbCardBody, mdbSelect } from 'mdbvue';

export default {
  name: 'ModalExamplesPage',
  components: {
    mdbContainer,
    mdbRow,
    mdbCol,
    mdbIcon,
    mdbBtn,
    mdbModal,
    mdbModalHeader,
    mdbModalBody,
    mdbModalFooter,
    mdbModalTitle,
    mdbBadge,
    Input,
    mdbTextarea,
    mdbTbl,
    mdbTblHead,
    mdbTblBody,
    mdbCarousel,
    mdbCarouselItem,
    mdbCarouselIndicators,
    mdbCarouselIndicator,
    mdbAccordion,
    mdbCardBody,
    mdbSelect
  },
  data() {
    return {
      cookies: false,
      coupon: false,
      discount: false,
      related: false,
      abandoned: false,
      confirm: false,
      poll: false,
      cart: false,
      push: false,
      product: false,
      panes: [
        {
          title: 'Description',
          content: 'Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod.'
        }, {
          title: 'Details',
          content: 'Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod.'
        },
        {
          title: 'Shipping',
          content: 'Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod.'
        }
      ],
      colors: [
        {value: -1, text: 'Choose your color', disabled: true, selected: true },
        {value: 'White', text: 'White'},
        {value: 'Black', text: 'Black'},
        {value: 'Pink', text: 'Pink'}
      ],
      sizes: [
        {value: -1, text: 'Choose your size', disabled: true, selected: true },
        {value: 'XS', text: 'XS'},
        {value: 'S', text: 'S'},
        {value: 'L', text: 'L'}
      ],
      share: false
    };
  }
};
</script>

<style>
.product-modal .carousel-thumbnails {
  margin-bottom: 10rem;
}
.product-modal .carousel-thumbnails .carousel-indicators {
  margin-bottom: -10rem;
  position: absolute;
}
.product-modal .carousel-thumbnails .carousel-indicators .active {
  height: 100%;
  width: auto;
  opacity: 1;
}
</style>
