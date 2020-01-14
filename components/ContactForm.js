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

    template:

    `
    <div v-if="name == 'contact'" >
        <div v-for="item in data" class="card m-2">
            <div class="card-body">
                <h3 class="card-title">{{item.title}}</h3>
                <form v-for="input in item.inputs" class="p-3 bg">
                    <label>{{input.label}}</label>
                    <textarea class="form-control" v-if="input.type=='textarea'"></textarea>
                    <div v-if="input.type=='textarea'" class="text-right">
                      <br><br>
                      <button class="btn btn-primary">Send message</button>
                    </div>
                    <input v-if="input.type!=='textarea'"  placeholder="" class="form-control">
                </form>
            </div>
        </div>
    </div>
    `,

}