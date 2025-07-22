// import { NavigationContainer } from "@react-navigation/native";
// import { createNativeStackNavigator } from "@react-navigation/native-stack";
// import React from "react";
// import SplashScreen from "../screens/splash";
// import OnboardingScreen from "../screens/onbordingScreen";
// import OnboardingScreen2 from "../screens/onboardScreen2";
// import OnboardingScreen3 from "../screens/onBordScreen3";
// import AllowLocation from "../screens/location";
// import LoginScreen from "../screens/login";
// import VerificationScreen from "../screens/otpverify";
// import RegisterScreen from "../screens/register";
// import DashboardScreen from "../screens/home";
// import { createDrawerNavigator } from '@react-navigation/drawer';
// import MyDocumentScreen from "../screens/mydocument";
// import CustomDrawerContent from "./customdrawer";
// import { StyleSheet } from "react-native";
// import EndPickupScreen from "../screens/endPickup";
// import StartPickupScreen from "../screens/startPickup";
// import AboutScreen from "../profileScreen/about";
// import EarningScreen from "../profileScreen/earnings";
// import FaqScreen from "../profileScreen/faq";
// import InviteFriendScreen from "../profileScreen/invitefriend";
// import MakeCopScreen from "../profileScreen/makeComp";
// import ManageDocScreen from "../profileScreen/manageDoc";
// import MyAccount from "../profileScreen/myaccount";
// import NotificationScreen from "../profileScreen/notification";
// import Privacypoli from "../profileScreen/privacypoli";
// import SosScreen from "../profileScreen/sos";
// import TermAndCondition from "../profileScreen/termsAndCon";
// import UpdateVehInfo from "../profileScreen/updateVehInfo";
// import InviteFriendAdvanced from "../profileScreen/invitefriNext";
// import Langauge from "../profileScreen/langauge";
// import EditCard from "../profileScreen/editCard";

// const Stack = createNativeStackNavigator()

// const StackRoutes = () => {
//   return (
//     <Stack.Navigator initialRouteName='splash' screenOptions={{ headerShown: false }} >
//       <Stack.Screen name='splash' component={SplashScreen}></Stack.Screen>
//       <Stack.Screen name='Onboarding' component={OnboardingScreen}></Stack.Screen>
//       <Stack.Screen name='Onboarding2' component={OnboardingScreen2}></Stack.Screen>
//       <Stack.Screen name='Onboarding3' component={OnboardingScreen3}></Stack.Screen>
//       <Stack.Screen name='allowlocation' component={AllowLocation}></Stack.Screen>
//       <Stack.Screen name='login' component={LoginScreen}></Stack.Screen>
//       <Stack.Screen name='otpverifiction' component={VerificationScreen}></Stack.Screen>
//       <Stack.Screen name='register' component={RegisterScreen}></Stack.Screen>
//       <Stack.Screen name='home' component={DashboardScreen}></Stack.Screen>
//       <Stack.Screen name='mydocument' component={MyDocumentScreen}></Stack.Screen>
//       <Stack.Screen name='endPickup' component={EndPickupScreen}></Stack.Screen>
//       <Stack.Screen name='startPickup' component={StartPickupScreen}></Stack.Screen>
//          <Stack.Screen name='inviteadvance' component={InviteFriendAdvanced}></Stack.Screen>
//             <Stack.Screen name='langauge' component={Langauge}></Stack.Screen>
//                   <Stack.Screen name='editcard' component={EditCard}></Stack.Screen>
//                                     <Stack.Screen name='invitefriend' component={InviteFriendScreen}></Stack.Screen>
                 
//     </Stack.Navigator>
//   )
// }

// const AppNavigation = () => {

//   const Drawer = createDrawerNavigator();

//   return <>
//     <NavigationContainer
//       style={styles.drewarBase}
//     >
//       <Drawer.Navigator style={styles.drewarBase} initialRouteName="StackRoutes"

//         screenOptions={{
//           headerShown: false,
//           drawerStyle: {
//             backgroundColor: '#3422F2',
//             color: "#FFFFFF"// ✅ drawer background color here
//           },
//           drawerLabelStyle: {
//             color: 'white', // ✅ Change text color
//             fontSize: 16,
//           },
//           drawerActiveTintColor: '#fff', // ✅ Active item color
//           drawerInactiveTintColor: '#ddd', // ✅ Inactive item color

//         }}
//         drawerContent={(props) => <CustomDrawerContent {...props}

//         />}
//       >
//         <Drawer.Screen name="StackRoutes" component={StackRoutes} options={{ headerShown: false }}  initialParams={{ screen: 'invitefriend' }}  />
//         <Drawer.Screen name="My Account" component={MyAccount} options={{ headerShown: false }} />
//         <Drawer.Screen name="Invite Friends" component={InviteFriendScreen} options={{ headerShown: false }} />
//         <Drawer.Screen name="Update Vehicle Info" component={UpdateVehInfo} options={{ headerShown: false }} />
//         <Drawer.Screen name="Earnings" component={EarningScreen} options={{ headerShown: false }} />
//         <Drawer.Screen name="Manage Documents" component={ManageDocScreen} options={{ headerShown: false }} />
//         <Drawer.Screen name="FAQ" component={FaqScreen} options={{ headerShown: false }} />

//         <Drawer.Screen name="SOS" component={SosScreen} options={{ headerShown: false }} />
//         <Drawer.Screen name="Make Complaints" component={MakeCopScreen} options={{ headerShown: false }} />

//         <Drawer.Screen name="Notification" component={NotificationScreen} options={{ headerShown: false }} />
//         <Drawer.Screen name="About" component={AboutScreen} options={{ headerShown: false }} />
//         <Drawer.Screen name="Privacy Policy" component={Privacypoli} options={{ headerShown: false }} />
//         <Drawer.Screen name="Term & Condition" component={TermAndCondition} options={{ headerShown: false }} />


//       </Drawer.Navigator>
//     </NavigationContainer>
//   </>
// }

// const styles = StyleSheet.create({
//   drewarBase: {
//     backgroundColor: '#3422F2',
//     padding: 0
//   }
// })

// export default AppNavigation;







// AppNavigation.js
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createDrawerNavigator } from '@react-navigation/drawer';
import React from "react";
import { StyleSheet } from "react-native";

// Screens
import SplashScreen from "../screens/splash";
import OnboardingScreen from "../screens/onbordingScreen";
import OnboardingScreen2 from "../screens/onboardScreen2";
import OnboardingScreen3 from "../screens/onBordScreen3";
import AllowLocation from "../screens/location";
import LoginScreen from "../screens/login";
import VerificationScreen from "../screens/otpverify";
import RegisterScreen from "../screens/register";
import DashboardScreen from "../screens/home";
import MyDocumentScreen from "../screens/mydocument";
import EndPickupScreen from "../screens/endPickup";
import StartPickupScreen from "../screens/startPickup";

// Drawer Screens
import CustomDrawerContent from "./customdrawer";
import AboutScreen from "../profileScreen/about";
import EarningScreen from "../profileScreen/earnings";
import FaqScreen from "../profileScreen/faq";
import MakeCopScreen from "../profileScreen/makeComp";
import ManageDocScreen from "../profileScreen/manageDoc";
import MyAccount from "../profileScreen/myaccount";
import NotificationScreen from "../profileScreen/notification";
import Privacypoli from "../profileScreen/privacypoli";
import SosScreen from "../profileScreen/sos";
import TermAndCondition from "../profileScreen/termsAndCon";
import UpdateVehInfo from "../profileScreen/updateVehInfo";

// Profile Flow Screens
import InviteFriendScreen from "../profileScreen/invitefriend";
import InviteFriendAdvanced from "../profileScreen/invitefriNext";
import Langauge from "../profileScreen/langauge";
import EditCard from "../profileScreen/editCard";
import HistoryScreen from "../profileScreen/history";

// Stack navigators
const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

const ProfileStack = () => (
  <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="My Account" component={MyAccount} />
    <Stack.Screen name="InviteFriendAdvanced" component={InviteFriendAdvanced} />
    <Stack.Screen name="Langauge" component={Langauge} />
      <Stack.Screen name="hostory" component={HistoryScreen} />
    <Stack.Screen name="EditCard" component={EditCard} />
  </Stack.Navigator>
);

const MainStack = () => (
  <Stack.Navigator initialRouteName='splash' screenOptions={{ headerShown: false }}>
    <Stack.Screen name='splash' component={SplashScreen} />
    <Stack.Screen name='Onboarding' component={OnboardingScreen} />
    <Stack.Screen name='Onboarding2' component={OnboardingScreen2} />
    <Stack.Screen name='Onboarding3' component={OnboardingScreen3} />
    <Stack.Screen name='allowlocation' component={AllowLocation} />
    <Stack.Screen name='login' component={LoginScreen} />
    <Stack.Screen name='otpverifiction' component={VerificationScreen} />
    <Stack.Screen name='register' component={RegisterScreen} />
    <Stack.Screen name='home' component={DashboardScreen} />
    <Stack.Screen name='mydocument' component={MyDocumentScreen} />
    <Stack.Screen name='endPickup' component={EndPickupScreen} />
    <Stack.Screen name='startPickup' component={StartPickupScreen} />
  </Stack.Navigator>
);

const AppNavigation = () => {
  return (
    <NavigationContainer style={styles.drewarBase}>
      <Drawer.Navigator
        initialRouteName="Main"
        screenOptions={{
          headerShown: false,
          drawerStyle: { backgroundColor: '#3422F2' },
          drawerLabelStyle: {
            color: 'white',
            fontSize: 16,
          },
          drawerActiveTintColor: '#fff',
          drawerInactiveTintColor: '#ddd',
        }}
        drawerContent={(props) => <CustomDrawerContent {...props} />}
      >
        <Drawer.Screen name="Main" component={MainStack} options={{ headerShown: false }} />
        <Drawer.Screen
  name="Profile"
  component={ProfileStack}
  options={{ title: "My Account" }} // This shows "My Account" in drawer
/>
      
          <Drawer.Screen name="Invite Friend" component={InviteFriendScreen} />
        <Drawer.Screen name="Update Vehicle Info" component={UpdateVehInfo} />
        <Drawer.Screen name="Earnings" component={EarningScreen} />
        <Drawer.Screen name="Manage Documents" component={ManageDocScreen} />
        <Drawer.Screen name="FAQ" component={FaqScreen} />
        <Drawer.Screen name="SOS" component={SosScreen} />
        <Drawer.Screen name="Make Complaints" component={MakeCopScreen} />
        <Drawer.Screen name="Notification" component={NotificationScreen} />
        <Drawer.Screen name="About" component={AboutScreen} />
        <Drawer.Screen name="Privacy Policy" component={Privacypoli} />
        <Drawer.Screen name="Term & Condition" component={TermAndCondition} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  drewarBase: {
    backgroundColor: '#3422F2',
    padding: 0,
  },
});

export default AppNavigation;
