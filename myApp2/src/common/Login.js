import Icon from 'react-native-vector-icons/FontAwesome';
import React, {Component} from 'react';
import {View, Text, Image, TextInput, TouchableOpacity, AsyncStorage,Alert} from 'react-native';
import { Actions } from 'react-native-router-flux';
import {myFetch} from '../utils'

export default class Login extends Component {
  constructor(){
    super();
    this.state={
      username:'',
      pwd:'',
      isLoading:false
    }
  }
  userhandle=(text)=>{
    console.log(text);
    this.setState({
       username:text
    })
  }
  pwdhandle=(text)=>{
    console.log(text);
    this.setState({
        pwd:text
    })
  }
  login=()=>{
    // myFetch.get('/topics',{limit:4,user:'ss'})
    //  .then(res=>console.log(res))
    // this.setState({isLoading:true})
    // myFetch.post('/login',{
    //   username:this.state.username,
    //   pwd:this.state.pwd}
    // ).then(res=>{
    //   AsyncStorage.setItem('user',JSON.stringify(res.data))//记录登录状态,拿到接口数据
    //   .then(()=>{
    //     this.setState({isLoading:false})
    //     Actions.login();
    //   })
    // })
    //res就是接口里面的数据
  if(this.state.username!= '' && this.state.pwd != ""){
      this.setState({
          isloading:true
    })
     myFetch.post('/login',{
        username:this.state.username,
        pwd:this.state.pwd 
    }).then(res=>{
        if(res.data.status == '111'){
          Alert.alert('账户已经存在');
          this.setState({ isloading: false });
        }
        else if(res.data.status == '222'){
          Alert.alert('连接错误');
          this.setState({ isloading: false });
        }
        else{
          AsyncStorage.setItem('user',JSON.stringify(res.data))//存储
            .then(()=>{
                this.setState({isloading:false})
                Actions.login()//跳转
            })
        }
        console.log(res.data);                 
    })            
}
else{
  this.setState({
    num:1
  })
  Alert.alert('用户名或密码不能为空');
}    
}
  render() {
    return (
      <View style={{flex: 1,justifyContent: 'center'}}>
        <View
          style={{ alignItems: 'center'}}>
          <View
            style={{
              width: '80%',
              marginRight: 10,
              borderBottomColor: '#ccc',
              borderBottomWidth: 1,
              flexDirection: 'row',
              alignItems: 'center',
              paddingLeft: 20,
            }}>
            <Icon name="user" color="red" style={{fontSize:20}}/>
            {/* 拿到输入框里的值 */}
            <TextInput placeholder="用户名" 
                   onChangeText={this.userhandle}
                   style={{marginLeft:6}}
            />
          </View>
          <View
            style={{
              width: '80%',
              marginRight: 10,
              borderBottomColor: '#ccc',
              borderBottomWidth: 1,
              flexDirection: 'row',
              alignItems: 'center',
              paddingLeft: 20,
            }}>
            <Icon name="key" color="red" style={{fontSize:20}}/>
            <TextInput placeholder="密码" 
               onChangeText={this.pwdhandle}
               secureTextEntry={true}
            />
          </View>
          <Text style={{position:'absolute',right:42,top:100,color:'blue'}} onPress={()=>Actions.register()}>注册</Text>
            <TouchableOpacity 
                style={{
                    width: '80%',
                    height: 40,
                    backgroundColor: '#ccc',
                    marginTop: 40,
                    alignItems: 'center',
                    justifyContent: 'center'
                }}
                onPress={this.login}>
                <Text>登录</Text>
            </TouchableOpacity>
        </View>
        {
        this.state.isLoading?<View><Text>正在登录...</Text></View>:null
      }
      </View>
    );
  }
}