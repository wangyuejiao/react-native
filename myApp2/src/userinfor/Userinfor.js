import React, { Component } from 'react'
import {View,Text,Image,StyleSheet,TouchableOpacity,AsyncStorage,PixelRatio,Dimensions} from 'react-native'
import ImagePicker from 'react-native-image-picker';
import Button from 'react-native-button';
import { Actions } from 'react-native-router-flux';
import Icon from 'react-native-vector-icons/AntDesign';

const {width}=Dimensions.get('window');
  const options = {//定义选项
    title: '选择图片', 
    cancelButtonTitle: '取消',
    takePhotoButtonTitle: '拍照', 
    chooseFromLibraryButtonTitle: '选择照片', 
    cameraType: 'back',
    mediaType: 'photo',
    videoQuality: 'high', 
    durationLimit: 10, 
    maxWidth: 300,
    maxHeight: 300,
    quality: 0.8, 
    angle: 0,
    rotation:90,
    allowsEditing: false, 
    noData: false,
    storageOptions: {
        skipBackup: true,
    
    }
};

export default class Userinfor extends Component {
    constructor(props) {
        super(props);
        this.state = {
            avatarSource: require('../../assets/icon/头像.png')//默认头像
        };
     }
    componentDidMount(){
        AsyncStorage.getItem('uri')//获得本地存储内容并赋值
            .then((res)=>{
                let ImageUri = {uri:res}
                this.setState({
                    avatarSource:ImageUri
                })
            });
    }
    selectPhotoTapped() {//调用照相机函数
        ImagePicker.showImagePicker(options, (response) => {
            if (response.didCancel) {
                console.log('User cancelled photo picker');
            }
            else if (response.error) {
                console.log('ImagePicker Error: ', response.error);
            }
            else if (response.customButton) {
                console.log('User tapped custom button: ', response.customButton);
            }
            else {
                let source = { uri: response.uri };
                this.setState({
                    avatarSource: source
                });
                AsyncStorage.setItem('uri',response.uri,()=>{console.log('store success',source.uri)})//进行本地存储
            }
        });
    }
    render() {
        return (
            <View style={{backgroundColor:'3edebeb'}}>
                 <View style={{'width':width,height:170,backgroundColor:'#e92d2d',justifyContent:'center',alignItems:'center'}}
            >
                   <TouchableOpacity onPress={this.selectPhotoTapped.bind(this)} >
                           <View style={[styles.avatar, styles.avatarContainer]}>
                                  <Image style={styles.avatar}  source={this.state.avatarSource} />
                           </View>
                   </TouchableOpacity>               
                   <Text style={{fontSize:15,color:'white',marginTop:7}}>BINNU DHILLON</Text>
            </View>

                {/* 中间 */}
               
                <View> 
                <View style={styles.box} >
                    <Icon name='team' style={{fontSize:18}}/>
                    <Text style={styles.txt}>我的个人中心</Text>
                </View>
                <View style={{'width':width,height:215,flexDirection:'row',flexWrap:'wrap',borderBottomWidth:5,borderBottomColor:'#e6e6e6'}}>
                    <View style={styles.box1}>
                        <Icon name='phone' style={{fontSize:18}}/> 
                        <Text style={styles.txt1}>账号管理</Text>
                    </View>
                    <View style={styles.box1}>
                        <Icon name='setting' style={{fontSize:18}}/>
                        <Text style={styles.txt1}>收货地址</Text>
                    </View>
                    <View style={styles.box1}>
                        <Icon name='user' style={{fontSize:18}}/>
                        <Text style={styles.txt1}>我的信息</Text>
                    </View>
                    <View style={styles.box1}>
                        <Icon name='totop' style={{fontSize:18}}/>
                        <Text style={styles.txt1}>我的订单</Text>
                    </View>
                    <View style={styles.box1}>
                        <Icon name='inbox' style={{fontSize:18}}/>
                        <Text style={styles.txt1}>我的二维码</Text>
                    </View>
                    <View style={styles.box1}>
                        <Icon name='save' style={{fontSize:18}}/>
                        <Text style={styles.txt1}>我的积分</Text>
                    </View>
                    <View style={styles.box1}>
                        <Icon name='laptop' style={{fontSize:18}}/>
                        <Text style={styles.txt1}>我的收藏</Text>
                    </View>
                </View>
            </View>


            {/* 三、E族活动 */}
            <View>
                <View style={styles.box}>
                    <Icon name='home'style={{fontSize:18}}/>
                    <Text style={styles.txt}>E族活动</Text>
                </View>
                <View style={{'width':width,height:140,flexDirection:'row',flexWrap:'wrap'}}>
                    <View style={styles.box1}>
                        <Icon name='mail' style={{fontSize:18}}/>
                        <Text style={styles.txt1}>居家维修保养</Text>
                    </View>
                    <View style={styles.box1}>
                        <Icon name='meh' style={{fontSize:18}}/>
                        <Text style={styles.txt1}>出行接送</Text>
                    </View>
                    <View style={styles.box1}>
                        <Icon name='link' style={{fontSize:18}}/>
                        <Text style={styles.txt1}>我的受赠人</Text>
                    </View>
                    <View style={styles.box1}>
                        <Icon name='camerao' style={{fontSize:18}}/>
                        <Text style={styles.txt1}>我的住宿优惠</Text>
                    </View>
                    <View style={styles.box1}>
                        <Icon name='camera' style={{fontSize:18}}/>
                        <Text style={styles.txt1}>我的活动</Text>
                    </View>
                    <View style={styles.box1}>
                        <Button onPress={()=>{Actions.fabu()}} style={{textAlign:'center'}}>
                            <Icon name='hdd'  style={{textAlign:'center',position:'absolute',left:15,top:0,fontSize:18}} />
                            <Text  style={styles.txt1}>{"\n"}我的发布</Text>
                        </Button>
                    </View>
                </View>
            </View>

            {/* 四、底部 */}
            
            <View style={{ alignItems: 'center' }}>
                <TouchableOpacity
                    style={{
                        // width: '80%',
                        // height: 30,
                        // backgroundColor: '#f23030',
                        // // marginTop: 30,
                        // // marginBottom: 30,
                        // alignItems: 'center',
                        // justifyContent: 'center' 
                        'width':width,
                        height:30,
                        justifyContent:'center',
                        alignItems:"center", 
                        borderTopWidth:5,
                        borderTopColor:'#e6e6e6',      
                    }}
                    onPress={Actions.lo}>
                    <Text style={{ color: 'gray' }}>{this.state.username}BINNU DHILLON | 退出登录</Text>
                </TouchableOpacity>
        </View>
    </View>
    
        )
    }
}

const styles = StyleSheet.create({
    box:{
        // width:'100%',
        'width':width,
        height:45,
        flexDirection:'row',
        borderBottomWidth:1,
        borderBottomColor:'#e6e6e6',
        paddingTop:10,
        paddingLeft:10
    },
    txt:{
        marginLeft:10,
        color:'gray',
    },
    box1:{
        'width':1/3*width,
        height:70,
        justifyContent:'center',
        alignItems:'center',
    },
    txt1:{
        color:'gray',
        marginTop:8
    },
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF'
    },
    // slide:{
    //     marginLeft:60,
    //     justifyContent:'center',
    //     alignItems:'center',
    //     marginTop:3
    // },
    // btn:{
    //         width:200,
    //         height:40,
    //         borderRadius:20,
    //         backgroundColor:'red',
    //         textAlignVertical:'center',
    //         color:'#fff'
    //     },
    avatarContainer: {
            borderColor: '#9B9B9B',
            borderWidth: 1 / PixelRatio.get(),
            justifyContent: 'center',
            alignItems: 'center'
        },
        avatar: {
            borderRadius: 50,
            width: 100,
            height: 100
        },
        avatarimg: {
            borderRadius: 50,
            width: 100,
            height: 100,
            zIndex:999
        }
})