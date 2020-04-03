
import React,{useState,useEffect} from 'react'
import {StyleSheet,View,Text,Image,AsyncStorage,BackHandler,ToastAndroid} from 'react-native';
import {Router,Overlay,Scene,Tabs,Drawer,Lightbox,Modal,Actions} from 'react-native-router-flux'
import Icon from 'react-native-vector-icons/FontAwesome';
import SplashScreen from 'react-native-splash-screen'
import Goods from './src/goods/Goods'
import Home from './src/home/Home'
import Userinfor from './src/userinfor/Userinfor'
import SwiperPage from './src/common/SwiperPage'
import Fabu from './src/userinfor/Fabu'
import Login from './src/common/Login'
import Register from './src/common/Register'


const App = () => {
   let isExit=false;
   let now =0;
   BackHandler.addEventListener('back',()=>{
       console.log(new Date().getTime());
       if(isExit){
         BackHandler.exitApp();
       }
         ToastAndroid.show('确定要退出吗',2000);
         isExit=true;
         setTimeout(()=>{
           isExit=false;
         },2000)
         return true;
       
   })
  
  

  let [isLogin,setLogin]=useState(false);//默认没有登录
  let [isInstall,setInstall]=useState(true);//设置第一次安装状态为true
  let init = ()=>{
		 AsyncStorage.getItem('isInstall')//进页面以后先获取isinstall值
		 .then(res=>{
		    	console.log('isinstall',res)
		    	if(res){           
			      	setInstall(false);
			 }
     })
    //  AsyncStorage.clear()
     AsyncStorage.getItem('user')
    .then(res=>{
       let user=JSON.parse(res)
       if(!user){
          SplashScreen.hide();
       }
       if(user&&user.token){
            setLogin(true);
            SplashScreen.hide();
         }
         if (user.status == '111' || user.status == '222') {
					SplashScreen.hide();
				}
         })
   }
  useEffect(()=>{
    //点完开始体验设置状态为false，才可以进行页面跳转
    init();
  },[])


  //子组件往父组件传，通过事件
  let afterstart=()=>{
    setInstall(false)
  }
  if(isInstall){
    return <View style={{flex:1}}>
              <SwiperPage afterInstall={afterstart}/>
         </View>
  }
  
  return (
    <Router
    >
        
        <Scene key='root'>
            
            <Scene component={Login} initial={!isLogin} key='lo' hideNavBar/>
            <Tabs 
                 key='tabbar'
                 hideNavBar={true}
                 activeTintColor='red'
                 inactiveTintColor='grey'
                 tabBarStyle={{backgroundColor:'white'}}

              >

                 {/* 首页 */}
                 <Scene key='login'
                        
                        title='首页'
                        component={Home
                        }
                        hideNavBar={true}
                        icon={
                          ({focused})=><Icon color={focused?'red':'grey'} 
                               name='vcard' size={22}/>
                         }
                       
                />
              
            
              {/* 分类*/}
                <Scene key='goodsPage'
                       title='商品分类'
                       component={Goods}
                       hideNavBar={true}
                    // focused是否选中
                    icon={
                           ({focused})=><Icon color={focused?'red':'grey'} 
                                name='cc' size={22}/>
                          }
                  
                />
               


                {/* 个人中心 */}
                <Scene 
                        key='userinfor'
                        icon={
                          ({focused})=><Icon color={focused?'red':'grey'} 
                               name='user-o' size={22}/
                      >}
                       title='个人中心'
                       component={Userinfor}
                       hideNavBar
                      />
            </Tabs>
             <Scene key='fabu' component={Fabu}  hideNavBar/>
             <Scene key='register' component={Register}  hideNavBar/>
            </Scene>
           
    </Router>
  );
}


export default App;

