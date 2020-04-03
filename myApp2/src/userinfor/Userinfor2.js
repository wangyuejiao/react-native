import React, { Component } from 'react'
import {View,Text,Image,StyleSheet,TouchableOpacity,AsyncStorage} from 'react-native'
import ImagePicker from 'react-native-image-picker';
import Button from 'react-native-button';
import { Actions } from 'react-native-router-flux';


const options = {
    title: 'Select Avatar',
    customButtons: [{ name: 'fb', title: 'Choose Photo from Facebook' }],
    storageOptions: {
      skipBackup: true,
      path: 'images',
    },
  };


export default class Userinfor extends Component {
    constructor(){
        super();
        this.state={
            avatarSource:require('../../assets/icon/头像.png')
        }
    }
    // componentDidMount(){
    //     var getData=()=>{
    //         AsyncStorage.getItem('Source')
    //         .then((res)=>{
    //             this.setState({
    //                 avatarSource:JSON.parse(res)
    //             })
    //         })
    //     }
    //     getData();
    // }
    takephoto=()=>{
        ImagePicker.showImagePicker(options, (response) => {
            if (response.didCancel) {
              return;
            } else if (response.error) {
              console.log('Error:', response.error);
            } else if (response.customButton) {
              console.log('custom:', response.customButton);
            } else {
                
              const source = { uri: response.uri };
              this.setState({
                avatarSource: source,
              });
              var storeImg=async ()=>{
                const source1 = JSON.stringify(source);
                await AsyncStorage.setItem('Source',source1,
                ()=>{console.log('store success')}
                )}
                storeImg();
            }
          });
    }

    render() {
        return (
            <View style={{backgroundColor:'3edebeb'}}>
                {/* banner */}
                <View style={{backgroundColor:'#f23030',height:180,justifyContent:'center',alignItems:'center'}} > 
                  <TouchableOpacity  onPress={()=>{this.takephoto() }}>
                        <Image style={{width:80,height:80}}  source={this.state.avatarSource} />
                 </TouchableOpacity>
                             <Text style={{color:'white',marginStart:10}}>BINNU DHILLON</Text>
                </View>

                {/* 中间 */}
                <View style={{marginTop:10,backgroundColor:'white',height:35,flexDirection:'row'}}>
                    <Image source={require('../../assets/icon/个人中心.png')} style={{marginLeft:10,justifyContent:'center',alignItems:'center',marginTop:3}}/>
                    <Text style={{marginTop:5,marginLeft:10}}>我的个人中心</Text>
                </View>

                <View style={{marginTop:2,backgroundColor:'white',height:200}}>
                    <View style={{height:50,backgroundColor:'red',flexDirection:'row',marginTop:10}}>
                        <View style={{width:'33%',backgroundColor:'white',height:50}}>
                           <Image source={require('../../assets/icon/客户1.png')} style={styles.slide}/>
                           <Text style={{marginLeft:40}}>账户管理</Text>
                        </View>
                        <View style={{width:'33%',backgroundColor:'white',height:50}}>
                           <Image source={require('../../assets/icon/客户2.png')} style={styles.slide}/>
                           <Text style={{marginLeft:40}}>收货地址</Text>
                        </View>
                        <View style={{width:'34%',backgroundColor:'white',height:50}}>
                           <Image source={require('../../assets/icon/客户3.png')} style={styles.slide}/>
                           <Text style={{marginLeft:40}}>我的信息</Text>
                        </View>
                    </View>
                    <View style={{height:50,backgroundColor:'red',flexDirection:'row',marginTop:10}}>
                        <View style={{width:'33%',backgroundColor:'white',height:50}}>
                           <Image source={require('../../assets/icon/客户4.png')} style={styles.slide}/>
                           <Text style={{marginLeft:40}}>我的订单</Text>
                        </View>
                        <View style={{width:'33%',backgroundColor:'white',height:50}}>
                           <Image source={require('../../assets/icon/客户5.png')} style={styles.slide}/>
                           <Text style={{marginLeft:40}}>我的二维码</Text>
                        </View>
                        <View style={{width:'34%',backgroundColor:'white',height:50}}>
                           <Image source={require('../../assets/icon/客户6.png')} style={styles.slide}/>
                           <Text style={{marginLeft:40}}>我的积分</Text>
                        </View>
                    </View>
                    <View style={{height:50,backgroundColor:'white',flexDirection:'row',marginTop:10}}>
                        <View style={{width:'33%',backgroundColor:'white',height:50}}>
                           <Image source={require('../../assets/icon/客户7.png')} style={styles.slide}/>
                           <Text style={{marginLeft:40}}>我的收藏</Text>
                        </View>
    
                    </View>
                </View>
               
                <View style={{marginTop:10,backgroundColor:'white',height:35,flexDirection:'row'}}>
                    <Image source={require('../../assets/icon/客户8.png')} style={{marginLeft:10,justifyContent:'center',alignItems:'center',marginTop:3}}/>
                    <Text style={{marginTop:5,marginLeft:10}}>E族活动</Text>
                </View>

                <View style={{marginTop:2,backgroundColor:'white',height:150}}>
                    <View style={{height:50,backgroundColor:'red',flexDirection:'row',marginTop:10}}>
                        <View style={{width:'33%',backgroundColor:'white',height:50}}>
                           <Image source={require('../../assets/icon/客户9.png')} style={styles.slide}/>
                           <Text style={{marginLeft:40}}>居家维修保养</Text>
                        </View>
                        <View style={{width:'33%',backgroundColor:'white',height:50}}>
                           <Image source={require('../../assets/icon/客户10.png')} style={styles.slide}/>
                           <Text style={{marginLeft:40}}>出行接送</Text>
                        </View>
                        <View style={{width:'34%',backgroundColor:'white',height:50}}>
                           <Image source={require('../../assets/icon/客户11.png')} style={styles.slide}/>
                           <Text style={{marginLeft:40}}>我的受赠人</Text>
                        </View>
                    </View>
                    <View style={{height:50,backgroundColor:'red',flexDirection:'row',marginTop:10}}>
                        <View style={{width:'33%',backgroundColor:'white',height:50}}>
                           <Image source={require('../../assets/icon/客户11.png')} style={styles.slide}/>
                           <Text style={{marginLeft:40}}>我的住宿优惠</Text>
                        </View>
                        <View style={{width:'33%',backgroundColor:'white',height:50}}>
                           <Image source={require('../../assets/icon/客户12.png')} style={styles.slide}/>
                           <Text style={{marginLeft:40}}>我的活动</Text>
                        </View>
                        <View style={{width:'34%',backgroundColor:'white',height:50}}>
                           <Image source={require('../../assets/icon/客户13.png')} style={styles.slide}/>
                           <Text style={{marginLeft:40}} onPress={()=>Actions.fabu()}>我的发布</Text>
                        </View>
                    </View>   
                </View>
                <View style={{height:30,justifyContent:'center',alignItems:"center",marginTop:20}}>
                           <Text onPress={Actions.lo}>BINNU DHILLON | 退出</Text>
                    </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    slide:{
        marginLeft:60,
        justifyContent:'center',
        alignItems:'center',
        marginTop:3
    },
    btn:{
            width:200,
            height:40,
            borderRadius:20,
            backgroundColor:'red',
            textAlignVertical:'center',
            color:'#fff'
        },
})