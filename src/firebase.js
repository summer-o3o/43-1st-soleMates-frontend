import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyD-hf1Q3M8Tyu9-JkzTKd0ldpWE5vt6sHM', // 여기에 올바른 API 키를 입력하세요
  authDomain: 'YOUR_AUTH_DOMAIN',
  projectId: 'YOUR_PROJECT_ID',
  // 기타 필요한 구성 정보 입력
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

export const auth = firebase.auth();
export default firebase;
