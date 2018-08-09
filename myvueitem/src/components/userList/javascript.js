export default {
    created() {
        
    },
    data (){
        return{
            tableData: [{
                userName: 'zhuhaoliang',
                eMail: '792131@qq.com',
                phone: '34234123123213'
              }, 
              {
                userName: 'zhuhaoliang',
                eMail: '792131@qq.com',
                phone: '34234123123213'
              }, 
              {
                userName: 'zhuhaoliang',
                eMail: '792131@qq.com',
                phone: '34234123123213'
              }, 
              {
                userName: 'zhuhaoliang',
                eMail: '792131@qq.com',
                phone: '34234123123213'
              }]
        }
    },
    methods: {
        renderList: function(){
            axios.get('/user?ID=12345')
            .then((response)=> {
                console.log(response);
            })
            .catch( (error) => {
                console.log(error);
            });
        }
    }
}