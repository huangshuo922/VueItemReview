// import Vue from 'vue'
export default {
    data() {
      return {
        userName:'',
        passWord:'',
      }
    },
    methods : {
        open4:function(){
                this.$notify({
                  title: '警告',
                  message: '账号密码错误',
                  type: 'warning'
                });

        },
        handleLogin:function(){
        //    console.dir(this.$axios)
           this.$axios.post('http://localhost:8888/api/private/v1/login', {
            username: this.userName,
            password: this.passWord
          })
          .then((response) => {
            // console.log(response);
            if(response.data.meta.status==200){
                localStorage.setItem('token',response.data.data.token);
                this.$router.push('/')
                        
            }else{
                this.open4();
            }
          })
          .catch(function (error) {
            console.log(error);
          });

        }
    }
  }