export default {
  data: () => {
    return {

    }
  },
  props: {
    data : Array,
    name : String,
  },
  methods: {
    
  },
  template: `
    <div class="col-12">
      <nav class="navbar navbar-expand-xl navbar-light bg-light">
        <a class="navbar-brand">Navigation</a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div id="navbarNavAltMarkup" class="collapse navbar-collapse">
          <div id="top-navigation" class="navbar-nav"></div>
        </div>
      </nav>
    </div>
  `,
}