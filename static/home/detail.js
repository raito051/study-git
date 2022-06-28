

let app = new Vue ({
    el: '#app',
    delimiters: ["[[", "]]"],
    data(){
        return{
            items:[],
            togel: true,
        }
    },
    methods:{
        select: function( event ){
            targetId = event.currentTarget.id;
            this.items.push(targetId)
            this.togel = !this.togel
            console.log(targetId)
            data = JSON.parse("{{ sports_list }}")
            console.log(data);
        },
    }
});