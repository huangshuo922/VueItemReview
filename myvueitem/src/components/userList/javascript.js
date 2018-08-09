export default {
    created() {
        this.renderList();
    },
    data (){
        return{
            pagenum: 1,
            pagesize: 10,
            tableData:[]
        }
    },
    methods: {
        renderList: function(){
            this.$axios.get('http://localhost:8888/api/private/v1/users', {
                params: {
                    pagenum:this.pagenum,
                    pagesize:this.pagesize
                }
              })
              .then( (response) => {
                // console.log(response);
                
                
                this.tableData = response.data.data.users

                // for(var i=0;i<userListArr.length;i++){
                //     // console.log([this.tableData])
                //     // this.tableData[this.tableData.length] = {userName:'',eMail:'',phone:''};
                //     // this.tableData[this.tableData.length].userName = userListArr[i].username;
                //     // this.tableData[this.tableData.length].eMail = userListArr[i].email;
                //     // this.tableData[this.tableData.length].phone = userListArr[i].mobile
                // }
                // console.log(this.tableData)
              })
              .catch( (error) => {
                console.log(error);
              });
        }
    }
}