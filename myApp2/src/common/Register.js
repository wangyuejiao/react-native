import React, { Component } from 'react'
import Icon from 'react-native-vector-icons/FontAwesome';
import {View, Text, Image, TextInput, AsyncStorage, TouchableOpacity,Alert} from 'react-native';
import { Actions } from 'react-native-router-flux';
import {myFetch} from '../utils';

export default class Register extends Component {
    constructor(){
        super();
        this.state = {
            username:'',
            pwd:'',
            pwdTwo:'',
            isloading:false
        }
    }
    userhandle = (text)=>{
        this.setState({username:text})          
    }
    pwdhandle = (text)=>{
        this.setState({pwd:text})
    }
    pwdhandleTwo = (text)=>{
        this.setState({pwdTwo:text})
    }
    register=()=>{
        // myFetch.get('/topics',{limit:4,user:'sss'})
        //     .then(res=>console.log(res))
        //this.setState({isloading:true})//
        if(this.state.username != '' && this.state.pwd != "" && this.state.pwdTwo != ""){
            if(this.state.pwd != this.state.pwdTwo){
              Alert.alert('两次密码不一致！');
            }
            else{
              this.setState({
                isloading:true
              })
              myFetch.post('/login',{
                  username:this.state.username,
                  pwd:this.state.pwd
              // }).then(res=>console.log(res))     
              }).then(res=>{
                  // 根据返回状态进行判断，正确时跳转首页
                  // if(res){
  
                  // }
                  if(res.data.status == '111'){
                    Alert.alert('账户已经存在');
                  }
                  else if(res.data.status == '222'){
                    Alert.alert('连接错误');
                  }
                  else{
                    AsyncStorage.setItem('user', JSON.stringify(res.data))
                            .then(() => {
                                this.setState({ isloading: false })
                                Actions.lo();
                            })
                  }
                  console.log(res.data);                 
              })  
            }          
        }
        else{
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
                        <TextInput placeholder="用户名" style={{marginLeft:6}}
                            onChangeText={this.userhandle}
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
                        <TextInput 
                            onChangeText={this.pwdhandle}
                            placeholder="密码" 
                            secureTextEntry={true}
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
                        <TextInput 
                            onChangeText={this.pwdhandleTwo}
                            placeholder="再次输入密码" 
                            secureTextEntry={true}
                        />
                    </View>
                    <View style={{flexDirection:'row'}}>
                        <TouchableOpacity 
                            style={{
                                width: '35%',
                                height: 40,
                                backgroundColor: '#ccc',
                                marginTop: 30,
                                alignItems: 'center',
                                justifyContent: 'center',
                                marginRight:40,
                                marginLeft:-12
                            }}
                            onPress={this.register}>
                            <Text>注册</Text>
                        </TouchableOpacity>
                        <TouchableOpacity 
                            style={{
                                width: '35%',
                                height: 40,
                                backgroundColor: '#ccc',
                                marginTop: 30,
                                alignItems: 'center',
                                justifyContent: 'center'
                            }}
                            onPress={() => Actions.pop()}>
                            <Text>返回登录</Text>
                        </TouchableOpacity>
                    </View>
                </View>
                {/* {
                    //正在注册弹框
                    this.state.isregistering
                    ?<View style={{height:'30%',width:'80%',position:'absolute',zIndex:11,left:45,alignItems:'center',justifyContent:'center',backgroundColor:'white'}}><Text style={{fontSize:20}}>注册中...</Text></View>
                    :null
                } */}
            </View>
       
        )
    }
}

