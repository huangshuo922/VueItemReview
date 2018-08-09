export default {
    created() {
        this.renderList();
    },
    data (){
        return{
            pagesize: 5,
            tableData:[],
            currentPage: 1,
            total:10
        }
    },
    methods: {
        renderList: function(){
            this.$axios.get('http://localhost:8888/api/private/v1/users', {
                params: {
                    pagenum:this.currentPage,
                    pagesize:this.pagesize,
                
                }
              })
              .then( (response) => {
                this.total=response.data.data.total
                // console.log(response);
                this.tableData = response.data.data.users
                console.log(response.data.data)
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
        },
        handleSizeChange(val) {
            this.pagesize = val;
            this.renderList();
            console.log(`每页 ${val} 条`);
          },
        handleCurrentChange(val) {
            this.currentPage = val
            this.renderList();
        console.log(`当前页: ${val}`);
        }
    }
}