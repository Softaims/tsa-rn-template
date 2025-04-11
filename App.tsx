import { StatusBar } from 'react-native';
import Navigator from './src';

export default function App() {
  return (
    <>
      {/* <StatusBar barStyle={themeTag==='light'? 'dark-content':'light-content'} /> */}
      <Navigator />
    </>
  );
}