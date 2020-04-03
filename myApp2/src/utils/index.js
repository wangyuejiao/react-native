import queryString from 'query-string'
let rootUrl='https://www.fastmock.site/mock/8450093633fc0900e8e1270410759fe0/api';
let myFetch={
    get(url,queryParams){
        url=rootUrl+url
        if(queryParams){
            //把一个对象解析成查询字符串的形式
           url+="?"+queryString.stringify(queryParams)
        }
             console.log(url)
             return fetch(url)
             .then(res=>res.json())
    },
    post(url,body){   
          return fetch(rootUrl+url,{
            method:'POST',
            headers:{
              'Accept':'application/json',
              'Content-Type':'application/json'
            },
            body:JSON.stringify(body)
         })//body传，接口通过req。body拿到
         .then(res=>res.json())
    }

}

export {myFetch};
