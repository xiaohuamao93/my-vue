import $ from 'jquery';
import { Indicator } from 'mint-ui';

export default {
  name: 'Home',
  data () {
    return {
      showIframe: true
    }
  },
  created () {
    // Indicator.open();
  },
  mounted () {

  },
  methods: {
    clearIframe () {
      this.showIframe = false;
    }
  }
}
