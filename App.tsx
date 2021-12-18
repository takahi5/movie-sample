import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, SafeAreaView} from 'react-native';
import { WebView } from 'react-native-webview';

const html1 : string = `
  <html>
    <head></head>
    <body>
      <iframe width="640" height="360" src="https://ils-embed-player.netlify.app/?liveId=jok3y96jirzh0jf2&wsEndpoint=wss://ils-sink-eks-prod-1.m-pipe.net" frameborder="0"></iframe> 
    </body>
  </html>
`;



const html2 : string = `
  <html>
    <head></head>
    <body>
      <iframe id="ytplayer" type="text/html" width="640" height="360" src="https://www.youtube.com/embed/M7lc1UVf-VE?autoplay=1&origin=http://example.com" frameborder="0"></iframe>
    </body>
  </html>
`;

const html3 : string = `
  <html>
    <head></head>
    <body>
      <iframe src="https://player.vimeo.com/video/598322933?loop=1&autopause=0" width="640" height="360" frameborder="0"></iframe> 
    </body>
  </html>
`;



export default function App() {
  return (
    <SafeAreaView style={{flex: 1}}>
      <Text>超低遅延配信ページ</Text>
      <WebView 
        style={styles.container}
        source={{ uri: 'https://ils-embed-player.netlify.app/?liveId=jok3y96jirzh0jf2&wsEndpoint=wss://ils-sink-eks-prod-1.m-pipe.net' }}
        allowsInlineMediaPlayback={true}
      />

      <Text>超低遅延配信iframe</Text>
      <WebView 
        style={styles.container}
        source={{html: html1}} 
        allowsInlineMediaPlayback={true}
      />

      <Text>YouTube iframe</Text>
      <WebView
        style={styles.container}
        source={{html: html2}} 
        allowsInlineMediaPlayback={true}
      />

      <Text>Vimeo iframe</Text>
      <WebView
        style={styles.container}
        source={{html: html3}} 
        allowsInlineMediaPlayback={true}
      />
 
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
