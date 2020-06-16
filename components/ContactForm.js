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
      sendContact: function() {
        console.log("This is where your data will be.");
      }

    },

    template:

    `
    <div v-if="name == 'contact'" >
        <div v-for="item in data" class="card m-2">
            <div class="card-body">
                <h3 class="card-title">{{item.title}}</h3>
                <form id="contact-form" method="POST" action="mailto:andrei.ionescu49@yahoo.com" v-for="input in item.inputs" class="p-3 bg">
                    <label>{{input.label}}</label>
                    <textarea class="form-control" v-if="input.type=='textarea'"></textarea>
                    <div v-if="input.type=='textarea'" class="text-right">
                      <br><br>
                      <input type="submit" value="Send">
                    </div>
                    <input v-if="input.type!=='textarea'"  placeholder="" class="form-control">
                </form>
            </div>
        </div>
    </div>
    `,

}