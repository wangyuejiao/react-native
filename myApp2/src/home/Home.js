import React,{Component} from 'react';
import Icon from 'react-native-vector-icons/AntDesign';
import {StyleSheet,View, Text, Image, TextInput, Dimensions,Button} from 'react-native';
import Swiper from 'react-native-swiper';

const {width}=Dimensions.get('window');

export default class Home extends Component{
    render(){
        return (
            <>
            <View style={{backgroundColor:'#f7f5f5'}}>
            {/* 一、搜索框 */}
            <View style={{flexDirection:'row',height:55,justifyContent:"flex-start",paddingTop:8,paddingRight:10,backgroundColor:'#f23030'}}>
                <View style={{
                    width:"85%",
                    height:'83%',
                    backgroundColor:'rgba(255,255,255,0.8)',
                    borderRadius:20,
                    marginLeft:15,
                    flexDirection:'row',
                    alignItems:'center',
                    paddingLeft:5
            }}>
                <Icon style={{marginRight:3,marginLeft:6,color:'white'}} size={30} name='deleteuser'/>
                <TextInput placeholder='请输入您要搜索的关键字' style={{color:'white',fontSize:15}}/>
               </View>
               <Icon  style={{marginTop:5,marginLeft:8,color:'white'}} size={30} name='search1'/>
            </View>
            {/* 二、轮播图 */}
            <View style={{height:180}}>       
              <Swiper autoplay autoplayTimeout={3} paginationStyle={{bottom: 5}} >
                  <View style={styles.slide}>
                    <Image style={{width:'100%',height:220}} source={require('../../assets/lunbo1.png')}/>
                  </View>
                  <View style={styles.slide}>
                    <Image style={{width:'100%',height:220}} source={require('../../assets/lunbo2.png')}/>
                  </View>
                  <View style={styles.slide}>
                    <Image style={{width:'100%',height:220}} source={require('../../assets/lunbo1.png')}/>
                  </View>
              </Swiper>
            </View> 
            {/* 三、内容列表 */}
            <View style={styles.box}>
                <Image style={{width:60,height:65,marginLeft:20}} source={require('../../assets/icon/居家1.png')}/>
                <Text style={{fontSize:15,marginLeft:28,marginTop:23}}>居家维修保养</Text>
                <Icon style={{position:'absolute',right:20,top:23}} name='right'/>
            </View>
            <View style={styles.box}>
                <Image style={{width:60,height:65,marginLeft:20}} source={require('../../assets/icon/居家2.png')}/>
                <Text style={{fontSize:15,marginLeft:28,marginTop:23}}>住宿优惠</Text>
                <Icon style={{position:'absolute',right:20,top:23}} name='right'/>
            </View>
            <View style={styles.box}>
                <Image style={{width:60,height:65,marginLeft:20}} source={require('../../assets/icon/居家3.png')}/>
                <Text style={{fontSize:15,marginLeft:28,marginTop:23}}>出行接送</Text>
                <Icon style={{position:'absolute',right:20,top:23}} name='right'/>
            </View>
            <View style={styles.box}>
                <Image style={{width:60,height:65,marginLeft:20}} source={require('../../assets/icon/居家4.png')}/>
                <Text style={{fontSize:15,marginLeft:28,marginTop:23}}>E族活动</Text>
                <Icon style={{position:'absolute',right:20,top:23}} name='right'/>
            </View>

            {/* 四、Button按钮 */}
            <View
              style={{
                width:'100%',
                height:70,
                alignItems:'center',
                justifyContent:'center'
              }}
            >
              <View style={{
                width:'75%',
                height:40,
                borderRadius:50                
              }}>
                <Button
                  title="发布需求"
                  color="#f23030"
                />
              </View>  
            </View>
            

            {/* 五、底部 */}
            <View
              style={{
                width:'100%',
                height:20,
                alignItems:'center',
                // justifyContent:'center'
              }}
            >
              <Text style={{color:'gray',fontSize:10}}>@E族之家 版本所有</Text>
            </View>



            </View>
            </>
          )
    }
}
const styles = StyleSheet.create({
    slide:{
        'width':width,
        height:180,
        justifyContent:'center',
        alignItems:'center',
        borderColor:'pink',
        borderWidth:1
    },
    box:{
      flexDirection:'row',
      'width':width,
      height:70,
      marginTop:10,
      backgroundColor:'white'
    }
});
