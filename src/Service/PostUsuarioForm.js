import axios from '../http-common';

export const PostForm = (dataForm)=>{
    axios.post(`http://localhost:8081/usuario`,  dataForm )
        .then(res => {
          console.log(res);
          // console.log(res.data);
          alert("Enviado com sucesso")
        })
        .catch( e => {
            console.log(e);
        })
}