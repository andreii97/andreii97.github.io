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
    /* TODO */
  },

  template: `
    <div v-if="name == 'profile'">
      <div class="card m-2">
        <div class="card-body">
          <h3 class="card-title">{{data[0]}}</h3>
          <a :href="data[1].imgLink">
            <img :src="data[1].imgSrc" width="300" class="img-thumbnail">
          </a>
          <br><br>
          <ul v-for="item in data.slice(2)">
            <li><b>{{item.label}}</b>{{item.value}}</li>
          </ul>
        </div>
      </div>
    </div>

    <div v-else>
      <div class="card m-2" v-for="thing in data">
        <div class="card-body">
          <h3 class="card-title">{{thing.title}}</h3>
          <ul v-for="entry in thing.entries">
            <li v-if="entry.timeRange"><b>{{entry.timeRange}} </b>{{entry.value}}</li>        
          </ul>
          <ul v-for="entry in thing.entries">
            <li v-if="entry.language"><b>{{entry.language}} </b>({{entry.confidence}})</li>
          </ul>
          <ul v-for="entry in thing.entries">
            <li v-if="!entry.language && !entry.timeRange">{{entry}}</li>
          </ul>
        </div>
      </div>
    </div>
    
  `,
}