import Vue from 'vue';

const ga = () => ({
  add_to_cart(data) {
    Vue.$gtag.event('add_to_cart', {
      items: [
        {
          item_id: data.prodSerial,
          item_name: data.prodName,
          item_variant: data.prodSerial,
          price: data.priceDiscount,
        },
      ],
    });
    Vue.$gtm.push({
      event: 'add_to_cart',
    });
  },
  view_item(data) {
    Vue.$gtag.event('view_item', {
      items: [
        {
          item_id: data,
        },
      ],
    });
    Vue.$gtm.push({
      event: 'view_item',
    });
  },
  view_cart(data) {
    Vue.$gtag.event('view_cart', {
      items: data,
    });
    Vue.$gtm.push({
      event: 'view_cart',
    });
  },
  purchase(data) {
    Vue.$gtag.event('purchase', data);
    Vue.$gtm.push({
      event: 'purchase',
    });
  },
});

export const GA = ga();
