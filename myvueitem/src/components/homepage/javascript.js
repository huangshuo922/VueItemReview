export default {
    data () {
      return {
        msg: 'Welcome to Your Vue.js App'
      }
    },
    methods: {
      IsItclosed: function () {
        this.$confirm('您即将退出当前账号', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          localStorage.removeItem('token');
          localStorage.removeItem('token','');
          this.$router.push('/login');
          this.$message({
            type: 'success',
            message: '您已退出'
          });
        }).catch(() => {
          this.$message({
            type: 'info',
            message: '取消退出'
          });          
        });
      },
      handleSignOut: function(){
        this.IsItclosed();
      }
    },
    created() {
      //应该先验证登录
      //获取token 如果没有那么跳转到登录页
      var token = localStorage.getItem('token');
      if(!token){
        this.$router.push('/login');
      }
    },
  }