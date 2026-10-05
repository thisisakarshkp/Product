import axios from 'axios'

const axiosInstance=axios.create({
    baseURL:import.meta.env.VITE_API_URL || 'http://localhost:3000',
    timeout:60000
})

//response interceptors: handling global/common errors

axiosInstance.interceptors.response.use(
    (response)=>{
        console.log("response received");
        return response
    },
    (error)=>{
        if(error.response){
            const status=error.response.status
            if(status==401){
                console.log("Un-Authorized"); 
            }
            else if(status==404){
                console.log("API not found");   
            }
            else if(status==500){
                console.log("server error!");             
            }
        } else if(error.request){
            console.log("No response from server");
        } else {
            console.log("Error"+error.message);
        }
        return Promise.reject(error)
    }
)

export default axiosInstance
