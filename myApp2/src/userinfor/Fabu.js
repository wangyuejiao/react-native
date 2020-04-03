import React, { Component } from 'react'
import {View,Text,Image,TouchableOpacity,AsyncStorage,StyleSheet, ToastAndroid} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import { Actions } from 'react-native-router-flux';
import Userinfor from './Userinfor'
import Button from 'react-native-button'

export default class Fabu extends Component {
    constructor(){
        super();
        this.state={
            tits:[],
            content:[],
            limit:0
        }
    }

    //获取官网的title
    componentDidMount(){
        fetch('https://cnodejs.org/api/v1/topics')
        .then(res=>res.json())
        .then(res=>{
            this.setState({
                tits:res.data,
                content:[]
             } );
             for (var i =  this.state.limit; i < this.state.limit+15; i++) {
                if(res.data[i].title.length>=15 || res.data[i].create_at.length>=15){
                    this.setState(()=>this.state.content.push({title:res.data[i].title.substr(0,15)+"...",time:res.data[i].create_at.substr(0,10),reply:Math.floor((Math.random()*2)+1)}))
                }
                else{
                    this.setState(()=>this.state.content.push({title:res.data[i].title,time:res.data[i].create_at.substr(0,9),reply:Math.floor((Math.random()*2)+1)}))
                }
            }
            })
    }

    //点击向前进按钮
    forward=()=>{
        if(this.state.limit==0){
            ToastAndroid.show('已到最前页',1000)
        }
        else{
            this.setState(()=>{
                this.state.limit--
            });
            this.setState({
                content:[]
            }),
            fetch('https://cnodejs.org/api/v1/topics')
            .then(res=>res.json())
            .then(res=>{
                this.setState({
                    tits:[],
                    tit:res.data
                 } );
                 for (var i =  this.state.limit; i < this.state.limit+15; i++) {
                    if(res.data[i].title.length>=15 || res.data[i].create_at.length>=15){
                        this.setState(()=>this.state.content.push({title:res.data[i].title.substr(0,15)+"...",
                                                                   time:res.data[i].create_at.substr(0,10),
                                                                   reply:Math.floor((Math.random()*2)+1)}))
                    }
                    else{
                        this.setState(()=>this.state.content.push({title:res.data[i].title,
                                                                   time:res.data[i].create_at.substr(0,10),
                                                                   reply:Math.floor((Math.random()*2)+1)}))
                    }
                }
                })
            
        }

    }

    //点击下一页按钮
    back=()=>{
        this.setState(()=>{
            this.state.limit++
        });
        this.setState({
            content:[]
        }),
        fetch('https://cnodejs.org/api/v1/topics')
        .then(res=>res.json())
        .then(res=>{
            this.setState({
                tits:[],
                tit:res.data
             } );
             for (var i =  this.state.limit; i < this.state.limit+15; i++) {
                if(res.data[i].title.length>=15 || res.data[i].create_at.length>=15){
                    this.setState(()=>this.state.content.push({title:res.data[i].title.substr(0,15)+"...",
                                                               time:res.data[i].create_at.substr(0,10),
                                                               reply:Math.floor((Math.random()*2)+1)}))
                }
                else{
                    this.setState(()=>this.state.content.push({title:res.data[i].title,
                                                               time:res.data[i].create_at.substr(0,10),
                                                               reply:Math.floor((Math.random()*2)+1)}))
                }
            }
            })
        
    }
    render() {
        return (
          <View>
              {/* 头部框 */}
              <View style={{height:60,backgroundColor:'red',flexDirection:'row'}}>
                  <Icon name='left' size={28}  style={{justifyContent:'center',alignItems:"center",marginTop:18,color:'white'}}
                         onPress={()=>{
                             Actions.userinfor()
                        }
                     }/>
                  <Text style={{fontSize:15,color:'white',marginLeft:150,marginTop:18}}>我的发布</Text>
                  <Icon name='ellipsis1' size={28}  style={{justifyContent:'center',alignItems:"center",marginTop:18,color:'white',marginLeft:160}}/>
              </View >
            
            {/* 中间内容 */}
              <View style={{flexDirection:'column',alignItems:'flex-start',justifyContent:'center'}} >
                 {this.state.content.map((item) => (
                    <View style={{height:40,flexDirection:'row',alignItems:'center'}}>
                        <Text style={{width:'50%'}}>{item.title}</Text>
                        <View style={{flexDirection:'row',alignItems:'center',justifyContent:'center',marginLeft:50}}>
                            <Text style={{ marginRight: 10 }}>{item.time} </Text>
                             {(item.reply==1)?(<Text>已回复</Text>):
                                 <Text style={{color:'red'}}>未回复</Text>
                             }
                       </View>
              
              </View>
              ))}
              </View>
              
              {/* 底部内容 */}
              <View style={{height:50,flexDirection:'row'}}>
                  <Button style={styles.but} onPress={this.forward} >上一页</Button>
                            <Text style={{marginLeft:50,height:30,lineHeight:30}}>第{this.state.limit+1}页</Text>
                  <Button style={styles.but} onPress={this.back}>下一页</Button>
              </View>
        </View>
        )

    }
}
const styles = StyleSheet.create({
    but:{
        flexDirection:'row',
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'red',
        width:100,
        height:30,
        color:'white',
        borderRadius:15,
        marginLeft:30,
        lineHeight:30
    }
})