<template>
  <div />
</template>

<script>
import jsonLd from '@/static/jsonld.json';

export default {
  asyncData() {
    return { jsonLd };
  },
  jsonld() {
    const data = [];
    data.push(this.jsonLd.organization);
    data.push(this.jsonLd.webpage);
    data.push(this.jsonLd.website);
    return data;
  },
};
</script>
